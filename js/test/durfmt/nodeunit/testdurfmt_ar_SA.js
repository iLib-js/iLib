/*
 * testdurfmt_ar_SA.js - test the duration formatter object
 *
 * Copyright © 2012-2015,2017, JEDLSoft
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
    var DurationFmt = require("../.././../lib/DurationFmt.js");
}
//test cases for ar-SA

if (typeof(ilib) === "undefined") {
    var ilib = require("../../../lib/ilib.js");
}

module.exports.testdurfmt_ar_SA = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testDurFmtARFormatShortDefaultStyle1: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ar-SA",
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
        test.equal(duration.toString(), "‏١ سنة، ١ شهر، ١ أ، ١ ي، ١ س، ١ د، ١ ث");
        test.done();
    },

    testDurFmtARFormatShortText1: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ar-SA",
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
        test.equal(duration.toString(), "‏١ سنة، ١ شهر، ١ أ، ١ ي، ١ س، ١ د، ١ ث");
        test.done();
    },

    testDurFmtARFormatShortClock1: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ar-SA",
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
        test.equal(duration.toString(), "‏١ سنة، ١ شهر، ١ أ، ١ ي، ‏١:٠١:٠١");
        test.done();
    },

    testDurFmtARFormatMedium1: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ar-SA",
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
        test.equal(duration.toString(), "‏١ سنة، ١ شهر، ١ أ، ١ ي، ١ س، ١ د، ١ ث");
        test.done();
    },

    testDurFmtARFormatLong1: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ar-SA",
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
        test.equal(duration.toString(), "‏سنة واحدة، وشهر، وأسبوع، ويوم، و١ س، و١ د، و١ ث");
        test.done();
    },

    testDurFmtARFormatFull1: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ar-SA",
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
        test.equal(duration.toString(), "‏سنة، وشهر، وأسبوع، ويوم، وساعة، ودقيقة، وثانية");
        test.done();
    },

    testDurFmtARFormatShortDefaultStyle2: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ar-SA",
            length: "short"
        });
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
        test.equal(duration.toString(), "‏٢ سنة، ٢ شهر، ٢ أ، ٢ ي، ٢ س، ٢ د، ٢ ث");
        test.done();
    },

    testDurFmtARFormatShortText2: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ar-SA",
            length: "short",
            style: "text"
        });
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
        test.equal(duration.toString(), "‏٢ سنة، ٢ شهر، ٢ أ، ٢ ي، ٢ س، ٢ د، ٢ ث");
        test.done();
    },

    testDurFmtARFormatShortClock2: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ar-SA",
            length: "short",
            style: "clock"
        });
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
        test.equal(duration.toString(), "‏٢ سنة، ٢ شهر، ٢ أ، ٢ ي، ‏٢:٠٢:٠٢");
        test.done();
    },

    testDurFmtARFormatMedium2: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ar-SA",
            length: "medium"
        });
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
        test.equal(duration.toString(), "‏٢ سنة، ٢ شهر، ٢ أ، ٢ ي، ٢ س، ٢ د، ٢ ث");
        test.done();
    },

    testDurFmtARFormatLong2: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ar-SA",
            length: "long"
        });
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
        test.equal(duration.toString(), "‏سنتان، و٢ شهر، وأسبوعان، ويومان، و٢ س، و٢ د، و٢ ث");
        test.done();
    },

    testDurFmtARFormatFull2: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ar-SA",
            length: "full"
        });
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
        test.equal(duration.toString(), "‏سنتان، وشهران، وأسبوعان، ويومان، وساعتان، ودقيقتان، وثانيتان");
        test.done();
    },

    testDurFmtARFormatShortDefaultStyle3: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ar-SA",
            length: "short"
        });
        test.ok(fmt !== null);

        var duration = fmt.format({
            year: 3,
            month: 3,
            week: 3,
            day: 3,
            hour: 3,
            minute: 3,
            second: 3
        });
        test.equal(duration.toString(), "‏٣ سنة، ٣ شهر، ٣ أ، ٣ ي، ٣ س، ٣ د، ٣ ث");
        test.done();
    },

    testDurFmtARFormatShortText3: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ar-SA",
            length: "short",
            style: "text"
        });
        test.ok(fmt !== null);

        var duration = fmt.format({
            year: 3,
            month: 3,
            week: 3,
            day: 3,
            hour: 3,
            minute: 3,
            second: 3
        });
        test.equal(duration.toString(), "‏٣ سنة، ٣ شهر، ٣ أ، ٣ ي، ٣ س، ٣ د، ٣ ث");
        test.done();
    },

    testDurFmtARFormatShortClock3: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ar-SA",
            length: "short",
            style: "clock"
        });
        test.ok(fmt !== null);

        var duration = fmt.format({
            year: 3,
            month: 3,
            week: 3,
            day: 3,
            hour: 3,
            minute: 3,
            second: 3
        });
        test.equal(duration.toString(), "‏٣ سنة، ٣ شهر، ٣ أ، ٣ ي، ‏٣:٠٣:٠٣");
        test.done();
    },

    testDurFmtARFormatMedium3: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ar-SA",
            length: "medium"
        });
        test.ok(fmt !== null);

        var duration = fmt.format({
            year: 3,
            month: 3,
            week: 3,
            day: 3,
            hour: 3,
            minute: 3,
            second: 3
        });
        test.equal(duration.toString(), "‏٣ سنة، ٣ شهر، ٣ أ، ٣ ي، ٣ س، ٣ د، ٣ ث");
        test.done();
    },

    testDurFmtARFormatLong3: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ar-SA",
            length: "long"
        });
        test.ok(fmt !== null);

        var duration = fmt.format({
            year: 3,
            month: 3,
            week: 3,
            day: 3,
            hour: 3,
            minute: 3,
            second: 3
        });
        test.equal(duration.toString(), "‏٣ سنة، و٣ شهر، و٣ أسابيع، و٣ يوم، و٣ س، و٣ د، و٣ ث");
        test.done();
    },

    testDurFmtARFormatFull3: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ar-SA",
            length: "full"
        });
        test.ok(fmt !== null);

        var duration = fmt.format({
            year: 3,
            month: 3,
            week: 3,
            day: 3,
            hour: 3,
            minute: 3,
            second: 3
        });
        test.equal(duration.toString(), "‏٣ سنوات، و٣ أشهر، و٣ أسابيع، و٣ أيام، و٣ ساعات، و٣ دقائق، و٣ ثوان");
        test.done();
    },

    testDurFmtARFormatShortDefaultStyle11: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ar-SA",
            length: "short"
        });
        test.ok(fmt !== null);

        var duration = fmt.format({
            year: 11,
            month: 11,
            week: 11,
            day: 11,
            hour: 11,
            minute: 11,
            second: 11
        });
        test.equal(duration.toString(), "‏١١ سنة، ١١ شهر، ١١ أ، ١١ ي، ١١ س، ١١ د، ١١ ث");
        test.done();
    },

    testDurFmtARFormatShortText11: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ar-SA",
            length: "short",
            style: "text"
        });
        test.ok(fmt !== null);

        var duration = fmt.format({
            year: 11,
            month: 11,
            week: 11,
            day: 11,
            hour: 11,
            minute: 11,
            second: 11
        });
        test.equal(duration.toString(), "‏١١ سنة، ١١ شهر، ١١ أ، ١١ ي، ١١ س، ١١ د، ١١ ث");
        test.done();
    },

    testDurFmtARFormatShortClock11: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ar-SA",
            length: "short",
            style: "clock"
        });
        test.ok(fmt !== null);

        var duration = fmt.format({
            year: 11,
            month: 11,
            week: 11,
            day: 11,
            hour: 11,
            minute: 11,
            second: 11
        });
        test.equal(duration.toString(), "‏١١ سنة، ١١ شهر، ١١ أ، ١١ ي، ‏١١:١١:١١");
        test.done();
    },

    testDurFmtARFormatMedium11: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ar-SA",
            length: "medium"
        });
        test.ok(fmt !== null);

        var duration = fmt.format({
            year: 11,
            month: 11,
            week: 11,
            day: 11,
            hour: 11,
            minute: 11,
            second: 11
        });
        test.equal(duration.toString(), "‏١١ سنة، ١١ شهر، ١١ أ، ١١ ي، ١١ س، ١١ د، ١١ ث");
        test.done();
    },

    testDurFmtARFormatLong11: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ar-SA",
            length: "long"
        });
        test.ok(fmt !== null);

        var duration = fmt.format({
            year: 11,
            month: 11,
            week: 11,
            day: 11,
            hour: 11,
            minute: 11,
            second: 11
        });
        test.equal(duration.toString(), "‏١١ سنة، و١١ شهر، و١١ أسبوعًا، و١١ يوم، و١١ س، و١١ د، و١١ ث");
        test.done();
    },

    testDurFmtARFormatFull11: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ar-SA",
            length: "full"
        });
        test.ok(fmt !== null);

        var duration = fmt.format({
            year: 11,
            month: 11,
            week: 11,
            day: 11,
            hour: 11,
            minute: 11,
            second: 11
        });
        test.equal(duration.toString(), "‏١١ سنة، و١١ شهرًا، و١١ أسبوعًا، و١١ يومًا، و١١ ساعة، و١١ دقيقة، و١١ ثانية");
        test.done();
    },

    testDurFmtARAsync1: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "ar-SA",
            length: "full",
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
                test.equal(duration.toString(), "‏سنة، وشهر، وأسبوع، ويوم، وساعة، ودقيقة، وثانية");
                test.done();
            }
        });
    },

    testDurFmtARAsyncWithLocale1: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "ar-SA",
            length: "full",
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
                test.equal(duration.toString(), "‏سنة، وشهر، وأسبوع، ويوم، وساعة، ودقيقة، وثانية");
                test.done();
            }
        });
    },

    testDurFmtARAsync2: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "ar-SA",
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
                test.equal(duration.toString(), "‏سنتان، وشهران، وأسبوعان، ويومان، وساعتان، ودقيقتان، وثانيتان");
                test.done();
            }
        });
    },

    testDurFmtARAsyncWithLocale2: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "ar-SA",
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
                test.equal(duration.toString(), "‏سنتان، شهران، أسبوعان، يومان، ساعتان، دقيقتان، و ثانيتان");
                test.done();
            }
        });
    },

    testDurFmtARAsync3: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "ar-SA",
            length: "full",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);

                var duration = fmt.format({
                    year: 3,
                    month: 3,
                    week: 3,
                    day: 3,
                    hour: 3,
                    minute: 3,
                    second: 3
                });
                test.equal(duration.toString(), "‏٣ سنوات، و٣ أشهر، و٣ أسابيع، و٣ أيام، و٣ ساعات، و٣ دقائق، و٣ ثوان");
                test.done();
            }
        });
    },

    testDurFmtARAsyncWithLocale3: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "ar-SA",
            length: "full",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);

                var duration = fmt.format({
                    year: 3,
                    month: 3,
                    week: 3,
                    day: 3,
                    hour: 3,
                    minute: 3,
                    second: 3
                });
                test.equal(duration.toString(), "‏٣ سنوات، و٣ أشهر، و٣ أسابيع، و٣ أيام، و٣ ساعات، و٣ دقائق، و٣ ثوان");
                test.done();
            }
        });
    },

    testDurFmtARAsync11: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "ar-SA",
            length: "full",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);

                var duration = fmt.format({
                    year: 11,
                    month: 11,
                    week: 11,
                    day: 11,
                    hour: 11,
                    minute: 11,
                    second: 11
                });
                test.equal(duration.toString(), "‏١١ سنة، و١١ شهرًا، و١١ أسبوعًا، و١١ يومًا، و١١ ساعة، و١١ دقيقة، و١١ ثانية");
                test.done();
            }
        });
    },

    testDurFmtARAsyncWithLocale11: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "ar-SA",
            length: "full",
            sync: false,
            onLoad: function (fmt) {
                test.ok(fmt !== null);

                var duration = fmt.format({
                    year: 11,
                    month: 11,
                    week: 11,
                    day: 11,
                    hour: 11,
                    minute: 11,
                    second: 11
                });
                test.equal(duration.toString(), "‏١١ سنة، و١١ شهرًا، و١١ أسبوعًا، و١١ يومًا، و١١ ساعة، و١١ دقيقة، و١١ ثانية");
                test.done();
            }
        });
    },

    testDurFmtARFormatShortClockAsync1: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "ar-SA",
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
                test.equal(duration.toString(), "‏١ سنة، ١ شهر، ١ أ، ١ ي، ‏١:٠١:٠١");
                test.done();
            }
        });
    },



    testDurFmtARFormatWesternShortDefaultStyle1: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ar-SA",
            length: "short",
            useNative: false
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
        test.equal(duration.toString(), "‏1 سنة، 1 شهر، 1 أ، 1 ي، 1 س، 1 د، 1 ث");
        test.done();
    },

    testDurFmtARFormatWesternShortText1: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ar-SA",
            length: "short",
            style: "text",
            useNative: false
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
        test.equal(duration.toString(), "‏1 سنة، 1 شهر، 1 أ، 1 ي، 1 س، 1 د، 1 ث");
        test.done();
    },

    testDurFmtARFormatWesternShortClock1: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ar-SA",
            length: "short",
            style: "clock",
            useNative: false
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
        test.equal(duration.toString(), "‏1 سنة، 1 شهر، 1 أ، 1 ي، ‏1:01:01");
        test.done();
    },

    testDurFmtARFormatWesternMedium1: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ar-SA",
            length: "medium",
            useNative: false
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
        test.equal(duration.toString(), "‏1 سنة، 1 شهر، 1 أ، 1 ي، 1 س، 1 د، 1 ث");
        test.done();
    },

    testDurFmtARFormatWesternLong1: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ar-SA",
            length: "long",
            useNative: false
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
        test.equal(duration.toString(), "‏سنة واحدة، وشهر، وأسبوع، ويوم، و1 س، و1 د، و1 ث");
        test.done();
    },

    testDurFmtARFormatWesternFull1: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ar-SA",
            length: "full",
            useNative: false
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
        test.equal(duration.toString(), "‏سنة، وشهر، وأسبوع، ويوم، وساعة، ودقيقة، وثانية");
        test.done();
    },


    testDurFmtARAsync2: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "ar-SA",
            length: "full",
            useNative: false,
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
                test.equal(duration.toString(), "‏سنتان، وشهران، وأسبوعان، ويومان، وساعتان، ودقيقتان، وثانيتان");
                test.done();
            }
        });
    },

    testDurFmtARAsyncWithLocale2: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "ar-SA",
            length: "full",
            useNative: false,
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
                test.equal(duration.toString(), "‏سنتان، وشهران، وأسبوعان، ويومان، وساعتان، ودقيقتان، وثانيتان");
                test.done();
            }
        });
    },

    testDurFmtARFormatWesternShortClockAsync1: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "ar-SA",
            length: "short",
            style: "clock",
            useNative: false,
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
                test.equal(duration.toString(), "‏1 سنة، 1 شهر، 1 أ، 1 ي، ‏1:01:01");
                test.done();
            }
        });
    }

};
