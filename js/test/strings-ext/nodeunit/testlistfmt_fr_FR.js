/*
 * testlistfmt_fr_FR.js - test the list formatter object
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
    var ilib = require("../../..");
}

module.exports.testlistfmt_fr_FR = {
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
        test.equal(fmt.format(["un", "deux"]), "un et deux");
        test.done();
    },
    
    testListFmtfrFRNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "fr-FR"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "deux", "trois"]), "un, deux et trois");
        test.done();
    },
    
    testListFmtfrFRNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "fr-FR"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "deux", "trois", "quatre"]), "un, deux, trois et quatre");
        test.done();
    },
    
    testListFmtfrFRNumberFormatFive: function(test) {
        var fmt = new ListFmt({
            locale: "fr-FR"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "deux", "trois", "quatre", "cinq"]), "un, deux, trois, quatre et cinq");
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
    }
    
};