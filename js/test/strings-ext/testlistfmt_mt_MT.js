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
    testListFmtNumberFormatOne_mt_MT: function(test) {
        var fmt = new ListFmt({
            locale: "mt-MT"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["waħda"]), "waħda");
        test.done();
    },
    testListFmtNumberFormatTwo_mt_MT: function(test) {
        var fmt = new ListFmt({
            locale: "mt-MT"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["waħda", "tnejn"]), "waħda u tnejn");
        test.done();
    },
    testListFmtNumberFormatThree_mt_MT: function(test) {
        var fmt = new ListFmt({
            locale: "mt-MT"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["waħda", "tnejn", "tlieta"]), "waħda, tnejn, u tlieta");
        test.done();
    },
    testListFmtNumberFormatFour_mt_MT: function(test) {
        var fmt = new ListFmt({
            locale: "mt-MT"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["waħda", "tnejn", "tlieta", "erbgħa"]), "waħda, tnejn, tlieta, u erbgħa");
        test.done();
    },
    testListFmtNumberFormatFive_mt_MT: function(test) {
        var fmt = new ListFmt({
            locale: "mt-MT"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["waħda", "tnejn", "tlieta", "erbgħa", "ħamsa"]), "waħda, tnejn, tlieta, erbgħa, u ħamsa");
        test.done();
    },
    testListFmtUnitStyleNumberFormatOneShort_mt_MT: function(test) {
        var fmt = new ListFmt({
            locale: "mt-MT",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["waħda"]), "waħda");
        test.done();
    },
    testListFmtUnitStyleNumberFormatTwoShort_mt_MT: function(test) {
        var fmt = new ListFmt({
            locale: "mt-MT",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["waħda", "tnejn"]), "waħda u tnejn");
        test.done();
    },
    testListFmtUnitStyleNumberFormatThreeShort_mt_MT: function(test) {
        var fmt = new ListFmt({
            locale: "mt-MT",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["waħda", "tnejn", "tlieta"]), "waħda, tnejn, u tlieta");
        test.done();
    },
    testListFmtUnitStyleNumberFormatFourShort_mt_MT: function(test) {
        var fmt = new ListFmt({
            locale: "mt-MT",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["waħda", "tnejn", "tlieta", "erbgħa"]), "waħda, tnejn, tlieta, u erbgħa");
        test.done();
    },
    testListFmtUnitStyleNumberFormatFiveShort_mt_MT: function(test) {
        var fmt = new ListFmt({
            locale: "mt-MT",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["waħda", "tnejn", "tlieta", "erbgħa", "ħamsa"]), "waħda, tnejn, tlieta, erbgħa, u ħamsa");
        test.done();
    },
    testListFmtUnitStyleNumberFormatOneFull_mt_MT: function(test) {
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
    testListFmtUnitStyleNumberFormatTwoFull_mt_MT: function(test) {
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
    testListFmtUnitStyleNumberFormatThreeFull_mt_MT: function(test) {
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
    testListFmtUnitStyleNumberFormatFourFull_mt_MT: function(test) {
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
    testListFmtUnitStyleNumberFormatFiveFull_mt_MT: function(test) {
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
    testListFmtORStyleNumberFormatOne_mt_MT: function(test) {
        var fmt = new ListFmt({
            locale: "mt-MT",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["waħda"]), "waħda");
        test.done();
    },
    testListFmtORStyleNumberFormatTwo_mt_MT: function(test) {
        var fmt = new ListFmt({
            locale: "mt-MT",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["waħda", "tnejn"]), "waħda jew tnejn");
        test.done();
    },
    testListFmtORStyleNumberFormatThree_mt_MT: function(test) {
        var fmt = new ListFmt({
            locale: "mt-MT",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["waħda", "tnejn", "tlieta"]), "waħda, tnejn, jew tlieta");
        test.done();
    },
    testListFmtORStyleNumberFormatFour_mt_MT: function(test) {
        var fmt = new ListFmt({
            locale: "mt-MT",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["waħda", "tnejn", "tlieta", "erbgħa"]), "waħda, tnejn, tlieta, jew erbgħa");
        test.done();
    },
    testListFmtORStyleNumberFormatFiveFull_mt_MT: function(test) {
        var fmt = new ListFmt({
            locale: "mt-MT",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["waħda", "tnejn", "tlieta", "erbgħa", "ħamsa"]), "waħda, tnejn, tlieta, erbgħa, jew ħamsa");
        test.done();
    }
};