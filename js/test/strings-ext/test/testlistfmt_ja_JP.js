/*
 * testlistfmt_ja_JP.js - test the list formatter object
 *
 * Copyright © 2017, JEDLSoft
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSe-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var ListFmt = require("../lib/ListFmt.js");

function testListFmtjaJPNumberFormatOne() {
    var fmt = new ListFmt({
        locale: "ja-JP"
    });

    assertNotNull(fmt);
    assertEquals("いち", fmt.format(["いち"]));
}

function testListFmtjaJPNumberFormatTwo() {
    var fmt = new ListFmt({
        locale: "ja-JP"
    });

    assertNotNull(fmt);
    assertEquals("いち、に", fmt.format(["いち",　"に"]));
}

function testListFmtjaJPNumberFormatThree() {
    var fmt = new ListFmt({
        locale: "ja-JP"
    });

    assertNotNull(fmt);
    assertEquals("いち、に、さん", fmt.format(["いち",　"に",　"さん"]));
}

function testListFmtjaJPNumberFormatFour() {
    var fmt = new ListFmt({
        locale: "ja-JP"
    });

    assertNotNull(fmt);
    assertEquals("いち、に、さん、し", fmt.format(["いち",　"に",　"さん",　"し"]));
}

function testListFmtjaJPNumberFormatFive() {
    var fmt = new ListFmt({
        locale: "ja-JP"
    });

    assertNotNull(fmt);
    assertEquals("いち、に、さん、し、ご", fmt.format(["いち",　"に",　"さん",　"し",　"ご"]));
}

//ja-JP : unit style

function testListFmtUnitStylejaJPNumberFormatOne() {
    var fmt = new ListFmt({
        locale: "ja-JP",
        style:"unit"
    });

    assertNotNull(fmt);
    assertEquals("いち", fmt.format(["いち"]));
}

function testListFmtUnitStylejaJPNumberFormatTwo() {
    var fmt = new ListFmt({
        locale: "ja-JP",
        style:"unit"
    });

    assertNotNull(fmt);
    assertEquals("いちに", fmt.format(["いち",　"に"]));
}

function testListFmtUnitStylejaJPNumberFormatThree() {
    var fmt = new ListFmt({
        locale: "ja-JP",
        style:"unit"
    });

    assertNotNull(fmt);
    assertEquals("いちにさん", fmt.format(["いち",　"に",　"さん"]));
}

function testListFmtUnitStylejaJPNumberFormatFour() {
    var fmt = new ListFmt({
        locale: "ja-JP",
        style:"unit"
    });

    assertNotNull(fmt);
    assertEquals("いちにさんし", fmt.format(["いち",　"に",　"さん",　"し"]));
}

function testListFmtUnitStylejaJPNumberFormatFive() {
    var fmt = new ListFmt({
        locale: "ja-JP",
        style:"unit"
    });

    assertNotNull(fmt);
    assertEquals("いちにさんしご", fmt.format(["いち",　"に",　"さん",　"し",　"ご"]));
}

function testListFmtUnitStylejaJPNumberFormatOneMedium() {
    var fmt = new ListFmt({
        locale: "ja-JP",
        style:"unit",
        length: "medium"
    });

    assertNotNull(fmt);
    assertEquals("いち", fmt.format(["いち"]));
}

function testListFmtUnitStylejaJPNumberFormatTwoMedium() {
    var fmt = new ListFmt({
        locale: "ja-JP",
        style:"unit",
        length: "medium"
    });

    assertNotNull(fmt);
    assertEquals("いち に", fmt.format(["いち",　"に"]));
}

function testListFmtUnitStylejaJPNumberFormatThreeMedium() {
    var fmt = new ListFmt({
        locale: "ja-JP",
        style:"unit",
        length: "medium"
    });

    assertNotNull(fmt);
    assertEquals("いち に さん", fmt.format(["いち",　"に",　"さん"]));
}

function testListFmtUnitStylejaJPNumberFormatFourMedium() {
    var fmt = new ListFmt({
        locale: "ja-JP",
        style:"unit",
        length: "medium"
    });

    assertNotNull(fmt);
    assertEquals("いち に さん し", fmt.format(["いち",　"に",　"さん",　"し"]));
}

function testListFmtUnitStylejaJPNumberFormatFiveMedium() {
    var fmt = new ListFmt({
        locale: "ja-JP",
        style:"unit",
        length: "medium"
    });

    assertNotNull(fmt);
    assertEquals("いち に さん し ご", fmt.format(["いち",　"に",　"さん",　"し",　"ご"]));
}

function testListFmtUnitStylejaJPNumberFormatOneLong() {
    var fmt = new ListFmt({
        locale: "ja-JP",
        style:"unit",
        length: "long"
    });

    assertNotNull(fmt);
    assertEquals("いち", fmt.format(["いち"]));
}

function testListFmtUnitStylejaJPNumberFormatTwoLong() {
    var fmt = new ListFmt({
        locale: "ja-JP",
        style:"unit",
        length: "long"
    });

    assertNotNull(fmt);
    assertEquals("いち に", fmt.format(["いち",　"に"]));
}

function testListFmtUnitStylejaJPNumberFormatThreeLong() {
    var fmt = new ListFmt({
        locale: "ja-JP",
        style:"unit",
        length: "long"
    });

    assertNotNull(fmt);
    assertEquals("いち に さん", fmt.format(["いち",　"に",　"さん"]));
}

function testListFmtUnitStylejaJPNumberFormatFourLong() {
    var fmt = new ListFmt({
        locale: "ja-JP",
        style:"unit",
        length: "long"
    });

    assertNotNull(fmt);
    assertEquals("いち に さん し", fmt.format(["いち",　"に",　"さん",　"し"]));
}

function testListFmtUnitStylejaJPNumberFormatFiveLong() {
    var fmt = new ListFmt({
        locale: "ja-JP",
        style:"unit",
        length: "long"
    });

    assertNotNull(fmt);
    assertEquals("いち に さん し ご", fmt.format(["いち",　"に",　"さん",　"し",　"ご"]));
}

function testListFmtUnitStylejaJPNumberFormatOneFull() {
    var fmt = new ListFmt({
        locale: "ja-JP",
        style:"unit",
        length: "full"
    });

    assertNotNull(fmt);
    assertEquals("いち", fmt.format(["いち"]));
}

function testListFmtUnitStylejaJPNumberFormatTwoFull() {
    var fmt = new ListFmt({
        locale: "ja-JP",
        style:"unit",
        length: "full"
    });

    assertNotNull(fmt);
    assertEquals("いち に", fmt.format(["いち",　"に"]));
}

function testListFmtUnitStylejaJPNumberFormatThreeFull() {
    var fmt = new ListFmt({
        locale: "ja-JP",
        style:"unit",
        length: "full"
    });

    assertNotNull(fmt);
    assertEquals("いち に さん", fmt.format(["いち",　"に",　"さん"]));
}

function testListFmtUnitStylejaJPNumberFormatFourFull() {
    var fmt = new ListFmt({
        locale: "ja-JP",
        style:"unit",
        length: "full"
    });

    assertNotNull(fmt);
    assertEquals("いち に さん し", fmt.format(["いち",　"に",　"さん",　"し"]));
}

function testListFmtUnitStylejaJPNumberFormatFiveFull() {
    var fmt = new ListFmt({
        locale: "ja-JP",
        style: "unit",
        length: "full"
    });

    assertNotNull(fmt);
    assertEquals("いち に さん し ご", fmt.format(["いち",　"に",　"さん",　"し",　"ご"]));
}
