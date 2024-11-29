/*
 * testlistfmt_tg_TJ.js - test the list formatter object
 *
 * Copyright © 2021, 2024 JEDLSoft
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

module.exports.testlistfmt_tg_TJ = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testListFmtNumberFormatOne_tg_TJ: function(test) {
        var fmt = new ListFmt({
            locale: "tg-TJ"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["як"]), "як");
        test.done();
    },
    testListFmtNumberFormatTwo_tg_TJ: function(test) {
        var fmt = new ListFmt({
            locale: "tg-TJ"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["як", "ду"]), "як ва ду");
        test.done();
    },
    testListFmtNumberFormatThree_tg_TJ: function(test) {
        var fmt = new ListFmt({
            locale: "tg-TJ"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["як", "ду", "се"]), "як, ду, се");
        test.done();
    },
    testListFmtNumberFormatFour_tg_TJ: function(test) {
        var fmt = new ListFmt({
            locale: "tg-TJ"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["як", "ду", "се", "чор"]), "як, ду, се, чор");
        test.done();
    },
    testListFmtNumberFormatFive_tg_TJ: function(test) {
        var fmt = new ListFmt({
            locale: "tg-TJ"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["як", "ду", "се", "чор", "панҷ"]), "як, ду, се, чор, панҷ");
        test.done();
    },
    testListFmtUnitStyleNumberFormatOneShort_tg_TJ: function(test) {
        var fmt = new ListFmt({
            locale: "tg-TJ",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["як"]), "як");
        test.done();
    },
    testListFmtUnitStyleNumberFormatTwoShort_tg_TJ: function(test) {
        var fmt = new ListFmt({
            locale: "tg-TJ",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["як", "ду"]), "як ва ду");
        test.done();
    },
    testListFmtUnitStyleNumberFormatThreeShort_tg_TJ: function(test) {
        var fmt = new ListFmt({
            locale: "tg-TJ",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["як", "ду", "се"]), "як, ду, се");
        test.done();
    },
    testListFmtUnitStyleNumberFormatFourShort_tg_TJ: function(test) {
        var fmt = new ListFmt({
            locale: "tg-TJ",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["як", "ду", "се", "чор"]), "як, ду, се, чор");
        test.done();
    },
    testListFmtUnitStyleNumberFormatFiveShort_tg_TJ: function(test) {
        var fmt = new ListFmt({
            locale: "tg-TJ",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["як", "ду", "се", "чор", "панҷ"]), "як, ду, се, чор, панҷ");
        test.done();
    },
    testListFmtUnitStyleNumberFormatOneFull_tg_TJ: function(test) {
        var fmt = new ListFmt({
            locale: "tg-TJ",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["як"]), "як");
        test.done();
    },
    testListFmtUnitStyleNumberFormatTwoFull_tg_TJ: function(test) {
        var fmt = new ListFmt({
            locale: "tg-TJ",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["як", "ду"]), "як ва ду");
        test.done();
    },
    testListFmtUnitStyleNumberFormatThreeFull_tg_TJ: function(test) {
        var fmt = new ListFmt({
            locale: "tg-TJ",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["як", "ду", "се"]), "як, ду, се");
        test.done();
    },
    testListFmtUnitStyleNumberFormatFourFull_tg_TJ: function(test) {
        var fmt = new ListFmt({
            locale: "tg-TJ",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["як", "ду", "се", "чор"]), "як, ду, се, чор");
        test.done();
    },
    testListFmtUnitStyleNumberFormatFiveFull_tg_TJ: function(test) {
        var fmt = new ListFmt({
            locale: "tg-TJ",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["як", "ду", "се", "чор", "панҷ"]), "як, ду, се, чор, панҷ");
        test.done();
    },
    testListFmtORStyleNumberFormatOne_tg_TJ: function(test) {
        var fmt = new ListFmt({
            locale: "tg-TJ",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["як"]), "як");
        test.done();
    },
    testListFmtORStyleNumberFormatTwo_tg_TJ: function(test) {
        var fmt = new ListFmt({
            locale: "tg-TJ",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["як", "ду"]), "як ё ду");
        test.done();
    },
    testListFmtORStyleNumberFormatThree_tg_TJ: function(test) {
        var fmt = new ListFmt({
            locale: "tg-TJ",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["як", "ду", "се"]), "як, ду, ё се");
        test.done();
    },
    testListFmtORStyleNumberFormatFour_tg_TJ: function(test) {
        var fmt = new ListFmt({
            locale: "tg-TJ",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["як", "ду", "се", "чор"]), "як, ду, се, ё чор");
        test.done();
    },
    testListFmtORStyleNumberFormatFiveFull_tg_TJ: function(test) {
        var fmt = new ListFmt({
            locale: "tg-TJ",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["як", "ду", "се", "чор", "панҷ"]), "як, ду, се, чор, ё панҷ");
        test.done();
    },
    testListFmtORStyleNumberFormatShortFiveFull_tg_TJ: function(test) {
        var fmt = new ListFmt({
            locale: "tg-TJ",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["як", "ду", "се", "чор", "панҷ"]), "як, ду, се, чор, ё панҷ");
        test.done();
    }
};