/*
 * testlistfmt_ar.js - test the list formatter object
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


//// ar-EG

if (typeof(ilib) === "undefined") {
    var ilib = require("../../..");
}

module.exports.testlistfmt_ar = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testListFmtarEGNumberFormatOneShort: function(test) {
        var fmt = new ListFmt({
            locale: "ar-EG"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد"]), "واحد");
        test.done();
    },
    
    testListFmtarEGNumberFormatTwoShort: function(test) {
        var fmt = new ListFmt({
            locale: "ar-EG"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد", "اثنان"]), "واحد واثنان");
        test.done();
    },
    
    testListFmtarEGNumberFormatThreeShort: function(test) {
        var fmt = new ListFmt({
            locale: "ar-EG"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد", "اثنان", "ثلاثة"]), "واحد، واثنان، وثلاثة");
        test.done();
    },
    
    testListFmtarEGNumberFormatFourShort: function(test) {
        var fmt = new ListFmt({
            locale: "ar-EG"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد", "اثنان", "ثلاثة", "أربعة"]), "واحد، واثنان، وثلاثة، وأربعة");
        test.done();
    },
    
    testListFmtarEGNumberFormatOneMedium: function(test) {
        var fmt = new ListFmt({
            locale: "ar-EG",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد"]), "واحد");
        test.done();
    },
    
    testListFmtarEGNumberFormatTwoMedium: function(test) {
        var fmt = new ListFmt({
            locale: "ar-EG",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد", "اثنان"]), "واحد واثنان");
        test.done();
    },
    
    testListFmtarEGNumberFormatThreeMedium: function(test) {
        var fmt = new ListFmt({
            locale: "ar-EG",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد", "اثنان", "ثلاثة"]), "واحد، واثنان، وثلاثة");
        test.done();
    },
    
    testListFmtarEGNumberFormatFourMedium: function(test) {
        var fmt = new ListFmt({
            locale: "ar-EG",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد", "اثنان", "ثلاثة", "أربعة"]), "واحد، واثنان، وثلاثة، وأربعة");
        test.done();
    },
    
    testListFmtarEGNumberFormatOneLong: function(test) {
        var fmt = new ListFmt({
            locale: "ar-EG",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد"]), "واحد");
        test.done();
    },
    
    testListFmtarEGNumberFormatTwoLong: function(test) {
        var fmt = new ListFmt({
            locale: "ar-EG",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد", "اثنان"]), "واحد واثنان");
        test.done();
    },
    
    testListFmtarEGNumberFormatThreeLong: function(test) {
        var fmt = new ListFmt({
            locale: "ar-EG",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد", "اثنان", "ثلاثة"]), "واحد، اثنان، وثلاثة");
        test.done();
    },
    
    testListFmtarEGNumberFormatFourLong: function(test) {
        var fmt = new ListFmt({
            locale: "ar-EG",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد", "اثنان", "ثلاثة", "أربعة"]), "واحد، اثنان، ثلاثة، وأربعة");
        test.done();
    },
    
    testListFmtarEGNumberFormatOneFull: function(test) {
        var fmt = new ListFmt({
            locale: "ar-EG",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد"]), "واحد");
        test.done();
    },
    
    testListFmtarEGNumberFormatTwoFull: function(test) {
        var fmt = new ListFmt({
            locale: "ar-EG",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد", "اثنان"]), "واحد واثنان");
        test.done();
    },
    
    testListFmtarEGNumberFormatThreeFull: function(test) {
        var fmt = new ListFmt({
            locale: "ar-EG",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد", "اثنان", "ثلاثة"]), "واحد، اثنان، وثلاثة");
        test.done();
    },
    
    testListFmtarEGNumberFormatFourFull: function(test) {
        var fmt = new ListFmt({
            locale: "ar-EG",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد", "اثنان", "ثلاثة", "أربعة"]), "واحد، اثنان، ثلاثة، وأربعة");
        test.done();
    },
    
    // ar-EG: unitStyle
    
    testListFmtUnitStylearEGNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "ar-EG",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد"]), "واحد");
        test.done();
    },
    
    testListFmtUnitStylearEGNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "ar-EG",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد", "اثنان"]), "واحد، اثنان");
        test.done();
    },
    
    testListFmtUnitStylearEGNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "ar-EG",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد", "اثنان", "ثلاثة"]), "واحد، اثنان، ثلاثة");
        test.done();
    },
    
    testListFmtUnitStylearEGNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "ar-EG",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد", "اثنان", "ثلاثة", "أربعة"]), "واحد، اثنان، ثلاثة، أربعة");
        test.done();
    },
    
    testListFmtUnitStylearEGNumberFormatOneMedium: function(test) {
        var fmt = new ListFmt({
            locale: "ar-EG",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد"]), "واحد");
        test.done();
    },
    
    testListFmtUnitStylearEGNumberFormatTwoMedium: function(test) {
        var fmt = new ListFmt({
            locale: "ar-EG",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد", "اثنان"]), "واحد واثنان");
        test.done();
    },
    
    testListFmtUnitStylearEGNumberFormatThreeMedium: function(test) {
        var fmt = new ListFmt({
            locale: "ar-EG",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد", "اثنان", "ثلاثة"]), "واحد، واثنان، وثلاثة");
        test.done();
    },
    
    testListFmtUnitStylearEGNumberFormatFourMedium: function(test) {
        var fmt = new ListFmt({
            locale: "ar-EG",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد", "اثنان", "ثلاثة", "أربعة"]), "واحد، واثنان، وثلاثة، وأربعة");
        test.done();
    },
    
    testListFmtUnitStylearEGNumberFormatOneLong: function(test) {
        var fmt = new ListFmt({
            locale: "ar-EG",
            style: "unit",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد"]), "واحد");
        test.done();
    },
    
    testListFmtUnitStylearEGNumberFormatTwoLong: function(test) {
        var fmt = new ListFmt({
            locale: "ar-EG",
            style: "unit",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد", "اثنان"]), "واحد واثنان");
        test.done();
    },
    
    testListFmtUnitStylearEGNumberFormatThreeLong: function(test) {
        var fmt = new ListFmt({
            locale: "ar-EG",
            style: "unit",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد", "اثنان", "ثلاثة"]), "واحد، واثنان، وثلاثة");
        test.done();
    },
    
    testListFmtUnitStylearEGNumberFormatFourLong: function(test) {
        var fmt = new ListFmt({
            locale: "ar-EG",
            style: "unit",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد", "اثنان", "ثلاثة", "أربعة"]), "واحد، واثنان، وثلاثة، وأربعة");
        test.done();
    },
    
    testListFmtUnitStylearEGNumberFormatOneFull: function(test) {
        var fmt = new ListFmt({
            locale: "ar-EG",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد"]), "واحد");
        test.done();
    },
    
    testListFmtUnitStylearEGNumberFormatTwoFull: function(test) {
        var fmt = new ListFmt({
            locale: "ar-EG",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد", "اثنان"]), "واحد واثنان");
        test.done();
    },
    
    testListFmtUnitStylearEGNumberFormatThreeFull: function(test) {
        var fmt = new ListFmt({
            locale: "ar-EG",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد", "اثنان", "ثلاثة"]), "واحد، واثنان، وثلاثة");
        test.done();
    },
    
    testListFmtUnitStylearEGNumberFormatFourFull: function(test) {
        var fmt = new ListFmt({
            locale: "ar-EG",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد", "اثنان", "ثلاثة", "أربعة"]), "واحد، واثنان، وثلاثة، وأربعة");
        test.done();
    }
    
};