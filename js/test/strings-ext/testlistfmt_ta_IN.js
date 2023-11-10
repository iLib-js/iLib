/*
 * testlistfmt_ta_IN.js - test the list formatter object
 *
 * Copyright © 2017, 2020, 2023 JEDLSoft
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

module.exports.testlistfmt_ta_IN = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testListFmttaINNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "ta-IN"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ஒரு"]), "ஒரு");
        test.done();
    },
    testListFmttaINNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "ta-IN"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ஒரு", "இரண்டு"]), "ஒரு மற்றும் இரண்டு");
        test.done();
    },
    testListFmttaINNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "ta-IN"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ஒரு", "இரண்டு", "மூன்று"]), "ஒரு, இரண்டு மற்றும் மூன்று");
        test.done();
    },
    testListFmttaINNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "ta-IN"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ஒரு", "இரண்டு", "மூன்று", "நான்கு"]), "ஒரு, இரண்டு, மூன்று மற்றும் நான்கு");
        test.done();
    },
    testListFmtUnitStyletaINNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "ta-IN",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ஒரு"]), "ஒரு");
        test.done();
    },
    testListFmtUnitStyletaINNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "ta-IN",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ஒரு", "இரண்டு"]), 'ஒரு, இரண்டு');
        test.done();
    },
    testListFmtUnitStyletaINNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "ta-IN",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ஒரு", "இரண்டு", "மூன்று"]), 'ஒரு, இரண்டு, மூன்று');
        test.done();
    },
    testListFmtUnitStyletaINNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "ta-IN",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ஒரு", "இரண்டு", "மூன்று", "நான்கு"]), 'ஒரு, இரண்டு, மூன்று, நான்கு');
        test.done();
    },
    testListFmtUnitStyletaINNumberFormatOneMedium: function(test) {
        var fmt = new ListFmt({
            locale: "ta-IN",
            style: "unit",
            length: "medium"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ஒரு"]), "ஒரு");
        test.done();
    },
    testListFmtUnitStyletaINNumberFormatTwoMedium: function(test) {
        var fmt = new ListFmt({
            locale: "ta-IN",
            style: "unit",
            length: "medium"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ஒரு", "இரண்டு"]), 'ஒரு, இரண்டு');
        test.done();
    },
    testListFmtUnitStyletaINNumberFormatThreeMedium: function(test) {
        var fmt = new ListFmt({
            locale: "ta-IN",
            style: "unit",
            length: "medium"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ஒரு", "இரண்டு", "மூன்று"]), 'ஒரு, இரண்டு, மூன்று');
        test.done();
    },
    testListFmtUnitStyletaINNumberFormatFourMedium: function(test) {
        var fmt = new ListFmt({
            locale: "ta-IN",
            style: "unit",
            length: "medium"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ஒரு", "இரண்டு", "மூன்று", "நான்கு"]), 'ஒரு, இரண்டு, மூன்று, நான்கு');
        test.done();
    }
};