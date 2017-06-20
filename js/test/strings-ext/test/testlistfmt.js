/*
 * testlistfmt.js - test the list formatter object
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

function testListFmtConstructorEmpty() {
    var fmt = new ListFmt();

    assertNotNull(fmt);
}

function testListFmtDefaults() {
    var fmt = new ListFmt();

    assertNotNull(fmt);
    assertEquals("en-US", fmt.getLocale());
}

function testListFmtDefaultStyle() {
    var fmt = new ListFmt();

    assertNotNull(fmt);
    assertEquals("standard", fmt.getStyle());
}

function testListFmtNumberFormatOne() {
    var fmt = new ListFmt();

    assertNotNull(fmt);
    assertEquals("one", fmt.format(["one"]));
}

function testListFmtNumberFormatTwo() {
    var fmt = new ListFmt();

    assertNotNull(fmt);
    assertEquals("one and two", fmt.format(["one", "two"]));
}

function testListFmtNumberFormatThree() {
    var fmt = new ListFmt();

    assertNotNull(fmt);
    assertEquals("one, two, and three", fmt.format(["one", "two", "three"]));
}

function testListFmtNumberFormatFour() {
    var fmt = new ListFmt();

    assertNotNull(fmt);
    assertEquals("one, two, three, and four", fmt.format(["one", "two", "three", "four"]));
}

function testListFmtNumberFormatTen() {
    var fmt = new ListFmt();

    assertNotNull(fmt);
    assertEquals("one, two, three, four, five, six, seven, eight, nine, and ten", fmt.format(["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"]));
}

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

// de-DE
function testListFmtdeDENumberFormatOne() {
    var fmt = new ListFmt({
    	locale: "de-DE"
    });

    assertNotNull(fmt);
    assertEquals("eins", fmt.format(["eins"]));
}

function testListFmtdeDENumberFormatTwo() {
    var fmt = new ListFmt({
    	locale: "de-DE"
    });

    assertNotNull(fmt);
    assertEquals("eins und zwei", fmt.format(["eins", "zwei"]));
}

function testListFmtdeDENumberFormatThree() {
    var fmt = new ListFmt({
    	locale: "de-DE"
    });

    assertNotNull(fmt);
    assertEquals("eins, zwei und drei", fmt.format(["eins", "zwei", "drei"]));
}

function testListFmtdeDENumberFormatFour() {
    var fmt = new ListFmt({
    	locale: "de-DE"
    });

    assertNotNull(fmt);
    assertEquals("eins, zwei, drei und vier", fmt.format(["eins", "zwei", "drei", "vier"]));
}

// ko-KR

function testListFmtkoKRNumberFormatOne() {
    var fmt = new ListFmt({
    	locale: "ko-KR"
    });

    assertNotNull(fmt);
    assertEquals("하나", fmt.format(["하나"]));
}

function testListFmtkoKRNumberFormatTwo() {
    var fmt = new ListFmt({
    	locale: "ko-KR"
    });

    assertNotNull(fmt);
    assertEquals("하나 및 둘", fmt.format(["하나", "둘"]));
}

function testListFmtkoKRNumberFormatThree() {
    var fmt = new ListFmt({
    	locale: "ko-KR"
    });

    assertNotNull(fmt);
    assertEquals("하나, 둘 및 셋", fmt.format(["하나", "둘", "셋"]));
}

function testListFmtkoKRNumberFormatFour() {
    var fmt = new ListFmt({
    	locale: "ko-KR"
    });

    assertNotNull(fmt);
    assertEquals("하나, 둘, 셋 및 넷", fmt.format(["하나", "둘", "셋", "넷"]));
}


function testListFmtUnitStyleNamekoKR() {
    var fmt = new ListFmt({
        locale: "ko-KR",
        style:"unit"
    });

    assertNotNull(fmt);
    assertEquals("unit", fmt.getStyle());
}

function testListFmtUnitStylekoKRNumberFormatOne() {
    var fmt = new ListFmt({
        locale: "ko-KR",
        style:"unit"
    });

    assertNotNull(fmt);
    assertEquals("1월", fmt.format(["1월"]));
}

function testListFmtUnitStylekoKRNumberFormatTwoUnitStyle() {
    var fmt = new ListFmt({
        locale: "ko-KR",
        style:"unit"
    });

    assertNotNull(fmt);
    assertEquals("1월 2월", fmt.format(["1월","2월"]));
}

function testListFmtUnitStylekoKRNumberFormatThree() {
    var fmt = new ListFmt({
        locale: "ko-KR",
        style:"unit"
    });

    assertNotNull(fmt);
    assertEquals("1월 2월 3월", fmt.format(["1월","2월","3월"]));
}

function testListFmtUnitStylekoKRNumberFormatFour() {
    var fmt = new ListFmt({
        locale: "ko-KR",
        style:"unit"
    });

    assertNotNull(fmt);
    assertEquals("1월 2월 3월 4월", fmt.format(["1월","2월","3월","4월"]));
}

function testListFmtUnitStylekoKRNumberFormatFive() {
    var fmt = new ListFmt({
        locale: "ko-KR",
        style:"unit"
    });

    assertNotNull(fmt);
    assertEquals("1월 2월 3월 4월 5월", fmt.format(["1월","2월","3월","4월","5월"]));
}

// id-ID

function testListFmtidIDStyleName() {
    var fmt = new ListFmt({
        locale: "id-ID"
    });

    assertNotNull(fmt);
    assertEquals("standard", fmt.getStyle());
}

function testListFmtidIDNumberFormatOne() {
    var fmt = new ListFmt({
        locale: "id-ID"
    });

    assertNotNull(fmt);
    assertEquals("satu", fmt.format(["satu"]));
}

function testListFmtkoKRNumberFormatTwo() {
    var fmt = new ListFmt({
        locale: "id-ID"
    });

    assertNotNull(fmt);
    assertEquals("satu dan dua", fmt.format(["satu", "dua"]));
}

function testListFmtidIDNumberFormatThree() {
    var fmt = new ListFmt({
        locale: "id-ID"
    });

    assertNotNull(fmt);
    assertEquals("satu, dua, dan tiga", fmt.format(["satu", "dua", "tiga"]));
}

function testListFmtidIDNumberFormatFour() {
    var fmt = new ListFmt({
        locale: "id-ID"
    });

    assertNotNull(fmt);
    assertEquals("satu, dua, tiga, dan empat", fmt.format(["satu", "dua", "tiga", "empat"]));
}

function testListFmtidIDUnitStyleName() {
    var fmt = new ListFmt({
        locale: "id-ID",
        style: "unit"
    });

    assertNotNull(fmt);
    assertEquals("unit", fmt.getStyle());
}

function testListFmtUnitStyleidIDNumberFormatOne() {
    var fmt = new ListFmt({
        locale: "id-ID",
        style:"unit"
    });

    assertNotNull(fmt);
    assertEquals("satu", fmt.format(["satu"]));
}

function testListFmtUnitStyleidIDNumberFormatTwoUnitStyle() {
    var fmt = new ListFmt({
        locale: "id-ID",
        style:"unit"
    });

    assertNotNull(fmt);
    assertEquals("satu, dua", fmt.format(["satu", "dua"]));
}

function testListFmtUnitStyleidIDNumberFormatThree() {
    var fmt = new ListFmt({
        locale: "id-ID",
        style:"unit"
    });

    assertNotNull(fmt);
    assertEquals("satu, dua, tiga", fmt.format(["satu", "dua", "tiga"]));
}

function testListFmtUnitStyleidIDNumberFormatFour() {
    var fmt = new ListFmt({
        locale: "id-ID",
        style:"unit"
    });

    assertNotNull(fmt);
    assertEquals("satu, dua, tiga, empat", fmt.format(["satu", "dua", "tiga", "empat"]));
}

function testListFmtUnitStyleidIDNumberFormatFive() {
    var fmt = new ListFmt({
        locale: "id-ID",
        style:"unit"
    });

    assertNotNull(fmt);
    assertEquals("satu, dua, tiga, empat, lima", fmt.format(["satu", "dua", "tiga", "empat", "lima"]));
}