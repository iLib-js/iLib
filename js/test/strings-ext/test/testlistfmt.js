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

function testListFmtzhHansCNNumberFormatOne() {
    var fmt = new ListFmt({
    	locale: "zh-Hans-CN"
    });

    assertNotNull(fmt);

    assertEquals("一", fmt.format(["一"]));
}

function testListFmtzhHansCNNumberFormatTwo() {
    var fmt = new ListFmt({
    	locale: "zh-Hans-CN"
    });

    assertNotNull(fmt);

    assertEquals("一和二", fmt.format(["一", "二"]));
}

function testListFmtzhHansCNNumberFormatThree() {
    var fmt = new ListFmt({
    	locale: "zh-Hans-CN"
    });

    assertNotNull(fmt);

    assertEquals("一、二和三", fmt.format(["一", "二", "三"]));
}

function testListFmtzhHansCNNumberFormatFour() {
    var fmt = new ListFmt({
    	locale: "zh-Hans-CN"
    });

    assertNotNull(fmt);

    assertEquals("一、二、三和四", fmt.format(["一", "二", "三", "四"]));
}


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

function testListFmtUnitStylekoKRNumberFormatOne() {
    var fmt = new ListFmt({
        locale: "ko-KR",
        style:"unit"
    });

    assertNotNull(fmt);

    assertEquals("하나", fmt.format(["하나"]));
}

function testListFmtUnitStylekoKRNumberFormatTwoUnitStyle() {
    var fmt = new ListFmt({
        locale: "ko-KR",
        style:"unit"
    });

    assertNotNull(fmt);

    assertEquals("하나 둘", fmt.format(["하나", "둘"]));
}

function testListFmtUnitStylekoKRNumberFormatThree() {
    var fmt = new ListFmt({
        locale: "ko-KR",
        style:"unit"
    });

    assertNotNull(fmt);

    assertEquals("하나 둘 셋", fmt.format(["하나", "둘", "셋"]));
}

function testListFmtUnitStylekoKRNumberFormatFour() {
    var fmt = new ListFmt({
        locale: "ko-KR",
        style:"unit"
    });

    assertNotNull(fmt);

    assertEquals("하나 둘 셋 넷", fmt.format(["하나", "둘", "셋", "넷"]));
}