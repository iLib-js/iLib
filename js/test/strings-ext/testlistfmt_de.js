/*
 * testlistfmt_de.js - test the list formatter object
 *
 * Copyright © 2017,2017, JEDLSoft
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

//en-US
if (typeof(ilib) === "undefined") {
    var ilib = require("../../lib/ilib.js");
}

module.exports.testlistfmt_de = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testListFmtdeDENumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "de-DE"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["eins"]), "eins");
        test.done();
    },

    testListFmtdeDENumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "de-DE"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["eins", "zwei"]), "eins und zwei");
        test.done();
    },

    testListFmtdeDENumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "de-DE"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["eins", "zwei", "drei"]), "eins, zwei und drei");
        test.done();
    },

    testListFmtledeDENumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "de-DE"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["eins", "zwei", "drei", "vier"]), "eins, zwei, drei und vier");
        test.done();
    },

    testListFmtdeDEDisjunctionFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "de-DE",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["eins"]), "eins");
        test.done();
    },

    testListFmtdeDEDisjunctionFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "de-DE",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["eins", "zwei"]), "eins oder zwei");
        test.done();
    },

    testListFmtdeDEDisjunctionFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "de-DE",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["eins", "zwei", "drei"]), "eins, zwei oder drei");
        test.done();
    },

    testListFmtledeDEDisjunctionFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "de-DE",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["eins", "zwei", "drei", "vier"]), "eins, zwei, drei oder vier");
        test.done();
    },

    // de-AT
    testListFmtUnitStyledeATNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "de-AT",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["eins"]), "eins");
        test.done();
    },

    testListFmtUnitStyledeATNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "de-AT",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["eins", "zwei"]), "eins, zwei");
        test.done();
    },

    testListFmtUnitStyledeATNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "de-AT",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["eins", "zwei", "drei"]), "eins, zwei und drei");
        test.done();
    },

    testListFmtUnitStyledeATNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "de-AT",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["eins", "zwei", "drei", "vier"]), "eins, zwei, drei und vier");
        test.done();
    },
    testListFmtUnitStyledeATNumberFormatOneLong: function(test) {
        var fmt = new ListFmt({
            locale: "de-AT",
            style: "unit",
            length : "long"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["eins"]), "eins");
        test.done();
    },

    testListFmtUnitStyledeATNumberFormatTwoLong: function(test) {
        var fmt = new ListFmt({
            locale: "de-AT",
            style: "unit",
            length: "long"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["eins", "zwei"]), "eins, zwei");
        test.done();
    },

    testListFmtUnitStyledeATNumberFormatThreeLong: function(test) {
        var fmt = new ListFmt({
            locale: "de-AT",
            style: "unit",
            length: "long"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["eins", "zwei", "drei"]), "eins, zwei und drei");
        test.done();
    },

    testListFmtUnitStyledeATNumberFormatFourLong: function(test) {
        var fmt = new ListFmt({
            locale: "de-AT",
            style: "unit",
            length: "long"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["eins", "zwei", "drei", "vier"]), "eins, zwei, drei und vier");
        test.done();
    },

    // de-CH

    testListFmtdeCHNumberFormatOneLong: function(test) {
        var fmt = new ListFmt({
            locale: "de-CH",
            length: "long"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["eins"]), "eins");
        test.done();
    },

    testListFmtdeCHNumberFormatTwoLong: function(test) {
        var fmt = new ListFmt({
            locale: "de-CH",
            length: "long"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["eins", "zwei"]), "eins und zwei");
        test.done();
    },

    testListFmtdeCHNumberFormatThreeLong: function(test) {
        var fmt = new ListFmt({
            locale: "de-CH",
            length: "long"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["eins", "zwei", "drei"]), "eins, zwei und drei");
        test.done();
    },

    testListFmtledeCHNumberFormatFourLong: function(test) {
        var fmt = new ListFmt({
            locale: "de-CH",
            length: "long"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["eins", "zwei", "drei", "vier"]), "eins, zwei, drei und vier");
        test.done();
    },

    testListFmtUnitStyledeCHNumberFormatOneMedium: function(test) {
        var fmt = new ListFmt({
            locale: "de-AT",
            style: "unit",
            length: "medium"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["eins"]), "eins");
        test.done();
    },

    testListFmtUnitStyledeCHNumberFormatTwoMedium: function(test) {
        var fmt = new ListFmt({
            locale: "de-CH",
            style: "unit",
            length: "medium"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["eins", "zwei"]), "eins, zwei");
        test.done();
    },

    testListFmtUnitStyledeCHNumberFormatThreeMedium: function(test) {
        var fmt = new ListFmt({
            locale: "de-CH",
            style: "unit",
            length: "medium"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["eins", "zwei", "drei"]), "eins, zwei und drei");
        test.done();
    },

    testListFmtUnitStyledeCHNumberFormatFourMedium: function(test) {
        var fmt = new ListFmt({
            locale: "de-CH",
            style: "unit",
            length: "medium"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["eins", "zwei", "drei", "vier"]), "eins, zwei, drei und vier");
        test.done();
    },
    testListFmtUnitStyledeCHNumberFormatOneFull: function(test) {
        var fmt = new ListFmt({
            locale: "de-CH",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["eins"]), "eins");
        test.done();
    },

    testListFmtUnitStyledeCHNumberFormatTwoFull: function(test) {
        var fmt = new ListFmt({
            locale: "de-CH",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["eins", "zwei"]), "eins, zwei");
        test.done();
    },

    testListFmtUnitStyledeCHNumberFormatThreeFull: function(test) {
        var fmt = new ListFmt({
            locale: "de-CH",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["eins", "zwei", "drei"]), "eins, zwei und drei");
        test.done();
    },

    testListFmtUnitStyledeCHNumberFormatFourFull: function(test) {
        var fmt = new ListFmt({
            locale: "de-CH",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["eins", "zwei", "drei", "vier"]), "eins, zwei, drei und vier");
        test.done();
    },

    // de-LU

    testListFmtdeCHNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "de-LU"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["eins"]), "eins");
        test.done();
    },

    testListFmtdeLUNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "de-LU"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["eins", "zwei"]), "eins und zwei");
        test.done();
    },

    testListFmtdeLUNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "de-LU"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["eins", "zwei", "drei"]), "eins, zwei und drei");
        test.done();
    },

    testListFmtledeLUNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "de-LU"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["eins", "zwei", "drei", "vier"]), "eins, zwei, drei und vier");
        test.done();
    },

    testListFmtUnitStyledeLUNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "de-AT",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["eins"]), "eins");
        test.done();
    },

    testListFmtUnitStyledeLUNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "de-LU",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["eins", "zwei"]), "eins, zwei");
        test.done();
    },

    testListFmtUnitStyledeLUNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "de-LU",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["eins", "zwei", "drei"]), "eins, zwei und drei");
        test.done();
    },

    testListFmtUnitStyledeLUNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "de-LU",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["eins", "zwei", "drei", "vier"]), "eins, zwei, drei und vier");
        test.done();
    },
    testListFmtUnitStyledeLUNumberFormatOneFull: function(test) {
        var fmt = new ListFmt({
            locale: "de-LU",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["eins"]), "eins");
        test.done();
    },

    testListFmtUnitStyledeLUNumberFormatTwoFull: function(test) {
        var fmt = new ListFmt({
            locale: "de-LU",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["eins", "zwei"]), "eins, zwei");
        test.done();
    },

    testListFmtUnitStyledeLUNumberFormatThreeFull: function(test) {
        var fmt = new ListFmt({
            locale: "de-LU",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["eins", "zwei", "drei"]), "eins, zwei und drei");
        test.done();
    },

    testListFmtUnitStyledeLUNumberFormatFourFull: function(test) {
        var fmt = new ListFmt({
            locale: "de-LU",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["eins", "zwei", "drei", "vier"]), "eins, zwei, drei und vier");
        test.done();
    }

};
