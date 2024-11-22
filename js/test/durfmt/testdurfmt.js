/*
 * testdurfmt.js - test the duration formatter object
 *
 * Copyright © 2012-2024, JEDLSoft
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

function getChromeVersion () {
    var raw = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
    return raw ? parseInt(raw[2], 10) : false;
}

module.exports.testdurfmt = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testDurFmtConstructorEmpty: function(test) {
        test.expect(1);
        var fmt = new DurationFmt();

        test.ok(fmt !== null);
        test.done();
    },
    testDurFmtConstructorDefaultLocale: function(test) {
        test.expect(2);
        var fmt = new DurationFmt();

        test.ok(fmt !== null);

        test.equal(fmt.getLocale().toString(), "en-US");
        test.done();
    },
    testDurFmtGetLength: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({length: "full"});
        test.ok(fmt !== null);

        test.equal(fmt.getLength(), "full");
        test.done();
    },
    testDurFmtGetLengthDefault: function(test) {
        test.expect(2);
        var fmt = new DurationFmt();
        test.ok(fmt !== null);

        test.equal(fmt.getLength(), "short");
        test.done();
    },
    testDurFmtGetLengthBogus: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({length: "asdf"});
        test.ok(fmt !== null);

        test.equal(fmt.getLength(), "short");
        test.done();
    },
    testDurFmtGetLocale: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({locale: "de-DE"});
        test.ok(fmt !== null);

        test.equal(fmt.getLocale().toString(), "de-DE");
        test.done();
    },
    testDurFmtGetLocaleDefault: function(test) {
        test.expect(2);
        var fmt = new DurationFmt();
        test.ok(fmt !== null);

        test.equal(fmt.getLocale().toString(), "en-US");
        test.done();
    },
    testDurFmtGetLocaleBogus: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({locale: "zyy-XX"});
        test.ok(fmt !== null);

        test.equal(fmt.getLocale().toString(), "zyy-XX");
        test.done();
    },
    testDurFmtGetStyleDefault: function(test) {
        test.expect(2);
        var fmt = new DurationFmt();
        test.ok(fmt !== null);

        test.equal(fmt.getStyle(), "text");
        test.done();
    },
    testDurFmtGetStyleText: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({style: "text"});
        test.ok(fmt !== null);

        test.equal(fmt.getStyle(), "text");
        test.done();
    },
    testDurFmtGetStyleClock: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({style: "clock"});
        test.ok(fmt !== null);

        test.equal(fmt.getStyle(), "clock");
        test.done();
    },
    testDurFmtGetStyleBogus: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({style: "asdf"});
        test.ok(fmt !== null);

        test.equal(fmt.getStyle(), "text");
        test.done();
    },
    testDurFmtFormatShortText: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
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
            second: 1,
            millisecond: 1
        });
        test.equal(duration.toString(), "1y 1m 1w 1d 1h 1m 1s 1ms");
        test.done();
    },
    testDurFmtFormatShortClock: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
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
            second: 1,
            millisecond: 1
        });
        test.equal(duration.toString(), "1y 1m 1w 1d 1:01:01");
        test.done();
    },
    testDurFmtFormatShortExceedClockLimitsNoWrap: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            length: "short",
            style: "clock"
        });
        test.ok(fmt !== null);

        var duration = fmt.format({
            year: 1,
            month: 1,
            week: 1,
            day: 1,
            hour: 36,
            minute: 65,
            second: 66
        });
        test.equal(duration.toString(), "1y 1m 1w 1d 36:65:66");
        test.done();
    },
    testDurFmtFormatShortClockNoMinutesSeconds: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            length: "short",
            style: "clock"
        });
        test.ok(fmt !== null);

        var duration = fmt.format({
            year: 1,
            month: 1,
            week: 1,
            day: 1,
            hour: 1
        });
        test.equal(duration.toString(), "1y 1m 1w 1d 1:00");
        test.done();
    },
    testDurFmtFormatShortTextNoMinutesSeconds: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            length: "short",
            style: "text"
        });
        test.ok(fmt !== null);

        var duration = fmt.format({
            year: 1,
            month: 1,
            week: 1,
            day: 1,
            hour: 1
        });
        test.equal(duration.toString(), "1y 1m 1w 1d 1h");
        test.done();
    },
    testDurFmtFormatMedium: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
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
            second: 1,
            millisecond: 1
        });
        test.equal(duration.toString(), "1y, 1m, 1w, 1d, 1h, 1m, 1s, 1ms");
        test.done();
    },
    testDurFmtFormatLongSingle: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
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
            second: 1,
            millisecond: 1
        });
        test.equal(duration.toString(), "1 yr, 1 mth, 1 wk, 1 day, 1 hr, 1 min, 1 sec, 1 ms");
        test.done();
    },
    testDurFmtFormatFullSingle: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
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
            second: 1,
            millisecond: 1
        });
        test.equal(duration.toString(), "1 year, 1 month, 1 week, 1 day, 1 hour, 1 minute, 1 second, 1 millisecond");
        test.done();
    },
    testDurFmtFormatFullSingle_en_GB: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            length: "full",
            locale: "en-GB"
        });
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
        test.equal(duration.toString(), "1 year, 1 month, 1 week, 1 day, 1 hour, 1 minute, 1 second, 1 millisecond");
        test.done();
    },
    testDurFmtFormatFullSingleNotAllFields: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            length: "full"
        });
        test.ok(fmt !== null);

        var duration = fmt.format({
            year: 1,
            week: 1,
            day: 1,
            minute: 1
        });
        test.equal(duration.toString(), "1 year, 1 week, 1 day, 1 minute");
        test.done();
    },
    testDurFmtFormatFullSingleNotAllFields_en_GB: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            length: "full",
            locale: "en-GB"
        });
        test.ok(fmt !== null);

        var duration = fmt.format({
            year: 1,
            week: 1,
            day: 1,
            minute: 1
        });
        test.equal(duration.toString(), "1 year, 1 week, 1 day, 1 minute");
        test.done();
    },
    testDurFmtFormatLongPlural: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
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
            second: 2,
            millisecond: 2
        });
        test.equal(duration.toString(), "2 yrs, 2 mths, 2 wks, 2 days, 2 hr, 2 min, 2 sec, 2 ms");
        test.done();
    },
    testDurFmtFormatFullPlural: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
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
            second: 2,
            millisecond: 2
        });
        test.equal(duration.toString(), "2 years, 2 months, 2 weeks, 2 days, 2 hours, 2 minutes, 2 seconds, 2 milliseconds");
        test.done();
    },
    testDurFmtFormatFullPlural_en_GB: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            length: "full",
            locale: "en-GB"
        });
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
    },
    testDurFmtFormatShortDEDefaultStyle: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "de-DE",
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
            second: 1,
            millisecond: 1
        });
        test.equal(duration.toString(), "1 J, 1 M, 1 W, 1 T, 1 Std., 1 Min., 1 Sek., 1 ms");
        test.done();
    },
    testDurFmtFormatShortDEText: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "de-DE",
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
            second: 1,
            millisecond: 1
        });
        test.equal(duration.toString(), "1 J, 1 M, 1 W, 1 T, 1 Std., 1 Min., 1 Sek., 1 ms");
        test.done();
    },
    testDurFmtFormatShortDEClock: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "de-DE",
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
            second: 1,
            millisecond: 1
        });
        test.equal(duration.toString(), "1 J, 1 M, 1 W, 1 T, 01:01:01");
        test.done();
    },
    testDurFmtFormatMediumDE: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "de-DE",
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
            second: 1,
            millisecond: 1
        });
        test.equal(duration.toString(), '1 J, 1 M, 1 W, 1 T, 1 Std., 1 Min., 1 Sek., 1 ms');
        test.done();
    },
    testDurFmtFormatLongDESingle: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "de-DE",
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
            second: 1,
            millisecond: 1
        });
        test.equal(duration.toString(), "1 J, 1 Mon., 1 Wo., 1 Tg., 1 Std., 1 Min., 1 Sek., 1 ms");
        test.done();
    },
    testDurFmtFormatFullDESingle: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "de-DE",
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
            second: 1,
            millisecond: 1
        });
        test.equal(duration.toString(), "1 Jahr, 1 Monat, 1 Woche, 1 Tag, 1 Stunde, 1 Minute, 1 Sekunde und 1 Millisekunde");
        test.done();
    },
    testDurFmtFormatLongDEPlural: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "de-DE",
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
            second: 2,
            millisecond: 2
        });
        test.equal(duration.toString(), "2 J, 2 Mon., 2 Wo., 2 Tg., 2 Std., 2 Min., 2 Sek., 2 ms");
        test.done();
    },
    testDurFmtFormatFullDEPlural: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "de-DE",
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
            second: 2,
            millisecond: 2
        });
        test.equal(duration.toString(), "2 Jahre, 2 Monate, 2 Wochen, 2 Tage, 2 Stunden, 2 Minuten, 2 Sekunden und 2 Millisekunden");
        test.done();
    },
    testDurFmtFormatShortZHDefaultStyle: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "zh-Hans-CN",
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
            second: 1,
            millisecond: 1
        });
        test.equal(duration.toString(), "1年1个月1周1天1小时1分钟1秒1毫秒");
        test.done();
    },
    testDurFmtFormatShortZHText: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "zh-Hans-CN",
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
            second: 1,
            millisecond: 1
        });
        test.equal(duration.toString(), "1年1个月1周1天1小时1分钟1秒1毫秒");
        test.done();
    },
    testDurFmtFormatShortZHClock: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "zh-Hans-CN",
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
            second: 1,
            millisecond: 1
        });
        test.equal(duration.toString(), "1年1个月1周1天01:01:01");
        test.done();
    },
    testDurFmtFormatMediumZH: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "zh-Hans-CN",
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
            second: 1,
            millisecond: 1
        });
        test.equal(duration.toString(), "1年1个月1周1天1小时1分钟1秒1毫秒");
        test.done();
    },
    testDurFmtFormatLongZH: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "zh-Hans-CN",
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
            second: 1,
            millisecond: 1
        });
        test.equal(duration.toString(), "1年1个月1周1天1小时1分钟1秒1毫秒");
        test.done();
    },
    testDurFmtFormatFullZH: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "zh-Hans-CN",
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
            second: 1,
            millisecond: 1
        });
        test.equal(duration.toString(), "1年1个月1周1天1小时1分钟1秒钟1毫秒");
        test.done();
    },
    testDurFmtFormatFullzh_Hans_MY: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "zh-Hans-MY",
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
            second: 1,
            millisecond: 1
        });
        test.equal(duration.toString(), "1年1个月1周1天1小时1分钟1秒钟1毫秒");
        test.done();
    },
    testDurFmtFormatShortFRDefaultStyle: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "fr-FR",
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
            second: 1,
            millisecond: 1
        });
        test.equal(duration.toString(), '1a 1m. 1sem. 1j 1h 1min 1s 1ms');
        test.done();
    },
    testDurFmtFormatShortFRText: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "fr-FR",
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
            second: 1,
            millisecond: 1
        });
        test.equal(duration.toString(), '1a 1m. 1sem. 1j 1h 1min 1s 1ms');
        test.done();
    },
    testDurFmtFormatShortFRClock: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "fr-FR",
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
            second: 1,
            millisecond: 1
        });
        test.equal(duration.toString(), '1a 1m. 1sem. 1j 01:01:01');
        test.done();
    },
    testDurFmtFormatMediumFR: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "fr-FR",
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
            second: 1,
            millisecond: 1
        });
        test.equal(duration.toString(), '1a, 1m., 1sem., 1j, 1h, 1min, 1s, 1ms');
        test.done();
    },
    testDurFmtFormatLongFR: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "fr-FR",
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
            second: 1,
            millisecond: 1
        });
        test.equal(duration.toString(), '1 an, 1 m., 1 sem., 1 j, 1 h, 1 min, 1 s, 1 ms');
        test.done();
    },
    testDurFmtFormatFullFR: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "fr-FR",
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
            second: 1,
            millisecond: 1
        });
        test.equal(duration.toString(), '1 an, 1 mois, 1 semaine, 1 jour, 1 heure, 1 minute, 1 seconde et 1 milliseconde');
        test.done();
    },
    //test cases for bg-BG

    testDurFmtBGFormatShortDefaultStyle: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "bg-BG",
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
        test.equal(duration.toString(), '1 г., 1 мес., 1 седм., 1 д, 1 ч, 1 мин, 1 с');
        test.done();
    },
    testDurFmtBGFormatShortText: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "bg-BG",
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
        test.equal(duration.toString(), '1 г., 1 мес., 1 седм., 1 д, 1 ч, 1 мин, 1 с');
        test.done();
    },
    testDurFmtBGFormatShortClock: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "bg-BG",
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
        test.equal(duration.toString(), '1 г., 1 мес., 1 седм., 1 д, 1:01:01');
        test.done();
    },
    testDurFmtBGFormatMedium: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "bg-BG",
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
        test.equal(duration.toString(), '1 г., 1 мес., 1 седм., 1 д, 1 ч, 1 мин, 1 с');
        test.done();
    },
    testDurFmtBGFormatLong: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "bg-BG",
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
        test.equal(duration.toString(), '1 год., 1 мес., 1 седм., 1 д, 1 ч, 1 мин, 1 сек');
        test.done();
    },
    testDurFmtBGFormatFull: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "bg-BG",
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
        test.equal(duration.toString(), "1 година, 1 месец, 1 седмица, 1 ден, 1 час, 1 минута и 1 секунда");
        test.done();
    },


    //test cases for bs-Latn-BA

    testDurFmtBSLatnFormatShortDefaultStyle: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "bs-Latn-BA",
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
        test.equal(duration.toString(), "1 god., 1 mj., 1 sedm., 1 d., 1 h, 1 m, 1 s");
        test.done();
    },
    testDurFmtBSLatnFormatShortText: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "bs-Latn-BA",
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
        test.equal(duration.toString(), "1 god., 1 mj., 1 sedm., 1 d., 1 h, 1 m, 1 s");
        test.done();
    },
    testDurFmtBSLatnFormatShortClock: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "bs-Latn-BA",
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
        test.equal(duration.toString(), "1 god., 1 mj., 1 sedm., 1 d., 01:01:01");
        test.done();
    },
    testDurFmtBSLatnFormatMedium: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "bs-Latn-BA",
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
        test.equal(duration.toString(), '1 god., 1 mj., 1 sedm., 1 d., 1 h, 1 m, 1 s');
        test.done();
    },
    testDurFmtBSLatnFormatLong: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "bs-Latn-BA",
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
        test.equal(duration.toString(), "1 god., 1 mj., 1 sedm., 1 dan, 1 h, 1 min., 1 sek.");
        test.done();
    },
    testDurFmtBSLatnFormatFull: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "bs-Latn-BA",
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
        test.equal(duration.toString(), "1 godina, 1 mjesec, 1 sedmica, 1 dan, 1 sat, 1 minuta i 1 sekunda");
        test.done();
    },
    //test cases for cs-CZ

    testDurFmtCSFormatShortDefaultStyle: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "cs-CZ",
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
        test.equal(duration.toString(), '1 r. 1 m. 1 t. 1 d. 1 h 1 m 1 s');
        test.done();
    },
    testDurFmtCSFormatShortText: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "cs-CZ",
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
        test.equal(duration.toString(), '1 r. 1 m. 1 t. 1 d. 1 h 1 m 1 s');
        test.done();
    },
    testDurFmtCSFormatShortClock: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "cs-CZ",
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
        test.equal(duration.toString(), '1 r. 1 m. 1 t. 1 d. 1:01:01');
        test.done();
    },
    testDurFmtCSFormatMedium: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "cs-CZ",
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
        test.equal(duration.toString(), '1 r., 1 m., 1 t., 1 d., 1 h, 1 m, 1 s');
        test.done();
    },
    testDurFmtCSFormatLong: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "cs-CZ",
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
        test.equal(duration.toString(), "1 rok, 1 měs., 1 týd., 1 den, 1 h, 1 min, 1 s");
        test.done();
    },
    testDurFmtCSFormatFull: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "cs-CZ",
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
        test.equal(duration.toString(), '1 rok, 1 měsíc, 1 týden, 1 den, 1 hodina, 1 minuta a 1 sekunda');
        test.done();
    },
    //test cases for da-DK


    testDurFmtDAFormatShortDefaultStyle: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "da-DK",
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
        test.equal(duration.toString(), "1 år, 1 m, 1 u, 1 d, 1 t, 1 m, 1 s");
        test.done();
    },
    testDurFmtDAFormatShortText: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "da-DK",
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
        test.equal(duration.toString(), "1 år, 1 m, 1 u, 1 d, 1 t, 1 m, 1 s");
        test.done();
    },
    testDurFmtDAFormatShortClock: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "da-DK",
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
        test.equal(duration.toString(), "1 år, 1 m, 1 u, 1 d, 01.01.01");
        test.done();
    },
    testDurFmtDAFormatMedium: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "da-DK",
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
        test.equal(duration.toString(), '1 år, 1 m, 1 u, 1 d, 1 t, 1 m, 1 s');
        test.done();
    },
    testDurFmtDAFormatLong: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "da-DK",
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
        test.equal(duration.toString(), "1 år, 1 md., 1 uge, 1 dag, 1 t., 1 min., 1 sek.");
        test.done();
    },
    testDurFmtDAFormatFull: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "da-DK",
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
        test.equal(duration.toString(), "1 år, 1 måned, 1 uge, 1 dag, 1 time, 1 minut og 1 sekund");
        test.done();
    },
    //test cases for el-GR


    testDurFmtGRFormatShortDefaultStyle: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "el-GR",
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
        test.equal(duration.toString(), "1 έ 1 μ 1 ε 1 η 1 ώ 1 λ 1 δ");
        test.done();
    },
    testDurFmtGRFormatShortText: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "el-GR",
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
        test.equal(duration.toString(), "1 έ 1 μ 1 ε 1 η 1 ώ 1 λ 1 δ");
        test.done();
    },
    testDurFmtGRFormatShortClock: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "el-GR",
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
        test.equal(duration.toString(), "1 έ 1 μ 1 ε 1 η 1:01:01");
        test.done();
    },
    testDurFmtGRFormatMedium: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "el-GR",
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
        test.equal(duration.toString(), '1 έ, 1 μ, 1 ε, 1 η, 1 ώ, 1 λ, 1 δ');
        test.done();
    },
    testDurFmtGRFormatLong: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "el-GR",
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
        test.equal(duration.toString(), "1 έτ., 1 μήν., 1 εβδ., 1 ημέρα, 1 ώ., 1 λ., 1 δευτ.");
        test.done();
    },
    testDurFmtGRFormatFull: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "el-GR",
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
        test.equal(duration.toString(), "1 έτος, 1 μήνας, 1 εβδομάδα, 1 ημέρα, 1 ώρα, 1 λεπτό, 1 δευτερόλεπτο");
        test.done();
    },
    //test cases for es-CO
    testDurFmtESFormatShortDefaultStyle: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "es-CO",
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
        test.equal(duration.toString(), "1 a. 1 mes 1 sem. 1 día 1 h 1 min 1 s");
        test.done();
    },
    testDurFmtESFormatShortText: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "es-CO",
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
        test.equal(duration.toString(), "1 a. 1 mes 1 sem. 1 día 1 h 1 min 1 s");
        test.done();
    },
    testDurFmtESFormatShortClock: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "es-CO",
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
        test.equal(duration.toString(), "1 a. 1 mes 1 sem. 1 día 1:01:01");
        test.done();
    },
    testDurFmtESFormatMedium: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "es-CO",
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
        test.equal(duration.toString(), '1 a., 1 mes, 1 sem., 1 día, 1 h, 1 min, 1 s');
        test.done();
    },
    testDurFmtESFormatLong: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "es-CO",
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
        test.equal(duration.toString(), "1 a., 1 mes, 1 sem., 1 día, 1 h, 1 min, 1 s");
        test.done();
    },
    testDurFmtESFormatFull: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "es-CO",
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
        test.equal(duration.toString(), "1 año, 1 mes, 1 semana, 1 día, 1 hora, 1 minuto y 1 segundo");
        test.done();
    },
    //test cases for estonian
    testDurFmtETFormatShortDefaultStyle: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "et-EE",
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
        test.equal(duration.toString(), "1 a 1 k 1 n 1 p 1 t 1 min 1 s");
        test.done();
    },
    testDurFmtETFormatShortText: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "et-EE",
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
        test.equal(duration.toString(), "1 a 1 k 1 n 1 p 1 t 1 min 1 s");
        test.done();
    },
    testDurFmtETFormatShortClock: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "et-EE",
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
        test.equal(duration.toString(), "1 a 1 k 1 n 1 p 01:01:01");
        test.done();
    },
    testDurFmtETFormatMedium: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "et-EE",
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
        test.equal(duration.toString(), '1 a, 1 k, 1 n, 1 p, 1 t, 1 min, 1 s');
        test.done();
    },
    testDurFmtETFormatLong: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "et-EE",
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
        test.equal(duration.toString(), "1 a, 1 kuu, 1 näd, 1 päev, 1 t, 1 min, 1 sek");
        test.done();
    },
    testDurFmtETFormatFull: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "et-EE",
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
        test.equal(duration.toString(), "1 aasta, 1 kuu, 1 nädal, 1 ööpäev, 1 tund, 1 minut, 1 sekund");
        test.done();
    },
    //test cases for fa-IR
    testDurFmtFAFormatShortDefaultStyle: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "fa-IR",
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
        test.equal(duration.toString(), "‏۱ سال ۱ ماه ۱ هفته ۱ روز ۱ ساعت ۱ دقیقه ۱ ث");
        test.done();
    },
    testDurFmtFAFormatShortText: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "fa-IR",
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
         test.equal(duration.toString(), "‏۱ سال ۱ ماه ۱ هفته ۱ روز ۱ ساعت ۱ دقیقه ۱ ث");
         test.done();
    },
    testDurFmtFAFormatShortClock: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "fa-IR",
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
        test.equal(duration.toString(), "‏۱ سال ۱ ماه ۱ هفته ۱ روز ‏۱:۰۱:۰۱");
        test.done();
    },
    testDurFmtFAFormatMedium: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "fa-IR",
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
        test.equal(duration.toString(), "‏۱ سال ۱ ماه ۱ هفته ۱ روز ۱ ساعت ۱ دقیقه ۱ ث");
        test.done();
    },
    testDurFmtFAFormatLong: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "fa-IR",
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
        test.equal(duration.toString(), "‏۱ سال،‏ ۱ ماه،‏ ۱ هفته،‏ ۱ روز،‏ ۱ ساعت،‏ ۱ دقیقه،‏ ۱ ثانیه");
        test.done();
    },
    testDurFmtFAFormatFull: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "fa-IR",
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
        test.equal(duration.toString(), "‏۱ سال،‏ ۱ ماه،‏ ۱ هفته،‏ ۱ روز،‏ ۱ ساعت،‏ ۱ دقیقه، و ۱ ثانیه");
        test.done();
    },
    //test cases for fi-FI
    testDurFmtFIFormatShortDefaultStyle: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "fi-FI",
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
        test.equal(duration.toString(), "1v 1kk 1vk 1pv 1t 1min 1s");
        test.done();
    },
    testDurFmtFIFormatShortText: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "fi-FI",
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
        test.equal(duration.toString(), "1v 1kk 1vk 1pv 1t 1min 1s");
        test.done();
    },
    testDurFmtFIFormatShortClock: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "fi-FI",
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
        test.equal(duration.toString(), "1v 1kk 1vk 1pv 1.01.01");
        test.done();
    },
    testDurFmtFIFormatMedium: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "fi-FI",
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
        test.equal(duration.toString(), '1v, 1kk, 1vk, 1pv, 1t, 1min, 1s');
        test.done();
    },
    testDurFmtFIFormatLong: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "fi-FI",
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
        test.equal(duration.toString(), "1 v, 1 kk, 1 vk, 1 pv, 1 t, 1 min, 1 s");
        test.done();
    },
    testDurFmtFIFormatFull: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "fi-FI",
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
        test.equal(duration.toString(), "1 vuosi, 1 kuukausi, 1 viikko, 1 päivä, 1 tunti, 1 minuutti ja 1 sekunti");
        test.done();
    },
    //test cases for fr-CA
    testDurFmtFRCAFormatShortDefaultStyle: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "fr-CA",
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
        test.equal(duration.toString(), "1a 1m 1sem 1j 1h 1m 1s");
        test.done();
    },
    testDurFmtFRCAFormatShortText: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "fr-CA",
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
        test.equal(duration.toString(), "1a 1m 1sem 1j 1h 1m 1s");
        test.done();
    },
    testDurFmtFRCAFormatShortClock: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "fr-CA",
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
        test.equal(duration.toString(), '1a 1m 1sem 1j 01 H 01 min 01 s');
        test.done();
    },
    testDurFmtFRCAFormatMedium: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "fr-CA",
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
        test.equal(duration.toString(), '1a, 1m, 1sem, 1j, 1h, 1m, 1s');
        test.done();
    },
    testDurFmtFRCAFormatLong: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "fr-CA",
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
        test.equal(duration.toString(), '1 an, 1 m., 1 sem., 1 j, 1 h, 1 min, 1 s');
        test.done();
    },
    testDurFmtFRCAFormatFull: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "fr-CA",
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
        test.equal(duration.toString(), '1 an, 1 mois, 1 semaine, 1 jour, 1 heure, 1 minute et 1 seconde');
        test.done();
    },
    //test cases for ga-IE
    testDurFmtGAFormatShortDefaultStyle: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ga-IE",
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
        test.equal(duration.toString(), '1 bl 1m 1 scht 1 lá 1 u 1 nóim 1 soic');
        test.done();
    },
    testDurFmtGAFormatShortText: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ga-IE",
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
        test.equal(duration.toString(), '1 bl 1m 1 scht 1 lá 1 u 1 nóim 1 soic');
        test.done();
    },
    testDurFmtGAFormatShortClock: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ga-IE",
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
        test.equal(duration.toString(), '1 bl 1m 1 scht 1 lá 01:01:01');
        test.done();
    },
    testDurFmtGAFormatMedium: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ga-IE",
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
        test.equal(duration.toString(), '1 bl, 1m, 1 scht, 1 lá, 1 u, 1 nóim, 1 soic');
        test.done();
    },
    testDurFmtGAFormatLong: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ga-IE",
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
        test.equal(duration.toString(), '1 bl, 1 mí, 1 scht, 1 lá, 1 u, 1 nóim, 1 soic');
        test.done();
    },
    testDurFmtGAFormatFull: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ga-IE",
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
        test.equal(duration.toString(), '1 bhliain, 1 mhí, 1 scht, 1 lá, 1 u, 1 nóim agus 1 soic');
        test.done();
    },
    //test cases for hebrew
    testDurFmtHEFormatShortDefaultStyle: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "he-IL",
            length: "short",
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
        test.equal(duration.toString(), '‏1 ש′ 1 ח׳ 1 ש′ 1 י׳ 1 שע׳ 1 דק׳ 1 שנ׳');
        test.done();
    },
    testDurFmtHEFormatShortText: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "he-IL",
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
        test.equal(duration.toString(), '‏1 ש′ 1 ח׳ 1 ש′ 1 י׳ 1 שע׳ 1 דק׳ 1 שנ׳');
        test.done();
    },
    testDurFmtHEFormatShortClock: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "he-IL",
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
        test.equal(duration.toString(), '‏1 ש′ 1 ח׳ 1 ש′ 1 י׳ ‏1:01:01');
        test.done();
    },
    testDurFmtHEFormatMedium: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "he-IL",
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
        test.equal(duration.toString(), '‏1 ש′ 1 ח׳ 1 ש′ 1 י׳ 1 שע׳ 1 דק׳ 1 שנ׳');
        test.done();
    },
    testDurFmtHEFormatLong: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "he-IL",
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
        test.equal(duration.toString(), '‏1 שנה, 1 ח׳, 1 שבוע, 1 יום, 1 שעה, 1 דק׳, 1 שנ׳');
        test.done();
    },
    testDurFmtHEFormatFull: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "he-IL",
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
        test.equal(duration.toString(), '‏1 שנה, 1 חודש, 1 שבוע, 1 יום, 1 שעה, 1 דקה ו-1 שניה');
        test.done();
    },
    testDurFmtHEFormatShortManyNumber: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "he-IL",
            length: "short"
        });
        test.ok(fmt !== null);

        var duration = fmt.format({
            year: 20,
            month: 20,
            week: 20,
            day: 20,
            hour: 20,
            minute: 20,
            second: 20
        });
        test.equal(duration.toString(), '‏20 ש′ 20 ח׳ 20 ש′ 20 י׳ 20 שע׳ 20 דק׳ 20 שנ׳');
        test.done();
    },
    testDurFmtHEFormatMediumManyNumber: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "he-IL",
            length: "medium"
        });
        test.ok(fmt !== null);

        var duration = fmt.format({
            year: 20,
            month: 20,
            week: 20,
            day: 20,
            hour: 20,
            minute: 20,
            second: 20
        });
        test.equal(duration.toString(), '‏20 ש′ 20 ח׳ 20 ש′ 20 י׳ 20 שע׳ 20 דק׳ 20 שנ׳');
        test.done();
    },
    testDurFmtHEFormatLongManyNumber: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "he-IL",
            length: "long"
        });
        test.ok(fmt !== null);

        var duration = fmt.format({
            year: 20,
            month: 20,
            week: 20,
            day: 20,
            hour: 20,
            minute: 20,
            second: 20
        });
        test.equal(duration.toString(), '‏20 שנים, 20 ח׳, 20 שבועות, 20 ימ׳, 20 שע׳, 20 דק׳, 20 שנ׳');
        test.done();
    },
    testDurFmtHEFormatFullManyNumber: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "he-IL",
            length: "full"
        });
        test.ok(fmt !== null);

        var duration = fmt.format({
            year: 20,
            month: 20,
            week: 20,
            day: 20,
            hour: 20,
            minute: 20,
            second: 20
        });

        // The `many` category has been removed since CLDR 42.
        var platform = ilib._getPlatform();
        if (platform === "nodejs") {
            var cldrVersion = Number(process.versions["cldr"]);
            if (Number(cldrVersion) < 36) { // Intl.PluralRules doesn't support this locale until this version.
                test.equal(duration.toString(), '‏20 שנים, 20 חודשים, 20 שבועות, 20 ימים, 20 שעות, 20 דקות ו-20 שניות');
            } else if (Number(cldrVersion) < 42) { // The `many` category has been removed since CLDR 42.
                test.equal(duration.toString(), '‏20 שנים, 20 חודשים, 20 שבועות, 20 יום, 20 שעות, 20 דקות ו-‏20 שניות');
            } else {
                test.equal(duration.toString(), '‏20 שנים, 20 חודשים, 20 שבועות, 20 ימים, 20 שעות, 20 דקות ו-20 שניות');
            }
        } else if (platform === "browser") {
            var browser = ilib._getBrowser();
            var expected = '‏20 שנים, 20 חודשים, 20 שבועות, 20 יום, 20 שעות, 20 דקות ו-‏20 שניות';
            if (browser === "chrome" && getChromeVersion() >= 110) {
                expected = '‏20 שנים, 20 חודשים, 20 שבועות, 20 ימים, 20 שעות, 20 דקות ו-20 שניות';
            }
            test.equal(duration.toString(), expected);
        } else {
            test.equal(duration.toString(), '‏20 שנים, 20 חודשים, 20 שבועות, 20 ימים, 20 שעות, 20 דקות ו-20 שניות');
        }
        test.done();
    },
    testDurFmtHEFormatShortOtherNumber: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "he-IL",
            length: "short"
        });
        test.ok(fmt !== null);

        var duration = fmt.format({
            year: 19,
            month: 19,
            week: 19,
            day: 19,
            hour: 19,
            minute: 19,
            second: 19
        });
        test.equal(duration.toString(), '‏19 ש′ 19 ח׳ 19 ש′ 19 י׳ 19 שע׳ 19 דק׳ 19 שנ׳');
        test.done();
    },
    testDurFmtHEFormatMediumOtherNumber: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "he-IL",
            length: "medium"
        });
        test.ok(fmt !== null);

        var duration = fmt.format({
            year: 19,
            month: 19,
            week: 19,
            day: 19,
            hour: 19,
            minute: 19,
            second: 19
        });
        test.equal(duration.toString(), '‏19 ש′ 19 ח׳ 19 ש′ 19 י׳ 19 שע׳ 19 דק׳ 19 שנ׳');
        test.done();
    },
    testDurFmtHEFormatLongOtherNumber: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "he-IL",
            length: "long"
        });
        test.ok(fmt !== null);

        var duration = fmt.format({
            year: 19,
            month: 19,
            week: 19,
            day: 19,
            hour: 19,
            minute: 19,
            second: 19
        });
        test.equal(duration.toString(), "‏19 שנים, 19 ח׳, 19 שבועות, 19 ימ׳, 19 שע׳, 19 דק׳, 19 שנ׳");
        test.done();
    },
    testDurFmtHEFormatFullOtherNumber: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "he-IL",
            length: "full"
        });
        test.ok(fmt !== null);

        var duration = fmt.format({
            year: 19,
            month: 19,
            week: 19,
            day: 19,
            hour: 19,
            minute: 19,
            second: 19
        });
        test.equal(duration.toString(), '‏19 שנים, 19 חודשים, 19 שבועות, 19 ימים, 19 שעות, 19 דקות ו-19 שניות');
        test.done();
    },
    //test cases for hi-IN
    testDurFmtHIFormatShortDefaultStyle: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "hi-IN",
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
        test.equal(duration.toString(), '1 व, 1 माह, 1 सप्ताह, 1 दि, 1 घं, 1 मि, 1 से');
        test.done();
    },
    testDurFmtHIFormatShortText: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "hi-IN",
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
        test.equal(duration.toString(), '1 व, 1 माह, 1 सप्ताह, 1 दि, 1 घं, 1 मि, 1 से');
        test.done();
    },
    testDurFmtHIFormatShortClock: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "hi-IN",
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
        test.equal(duration.toString(), '1 व, 1 माह, 1 सप्ताह, 1 दि, 1:01:01');
        test.done();
    },
    testDurFmtHIFormatMedium: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "hi-IN",
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
        test.equal(duration.toString(), '1 व, 1 माह, 1 सप्ताह, 1 दि, 1 घं, 1 मि, 1 से');
        test.done();
    },
    testDurFmtHIFormatLong: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "hi-IN",
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
        test.equal(duration.toString(), '1 वर्ष, 1 माह, 1 सप्ताह, 1 दिन, 1 घं॰, 1 मि॰, 1 से॰');
        test.done();
    },
    testDurFmtHIFormatFull: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "hi-IN",
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
        test.equal(duration.toString(), "1 वर्ष, 1 महीना, 1 सप्ताह, 1 दिन, 1 घंटा, 1 मिनट, और 1 सेकंड");
        test.done();
    },
    //test cases for marathi mr-IN
    testDurFmtMRFormatShortDefaultStyle: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "mr-IN",
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
        test.equal(duration.toString(), "१व १म १आ १दि १ता १मि १से");
        test.done();
    },
    testDurFmtMRFormatShortText: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "mr-IN",
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
        test.equal(duration.toString(), "१व १म १आ १दि १ता १मि १से");
        test.done();
    },
    testDurFmtMRFormatShortClock: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "mr-IN",
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
        test.equal(duration.toString(), "१व १म १आ १दि १:०१:०१");
        test.done();
    },
    testDurFmtMRFormatMedium: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "mr-IN",
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
        test.equal(duration.toString(), "१व १म १आ १दि १ता १मि १से");
        test.done();
    },
    testDurFmtMRFormatLong: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "mr-IN",
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
        test.equal(duration.toString(), "१ वर्ष, १ महिना, १ आ, १ दिवस, १ ता, १ मिनि, १ से");
        test.done();
    },
    testDurFmtMRFormatFull: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "mr-IN",
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
        test.equal(duration.toString(), "१ वर्ष, १ महिना, १ आठवडा, १ दिवस, १ तास, १ मिनिट, १ सेकंद");
        test.done();
    },
    //testa cases for Telugu (te-IN)
    testDurFmtTEFormatShortDefaultStyle: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "te-IN",
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
        test.equal(duration.toString(), "1సం, 1నె, 1వా, 1రో, 1గం, 1ని, 1సె");
        test.done();
    },
    testDurFmtTEFormatShortText: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "te-IN",
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
        test.equal(duration.toString(), "1సం, 1నె, 1వా, 1రో, 1గం, 1ని, 1సె");
        test.done();
    },
    testDurFmtTEFormatShortClock: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "te-IN",
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
        test.equal(duration.toString(), "1సం, 1నె, 1వా, 1రో, 1:01:01");
        test.done();
    },
    testDurFmtTEFormatMedium: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "te-IN",
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
        test.equal(duration.toString(), "1సం, 1నె, 1వా, 1రో, 1గం, 1ని, 1సె");
        test.done();
    },
    testDurFmtTEFormatLong: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "te-IN",
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
        test.equal(duration.toString(), "1 సం., 1 నె., 1 వా., 1 రోజు, 1 గం., 1 నిమి., 1 సె.");
        test.done();
    },
    testDurFmtTEFormatFull: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "te-IN",
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
        test.equal(duration.toString(), "1 సంవత్సరం, 1 నెల, 1 వారం, 1 రోజు, 1 గంట, 1 నిమిషం, 1 సెకను");
        test.done();
    },
    //test cases for kannada(kn-IN)
    testDurFmtKNFormatShortDefaultStyle: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "kn-IN",
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
        test.equal(duration.toString(), "1ವ, 1ತಿಂ., 1ವಾ, 1ದಿ, 1ಗಂ., 1ನಿಮಿ, 1ಸೆಕೆಂ");
        test.done();
    },
    testDurFmtKNFormatShortText: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "kn-IN",
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
        test.equal(duration.toString(), "1ವ, 1ತಿಂ., 1ವಾ, 1ದಿ, 1ಗಂ., 1ನಿಮಿ, 1ಸೆಕೆಂ");
        test.done();
    },
    testDurFmtKNFormatShortClock: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "kn-IN",
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
        test.equal(duration.toString(), "1ವ, 1ತಿಂ., 1ವಾ, 1ದಿ, 1:01:01");
        test.done();
    },
    testDurFmtKNFormatMedium: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "kn-IN",
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
        test.equal(duration.toString(), "1ವ, 1ತಿಂ., 1ವಾ, 1ದಿ, 1ಗಂ., 1ನಿಮಿ, 1ಸೆಕೆಂ");
        test.done();
    },
    testDurFmtKNFormatLong: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "kn-IN",
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
        test.equal(duration.toString(), "1 ವರ್ಷ, 1 ತಿಂ., 1 ವಾರ, 1 ದಿನ, 1 ಗಂ., 1 ನಿಮಿ, 1 ಸೆಕೆಂ");
        test.done();
    },
    testDurFmtKNFormatFull: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "kn-IN",
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
        test.equal(duration.toString(), '1 ವರ್ಷವು, 1 ತಿಂಗಳು, 1 ವಾರವು, 1 ದಿನವು, 1 ಗಂಟೆಯು, 1 ನಿಮಿಷವು, 1 ಸೆಕೆಂಡ್');
        test.done();
    },
    //test cases for tamil(ta-IN)
    testDurFmtTAFormatShortDefaultStyle: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ta-IN",
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
        test.equal(duration.toString(), "1 ஆ 1 மா 1 வா 1 நா 1 ம.நே. 1 நிமி. 1 வி.");
        test.done();
    },
    testDurFmtTAFormatShortText: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ta-IN",
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
        test.equal(duration.toString(), "1 ஆ 1 மா 1 வா 1 நா 1 ம.நே. 1 நிமி. 1 வி.");
        test.done();
    },
    testDurFmtTAFormatShortClock: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ta-IN",
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
        test.equal(duration.toString(), "1 ஆ 1 மா 1 வா 1 நா 1:01:01");
        test.done();
    },
    testDurFmtTAFormatMedium: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ta-IN",
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
        test.equal(duration.toString(), "1 ஆ 1 மா 1 வா 1 நா 1 ம.நே. 1 நிமி. 1 வி.");
        test.done();
    },
    testDurFmtTAFormatLong: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ta-IN",
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
        test.equal(duration.toString(), "1 ஆண்டு, 1 மாதம், 1 வாரம், 1 நாள், 1 மணிநேரம், 1 நிமிடம், 1 விநாடி");
        test.done();
    },
    testDurFmtTAFormatFull: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ta-IN",
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
        test.equal(duration.toString(), "1 ஆண்டு, 1 மாதம், 1 வாரம், 1 நாள், 1 மணிநேரம், 1 நிமிடம், 1 விநாடி");
        test.done();
    },
    //test cases for Malaylam(ml-IN)
    testDurFmtMLFormatShortDefaultStyle: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ml-IN",
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
        test.equal(duration.toString(), "1 വ 1 മാ 1 ആ 1 ദി 1 മ 1 മി. 1 സെ.");
        test.done();
    },
    testDurFmtMLFormatShortText: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ml-IN",
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
        test.equal(duration.toString(), "1 വ 1 മാ 1 ആ 1 ദി 1 മ 1 മി. 1 സെ.");
        test.done();
    },
    testDurFmtMLFormatShortClock: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ml-IN",
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
        test.equal(duration.toString(), "1 വ 1 മാ 1 ആ 1 ദി 1:01:01");
        test.done();
    },
    testDurFmtMLFormatMedium: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ml-IN",
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
        test.equal(duration.toString(), "1 വ 1 മാ 1 ആ 1 ദി 1 മ 1 മി. 1 സെ.");
        test.done();
    },
    testDurFmtMLFormatLong: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ml-IN",
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
        test.equal(duration.toString(), "1 വ, 1 മാസം, 1 ആ, 1 ദിവസം‌, 1 മ, 1 മി., 1 സെ.");
        test.done();
    },
    testDurFmtMLFormatFull: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ml-IN",
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
        test.equal(duration.toString(), "1 വർഷം, 1 മാസം, 1 ആഴ്ച, 1 ദിവസം, 1 മണിക്കൂർ, 1 മിനിറ്റ്, 1 സെക്കൻഡ്");
        test.done();
    },
    //test cases for Gujrati(gu-IN)
    testDurFmtGUFormatShortDefaultStyle: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "gu-IN",
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
        test.equal(duration.toString(), "1 વ, 1 મ, 1 અઠ., 1 દિ, 1 ક, 1 મિ, 1 સે");
        test.done();
    },
    testDurFmtGUFormatShortText: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "gu-IN",
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
        test.equal(duration.toString(), "1 વ, 1 મ, 1 અઠ., 1 દિ, 1 ક, 1 મિ, 1 સે");
        test.done();
    },
    testDurFmtGUFormatShortClock: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "gu-IN",
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
        test.equal(duration.toString(), "1 વ, 1 મ, 1 અઠ., 1 દિ, 1:01:01");
        test.done();
    },
    testDurFmtGUFormatMedium: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "gu-IN",
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
        test.equal(duration.toString(), "1 વ, 1 મ, 1 અઠ., 1 દિ, 1 ક, 1 મિ, 1 સે");
        test.done();
    },
    testDurFmtGUFormatLong: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "gu-IN",
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
        test.equal(duration.toString(), "1 વર્ષ, 1 મહિનો, 1 અઠ., 1 દિવસ, 1 કલાક, 1 મિનિટ, 1 સેકંડ");
        test.done();
    },
    testDurFmtGUFormatFull: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "gu-IN",
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
        test.equal(duration.toString(), "1 વર્ષ, 1 મહિનો, 1 અઠવાડિયું, 1 દિવસ, 1 કલાક, 1 મિનિટ, 1 સેકંડ");
        test.done();
    },
    //test cases for Bengali(bn-IN)
    testDurFmtBNFormatShortDefaultStyle: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "bn-IN",
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
        test.equal(duration.toString(), "১ বছর, ১ মাস, ১ সপ্তাহ, ১ দিন, ১ ঘঃ, ১ মিঃ, ১ সেঃ");
        test.done();
    },
    testDurFmtBNFormatShortDefaultStyleNative: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "bn-IN",
            length: "short",
            useNative: true
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
        test.equal(duration.toString(), "১ বছর, ১ মাস, ১ সপ্তাহ, ১ দিন, ১ ঘঃ, ১ মিঃ, ১ সেঃ");
        test.done();
    },
    testDurFmtBNFormatShortText: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "bn-IN",
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
        test.equal(duration.toString(), "১ বছর, ১ মাস, ১ সপ্তাহ, ১ দিন, ১ ঘঃ, ১ মিঃ, ১ সেঃ");
        test.done();
    },
    testDurFmtBNFormatShortClock: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "bn-IN",
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
        test.equal(duration.toString(), "১ বছর, ১ মাস, ১ সপ্তাহ, ১ দিন, ১:০১:০১");
        test.done();
    },
    testDurFmtBNFormatShortClockNative: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "bn-IN",
            length: "short",
            style: "clock",
            useNative: true
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
        test.equal(duration.toString(), "১ বছর, ১ মাস, ১ সপ্তাহ, ১ দিন, ১:০১:০১");
        test.done();
    },
    testDurFmtBNFormatShortClockWestern: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "bn-IN",
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
        test.equal(duration.toString(), "1 বছর, 1 মাস, 1 সপ্তাহ, 1 দিন, 1:01:01");
        test.done();
    },
    testDurFmtBNFormatMedium: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "bn-IN",
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
        test.equal(duration.toString(), "১ বছর, ১ মাস, ১ সপ্তাহ, ১ দিন, ১ ঘঃ, ১ মিঃ, ১ সেঃ");
        test.done();
    },
    testDurFmtBNFormatLong: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "bn-IN",
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
        test.equal(duration.toString(), "১ বছর, ১ মাস, ১ সপ্তাহ, ১ দিন, ১ ঘন্টা, ১ মিনিট, ১ সেকেন্ড");
        test.done();
    },
    testDurFmtBNFormatFull: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "bn-IN",
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
        test.equal(duration.toString(), "১ বছর, ১ মাস, ১ সপ্তাহ, ১ দিন, ১ ঘন্টা, ১ মিনিট, ১ সেকেন্ড");
        test.done();
    },
    //test cases for Assamese(as-IN)
    /*
    testDurFmtASFormatShortDefaultStyle: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "as-IN",
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
        test.equal(duration.toString(), "y");
        test.done();
    },
    testDurFmtASFormatShortText: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "as-IN",
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
        test.equal(duration.toString(), "y");
        test.done();
    },
    testDurFmtASFormatShortClock: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "as-IN",
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
        test.equal(duration.toString(), "1வ 1ம 1வ 1ந 1:01:01");
        test.done();
    },
    testDurFmtASFormatMedium: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "as-IN",
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
        test.equal(duration.toString(), "y");
        test.done();
    },
    testDurFmtASFormatLong: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "as-IN",
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
        test.equal(duration.toString(), "y");
        test.done();
    },
    testDurFmtASFormatFull: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "as-IN",
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
        test.equal(duration.toString(), "y");
        test.done();
    },
    */
    //test cases for Punjabi(pa-Guru-IN)
    testDurFmtPAFormatShortDefaultStyle: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "pa-Guru-IN",
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
        test.equal(duration.toString(), "1 ਸਾਲ 1 ਮਹੀਨਾ 1 ਹਫ਼ਤਾ 1 ਦਿਨ 1 ਘੰਟਾ 1 ਮਿੰਟ 1 ਸਕਿੰਟ");
        test.done();
    },
    testDurFmtPAFormatShortText: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "pa-Guru-IN",
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
        test.equal(duration.toString(), "1 ਸਾਲ 1 ਮਹੀਨਾ 1 ਹਫ਼ਤਾ 1 ਦਿਨ 1 ਘੰਟਾ 1 ਮਿੰਟ 1 ਸਕਿੰਟ");
        test.done();
    },
    testDurFmtPAFormatShortClock: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "pa-Guru-IN",
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
        test.equal(duration.toString(), "1 ਸਾਲ 1 ਮਹੀਨਾ 1 ਹਫ਼ਤਾ 1 ਦਿਨ 1:01:01");
        test.done();
    },
    testDurFmtPAFormatMedium: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "pa-Guru-IN",
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
        test.equal(duration.toString(), "1 ਸਾਲ 1 ਮਹੀਨਾ 1 ਹਫ਼ਤਾ 1 ਦਿਨ 1 ਘੰਟਾ 1 ਮਿੰਟ 1 ਸਕਿੰਟ");
        test.done();
    },
    testDurFmtPAFormatLong: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "pa-Guru-IN",
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
        test.equal(duration.toString(), "1 ਸਾਲ, 1 ਮਹੀਨਾ, 1 ਹਫ਼ਤਾ, 1 ਦਿਨ, 1 ਘੰਟਾ, 1 ਮਿੰਟ, 1 ਸਕਿੰਟ");
        test.done();
    },
    testDurFmtPAFormatFull: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "pa-Guru-IN",
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
        test.equal(duration.toString(), "1 ਸਾਲ, 1 ਮਹੀਨਾ, 1 ਹਫ਼ਤਾ, 1 ਦਿਨ, 1 ਘੰਟਾ, 1 ਮਿੰਟ, 1 ਸਕਿੰਟ");
        test.done();
    },
    //test cases for Urdu(ur-IN)
    testDurFmtURFormatShortDefaultStyle: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ur-IN",
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
        test.equal(duration.toString(), '‏۱ سال، ۱ مہینہ، ۱ ہفتہ، ۱ دن، ۱ گھنٹہ، ۱ منٹ، ۱ سیکنڈ');
        test.done();
    },
    testDurFmtURFormatShortText: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ur-IN",
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
        test.equal(duration.toString(), '‏۱ سال، ۱ مہینہ، ۱ ہفتہ، ۱ دن، ۱ گھنٹہ، ۱ منٹ، ۱ سیکنڈ');
        test.done();
    },
    testDurFmtURFormatShortTextWestern: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ur-IN",
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
        test.equal(duration.toString(), '‏1 سال، 1 مہینہ، 1 ہفتہ، 1 دن، 1 گھنٹہ، 1 منٹ، 1 سیکنڈ');
        test.done();
    },
    testDurFmtURFormatShortClock: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ur-IN",
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
        test.equal(duration.toString(), '‏۱ سال، ۱ مہینہ، ۱ ہفتہ، ۱ دن، ‏۱:۰۱:۰۱');
        test.done();
    },
    testDurFmtURFormatMedium: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ur-IN",
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
        test.equal(duration.toString(), '‏۱ سال، ۱ مہینہ، ۱ ہفتہ، ۱ دن، ۱ گھنٹہ، ۱ منٹ، ۱ سیکنڈ');
        test.done();
    },
    testDurFmtURFormatLong: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ur-IN",
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
        test.equal(duration.toString(), "‏۱ سال، ۱ مہینہ، ۱ ہفتہ، ۱ دن، ۱ گھنٹہ، ۱ منٹ، ۱ سیکنڈ");
        test.done();
    },
    testDurFmtURFormatFull: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ur-IN",
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
        test.equal(duration.toString(), '‏۱ سال, ۱ مہینہ, ۱ ہفتہ, ۱ دن, ۱ گھنٹہ, ۱ منٹ، اور ۱ سیکنڈ');
        test.done();
    },
    //test cases for croation
    testDurFmtHRFormatShortDefaultStyle: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "hr-HR",
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
        test.equal(duration.toString(), "1 g. 1 mj. 1 tj. 1 d. 1 h 1 m 1 s");
        test.done();
    },
    testDurFmtHRFormatShortText: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "hr-HR",
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
        test.equal(duration.toString(), "1 g. 1 mj. 1 tj. 1 d. 1 h 1 m 1 s");
        test.done();
    },
    testDurFmtHRFormatShortClock: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "hr-HR",
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
        test.equal(duration.toString(), "1 g. 1 mj. 1 tj. 1 d. 01:01:01");
        test.done();
    },
    testDurFmtHRFormatMedium: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "hr-HR",
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
        test.equal(duration.toString(), '1 g., 1 mj., 1 tj., 1 d., 1 h, 1 m, 1 s');
        test.done();
    },
    testDurFmtHRFormatLong: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "hr-HR",
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
        test.equal(duration.toString(), "1 g., 1 mj., 1 tj., 1 dan, 1 h, 1 min, 1 s");
        test.done();
    },
    testDurFmtHRFormatFull: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "hr-HR",
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
        test.equal(duration.toString(), "1 godina, 1 mjesec, 1 tjedan, 1 dan, 1 sat, 1 minuta i 1 sekunda");
        test.done();
    },
    //test cases for hungarian
    testDurFmtHUFormatShortDefaultStyle: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "hu-HU",
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
        test.equal(duration.toString(), "1 év, 1 h., 1 hét, 1 nap, 1 ó, 1 p, 1 mp");
        test.done();
    },
    testDurFmtHUFormatShortText: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "hu-HU",
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
        test.equal(duration.toString(), "1 év, 1 h., 1 hét, 1 nap, 1 ó, 1 p, 1 mp");
        test.done();
    },
    testDurFmtHUFormatShortClock: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "hu-HU",
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
        test.equal(duration.toString(), "1 év, 1 h., 1 hét, 1 nap, 1:01:01");
        test.done();
    },
    testDurFmtHUFormatMedium: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "hu-HU",
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
        test.equal(duration.toString(), '1 év, 1 h., 1 hét, 1 nap, 1 ó, 1 p, 1 mp');
        test.done();
    },
    testDurFmtHUFormatLong: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "hu-HU",
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
        test.equal(duration.toString(), "1 év, 1 hónap, 1 hét, 1 nap, 1 ó, 1 p, 1 mp");
        test.done();
    },
    testDurFmtHUFormatFull: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "hu-HU",
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
        test.equal(duration.toString(), "1 év, 1 hónap, 1 hét, 1 nap, 1 óra, 1 perc és 1 másodperc");
        test.done();
    },
    //test cases for indonesia
    testDurFmtIDFormatShortDefaultStyle: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "id-ID",
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
        test.equal(duration.toString(), "1 thn, 1 bln, 1 mgg, 1 hr, 1 j, 1 mnt, 1 dtk");
        test.done();
    },
    testDurFmtIDFormatShortText: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "id-ID",
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
        test.equal(duration.toString(), "1 thn, 1 bln, 1 mgg, 1 hr, 1 j, 1 mnt, 1 dtk");
        test.done();
    },
    testDurFmtIDFormatShortClock: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "id-ID",
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
        test.equal(duration.toString(), "1 thn, 1 bln, 1 mgg, 1 hr, 01.01.01");
        test.done();
    },
    testDurFmtIDFormatMedium: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "id-ID",
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
        test.equal(duration.toString(), '1 thn, 1 bln, 1 mgg, 1 hr, 1 j, 1 mnt, 1 dtk');
        test.done();
    },
    testDurFmtIDFormatLong: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "id-ID",
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
        test.equal(duration.toString(), "1 thn, 1 bln, 1 mgg, 1 hr, 1 j, 1 mnt, 1 dtk");
        test.done();
    },
    testDurFmtIDFormatFull: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "id-ID",
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
        test.equal(duration.toString(), "1 tahun, 1 bulan, 1 minggu, 1 hari, 1 jam, 1 menit, 1 detik");
        test.done();
    },
    //test cases for Italy
    testDurFmtITFormatShortDefaultStyle: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "it-IT",
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
        test.equal(duration.toString(), '1anno 1 mese 1sett. 1g 1h 1min 1s');
        test.done();
    },
    testDurFmtITFormatShortText: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "it-IT",
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
        test.equal(duration.toString(), '1anno 1 mese 1sett. 1g 1h 1min 1s');
        test.done();
    },
    testDurFmtITFormatShortClock: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "it-IT",
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
        test.equal(duration.toString(), '1anno 1 mese 1sett. 1g 01:01:01');
        test.done();
    },
    testDurFmtITFormatMedium: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "it-IT",
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
        test.equal(duration.toString(), '1anno, 1 mese, 1sett., 1g, 1h, 1min, 1s');
        test.done();
    },
    testDurFmtITFormatLong: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "it-IT",
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
        test.equal(duration.toString(), "1 anno, 1 mese, 1 sett., 1 giorno, 1 h, 1 min, 1 s");
        test.done();
    },
    testDurFmtITFormatFull: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "it-IT",
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
        test.equal(duration.toString(), "1 anno, 1 mese, 1 settimana, 1 giorno, 1 ora, 1 minuto e 1 secondo");
        test.done();
    },
    //test cases for japanese
    testDurFmtJAFormatShortDefaultStyle: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ja-JP",
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
            second: 1,
            millisecond: 1
        });
        test.equal(duration.toString(), "1y1m1w1d1h1m1s1ms");
        test.done();
    },
    testDurFmtJAFormatShortText: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ja-JP",
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
            second: 1,
            millisecond: 1
        });
        test.equal(duration.toString(), "1y1m1w1d1h1m1s1ms");
        test.done();
    },
    testDurFmtJAFormatShortClock: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ja-JP",
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
            second: 1,
            millisecond: 1
        });
        test.equal(duration.toString(), "1y1m1w1d1:01:01");
        test.done();
    },
    testDurFmtJAFormatMedium: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ja-JP",
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
            second: 1,
            millisecond: 1
        });
        test.equal(duration.toString(), "1y1m1w1d1h1m1s1ms");
        test.done();
    },
    testDurFmtJAFormatLong: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ja-JP",
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
            second: 1,
            millisecond: 1
        });
        test.equal(duration.toString(), "1 年 1 か月 1 週間 1 日 1 時間 1 分 1 秒 1 ms");
        test.done();
    },
    testDurFmtJAFormatFull: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ja-JP",
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
            second: 1,
            millisecond: 1
        });
        test.equal(duration.toString(), "1 年 1 か月 1 週間 1 日 1 時間 1 分 1 秒 1 ミリ秒");
        test.done();
    },
    //test cases for kk-Cyrl-KZ
    testDurFmtKKFormatShortDefaultStyle: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "kk-Cyrl-KZ",
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
        test.equal(duration.toString(), "1 ж. 1 ай 1 ап. 1 к. 1 сағ 1 мин 1 с");
        test.done();
    },
    testDurFmtKKFormatShortText: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "kk-Cyrl-KZ",
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
        test.equal(duration.toString(), "1 ж. 1 ай 1 ап. 1 к. 1 сағ 1 мин 1 с");
        test.done();
    },
    testDurFmtKKFormatShortClock: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "kk-Cyrl-KZ",
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
        test.equal(duration.toString(), "1 ж. 1 ай 1 ап. 1 к. 01:01:01");
        test.done();
    },
    testDurFmtKKFormatLong: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "kk-Cyrl-KZ",
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
        test.equal(duration.toString(), "1 ж. 1 ай 1 ап. 1 күн 1 сағ 1 мин 1 с");
        test.done();
    },
    testDurFmtKKFormatFull: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "kk-Cyrl-KZ",
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
        test.equal(duration.toString(), "1 жыл 1 ай 1 апта 1 күн 1 сағат 1 минут 1 секунд");
        test.done();
    },
    //test cases for ko-KR
    testDurFmtKOFormatShortDefaultStyle: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ko-KR",
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
            second: 1,
            millisecond: 1
        });
        test.equal(duration.toString(), "1년 1개월 1주 1일 1시간 1분 1초 1밀리초");
        test.done();
    },
    testDurFmtKOFormatShortText: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ko-KR",
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
            second: 1,
            millisecond: 1
        });
        test.equal(duration.toString(), "1년 1개월 1주 1일 1시간 1분 1초 1밀리초");
        test.done();
    },
    testDurFmtKOFormatShortClock: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ko-KR",
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
            second: 1,
            millisecond: 1
        });
        test.equal(duration.toString(), "1년 1개월 1주 1일 1:01:01");
        test.done();
    },
    testDurFmtKOFormatMedium: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ko-KR",
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
            second: 1,
            millisecond: 1
        });
        test.equal(duration.toString(), "1년 1개월 1주 1일 1시간 1분 1초 1밀리초");
        test.done();
    },
    testDurFmtKOFormatLong: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ko-KR",
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
            second: 1,
            millisecond: 1
        });
        test.equal(duration.toString(), "1년 1개월 1주 1일 1시간 1분 1초 1밀리초");
        test.done();
    },
    testDurFmtKOFormatFull: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ko-KR",
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
            second: 1,
            millisecond: 1
        });
        test.equal(duration.toString(), "1년 1개월 1주 1일 1시간 1분 1초 1밀리초");
        test.done();
    },
    testDurFmtKUFormatShortDefaultStyle: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ku-Arab-IQ",
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
        test.equal(duration.toString(), '‏١س ١م ١ﻪـ ١ر ١ک ١خ ١چ');
        test.done();
    },
    testDurFmtKUFormatShortText: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ku-Arab-IQ",
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
        test.equal(duration.toString(), '‏١س ١م ١ﻪـ ١ر ١ک ١خ ١چ');

        test.done();
    },
    testDurFmtKUFormatShortClock: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ku-Arab-IQ",
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
        test.equal(duration.toString(), '‏١س ١م ١ﻪـ ١ر ‏١:٠١:٠١');
        test.done();
    },
    testDurFmtKUFormatMedium: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ku-Arab-IQ",
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
        test.equal(duration.toString(), '‏١س ١م ١ﻪـ ١ر ١ک ١خ ١چ');
        test.done();
    },
    testDurFmtKUFormatLong: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ku-Arab-IQ",
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
        test.equal(duration.toString(), '‏١ ساڵ ١ مانگ ١ هەفتە ١ رۆژ ١ کاتژ ١ خول ١ چرک');
        test.done();
    },
    testDurFmtKUFormatFull: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ku-Arab-IQ",
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
        test.equal(duration.toString(), '‏١ ساڵ, ١ مانگ, ١ هەفتە, ١ رۆژ, ١ کاتژمێر, ١ خولەک,  ١ چرکە');
        test.done();
    },
    //test cases for lt-LT
    testDurFmtLTFormatShortDefaultStyle: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "lt-LT",
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
        test.equal(duration.toString(), "1 m. 1 mėn. 1 sav. 1 d. 1 h 1 min. 1 s");
        test.done();
    },
    testDurFmtLTFormatShortText: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "lt-LT",
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
        test.equal(duration.toString(), "1 m. 1 mėn. 1 sav. 1 d. 1 h 1 min. 1 s");
        test.done();
    },
    testDurFmtLTFormatShortClock: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "lt-LT",
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
        test.equal(duration.toString(), "1 m. 1 mėn. 1 sav. 1 d. 01:01:01");
        test.done();
    },
    testDurFmtLTFormatMedium: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "lt-LT",
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
        test.equal(duration.toString(), '1 m. 1 mėn. 1 sav. 1 d. 1 h 1 min. 1 s');
        test.done();
    },
    testDurFmtLTFormatLong: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "lt-LT",
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
        test.equal(duration.toString(), "1 m. 1 mėn. 1 sav. 1 d. 1 val. 1 min. 1 sek.");
        test.done();
    },
    testDurFmtLTFormatFull: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "lt-LT",
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
        test.equal(duration.toString(), "1 metai 1 mėnuo 1 savaitė 1 diena 1 valanda 1 minutė ir 1 sekundė");
        test.done();
    },
    //test cases for lv-LV
    testDurFmtLVFormatShortDefaultStyle: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "lv-LV",
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
        test.equal(duration.toString(), '1 g. 1 m. 1 n. 1 d. 1 h 1 min 1 s');
        test.done();
    },
    testDurFmtLVFormatShortText: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "lv-LV",
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
        test.equal(duration.toString(), '1 g. 1 m. 1 n. 1 d. 1 h 1 min 1 s');
        test.done();
    },
    testDurFmtLVFormatShortClock: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "lv-LV",
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
        test.equal(duration.toString(), '1 g. 1 m. 1 n. 1 d. 01:01:01');
        test.done();
    },
    testDurFmtLVFormatMedium: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "lv-LV",
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
        test.equal(duration.toString(), '1 g., 1 m., 1 n., 1 d., 1 h, 1 min, 1 s');
        test.done();
    },
    testDurFmtLVFormatLong: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "lv-LV",
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
        test.equal(duration.toString(), "1 g., 1 mēn., 1 ned., 1 d., 1 st., 1 min, 1 sek.");
        test.done();
    },
    testDurFmtLVFormatFull: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "lv-LV",
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
        test.equal(duration.toString(), "1 gads, 1 mēnesis, 1 nedēļa, 1 diena, 1 stunda, 1 minūte un 1 sekunde");
        test.done();
    },
    //test cases for mk-MK
    testDurFmtMKFormatShortDefaultStyle: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "mk-MK",
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
        test.equal(duration.toString(), '1 г., 1 м., 1 с., 1 д., 1 ч., 1 м., 1 с.');
        test.done();
    },
    testDurFmtMKFormatShortText: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "mk-MK",
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
        test.equal(duration.toString(), '1 г., 1 м., 1 с., 1 д., 1 ч., 1 м., 1 с.');
        test.done();
    },
    testDurFmtMKFormatShortClock: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "mk-MK",
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
        test.equal(duration.toString(), '1 г., 1 м., 1 с., 1 д., 01:01:01');
        test.done();
    },
    testDurFmtMKFormatMedium: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "mk-MK",
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
        test.equal(duration.toString(), '1 г., 1 м., 1 с., 1 д., 1 ч., 1 м., 1 с.');
        test.done();
    },
    testDurFmtMKFormatLong: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "mk-MK",
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
        test.equal(duration.toString(), '1 год., 1 мес., 1 сед., 1 ден, 1 ч., 1 мин., 1 сек.' );
        test.done();
    },
    testDurFmtMKFormatFull: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "mk-MK",
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
        test.equal(duration.toString(), "1 година, 1 месец, 1 седмица, 1 ден, 1 час, 1 минута и 1 секунда");
        test.done();
    },
    //test cases for mn-Cyrl-MN
    testDurFmtMNFormatShortDefaultStyle: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "mn-Cyrl-MN",
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
        test.equal(duration.toString(), "1ж 1с 1 д.х 1 хоног 1 ц 1 мин 1 сек");
        test.done();
    },
    testDurFmtMNFormatShortText: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "mn-Cyrl-MN",
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
        test.equal(duration.toString(), "1ж 1с 1 д.х 1 хоног 1 ц 1 мин 1 сек");
        test.done();
    },
    testDurFmtMNFormatShortClock: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "mn-Cyrl-MN",
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
        test.equal(duration.toString(), "1ж 1с 1 д.х 1 хоног 01:01:01");
        test.done();
    },
    testDurFmtMNFormatMedium: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "mn-Cyrl-MN",
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
        test.equal(duration.toString(), '1ж 1с 1 д.х 1 хоног 1 ц 1 мин 1 сек');
        test.done();
    },
    testDurFmtMNFormatLong: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "mn-Cyrl-MN",
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
        test.equal(duration.toString(), "1 жил 1 сар 1 д.х 1 хоног 1 цаг 1 мин 1 сек");
        test.done();
    },
    testDurFmtMNFormatFull: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "mn-Cyrl-MN",
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
        test.equal(duration.toString(), "1 жил 1 сар 1 долоо хоног 1 хоног 1 цаг 1 минут 1 секунд");
        test.done();
    },
    //test cases for ms-Latn-MY
    testDurFmtMSFormatShortDefaultStyle: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ms-Latn-MY",
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
        test.equal(duration.toString(), "1 thn 1 bln 1 mgu 1 h 1 j 1 min 1 s");
        test.done();
    },
    testDurFmtMSFormatShortText: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ms-Latn-MY",
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
        test.equal(duration.toString(), "1 thn 1 bln 1 mgu 1 h 1 j 1 min 1 s");
        test.done();
    },
    testDurFmtMSFormatShortClock: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ms-Latn-MY",
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
        test.equal(duration.toString(), "1 thn 1 bln 1 mgu 1 h 1:01:01");
        test.done();
    },
    testDurFmtMSFormatMedium: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ms-Latn-MY",
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
        test.equal(duration.toString(), '1 thn, 1 bln, 1 mgu, 1 h, 1 j, 1 min, 1 s');
        test.done();
    },
    testDurFmtMSFormatLong: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ms-Latn-MY",
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
        test.equal(duration.toString(), "1 thn, 1 bln, 1 mgu, 1 hari, 1 j, 1 min, 1 saat");
        test.done();
    },
    testDurFmtMSFormatFull: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ms-Latn-MY",
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
        test.equal(duration.toString(), "1 tahun, 1 bulan, 1 minggu, 1 hari, 1 jam, 1 minit, 1 saat");
        test.done();
    },
    //test cases for nb-NO
    testDurFmtNBFormatShortDefaultStyle: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "nb-NO",
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
        test.equal(duration.toString(), "1å, 1 m, 1u, 1d, 1t, 1m, 1s");
        test.done();
    },
    testDurFmtNBFormatShortText: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "nb-NO",
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
        test.equal(duration.toString(), "1å, 1 m, 1u, 1d, 1t, 1m, 1s");
        test.done();
    },
    testDurFmtNBFormatShortClock: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "nb-NO",
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
        test.equal(duration.toString(), "1å, 1 m, 1u, 1d, 01:01:01");
        test.done();
    },
    testDurFmtNBFormatMedium: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "nb-NO",
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
        test.equal(duration.toString(), '1å, 1 m, 1u, 1d, 1t, 1m, 1s');
        test.done();
    },
    testDurFmtNBFormatLong: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "nb-NO",
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
        test.equal(duration.toString(), "1 år, 1 md., 1 u, 1 d, 1 t, 1 min, 1 sek");
        test.done();
    },
    testDurFmtNBFormatFull: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "nb-NO",
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
        test.equal(duration.toString(), "1 år, 1 måned, 1 uke, 1 døgn, 1 time, 1 minutt og 1 sekund");
        test.done();
    },
    //test cases for nl-NL
    testDurFmtNLFormatShortDefaultStyle: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "nl-NL",
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
        test.equal(duration.toString(), "1 jr, 1 m, 1 w, 1 d, 1 u, 1 m, 1 s");
        test.done();
    },
    testDurFmtNLFormatShortText: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "nl-NL",
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
        test.equal(duration.toString(), "1 jr, 1 m, 1 w, 1 d, 1 u, 1 m, 1 s");
        test.done();
    },
    testDurFmtNLFormatShortClock: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "nl-NL",
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
        test.equal(duration.toString(), "1 jr, 1 m, 1 w, 1 d, 01:01:01");
        test.done();
    },
    testDurFmtNLFormatMedium: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "nl-NL",
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
        test.equal(duration.toString(), '1 jr, 1 m, 1 w, 1 d, 1 u, 1 m, 1 s');
        test.done();
    },
    testDurFmtNLFormatLong: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "nl-NL",
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
        test.equal(duration.toString(), "1 jr, 1 mnd, 1 wk, 1 dag, 1 uur, 1 min, 1 sec");
        test.done();
    },
    testDurFmtNLFormatFull: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "nl-NL",
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
        test.equal(duration.toString(), "1 jaar, 1 maand, 1 week, 1 dag, 1 uur, 1 minuut en 1 seconde");
        test.done();
    },
    //test cases for pl-PL
    testDurFmtPLFormatShortDefaultStyle: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "pl-PL",
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
        test.equal(duration.toString(), '1 r., 1 m-c, 1 t., 1 d., 1 h, 1 min, 1 s');
        test.done();
    },
    testDurFmtPLFormatShortText: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "pl-PL",
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
        test.equal(duration.toString(), '1 r., 1 m-c, 1 t., 1 d., 1 h, 1 min, 1 s');
        test.done();
    },
    testDurFmtPLFormatShortClock: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "pl-PL",
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
        test.equal(duration.toString(), '1 r., 1 m-c, 1 t., 1 d., 01:01:01');
        test.done();
    },
    testDurFmtPLFormatMedium: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "pl-PL",
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
        test.equal(duration.toString(), '1 r., 1 m-c, 1 t., 1 d., 1 h, 1 min, 1 s');
        test.done();
    },
    testDurFmtPLFormatLong: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "pl-PL",
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
        test.equal(duration.toString(), '1 rok, 1 mies., 1 tydz., 1 dzień, 1 godz., 1 min, 1 sek.');
        test.done();
    },
    testDurFmtPLFormatFull: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "pl-PL",
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
        test.equal(duration.toString(), '1 rok, 1 miesiąc, 1 tydzień, 1 dzień, 1 godzina, 1 minuta i 1 sekunda');
        test.done();
    },
    //test cases for pt-BR
    testDurFmtPTFormatShortDefaultStyle: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "pt-BR",
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
        test.equal(duration.toString(), "1 ano 1 mês 1 sem. 1 dia 1 h 1 min 1 s");
        test.done();
    },
    testDurFmtPTFormatShortText: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "pt-BR",
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
        test.equal(duration.toString(), "1 ano 1 mês 1 sem. 1 dia 1 h 1 min 1 s");
        test.done();
    },
    testDurFmtPTFormatShortClock: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "pt-BR",
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
        test.equal(duration.toString(), "1 ano 1 mês 1 sem. 1 dia 01:01:01");
        test.done();
    },
    testDurFmtPTFormatMedium: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "pt-BR",
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
        test.equal(duration.toString(), "1 ano, 1 mês, 1 sem., 1 dia, 1 h, 1 min, 1 s");
        test.done();
    },
    testDurFmtPTFormatLong: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "pt-BR",
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
        test.equal(duration.toString(), "1 ano, 1 mês, 1 sem., 1 dia, 1 h, 1 min, 1 s");
        test.done();
    },
    testDurFmtPTFormatFull: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "pt-BR",
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
        test.equal(duration.toString(), "1 ano, 1 mês, 1 semana, 1 dia, 1 hora, 1 minuto e 1 segundo");
        test.done();
    },
    //test cases for ro-RO
    testDurFmtROFormatShortDefaultStyle: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ro-RO",
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
        test.equal(duration.toString(), "1 a, 1 l, 1 săpt., 1 z, 1 h, 1 m, 1 s");
        test.done();
    },
    testDurFmtROFormatShortText: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ro-RO",
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
        test.equal(duration.toString(), "1 a, 1 l, 1 săpt., 1 z, 1 h, 1 m, 1 s");
        test.done();
    },
    testDurFmtROFormatShortClock: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ro-RO",
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
        test.equal(duration.toString(), "1 a, 1 l, 1 săpt., 1 z, 01:01:01");
        test.done();
    },
    testDurFmtROFormatMedium: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ro-RO",
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
        test.equal(duration.toString(), '1 a, 1 l, 1 săpt., 1 z, 1 h, 1 m, 1 s');
        test.done();
    },
    testDurFmtROFormatLong: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ro-RO",
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
        test.equal(duration.toString(), "1 an, 1 lună, 1 săpt., 1 zi, 1 oră, 1 min., 1 s");
        test.done();
    },
    testDurFmtROFormatFull: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ro-RO",
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
        test.equal(duration.toString(), "1 an, 1 lună, 1 săptămână, 1 zi, 1 oră, 1 minut, 1 secundă");
        test.done();
    },
    //test cases for ru-RU
    testDurFmtRUFormatShortDefaultStyle: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ru-RU",
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
        test.equal(duration.toString(), "1 г. 1 м. 1 н. 1 д. 1 ч 1 мин 1 с");
        test.done();
    },
    testDurFmtRUFormatShortText: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ru-RU",
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
        test.equal(duration.toString(), "1 г. 1 м. 1 н. 1 д. 1 ч 1 мин 1 с");
        test.done();
    },
    testDurFmtRUFormatShortClock: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ru-RU",
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
        test.equal(duration.toString(), '1 г. 1 м. 1 н. 1 д. 01:01:01');
        test.done();
    },
    testDurFmtRUFormatMedium: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ru-RU",
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
        test.equal(duration.toString(), '1 г. 1 м. 1 н. 1 д. 1 ч 1 мин 1 с');
        test.done();
    },
    testDurFmtRUFormatLong: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ru-RU",
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
        test.equal(duration.toString(), '1 г. 1 мес. 1 нед. 1 дн. 1 ч 1 мин 1 с');
        test.done();
    },
    testDurFmtRUFormatFull: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "ru-RU",
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
        test.equal(duration.toString(), '1 год 1 месяц 1 неделя 1 день 1 час 1 минута 1 секунда');
        test.done();
    },
    //test cases for sk-SK
    testDurFmtSKFormatShortDefaultStyle: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "sk-SK",
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
        test.equal(duration.toString(), "1 r., 1 m., 1 t., 1 d., 1 h, 1 min, 1 s");
        test.done();
    },
    testDurFmtSKFormatShortText: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "sk-SK",
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
        test.equal(duration.toString(), "1 r., 1 m., 1 t., 1 d., 1 h, 1 min, 1 s");
        test.done();
    },
    testDurFmtSKFormatShortClock: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "sk-SK",
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
        test.equal(duration.toString(), "1 r., 1 m., 1 t., 1 d., 1:01:01");
        test.done();
    },
    testDurFmtSKFormatMedium: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "sk-SK",
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
        test.equal(duration.toString(), '1 r., 1 m., 1 t., 1 d., 1 h, 1 min, 1 s');
        test.done();
    },
    testDurFmtSKFormatLong: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "sk-SK",
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
        test.equal(duration.toString(), "1 r., 1 mes., 1 týž., 1 deň, 1 h, 1 min, 1 s");
        test.done();
    },
    testDurFmtSKFormatFull: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "sk-SK",
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
        test.equal(duration.toString(), "1 rok, 1 mesiac, 1 týždeň, 1 deň, 1 hodina, 1 minúta, 1 sekunda");
        test.done();
    },
    //test cases for sq-AL
    testDurFmtSQFormatShortDefaultStyle: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "sq-AL",
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
        test.equal(duration.toString(), "1 vit, 1 muaj, 1 javë, 1 ditë, 1 orë, 1 min., 1 sek.");
        test.done();
    },
    testDurFmtSQFormatShortText: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "sq-AL",
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
        test.equal(duration.toString(), "1 vit, 1 muaj, 1 javë, 1 ditë, 1 orë, 1 min., 1 sek.");
        test.done();
    },
    testDurFmtSQFormatShortClock: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "sq-AL",
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
        test.equal(duration.toString(), "1 vit, 1 muaj, 1 javë, 1 ditë, 1:01:01");
        test.done();
    },
    testDurFmtSQFormatMedium: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "sq-AL",
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
        test.equal(duration.toString(), "1 vit, 1 muaj, 1 javë, 1 ditë, 1 orë, 1 min., 1 sek.");
        test.done();
    },
    testDurFmtSQFormatLong: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "sq-AL",
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
        test.equal(duration.toString(), "1 vit, 1 muaj, 1 javë, 1 ditë, 1 orë, 1 min., 1 sek.");
        test.done();
    },
    testDurFmtSQFormatFull: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "sq-AL",
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
        test.equal(duration.toString(), "1 vit, 1 muaj, 1 javë, 1 ditë, 1 orë, 1 minutë e 1 sekondë");
        test.done();
    },
    //test cases for sr-Latn-RS
    testDurFmtSRFormatShortDefaultStyle: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "sr-Latn-RS",
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
        test.equal(duration.toString(), "1 g, 1 m, 1 n, 1 d, 1 č, 1 m, 1 s");
        test.done();
    },
    testDurFmtSRFormatShortText: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "sr-Latn-RS",
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
        test.equal(duration.toString(), "1 g, 1 m, 1 n, 1 d, 1 č, 1 m, 1 s");
        test.done();
    },
    testDurFmtSRFormatShortClock: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "sr-Latn-RS",
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
        test.equal(duration.toString(), "1 g, 1 m, 1 n, 1 d, 01:01:01");
        test.done();
    },
    testDurFmtSRFormatLong: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "sr-Latn-RS",
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
        test.equal(duration.toString(), "1 god, 1 mes., 1 ned., 1 dan, 1 sat, 1 min, 1 sek");
        test.done();
    },
    testDurFmtSRFormatFull: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "sr-Latn-RS",
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
        test.equal(duration.toString(), "1 godina, 1 mesec, 1 nedelja, 1 dan, 1 sat, 1 minut i 1 sekunda");
        test.done();
    },
    //test cases for th-TH
    testDurFmtTHFormatShortDefaultStyle: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "th-TH",
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
        test.equal(duration.toString(), "1ปี 1เดือน 1สัปดาห์ 1วัน 1ชม. 1นาที 1วิ");
        test.done();
    },
    testDurFmtTHFormatShortText: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "th-TH",
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
        test.equal(duration.toString(), "1ปี 1เดือน 1สัปดาห์ 1วัน 1ชม. 1นาที 1วิ");
        test.done();
    },
    testDurFmtTHFormatShortClock: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "th-TH",
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
        test.equal(duration.toString(), "1ปี 1เดือน 1สัปดาห์ 1วัน 01:01:01");
        test.done();
    },
    testDurFmtTHFormatMedium: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "th-TH",
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
        test.equal(duration.toString(), "1ปี 1เดือน 1สัปดาห์ 1วัน 1ชม. 1นาที 1วิ");
        test.done();
    },
    testDurFmtTHFormatLong: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "th-TH",
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
        test.equal(duration.toString(), "1 ปี 1 เดือน 1 สัปดาห์ 1 วัน 1 ชม. 1 นาที 1 วิ");
        test.done();
    },
    testDurFmtTHFormatFull: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "th-TH",
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
        test.equal(duration.toString(), "1 ปี 1 เดือน 1 สัปดาห์ 1 วัน 1 ชั่วโมง 1 นาที และ 1 วินาที");
        test.done();
    },
    //test cases for uk-UA
    testDurFmtUKUAFormatShortDefaultStyle: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "uk-UA",
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
        test.equal(duration.toString(), '1р, 1м, 1т, 1д, 1г, 1х, 1с');
        test.done();
    },
    testDurFmtUKUAFormatShortText: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "uk-UA",
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
        test.equal(duration.toString(), '1р, 1м, 1т, 1д, 1г, 1х, 1с');
        test.done();
    },
    testDurFmtUKUAFormatShortClock: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "uk-UA",
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
        test.equal(duration.toString(), "1р, 1м, 1т, 1д, 01:01:01");
        test.done();
    },
    testDurFmtUKUAFormatMedium: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "uk-UA",
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
        test.equal(duration.toString(), '1р, 1м, 1т, 1д, 1г, 1х, 1с');
        test.done();
    },
    testDurFmtUKUAFormatLong: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "uk-UA",
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
        test.equal(duration.toString(), "1 р., 1 міс., 1 тиж., 1 дн., 1 год, 1 хв, 1 с");
        test.done();
    },
    testDurFmtUKUAFormatFull: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "uk-UA",
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
        test.equal(duration.toString(), "1 рік, 1 місяць, 1 тиждень, 1 день, 1 година, 1 хвилина і 1 секунда");
        test.done();
    },
    //test cases for uz-Cyrl-UZ
    testDurFmtUZFormatShortDefaultStyle: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "uz-Cyrl-UZ",
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
        test.equal(duration.toString(), "1 й, 1 ой, 1 ҳафт, 1 к, 1 с, 1 дақ, 1 сон");
        test.done();
    },
    testDurFmtUZFormatShortText: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "uz-Cyrl-UZ",
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
        test.equal(duration.toString(), "1 й, 1 ой, 1 ҳафт, 1 к, 1 с, 1 дақ, 1 сон");
        test.done();
    },
    testDurFmtUZFormatShortClock: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "uz-Cyrl-UZ",
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
        test.equal(duration.toString(), "1 й, 1 ой, 1 ҳафт, 1 к, 01:01:01");
        test.done();
    },
    testDurFmtUZFormatMedium: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "uz-Cyrl-UZ",
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
        test.equal(duration.toString(), '1 й, 1 ой, 1 ҳафт, 1 к, 1 с, 1 дақ, 1 сон');
        test.done();
    },
    testDurFmtUZFormatLong: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "uz-Cyrl-UZ",
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
        test.equal(duration.toString(), "1 й, 1 ой, 1 ҳафт, 1 кун, 1 соат, 1 дақ, 1 сония");
        test.done();
    },
    testDurFmtUZFormatFull: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "uz-Cyrl-UZ",
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
        test.equal(duration.toString(), "1 йил, 1 ой, 1 ҳафта, 1 кун, 1 соат, 1 дақиқа, 1 сония");
        test.done();
    },
    //test cases for uz-Latn-UZ
    testDurFmtUZLATNFormatShortDefaultStyle: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "uz-Latn-UZ",
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
        test.equal(duration.toString(), "1 yil 1 oy 1 hafta 1 kun 1 soat 1 daq. 1 s");
        test.done();
    },
    testDurFmtUZLATNFormatShortText: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "uz-Latn-UZ",
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
        test.equal(duration.toString(), "1 yil 1 oy 1 hafta 1 kun 1 soat 1 daq. 1 s");
        test.done();
    },
    testDurFmtUZLATNFormatShortClock: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "uz-Latn-UZ",
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
        test.equal(duration.toString(), "1 yil 1 oy 1 hafta 1 kun 01:01:01");
        test.done();
    },
    testDurFmtUZLATNFormatMedium: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "uz-Latn-UZ",
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
        test.equal(duration.toString(), '1 yil 1 oy 1 hafta 1 kun 1 soat 1 daq. 1 s');
        test.done();
    },
    testDurFmtUZLATNFormatLong: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "uz-Latn-UZ",
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
        test.equal(duration.toString(), "1 yil 1 oy 1 hafta 1 kun 1 soat 1 daq. 1 son.");
        test.done();
    },
    testDurFmtUZLATNFormatFull: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "uz-Latn-UZ",
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
        test.equal(duration.toString(), "1 yil 1 oy 1 hafta 1 kun 1 soat 1 daqiqa 1 soniya");
        test.done();
    },
    //test cases for vietnemese
    testDurFmtVIFormatShortDefaultStyle: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "vi-VN",
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
        test.equal(duration.toString(), "1 năm 1 tháng 1 tuần 1 ngày 1 giờ 1 phút 1 giây");
        test.done();
    },
    testDurFmtVIFormatShortText: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "vi-VN",
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
        test.equal(duration.toString(), "1 năm 1 tháng 1 tuần 1 ngày 1 giờ 1 phút 1 giây");
        test.done();
    },
    testDurFmtVIFormatShortClock: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "vi-VN",
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
        test.equal(duration.toString(), "1 năm 1 tháng 1 tuần 1 ngày 01:01:01");
        test.done();
    },
    testDurFmtVIFormatMedium: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "vi-VN",
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
        test.equal(duration.toString(), '1 năm, 1 tháng, 1 tuần, 1 ngày, 1 giờ, 1 phút, 1 giây');
        test.done();
    },
    testDurFmtVIFormatLong: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "vi-VN",
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
        test.equal(duration.toString(), "1 năm, 1 tháng, 1 tuần, 1 ngày, 1 giờ, 1 phút, 1 giây");
        test.done();
    },
    testDurFmtVIFormatFull: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "vi-VN",
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
        test.equal(duration.toString(), "1 năm, 1 tháng, 1 tuần, 1 ngày, 1 giờ, 1 phút, 1 giây");
        test.done();
    },
    //test cases for zh-Hant-TW
    testDurFmtZHFormatShortDefaultStyle: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "zh-Hant-TW",
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
        test.equal(duration.toString(), "1 年1 個月1 週1 天1 小時1 分鐘1 秒");
        test.done();

    },
    testDurFmtZHFormatShortText: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "zh-Hant-TW",
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
        test.equal(duration.toString(), "1 年1 個月1 週1 天1 小時1 分鐘1 秒");
        test.done();
    },
    testDurFmtZHFormatShortClock: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "zh-Hant-TW",
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
        test.equal(duration.toString(), "1 年1 個月1 週1 天1:01:01");
        test.done();
    },
    testDurFmtZHFormatMedium: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "zh-Hant-TW",
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
        test.equal(duration.toString(), "1 年1 個月1 週1 天1 小時1 分鐘1 秒");
        test.done();
    },
    testDurFmtZHFormatLong: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "zh-Hant-TW",
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
        test.equal(duration.toString(), "1 年 1 個月 1 週 1 天 1 小時 1 分鐘 1 秒");
        test.done();
    },
    testDurFmtZHFormatFull: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "zh-Hant-TW",
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
        test.equal(duration.toString(), "1 年 1 個月 1 週 1 天 1 小時 1 分鐘 1 秒");
        test.done();
    },
    //test cases for zh-Hank-HK
    testDurFmtZHHKFormatShortDefaultStyle: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "zh-Hant-HK",
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
        test.equal(duration.toString(), "1年1個月1週1日1小時1分1秒");
        test.done();
    },
    testDurFmtZHHKFormatShortText: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "zh-Hant-HK",
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
        test.equal(duration.toString(), "1年1個月1週1日1小時1分1秒");
        test.done();
    },
    testDurFmtZHHKFormatShortClock: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "zh-Hant-HK",
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
        test.equal(duration.toString(), "1年1個月1週1日1:01:01");
        test.done();
    },
    testDurFmtZHHKFormatMedium: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "zh-Hant-HK",
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
        test.equal(duration.toString(), "1年1個月1週1日1小時1分1秒");
        test.done();
    },
    testDurFmtZHHKFormatLong: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "zh-Hant-HK",
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
        test.equal(duration.toString(), "1 年 1 個月 1 星期 1 日 1 小時 1 分鐘 1 秒");
        test.done();
    },
    testDurFmtZHHKFormatFull: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "zh-Hant-HK",
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
        test.equal(duration.toString(), "1 年 1 個月 1 星期 1 日 1 小時 1 分鐘 1 秒");
        test.done();
    },
    //test cases for tr-TR
    testDurFmtTRFormatShortDefaultStyle: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "tr-TR",
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
        test.equal(duration.toString(), "1y 1a 1h 1g 1 sa 1d 1sn");
        test.done();
    },
    testDurFmtTRFormatShortText: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "tr-TR",
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
        test.equal(duration.toString(), "1y 1a 1h 1g 1 sa 1d 1sn");
        test.done();
    },
    testDurFmtTRFormatShortClock: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "tr-TR",
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
        test.equal(duration.toString(), "1y 1a 1h 1g 01:01:01");
        test.done();
    },
    testDurFmtTRFormatMedium: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "tr-TR",
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
        test.equal(duration.toString(), '1y 1a 1h 1g 1 sa 1d 1sn');
        test.done();
    },
    testDurFmtTRFormatLong: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "tr-TR",
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
        test.equal(duration.toString(), "1 yıl 1 ay 1 hf. 1 gün 1 sa. 1 dk. 1 sn.");
        test.done();
    },
    testDurFmtTRFormatFull: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "tr-TR",
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
        test.equal(duration.toString(), "1 yıl 1 ay 1 hafta 1 gün 1 saat 1 dakika 1 saniye");
        test.done();
    },
    //test cases for swedish
    testDurFmtSVFormatShortDefaultStyle: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "sv-SE",
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
        test.equal(duration.toString(), "1å 1m 1v 1d 1h 1m 1s");
        test.done();
    },
    testDurFmtSVFormatShortText: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "sv-SE",
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
        test.equal(duration.toString(), "1å 1m 1v 1d 1h 1m 1s");
        test.done();
    },
    testDurFmtSVFormatShortClock: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "sv-SE",
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
        test.equal(duration.toString(), "1å 1m 1v 1d 01:01:01");
        test.done();
    },
    testDurFmtSVFormatMedium: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "sv-SE",
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
        test.equal(duration.toString(), '1å, 1m, 1v, 1d, 1h, 1m, 1s');
        test.done();
    },
    testDurFmtSVFormatLong: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "sv-SE",
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
        test.equal(duration.toString(), "1 år, 1 mån, 1 v, 1 d, 1 tim, 1 min, 1 s");
        test.done();
    },
    testDurFmtSVFormatFull: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "sv-SE",
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
        test.equal(duration.toString(), "1 år, 1 månad, 1 vecka, 1 dygn, 1 timme, 1 minut, 1 sekund");
        test.done();
    },
    //test cases for sl-SI
    testDurFmtSLFormatShortDefaultStyle: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "sl-SI",
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
        test.equal(duration.toString(), "1 l, 1 m, 1 t, 1 d, 1 h, 1 min, 1 s");
        test.done();
    },
    testDurFmtSLFormatShortText: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "sl-SI",
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
        test.equal(duration.toString(), "1 l, 1 m, 1 t, 1 d, 1 h, 1 min, 1 s");
        test.done();
    },
    testDurFmtSLFormatShortClock: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "sl-SI",
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
        test.equal(duration.toString(), "1 l, 1 m, 1 t, 1 d, 01:01:01");
        test.done();
    },
    testDurFmtSLFormatMedium: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "sl-SI",
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
        test.equal(duration.toString(), '1 l, 1 m, 1 t, 1 d, 1 h, 1 min, 1 s');
        test.done();
    },
    testDurFmtSLFormatLong: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "sl-SI",
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
        test.equal(duration.toString(), "1 l, 1 m, 1 t, 1 d, 1 h, 1 min, 1 sek.");
        test.done();
    },
    testDurFmtSLFormatFull: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "sl-SI",
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
        test.equal(duration.toString(), "1 leto, 1 mesec, 1 teden, 1 dan, 1 ura, 1 minuta in 1 sekunda");
        test.done();
    },
    //test cases for portuguese pt-PU
    testDurFmtPTPTFormatShortDefaultStyle: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "pt-PT",
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
        test.equal(duration.toString(), "1 ano, 1 mês, 1 sem., 1 dia, 1 h, 1 min, 1 s");
        test.done();
    },
    testDurFmtPTPTFormatShortText: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "pt-PT",
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
        test.equal(duration.toString(), "1 ano, 1 mês, 1 sem., 1 dia, 1 h, 1 min, 1 s");
        test.done();
    },
    testDurFmtPTPTFormatShortClock: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "pt-PT",
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
        test.equal(duration.toString(), "1 ano, 1 mês, 1 sem., 1 dia, 01:01:01");
        test.done();
    },
    testDurFmtPTPTFormatMedium: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "pt-PT",
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
        test.equal(duration.toString(), '1 ano, 1 mês, 1 sem., 1 dia, 1 h, 1 min, 1 s');
        test.done();
    },
    testDurFmtPTPTFormatLong: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "pt-PT",
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
        test.equal(duration.toString(), "1 ano, 1 mês, 1 sem., 1 dia, 1 h, 1 min, 1 s");
        test.done();
    },
    testDurFmtPTPTFormatFull: function(test) {
        test.expect(2);
        var fmt = new DurationFmt({
            locale: "pt-PT",
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
        test.equal(duration.toString(), "1 ano, 1 mês, 1 semana, 1 dia, 1 hora, 1 minuto e 1 segundo");
        test.done();
    }
};