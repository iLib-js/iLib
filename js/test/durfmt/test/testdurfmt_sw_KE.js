/*
 * testdurfmt_sw-KE.js - test the duration formatter object
 *
 * Copyright © 2017, JEDLSoft
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

var DurationFmt = require("./../lib/DurationFmt.js");
function testDurFmtKEFormatShortDefaultStyle() {
    var fmt = new DurationFmt({
        locale: "sw-Latn-KE",
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
    assertEquals("mwaka 1, mwezi 1, wiki 1, siku 1, saa 1, dakika 1, sekunde 1", duration.toString());
};

function testDurFmtKEFormatShortText() {
    var fmt = new DurationFmt({
        locale: "sw-Latn-KE",
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
    assertEquals("mwaka 1, mwezi 1, wiki 1, siku 1, saa 1, dakika 1, sekunde 1", duration.toString());
};

function testDurFmtKEFormatShortClock() {
    var fmt = new DurationFmt({
        locale: "sw-Latn-KE",
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
    assertEquals("mwaka 1, mwezi 1, wiki 1, siku 1, 01:01:01", duration.toString());
};

function testDurFmtKEFormatMedium() {
    var fmt = new DurationFmt({
        locale: "sw-Latn-KE",
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
    assertEquals("mwaka 1, mwezi 1, wiki 1, siku 1, saa 1, dakika 1, sekunde 1", duration.toString());
};

function testDurFmtKEFormatLong() {
    var fmt = new DurationFmt({
        locale: "sw-Latn-KE",
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
    assertEquals("mwaka 1, mwezi 1, wiki 1, siku 1, saa 1, dakika 1, sekunde 1", duration.toString());
};

function testDurFmtKEFormatFull() {
    var fmt = new DurationFmt({
        locale: "sw-Latn-KE",
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
    assertEquals("mwaka 1, mwezi 1, wiki 1, siku 1, saa 1, dakika 1 na sekunde 1", duration.toString());
};


function testDurFmtKEAsyncWithLocale() {
    new DurationFmt({
        locale: "sw-Latn-KE",
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
            assertEquals("miaka 2, miezi 2, wiki 2, siku 2, saa 2, dakika 2 na sekunde 2", duration.toString());
        }
    });
};

function testDurFmtKEFormatShortClockAsync() {
    new DurationFmt({
        locale: "sw-Latn-KE",
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
            assertEquals("mwaka 1, mwezi 1, wiki 1, siku 1, 01:01:01", duration.toString());
        }
    });
};
