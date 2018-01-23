/*
 * testdurfmt_km-KH.js - test the duration formatter object
 *
 * Copyright © 2016, JEDLSoft
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

var DurationFmt = require("../lib/DurationFmt.js");
function testDurFmtKHFormatShortDefaultStyle() {
    var fmt = new DurationFmt({
        locale: "km-KH",
        length: "short"
    });
    assertNotNull(fmt);

    var duration = fmt.format({
        year: 1,
        month: 1,
        week: 1,
        day: 1,
        hour: 1,
        minute: 1,
        second: 1
    });
    assertEquals("1 ឆ្នាំ 1 ខែ 1 សប្ដាហ៍ 1 ថ្ងៃ 1 ម៉ោង 1 នាទី 1 វិនាទី", duration.toString());
};

function testDurFmtKHFormatShortText() {
    var fmt = new DurationFmt({
        locale: "km-KH",
        length: "short",
        style: "text"
    });
    assertNotNull(fmt);

    var duration = fmt.format({
        year: 1,
        month: 1,
        week: 1,
        day: 1,
        hour: 1,
        minute: 1,
        second: 1
    });
    assertEquals("1 ឆ្នាំ 1 ខែ 1 សប្ដាហ៍ 1 ថ្ងៃ 1 ម៉ោង 1 នាទី 1 វិនាទី", duration.toString());
};

function testDurFmtKHFormatShortClock() {
    var fmt = new DurationFmt({
        locale: "km-KH",
        length: "short",
        style: "clock"
    });
    assertNotNull(fmt);

    var duration = fmt.format({
        year: 1,
        month: 1,
        week: 1,
        day: 1,
        hour: 1,
        minute: 1,
        second: 1
    });
    assertEquals("1 ឆ្នាំ 1 ខែ 1 សប្ដាហ៍ 1 ថ្ងៃ 1:01:01", duration.toString());
};

function testDurFmtKHFormatMedium() {
    var fmt = new DurationFmt({
        locale: "km-KH",
        length: "medium"
    });
    assertNotNull(fmt);

    var duration = fmt.format({
        year: 1,
        month: 1,
        week: 1,
        day: 1,
        hour: 1,
        minute: 1,
        second: 1
    });
    assertEquals("1 ឆ្នាំ 1 ខែ 1 សប្ដាហ៍ 1 ថ្ងៃ 1 ម៉ោង 1 នាទី 1 វិនាទី", duration.toString());
};

function testDurFmtKHFormatLong() {
    var fmt = new DurationFmt({
        locale: "km-KH",
        length: "long"
    });
    assertNotNull(fmt);

    var duration = fmt.format({
        year: 1,
        month: 1,
        week: 1,
        day: 1,
        hour: 1,
        minute: 1,
        second: 1
    });
    assertEquals("1 ឆ្នាំ 1 ខែ 1 សប្ដាហ៍ 1 ថ្ងៃ 1 ម៉ោង 1 នាទី 1 វិនាទី", duration.toString());
};

function testDurFmtKHFormatFull() {
    var fmt = new DurationFmt({
        locale: "km-KH",
        length: "full"
    });
    assertNotNull(fmt);

    var duration = fmt.format({
        year: 1,
        month: 1,
        week: 1,
        day: 1,
        hour: 1,
        minute: 1,
        second: 1
    });
    assertEquals("1 ឆ្នាំ 1 ខែ 1 សប្ដាហ៍ 1 ថ្ងៃ 1 ម៉ោង 1 នាទី 1 វិនាទី", duration.toString());
};


function testDurFmtKHAsyncWithLocale() {
    new DurationFmt({
        locale: "km-KH",
        length: "full",
        sync: false,
        onLoad: function (fmt) {
            assertNotNull(fmt);

            var duration = fmt.format({
                year: 2,
                month: 2,
                week: 2,
                day: 2,
                hour: 2,
                minute: 2,
                second: 2
            });
            assertEquals("2 ឆ្នាំ 2 ខែ 2 សប្ដាហ៍ 2 ថ្ងៃ 2 ម៉ោង 2 នាទី 2 វិនាទី", duration.toString());
        }
    });
};

function testDurFmtKHFormatShortClockAsync() {
    new DurationFmt({
        locale: "km-KH",
        length: "short",
        style: "clock",
        sync: false,
        onLoad: function (fmt) {
            assertNotNull(fmt);

            var duration = fmt.format({
                year: 1,
                month: 1,
                week: 1,
                day: 1,
                hour: 1,
                minute: 1,
                second: 1
            });
            assertEquals("1 ឆ្នាំ 1 ខែ 1 សប្ដាហ៍ 1 ថ្ងៃ 1:01:01", duration.toString());
        }
    });
};
