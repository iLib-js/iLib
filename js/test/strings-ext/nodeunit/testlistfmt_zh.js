/*
 * testlistfmt_zh.js - test the list formatter object
 *
 * Copyright © 2017,2017, JEDLSoft
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

if (typeof(ListFmt) === "undefined") {
    var ListFmt = require("../../../lib/ListFmt.js");
}

// zh-Hans-CN
if (typeof(ilib) === "undefined") {
    var ilib = require("../../../lib/ilib.js");
}

module.exports.testlistfmt_zh = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testListFmtzhHansCNNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hans-CN"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一"]), "一");
        test.done();
    },
    
    testListFmtzhHansCNNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hans-CN"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一", "二"]), "一和二");
        test.done();
    },
    
    testListFmtzhHansCNNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hans-CN"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一", "二", "三"]), "一、二和三");
        test.done();
    },
    
    testListFmtzhHansCNNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hans-CN"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一", "二", "三", "四"]), "一、二、三和四");
        test.done();
    },
    
    testListFmtzhHansCNNumberFormatFive: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hans-CN"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一", "二", "三", "四", "五"]), "一、二、三、四和五");
        test.done();
    },
    
    // zh-Hans-CN: unit style
    
    testListFmtUnitStylezhHansCNNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hans-CN",
            style:"unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一"]), "一");
        test.done();
    },
    
    testListFmtUnitStylezhHansCNNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hans-CN",
            style:"unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一", "二"]), "一二");
        test.done();
    },
    
    testListFmtUnitStylezhHansCNNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hans-CN",
            style:"unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一", "二", "三"]), "一二三");
        test.done();
    },
    
    testListFmtUnitStylezhHansCNNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hans-CN",
            style:"unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一", "二", "三", "四"]), "一二三四");
        test.done();
    },
    
    testListFmtUnitStylezhHansCNNumberFormatFive: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hans-CN",
            style:"unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一", "二", "三", "四", "五"]), "一二三四五");
        test.done();
    },
    
    testListFmtUnitStylezhHansCNNumberFormatOneFull: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hans-CN",
            style:"unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一"]), "一");
        test.done();
    },
    
    testListFmtUnitStylezhHansCNNumberFormatTwoFull: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hans-CN",
            style:"unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一", "二"]), "一二");
        test.done();
    },
    
    testListFmtUnitStylezhHansCNNumberFormatThreeFull: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hans-CN",
            style:"unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一", "二", "三"]), "一二三");
        test.done();
    },
    
    testListFmtUnitStylezhHansCNNumberFormatFourFull: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hans-CN",
            style:"unit",
            length: "full"

        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一", "二", "三", "四"]), "一二三四");
        test.done();
    },
    
    testListFmtUnitStylezhHansCNNumberFormatFiveFull: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hans-CN",
            style:"unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一", "二", "三", "四", "五"]), "一二三四五");
        test.done();
    },
    
    
    //// zh-Hant-HK
    
    testListFmtzhHantHKNumberFormatOneShort: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hant-HK"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一"]), "一");
        test.done();
    },
    
    testListFmtzhHantHKNumberFormatTwoShort: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hant-HK"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一", "二"]), "一和二");
        test.done();
    },
    
    testListFmtzhHantHKNumberFormatThreeShort: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hant-HK"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一", "二", "三"]), "一、二和三");
        test.done();
    },
    
    testListFmtzhHantHKNumberFormatFourShort: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hant-HK"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一", "二", "三", "四"]), "一、二、三和四");
        test.done();
    },
    
    testListFmtzhHantHKNumberFormatOneMedium: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hant-HK",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一"]), "一");
        test.done();
    },
    
    testListFmtzhHantHKNumberFormatTwoMedium: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hant-HK",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一", "二"]), "一和二");
        test.done();
    },
    
    testListFmtzhHantHKNumberFormatThreeMedium: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hant-HK",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一", "二", "三"]), "一、二和三");
        test.done();
    },
    
    testListFmtzhHantHKNumberFormatFourMedium: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hant-HK",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一", "二", "三", "四"]), "一、二、三和四");
        test.done();
    },
    
    testListFmtzhHantHKNumberFormatOneLong: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hant-HK",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一"]), "一");
        test.done();
    },
    
    testListFmtzhHantHKNumberFormatTwoLong: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hant-HK",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一", "二"]), "一及二");
        test.done();
    },
    
    testListFmtzhHantHKNumberFormatThreeLong: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hant-HK",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一", "二", "三"]), "一、二及三");
        test.done();
    },
    
    testListFmtzhHantHKNumberFormatFourLong: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hant-HK",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一", "二", "三", "四"]), "一、二、三及四");
        test.done();
    },
    
    testListFmtzhHantHKNumberFormatOneFull: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hant-HK",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一"]), "一");
        test.done();
    },
    
    testListFmtzhHantHKNumberFormatTwoFull: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hant-HK",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一", "二"]), "一及二");
        test.done();
    },
    
    testListFmtzhHantHKNumberFormatThreeFull: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hant-HK",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一", "二", "三"]), "一、二及三");
        test.done();
    },
    
    testListFmtzhHantHKNumberFormatFourFull: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hant-HK",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一", "二", "三", "四"]), "一、二、三及四");
        test.done();
    },
    
    // zh-Hant-HK: unitStyle
    
    testListFmtUnitStylezhHantHKNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hant-HK",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一"]), "一");
        test.done();
    },
    
    testListFmtUnitStylezhHantHKNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hant-HK",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一", "二"]), "一二");
        test.done();
    },
    
    testListFmtUnitStylezhHantHKNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hant-HK",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一", "二", "三"]), "一二三");
        test.done();
    },
    
    testListFmtUnitStylezhHantHKNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hant-HK",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一", "二", "三", "四"]), "一二三四");
        test.done();
    },
    
    testListFmtUnitStylezhHantHKNumberFormatOneMedium: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hant-HK",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一"]), "一");
        test.done();
    },
    
    testListFmtUnitStylezhHantHKNumberFormatTwoMedium: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hant-HK",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一", "二"]), "一 二");
        test.done();
    },
    
    testListFmtUnitStylezhHantHKNumberFormatThreeMedium: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hant-HK",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一", "二", "三"]), "一 二 三");
        test.done();
    },
    
    testListFmtUnitStylezhHantHKNumberFormatFourMedium: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hant-HK",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一", "二", "三", "四"]), "一 二 三 四");
        test.done();
    },
    
    testListFmtUnitStylezhHantHKNumberFormatOneLong: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hant-HK",
            style: "unit",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一"]), "一");
        test.done();
    },
    
    testListFmtUnitStylezhHantHKNumberFormatTwoLong: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hant-HK",
            style: "unit",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一", "二"]), "一 二");
        test.done();
    },
    
    testListFmtUnitStylezhHantHKNumberFormatThreeLong: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hant-HK",
            style: "unit",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一", "二", "三"]), "一 二 三");
        test.done();
    },
    
    testListFmtUnitStylezhHantHKNumberFormatFourLong: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hant-HK",
            style: "unit",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一", "二", "三", "四"]), "一 二 三 四");
        test.done();
    },
    
    testListFmtUnitStylezhHantHKNumberFormatOneFull: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hant-HK",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一"]), "一");
        test.done();
    },
    
    testListFmtUnitStylezhHantHKNumberFormatTwoFull: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hant-HK",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一", "二"]), "一 二");
        test.done();
    },
    
    testListFmtUnitStylezhHantHKNumberFormatThreeFull: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hant-HK",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一", "二", "三"]), "一 二 三");
        test.done();
    },
    
    testListFmtUnitStylezhHantHKNumberFormatFourFull: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hant-HK",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一", "二", "三", "四"]), "一 二 三 四");
        test.done();
    },
    
    //// zh-Hant-TW
    
    testListFmtzhHantTWNumberFormatOneShort: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hant-TW"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一"]), "一");
        test.done();
    },
    
    testListFmtzhHantTWNumberFormatTwoShort: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hant-TW"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一", "二"]), "一和二");
        test.done();
    },
    
    testListFmtzhHantTWNumberFormatThreeShort: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hant-TW"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一", "二", "三"]), "一、二和三");
        test.done();
    },
    
    testListFmtzhHantTWNumberFormatFourShort: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hant-TW"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一", "二", "三", "四"]), "一、二、三和四");
        test.done();
    },
    
    testListFmtzhHantTWNumberFormatOneMedium: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hant-TW",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一"]), "一");
        test.done();
    },
    
    testListFmtzhHantTWNumberFormatTwoMedium: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hant-TW",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一", "二"]), "一和二");
        test.done();
    },
    
    testListFmtzhHantTWNumberFormatThreeMedium: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hant-TW",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一", "二", "三"]), "一、二和三");
        test.done();
    },
    
    testListFmtzhHantTWNumberFormatFourMedium: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hant-TW",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一", "二", "三", "四"]), "一、二、三和四");
        test.done();
    },
    
    testListFmtzhHantTWNumberFormatOneLong: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hant-TW",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一"]), "一");
        test.done();
    },
    
    testListFmtzhHantTWNumberFormatTwoLong: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hant-TW",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一", "二"]), "一及二");
        test.done();
    },
    
    testListFmtzhHantTWNumberFormatThreeLong: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hant-TW",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一", "二", "三"]), "一、二及三");
        test.done();
    },
    
    testListFmtzhHantTWNumberFormatFourLong: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hant-TW",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一", "二", "三", "四"]), "一、二、三及四");
        test.done();
    },
    
    testListFmtzhHantTWNumberFormatOneFull: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hant-TW",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一"]), "一");
        test.done();
    },
    
    testListFmtzhHantTWNumberFormatTwoFull: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hant-TW",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一", "二"]), "一及二");
        test.done();
    },
    
    testListFmtzhHantTWNumberFormatThreeFull: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hant-TW",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一", "二", "三"]), "一、二及三");
        test.done();
    },
    
    testListFmtzhHantTWNumberFormatFourFull: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hant-TW",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一", "二", "三", "四"]), "一、二、三及四");
        test.done();
    },
    
    // zh-Hant-TW: unitStyle
    
    testListFmtUnitStylezhHantTWNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hant-TW",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一"]), "一");
        test.done();
    },
    
    testListFmtUnitStylezhHantTWNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hant-TW",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一", "二"]), "一二");
        test.done();
    },
    
    testListFmtUnitStylezhHantTWNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hant-TW",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一", "二", "三"]), "一二三");
        test.done();
    },
    
    testListFmtUnitStylezhHantTWNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hant-TW",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一", "二", "三", "四"]), "一二三四");
        test.done();
    },
    
    testListFmtUnitStylezhHantTWNumberFormatOneMedium: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hant-TW",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一"]), "一");
        test.done();
    },
    
    testListFmtUnitStylezhHantTWNumberFormatTwoMedium: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hant-TW",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一", "二"]), "一 二");
        test.done();
    },
    
    testListFmtUnitStylezhHantTWNumberFormatThreeMedium: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hant-TW",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一", "二", "三"]), "一 二 三");
        test.done();
    },
    
    testListFmtUnitStylezhHantTWNumberFormatFourMedium: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hant-TW",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一", "二", "三", "四"]), "一 二 三 四");
        test.done();
    },
    
    testListFmtUnitStylezhHantTWNumberFormatOneLong: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hant-TW",
            style: "unit",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一"]), "一");
        test.done();
    },
    
    testListFmtUnitStylezhHantTWNumberFormatTwoLong: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hant-TW",
            style: "unit",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一", "二"]), "一 二");
        test.done();
    },
    
    testListFmtUnitStylezhHantTWNumberFormatThreeLong: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hant-TW",
            style: "unit",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一", "二", "三"]), "一 二 三");
        test.done();
    },
    
    testListFmtUnitStylezhHantTWNumberFormatFourLong: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hant-TW",
            style: "unit",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一", "二", "三", "四"]), "一 二 三 四");
        test.done();
    },
    
    testListFmtUnitStylezhHantTWNumberFormatOneFull: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hant-TW",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一"]), "一");
        test.done();
    },
    
    testListFmtUnitStylezhHantTWNumberFormatTwoFull: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hant-TW",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一", "二"]), "一 二");
        test.done();
    },
    
    testListFmtUnitStylezhHantTWNumberFormatThreeFull: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hant-TW",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一", "二", "三"]), "一 二 三");
        test.done();
    },
    
    testListFmtUnitStylezhHantTWNumberFormatFourFull: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hant-TW",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一", "二", "三", "四"]), "一 二 三 四");
        test.done();
    },

    //zh-Hans-SG

    testListFmtzhHansSGNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hans-SG"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一"]), "一");
        test.done();
    },
    
    testListFmtzhHansSGNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hans-SG"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一", "二"]), "一和二");
        test.done();
    },
    
    testListFmtzhHansSGNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hans-SG"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一", "二", "三"]), "一、二和三");
        test.done();
    },
    
    testListFmtzhHansSGNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hans-SG"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一", "二", "三", "四"]), "一、二、三和四");
        test.done();
    },
    
    testListFmtzhHansSGNumberFormatFive: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hans-SG"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一", "二", "三", "四", "五"]), "一、二、三、四和五");
        test.done();
    },
    
    // zh-Hans-SG: unit style
    
    testListFmtUnitStylezhHansSGNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hans-SG",
            style:"unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一"]), "一");
        test.done();
    },
    
    testListFmtUnitStylezhHansSGNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hans-SG",
            style:"unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一", "二"]), "一二");
        test.done();
    },
    
    testListFmtUnitStylezhHansSGNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hans-SG",
            style:"unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一", "二", "三"]), "一二三");
        test.done();
    },
    
    testListFmtUnitStylezhHansSGNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hans-SG",
            style:"unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一", "二", "三", "四"]), "一二三四");
        test.done();
    },
    
    testListFmtUnitStylezhHansSGNumberFormatFive: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hans-SG",
            style:"unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一", "二", "三", "四", "五"]), "一二三四五");
        test.done();
    },
    
    testListFmtUnitStylezhHansSGNumberFormatOneFull: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hans-SG",
            style:"unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一"]), "一");
        test.done();
    },
    
    testListFmtUnitStylezhHansSGNumberFormatTwoFull: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hans-SG",
            style:"unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一", "二"]), "一二");
        test.done();
    },
    
    testListFmtUnitStylezhHansSGNumberFormatThreeFull: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hans-SG",
            style:"unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一", "二", "三"]), "一二三");
        test.done();
    },
    
    testListFmtUnitStylezhHansSGNumberFormatFourFull: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hans-SG",
            style:"unit",
            length: "full"
            
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一", "二", "三", "四"]), "一二三四");
        test.done();
    },
    
    testListFmtUnitStylezhHansSGNumberFormatFiveFull: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hans-SG",
            style:"unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一", "二", "三", "四", "五"]), "一二三四五");
        test.done();
    },

    //zh-Hans-MY

    testListFmtzhHansMYNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hans-MY"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一"]), "一");
        test.done();
    },
    
    testListFmtzhHansMYNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hans-MY"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一", "二"]), "一和二");
        test.done();
    },
    
    testListFmtzhHansMYNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hans-MY"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一", "二", "三"]), "一、二和三");
        test.done();
    },
    
    testListFmtzhHansMYNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hans-MY"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一", "二", "三", "四"]), "一、二、三和四");
        test.done();
    },
    
    testListFmtzhHansMYNumberFormatFive: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hans-MY"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一", "二", "三", "四", "五"]), "一、二、三、四和五");
        test.done();
    },
    
    // zh-Hans-MY: unit style
    
    testListFmtUnitStylezhHansMYNumberFormatOneMedium: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hans-MY",
            style:"unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一"]), "一");
        test.done();
    },
    
    testListFmtUnitStylezhHansMYNumberFormatTwoMedium: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hans-MY",
            style:"unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一", "二"]), "一二");
        test.done();
    },
    
    testListFmtUnitStylezhHansMYNumberFormatThreeMedium: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hans-MY",
            style:"unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一", "二", "三"]), "一二三");
        test.done();
    },
    
    testListFmtUnitStylezhHansMYNumberFormatFourMedium: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hans-MY",
            style:"unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一", "二", "三", "四"]), "一二三四");
        test.done();
    },
    
    testListFmtUnitStylezhHansMYNumberFormatFiveMedium: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hans-MY",
            style:"unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一", "二", "三", "四", "五"]), "一二三四五");
        test.done();
    },
    
    testListFmtUnitStylezhHansMYNumberFormatOneLong: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hans-MY",
            style:"unit",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一"]), "一");
        test.done();
    },
    
    testListFmtUnitStylezhHansMYNumberFormatTwoLong: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hans-MY",
            style:"unit",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一", "二"]), "一二");
        test.done();
    },
    
    testListFmtUnitStylezhHansMYNumberFormatThreeLong: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hans-MY",
            style:"unit",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一", "二", "三"]), "一二三");
        test.done();
    },
    
    testListFmtUnitStylezhHansMYNumberFormatFourLong: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hans-MY",
            style:"unit",
            length: "long"
            
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一", "二", "三", "四"]), "一二三四");
        test.done();
    },
    
    testListFmtUnitStylezhHansMYNumberFormatFiveLong: function(test) {
        var fmt = new ListFmt({
            locale: "zh-Hans-MY",
            style:"unit",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["一", "二", "三", "四", "五"]), "一二三四五");
        test.done();
    }
};