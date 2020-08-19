/*
 * testlistfmt_be_BY.js - test the list formatter object
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

module.exports.testlistfmt_be_BY = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testListFmtkaGENumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "be-BY"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["адзін"]), "адзін");
        test.done();
    },
    testListFmtkaGENumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "be-BY"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["адзін", "два"]), "адзін і два");
        test.done();
    },
    testListFmtkaGENumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "be-BY"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["адзін", "два", "тры"]), "адзін, два і тры");
        test.done();
    },
    testListFmtkaGENumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "be-BY"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["адзін", "два", "тры", "чатыры"]), "адзін, два, тры і чатыры");
        test.done();
    },
    testListFmtkaGENumberFormatFive: function(test) {
        var fmt = new ListFmt({
            locale: "be-BY"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["адзін", "два", "тры", "чатыры", "пяць"]), "адзін, два, тры, чатыры і пяць");
        test.done();
    },
    testListFmtUnitStylekaGENumberFormatOneShort: function(test) {
        var fmt = new ListFmt({
            locale: "be-BY",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["адзін"]), "адзін");
        test.done();
    },
    testListFmtUnitStylekaGENumberFormatTwoShort: function(test) {
        var fmt = new ListFmt({
            locale: "be-BY",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["адзін", "два"]), "адзін два");
        test.done();
    },
    testListFmtUnitStylekaGENumberFormatThreeShort: function(test) {
        var fmt = new ListFmt({
            locale: "be-BY",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["адзін", "два", "тры"]), "адзін два тры");
        test.done();
    },
    testListFmtUnitStylekaGENumberFormatFourShort: function(test) {
        var fmt = new ListFmt({
            locale: "be-BY",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["адзін", "два", "тры", "чатыры"]), "адзін два тры чатыры");
        test.done();
    },
    testListFmtUnitStylekaGENumberFormatFiveShort: function(test) {
        var fmt = new ListFmt({
            locale: "be-BY",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["адзін", "два", "тры", "чатыры", "пяць"]), "адзін два тры чатыры пяць");
        test.done();
    },
    testListFmtUnitStylekaGENumberFormatOneFull: function(test) {
        var fmt = new ListFmt({
            locale: "be-BY",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["адзін"]), "адзін");
        test.done();
    },
    testListFmtUnitStylekaGENumberFormatTwoFull: function(test) {
        var fmt = new ListFmt({
            locale: "be-BY",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["адзін", "два"]), "адзін два");
        test.done();
    },
    testListFmtUnitStylekaGENumberFormatThreeFull: function(test) {
        var fmt = new ListFmt({
            locale: "be-BY",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["адзін", "два", "тры"]), "адзін два тры");
        test.done();
    },
    testListFmtUnitStylekaGENumberFormatFourFull: function(test) {
        var fmt = new ListFmt({
            locale: "be-BY",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["адзін", "два", "тры", "чатыры"]), "адзін два тры чатыры");
        test.done();
    },
    testListFmtUnitStylekaGENumberFormatFiveFull: function(test) {
        var fmt = new ListFmt({
            locale: "be-BY",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["адзін", "два", "тры", "чатыры", "пяць"]), "адзін два тры чатыры пяць");
        test.done();
    },
    testListFmtORStylekaGENumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "be-BY",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["адзін"]), "адзін");
        test.done();
    },
    testListFmtORStylekaGENumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "be-BY",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["адзін", "два"]), "адзін ці два");
        test.done();
    },
    testListFmtORStylekaGENumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "be-BY",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["адзін", "два", "тры"]), "адзін, два ці тры");
        test.done();
    },
    testListFmtORStylekaGENumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "be-BY",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["адзін", "два", "тры", "чатыры"]), "адзін, два, тры ці чатыры");
        test.done();
    },
    testListFmtORStylekaGENumberFormatFiveFull: function(test) {
        var fmt = new ListFmt({
            locale: "be-BY",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["адзін", "два", "тры", "чатыры", "пяць"]), "адзін, два, тры, чатыры ці пяць");
        test.done();
    }
};