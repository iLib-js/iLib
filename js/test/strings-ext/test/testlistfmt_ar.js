/*
 * testlistfmt_ar.js - test the list formatter object
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


//// ar-EG

function testListFmtarEGNumberFormatOneShort() {
    var fmt = new ListFmt({
        locale: "ar-EG"
    });

    assertNotNull(fmt);
    assertEquals("واحد", fmt.format(["واحد"]));
}

function testListFmtarEGNumberFormatTwoShort() {
    var fmt = new ListFmt({
        locale: "ar-EG"
    });

    assertNotNull(fmt);
    assertEquals("واحد واثنان", fmt.format(["واحد", "اثنان"]));
}

function testListFmtarEGNumberFormatThreeShort() {
    var fmt = new ListFmt({
        locale: "ar-EG"
    });

    assertNotNull(fmt);
    assertEquals("واحد، واثنان، وثلاثة", fmt.format(["واحد", "اثنان", "ثلاثة"]));
}

function testListFmtarEGNumberFormatFourShort() {
    var fmt = new ListFmt({
        locale: "ar-EG"
    });

    assertNotNull(fmt);
    assertEquals("واحد، واثنان، وثلاثة، وأربعة", fmt.format(["واحد", "اثنان", "ثلاثة", "أربعة"]));
}

function testListFmtarEGNumberFormatOneMedium() {
    var fmt = new ListFmt({
        locale: "ar-EG",
        length: "medium"
    });

    assertNotNull(fmt);
    assertEquals("واحد", fmt.format(["واحد"]));
}

function testListFmtarEGNumberFormatTwoMedium() {
    var fmt = new ListFmt({
        locale: "ar-EG",
        length: "medium"
    });

    assertNotNull(fmt);
    assertEquals("واحد واثنان", fmt.format(["واحد", "اثنان"]));
}

function testListFmtarEGNumberFormatThreeMedium() {
    var fmt = new ListFmt({
        locale: "ar-EG",
        length: "medium"
    });

    assertNotNull(fmt);
    assertEquals("واحد، واثنان، وثلاثة", fmt.format(["واحد", "اثنان", "ثلاثة"]));
}

function testListFmtarEGNumberFormatFourMedium() {
    var fmt = new ListFmt({
        locale: "ar-EG",
        length: "medium"
    });

    assertNotNull(fmt);
    assertEquals("واحد، واثنان، وثلاثة، وأربعة", fmt.format(["واحد", "اثنان", "ثلاثة", "أربعة"]));
}

function testListFmtarEGNumberFormatOneLong() {
    var fmt = new ListFmt({
        locale: "ar-EG",
        length: "long"
    });

    assertNotNull(fmt);
    assertEquals("واحد", fmt.format(["واحد"]));
}

function testListFmtarEGNumberFormatTwoLong() {
    var fmt = new ListFmt({
        locale: "ar-EG",
        length: "long"
    });

    assertNotNull(fmt);
    assertEquals("واحد واثنان", fmt.format(["واحد", "اثنان"]));
}

function testListFmtarEGNumberFormatThreeLong() {
    var fmt = new ListFmt({
        locale: "ar-EG",
        length: "long"
    });

    assertNotNull(fmt);
    assertEquals("واحد، اثنان، وثلاثة", fmt.format(["واحد", "اثنان", "ثلاثة"]));
}

function testListFmtarEGNumberFormatFourLong() {
    var fmt = new ListFmt({
        locale: "ar-EG",
        length: "long"
    });

    assertNotNull(fmt);
    assertEquals("واحد، اثنان، ثلاثة، وأربعة", fmt.format(["واحد", "اثنان", "ثلاثة", "أربعة"]));
}

function testListFmtarEGNumberFormatOneFull() {
    var fmt = new ListFmt({
        locale: "ar-EG",
        length: "full"
    });

    assertNotNull(fmt);
    assertEquals("واحد", fmt.format(["واحد"]));
}

function testListFmtarEGNumberFormatTwoFull() {
    var fmt = new ListFmt({
        locale: "ar-EG",
        length: "full"
    });

    assertNotNull(fmt);
    assertEquals("واحد واثنان", fmt.format(["واحد", "اثنان"]));
}

function testListFmtarEGNumberFormatThreeFull() {
    var fmt = new ListFmt({
        locale: "ar-EG",
        length: "full"
    });

    assertNotNull(fmt);
    assertEquals("واحد، اثنان، وثلاثة", fmt.format(["واحد", "اثنان", "ثلاثة"]));
}

function testListFmtarEGNumberFormatFourFull() {
    var fmt = new ListFmt({
        locale: "ar-EG",
        length: "full"
    });

    assertNotNull(fmt);
    assertEquals("واحد، اثنان، ثلاثة، وأربعة", fmt.format(["واحد", "اثنان", "ثلاثة", "أربعة"]));
}

// ar-EG: unitStyle

function testListFmtUnitStylearEGNumberFormatOne() {
    var fmt = new ListFmt({
        locale: "ar-EG",
        style: "unit"
    });

    assertNotNull(fmt);
    assertEquals("واحد", fmt.format(["واحد"]));
}

function testListFmtUnitStylearEGNumberFormatTwo() {
    var fmt = new ListFmt({
        locale: "ar-EG",
        style: "unit"
    });

    assertNotNull(fmt);
    assertEquals("واحد، اثنان", fmt.format(["واحد", "اثنان"]));
}

function testListFmtUnitStylearEGNumberFormatThree() {
    var fmt = new ListFmt({
        locale: "ar-EG",
        style: "unit"
    });

    assertNotNull(fmt);
    assertEquals("واحد، اثنان، ثلاثة", fmt.format(["واحد", "اثنان", "ثلاثة"]));
}

function testListFmtUnitStylearEGNumberFormatFour() {
    var fmt = new ListFmt({
        locale: "ar-EG",
        style: "unit"
    });

    assertNotNull(fmt);
    assertEquals("واحد، اثنان، ثلاثة، أربعة", fmt.format(["واحد", "اثنان", "ثلاثة", "أربعة"]));
}

function testListFmtUnitStylearEGNumberFormatOneMedium() {
    var fmt = new ListFmt({
        locale: "ar-EG",
        style: "unit",
        length: "medium"
    });

    assertNotNull(fmt);
    assertEquals("واحد", fmt.format(["واحد"]));
}

function testListFmtUnitStylearEGNumberFormatTwoMedium() {
    var fmt = new ListFmt({
        locale: "ar-EG",
        style: "unit",
        length: "medium"
    });

    assertNotNull(fmt);
    assertEquals("واحد واثنان", fmt.format(["واحد", "اثنان"]));
}

function testListFmtUnitStylearEGNumberFormatThreeMedium() {
    var fmt = new ListFmt({
        locale: "ar-EG",
        style: "unit",
        length: "medium"
    });

    assertNotNull(fmt);
    assertEquals("واحد، واثنان، وثلاثة", fmt.format(["واحد", "اثنان", "ثلاثة"]));
}

function testListFmtUnitStylearEGNumberFormatFourMedium() {
    var fmt = new ListFmt({
        locale: "ar-EG",
        style: "unit",
        length: "medium"
    });

    assertNotNull(fmt);
    assertEquals("واحد، واثنان، وثلاثة، وأربعة", fmt.format(["واحد", "اثنان", "ثلاثة", "أربعة"]));
}

function testListFmtUnitStylearEGNumberFormatOneLong() {
    var fmt = new ListFmt({
        locale: "ar-EG",
        style: "unit",
        length: "long"
    });

    assertNotNull(fmt);
    assertEquals("واحد", fmt.format(["واحد"]));
}

function testListFmtUnitStylearEGNumberFormatTwoLong() {
    var fmt = new ListFmt({
        locale: "ar-EG",
        style: "unit",
        length: "long"
    });

    assertNotNull(fmt);
    assertEquals("واحد واثنان", fmt.format(["واحد", "اثنان"]));
}

function testListFmtUnitStylearEGNumberFormatThreeLong() {
    var fmt = new ListFmt({
        locale: "ar-EG",
        style: "unit",
        length: "long"
    });

    assertNotNull(fmt);
    assertEquals("واحد، واثنان، وثلاثة", fmt.format(["واحد", "اثنان", "ثلاثة"]));
}

function testListFmtUnitStylearEGNumberFormatFourLong() {
    var fmt = new ListFmt({
        locale: "ar-EG",
        style: "unit",
        length: "long"
    });

    assertNotNull(fmt);
    assertEquals("واحد، واثنان، وثلاثة، وأربعة", fmt.format(["واحد", "اثنان", "ثلاثة", "أربعة"]));
}

function testListFmtUnitStylearEGNumberFormatOneFull() {
    var fmt = new ListFmt({
        locale: "ar-EG",
        style: "unit",
        length: "full"
    });

    assertNotNull(fmt);
    assertEquals("واحد", fmt.format(["واحد"]));
}

function testListFmtUnitStylearEGNumberFormatTwoFull() {
    var fmt = new ListFmt({
        locale: "ar-EG",
        style: "unit",
        length: "full"
    });

    assertNotNull(fmt);
    assertEquals("واحد واثنان", fmt.format(["واحد", "اثنان"]));
}

function testListFmtUnitStylearEGNumberFormatThreeFull() {
    var fmt = new ListFmt({
        locale: "ar-EG",
        style: "unit",
        length: "full"
    });

    assertNotNull(fmt);
    assertEquals("واحد، واثنان، وثلاثة", fmt.format(["واحد", "اثنان", "ثلاثة"]));
}

function testListFmtUnitStylearEGNumberFormatFourFull() {
    var fmt = new ListFmt({
        locale: "ar-EG",
        style: "unit",
        length: "full"
    });

    assertNotNull(fmt);
    assertEquals("واحد، واثنان، وثلاثة، وأربعة", fmt.format(["واحد", "اثنان", "ثلاثة", "أربعة"]));
}
