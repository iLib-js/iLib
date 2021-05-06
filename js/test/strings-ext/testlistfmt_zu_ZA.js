/*
 * testlistfmt_zu_ZA.js - test the list formatter object
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

module.exports.testlistfmt_zu_ZA = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testListFmtNumberFormatOne_zu_ZA: function(test) {
        var fmt = new ListFmt({
            locale: "zu-ZA"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["eyodwa"]), "eyodwa");
        test.done();
    },
    testListFmtNumberFormatTwo_zu_ZA: function(test) {
        var fmt = new ListFmt({
            locale: "zu-ZA"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["eyodwa", "ezimbili"]), "eyodwa ne-ezimbili");
        test.done();
    },
    testListFmtNumberFormatThree_zu_ZA: function(test) {
        var fmt = new ListFmt({
            locale: "zu-ZA"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["eyodwa", "ezimbili", "ezintathu"]), "eyodwa, ezimbili, ne-ezintathu");
        test.done();
    },
    testListFmtNumberFormatFour_zu_ZA: function(test) {
        var fmt = new ListFmt({
            locale: "zu-ZA"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["eyodwa", "ezimbili", "ezintathu", "ezine"]), "eyodwa, ezimbili, ezintathu, ne-ezine");
        test.done();
    },
    testListFmtNumberFormatFive_zu_ZA: function(test) {
        var fmt = new ListFmt({
            locale: "zu-ZA"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["eyodwa", "ezimbili", "ezintathu", "ezine", "ezinhlanu"]), "eyodwa, ezimbili, ezintathu, ezine, ne-ezinhlanu");
        test.done();
    },
    testListFmtUnitStyleNumberFormatOneShort_zu_ZA: function(test) {
        var fmt = new ListFmt({
            locale: "zu-ZA",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["eyodwa"]), "eyodwa");
        test.done();
    },
    testListFmtUnitStyleNumberFormatTwoShort_zu_ZA: function(test) {
        var fmt = new ListFmt({
            locale: "zu-ZA",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["eyodwa", "ezimbili"]), "eyodwa, ezimbili");
        test.done();
    },
    testListFmtUnitStyleNumberFormatThreeShort_zu_ZA: function(test) {
        var fmt = new ListFmt({
            locale: "zu-ZA",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["eyodwa", "ezimbili", "ezintathu"]), "eyodwa, ezimbili, ezintathu");
        test.done();
    },
    testListFmtUnitStyleNumberFormatFourShort_zu_ZA: function(test) {
        var fmt = new ListFmt({
            locale: "zu-ZA",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["eyodwa", "ezimbili", "ezintathu", "ezine"]), "eyodwa, ezimbili, ezintathu, ezine");
        test.done();
    },
    testListFmtUnitStyleNumberFormatFiveShort_zu_ZA: function(test) {
        var fmt = new ListFmt({
            locale: "zu-ZA",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["eyodwa", "ezimbili", "ezintathu", "ezine", "ezine"]), "eyodwa, ezimbili, ezintathu, ezine, ezine");
        test.done();
    },
    testListFmtUnitStyleNumberFormatOneFull_zu_ZA: function(test) {
        var fmt = new ListFmt({
            locale: "zu-ZA",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["eyodwa"]), "eyodwa");
        test.done();
    },
    testListFmtUnitStyleNumberFormatTwoFull_zu_ZA: function(test) {
        var fmt = new ListFmt({
            locale: "zu-ZA",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["eyodwa", "ezimbili"]), "eyodwa, ezimbili");
        test.done();
    },
    testListFmtUnitStyleNumberFormatThreeFull_zu_ZA: function(test) {
        var fmt = new ListFmt({
            locale: "zu-ZA",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["eyodwa", "ezimbili", "ezintathu"]), "eyodwa, ezimbili, ezintathu");
        test.done();
    },
    testListFmtUnitStyleNumberFormatFourFull_zu_ZA: function(test) {
        var fmt = new ListFmt({
            locale: "zu-ZA",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["eyodwa", "ezimbili", "ezintathu", "ezine"]), "eyodwa, ezimbili, ezintathu, ezine");
        test.done();
    },
    testListFmtUnitStyleNumberFormatFiveFull_zu_ZA: function(test) {
        var fmt = new ListFmt({
            locale: "zu-ZA",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["eyodwa", "ezimbili", "ezintathu", "ezine", "ezine"]), "eyodwa, ezimbili, ezintathu, ezine, ezine");
        test.done();
    },
    testListFmtORStyleNumberFormatOne_zu_ZA: function(test) {
        var fmt = new ListFmt({
            locale: "zu-ZA",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["eyodwa"]), "eyodwa");
        test.done();
    },
    testListFmtORStyleNumberFormatTwo_zu_ZA: function(test) {
        var fmt = new ListFmt({
            locale: "zu-ZA",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["eyodwa", "ezimbili"]), "eyodwa noma ezimbili");
        test.done();
    },
    testListFmtORStyleNumberFormatThree_zu_ZA: function(test) {
        var fmt = new ListFmt({
            locale: "zu-ZA",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["eyodwa", "ezimbili", "ezintathu"]), "eyodwa, ezimbili, noma ezintathu");
        test.done();
    },
    testListFmtORStyleNumberFormatFour_zu_ZA: function(test) {
        var fmt = new ListFmt({
            locale: "zu-ZA",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["eyodwa", "ezimbili", "ezintathu", "ezine"]), "eyodwa, ezimbili, ezintathu, noma ezine");
        test.done();
    },
    testListFmtORStyleNumberFormatFiveFull_zu_ZA: function(test) {
        var fmt = new ListFmt({
            locale: "zu-ZA",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["eyodwa", "ezimbili", "ezintathu", "ezine", "ezine"]), "eyodwa, ezimbili, ezintathu, ezine, noma ezine");
        test.done();
    },
    testListFmtORStyleNumberFormatShortFiveFull_zu_ZA: function(test) {
        var fmt = new ListFmt({
            locale: "zu-ZA",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["eyodwa", "ezimbili", "ezintathu", "ezine", "ezine"]), "eyodwa, ezimbili, ezintathu, ezine, noma ezine");
        test.done();
    }
};