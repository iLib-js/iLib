/*
 * testlistfmt_zh.js - test the list formatter object
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

// zh-Hans-CN
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

function testListFmtzhHansCNNumberFormatFive() {
    var fmt = new ListFmt({
        locale: "zh-Hans-CN"
    });

    assertNotNull(fmt);
    assertEquals("一、二、三、四和五", fmt.format(["一", "二", "三", "四", "五"]));
}

// zh-Hans-CN: unit style

function testListFmtUnitStylezhHansCNNumberFormatOne() {
    var fmt = new ListFmt({
        locale: "zh-Hans-CN",
        style:"unit"
    });

    assertNotNull(fmt);
    assertEquals("一", fmt.format(["一"]));
}

function testListFmtUnitStylezhHansCNNumberFormatTwo() {
    var fmt = new ListFmt({
        locale: "zh-Hans-CN",
        style:"unit"
    });

    assertNotNull(fmt);
    assertEquals("一二", fmt.format(["一", "二"]));
}

function testListFmtUnitStylezhHansCNNumberFormatThree() {
    var fmt = new ListFmt({
        locale: "zh-Hans-CN",
        style:"unit"
    });

    assertNotNull(fmt);
    assertEquals("一二三", fmt.format(["一", "二", "三"]));
}

function testListFmtUnitStylezhHansCNNumberFormatFour() {
    var fmt = new ListFmt({
        locale: "zh-Hans-CN",
        style:"unit"
    });

    assertNotNull(fmt);
    assertEquals("一二三四", fmt.format(["一", "二", "三", "四"]));
}

function testListFmtUnitStylezhHansCNNumberFormatFive() {
    var fmt = new ListFmt({
        locale: "zh-Hans-CN",
        style:"unit"
    });

    assertNotNull(fmt);
    assertEquals("一二三四五", fmt.format(["一", "二", "三", "四", "五"]));
}

function testListFmtUnitStylezhHansCNNumberFormatOneFull() {
    var fmt = new ListFmt({
        locale: "zh-Hans-CN",
        style:"unit"
    });

    assertNotNull(fmt);
    assertEquals("一", fmt.format(["一"]));
}

function testListFmtUnitStylezhHansCNNumberFormatTwoFull() {
    var fmt = new ListFmt({
        locale: "zh-Hans-CN",
        style:"unit"
    });

    assertNotNull(fmt);
    assertEquals("一二", fmt.format(["一", "二"]));
}

function testListFmtUnitStylezhHansCNNumberFormatThreeFull() {
    var fmt = new ListFmt({
        locale: "zh-Hans-CN",
        style:"unit"
    });

    assertNotNull(fmt);
    assertEquals("一二三", fmt.format(["一", "二", "三"]));
}

function testListFmtUnitStylezhHansCNNumberFormatFourFull() {
    var fmt = new ListFmt({
        locale: "zh-Hans-CN",
        style:"unit"
    });

    assertNotNull(fmt);
    assertEquals("一二三四", fmt.format(["一", "二", "三", "四"]));
}

function testListFmtUnitStylezhHansCNNumberFormatFiveFull() {
    var fmt = new ListFmt({
        locale: "zh-Hans-CN",
        style:"unit"
    });

    assertNotNull(fmt);
    assertEquals("一二三四五", fmt.format(["一", "二", "三", "四", "五"]));
}


//// zh-Hant-HK

function testListFmtzhHantHKNumberFormatOneShort() {
    var fmt = new ListFmt({
        locale: "zh-Hant-HK"
    });

    assertNotNull(fmt);
    assertEquals("一", fmt.format(["一"]));
}

function testListFmtzhHantHKNumberFormatTwoShort() {
    var fmt = new ListFmt({
        locale: "zh-Hant-HK"
    });

    assertNotNull(fmt);
    assertEquals("一和二", fmt.format(["一", "二"]));
}

function testListFmtzhHantHKNumberFormatThreeShort() {
    var fmt = new ListFmt({
        locale: "zh-Hant-HK"
    });

    assertNotNull(fmt);
    assertEquals("一、二和三", fmt.format(["一", "二", "三"]));
}

function testListFmtzhHantHKNumberFormatFourShort() {
    var fmt = new ListFmt({
        locale: "zh-Hant-HK"
    });

    assertNotNull(fmt);
    assertEquals("一、二、三和四", fmt.format(["一", "二", "三", "四"]));
}

function testListFmtzhHantHKNumberFormatOneMedium() {
    var fmt = new ListFmt({
        locale: "zh-Hant-HK",
        length: "medium"
    });

    assertNotNull(fmt);
    assertEquals("一", fmt.format(["一"]));
}

function testListFmtzhHantHKNumberFormatTwoMedium() {
    var fmt = new ListFmt({
        locale: "zh-Hant-HK",
        length: "medium"
    });

    assertNotNull(fmt);
    assertEquals("一和二", fmt.format(["一", "二"]));
}

function testListFmtzhHantHKNumberFormatThreeMedium() {
    var fmt = new ListFmt({
        locale: "zh-Hant-HK",
        length: "medium"
    });

    assertNotNull(fmt);
    assertEquals("一、二和三", fmt.format(["一", "二", "三"]));
}

function testListFmtzhHantHKNumberFormatFourMedium() {
    var fmt = new ListFmt({
        locale: "zh-Hant-HK",
        length: "medium"
    });

    assertNotNull(fmt);
    assertEquals("一、二、三和四", fmt.format(["一", "二", "三", "四"]));
}

function testListFmtzhHantHKNumberFormatOneLong() {
    var fmt = new ListFmt({
        locale: "zh-Hant-HK",
        length: "long"
    });

    assertNotNull(fmt);
    assertEquals("一", fmt.format(["一"]));
}

function testListFmtzhHantHKNumberFormatTwoLong() {
    var fmt = new ListFmt({
        locale: "zh-Hant-HK",
        length: "long"
    });

    assertNotNull(fmt);
    assertEquals("一及二", fmt.format(["一", "二"]));
}

function testListFmtzhHantHKNumberFormatThreeLong() {
    var fmt = new ListFmt({
        locale: "zh-Hant-HK",
        length: "long"
    });

    assertNotNull(fmt);
    assertEquals("一、二及三", fmt.format(["一", "二", "三"]));
}

function testListFmtzhHantHKNumberFormatFourLong() {
    var fmt = new ListFmt({
        locale: "zh-Hant-HK",
        length: "long"
    });

    assertNotNull(fmt);
    assertEquals("一、二、三及四", fmt.format(["一", "二", "三", "四"]));
}

function testListFmtzhHantHKNumberFormatOneFull() {
    var fmt = new ListFmt({
        locale: "zh-Hant-HK",
        length: "full"
    });

    assertNotNull(fmt);
    assertEquals("一", fmt.format(["一"]));
}

function testListFmtzhHantHKNumberFormatTwoFull() {
    var fmt = new ListFmt({
        locale: "zh-Hant-HK",
        length: "full"
    });

    assertNotNull(fmt);
    assertEquals("一及二", fmt.format(["一", "二"]));
}

function testListFmtzhHantHKNumberFormatThreeFull() {
    var fmt = new ListFmt({
        locale: "zh-Hant-HK",
        length: "full"
    });

    assertNotNull(fmt);
    assertEquals("一、二及三", fmt.format(["一", "二", "三"]));
}

function testListFmtzhHantHKNumberFormatFourFull() {
    var fmt = new ListFmt({
        locale: "zh-Hant-HK",
        length: "full"
    });

    assertNotNull(fmt);
    assertEquals("一、二、三及四", fmt.format(["一", "二", "三", "四"]));
}

// zh-Hant-HK: unitStyle

function testListFmtUnitStylezhHantHKNumberFormatOne() {
    var fmt = new ListFmt({
        locale: "zh-Hant-HK",
        style: "unit"
    });

    assertNotNull(fmt);
    assertEquals("一", fmt.format(["一"]));
}

function testListFmtUnitStylezhHantHKNumberFormatTwo() {
    var fmt = new ListFmt({
        locale: "zh-Hant-HK",
        style: "unit"
    });

    assertNotNull(fmt);
    assertEquals("一二", fmt.format(["一", "二"]));
}

function testListFmtUnitStylezhHantHKNumberFormatThree() {
    var fmt = new ListFmt({
        locale: "zh-Hant-HK",
        style: "unit"
    });

    assertNotNull(fmt);
    assertEquals("一二三", fmt.format(["一", "二", "三"]));
}

function testListFmtUnitStylezhHantHKNumberFormatFour() {
    var fmt = new ListFmt({
        locale: "zh-Hant-HK",
        style: "unit"
    });

    assertNotNull(fmt);
    assertEquals("一二三四", fmt.format(["一", "二", "三", "四"]));
}

function testListFmtUnitStylezhHantHKNumberFormatOneMedium() {
    var fmt = new ListFmt({
        locale: "zh-Hant-HK",
        style: "unit",
        length: "medium"
    });

    assertNotNull(fmt);
    assertEquals("一", fmt.format(["一"]));
}

function testListFmtUnitStylezhHantHKNumberFormatTwoMedium() {
    var fmt = new ListFmt({
        locale: "zh-Hant-HK",
        style: "unit",
        length: "medium"
    });

    assertNotNull(fmt);
    assertEquals("一 二", fmt.format(["一", "二"]));
}

function testListFmtUnitStylezhHantHKNumberFormatThreeMedium() {
    var fmt = new ListFmt({
        locale: "zh-Hant-HK",
        style: "unit",
        length: "medium"
    });

    assertNotNull(fmt);
    assertEquals("一 二 三", fmt.format(["一", "二", "三"]));
}

function testListFmtUnitStylezhHantHKNumberFormatFourMedium() {
    var fmt = new ListFmt({
        locale: "zh-Hant-HK",
        style: "unit",
        length: "medium"
    });

    assertNotNull(fmt);
    assertEquals("一 二 三 四", fmt.format(["一", "二", "三", "四"]));
}

function testListFmtUnitStylezhHantHKNumberFormatOneLong() {
    var fmt = new ListFmt({
        locale: "zh-Hant-HK",
        style: "unit",
        length: "long"
    });

    assertNotNull(fmt);
    assertEquals("一", fmt.format(["一"]));
}

function testListFmtUnitStylezhHantHKNumberFormatTwoLong() {
    var fmt = new ListFmt({
        locale: "zh-Hant-HK",
        style: "unit",
        length: "long"
    });

    assertNotNull(fmt);
    assertEquals("一 二", fmt.format(["一", "二"]));
}

function testListFmtUnitStylezhHantHKNumberFormatThreeLong() {
    var fmt = new ListFmt({
        locale: "zh-Hant-HK",
        style: "unit",
        length: "long"
    });

    assertNotNull(fmt);
    assertEquals("一 二 三", fmt.format(["一", "二", "三"]));
}

function testListFmtUnitStylezhHantHKNumberFormatFourLong() {
    var fmt = new ListFmt({
        locale: "zh-Hant-HK",
        style: "unit",
        length: "long"
    });

    assertNotNull(fmt);
    assertEquals("一 二 三 四", fmt.format(["一", "二", "三", "四"]));
}

function testListFmtUnitStylezhHantHKNumberFormatOneFull() {
    var fmt = new ListFmt({
        locale: "zh-Hant-HK",
        style: "unit",
        length: "full"
    });

    assertNotNull(fmt);
    assertEquals("一", fmt.format(["一"]));
}

function testListFmtUnitStylezhHantHKNumberFormatTwoFull() {
    var fmt = new ListFmt({
        locale: "zh-Hant-HK",
        style: "unit",
        length: "full"
    });

    assertNotNull(fmt);
    assertEquals("一 二", fmt.format(["一", "二"]));
}

function testListFmtUnitStylezhHantHKNumberFormatThreeFull() {
    var fmt = new ListFmt({
        locale: "zh-Hant-HK",
        style: "unit",
        length: "full"
    });

    assertNotNull(fmt);
    assertEquals("一 二 三", fmt.format(["一", "二", "三"]));
}

function testListFmtUnitStylezhHantHKNumberFormatFourFull() {
    var fmt = new ListFmt({
        locale: "zh-Hant-HK",
        style: "unit",
        length: "full"
    });

    assertNotNull(fmt);
    assertEquals("一 二 三 四", fmt.format(["一", "二", "三", "四"]));
}


//// zh-Hant-TW

function testListFmtzhHantTWNumberFormatOneShort() {
    var fmt = new ListFmt({
        locale: "zh-Hant-TW"
    });

    assertNotNull(fmt);
    assertEquals("一", fmt.format(["一"]));
}

function testListFmtzhHantTWNumberFormatTwoShort() {
    var fmt = new ListFmt({
        locale: "zh-Hant-TW"
    });

    assertNotNull(fmt);
    assertEquals("一和二", fmt.format(["一", "二"]));
}

function testListFmtzhHantTWNumberFormatThreeShort() {
    var fmt = new ListFmt({
        locale: "zh-Hant-TW"
    });

    assertNotNull(fmt);
    assertEquals("一、二和三", fmt.format(["一", "二", "三"]));
}

function testListFmtzhHantTWNumberFormatFourShort() {
    var fmt = new ListFmt({
        locale: "zh-Hant-TW"
    });

    assertNotNull(fmt);
    assertEquals("一、二、三和四", fmt.format(["一", "二", "三", "四"]));
}

function testListFmtzhHantTWNumberFormatOneMedium() {
    var fmt = new ListFmt({
        locale: "zh-Hant-TW",
        length: "medium"
    });

    assertNotNull(fmt);
    assertEquals("一", fmt.format(["一"]));
}

function testListFmtzhHantTWNumberFormatTwoMedium() {
    var fmt = new ListFmt({
        locale: "zh-Hant-TW",
        length: "medium"
    });

    assertNotNull(fmt);
    assertEquals("一和二", fmt.format(["一", "二"]));
}

function testListFmtzhHantTWNumberFormatThreeMedium() {
    var fmt = new ListFmt({
        locale: "zh-Hant-TW",
        length: "medium"
    });

    assertNotNull(fmt);
    assertEquals("一、二和三", fmt.format(["一", "二", "三"]));
}

function testListFmtzhHantTWNumberFormatFourMedium() {
    var fmt = new ListFmt({
        locale: "zh-Hant-TW",
        length: "medium"
    });

    assertNotNull(fmt);
    assertEquals("一、二、三和四", fmt.format(["一", "二", "三", "四"]));
}

function testListFmtzhHantTWNumberFormatOneLong() {
    var fmt = new ListFmt({
        locale: "zh-Hant-TW",
        length: "long"
    });

    assertNotNull(fmt);
    assertEquals("一", fmt.format(["一"]));
}

function testListFmtzhHantTWNumberFormatTwoLong() {
    var fmt = new ListFmt({
        locale: "zh-Hant-TW",
        length: "long"
    });

    assertNotNull(fmt);
    assertEquals("一及二", fmt.format(["一", "二"]));
}

function testListFmtzhHantTWNumberFormatThreeLong() {
    var fmt = new ListFmt({
        locale: "zh-Hant-TW",
        length: "long"
    });

    assertNotNull(fmt);
    assertEquals("一、二及三", fmt.format(["一", "二", "三"]));
}

function testListFmtzhHantTWNumberFormatFourLong() {
    var fmt = new ListFmt({
        locale: "zh-Hant-TW",
        length: "long"
    });

    assertNotNull(fmt);
    assertEquals("一、二、三及四", fmt.format(["一", "二", "三", "四"]));
}

function testListFmtzhHantTWNumberFormatOneFull() {
    var fmt = new ListFmt({
        locale: "zh-Hant-TW",
        length: "full"
    });

    assertNotNull(fmt);
    assertEquals("一", fmt.format(["一"]));
}

function testListFmtzhHantTWNumberFormatTwoFull() {
    var fmt = new ListFmt({
        locale: "zh-Hant-TW",
        length: "full"
    });

    assertNotNull(fmt);
    assertEquals("一及二", fmt.format(["一", "二"]));
}

function testListFmtzhHantTWNumberFormatThreeFull() {
    var fmt = new ListFmt({
        locale: "zh-Hant-TW",
        length: "full"
    });

    assertNotNull(fmt);
    assertEquals("一、二及三", fmt.format(["一", "二", "三"]));
}

function testListFmtzhHantTWNumberFormatFourFull() {
    var fmt = new ListFmt({
        locale: "zh-Hant-TW",
        length: "full"
    });

    assertNotNull(fmt);
    assertEquals("一、二、三及四", fmt.format(["一", "二", "三", "四"]));
}

// zh-Hant-TW: unitStyle

function testListFmtUnitStylezhHantTWNumberFormatOne() {
    var fmt = new ListFmt({
        locale: "zh-Hant-TW",
        style: "unit"
    });

    assertNotNull(fmt);
    assertEquals("一", fmt.format(["一"]));
}

function testListFmtUnitStylezhHantTWNumberFormatTwo() {
    var fmt = new ListFmt({
        locale: "zh-Hant-TW",
        style: "unit"
    });

    assertNotNull(fmt);
    assertEquals("一二", fmt.format(["一", "二"]));
}

function testListFmtUnitStylezhHantTWNumberFormatThree() {
    var fmt = new ListFmt({
        locale: "zh-Hant-TW",
        style: "unit"
    });

    assertNotNull(fmt);
    assertEquals("一二三", fmt.format(["一", "二", "三"]));
}

function testListFmtUnitStylezhHantTWNumberFormatFour() {
    var fmt = new ListFmt({
        locale: "zh-Hant-TW",
        style: "unit"
    });

    assertNotNull(fmt);
    assertEquals("一二三四", fmt.format(["一", "二", "三", "四"]));
}

function testListFmtUnitStylezhHantTWNumberFormatOneMedium() {
    var fmt = new ListFmt({
        locale: "zh-Hant-TW",
        style: "unit",
        length: "medium"
    });

    assertNotNull(fmt);
    assertEquals("一", fmt.format(["一"]));
}

function testListFmtUnitStylezhHantTWNumberFormatTwoMedium() {
    var fmt = new ListFmt({
        locale: "zh-Hant-TW",
        style: "unit",
        length: "medium"
    });

    assertNotNull(fmt);
    assertEquals("一 二", fmt.format(["一", "二"]));
}

function testListFmtUnitStylezhHantTWNumberFormatThreeMedium() {
    var fmt = new ListFmt({
        locale: "zh-Hant-TW",
        style: "unit",
        length: "medium"
    });

    assertNotNull(fmt);
    assertEquals("一 二 三", fmt.format(["一", "二", "三"]));
}

function testListFmtUnitStylezhHantTWNumberFormatFourMedium() {
    var fmt = new ListFmt({
        locale: "zh-Hant-TW",
        style: "unit",
        length: "medium"
    });

    assertNotNull(fmt);
    assertEquals("一 二 三 四", fmt.format(["一", "二", "三", "四"]));
}

function testListFmtUnitStylezhHantTWNumberFormatOneLong() {
    var fmt = new ListFmt({
        locale: "zh-Hant-TW",
        style: "unit",
        length: "long"
    });

    assertNotNull(fmt);
    assertEquals("一", fmt.format(["一"]));
}

function testListFmtUnitStylezhHantTWNumberFormatTwoLong() {
    var fmt = new ListFmt({
        locale: "zh-Hant-TW",
        style: "unit",
        length: "long"
    });

    assertNotNull(fmt);
    assertEquals("一 二", fmt.format(["一", "二"]));
}

function testListFmtUnitStylezhHantTWNumberFormatThreeLong() {
    var fmt = new ListFmt({
        locale: "zh-Hant-TW",
        style: "unit",
        length: "long"
    });

    assertNotNull(fmt);
    assertEquals("一 二 三", fmt.format(["一", "二", "三"]));
}

function testListFmtUnitStylezhHantTWNumberFormatFourLong() {
    var fmt = new ListFmt({
        locale: "zh-Hant-TW",
        style: "unit",
        length: "long"
    });

    assertNotNull(fmt);
    assertEquals("一 二 三 四", fmt.format(["一", "二", "三", "四"]));
}

function testListFmtUnitStylezhHantTWNumberFormatOneFull() {
    var fmt = new ListFmt({
        locale: "zh-Hant-TW",
        style: "unit",
        length: "full"
    });

    assertNotNull(fmt);
    assertEquals("一", fmt.format(["一"]));
}

function testListFmtUnitStylezhHantTWNumberFormatTwoFull() {
    var fmt = new ListFmt({
        locale: "zh-Hant-TW",
        style: "unit",
        length: "full"
    });

    assertNotNull(fmt);
    assertEquals("一 二", fmt.format(["一", "二"]));
}

function testListFmtUnitStylezhHantTWNumberFormatThreeFull() {
    var fmt = new ListFmt({
        locale: "zh-Hant-TW",
        style: "unit",
        length: "full"
    });

    assertNotNull(fmt);
    assertEquals("一 二 三", fmt.format(["一", "二", "三"]));
}

function testListFmtUnitStylezhHantTWNumberFormatFourFull() {
    var fmt = new ListFmt({
        locale: "zh-Hant-TW",
        style: "unit",
        length: "full"
    });

    assertNotNull(fmt);
    assertEquals("一 二 三 四", fmt.format(["一", "二", "三", "四"]));
}