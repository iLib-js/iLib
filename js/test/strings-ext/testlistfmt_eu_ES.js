/*
 * testlistfmt_eu_ES.js - test the list formatter object
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

module.exports.testlistfmt_eu_ES = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testListFmteuESNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "eu-ES"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["bat"]), "bat");
        test.done();
    },
    testListFmteuESNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "eu-ES"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["bat", "bi"]), "bat eta bi");
        test.done();
    },
    testListFmteuESNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "eu-ES"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["bat", "bi", "hiru"]), "bat, bi eta hiru");
        test.done();
    },
    testListFmteuESNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "eu-ES"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["bat", "bi", "hiru", "lau"]), "bat, bi, hiru eta lau");
        test.done();
    },
    testListFmteuESNumberFormatFive: function(test) {
        var fmt = new ListFmt({
            locale: "eu-ES"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["bat", "bi", "hiru", "lau", "bost"]), "bat, bi, hiru, lau eta bost");
        test.done();
    },
    testListFmtUnitStyleeuESNumberFormatOneShort: function(test) {
        var fmt = new ListFmt({
            locale: "eu-ES",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["bat"]), "bat");
        test.done();
    },
    testListFmtUnitStyleeuESNumberFormatTwoShort: function(test) {
        var fmt = new ListFmt({
            locale: "eu-ES",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["bat", "bi"]), "bat eta bi");
        test.done();
    },
    testListFmtUnitStyleeuESNumberFormatThreeShort: function(test) {
        var fmt = new ListFmt({
            locale: "eu-ES",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["bat", "bi", "hiru"]), "bat, bi eta hiru");
        test.done();
    },
    testListFmtUnitStyleeuESNumberFormatFourShort: function(test) {
        var fmt = new ListFmt({
            locale: "eu-ES",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["bat", "bi", "hiru", "lau"]), "bat, bi, hiru eta lau");
        test.done();
    },
    testListFmtUnitStyleeuESNumberFormatFiveShort: function(test) {
        var fmt = new ListFmt({
            locale: "eu-ES",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["bat", "bi", "hiru", "lau", "bost"]), "bat, bi, hiru, lau eta bost");
        test.done();
    },
    testListFmtUnitStyleeuESNumberFormatOneFull: function(test) {
        var fmt = new ListFmt({
            locale: "eu-ES",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["bat"]), "bat");
        test.done();
    },
    testListFmtUnitStyleeuESNumberFormatTwoFull: function(test) {
        var fmt = new ListFmt({
            locale: "eu-ES",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["bat", "bi"]), "bat eta bi");
        test.done();
    },
    testListFmtUnitStyleeuESNumberFormatThreeFull: function(test) {
        var fmt = new ListFmt({
            locale: "eu-ES",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["bat", "bi", "hiru"]), "bat, bi eta hiru");
        test.done();
    },
    testListFmtUnitStyleeuESNumberFormatFourFull: function(test) {
        var fmt = new ListFmt({
            locale: "eu-ES",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["bat", "bi", "hiru", "lau"]), "bat, bi, hiru eta lau");
        test.done();
    },
    testListFmtUnitStyleeuESNumberFormatFiveFull: function(test) {
        var fmt = new ListFmt({
            locale: "eu-ES",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["bat", "bi", "hiru", "lau", "bost"]), "bat, bi, hiru, lau eta bost");
        test.done();
    },
    testListFmtORStyleeuESNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "eu-ES",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["bat"]), "bat");
        test.done();
    },
    testListFmtORStyleeuESNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "eu-ES",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["bat", "bi"]), "bat edo bi");
        test.done();
    },
    testListFmtORStyleeuESNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "eu-ES",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["bat", "bi", "hiru"]), "bat, bi edo hiru");
        test.done();
    },
    testListFmtORStyleeuESNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "eu-ES",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["bat", "bi", "hiru", "lau"]), "bat, bi, hiru edo lau");
        test.done();
    },
    testListFmtORStyleeuESNumberFormatFiveFull: function(test) {
        var fmt = new ListFmt({
            locale: "eu-ES",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["bat", "bi", "hiru", "lau", "bost"]), "bat, bi, hiru, lau edo bost");
        test.done();
    }
};