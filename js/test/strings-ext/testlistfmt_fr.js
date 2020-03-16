/*
 * testlistfmt_fr.js - test the list formatter object
 *
 * Copyright © 2017, JEDLSoft
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

module.exports.testlistfmt_fr = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testListFmtfrFRNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "fr-FR"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un"]), "un");
        test.done();
    },
    
    testListFmtfrFRNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "fr-FR"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "deux"]), "un, deux");
        test.done();
    },
    
    testListFmtfrFRNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "fr-FR"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "deux", "trois"]), "un, deux, trois");
        test.done();
    },
    
    testListFmtfrFRNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "fr-FR"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "deux", "trois", "quatre"]), "un, deux, trois, quatre");
        test.done();
    },
    
    testListFmtfrFRNumberFormatFive: function(test) {
        var fmt = new ListFmt({
            locale: "fr-FR"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "deux", "trois", "quatre", "cinq"]), "un, deux, trois, quatre, cinq");
        test.done();
    },
    
    //fr-FR : unit style
    
    testListFmtUnitStylefrFRNumberFormatOneShort: function(test) {
        var fmt = new ListFmt({
            locale: "fr-FR",
            style:"unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un"]), "un");
        test.done();
    },
    
    testListFmtUnitStylefrFRNumberFormatTwoShort: function(test) {
        var fmt = new ListFmt({
            locale: "fr-FR",
            style:"unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "deux"]), "un deux");
        test.done();
    },
    
    testListFmtUnitStylefrFRNumberFormatThreeShort: function(test) {
        var fmt = new ListFmt({
            locale: "fr-FR",
            style:"unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "deux", "trois"]), "un deux trois");
        test.done();
    },
    
    testListFmtUnitStylefrFRNumberFormatFourShort: function(test) {
        var fmt = new ListFmt({
            locale: "fr-FR",
            style:"unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "deux", "trois", "quatre"]), "un deux trois quatre");
        test.done();
    },
    
    testListFmtUnitStylefrFRNumberFormatFiveShort: function(test) {
        var fmt = new ListFmt({
            locale: "fr-FR",
            style:"unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "deux", "trois", "quatre", "cinq"]), "un deux trois quatre cinq");
        test.done();
    },
    
    testListFmtUnitStylefrFRNumberFormatOneMedium: function(test) {
        var fmt = new ListFmt({
            locale: "fr-FR",
            style:"unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un"]), "un");
        test.done();
    },
    
    testListFmtUnitStylefrFRNumberFormatTwoMedium: function(test) {
        var fmt = new ListFmt({
            locale: "fr-FR",
            style:"unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "deux"]), "un et deux");
        test.done();
    },
    
    testListFmtUnitStylefrFRNumberFormatThreeMedium: function(test) {
        var fmt = new ListFmt({
            locale: "fr-FR",
            style:"unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "deux", "trois"]), "un, deux et trois");
        test.done();
    },
    
    testListFmtUnitStylefrFRNumberFormatFourMedium: function(test) {
        var fmt = new ListFmt({
            locale: "fr-FR",
            style:"unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "deux", "trois", "quatre"]), "un, deux, trois et quatre");
        test.done();
    },
    
    testListFmtUnitStylefrFRNumberFormatFiveMedium: function(test) {
        var fmt = new ListFmt({
            locale: "fr-FR",
            style:"unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "deux", "trois", "quatre", "cinq"]), "un, deux, trois, quatre et cinq");
        test.done();
    },
    
    testListFmtUnitStylefrFRNumberFormatOneLong: function(test) {
        var fmt = new ListFmt({
            locale: "fr-FR",
            style:"unit",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un"]), "un");
        test.done();
    },
    
    testListFmtUnitStylefrFRNumberFormatTwoLong: function(test) {
        var fmt = new ListFmt({
            locale: "fr-FR",
            style:"unit",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "deux"]), "un et deux");
        test.done();
    },
    
    testListFmtUnitStylefrFRNumberFormatThreeLong: function(test) {
        var fmt = new ListFmt({
            locale: "fr-FR",
            style:"unit",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "deux", "trois"]), "un, deux et trois");
        test.done();
    },
    
    testListFmtUnitStylefrFRNumberFormatFourLong: function(test) {
        var fmt = new ListFmt({
            locale: "fr-FR",
            style:"unit",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "deux", "trois", "quatre"]), "un, deux, trois et quatre");
        test.done();
    },
    
    testListFmtUnitStylefrFRNumberFormatFiveLong: function(test) {
        var fmt = new ListFmt({
            locale: "fr-FR",
            style:"unit",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "deux", "trois", "quatre", "cinq"]), "un, deux, trois, quatre et cinq");
        test.done();
    },
    
    testListFmtUnitStylefrFRNumberFormatOneFull: function(test) {
        var fmt = new ListFmt({
            locale: "fr-FR",
            style:"unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un"]), "un");
        test.done();
    },
    
    testListFmtUnitStylefrFRNumberFormatTwoFull: function(test) {
        var fmt = new ListFmt({
            locale: "fr-FR",
            style:"unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "deux"]), "un et deux");
        test.done();
    },
    
    testListFmtUnitStylefrFRNumberFormatThreeFull: function(test) {
        var fmt = new ListFmt({
            locale: "fr-FR",
            style:"unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "deux", "trois"]), "un, deux et trois");
        test.done();
    },
    
    testListFmtUnitStylefrFRNumberFormatFourFull: function(test) {
        var fmt = new ListFmt({
            locale: "fr-FR",
            style:"unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "deux", "trois", "quatre"]), "un, deux, trois et quatre");
        test.done();
    },
    
    testListFmtUnitStylefrFRNumberFormatFiveFull: function(test) {
        var fmt = new ListFmt({
            locale: "fr-FR",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "deux", "trois", "quatre", "cinq"]), "un, deux, trois, quatre et cinq");
        test.done();
    },
    // fr-BE
    testListFmtfrBENumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "fr-BE"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un"]), "un");
        test.done();
    },
    
    testListFmtfrBENumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "fr-BE"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "deux"]), "un, deux");
        test.done();
    },
    
    testListFmtfrBENumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "fr-BE"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "deux", "trois"]), "un, deux, trois");
        test.done();
    },
    
    testListFmtfrBENumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "fr-BE"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "deux", "trois", "quatre"]), "un, deux, trois, quatre");
        test.done();
    },
    
    // fr-CA
    testListFmtfrCANumberFormatOneMedium: function(test) {
        var fmt = new ListFmt({
            locale: "fr-CA",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un"]), "un");
        test.done();
    },
    
    testListFmtfrCANumberFormatTwoMedium: function(test) {
        var fmt = new ListFmt({
            locale: "fr-CA",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "deux"]), "un et deux");
        test.done();
    },
    
    testListFmtfrCANumberFormatThreeMedium: function(test) {
        var fmt = new ListFmt({
            locale: "fr-CA",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "deux", "trois"]), "un, deux et trois");
        test.done();
    },
    
    testListFmtfrCANumberFormatFourMedium: function(test) {
        var fmt = new ListFmt({
            locale: "fr-CA",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "deux", "trois", "quatre"]), "un, deux, trois et quatre");
        test.done();
    },

    // fr-CH
    testListFmtfrCHNumberFormatOneLong: function(test) {
        var fmt = new ListFmt({
            locale: "fr-CH",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un"]), "un");
        test.done();
    },
    
    testListFmtfrCHNumberFormatTwoLong: function(test) {
        var fmt = new ListFmt({
            locale: "fr-CH",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "deux"]), "un et deux");
        test.done();
    },
    
    testListFmtfrCHNumberFormatThreeLong: function(test) {
        var fmt = new ListFmt({
            locale: "fr-CH",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "deux", "trois"]), "un, deux et trois");
        test.done();
    },
    
    testListFmtfrCHNumberFormatFourLong: function(test) {
        var fmt = new ListFmt({
            locale: "fr-CH",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "deux", "trois", "quatre"]), "un, deux, trois et quatre");
        test.done();
    },
    // fr-LU
    testListFmtfrLUNumberFormatOneFull: function(test) {
        var fmt = new ListFmt({
            locale: "fr-LU",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un"]), "un");
        test.done();
    },
    
    testListFmtfrLUNumberFormatTwoFull: function(test) {
        var fmt = new ListFmt({
            locale: "fr-LU",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "deux"]), "un et deux");
        test.done();
    },
    
    testListFmtfrLUNumberFormatThreeFull: function(test) {
        var fmt = new ListFmt({
            locale: "fr-LU",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "deux", "trois"]), "un, deux et trois");
        test.done();
    },
    
    testListFmtfrLUNumberFormatFourFull: function(test) {
        var fmt = new ListFmt({
            locale: "fr-LU",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "deux", "trois", "quatre"]), "un, deux, trois et quatre");
        test.done();
    },

    // fr-BF
    testListFmtUnitStylefrBFNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "fr-BF",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un"]), "un");
        test.done();
    },
    
    testListFmtUnitStylefrBFNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "fr-BF",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "deux"]), "un deux");
        test.done();
    },
    
    testListFmtUnitStylefrBFNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "fr-BF",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "deux", "trois"]), "un deux trois");
        test.done();
    },
    
    testListFmtUnitStylefrBFNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "fr-BF",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "deux", "trois", "quatre"]), "un deux trois quatre");
        test.done();
    },
    // fr-BJ
    testListFmtUnitStylefrBFNumberFormatOneMedium: function(test) {
        var fmt = new ListFmt({
            locale: "fr-BF",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un"]), "un");
        test.done();
    },
    
    testListFmtUnitStylefrBFNumberFormatTwoMedium: function(test) {
        var fmt = new ListFmt({
            locale: "fr-BF",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "deux"]), "un et deux");
        test.done();
    },
    
    testListFmtUnitStylefrBFNumberFormatThreeMedium: function(test) {
        var fmt = new ListFmt({
            locale: "fr-BF",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "deux", "trois"]), "un, deux et trois");
        test.done();
    },
    
    testListFmtUnitStylefrBFNumberFormatFourMedium: function(test) {
        var fmt = new ListFmt({
            locale: "fr-BF",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "deux", "trois", "quatre"]), "un, deux, trois et quatre");
        test.done();
    },
    // fr-CD
    testListFmtUnitStylefrCDNumberFormatOneLong: function(test) {
        var fmt = new ListFmt({
            locale: "fr-CD",
            style: "unit",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un"]), "un");
        test.done();
    },
    
    testListFmtUnitStylefrCDNumberFormatTwoLong: function(test) {
        var fmt = new ListFmt({
            locale: "fr-CD",
            style: "unit",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "deux"]), "un et deux");
        test.done();
    },
    
    testListFmtUnitStylefrCDNumberFormatThreeLong: function(test) {
        var fmt = new ListFmt({
            locale: "fr-CD",
            style: "unit",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "deux", "trois"]), "un, deux et trois");
        test.done();
    },
    
    testListFmtUnitStylefrCDNumberFormatFourLong: function(test) {
        var fmt = new ListFmt({
            locale: "fr-CD",
            style: "unit",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "deux", "trois", "quatre"]), "un, deux, trois et quatre");
        test.done();
    },
    // fr-CD
    testListFmtUnitStylefrCFNumberFormatOneFull: function(test) {
        var fmt = new ListFmt({
            locale: "fr-CF",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un"]), "un");
        test.done();
    },
    
    testListFmtUnitStylefrCFNumberFormatTwoFull: function(test) {
        var fmt = new ListFmt({
            locale: "fr-CF",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "deux"]), "un et deux");
        test.done();
    },
    
    testListFmtUnitStylefrCFNumberFormatThreeFull: function(test) {
        var fmt = new ListFmt({
            locale: "fr-CF",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "deux", "trois"]), "un, deux et trois");
        test.done();
    },
    
    testListFmtUnitStylefrCFNumberFormatFourFull: function(test) {
        var fmt = new ListFmt({
            locale: "fr-CF",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "deux", "trois", "quatre"]), "un, deux, trois et quatre");
        test.done();
    },
    // fr-CG
    testListFmtfrCGNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "fr-CG"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un"]), "un");
        test.done();
    },
    
    testListFmtfrCGNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "fr-CG"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "deux"]), "un, deux");
        test.done();
    },
    
    testListFmtfrCGNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "fr-CG"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "deux", "trois"]), "un, deux, trois");
        test.done();
    },
    
    testListFmtfrCGNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "fr-CG`"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "deux", "trois", "quatre"]), "un, deux, trois, quatre");
        test.done();
    },
    
    // fr-CI
    testListFmtfrCINumberFormatOneMedium: function(test) {
        var fmt = new ListFmt({
            locale: "fr-CI",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un"]), "un");
        test.done();
    },
    
    testListFmtfrCINumberFormatTwoMedium: function(test) {
        var fmt = new ListFmt({
            locale: "fr-CI",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "deux"]), "un et deux");
        test.done();
    },
    
    testListFmtfrCINumberFormatThreeMedium: function(test) {
        var fmt = new ListFmt({
            locale: "fr-CI",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "deux", "trois"]), "un, deux et trois");
        test.done();
    },
    
    testListFmtfrCINumberFormatFourMedium: function(test) {
        var fmt = new ListFmt({
            locale: "fr-CI",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "deux", "trois", "quatre"]), "un, deux, trois et quatre");
        test.done();
    },

    // fr-CM
    testListFmtfrCMNumberFormatOneLong: function(test) {
        var fmt = new ListFmt({
            locale: "fr-CM",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un"]), "un");
        test.done();
    },
    
    testListFmtfrCMNumberFormatTwoLong: function(test) {
        var fmt = new ListFmt({
            locale: "fr-CM",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "deux"]), "un et deux");
        test.done();
    },
    
    testListFmtfrCMNumberFormatThreeLong: function(test) {
        var fmt = new ListFmt({
            locale: "fr-CM",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "deux", "trois"]), "un, deux et trois");
        test.done();
    },
    
    testListFmtfrCMNumberFormatFourLong: function(test) {
        var fmt = new ListFmt({
            locale: "fr-CM",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "deux", "trois", "quatre"]), "un, deux, trois et quatre");
        test.done();
    },
    // fr-GQ
    testListFmtfrGQNumberFormatOneFull: function(test) {
        var fmt = new ListFmt({
            locale: "fr-GQ",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un"]), "un");
        test.done();
    },
    
    testListFmtfrGQNumberFormatTwoFull: function(test) {
        var fmt = new ListFmt({
            locale: "fr-GQ",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "deux"]), "un et deux");
        test.done();
    },
    
    testListFmtfrGQNumberFormatThreeFull: function(test) {
        var fmt = new ListFmt({
            locale: "fr-GQ",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "deux", "trois"]), "un, deux et trois");
        test.done();
    },
    
    testListFmtfrGQNumberFormatFourFull: function(test) {
        var fmt = new ListFmt({
            locale: "fr-GQ",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "deux", "trois", "quatre"]), "un, deux, trois et quatre");
        test.done();
    },

    // fr-DJ
    testListFmtUnitStylefrDJNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "fr-DJ",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un"]), "un");
        test.done();
    },
    
    testListFmtUnitStylefrDJNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "fr-DJ",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "deux"]), "un deux");
        test.done();
    },
    
    testListFmtUnitStylefrDJNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "fr-DJ",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "deux", "trois"]), "un deux trois");
        test.done();
    },
    
    testListFmtUnitStylefrDJNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "fr-DJ",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "deux", "trois", "quatre"]), "un deux trois quatre");
        test.done();
    },
    // fr-DZ
    testListFmtUnitStylefrDZNumberFormatOneMedium: function(test) {
        var fmt = new ListFmt({
            locale: "fr-DZ",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un"]), "un");
        test.done();
    },
    
    testListFmtUnitStylefrDZNumberFormatTwoMedium: function(test) {
        var fmt = new ListFmt({
            locale: "fr-DZ",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "deux"]), "un et deux");
        test.done();
    },
    
    testListFmtUnitStylefrDZNumberFormatThreeMedium: function(test) {
        var fmt = new ListFmt({
            locale: "fr-DZ",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "deux", "trois"]), "un, deux et trois");
        test.done();
    },
    
    testListFmtUnitStylefrDZNumberFormatFourMedium: function(test) {
        var fmt = new ListFmt({
            locale: "fr-DZ",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "deux", "trois", "quatre"]), "un, deux, trois et quatre");
        test.done();
    },
    // fr-GA
    testListFmtUnitStylefrGANumberFormatOneLong: function(test) {
        var fmt = new ListFmt({
            locale: "fr-GA",
            style: "unit",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un"]), "un");
        test.done();
    },
    
    testListFmtUnitStylefrGANumberFormatTwoLong: function(test) {
        var fmt = new ListFmt({
            locale: "fr-GA",
            style: "unit",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "deux"]), "un et deux");
        test.done();
    },
    
    testListFmtUnitStylefrGANumberFormatThreeLong: function(test) {
        var fmt = new ListFmt({
            locale: "fr-GA",
            style: "unit",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "deux", "trois"]), "un, deux et trois");
        test.done();
    },
    
    testListFmtUnitStylefrGANumberFormatFourLong: function(test) {
        var fmt = new ListFmt({
            locale: "fr-GA",
            style: "unit",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "deux", "trois", "quatre"]), "un, deux, trois et quatre");
        test.done();
    },
    // fr-GN
    testListFmtUnitStylefrGNNumberFormatOneFull: function(test) {
        var fmt = new ListFmt({
            locale: "fr-GN",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un"]), "un");
        test.done();
    },
    
    testListFmtUnitStylefrGNNumberFormatTwoFull: function(test) {
        var fmt = new ListFmt({
            locale: "fr-GN",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "deux"]), "un et deux");
        test.done();
    },
    
    testListFmtUnitStylefrGNNumberFormatThreeFull: function(test) {
        var fmt = new ListFmt({
            locale: "fr-GN",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "deux", "trois"]), "un, deux et trois");
        test.done();
    },
    
    testListFmtUnitStylefrGNNumberFormatFourFull: function(test) {
        var fmt = new ListFmt({
            locale: "fr-GN",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "deux", "trois", "quatre"]), "un, deux, trois et quatre");
        test.done();
    },
    // fr-LB
    testListFmtfrLBNumberFormatOneFull: function(test) {
        var fmt = new ListFmt({
            locale: "fr-LB",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un"]), "un");
        test.done();
    },
    
    testListFmtfrLBNumberFormatTwoFull: function(test) {
        var fmt = new ListFmt({
            locale: "fr-LB",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "deux"]), "un et deux");
        test.done();
    },
    
    testListFmtfrLBNumberFormatThreeFull: function(test) {
        var fmt = new ListFmt({
            locale: "fr-LB",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "deux", "trois"]), "un, deux et trois");
        test.done();
    },
    
    testListFmtfrLBNumberFormatFourFull: function(test) {
        var fmt = new ListFmt({
            locale: "fr-LB",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "deux", "trois", "quatre"]), "un, deux, trois et quatre");
        test.done();
    },

    // fr-ML
    testListFmtUnitStylefrMLNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "fr-ML",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un"]), "un");
        test.done();
    },
    
    testListFmtUnitStylefrMLNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "fr-ML",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "deux"]), "un deux");
        test.done();
    },
    
    testListFmtUnitStylefrMLNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "fr-ML",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "deux", "trois"]), "un deux trois");
        test.done();
    },
    
    testListFmtUnitStylefrMLNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "fr-ML",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "deux", "trois", "quatre"]), "un deux trois quatre");
        test.done();
    },
    // fr-RW
    testListFmtUnitStylefrRWNumberFormatOneMedium: function(test) {
        var fmt = new ListFmt({
            locale: "fr-RW",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un"]), "un");
        test.done();
    },
    
    testListFmtUnitStylefrRWNumberFormatTwoMedium: function(test) {
        var fmt = new ListFmt({
            locale: "fr-RW",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "deux"]), "un et deux");
        test.done();
    },
    
    testListFmtUnitStylefrRWNumberFormatThreeMedium: function(test) {
        var fmt = new ListFmt({
            locale: "fr-RW",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "deux", "trois"]), "un, deux et trois");
        test.done();
    },
    
    testListFmtUnitStylefrRWNumberFormatFourMedium: function(test) {
        var fmt = new ListFmt({
            locale: "fr-RW",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "deux", "trois", "quatre"]), "un, deux, trois et quatre");
        test.done();
    },
    // fr-SN
    testListFmtUnitStylefrSNNumberFormatOneLong: function(test) {
        var fmt = new ListFmt({
            locale: "fr-SN",
            style: "unit",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un"]), "un");
        test.done();
    },
    
    testListFmtUnitStylefrSNNumberFormatTwoLong: function(test) {
        var fmt = new ListFmt({
            locale: "fr-SN",
            style: "unit",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "deux"]), "un et deux");
        test.done();
    },
    
    testListFmtUnitStylefrSNNumberFormatThreeLong: function(test) {
        var fmt = new ListFmt({
            locale: "fr-SN",
            style: "unit",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "deux", "trois"]), "un, deux et trois");
        test.done();
    },
    
    testListFmtUnitStylefrSNNumberFormatFourLong: function(test) {
        var fmt = new ListFmt({
            locale: "fr-SN",
            style: "unit",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "deux", "trois", "quatre"]), "un, deux, trois et quatre");
        test.done();
    },
    // fr-TG
    testListFmtUnitStylefrTGNumberFormatOneFull: function(test) {
        var fmt = new ListFmt({
            locale: "fr-TG",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un"]), "un");
        test.done();
    },
    
    testListFmtUnitStylefrTGNumberFormatTwoFull: function(test) {
        var fmt = new ListFmt({
            locale: "fr-TG",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "deux"]), "un et deux");
        test.done();
    },
    
    testListFmtUnitStylefrTGNumberFormatThreeFull: function(test) {
        var fmt = new ListFmt({
            locale: "fr-TG",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "deux", "trois"]), "un, deux et trois");
        test.done();
    },
    
    testListFmtUnitStylefrTGNumberFormatFourFull: function(test) {
        var fmt = new ListFmt({
            locale: "fr-TG",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "deux", "trois", "quatre"]), "un, deux, trois et quatre");
        test.done();
    },

}; 
