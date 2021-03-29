/*
 * testlistfmt_mt_MT.js - test the list formatter object
 *
 * Copyright © 2021, JEDLSoft
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

module.exports.testlistfmt_mt_MT = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testListFmteuESNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "mt-MT"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["waħda"]), "waħda");
        test.done();
    },
    testListFmteuESNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "mt-MT"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["waħda", "tnejn"]), "waħda u tnejn");
        test.done();
    },
    testListFmteuESNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "mt-MT"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["waħda", "tnejn", "tlieta"]), "waħda, tnejn, u tlieta");
        test.done();
    },
    testListFmteuESNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "mt-MT"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["waħda", "tnejn", "tlieta", "erbgħa"]), "waħda, tnejn, tlieta, u erbgħa");
        test.done();
    },
    testListFmteuESNumberFormatFive: function(test) {
        var fmt = new ListFmt({
            locale: "mt-MT"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["waħda", "tnejn", "tlieta", "erbgħa", "ħamsa"]), "waħda, tnejn, tlieta, erbgħa, u ħamsa");
        test.done();
    },
    testListFmtUnitStyleeuESNumberFormatOneShort: function(test) {
        var fmt = new ListFmt({
            locale: "mt-MT",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["waħda"]), "waħda");
        test.done();
    },
    testListFmtUnitStyleeuESNumberFormatTwoShort: function(test) {
        var fmt = new ListFmt({
            locale: "mt-MT",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["waħda", "tnejn"]), "waħda u tnejn");
        test.done();
    },
    testListFmtUnitStyleeuESNumberFormatThreeShort: function(test) {
        var fmt = new ListFmt({
            locale: "mt-MT",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["waħda", "tnejn", "tlieta"]), "waħda, tnejn, u tlieta");
        test.done();
    },
    testListFmtUnitStyleeuESNumberFormatFourShort: function(test) {
        var fmt = new ListFmt({
            locale: "mt-MT",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["waħda", "tnejn", "tlieta", "erbgħa"]), "waħda, tnejn, tlieta, u erbgħa");
        test.done();
    },
    testListFmtUnitStyleeuESNumberFormatFiveShort: function(test) {
        var fmt = new ListFmt({
            locale: "mt-MT",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["waħda", "tnejn", "tlieta", "erbgħa", "ħamsa"]), "waħda, tnejn, tlieta, erbgħa, u ħamsa");
        test.done();
    },
    testListFmtUnitStyleeuESNumberFormatOneFull: function(test) {
        var fmt = new ListFmt({
            locale: "mt-MT",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["waħda"]), "waħda");
        test.done();
    },
    testListFmtUnitStyleeuESNumberFormatTwoFull: function(test) {
        var fmt = new ListFmt({
            locale: "mt-MT",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["waħda", "tnejn"]), "waħda u tnejn");
        test.done();
    },
    testListFmtUnitStyleeuESNumberFormatThreeFull: function(test) {
        var fmt = new ListFmt({
            locale: "mt-MT",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["waħda", "tnejn", "tlieta"]), "waħda, tnejn, u tlieta");
        test.done();
    },
    testListFmtUnitStyleeuESNumberFormatFourFull: function(test) {
        var fmt = new ListFmt({
            locale: "mt-MT",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["waħda", "tnejn", "tlieta", "erbgħa"]), "waħda, tnejn, tlieta, u erbgħa");
        test.done();
    },
    testListFmtUnitStyleeuESNumberFormatFiveFull: function(test) {
        var fmt = new ListFmt({
            locale: "mt-MT",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["waħda", "tnejn", "tlieta", "erbgħa", "ħamsa"]), "waħda, tnejn, tlieta, erbgħa, u ħamsa");
        test.done();
    },
    testListFmtORStyleeuESNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "mt-MT",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["waħda"]), "waħda");
        test.done();
    },
    testListFmtORStyleeuESNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "mt-MT",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["waħda", "tnejn"]), "waħda or tnejn");
        test.done();
    },
    testListFmtORStyleeuESNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "mt-MT",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["waħda", "tnejn", "tlieta"]), "waħda, tnejn, or tlieta");
        test.done();
    },
    testListFmtORStyleeuESNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "mt-MT",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["waħda", "tnejn", "tlieta", "erbgħa"]), "waħda, tnejn, tlieta, or erbgħa");
        test.done();
    },
    testListFmtORStyleeuESNumberFormatFiveFull: function(test) {
        var fmt = new ListFmt({
            locale: "mt-MT",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["waħda", "tnejn", "tlieta", "erbgħa", "ħamsa"]), "waħda, tnejn, tlieta, erbgħa, or ħamsa");
        test.done();
    }
};