/*
 * testlistfmt_ky_KG.js - test the list formatter object
 *
 * Copyright © 2020, JEDLSoft
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

module.exports.testlistfmt_ky_KG = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testListFmtkaGENumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "ky-KG"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["бир"]), "бир");
        test.done();
    },
    testListFmtkaGENumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "ky-KG"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["бир", "эки"]), "бир жана эки");
        test.done();
    },
    testListFmtkaGENumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "ky-KG"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["бир", "эки", "үч"]), "бир, эки жана үч");
        test.done();
    },
    testListFmtkaGENumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "ky-KG"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["бир", "эки", "үч", "төрт"]), "бир, эки, үч жана төрт");
        test.done();
    },
    testListFmtkaGENumberFormatFive: function(test) {
        var fmt = new ListFmt({
            locale: "ky-KG"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["бир", "эки", "үч", "төрт", "беш"]), "бир, эки, үч, төрт жана беш");
        test.done();
    },
    testListFmtUnitStylekaGENumberFormatOneShort: function(test) {
        var fmt = new ListFmt({
            locale: "ky-KG",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["бир"]), "бир");
        test.done();
    },
    testListFmtUnitStylekaGENumberFormatTwoShort: function(test) {
        var fmt = new ListFmt({
            locale: "ky-KG",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["бир", "эки"]), "бир, эки");
        test.done();
    },
    testListFmtUnitStylekaGENumberFormatThreeShort: function(test) {
        var fmt = new ListFmt({
            locale: "ky-KG",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["бир", "эки", "үч"]), "бир, эки, үч");
        test.done();
    },
    testListFmtUnitStylekaGENumberFormatFourShort: function(test) {
        var fmt = new ListFmt({
            locale: "ky-KG",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["бир", "эки", "үч", "төрт"]), "бир, эки, үч, төрт");
        test.done();
    },
    testListFmtUnitStylekaGENumberFormatFiveShort: function(test) {
        var fmt = new ListFmt({
            locale: "ky-KG",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["бир", "эки", "үч", "төрт", "беш"]), "бир, эки, үч, төрт, беш");
        test.done();
    },
    testListFmtUnitStylekaGENumberFormatOneFull: function(test) {
        var fmt = new ListFmt({
            locale: "ky-KG",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["бир"]), "бир");
        test.done();
    },
    testListFmtUnitStylekaGENumberFormatTwoFull: function(test) {
        var fmt = new ListFmt({
            locale: "ky-KG",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["бир", "эки"]), "бир, эки");
        test.done();
    },
    testListFmtUnitStylekaGENumberFormatThreeFull: function(test) {
        var fmt = new ListFmt({
            locale: "ky-KG",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["бир", "эки", "үч"]), "бир, эки, үч");
        test.done();
    },
    testListFmtUnitStylekaGENumberFormatFourFull: function(test) {
        var fmt = new ListFmt({
            locale: "ky-KG",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["бир", "эки", "үч", "төрт"]), "бир, эки, үч, төрт");
        test.done();
    },
    testListFmtUnitStylekaGENumberFormatFiveFull: function(test) {
        var fmt = new ListFmt({
            locale: "ky-KG",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["бир", "эки", "үч", "төрт", "беш"]), "бир, эки, үч, төрт, беш");
        test.done();
    },
    testListFmtORStylekaGENumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "ky-KG",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["бир"]), "бир");
        test.done();
    },
    testListFmtORStylekaGENumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "ky-KG",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["бир", "эки"]), "бир же эки");
        test.done();
    },
    testListFmtORStylekaGENumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "ky-KG",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["бир", "эки", "үч"]), "бир, эки, же үч");
        test.done();
    },
    testListFmtORStylekaGENumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "ky-KG",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["бир", "эки", "үч", "төрт"]), "бир, эки, үч, же төрт");
        test.done();
    },
    testListFmtORStylekaGENumberFormatFiveFull: function(test) {
        var fmt = new ListFmt({
            locale: "ky-KG",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["бир", "эки", "үч", "төрт", "беш"]), "бир, эки, үч, төрт, же беш");
        test.done();
    }
};