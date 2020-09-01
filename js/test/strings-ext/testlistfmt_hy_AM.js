/*
 * testlistfmt_hy_AM.js - test the list formatter object
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

module.exports.testlistfmt_hy_AM = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testListFmtkaGENumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "hy-AM"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["մեկ"]), "մեկ");
        test.done();
    },
    testListFmtkaGENumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "hy-AM"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["մեկ", "երկու"]), "մեկ և երկու");
        test.done();
    },
    testListFmtkaGENumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "hy-AM"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["մեկ", "երկու", "երեքը"]), "մեկ, երկու և երեքը");
        test.done();
    },
    testListFmtkaGENumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "hy-AM"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["մեկ", "երկու", "երեքը", "չորսը"]), "մեկ, երկու, երեքը և չորսը");
        test.done();
    },
    testListFmtkaGENumberFormatFive: function(test) {
        var fmt = new ListFmt({
            locale: "hy-AM"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["մեկ", "երկու", "երեքը", "չորսը", "հինգը"]), "մեկ, երկու, երեքը, չորսը և հինգը");
        test.done();
    },
    testListFmtUnitStylekaGENumberFormatOneShort: function(test) {
        var fmt = new ListFmt({
            locale: "hy-AM",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["մեկ"]), "մեկ");
        test.done();
    },
    testListFmtUnitStylekaGENumberFormatTwoShort: function(test) {
        var fmt = new ListFmt({
            locale: "hy-AM",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["մեկ", "երկու"]), "մեկ և երկու");
        test.done();
    },
    testListFmtUnitStylekaGENumberFormatThreeShort: function(test) {
        var fmt = new ListFmt({
            locale: "hy-AM",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["մեկ", "երկու", "երեքը"]), "մեկ երկու և երեքը");
        test.done();
    },
    testListFmtUnitStylekaGENumberFormatFourShort: function(test) {
        var fmt = new ListFmt({
            locale: "hy-AM",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["մեկ", "երկու", "երեքը", "չորսը"]), "մեկ երկու երեքը և չորսը");
        test.done();
    },
    testListFmtUnitStylekaGENumberFormatFiveShort: function(test) {
        var fmt = new ListFmt({
            locale: "hy-AM",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["մեկ", "երկու", "երեքը", "չորսը", "հինգը"]), "մեկ երկու երեքը չորսը և հինգը");
        test.done();
    },
    testListFmtUnitStylekaGENumberFormatOneFull: function(test) {
        var fmt = new ListFmt({
            locale: "hy-AM",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["մեկ"]), "մեկ");
        test.done();
    },
    testListFmtUnitStylekaGENumberFormatTwoFull: function(test) {
        var fmt = new ListFmt({
            locale: "hy-AM",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["մեկ", "երկու"]), "մեկ և երկու");
        test.done();
    },
    testListFmtUnitStylekaGENumberFormatThreeFull: function(test) {
        var fmt = new ListFmt({
            locale: "hy-AM",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["մեկ", "երկու", "երեքը"]), "մեկ, երկու և երեքը");
        test.done();
    },
    testListFmtUnitStylekaGENumberFormatFourFull: function(test) {
        var fmt = new ListFmt({
            locale: "hy-AM",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["մեկ", "երկու", "երեքը", "չորսը"]), "մեկ, երկու, երեքը և չորսը");
        test.done();
    },
    testListFmtUnitStylekaGENumberFormatFiveFull: function(test) {
        var fmt = new ListFmt({
            locale: "hy-AM",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["մեկ", "երկու", "երեքը", "չորսը", "հինգը"]), "մեկ, երկու, երեքը, չորսը և հինգը");
        test.done();
    },
    testListFmtORStylekaGENumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "hy-AM",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["մեկ"]), "մեկ");
        test.done();
    },
    testListFmtORStylekaGENumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "hy-AM",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["մեկ", "երկու"]), "մեկ կամ երկու");
        test.done();
    },
    testListFmtORStylekaGENumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "hy-AM",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["մեկ", "երկու", "երեքը"]), "մեկ, երկու կամ երեքը");
        test.done();
    },
    testListFmtORStylekaGENumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "hy-AM",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["մեկ", "երկու", "երեքը", "չորսը"]), "մեկ, երկու, երեքը կամ չորսը");
        test.done();
    },
    testListFmtORStylekaGENumberFormatFiveFull: function(test) {
        var fmt = new ListFmt({
            locale: "hy-AM",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["մեկ", "երկու", "երեքը", "չորսը", "հինգը"]), "մեկ, երկու, երեքը, չորսը կամ հինգը");
        test.done();
    }
};