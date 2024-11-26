/*
 * testdurfmt_am_ET.js - test the duration formatter object
 *
 * Copyright © 2015,2017, 2024 JEDLSoft
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

module.exports.testdurfmt_am_ET = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDurFmtAMFormatShortDefaultStyle1: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "am-ET",
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
        test.equal(duration.toString(), "1 ዓመት፣ 1 ወር፣ 1 ሳምንት፣ 1 ቀ፣ 1 ሰ፣ 1 ደ፣ 1 ሰ");
        test.done();
    },
    testDurFmtAMFormatShortText1: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "am-ET",
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
        test.equal(duration.toString(), "1 ዓመት፣ 1 ወር፣ 1 ሳምንት፣ 1 ቀ፣ 1 ሰ፣ 1 ደ፣ 1 ሰ");
        test.done();
    },
    testDurFmtAMFormatShortClock1: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "am-ET",
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
        test.equal(duration.toString(), "1 ዓመት፣ 1 ወር፣ 1 ሳምንት፣ 1 ቀ፣ 1:01:01");
        test.done();
    },
    testDurFmtAMFormatMedium1: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "am-ET",
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
        test.equal(duration.toString(), "1 ዓመት፣ 1 ወር፣ 1 ሳምንት፣ 1 ቀ፣ 1 ሰ፣ 1 ደ፣ 1 ሰ");
        test.done();
    },
    testDurFmtAMFormatLong1: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "am-ET",
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
        test.equal(duration.toString(), "1 ዓመት፣ 1 ወራት፣ 1 ሳምንት፣ 1 ቀናት፣ 1 ሰዓ፣ 1 ደቂ፣ 1 ሰከ");
        test.done();
    },
    testDurFmtAMFormatFull1: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "am-ET",
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
        test.equal(duration.toString(), '1 ዓመት፣ 1 ወር፣ 1 ሳምንት፣ 1 ቀናት፣ 1 ሰዓት፣ 1 ደቂቃ እና 1 ሰከንድ');
        test.done();
    },
    testDurFmtAMFormatShortDefaultStyle2: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "am-ET",
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
        test.equal(duration.toString(), "2 ዓ፣ 2 ወር፣ 2 ሳምንት፣ 2 ቀ፣ 2 ሰ፣ 2 ደ፣ 2 ሰ");
        test.done();
    },
    testDurFmtAMFormatShortText2: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "am-ET",
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
        test.equal(duration.toString(), "2 ዓ፣ 2 ወር፣ 2 ሳምንት፣ 2 ቀ፣ 2 ሰ፣ 2 ደ፣ 2 ሰ");
        test.done();
    },
    testDurFmtAMFormatShortClock2: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "am-ET",
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
        test.equal(duration.toString(), "2 ዓ፣ 2 ወር፣ 2 ሳምንት፣ 2 ቀ፣ 2:02:02");
        test.done();
    },
    testDurFmtAMFormatMedium2: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "am-ET",
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
        test.equal(duration.toString(), "2 ዓ፣ 2 ወር፣ 2 ሳምንት፣ 2 ቀ፣ 2 ሰ፣ 2 ደ፣ 2 ሰ");
        test.done();
    },
    testDurFmtAMFormatLong2: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "am-ET",
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
        test.equal(duration.toString(), "2 ዓመታት፣ 2 ወራት፣ 2 ሳምንታት፣ 2 ቀናት፣ 2 ሰዓ፣ 2 ደቂቃ፣ 2 ሰከ");
        test.done();
    },
    testDurFmtAMFormatFull2: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "am-ET",
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
        test.equal(duration.toString(), '2 ዓመታት፣ 2 ወራት፣ 2 ሳምንታት፣ 2 ቀናት፣ 2 ሰዓቶች፣ 2 ደቂቃዎች እና 2 ሰከንዶች');
        test.done();
    },
    testDurFmtAMFormatShortDefaultStyle3: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "am-ET",
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
        test.equal(duration.toString(), "3 ዓ፣ 3 ወር፣ 3 ሳምንት፣ 3 ቀ፣ 3 ሰ፣ 3 ደ፣ 3 ሰ");
        test.done();
    },
    testDurFmtAMFormatShortText3: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "am-ET",
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
        test.equal(duration.toString(), "3 ዓ፣ 3 ወር፣ 3 ሳምንት፣ 3 ቀ፣ 3 ሰ፣ 3 ደ፣ 3 ሰ");
        test.done();
    },
    testDurFmtAMFormatShortClock3: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "am-ET",
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
        test.equal(duration.toString(), "3 ዓ፣ 3 ወር፣ 3 ሳምንት፣ 3 ቀ፣ 3:03:03");
        test.done();
    },
    testDurFmtAMFormatMedium3: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "am-ET",
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
        test.equal(duration.toString(), "3 ዓ፣ 3 ወር፣ 3 ሳምንት፣ 3 ቀ፣ 3 ሰ፣ 3 ደ፣ 3 ሰ");
        test.done();
    },
    testDurFmtAMFormatLong3: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "am-ET",
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
        test.equal(duration.toString(), "3 ዓመታት፣ 3 ወራት፣ 3 ሳምንታት፣ 3 ቀናት፣ 3 ሰዓ፣ 3 ደቂቃ፣ 3 ሰከ");
        test.done();
    },
    testDurFmtAMFormatFull3: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "am-ET",
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
        test.equal(duration.toString(), '3 ዓመታት፣ 3 ወራት፣ 3 ሳምንታት፣ 3 ቀናት፣ 3 ሰዓቶች፣ 3 ደቂቃዎች እና 3 ሰከንዶች');
        test.done();
    },
    testDurFmtAMFormatShortDefaultStyle11: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "am-ET",
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
        test.equal(duration.toString(), "11 ዓ፣ 11 ወር፣ 11 ሳምንት፣ 11 ቀ፣ 11 ሰ፣ 11 ደ፣ 11 ሰ");
        test.done();
    },
    testDurFmtAMFormatShortText11: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "am-ET",
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
        test.equal(duration.toString(), "11 ዓ፣ 11 ወር፣ 11 ሳምንት፣ 11 ቀ፣ 11 ሰ፣ 11 ደ፣ 11 ሰ");
        test.done();
    },
    testDurFmtAMFormatShortClock11: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "am-ET",
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
        test.equal(duration.toString(), "11 ዓ፣ 11 ወር፣ 11 ሳምንት፣ 11 ቀ፣ 11:11:11");
        test.done();
    },
    testDurFmtAMFormatMedium11: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "am-ET",
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
        test.equal(duration.toString(), "11 ዓ፣ 11 ወር፣ 11 ሳምንት፣ 11 ቀ፣ 11 ሰ፣ 11 ደ፣ 11 ሰ");
        test.done();
    },
    testDurFmtAMFormatLong11: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "am-ET",
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
        test.equal(duration.toString(), "11 ዓመታት፣ 11 ወራት፣ 11 ሳምንታት፣ 11 ቀናት፣ 11 ሰዓ፣ 11 ደቂቃ፣ 11 ሰከ");
        test.done();
    },
    testDurFmtAMFormatFull11: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "am-ET",
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
        test.equal(duration.toString(), '11 ዓመታት፣ 11 ወራት፣ 11 ሳምንታት፣ 11 ቀናት፣ 11 ሰዓቶች፣ 11 ደቂቃዎች እና 11 ሰከንዶች');
        test.done();
    },
    testDurFmtAMAsync1: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "am-ET",
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
                test.equal(duration.toString(),'1 ዓመት፣ 1 ወር፣ 1 ሳምንት፣ 1 ቀናት፣ 1 ሰዓት፣ 1 ደቂቃ እና 1 ሰከንድ');
                test.done();
            }
        });
    },
    testDurFmtAMAsyncWithLocale1: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "am-ET",
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
                test.equal(duration.toString(), '1 ዓመት፣ 1 ወር፣ 1 ሳምንት፣ 1 ቀናት፣ 1 ሰዓት፣ 1 ደቂቃ እና 1 ሰከንድ');
                test.done();
            }
        });
    },
    testDurFmtAMAsync2: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "am-ET",
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
                test.equal(duration.toString(), "2 ዓመታት፣ 2 ወራት፣ 2 ሳምንታት፣ 2 ቀናት፣ 2 ሰዓቶች፣ 2 ደቂቃዎች፣ እና 2 ሰከንዶች");
                test.done();
            }
        });
    },
    testDurFmtAMAsyncWithLocale2: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "am-ET",
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
                test.equal(duration.toString(), "2 ዓመታት፣ 2 ወራት፣ 2 ሳምንታት፣ 2 ቀናት፣ 2 ሰዓቶች፣ 2 ደቂቃዎች፣ እና 2 ሰከንዶች");
                test.done();
            }
        });
    },
    testDurFmtAMAsync3: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "am-ET",
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
                test.equal(duration.toString(), '3 ዓመታት፣ 3 ወራት፣ 3 ሳምንታት፣ 3 ቀናት፣ 3 ሰዓቶች፣ 3 ደቂቃዎች እና 3 ሰከንዶች');
                test.done();
            }
        });
    },
    testDurFmtAMAsyncWithLocale3: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "am-ET",
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
                test.equal(duration.toString(), '3 ዓመታት፣ 3 ወራት፣ 3 ሳምንታት፣ 3 ቀናት፣ 3 ሰዓቶች፣ 3 ደቂቃዎች እና 3 ሰከንዶች');
                test.done();
            }
        });
    },
    testDurFmtAMAsync11: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "am-ET",
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
                test.equal(duration.toString(), '11 ዓመታት፣ 11 ወራት፣ 11 ሳምንታት፣ 11 ቀናት፣ 11 ሰዓቶች፣ 11 ደቂቃዎች እና 11 ሰከንዶች');
                test.done();
            }
        });
    },
    testDurFmtAMAsyncWithLocale11: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "am-ET",
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
                test.equal(duration.toString(), '11 ዓመታት፣ 11 ወራት፣ 11 ሳምንታት፣ 11 ቀናት፣ 11 ሰዓቶች፣ 11 ደቂቃዎች እና 11 ሰከንዶች');
                test.done();
            }
        });
    },
    testDurFmtAMFormatShortClockAsync1: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "am-ET",
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
                test.equal(duration.toString(), "1 ዓመት፣ 1 ወር፣ 1 ሳምንት፣ 1 ቀ፣ 1:01:01");
                test.done();
            }
        });
    },
    testDurFmtAMAsync2: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "am-ET",
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
                test.equal(duration.toString(), '2 ዓመታት፣ 2 ወራት፣ 2 ሳምንታት፣ 2 ቀናት፣ 2 ሰዓቶች፣ 2 ደቂቃዎች እና 2 ሰከንዶች');
                test.done();
            }
        });
    },
    testDurFmtAMAsyncWithLocale2: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "am-ET",
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
                test.equal(duration.toString(), '2 ዓመታት፣ 2 ወራት፣ 2 ሳምንታት፣ 2 ቀናት፣ 2 ሰዓቶች፣ 2 ደቂቃዎች እና 2 ሰከንዶች');
                test.done();
            }
        });
    },
    testDurFmtAMFormatWesternShortClockAsync1: function(test) {
        test.expect(2);
        new DurationFmt({
            locale: "am-ET",
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
                test.equal(duration.toString(), "1 ዓመት፣ 1 ወር፣ 1 ሳምንት፣ 1 ቀ፣ 1:01:01");
                test.done();
            }
        });
    }
};