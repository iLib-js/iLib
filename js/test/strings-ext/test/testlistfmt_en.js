/*
 * testlistfmt_en.js - test the list formatter object
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

//en-US
function testListFmtenUSNumberFormatOne() {
    var fmt = new ListFmt({
        locale: "en-US"
    });

    assertNotNull(fmt);
    assertEquals("one", fmt.format(["one"]));
}

function testListFmtenUSNumberFormatTwo() {
    var fmt = new ListFmt({
        locale: "en-US"
    });

    assertNotNull(fmt);
    assertEquals("one and two", fmt.format(["one", "two"]));
}

function testListFmtenUSNumberFormatThree() {
    var fmt = new ListFmt({
        locale: "en-US"
    });

    assertNotNull(fmt);
    assertEquals("one, two, and three", fmt.format(["one", "two", "three"]));
}

function testListFmtenUSNumberFormatFour() {
    var fmt = new ListFmt({
        locale: "en-US"
    });

    assertNotNull(fmt);
    assertEquals("one, two, three, and four", fmt.format(["one", "two", "three", "four"]));
}

function testListFmtenUSNumberFormatFive() {
    var fmt = new ListFmt({
        locale: "en-US"
    });

    assertNotNull(fmt);
    assertEquals("one, two, three, four, and five", fmt.format(["one", "two", "three", "four", "five"]));
}

function testListFmtUnitStyleenUSNumberFormatOneShort() {
    var fmt = new ListFmt({
        locale: "en-US",
        style: "unit"
    });

    assertNotNull(fmt);
    assertEquals("one", fmt.format(["one"]));
}

function testListFmtUnitStyleenUSNumberFormatTwoShort() {
    var fmt = new ListFmt({
        locale: "en-US",
        style: "unit"
    });

    assertNotNull(fmt);
    assertEquals("one two", fmt.format(["one", "two"]));
}

function testListFmtUnitStyleenUSNumberFormatThreeShort() {
    var fmt = new ListFmt({
        locale: "en-US",
        style: "unit"
    });

    assertNotNull(fmt);
    assertEquals("one two three", fmt.format(["one", "two", "three"]));
}

function testListFmtUnitStyleenUSNumberFormatFourShort() {
    var fmt = new ListFmt({
        locale: "en-US",
        style: "unit"
    });

    assertNotNull(fmt);
    assertEquals("one two three four", fmt.format(["one", "two", "three", "four"]));
}

function testListFmtUnitStyleenUSNumberFormatFiveShort() {
    var fmt = new ListFmt({
        locale: "en-US",
        style: "unit"
    });

    assertNotNull(fmt);
    assertEquals("one two three four five", fmt.format(["one", "two", "three", "four", "five"]));
}

function testListFmtUnitStyleenUSNumberFormatOneFull() {
    var fmt = new ListFmt({
        locale: "en-US",
        style: "unit",
        length: "full"
    });

    assertNotNull(fmt);
    assertEquals("one", fmt.format(["one"]));
}

function testListFmtUnitStyleenUSNumberFormatTwoFull() {
    var fmt = new ListFmt({
        locale: "en-US",
        style: "unit",
        length: "full"
    });

    assertNotNull(fmt);
    assertEquals("one, two", fmt.format(["one", "two"]));
}

function testListFmtUnitStyleenUSNumberFormatThreeFull() {
    var fmt = new ListFmt({
        locale: "en-US",
        style: "unit",
        length: "full"
    });

    assertNotNull(fmt);
    assertEquals("one, two, three", fmt.format(["one", "two", "three"]));
}

function testListFmtUnitStyleenUSNumberFormatFourFull() {
    var fmt = new ListFmt({
        locale: "en-US",
        style: "unit",
        length: "full"
    });

    assertNotNull(fmt);
    assertEquals("one, two, three, four", fmt.format(["one", "two", "three", "four"]));
}

function testListFmtUnitStyleenUSNumberFormatFiveFull() {
    var fmt = new ListFmt({
        locale: "en-US",
        style: "unit",
        length: "full"
    });

    assertNotNull(fmt);
    assertEquals("one, two, three, four, five", fmt.format(["one", "two", "three", "four", "five"]));
}

//en-GB

function testListFmtenGBNumberFormatOne() {
    var fmt = new ListFmt({
    	locale: "en-GB"
    });

    assertNotNull(fmt);
    assertEquals("one", fmt.format(["one"]));
}

function testListFmtenGBNumberFormatTwo() {
    var fmt = new ListFmt({
    	locale: "en-GB"
    });

    assertNotNull(fmt);
    assertEquals("one and two", fmt.format(["one", "two"]));
}

function testListFmtenGBNumberFormatThree() {
    var fmt = new ListFmt({
    	locale: "en-GB"
    });

    assertNotNull(fmt);
    assertEquals("one, two and three", fmt.format(["one", "two", "three"]));
}

function testListFmtenGBNumberFormatFour() {
    var fmt = new ListFmt({
    	locale: "en-GB"
    });

    assertNotNull(fmt);
    assertEquals("one, two, three and four", fmt.format(["one", "two", "three", "four"]));
}

function testListFmtenGBNumberFormatFive() {
    var fmt = new ListFmt({
        locale: "en-GB"
    });

    assertNotNull(fmt);
    assertEquals("one, two, three, four and five", fmt.format(["one", "two", "three", "four", "five"]));
}

// en-AU

function testListFmtenAUNumberFormatOne() {
    var fmt = new ListFmt({
        locale: "en-AU"
    });

    assertNotNull(fmt);
    assertEquals("one", fmt.format(["one"]));
}

function testListFmtenAUNumberFormatTwo() {
    var fmt = new ListFmt({
        locale: "en-AU"
    });

    assertNotNull(fmt);
    assertEquals("one and two", fmt.format(["one", "two"]));
}

function testListFmtenAUNumberFormatThree() {
    var fmt = new ListFmt({
        locale: "en-AU"
    });

    assertNotNull(fmt);
    assertEquals("one, two and three", fmt.format(["one", "two", "three"]));
}

function testListFmtenAUNumberFormatFour() {
    var fmt = new ListFmt({
        locale: "en-AU"
    });

    assertNotNull(fmt);
    assertEquals("one, two, three and four", fmt.format(["one", "two", "three", "four"]));
}

function testListFmtenAUNumberFormatFive() {
    var fmt = new ListFmt({
        locale: "en-AU"
    });

    assertNotNull(fmt);
    assertEquals("one, two, three, four and five", fmt.format(["one", "two", "three", "four", "five"]));
}

// en-HK

function testListFmtenHKNumberFormatOne() {
    var fmt = new ListFmt({
        locale: "en-HK"
    });

    assertNotNull(fmt);
    assertEquals("one", fmt.format(["one"]));
}

function testListFmtenHKNumberFormatTwo() {
    var fmt = new ListFmt({
        locale: "en-HK"
    });

    assertNotNull(fmt);
    assertEquals("one and two", fmt.format(["one", "two"]));
}

function testListFmtenHKNumberFormatThree() {
    var fmt = new ListFmt({
        locale: "en-HK"
    });

    assertNotNull(fmt);
    assertEquals("one, two, and three", fmt.format(["one", "two", "three"]));
}

function testListFmtenHKNumberFormatFour() {
    var fmt = new ListFmt({
        locale: "en-HK"
    });

    assertNotNull(fmt);
    assertEquals("one, two, three, and four", fmt.format(["one", "two", "three", "four"]));
}

function testListFmtenHKNumberFormatFive() {
    var fmt = new ListFmt({
        locale: "en-HK"
    });

    assertNotNull(fmt);
    assertEquals("one, two, three, four, and five", fmt.format(["one", "two", "three", "four", "five"]));
}

function testListFmtUnitStyleenHKNumberFormatOne() {
    var fmt = new ListFmt({
        locale: "en-HK",
        style: "unit"
    });

    assertNotNull(fmt);
    assertEquals("one", fmt.format(["one"]));
}

function testListFmtUnitStyleenHKNumberFormatTwo() {
    var fmt = new ListFmt({
        locale: "en-HK",
        style: "unit"
    });

    assertNotNull(fmt);
    assertEquals("one two", fmt.format(["one", "two"]));
}

function testListFmtUnitStyleenHKNumberFormatThree() {
    var fmt = new ListFmt({
        locale: "en-HK",
        style: "unit"
    });

    assertNotNull(fmt);
    assertEquals("one two three", fmt.format(["one", "two", "three"]));
}

function testListFmtUnitStyleenHKNumberFormatFour() {
    var fmt = new ListFmt({
        locale: "en-HK",
        style: "unit"
    });

    assertNotNull(fmt);
    assertEquals("one two three four", fmt.format(["one", "two", "three", "four"]));
}

function testListFmtUnitStyleenHKNumberFormatFive() {
    var fmt = new ListFmt({
        locale: "en-HK",
        style: "unit"
    });

    assertNotNull(fmt);
    assertEquals("one two three four five", fmt.format(["one", "two", "three", "four", "five"]));
}

// en-ZA

function testListFmtenZANumberFormatOne() {
    var fmt = new ListFmt({
        locale: "en-ZA"
    });

    assertNotNull(fmt);
    assertEquals("one", fmt.format(["one"]));
}

function testListFmtenZANumberFormatTwo() {
    var fmt = new ListFmt({
        locale: "en-ZA"
    });

    assertNotNull(fmt);
    assertEquals("one and two", fmt.format(["one", "two"]));
}

function testListFmtenZANumberFormatThree() {
    var fmt = new ListFmt({
        locale: "en-ZA"
    });

    assertNotNull(fmt);
    assertEquals("one, two, and three", fmt.format(["one", "two", "three"]));
}

function testListFmtenZANumberFormatFour() {
    var fmt = new ListFmt({
        locale: "en-ZA"
    });

    assertNotNull(fmt);
    assertEquals("one, two, three, and four", fmt.format(["one", "two", "three", "four"]));
}

function testListFmtenZANumberFormatFive() {
    var fmt = new ListFmt({
        locale: "en-ZA"
    });

    assertNotNull(fmt);
    assertEquals("one, two, three, four, and five", fmt.format(["one", "two", "three", "four", "five"]));
}

// en-NZ

function testListFmtUnitStyleenNZNumberFormatOneMedium() {
    var fmt = new ListFmt({
        locale: "en-NZ",
        style : "unit",
        length: "medium"
    });

    assertNotNull(fmt);
    assertEquals("one", fmt.format(["one"]));
}

function testListFmtUnitStyleenNZNumberFormatTwoMedium() {
    var fmt = new ListFmt({
        locale: "en-NZ",
        style : "unit",
        length: "medium"
    });

    assertNotNull(fmt);
    assertEquals("one, two", fmt.format(["one", "two"]));
}

function testListFmtUnitStyleenNZNumberFormatThreeMedium() {
    var fmt = new ListFmt({
        locale: "en-NZ",
        style : "unit",
        length: "medium"
    });

    assertNotNull(fmt);
    assertEquals("one, two, three", fmt.format(["one", "two", "three"]));
}

function testListFmtUnitStyleenNZNumberFormatFourMedium() {
    var fmt = new ListFmt({
        locale: "en-NZ",
        style : "unit",
        length: "medium"
    });

    assertNotNull(fmt);
    assertEquals("one, two, three, four", fmt.format(["one", "two", "three", "four"]));
}

function testListFmtUnitStyleenNZNumberFormatFiveMedium() {
    var fmt = new ListFmt({
        locale: "en-NZ",
        style : "unit",
        length: "medium"
    });

    assertNotNull(fmt);
    assertEquals("one, two, three, four, five", fmt.format(["one", "two", "three", "four", "five"]));
}