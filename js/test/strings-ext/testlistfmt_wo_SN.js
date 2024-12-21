/*
 * testlistfmt_wo_SN.js - test the list formatter object
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

module.exports.testlistfmt_wo_SN = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testListFmtNumberFormatOne_wo_SN: function(test) {
        var fmt = new ListFmt({
            locale: "wo-SN"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["benn"]), "benn");
        test.done();
    },
    testListFmtNumberFormatTwo_wo_SN: function(test) {
        var fmt = new ListFmt({
            locale: "wo-SN"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["benn", "ñaar"]), "benn & ñaar");
        test.done();
    },
    testListFmtNumberFormatThree_wo_SN: function(test) {
        var fmt = new ListFmt({
            locale: "wo-SN"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["benn", "ñaar", "ñett"]), "benn, ñaar, & ñett");
        test.done();
    },
    testListFmtNumberFormatFour_wo_SN: function(test) {
        var fmt = new ListFmt({
            locale: "wo-SN"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["benn", "ñaar", "ñett", "ñeent"]), "benn, ñaar, ñett, & ñeent");
        test.done();
    },
    testListFmtNumberFormatFive_wo_SN: function(test) {
        var fmt = new ListFmt({
            locale: "wo-SN"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["benn", "ñaar", "ñett", "ñeent", "juróom"]), "benn, ñaar, ñett, ñeent, & juróom");
        test.done();
    },
    testListFmtUnitStyleNumberFormatOneShort_wo_SN: function(test) {
        var fmt = new ListFmt({
            locale: "wo-SN",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["benn"]), "benn");
        test.done();
    },
    testListFmtUnitStyleNumberFormatTwoShort_wo_SN: function(test) {
        var fmt = new ListFmt({
            locale: "wo-SN",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["benn", "ñaar"]), "benn, ñaar");
        test.done();
    },
    testListFmtUnitStyleNumberFormatThreeShort_wo_SN: function(test) {
        var fmt = new ListFmt({
            locale: "wo-SN",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["benn", "ñaar", "ñett"]), "benn, ñaar, ñett");
        test.done();
    },
    testListFmtUnitStyleNumberFormatFourShort_wo_SN: function(test) {
        var fmt = new ListFmt({
            locale: "wo-SN",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["benn", "ñaar", "ñett", "ñeent"]), "benn, ñaar, ñett, ñeent");
        test.done();
    },
    testListFmtUnitStyleNumberFormatFiveShort_wo_SN: function(test) {
        var fmt = new ListFmt({
            locale: "wo-SN",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["benn", "ñaar", "ñett", "ñeent", "juróom"]), "benn, ñaar, ñett, ñeent, juróom");
        test.done();
    },
    testListFmtUnitStyleNumberFormatOneFull_wo_SN: function(test) {
        var fmt = new ListFmt({
            locale: "wo-SN",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["benn"]), "benn");
        test.done();
    },
    testListFmtUnitStyleNumberFormatTwoFull_wo_SN: function(test) {
        var fmt = new ListFmt({
            locale: "wo-SN",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["benn", "ñaar"]), "benn, ñaar");
        test.done();
    },
    testListFmtUnitStyleNumberFormatThreeFull_wo_SN: function(test) {
        var fmt = new ListFmt({
            locale: "wo-SN",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["benn", "ñaar", "ñett"]), "benn, ñaar, ñett");
        test.done();
    },
    testListFmtUnitStyleNumberFormatFourFull_wo_SN: function(test) {
        var fmt = new ListFmt({
            locale: "wo-SN",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["benn", "ñaar", "ñett", "ñeent"]), "benn, ñaar, ñett, ñeent");
        test.done();
    },
    testListFmtUnitStyleNumberFormatFiveFull_wo_SN: function(test) {
        var fmt = new ListFmt({
            locale: "wo-SN",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["benn", "ñaar", "ñett", "ñeent", "juróom"]), "benn, ñaar, ñett, ñeent, juróom");
        test.done();
    },
    testListFmtORStyleNumberFormatOne_wo_SN: function(test) {
        var fmt = new ListFmt({
            locale: "wo-SN",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["benn"]), "benn");
        test.done();
    },
    testListFmtORStyleNumberFormatTwo_wo_SN: function(test) {
        var fmt = new ListFmt({
            locale: "wo-SN",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["benn", "ñaar"]), "benn mba ñaar");
        test.done();
    },
    testListFmtORStyleNumberFormatThree_wo_SN: function(test) {
        var fmt = new ListFmt({
            locale: "wo-SN",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["benn", "ñaar", "ñett"]), "benn, ñaar, mba ñett");
        test.done();
    },
    testListFmtORStyleNumberFormatFour_wo_SN: function(test) {
        var fmt = new ListFmt({
            locale: "wo-SN",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["benn", "ñaar", "ñett", "ñeent"]), "benn, ñaar, ñett, mba ñeent");
        test.done();
    },
    testListFmtORStyleNumberFormatFiveFull_wo_SN: function(test) {
        var fmt = new ListFmt({
            locale: "wo-SN",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["benn", "ñaar", "ñett", "ñeent", "juróom"]), "benn, ñaar, ñett, ñeent, mba juróom");
        test.done();
    },
    testListFmtORStyleNumberFormatShortFiveFull_wo_SN: function(test) {
        var fmt = new ListFmt({
            locale: "wo-SN",
            style: "disjunction",
            length: "short"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["benn", "ñaar", "ñett", "ñeent", "juróom"]), "benn, ñaar, ñett, ñeent, mba juróom");
        test.done();
    }
};