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
    testListFmtbeBYNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "be-BY"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["адзін"]), "адзін");
        test.done();
    },
    testListFmtbeBYNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "be-BY"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["адзін", "два"]), "адзін і два");
        test.done();
    },
    testListFmtbeBYNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "be-BY"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["адзін", "два", "тры"]), "адзін, два і тры");
        test.done();
    },
    testListFmtbeBYNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "be-BY"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["адзін", "два", "тры", "чатыры"]), "адзін, два, тры і чатыры");
        test.done();
    },
    testListFmtbeBYNumberFormatFive: function(test) {
        var fmt = new ListFmt({
            locale: "be-BY"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["адзін", "два", "тры", "чатыры", "пяць"]), "адзін, два, тры, чатыры і пяць");
        test.done();
    },
    testListFmtUnitStylebeBYNumberFormatOneShort: function(test) {
        var fmt = new ListFmt({
            locale: "be-BY",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["адзін"]), "адзін");
        test.done();
    },
    testListFmtUnitStylebeBYNumberFormatTwoShort: function(test) {
        var fmt = new ListFmt({
            locale: "be-BY",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["адзін", "два"]), "адзін два");
        test.done();
    },
    testListFmtUnitStylebeBYNumberFormatThreeShort: function(test) {
        var fmt = new ListFmt({
            locale: "be-BY",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["адзін", "два", "тры"]), "адзін два тры");
        test.done();
    },
    testListFmtUnitStylebeBYNumberFormatFourShort: function(test) {
        var fmt = new ListFmt({
            locale: "be-BY",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["адзін", "два", "тры", "чатыры"]), "адзін два тры чатыры");
        test.done();
    },
    testListFmtUnitStylebeBYNumberFormatFiveShort: function(test) {
        var fmt = new ListFmt({
            locale: "be-BY",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["адзін", "два", "тры", "чатыры", "пяць"]), "адзін два тры чатыры пяць");
        test.done();
    },
    testListFmtUnitStylebeBYNumberFormatOneFull: function(test) {
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
    testListFmtUnitStylebeBYNumberFormatTwoFull: function(test) {
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
    testListFmtUnitStylebeBYNumberFormatThreeFull: function(test) {
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
    testListFmtUnitStylebeBYNumberFormatFourFull: function(test) {
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
    testListFmtUnitStylebeBYNumberFormatFiveFull: function(test) {
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
    testListFmtORStylebeBYNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "be-BY",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["адзін"]), "адзін");
        test.done();
    },
    testListFmtORStylebeBYNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "be-BY",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["адзін", "два"]), "адзін ці два");
        test.done();
    },
    testListFmtORStylebeBYNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "be-BY",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["адзін", "два", "тры"]), "адзін, два ці тры");
        test.done();
    },
    testListFmtORStylebeBYNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "be-BY",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["адзін", "два", "тры", "чатыры"]), "адзін, два, тры ці чатыры");
        test.done();
    },
    testListFmtORStylebeBYNumberFormatFiveFull: function(test) {
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