/*
 * testlistfmt_fa.js - test the list formatter object
 *
 * Copyright © 2017, 2020-2021 JEDLSoft
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
    var ListFmt = require("../../lib/ListFmt.js");
}

if (typeof(ilib) === "undefined") {
    var ilib = require("../../lib/ilib.js");
}

module.exports.testlistfmt_fa = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testListFmtfaIRNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "fa-IR"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["یکی"]), "یکی");
        test.done();
    },
    testListFmtfaIRNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "fa-IR"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["یکی", "دو"]), "یکی و دو");
        test.done();
    },
    testListFmtfaIRNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "fa-IR"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["یکی", "دو", "سه"]), "یکی،‏ دو، و سه");
        test.done();
    },
    testListFmtfaIRNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "fa-IR"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["یکی", "دو", "سه", "چهار"]), "یکی،‏ دو،‏ سه، و چهار");
        test.done();
    },
    testListFmtfaIRNumberFormatFive: function(test) {
        var fmt = new ListFmt({
            locale: "fa-IR"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["یکی", "دو", "سه", "چهار", "پنج"]), "یکی،‏ دو،‏ سه،‏ چهار، و پنج");
        test.done();
    },
    testListFmtUnitStylefaIRNumberFormatOneShort: function(test) {
        var fmt = new ListFmt({
            locale: "fa-IR",
            style: "unit",
            length: "short"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["یکی"]), "یکی");
        test.done();
    },
    testListFmtUnitStylefaIRNumberFormatTwoShort: function(test) {
        var fmt = new ListFmt({
            locale: "fa-IR",
            style: "unit",
            length: "short"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["یکی", "دو"]), "یکی دو");
        test.done();
    },
    testListFmtUnitStylefaIRNumberFormatThreeShort: function(test) {
        var fmt = new ListFmt({
            locale: "fa-IR",
            style: "unit",
            length: "short"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["یکی", "دو", "سه"]), "یکی دو سه");
        test.done();
    },
    testListFmtUnitStylefaIRNumberFormatFourShort: function(test) {
        var fmt = new ListFmt({
            locale: "fa-IR",
            style: "unit",
            length: "short"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["یکی", "دو", "سه", "چهار"]), "یکی دو سه چهار");
        test.done();
    },
    testListFmtUnitStylefaIRNumberFormatFiveShort: function(test) {
        var fmt = new ListFmt({
            locale: "fa-IR",
            style: "unit",
            length: "short"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["یکی", "دو", "سه", "چهار", "پنج"]), "یکی دو سه چهار پنج");
        test.done();
    },
    testListFmtUnitStylefaIRNumberFormatOneMedium: function(test) {
        var fmt = new ListFmt({
            locale: "fa-IR",
            style: "unit",
            length: "medium"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["یکی"]), "یکی");
        test.done();
    },
    testListFmtUnitStylefaIRNumberFormatTwoMedium: function(test) {
        var fmt = new ListFmt({
            locale: "fa-IR",
            style: "unit",
            length: "medium"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["یکی", "دو"]), "یکی،‏ دو");
        test.done();
    },
    testListFmtUnitStylefaIRNumberFormatThreeMedium: function(test) {
        var fmt = new ListFmt({
            locale: "fa-IR",
            style: "unit",
            length: "medium"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["یکی", "دو", "سه"]), 'یکی،‏ دو، و سه');
        test.done();
    },
    testListFmtUnitStylefaIRNumberFormatFourMedium: function(test) {
        var fmt = new ListFmt({
            locale: "fa-IR",
            style: "unit",
            length: "medium"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["یکی", "دو", "سه", "چهار"]), 'یکی،‏ دو،‏ سه، و چهار');
        test.done();
    },
    testListFmtUnitStylefaIRNumberFormatFiveMedium: function(test) {
        var fmt = new ListFmt({
            locale: "fa-IR",
            style: "unit",
            length: "medium"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["یکی", "دو", "سه", "چهار", "پنج"]), 'یکی،‏ دو،‏ سه،‏ چهار، و پنج');
        test.done();
    },
    testListFmtUnitStylefaIRNumberFormatOneLong: function(test) {
        var fmt = new ListFmt({
            locale: "fa-IR",
            style: "unit",
            length: "long"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["یکی"]), "یکی");
        test.done();
    },
    testListFmtUnitStylefaIRNumberFormatTwoLong: function(test) {
        var fmt = new ListFmt({
            locale: "fa-IR",
            style: "unit",
            length: "long"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["یکی", "دو"]), "یکی و دو");
        test.done();
    },
    testListFmtUnitStylefaIRNumberFormatThreeLong: function(test) {
        var fmt = new ListFmt({
            locale: "fa-IR",
            style: "unit",
            length: "long"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["یکی", "دو", "سه"]), "یکی،‏ دو، و سه");
        test.done();
    },
    testListFmtUnitStylefaIRNumberFormatFourLong: function(test) {
        var fmt = new ListFmt({
            locale: "fa-IR",
            style: "unit",
            length: "long"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["یکی", "دو", "سه", "چهار"]), "یکی،‏ دو،‏ سه، و چهار");
        test.done();
    },
    testListFmtUnitStylefaIRNumberFormatFiveLong: function(test) {
        var fmt = new ListFmt({
            locale: "fa-IR",
            style: "unit",
            length: "long"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["یکی", "دو", "سه", "چهار", "پنج"]), "یکی،‏ دو،‏ سه،‏ چهار، و پنج");
        test.done();
    },
    testListFmtUnitStylefaIRNumberFormatOneFull: function(test) {
        var fmt = new ListFmt({
            locale: "fa-IR",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["یکی"]), "یکی");
        test.done();
    },
    testListFmtUnitStylefaIRNumberFormatTwoFull: function(test) {
        var fmt = new ListFmt({
            locale: "fa-IR",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["یکی", "دو"]), "یکی و دو");
        test.done();
    },
    testListFmtUnitStylefaIRNumberFormatThreeFull: function(test) {
        var fmt = new ListFmt({
            locale: "fa-IR",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["یکی", "دو", "سه"]), "یکی،‏ دو، و سه");
        test.done();
    },
    testListFmtUnitStylefaIRNumberFormatFourFull: function(test) {
        var fmt = new ListFmt({
            locale: "fa-IR",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["یکی", "دو", "سه", "چهار"]), "یکی،‏ دو،‏ سه، و چهار");
        test.done();
    },
    testListFmtUnitStylefaIRNumberFormatFiveFull: function(test) {
        var fmt = new ListFmt({
            locale: "fa-IR",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["یکی", "دو", "سه", "چهار", "پنج"]), "یکی،‏ دو،‏ سه،‏ چهار، و پنج");
        test.done();
    },
    // fa-AF
    testListFmtfaAFNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "fa-AF"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["یکی"]), "یکی");
        test.done();
    },
    testListFmtfaAFNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "fa-AF"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["یکی", "دو"]), "یکی و دو");
        test.done();
    },
    testListFmtfaAFNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "fa-AF"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["یکی", "دو", "سه"]), "یکی،‏ دو، و سه");
        test.done();
    },
    testListFmtfaAFNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "fa-AF"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["یکی", "دو", "سه", "چهار"]), "یکی،‏ دو،‏ سه، و چهار");
        test.done();
    },
    testListFmtfaAFNumberFormatFive: function(test) {
        var fmt = new ListFmt({
            locale: "fa-AF"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["یکی", "دو", "سه", "چهار", "پنج"]), "یکی،‏ دو،‏ سه،‏ چهار، و پنج");
        test.done();
    },
    testListFmtfaAFNumberFormatOneFull: function(test) {
        var fmt = new ListFmt({
            locale: "fa-AF",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["یکی"]), "یکی");
        test.done();
    },
    testListFmtfaAFNumberFormatTwoFull: function(test) {
        var fmt = new ListFmt({
            locale: "fa-AF",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["یکی", "دو"]), "یکی و دو");
        test.done();
    },
    testListFmtfaAFNumberFormatThreeFull: function(test) {
        var fmt = new ListFmt({
            locale: "fa-AF",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["یکی", "دو", "سه"]), "یکی،‏ دو، و سه");
        test.done();
    },
    testListFmtfaAFNumberFormatFourFull: function(test) {
        var fmt = new ListFmt({
            locale: "fa-AF",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["یکی", "دو", "سه", "چهار"]), "یکی،‏ دو،‏ سه، و چهار");
        test.done();
    },
    testListFmtfaAFNumberFormatFiveFull: function(test) {
        var fmt = new ListFmt({
            locale: "fa-AF",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["یکی", "دو", "سه", "چهار", "پنج"]), "یکی،‏ دو،‏ سه،‏ چهار، و پنج");
        test.done();
    },
    testListFmtUnitStylefaAFNumberFormatOneShort: function(test) {
        var fmt = new ListFmt({
            locale: "fa-AF",
            style: "unit",
            length: "short"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["یکی"]), "یکی");
        test.done();
    },
    testListFmtUnitStylefaAFNumberFormatTwoShort: function(test) {
        var fmt = new ListFmt({
            locale: "fa-AF",
            style: "unit",
            length: "short"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["یکی", "دو"]), "یکی دو");
        test.done();
    },
    testListFmtUnitStylefaAFNumberFormatThreeShort: function(test) {
        var fmt = new ListFmt({
            locale: "fa-AF",
            style: "unit",
            length: "short"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["یکی", "دو", "سه"]), "یکی دو سه");
        test.done();
    },
    testListFmtUnitStylefaAFNumberFormatFourShort: function(test) {
        var fmt = new ListFmt({
            locale: "fa-AF",
            style: "unit",
            length: "short"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["یکی", "دو", "سه", "چهار"]), "یکی دو سه چهار");
        test.done();
    },
    testListFmtUnitStylefaAFNumberFormatFiveShort: function(test) {
        var fmt = new ListFmt({
            locale: "fa-AF",
            style: "unit",
            length: "short"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["یکی", "دو", "سه", "چهار", "پنج"]), "یکی دو سه چهار پنج");
        test.done();
    },
    testListFmtUnitStylefaAFNumberFormatOneMedium: function(test) {
        var fmt = new ListFmt({
            locale: "fa-AF",
            style: "unit",
            length: "medium"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["یکی"]), "یکی");
        test.done();
    },
    testListFmtUnitStylefaAFNumberFormatTwoMedium: function(test) {
        var fmt = new ListFmt({
            locale: "fa-AF",
            style: "unit",
            length: "medium"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["یکی", "دو"]), "یکی،‏ دو");
        test.done();
    },
    testListFmtUnitStylefaAFNumberFormatThreeMedium: function(test) {
        var fmt = new ListFmt({
            locale: "fa-AF",
            style: "unit",
            length: "medium"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["یکی", "دو", "سه"]), 'یکی،‏ دو، و سه');
        test.done();
    },
    testListFmtUnitStylefaAFNumberFormatFourMedium: function(test) {
        var fmt = new ListFmt({
            locale: "fa-AF",
            style: "unit",
            length: "medium"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["یکی", "دو", "سه", "چهار"]), 'یکی،‏ دو،‏ سه، و چهار');
        test.done();
    },
    testListFmtUnitStylefaAFNumberFormatFiveMedium: function(test) {
        var fmt = new ListFmt({
            locale: "fa-AF",
            style: "unit",
            length: "medium"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["یکی", "دو", "سه", "چهار", "پنج"]), 'یکی،‏ دو،‏ سه،‏ چهار، و پنج');
        test.done();
    },
    testListFmtUnitStylefaAFNumberFormatOneLong: function(test) {
        var fmt = new ListFmt({
            locale: "fa-AF",
            style: "unit",
            length: "long"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["یکی"]), "یکی");
        test.done();
    },
    testListFmtUnitStylefaAFNumberFormatTwoLong: function(test) {
        var fmt = new ListFmt({
            locale: "fa-AF",
            style: "unit",
            length: "long"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["یکی", "دو"]), "یکی و دو");
        test.done();
    },
    testListFmtUnitStylefaAFNumberFormatThreeLong: function(test) {
        var fmt = new ListFmt({
            locale: "fa-AF",
            style: "unit",
            length: "long"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["یکی", "دو", "سه"]), "یکی،‏ دو، و سه");
        test.done();
    },
    testListFmtUnitStylefaAFNumberFormatFourLong: function(test) {
        var fmt = new ListFmt({
            locale: "fa-AF",
            style: "unit",
            length: "long"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["یکی", "دو", "سه", "چهار"]), "یکی،‏ دو،‏ سه، و چهار");
        test.done();
    },
    testListFmtUnitStylefaAFNumberFormatFiveLong: function(test) {
        var fmt = new ListFmt({
            locale: "fa-AF",
            style: "unit",
            length: "long"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["یکی", "دو", "سه", "چهار", "پنج"]), "یکی،‏ دو،‏ سه،‏ چهار، و پنج");
        test.done();
    },
    testListFmtUnitStylefaAFNumberFormatOneFull: function(test) {
        var fmt = new ListFmt({
            locale: "fa-AF",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["یکی"]), "یکی");
        test.done();
    },
    testListFmtUnitStylefaAFNumberFormatTwoFull: function(test) {
        var fmt = new ListFmt({
            locale: "fa-AF",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["یکی", "دو"]), "یکی و دو");
        test.done();
    },
    testListFmtUnitStylefaAFNumberFormatThreeFull: function(test) {
        var fmt = new ListFmt({
            locale: "fa-AF",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["یکی", "دو", "سه"]), "یکی،‏ دو، و سه");
        test.done();
    },
    testListFmtUnitStylefaAFNumberFormatFourFull: function(test) {
        var fmt = new ListFmt({
            locale: "fa-AF",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["یکی", "دو", "سه", "چهار"]), "یکی،‏ دو،‏ سه، و چهار");
        test.done();
    },
    testListFmtUnitStylefaAFNumberFormatFiveFull: function(test) {
        var fmt = new ListFmt({
            locale: "fa-AF",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["یکی", "دو", "سه", "چهار", "پنج"]), "یکی،‏ دو،‏ سه،‏ چهار، و پنج");
        test.done();
    }
};