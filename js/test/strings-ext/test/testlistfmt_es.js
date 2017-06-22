/*
 * testlistfmt_es.js - test the list formatter object
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

// es-ES

function testListFmtesESNumberFormatOne() {
    var fmt = new ListFmt({
        locale: "es-ES"
    });

    assertNotNull(fmt);
    assertEquals("uno", fmt.format(["uno"]));
}

function testListFmtesESNumberFormatTwo() {
    var fmt = new ListFmt({
        locale: "es-ES"
    });

    assertNotNull(fmt);
    assertEquals("uno y dos", fmt.format(["uno", "dos"]));
}

function testListFmtesESNumberFormatThree() {
    var fmt = new ListFmt({
        locale: "es-ES"
    });

    assertNotNull(fmt);
    assertEquals("uno, dos y tres", fmt.format(["uno", "dos", "tres"]));
}

function testListFmtesESNumberFormatFour() {
    var fmt = new ListFmt({
        locale: "es-ES"
    });

    assertNotNull(fmt);
    assertEquals("uno, dos, tres y cuatro", fmt.format(["uno", "dos", "tres", "cuatro"]));
}

function testListFmtUnitStyleesESNumberFormatOneMedium() {
    var fmt = new ListFmt({
        locale: "es-ES",
        style:"unit",
        length: "medium"
    });

    assertNotNull(fmt);
    assertEquals("uno", fmt.format(["uno"]));
}

function testListFmtUnitStyleesESNumberFormatTwoUnitStyleMedium() {
    var fmt = new ListFmt({
        locale: "es-ES",
        style:"unit",
        length: "medium"
    });

    assertNotNull(fmt);
    assertEquals("uno y dos", fmt.format(["uno", "dos"]));
}

function testListFmtUnitStyleesESNumberFormatThreeMedium() {
    var fmt = new ListFmt({
        locale: "es-ES",
        style:"unit",
        length: "medium"
    });

    assertNotNull(fmt);
    assertEquals("uno, dos, tres", fmt.format(["uno", "dos", "tres"]));
}

function testListFmtUnitStyleesESNumberFormatFourMedium() {
    var fmt = new ListFmt({
        locale: "es-ES",
        style:"unit",
        length: "medium"
    });

    assertNotNull(fmt);
    assertEquals("uno, dos, tres, cuatro", fmt.format(["uno", "dos", "tres", "cuatro"]));
}

function testListFmtUnitStyleesESNumberFormatFiveMedium() {
    var fmt = new ListFmt({
        locale: "es-ES",
        style:"unit",
        length: "medium"
    });

    assertNotNull(fmt);
    assertEquals("uno, dos, tres, cuatro, cinco", fmt.format(["uno", "dos", "tres", "cuatro", "cinco"]));
}

function testListFmtUnitStyleesESNumberFormatOneLong() {
    var fmt = new ListFmt({
        locale: "es-ES",
        style:"unit",
        length: "long"
    });

    assertNotNull(fmt);
    assertEquals("uno", fmt.format(["uno"]));
}

function testListFmtUnitStyleesESNumberFormatTwoUnitStyleLong() {
    var fmt = new ListFmt({
        locale: "es-ES",
        style:"unit",
        length: "long"
    });

    assertNotNull(fmt);
    assertEquals("uno y dos", fmt.format(["uno", "dos"]));
}

function testListFmtUnitStyleesESNumberFormatThreeLong() {
    var fmt = new ListFmt({
        locale: "es-ES",
        style:"unit",
        length: "long"
    });

    assertNotNull(fmt);
    assertEquals("uno, dos y tres", fmt.format(["uno", "dos", "tres"]));
}

function testListFmtUnitStyleesESNumberFormatFourLong() {
    var fmt = new ListFmt({
        locale: "es-ES",
        style:"unit",
        length: "long"
    });

    assertNotNull(fmt);
    assertEquals("uno, dos, tres y cuatro", fmt.format(["uno", "dos", "tres", "cuatro"]));
}

function testListFmtUnitStyleesESNumberFormatFiveLong() {
    var fmt = new ListFmt({
        locale: "es-ES",
        style:"unit",
        length: "long"
    });

    assertNotNull(fmt);
    assertEquals("uno, dos, tres, cuatro y cinco", fmt.format(["uno", "dos", "tres", "cuatro", "cinco"]));
}

function testListFmtUnitStyleesESNumberFormatOneFull() {
    var fmt = new ListFmt({
        locale: "es-ES",
        style:"unit",
        length: "full"
    });

    assertNotNull(fmt);
    assertEquals("uno", fmt.format(["uno"]));
}

function testListFmtUnitStyleesESNumberFormatTwoUnitStyleFull() {
    var fmt = new ListFmt({
        locale: "es-ES",
        style:"unit",
        length: "full"
    });

    assertNotNull(fmt);
    assertEquals("uno y dos", fmt.format(["uno", "dos"]));
}

function testListFmtUnitStyleesESNumberFormatThreeFull() {
    var fmt = new ListFmt({
        locale: "es-ES",
        style:"unit",
        length: "full"
    });

    assertNotNull(fmt);
    assertEquals("uno, dos y tres", fmt.format(["uno", "dos", "tres"]));
}

function testListFmtUnitStyleesESNumberFormatFourFull() {
    var fmt = new ListFmt({
        locale: "es-ES",
        style:"unit",
        length: "full"
    });

    assertNotNull(fmt);
    assertEquals("uno, dos, tres y cuatro", fmt.format(["uno", "dos", "tres", "cuatro"]));
}

function testListFmtUnitStyleesESNumberFormatFiveFull() {
    var fmt = new ListFmt({
        locale: "es-ES",
        style:"unit",
        length: "full"
    });

    assertNotNull(fmt);
    assertEquals("uno, dos, tres, cuatro y cinco", fmt.format(["uno", "dos", "tres", "cuatro", "cinco"]));
}








// es-DO

function testListFmtUnitStyleesDONumberFormatOneShort() {
    var fmt = new ListFmt({
        locale: "es-DO",
        style:"unit",
        length: "short"
    });

    assertNotNull(fmt);
    assertEquals("uno", fmt.format(["uno"]));
}

function testListFmtUnitStyleesDONumberFormatTwoUnitStyleShort() {
    var fmt = new ListFmt({
        locale: "es-DO",
        style:"unit",
        length: "short"
    });

    assertNotNull(fmt);
    assertEquals("uno dos", fmt.format(["uno", "dos"]));
}

function testListFmtUnitStyleesDONumberFormatThreeShort() {
    var fmt = new ListFmt({
        locale: "es-DO",
        style:"unit",
        length: "short"
    });

    assertNotNull(fmt);
    assertEquals("uno dos y tres", fmt.format(["uno", "dos", "tres"]));
}

function testListFmtUnitStyleesDONumberFormatFourShort() {
    var fmt = new ListFmt({
        locale: "es-DO",
        style:"unit",
        length: "short"
    });

    assertNotNull(fmt);
    assertEquals("uno dos tres y cuatro", fmt.format(["uno", "dos", "tres", "cuatro"]));
}

function testListFmtUnitStyleesDONumberFormatFiveShort() {
    var fmt = new ListFmt({
        locale: "es-DO",
        style:"unit",
        length: "short"
    });

    assertNotNull(fmt);
    assertEquals("uno dos tres cuatro y cinco", fmt.format(["uno", "dos", "tres", "cuatro", "cinco"]));
}

function testListFmtUnitStyleesDONumberFormatOneMedium() {
    var fmt = new ListFmt({
        locale: "es-DO",
        style:"unit",
        length: "medium"
    });

    assertNotNull(fmt);
    assertEquals("uno", fmt.format(["uno"]));
}

function testListFmtUnitStyleesDONumberFormatTwoUnitStyleMedium() {
    var fmt = new ListFmt({
        locale: "es-DO",
        style:"unit",
        length: "medium"
    });

    assertNotNull(fmt);
    assertEquals("uno y dos", fmt.format(["uno", "dos"]));
}

function testListFmtUnitStyleesDONumberFormatThreeMedium() {
    var fmt = new ListFmt({
        locale: "es-DO",
        style:"unit",
        length: "medium"
    });

    assertNotNull(fmt);
    assertEquals("uno, dos y tres", fmt.format(["uno", "dos", "tres"]));
}

function testListFmtUnitStyleesDONumberFormatFourMedium() {
    var fmt = new ListFmt({
        locale: "es-DO",
        style:"unit",
        length: "medium"
    });

    assertNotNull(fmt);
    assertEquals("uno, dos, tres y cuatro", fmt.format(["uno", "dos", "tres", "cuatro"]));
}

function testListFmtUnitStyleesDONumberFormatFiveMedium() {
    var fmt = new ListFmt({
        locale: "es-DO",
        style:"unit",
        length: "medium"
    });

    assertNotNull(fmt);
    assertEquals("uno, dos, tres, cuatro y cinco", fmt.format(["uno", "dos", "tres", "cuatro", "cinco"]));
}

// es-PY

function testListFmtUnitStyleesPYNumberFormatOneMedium() {
    var fmt = new ListFmt({
        locale: "es-PY",
        style:"unit",
        length: "medium"
    });

    assertNotNull(fmt);
    assertEquals("uno", fmt.format(["uno"]));
}

function testListFmtUnitStyleesPYNumberFormatTwoUnitStyleMedium() {
    var fmt = new ListFmt({
        locale: "es-PY",
        style:"unit",
        length: "medium"
    });

    assertNotNull(fmt);
    assertEquals("uno y dos", fmt.format(["uno", "dos"]));
}

function testListFmtUnitStyleesPYNumberFormatThreeMedium() {
    var fmt = new ListFmt({
        locale: "es-PY",
        style:"unit",
        length: "medium"
    });

    assertNotNull(fmt);
    assertEquals("uno, dos y tres", fmt.format(["uno", "dos", "tres"]));
}

function testListFmtUnitStyleesPYNumberFormatFourMedium() {
    var fmt = new ListFmt({
        locale: "es-PY",
        style:"unit",
        length: "medium"
    });

    assertNotNull(fmt);
    assertEquals("uno, dos, tres y cuatro", fmt.format(["uno", "dos", "tres", "cuatro"]));
}

function testListFmtUnitStyleesPYNumberFormatFiveMedium() {
    var fmt = new ListFmt({
        locale: "es-PY",
        style:"unit",
        length: "medium"
    });

    assertNotNull(fmt);
    assertEquals("uno, dos, tres, cuatro y cinco", fmt.format(["uno", "dos", "tres", "cuatro", "cinco"]));
}