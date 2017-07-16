/*
 * testlistfmt_fa.js - test the list formatter object
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

var ListFmt = require("./../lib/ListFmt.js");

function testListFmtfaIRNumberFormatOne() {
    var fmt = new ListFmt({
        locale: "fa-IR"
    });

    assertNotNull(fmt);
    assertEquals("یکی", fmt.format(["یکی"]));
}

function testListFmtfaIRNumberFormatTwo() {
    var fmt = new ListFmt({
        locale: "fa-IR"
    });

    assertNotNull(fmt);
    assertEquals("یکی و دو", fmt.format(["یکی", "دو"]));
}

function testListFmtfaIRNumberFormatThree() {
    var fmt = new ListFmt({
        locale: "fa-IR"
    });

    assertNotNull(fmt);
    assertEquals("یکی،‏ دو، و سه", fmt.format(["یکی", "دو", "سه"]));
}

function testListFmtfaIRNumberFormatFour() {
    var fmt = new ListFmt({
        locale: "fa-IR"
    });

    assertNotNull(fmt);
    assertEquals("یکی،‏ دو،‏ سه، و چهار", fmt.format(["یکی", "دو", "سه", "چهار"]));
}

function testListFmtfaIRNumberFormatFive() {
    var fmt = new ListFmt({
        locale: "fa-IR"
    });

    assertNotNull(fmt);
    assertEquals("یکی،‏ دو،‏ سه،‏ چهار، و پنج", fmt.format(["یکی", "دو", "سه", "چهار", "پنج"]));
}

function testListFmtUnitStylefaIRNumberFormatOneShort() {
    var fmt = new ListFmt({
        locale: "fa-IR",
        style: "unit",
        length: "short"
    });

    assertNotNull(fmt);
    assertEquals("یکی", fmt.format(["یکی"]));
}

function testListFmtUnitStylefaIRNumberFormatTwoShort() {
    var fmt = new ListFmt({
        locale: "fa-IR",
        style: "unit",
        length: "short"
    });

    assertNotNull(fmt);
    assertEquals("یکی دو", fmt.format(["یکی", "دو"]));
}

function testListFmtUnitStylefaIRNumberFormatThreeShort() {
    var fmt = new ListFmt({
        locale: "fa-IR",
        style: "unit",
        length: "short"
    });

    assertNotNull(fmt);
    assertEquals("یکی دو سه", fmt.format(["یکی", "دو", "سه"]));
}

function testListFmtUnitStylefaIRNumberFormatFourShort() {
    var fmt = new ListFmt({
        locale: "fa-IR",
        style: "unit",
        length: "short"
    });

    assertNotNull(fmt);
    assertEquals("یکی دو سه چهار", fmt.format(["یکی", "دو", "سه", "چهار"]));
}

function testListFmtUnitStylefaIRNumberFormatFiveShort() {
    var fmt = new ListFmt({
        locale: "fa-IR",
        style: "unit",
        length: "short"
    });

    assertNotNull(fmt);
    assertEquals("یکی دو سه چهار پنج", fmt.format(["یکی", "دو", "سه", "چهار", "پنج"]));
}

function testListFmtUnitStylefaIRNumberFormatOneMedium() {
    var fmt = new ListFmt({
        locale: "fa-IR",
        style: "unit",
        length: "medium"
    });

    assertNotNull(fmt);
    assertEquals("یکی", fmt.format(["یکی"]));
}

function testListFmtUnitStylefaIRNumberFormatTwoMedium() {
    var fmt = new ListFmt({
        locale: "fa-IR",
        style: "unit",
        length: "medium"
    });

    assertNotNull(fmt);
    assertEquals("یکی،‏ دو", fmt.format(["یکی", "دو"]));
}

function testListFmtUnitStylefaIRNumberFormatThreeMedium() {
    var fmt = new ListFmt({
        locale: "fa-IR",
        style: "unit",
        length: "medium"
    });

    assertNotNull(fmt);
    assertEquals("یکی،‏ دو،‏ سه", fmt.format(["یکی", "دو", "سه"]));
}

function testListFmtUnitStylefaIRNumberFormatFourMedium() {
    var fmt = new ListFmt({
        locale: "fa-IR",
        style: "unit",
        length: "medium"
    });

    assertNotNull(fmt);
    assertEquals("یکی،‏ دو،‏ سه،‏ چهار", fmt.format(["یکی", "دو", "سه", "چهار"]));
}

function testListFmtUnitStylefaIRNumberFormatFiveMedium() {
    var fmt = new ListFmt({
        locale: "fa-IR",
        style: "unit",
        length: "medium"
    });

    assertNotNull(fmt);
    assertEquals("یکی،‏ دو،‏ سه،‏ چهار،‏ پنج", fmt.format(["یکی", "دو", "سه", "چهار", "پنج"]));
}

function testListFmtUnitStylefaIRNumberFormatOneLong() {
    var fmt = new ListFmt({
        locale: "fa-IR",
        style: "unit",
        length: "long"
    });

    assertNotNull(fmt);
    assertEquals("یکی", fmt.format(["یکی"]));
}

function testListFmtUnitStylefaIRNumberFormatTwoLong() {
    var fmt = new ListFmt({
        locale: "fa-IR",
        style: "unit",
        length: "long"
    });

    assertNotNull(fmt);
    assertEquals("یکی و دو", fmt.format(["یکی", "دو"]));
}

function testListFmtUnitStylefaIRNumberFormatThreeLong() {
    var fmt = new ListFmt({
        locale: "fa-IR",
        style: "unit",
        length: "long"
    });

    assertNotNull(fmt);
    assertEquals("یکی،‏ دو، و سه", fmt.format(["یکی", "دو", "سه"]));
}

function testListFmtUnitStylefaIRNumberFormatFourLong() {
    var fmt = new ListFmt({
        locale: "fa-IR",
        style: "unit",
        length: "long"
    });

    assertNotNull(fmt);
    assertEquals("یکی،‏ دو،‏ سه، و چهار", fmt.format(["یکی", "دو", "سه", "چهار"]));
}

function testListFmtUnitStylefaIRNumberFormatFiveLong() {
    var fmt = new ListFmt({
        locale: "fa-IR",
        style: "unit",
        length: "long"
    });

    assertNotNull(fmt);
    assertEquals("یکی،‏ دو،‏ سه،‏ چهار، و پنج", fmt.format(["یکی", "دو", "سه", "چهار", "پنج"]));
}

function testListFmtUnitStylefaIRNumberFormatOneFull() {
    var fmt = new ListFmt({
        locale: "fa-IR",
        style: "unit",
        length: "full"
    });

    assertNotNull(fmt);
    assertEquals("یکی", fmt.format(["یکی"]));
}

function testListFmtUnitStylefaIRNumberFormatTwoFull() {
    var fmt = new ListFmt({
        locale: "fa-IR",
        style: "unit",
        length: "full"
    });

    assertNotNull(fmt);
    assertEquals("یکی و دو", fmt.format(["یکی", "دو"]));
}

function testListFmtUnitStylefaIRNumberFormatThreeFull() {
    var fmt = new ListFmt({
        locale: "fa-IR",
        style: "unit",
        length: "full"
    });

    assertNotNull(fmt);
    assertEquals("یکی،‏ دو، و سه", fmt.format(["یکی", "دو", "سه"]));
}

function testListFmtUnitStylefaIRNumberFormatFourFull() {
    var fmt = new ListFmt({
        locale: "fa-IR",
        style: "unit",
        length: "full"
    });

    assertNotNull(fmt);
    assertEquals("یکی،‏ دو،‏ سه، و چهار", fmt.format(["یکی", "دو", "سه", "چهار"]));
}

function testListFmtUnitStylefaIRNumberFormatFiveFull() {
    var fmt = new ListFmt({
        locale: "fa-IR",
        style: "unit",
        length: "full"
    });

    assertNotNull(fmt);
    assertEquals("یکی،‏ دو،‏ سه،‏ چهار، و پنج", fmt.format(["یکی", "دو", "سه", "چهار", "پنج"]));
}
