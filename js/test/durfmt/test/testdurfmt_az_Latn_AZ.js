/*
 * testdurfmt_az-Latn-AZ.js - test the duration formatter object
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

var DurationFmt = require("./../lib/DurationFmt.js");
function testDurFmtAZFormatShortDefaultStyle() {
    var fmt = new DurationFmt({
        locale: "az-Latn-AZ",
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
    assertEquals("1i 1a 1h 1g 1s 1d 1s", duration.toString());
};

function testDurFmtAZFormatShortText() {
    var fmt = new DurationFmt({
        locale: "az-Latn-AZ",
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
    assertEquals("1i 1a 1h 1g 1s 1d 1s", duration.toString());
};

function testDurFmtAZFormatShortClock() {
    var fmt = new DurationFmt({
        locale: "az-Latn-AZ",
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
    assertEquals("1i 1a 1h 1g 01:01:01", duration.toString());
};

function testDurFmtAZFormatMedium() {
    var fmt = new DurationFmt({
        locale: "az-Latn-AZ",
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
    assertEquals("1 il 1 ay 1 həf 1 gün 1 saat 1 dəq 1 san", duration.toString());
};

function testDurFmtAZFormatLong() {
    var fmt = new DurationFmt({
        locale: "az-Latn-AZ",
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
    assertEquals("1 il 1 ay 1 həf 1 gün 1 saat 1 dəq 1 san", duration.toString());
};

function testDurFmtAZFormatFull() {
    var fmt = new DurationFmt({
        locale: "az-Latn-AZ",
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
    assertEquals("1 il, 1 ay, 1 həftə, 1 gün, 1 saat, 1 dəqiqə, 1 saniyə", duration.toString());
};


function testDurFmtAZAsyncWithLocale() {
    var callbackCalled = false;
    new DurationFmt({
        locale: "az-Latn-AZ",
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
            assertEquals("2 il, 2 ay, 2 həftə, 2 gün, 2 saat, 2 dəqiqə, 2 saniyə", duration.toString());
            callbackCalled = true;
        }
    });

    assertTrue(callbackCalled);
};

function testDurFmtAZFormatShortClockAsync() {
    var callbackCalled = false;
    new DurationFmt({
        locale: "az-Latn-AZ",
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
            assertEquals("1i 1a 1h 1g 01:01:01", duration.toString());
            callbackCalled = true;
        }
    });
    assertTrue(callbackCalled);
};
