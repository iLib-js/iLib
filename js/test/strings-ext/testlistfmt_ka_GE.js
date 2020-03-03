/*
 * testlistfmt_ka_GE.js - test the list formatter object
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

module.exports.testlistfmt_ka_GE = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testListFmtkaGENumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "ka-GE"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ერთი"]), "ერთი");
        test.done();
    },
    testListFmtkaGENumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "ka-GE"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ერთი", "ორი"]), "ერთი და ორი");
        test.done();
    },
    testListFmtkaGENumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "ka-GE"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ერთი", "ორი", "სამი"]), "ერთი, ორი და სამი");
        test.done();
    },
    testListFmtkaGENumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "ka-GE"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ერთი", "ორი", "სამი", "ოთხი"]), "ერთი, ორი, სამი და ოთხი");
        test.done();
    },
    testListFmtkaGENumberFormatFive: function(test) {
        var fmt = new ListFmt({
            locale: "ka-GE"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ერთი", "ორი", "სამი", "ოთხი", "ხუთი"]), "ერთი, ორი, სამი, ოთხი და ხუთი");
        test.done();
    },
    testListFmtUnitStylekaGENumberFormatOneShort: function(test) {
        var fmt = new ListFmt({
            locale: "ka-GE",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ერთი"]), "ერთი");
        test.done();
    },
    testListFmtUnitStylekaGENumberFormatTwoShort: function(test) {
        var fmt = new ListFmt({
            locale: "ka-GE",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ერთი", "ორი"]), "ერთი, ორი");
        test.done();
    },
    testListFmtUnitStylekaGENumberFormatThreeShort: function(test) {
        var fmt = new ListFmt({
            locale: "ka-GE",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ერთი", "ორი", "სამი"]), "ერთი, ორი, სამი");
        test.done();
    },
    testListFmtUnitStylekaGENumberFormatFourShort: function(test) {
        var fmt = new ListFmt({
            locale: "ka-GE",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ერთი", "ორი", "სამი", "ოთხი"]), "ერთი, ორი, სამი, ოთხი");
        test.done();
    },
    testListFmtUnitStylekaGENumberFormatFiveShort: function(test) {
        var fmt = new ListFmt({
            locale: "ka-GE",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ერთი", "ორი", "სამი", "ოთხი", "ხუთი"]), "ერთი, ორი, სამი, ოთხი, ხუთი");
        test.done();
    },
    testListFmtUnitStylekaGENumberFormatOneFull: function(test) {
        var fmt = new ListFmt({
            locale: "ka-GE",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ერთი"]), "ერთი");
        test.done();
    },
    testListFmtUnitStylekaGENumberFormatTwoFull: function(test) {
        var fmt = new ListFmt({
            locale: "ka-GE",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ერთი", "ორი"]), "ერთი, ორი");
        test.done();
    },
    testListFmtUnitStylekaGENumberFormatThreeFull: function(test) {
        var fmt = new ListFmt({
            locale: "ka-GE",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ერთი", "ორი", "სამი"]), "ერთი, ორი, სამი");
        test.done();
    },
    testListFmtUnitStylekaGENumberFormatFourFull: function(test) {
        var fmt = new ListFmt({
            locale: "ka-GE",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ერთი", "ორი", "სამი", "ოთხი"]), "ერთი, ორი, სამი, ოთხი");
        test.done();
    },
    testListFmtUnitStylekaGENumberFormatFiveFull: function(test) {
        var fmt = new ListFmt({
            locale: "ka-GE",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ერთი", "ორი", "სამი", "ოთხი", "ხუთი"]), "ერთი, ორი, სამი, ოთხი, ხუთი");
        test.done();
    },
    testListFmtORStylekaGENumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "ka-GE",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ერთი"]), "ერთი");
        test.done();
    },
    testListFmtORStylekaGENumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "ka-GE",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ერთი", "ორი"]), "ერთი ან ორი");
        test.done();
    },
    testListFmtORStylekaGENumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "ka-GE",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ერთი", "ორი", "სამი"]), "ერთი, ორი ან სამი");
        test.done();
    },
    testListFmtORStylekaGENumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "ka-GE",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ერთი", "ორი", "სამი", "ოთხი"]), "ერთი, ორი, სამი ან ოთხი");
        test.done();
    },
    testListFmtORStylekaGENumberFormatFiveFull: function(test) {
        var fmt = new ListFmt({
            locale: "ka-GE",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ერთი", "ორი", "სამი", "ოთხი", "ხუთი"]), "ერთი, ორი, სამი, ოთხი ან ხუთი");
        test.done();
    }
};