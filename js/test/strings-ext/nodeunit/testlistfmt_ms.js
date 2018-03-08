/*
 * testlistfmt_ms.js - test the list formatter object
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
    var ListFmt = require("../.././../lib/ListFmt.js");
}

if (typeof(ilib) === "undefined") {
    var ilib = require("../../../lib/ilib.js");
}

module.exports.testlistfmt_ms = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    // ms-Latn-MY
    
    testListFmtmsLatnMYNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "ms-Latn-MY"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["satu"]), "satu");
        test.done();
    },
    
    testListFmtmsLatnMYNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "ms-Latn-MY"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["satu", "dua"]), "satu dan dua");
        test.done();
    },
    
    testListFmtmsLatnMYNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "ms-Latn-MY"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["satu", "dua", "bertiga"]), "satu, dua dan bertiga");
        test.done();
    },
    
    testListFmtmsLatnMYNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "ms-Latn-MY"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["satu", "dua", "bertiga", "empat"]), "satu, dua, bertiga dan empat");
        test.done();
    },
    testListFmtUnitStylemsLatnMYNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "ms-Latn-MY",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["satu"]), "satu");
        test.done();
    },
    
    testListFmtUnitStylemsLatnMYNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "ms-Latn-MY",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["satu", "dua"]), "satu dua");
        test.done();
    },
    
    testListFmtUnitStylemsLatnMYNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "ms-Latn-MY",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["satu", "dua", "bertiga"]), "satu dua bertiga");
        test.done();
    },
    
    testListFmtUnitStylemsLatnMYNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "ms-Latn-MY",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["satu", "dua", "bertiga", "empat"]), "satu dua bertiga empat");
        test.done();
    },
    testListFmtUnitStylemsLatnMYNumberFormatOneMedium: function(test) {
        var fmt = new ListFmt({
            locale: "ms-Latn-MY",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["satu"]), "satu");
        test.done();
    },
    
    testListFmtUnitStylemsLatnMYNumberFormatTwoMedium: function(test) {
        var fmt = new ListFmt({
            locale: "ms-Latn-MY",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["satu", "dua"]), "satu dan dua");
        test.done();
    },
    
    testListFmtUnitStylemsLatnMYNumberFormatThreeMedium: function(test) {
        var fmt = new ListFmt({
            locale: "ms-Latn-MY",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["satu", "dua", "bertiga"]), "satu, dua dan bertiga");
        test.done();
    },
    
    testListFmtUnitStylemsLatnMYNumberFormatFourMedium: function(test) {
        var fmt = new ListFmt({
            locale: "ms-Latn-MY",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["satu", "dua", "bertiga", "empat"]), "satu, dua, bertiga dan empat");
        test.done();
    },
    // ms-Latn-SG
    
    testListFmtmsLatnSGNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "ms-Latn-SG"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["satu"]), "satu");
        test.done();
    },
    
    testListFmtmsLatnSGNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "ms-Latn-SG"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["satu", "dua"]), "satu dan dua");
        test.done();
    },
    
    testListFmtmsLatnSGNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "ms-Latn-SG"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["satu", "dua", "bertiga"]), "satu, dua dan bertiga");
        test.done();
    },
    
    testListFmtmsLatnSGNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "ms-Latn-SG"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["satu", "dua", "bertiga", "empat"]), "satu, dua, bertiga dan empat");
        test.done();
    },
    testListFmtUnitStylemsLatnSGNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "ms-Latn-SG",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["satu"]), "satu");
        test.done();
    },
    
    testListFmtUnitStylemsLatnSGNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "ms-Latn-SG",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["satu", "dua"]), "satu dua");
        test.done();
    },
    
    testListFmtUnitStylemsLatnSGNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "ms-Latn-SG",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["satu", "dua", "bertiga"]), "satu dua bertiga");
        test.done();
    },
    
    testListFmtUnitStylemsLatnSGNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "ms-Latn-SG",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["satu", "dua", "bertiga", "empat"]), "satu dua bertiga empat");
        test.done();
    },
    testListFmtUnitStylemsLatnSGNumberFormatOneFull: function(test) {
        var fmt = new ListFmt({
            locale: "ms-Latn-SG",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["satu"]), "satu");
        test.done();
    },
    
    testListFmtUnitStylemsLatnSGNumberFormatTwoFull: function(test) {
        var fmt = new ListFmt({
            locale: "ms-Latn-SG",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["satu", "dua"]), "satu, dua");
        test.done();
    },
    
    testListFmtUnitStylemsLatnSGNumberFormatThreeFull: function(test) {
        var fmt = new ListFmt({
            locale: "ms-Latn-SG",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["satu", "dua", "bertiga"]), "satu, dua, bertiga");
        test.done();
    },
    
    testListFmtUnitStylemsLatnSGNumberFormatFourFull: function(test) {
        var fmt = new ListFmt({
            locale: "ms-Latn-SG",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["satu", "dua", "bertiga", "empat"]), "satu, dua, bertiga, empat");
        test.done();
    }
};
