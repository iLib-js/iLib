/*
 * testlistfmt_ig_NG.js - test the list formatter object Igbo - Nigeria
 *
 * Copyright © 2022, 2024 JEDLSoft
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

module.exports.testlistfmt_ig_NG = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testListFmtNumberFormatOne_ig_NG: function(test) {
        var fmt = new ListFmt({
            locale: "ig-NG"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["otu"]), "otu");
        test.done();
    },
    testListFmtNumberFormatTwo_ig_NG: function(test) {
        var fmt = new ListFmt({
            locale: "ig-NG"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["otu", "abuo"]), "otu na abuo");
        test.done();
    },
    testListFmtNumberFormatThree_ig_NG: function(test) {
        var fmt = new ListFmt({
            locale: "ig-NG"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["otu", "abuo", "atọ"]), "otu, abuo, na atọ");
        test.done();
    },
    testListFmtNumberFormatFour_ig_NG: function(test) {
        var fmt = new ListFmt({
            locale: "ig-NG"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["otu", "abuo", "atọ", "anọ"]), "otu, abuo, atọ, na anọ");
        test.done();
    },
    testListFmtNumberFormatFive_ig_NG: function(test) {
        var fmt = new ListFmt({
            locale: "ig-NG"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["otu", "abuo", "atọ", "anọ", "ise"]), "otu, abuo, atọ, anọ, na ise");
        test.done();
    },
    testListFmtUnitStyleNumberFormatOneShort_ig_NG: function(test) {
        var fmt = new ListFmt({
            locale: "ig-NG",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["otu"]), "otu");
        test.done();
    },
    testListFmtUnitStyleNumberFormatTwoShort_ig_NG: function(test) {
        var fmt = new ListFmt({
            locale: "ig-NG",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["otu", "abuo"]), "otu, abuo");
        test.done();
    },
    testListFmtUnitStyleNumberFormatThreeShort_ig_NG: function(test) {
        var fmt = new ListFmt({
            locale: "ig-NG",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["otu", "abuo", "atọ"]), "otu, abuo, atọ");
        test.done();
    },
    testListFmtUnitStyleNumberFormatFourShort_ig_NG: function(test) {
        var fmt = new ListFmt({
            locale: "ig-NG",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["otu", "abuo", "atọ", "anọ"]), 'otu, abuo, atọ, anọ');
        test.done();
    },
    testListFmtUnitStyleNumberFormatFiveShort_ig_NG: function(test) {
        var fmt = new ListFmt({
            locale: "ig-NG",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["otu", "abuo", "atọ", "anọ", "anọ"]), "otu, abuo, atọ, anọ, anọ");
        test.done();
    },
    testListFmtUnitStyleNumberFormatOneFull_ig_NG: function(test) {
        var fmt = new ListFmt({
            locale: "ig-NG",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["otu"]), "otu");
        test.done();
    },
    testListFmtUnitStyleNumberFormatTwoFull_ig_NG: function(test) {
        var fmt = new ListFmt({
            locale: "ig-NG",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["otu", "abuo"]), "otu, abuo");
        test.done();
    },
    testListFmtUnitStyleNumberFormatThreeFull_ig_NG: function(test) {
        var fmt = new ListFmt({
            locale: "ig-NG",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["otu", "abuo", "atọ"]), "otu, abuo, atọ");
        test.done();
    },
    testListFmtUnitStyleNumberFormatFourFull_ig_NG: function(test) {
        var fmt = new ListFmt({
            locale: "ig-NG",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["otu", "abuo", "atọ", "anọ"]), "otu, abuo, atọ, anọ");
        test.done();
    },
    testListFmtUnitStyleNumberFormatFiveFull_ig_NG: function(test) {
        var fmt = new ListFmt({
            locale: "ig-NG",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["otu", "abuo", "atọ", "anọ", "anọ"]), "otu, abuo, atọ, anọ, anọ");
        test.done();
    },
    testListFmtORStyleNumberFormatOne_ig_NG: function(test) {
        var fmt = new ListFmt({
            locale: "ig-NG",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["otu"]), "otu");
        test.done();
    },
    testListFmtORStyleNumberFormatTwo_ig_NG: function(test) {
        var fmt = new ListFmt({
            locale: "ig-NG",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["otu", "abuo"]), "otu ma ọ bụ abuo");
        test.done();
    },
    testListFmtORStyleNumberFormatThree_ig_NG: function(test) {
        var fmt = new ListFmt({
            locale: "ig-NG",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["otu", "abuo", "atọ"]), "otu, abuo, ma ọ bụ atọ");
        test.done();
    },
    testListFmtORStyleNumberFormatFour_ig_NG: function(test) {
        var fmt = new ListFmt({
            locale: "ig-NG",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["otu", "abuo", "atọ", "anọ"]), "otu, abuo, atọ, ma ọ bụ anọ");
        test.done();
    },
    testListFmtORStyleNumberFormatFiveFull_ig_NG: function(test) {
        var fmt = new ListFmt({
            locale: "ig-NG",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["otu", "abuo", "atọ", "anọ", "anọ"]), "otu, abuo, atọ, anọ, ma ọ bụ anọ");
        test.done();
    },
    testListFmtORStyleNumberFormatShortFiveFull_ig_NG: function(test) {
        var fmt = new ListFmt({
            locale: "ig-NG",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["otu", "abuo", "atọ", "anọ", "anọ"]), "otu, abuo, atọ, anọ, ma ọ bụ anọ");
        test.done();
    }
};