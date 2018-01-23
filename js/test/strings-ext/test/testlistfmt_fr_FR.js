/*
 * testlistfmt_fr_FR.js - test the list formatter object
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

function testListFmtfrFRNumberFormatOne() {
    var fmt = new ListFmt({
        locale: "fr-FR"
    });

    assertNotNull(fmt);
    assertEquals("un", fmt.format(["un"]));
}

function testListFmtfrFRNumberFormatTwo() {
    var fmt = new ListFmt({
        locale: "fr-FR"
    });

    assertNotNull(fmt);
    assertEquals("un et deux", fmt.format(["un", "deux"]));
}

function testListFmtfrFRNumberFormatThree() {
    var fmt = new ListFmt({
        locale: "fr-FR"
    });

    assertNotNull(fmt);
    assertEquals("un, deux et trois", fmt.format(["un", "deux", "trois"]));
}

function testListFmtfrFRNumberFormatFour() {
    var fmt = new ListFmt({
        locale: "fr-FR"
    });

    assertNotNull(fmt);
    assertEquals("un, deux, trois et quatre", fmt.format(["un", "deux", "trois", "quatre"]));
}

function testListFmtfrFRNumberFormatFive() {
    var fmt = new ListFmt({
        locale: "fr-FR"
    });

    assertNotNull(fmt);
    assertEquals("un, deux, trois, quatre et cinq", fmt.format(["un", "deux", "trois", "quatre", "cinq"]));
}

//fr-FR : unit style

function testListFmtUnitStylefrFRNumberFormatOneShort() {
    var fmt = new ListFmt({
        locale: "fr-FR",
        style:"unit"
    });

    assertNotNull(fmt);
    assertEquals("un", fmt.format(["un"]));
}

function testListFmtUnitStylefrFRNumberFormatTwoShort() {
    var fmt = new ListFmt({
        locale: "fr-FR",
        style:"unit"
    });

    assertNotNull(fmt);
    assertEquals("un deux", fmt.format(["un", "deux"]));
}

function testListFmtUnitStylefrFRNumberFormatThreeShort() {
    var fmt = new ListFmt({
        locale: "fr-FR",
        style:"unit"
    });

    assertNotNull(fmt);
    assertEquals("un deux trois", fmt.format(["un", "deux", "trois"]));
}

function testListFmtUnitStylefrFRNumberFormatFourShort() {
    var fmt = new ListFmt({
        locale: "fr-FR",
        style:"unit"
    });

    assertNotNull(fmt);
    assertEquals("un deux trois quatre", fmt.format(["un", "deux", "trois", "quatre"]));
}

function testListFmtUnitStylefrFRNumberFormatFiveShort() {
    var fmt = new ListFmt({
        locale: "fr-FR",
        style:"unit"
    });

    assertNotNull(fmt);
    assertEquals("un deux trois quatre cinq", fmt.format(["un", "deux", "trois", "quatre", "cinq"]));
}

function testListFmtUnitStylefrFRNumberFormatOneMedium() {
    var fmt = new ListFmt({
        locale: "fr-FR",
        style:"unit",
        length: "medium"
    });

    assertNotNull(fmt);
    assertEquals("un", fmt.format(["un"]));
}

function testListFmtUnitStylefrFRNumberFormatTwoMedium() {
    var fmt = new ListFmt({
        locale: "fr-FR",
        style:"unit",
        length: "medium"
    });

    assertNotNull(fmt);
    assertEquals("un et deux", fmt.format(["un", "deux"]));
}

function testListFmtUnitStylefrFRNumberFormatThreeMedium() {
    var fmt = new ListFmt({
        locale: "fr-FR",
        style:"unit",
        length: "medium"
    });

    assertNotNull(fmt);
    assertEquals("un, deux et trois", fmt.format(["un", "deux", "trois"]));
}

function testListFmtUnitStylefrFRNumberFormatFourMedium() {
    var fmt = new ListFmt({
        locale: "fr-FR",
        style:"unit",
        length: "medium"
    });

    assertNotNull(fmt);
    assertEquals("un, deux, trois et quatre", fmt.format(["un", "deux", "trois", "quatre"]));
}

function testListFmtUnitStylefrFRNumberFormatFiveMedium() {
    var fmt = new ListFmt({
        locale: "fr-FR",
        style:"unit",
        length: "medium"
    });

    assertNotNull(fmt);
    assertEquals("un, deux, trois, quatre et cinq", fmt.format(["un", "deux", "trois", "quatre", "cinq"]));
}

function testListFmtUnitStylefrFRNumberFormatOneLong() {
    var fmt = new ListFmt({
        locale: "fr-FR",
        style:"unit",
        length: "long"
    });

    assertNotNull(fmt);
    assertEquals("un", fmt.format(["un"]));
}

function testListFmtUnitStylefrFRNumberFormatTwoLong() {
    var fmt = new ListFmt({
        locale: "fr-FR",
        style:"unit",
        length: "long"
    });

    assertNotNull(fmt);
    assertEquals("un et deux", fmt.format(["un", "deux"]));
}

function testListFmtUnitStylefrFRNumberFormatThreeLong() {
    var fmt = new ListFmt({
        locale: "fr-FR",
        style:"unit",
        length: "long"
    });

    assertNotNull(fmt);
    assertEquals("un, deux et trois", fmt.format(["un", "deux", "trois"]));
}

function testListFmtUnitStylefrFRNumberFormatFourLong() {
    var fmt = new ListFmt({
        locale: "fr-FR",
        style:"unit",
        length: "long"
    });

    assertNotNull(fmt);
    assertEquals("un, deux, trois et quatre", fmt.format(["un", "deux", "trois", "quatre"]));
}

function testListFmtUnitStylefrFRNumberFormatFiveLong() {
    var fmt = new ListFmt({
        locale: "fr-FR",
        style:"unit",
        length: "long"
    });

    assertNotNull(fmt);
    assertEquals("un, deux, trois, quatre et cinq", fmt.format(["un", "deux", "trois", "quatre", "cinq"]));
}

function testListFmtUnitStylefrFRNumberFormatOneFull() {
    var fmt = new ListFmt({
        locale: "fr-FR",
        style:"unit",
        length: "full"
    });

    assertNotNull(fmt);
    assertEquals("un", fmt.format(["un"]));
}

function testListFmtUnitStylefrFRNumberFormatTwoFull() {
    var fmt = new ListFmt({
        locale: "fr-FR",
        style:"unit",
        length: "full"
    });

    assertNotNull(fmt);
    assertEquals("un et deux", fmt.format(["un", "deux"]));
}

function testListFmtUnitStylefrFRNumberFormatThreeFull() {
    var fmt = new ListFmt({
        locale: "fr-FR",
        style:"unit",
        length: "full"
    });

    assertNotNull(fmt);
    assertEquals("un, deux et trois", fmt.format(["un", "deux", "trois"]));
}

function testListFmtUnitStylefrFRNumberFormatFourFull() {
    var fmt = new ListFmt({
        locale: "fr-FR",
        style:"unit",
        length: "full"
    });

    assertNotNull(fmt);
    assertEquals("un, deux, trois et quatre", fmt.format(["un", "deux", "trois", "quatre"]));
}

function testListFmtUnitStylefrFRNumberFormatFiveFull() {
    var fmt = new ListFmt({
        locale: "fr-FR",
        style: "unit",
        length: "full"
    });

    assertNotNull(fmt);
    assertEquals("un, deux, trois, quatre et cinq", fmt.format(["un", "deux", "trois", "quatre", "cinq"]));
}
