/*
 * testlistfmt_lo_LA.js - test the list formatter object
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

module.exports.testlistfmt_lo_LA = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testListFmtloLANumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "lo-LA"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ຫນຶ່ງ"]), "ຫນຶ່ງ");
        test.done();
    },
    testListFmtloLANumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "lo-LA"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ຫນຶ່ງ", "ສອງ"]), "ຫນຶ່ງ ແລະ ສອງ");
        test.done();
    },
    testListFmtloLANumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "lo-LA"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ຫນຶ່ງ", "ສອງ", "ສາມ"]), "ຫນຶ່ງ, ສອງ, ສາມ");
        test.done();
    },
    testListFmtloLANumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "lo-LA"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ຫນຶ່ງ", "ສອງ", "ສາມ", "ສີ່"]), "ຫນຶ່ງ, ສອງ, ສາມ, ສີ່");
        test.done();
    },
    testListFmtloLANumberFormatFive: function(test) {
        var fmt = new ListFmt({
            locale: "lo-LA"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ຫນຶ່ງ", "ສອງ", "ສາມ", "ສີ່", "ຫ້າ"]), "ຫນຶ່ງ, ສອງ, ສາມ, ສີ່, ຫ້າ");
        test.done();
    },
    testListFmtUnitStyleloLANumberFormatOneShort: function(test) {
        var fmt = new ListFmt({
            locale: "lo-LA",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ຫນຶ່ງ"]), "ຫນຶ່ງ");
        test.done();
    },
    testListFmtUnitStyleloLANumberFormatTwoShort: function(test) {
        var fmt = new ListFmt({
            locale: "lo-LA",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ຫນຶ່ງ", "ສອງ"]), "ຫນຶ່ງ, ສອງ");
        test.done();
    },
    testListFmtUnitStyleloLANumberFormatThreeShort: function(test) {
        var fmt = new ListFmt({
            locale: "lo-LA",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ຫນຶ່ງ", "ສອງ", "ສາມ"]), "ຫນຶ່ງ, ສອງ, ສາມ");
        test.done();
    },
    testListFmtUnitStyleloLANumberFormatFourShort: function(test) {
        var fmt = new ListFmt({
            locale: "lo-LA",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ຫນຶ່ງ", "ສອງ", "ສາມ", "ສີ່"]), "ຫນຶ່ງ, ສອງ, ສາມ, ສີ່");
        test.done();
    },
    testListFmtUnitStyleloLANumberFormatFiveShort: function(test) {
        var fmt = new ListFmt({
            locale: "lo-LA",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ຫນຶ່ງ", "ສອງ", "ສາມ", "ສີ່", "ຫ້າ"]), "ຫນຶ່ງ, ສອງ, ສາມ, ສີ່, ຫ້າ");
        test.done();
    },
    testListFmtUnitStyleloLANumberFormatOneFull: function(test) {
        var fmt = new ListFmt({
            locale: "lo-LA",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ຫນຶ່ງ"]), "ຫນຶ່ງ");
        test.done();
    },
    testListFmtUnitStyleloLANumberFormatTwoFull: function(test) {
        var fmt = new ListFmt({
            locale: "lo-LA",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ຫນຶ່ງ", "ສອງ"]), "ຫນຶ່ງ, ສອງ");
        test.done();
    },
    testListFmtUnitStyleloLANumberFormatThreeFull: function(test) {
        var fmt = new ListFmt({
            locale: "lo-LA",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ຫນຶ່ງ", "ສອງ", "ສາມ"]), "ຫນຶ່ງ, ສອງ, ສາມ");
        test.done();
    },
    testListFmtUnitStyleloLANumberFormatFourFull: function(test) {
        var fmt = new ListFmt({
            locale: "lo-LA",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ຫນຶ່ງ", "ສອງ", "ສາມ", "ສີ່"]), "ຫນຶ່ງ, ສອງ, ສາມ, ສີ່");
        test.done();
    },
    testListFmtUnitStyleloLANumberFormatFiveFull: function(test) {
        var fmt = new ListFmt({
            locale: "lo-LA",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ຫນຶ່ງ", "ສອງ", "ສາມ", "ສີ່", "ຫ້າ"]), "ຫນຶ່ງ, ສອງ, ສາມ, ສີ່, ຫ້າ");
        test.done();
    },
    testListFmtORStyleloLANumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "lo-LA",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ຫນຶ່ງ"]), "ຫນຶ່ງ");
        test.done();
    },
    testListFmtORStyleloLANumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "lo-LA",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ຫນຶ່ງ", "ສອງ"]), "ຫນຶ່ງ ຫຼື ສອງ");
        test.done();
    },
    testListFmtORStyleloLANumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "lo-LA",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ຫນຶ່ງ", "ສອງ", "ສາມ"]), "ຫນຶ່ງ, ສອງ ຫຼື ສາມ");
        test.done();
    },
    testListFmtORStyleloLANumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "lo-LA",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ຫນຶ່ງ", "ສອງ", "ສາມ", "ສີ່"]), "ຫນຶ່ງ, ສອງ, ສາມ ຫຼື ສີ່");
        test.done();
    },
    testListFmtORStyleloLANumberFormatFiveFull: function(test) {
        var fmt = new ListFmt({
            locale: "lo-LA",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ຫນຶ່ງ", "ສອງ", "ສາມ", "ສີ່", "ຫ້າ"]), "ຫນຶ່ງ, ສອງ, ສາມ, ສີ່ ຫຼື ຫ້າ");
        test.done();
    }
};