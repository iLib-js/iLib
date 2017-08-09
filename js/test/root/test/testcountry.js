/*
 * testcountry.js - test the country routines
 *
 * Copyright © 2017, LGE
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

var Country = require("./../lib/Country.js");

function testCountryConstructorEmpty() {
    var ctry = new Country();

    assertNotNull(ctry);
}

function testCountryDefaultLocale() {
    var ctry = new Country();
    assertNotNull(ctry);

    var locale = ctry.getLocale();
    assertNotUndefined(locale);
    assertEquals("en-US", locale.toString());
}

function testCountryWrongLocale() {
    var ctry = new Country({
        locale: "abc-YZ"
    });
    assertNotNull(ctry);

    assertEquals("Congo - Kinshasa", ctry.getName("CD"));
    assertEquals("CD", ctry.getCode("Congo - Kinshasa"));
    var locale = ctry.getLocale();
    assertNotUndefined(locale);
    assertEquals("abc-YZ", locale.toString());
}

function testCountryLocale1() {
    var ctry = new Country({
        locale: "ko-KR"
    });
    assertNotNull(ctry);

    assertEquals("콩고-킨샤사", ctry.getName("CD"));
    assertEquals("CD", ctry.getCode("콩고-킨샤사"));
    var locale = ctry.getLocale();
    assertEquals("ko-KR", locale.toString());
}

function testCountryLocale2() {
    var ctry = new Country({
        locale: "en-US"
    });
    assertNotNull(ctry);

    assertEquals("Congo - Kinshasa", ctry.getName("CD"));
    assertEquals("CD", ctry.getCode("Congo - Kinshasa"));
    var locale = ctry.getLocale();
    assertEquals("en-US", locale.toString());
}

function testCountryLocale3() {
    var ctry = new Country({
        locale: "zh-Hans-CN"
    });
    assertNotNull(ctry);

    assertEquals("刚果（金）", ctry.getName("CD"));
    assertEquals("CD", ctry.getCode("刚果（金）"));
    var locale = ctry.getLocale();
    assertEquals("zh-Hans-CN", locale.toString());
}

function testCountryLocale4() {
    var ctry = new Country({
        locale: "ja-JP"
    });
    assertNotNull(ctry);

    assertEquals("コンゴ民主共和国(キンシャサ)", ctry.getName("CD"));
    assertEquals("CD", ctry.getCode("コンゴ民主共和国(キンシャサ)"));
    var locale = ctry.getLocale();
    assertEquals("ja-JP", locale.toString());
}

function testCountryGetByCodeUnknown() {
    try {
        var ctry = new Country();
        ctry.getName('xxx');
    } catch (e) {
        assertEquals("Country xxx is unknown", e);
    }
}

function testCountryGetByNameUnknown() {
    try {
        var ctry = new Country();
        ctry.getCode('xxx');
    } catch (e) {
        assertEquals("Country xxx is unknown", e);
    }
}

function testCountryAsync() {
    new Country({
        locale: "ja-JP",
        sync: false,
        onLoad: function (ctry) {
            assertNotNull(ctry);

            assertEquals("日本", ctry.getName("JP"));
            assertEquals("JP", ctry.getCode("日本"));
            var locale = ctry.getLocale();
            assertEquals("ja-JP", locale.toString());
        }
    });
}