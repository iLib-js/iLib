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
    var ListFmt = require("../../lib/ListFmt.js");
}


//// ar-EG

if (typeof(ilib) === "undefined") {
    var ilib = require("../../lib/ilib.js");
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
    },

    // ar-IQ
    testListFmtarIQNumberFormatOneLong: function(test) {
        var fmt = new ListFmt({
            locale: "ar-IQ",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد"]), "واحد");
        test.done();
    },

    testListFmtarIQNumberFormatThreeLong: function(test) {
        var fmt = new ListFmt({
            locale: "ar-IQ",
            length: "medium"
        });
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد", "اثنان", "ثلاثة"]), "واحد، واثنان، وثلاثة");
        test.done();
    },

    testListFmtarIQNumberFormatFourLong: function(test) {
        var fmt = new ListFmt({
            locale: "ar-IQ",
            length: "medium"
        });
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد", "اثنان", "ثلاثة", "أربعة"]), "واحد، واثنان، وثلاثة، وأربعة");
        test.done();
    },

    testListFmtarIQNumberFormatOneFull: function(test) {
        var fmt = new ListFmt({
            locale: "ar-IQ",
            length: "full"
        });
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد"]), "واحد");
        test.done();
    },

    testListFmtarIQNumberFormatTwoFull: function(test) {
        var fmt = new ListFmt({
            locale: "ar-IQ",
            length: "full"
        });
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد", "اثنان"]), "واحد واثنان");
        test.done();
    },

    testListFmtarIQNumberFormatThreeFull: function(test) {
        var fmt = new ListFmt({
            locale: "ar-IQ",
            length: "full"
        });
        test.expect(2);
        test.ok(fmt !== null);
                                                         
        test.equal(fmt.format(["ﻭﺎﺣﺩ", "ﺎﺜﻧﺎﻧ", "ﺙﻼﺛﺓ"]), "ﻭﺎﺣﺩ، ﺎﺜﻧﺎﻧ، وﺙﻼﺛﺓ");
        test.done();
    },

    testListFmtarIQNumberFormatFourFull: function(test) {
        var fmt = new ListFmt({
            locale: "ar-IQ",
            length: "full"
        });
        test.expect(2);
        test.ok(fmt !== null);                                      
        test.equal(fmt.format(["واحد", "اثنان", "ثلاثة", "أربعة"]), "واحد، اثنان، ثلاثة، وأربعة");
        test.done();
    },

    //// ar-MA

    testListFmtarMANumberFormatOneMedium: function(test) {
        var fmt = new ListFmt({
            locale: "ar-MA",
            length: "medium"
        });
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد"]), "واحد");
        test.done();
    },

    testListFmtarMANumberFormatTwoMedium: function(test) {
        var fmt = new ListFmt({
            locale: "ar-MA",
            length: "medium"
        });
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد", "اثنان"]), "واحد واثنان");
        test.done();
    },

    testListFmtarMANumberFormatThreeMedium: function(test) {
        var fmt = new ListFmt({
            locale: "ar-MA",
            length: "medium"
        });
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد", "اثنان", "ثلاثة"]), "واحد، واثنان، وثلاثة");
        test.done();
    },

    testListFmtarMANumberFormatFourMedium: function(test) {
        var fmt = new ListFmt({
            locale: "ar-MA",
            length: "medium"
        });
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد", "اثنان", "ثلاثة", "أربعة"]), "واحد، واثنان، وثلاثة، وأربعة");
        test.done();
    },

    testListFmtUnitStylearMANumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "ar-MA",
            style: "unit"
        });
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد"]), "واحد");
        test.done();
    },

    testListFmtUnitStylearMANumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "ar-MA",
            style: "unit"
        });
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد", "اثنان"]), "واحد، اثنان");
        test.done();
    },

    testListFmtUnitStylearMANumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "ar-MA",
            style: "unit"
        });
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد", "اثنان", "ثلاثة"]), "واحد، اثنان، ثلاثة");
        test.done();
    },

    testListFmtUnitStylearMANumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "ar-MA",
            style: "unit"
        });
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد", "اثنان", "ثلاثة", "أربعة"]), "واحد، اثنان، ثلاثة، أربعة");
        test.done();
    },

    testListFmtUnitStylearMANumberFormatOneFull: function(test) {
        var fmt = new ListFmt({
            locale: "ar-MA",
            style: "unit",
            length: "full"
        });
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد"]), "واحد");
        test.done();
    },

    testListFmtUnitStylearMANumberFormatTwoFull: function(test) {
        var fmt = new ListFmt({
            locale: "ar-MA",
            style: "unit",
            length: "full"
        });
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد", "اثنان"]), "واحد واثنان");
        test.done();
    },

    testListFmtUnitStylearMANumberFormatThreeFull: function(test) {
        var fmt = new ListFmt({
            locale: "ar-MA",
            style: "unit",
            length: "full"
        });
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد", "اثنان", "ثلاثة"]), "واحد، واثنان، وثلاثة");
        test.done();
    },

    testListFmtUnitStylearMANumberFormatFourFull: function(test) {
        var fmt = new ListFmt({
            locale: "ar-MA",
            style: "unit",
            length: "full"
        });
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد", "اثنان", "ثلاثة", "أربعة"]), "واحد، واثنان، وثلاثة، وأربعة");
        test.done();
    },

    // ar-AE
    testListFmtarAENumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "ar-AE"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد"]), "واحد");
        test.done();
    },
    
    testListFmtarAENumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "ar-AE"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد", "اثنان"]), "واحد واثنان");
        test.done();
    },
    
    testListFmtarAENumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "ar-AE"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد", "اثنان", "ثلاثة"]), "واحد، واثنان، وثلاثة");
        test.done();
    },
    
    testListFmtarAENumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "ar-AE"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد", "اثنان", "ثلاثة", "أربعة"]), "واحد، واثنان، وثلاثة، وأربعة");
        test.done();
    },
    // ar-BH
    testListFmtarBHNumberFormatOneMedium: function(test) {
        var fmt = new ListFmt({
            locale: "ar-BH",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد"]), "واحد");
        test.done();
    },
    
    testListFmtarBHNumberFormatTwoMedium: function(test) {
        var fmt = new ListFmt({
            locale: "ar-BH",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد", "اثنان"]), "واحد واثنان");
        test.done();
    },
    
    testListFmtarBHNumberFormatThreeMedium: function(test) {
        var fmt = new ListFmt({
            locale: "ar-BH",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد", "اثنان", "ثلاثة"]), "واحد، واثنان، وثلاثة");
        test.done();
    },
    
    testListFmtarBHNumberFormatFourMedium: function(test) {
        var fmt = new ListFmt({
            locale: "ar-BH",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد", "اثنان", "ثلاثة", "أربعة"]), "واحد، واثنان، وثلاثة، وأربعة");
        test.done();
    },

    // ar-DJ
    testListFmtarDJNumberFormatOneLong: function(test) {
        var fmt = new ListFmt({
            locale: "ar-DJ",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد"]), "واحد");
        test.done();
    },
    
    testListFmtarDJNumberFormatTwoLong: function(test) {
        var fmt = new ListFmt({
            locale: "ar-DJ",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد", "اثنان"]), "واحد واثنان");
        test.done();
    },
    
    testListFmtarDJNumberFormatThreeLong: function(test) {
        var fmt = new ListFmt({
            locale: "ar-DJ",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد", "اثنان", "ثلاثة"]), "واحد، اثنان، وثلاثة");
        test.done();
    },
    
    testListFmtarDJNumberFormatFourLong: function(test) {
        var fmt = new ListFmt({
            locale: "ar-DJ",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد", "اثنان", "ثلاثة", "أربعة"]), "واحد، اثنان، ثلاثة، وأربعة");
        test.done();
    },
    // ar-DZ
    testListFmtarDZNumberFormatOneFull: function(test) {
        var fmt = new ListFmt({
            locale: "ar-DZ",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد"]), "واحد");
        test.done();
    },
    
    testListFmtarDZNumberFormatTwoFull: function(test) {
        var fmt = new ListFmt({
            locale: "ar-DZ",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد", "اثنان"]), "واحد واثنان");
        test.done();
    },
    
    testListFmtarDZNumberFormatThreeFull: function(test) {
        var fmt = new ListFmt({
            locale: "ar-DZ",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد", "اثنان", "ثلاثة"]), "واحد، اثنان، وثلاثة");
        test.done();
    },
    
    testListFmtarDZNumberFormatFourFull: function(test) {
        var fmt = new ListFmt({
            locale: "ar-DZ",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد", "اثنان", "ثلاثة", "أربعة"]), "واحد، اثنان، ثلاثة، وأربعة");
        test.done();
    },

    // ar-JO
    testListFmtUnitStylearJONumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "ar-JO",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد"]), "واحد");
        test.done();
    },
    
    testListFmtUnitStylearJONumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "ar-JO",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد", "اثنان"]), "واحد، اثنان");
        test.done();
    },
    
    testListFmtUnitStylearJONumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "ar-JO",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد", "اثنان", "ثلاثة"]), "واحد، اثنان، ثلاثة");
        test.done();
    },
    
    testListFmtUnitStylearJONumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "ar-JO",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد", "اثنان", "ثلاثة", "أربعة"]), "واحد، اثنان، ثلاثة، أربعة");
        test.done();
    },
    
    // ar-KW
    testListFmtUnitStylearKWNumberFormatOneMedium: function(test) {
        var fmt = new ListFmt({
            locale: "ar-KW",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد"]), "واحد");
        test.done();
    },
    
    testListFmtUnitStylearKWNumberFormatTwoMedium: function(test) {
        var fmt = new ListFmt({
            locale: "ar-KW",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);                     
        test.equal(fmt.format(["واحد", "اثنان"]), "واحد واثنان");
        test.done();
    },
    
    testListFmtUnitStylearKWNumberFormatThreeMedium: function(test) {
        var fmt = new ListFmt({
            locale: "ar-KW",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد", "اثنان", "ثلاثة"]), "واحد، واثنان، وثلاثة");
        test.done();
    },
    
    testListFmtUnitStylearKWNumberFormatFourMedium: function(test) {
        var fmt = new ListFmt({
            locale: "ar-KW",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);                                       
        test.equal(fmt.format(["واحد", "اثنان", "ثلاثة", "أربعة"]), "واحد، واثنان، وثلاثة، وأربعة");
        test.done();
    },
    //ar-LB
    testListFmtUnitStylearLBNumberFormatOneLong: function(test) {
        var fmt = new ListFmt({
            locale: "ar-LB",
            style: "unit",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد"]), "واحد");
        test.done();
    },
    
    testListFmtUnitStylearLBNumberFormatTwoLong: function(test) {
        var fmt = new ListFmt({
            locale: "ar-LB",
            style: "unit",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);                     
        test.equal(fmt.format(["واحد", "اثنان"]), "واحد واثنان");
        test.done();
    },
    
    testListFmtUnitStylearLBNumberFormatThreeLong: function(test) {
        var fmt = new ListFmt({
            locale: "ar-LB",
            style: "unit",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد", "اثنان", "ثلاثة"]), "واحد، واثنان، وثلاثة");
        test.done();
    },
    
    testListFmtUnitStylearLBNumberFormatFourLong: function(test) {
        var fmt = new ListFmt({
            locale: "ar-LB",
            style: "unit",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);                                       
        test.equal(fmt.format(["واحد", "اثنان", "ثلاثة", "أربعة"]), "واحد، واثنان، وثلاثة، وأربعة");
        test.done();
    },
    //ar-LY
    testListFmtUnitStylearLYNumberFormatOneFull: function(test) {
        var fmt = new ListFmt({
            locale: "ar-LY",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد"]), "واحد");
        test.done();
    },
    
    testListFmtUnitStylearLYNumberFormatTwoFull: function(test) {
        var fmt = new ListFmt({
            locale: "ar-LY",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);                     
        test.equal(fmt.format(["واحد", "اثنان"]), "واحد واثنان");
        test.done();
    },
    
    testListFmtUnitStylearLYNumberFormatThreeFull: function(test) {
        var fmt = new ListFmt({
            locale: "ar-LY",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد", "اثنان", "ثلاثة"]), "واحد، واثنان، وثلاثة");
        test.done();
    },
    
    testListFmtUnitStylearLYNumberFormatFourFull: function(test) {
        var fmt = new ListFmt({
            locale: "ar-LY",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);                                       
        test.equal(fmt.format(["واحد", "اثنان", "ثلاثة", "أربعة"]), "واحد، واثنان، وثلاثة، وأربعة");
        test.done();
    },

    // ar-MR
    testListFmtarMRNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "ar-MR"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد"]), "واحد");
        test.done();
    },
    
    testListFmtarMRNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "ar-MR"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد", "اثنان"]), "واحد واثنان");
        test.done();
    },
    
    testListFmtarMRNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "ar-MR"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد", "اثنان", "ثلاثة"]), "واحد، واثنان، وثلاثة");
        test.done();
    },
    
    testListFmtarMRNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "ar-MR"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد", "اثنان", "ثلاثة", "أربعة"]), "واحد، واثنان، وثلاثة، وأربعة");
        test.done();
    },
    // ar-OM
    testListFmtarOMNumberFormatOneMedium: function(test) {
        var fmt = new ListFmt({
            locale: "ar-OM",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد"]), "واحد");
        test.done();
    },
    
    testListFmtarOMNumberFormatTwoMedium: function(test) {
        var fmt = new ListFmt({
            locale: "ar-OM",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد", "اثنان"]), "واحد واثنان");
        test.done();
    },
    
    testListFmtarOMNumberFormatThreeMedium: function(test) {
        var fmt = new ListFmt({
            locale: "ar-OM",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد", "اثنان", "ثلاثة"]), "واحد، واثنان، وثلاثة");
        test.done();
    },
    
    testListFmtarOMNumberFormatFourMedium: function(test) {
        var fmt = new ListFmt({
            locale: "ar-OM",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد", "اثنان", "ثلاثة", "أربعة"]), "واحد، واثنان، وثلاثة، وأربعة");
        test.done();
    },

    // ar-QA
    testListFmtarQANumberFormatOneLong: function(test) {
        var fmt = new ListFmt({
            locale: "ar-QA",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد"]), "واحد");
        test.done();
    },
    
    testListFmtarQANumberFormatTwoLong: function(test) {
        var fmt = new ListFmt({
            locale: "ar-QA",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد", "اثنان"]), "واحد واثنان");
        test.done();
    },
    
    testListFmtarQANumberFormatThreeLong: function(test) {
        var fmt = new ListFmt({
            locale: "ar-QA",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد", "اثنان", "ثلاثة"]), "واحد، اثنان، وثلاثة");
        test.done();
    },
    
    testListFmtarQANumberFormatFourLong: function(test) {
        var fmt = new ListFmt({
            locale: "ar-QA",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد", "اثنان", "ثلاثة", "أربعة"]), "واحد، اثنان، ثلاثة، وأربعة");
        test.done();
    },
    // ar-SA
    testListFmtarSANumberFormatOneFull: function(test) {
        var fmt = new ListFmt({
            locale: "ar-SA",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد"]), "واحد");
        test.done();
    },
    
    testListFmtarSANumberFormatTwoFull: function(test) {
        var fmt = new ListFmt({
            locale: "ar-SA",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد", "اثنان"]), "واحد واثنان");
        test.done();
    },
    
    testListFmtarSANumberFormatThreeFull: function(test) {
        var fmt = new ListFmt({
            locale: "ar-SA",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد", "اثنان", "ثلاثة"]), "واحد، اثنان، وثلاثة");
        test.done();
    },
    
    testListFmtarSANumberFormatFourFull: function(test) {
        var fmt = new ListFmt({
            locale: "ar-SA",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد", "اثنان", "ثلاثة", "أربعة"]), "واحد، اثنان، ثلاثة، وأربعة");
        test.done();
    },

    // ar-SD
    testListFmtUnitStylearJONumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "ar-SD",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد"]), "واحد");
        test.done();
    },
    
    testListFmtUnitStylearSDNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "ar-SD",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد", "اثنان"]), "واحد، اثنان");
        test.done();
    },
    
    testListFmtUnitStylearSDNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "ar-SD",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد", "اثنان", "ثلاثة"]), "واحد، اثنان، ثلاثة");
        test.done();
    },
    
    testListFmtUnitStylearSDNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "ar-SD",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد", "اثنان", "ثلاثة", "أربعة"]), "واحد، اثنان، ثلاثة، أربعة");
        test.done();
    },
    
    // ar-SY
    testListFmtUnitStylearSYNumberFormatOneMedium: function(test) {
        var fmt = new ListFmt({
            locale: "ar-SY",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد"]), "واحد");
        test.done();
    },
    
    testListFmtUnitStylearSYNumberFormatTwoMedium: function(test) {
        var fmt = new ListFmt({
            locale: "ar-SY",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);                     
        test.equal(fmt.format(["واحد", "اثنان"]), "واحد واثنان");
        test.done();
    },
    
    testListFmtUnitStylearSYNumberFormatThreeMedium: function(test) {
        var fmt = new ListFmt({
            locale: "ar-SY",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد", "اثنان", "ثلاثة"]), "واحد، واثنان، وثلاثة");
        test.done();
    },
    
    testListFmtUnitStylearSYNumberFormatFourMedium: function(test) {
        var fmt = new ListFmt({
            locale: "ar-SY",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);                                       
        test.equal(fmt.format(["واحد", "اثنان", "ثلاثة", "أربعة"]), "واحد، واثنان، وثلاثة، وأربعة");
        test.done();
    },
    //ar-TN
    testListFmtUnitStylearTNNumberFormatOneLong: function(test) {
        var fmt = new ListFmt({
            locale: "ar-TN",
            style: "unit",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد"]), "واحد");
        test.done();
    },
    
    testListFmtUnitStylearTNNumberFormatTwoLong: function(test) {
        var fmt = new ListFmt({
            locale: "ar-TN",
            style: "unit",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);                     
        test.equal(fmt.format(["واحد", "اثنان"]), "واحد واثنان");
        test.done();
    },
    
    testListFmtUnitStylearTNNumberFormatThreeLong: function(test) {
        var fmt = new ListFmt({
            locale: "ar-TN",
            style: "unit",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد", "اثنان", "ثلاثة"]), "واحد، واثنان، وثلاثة");
        test.done();
    },
    
    testListFmtUnitStylearTNNumberFormatFourLong: function(test) {
        var fmt = new ListFmt({
            locale: "ar-TN",
            style: "unit",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);                                       
        test.equal(fmt.format(["واحد", "اثنان", "ثلاثة", "أربعة"]), "واحد، واثنان، وثلاثة، وأربعة");
        test.done();
    },
    //ar-YE
    testListFmtUnitStylearYENumberFormatOneFull: function(test) {
        var fmt = new ListFmt({
            locale: "ar-YE",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد"]), "واحد");
        test.done();
    },
    
    testListFmtUnitStylearYENumberFormatTwoFull: function(test) {
        var fmt = new ListFmt({
            locale: "ar-YE",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);                     
        test.equal(fmt.format(["واحد", "اثنان"]), "واحد واثنان");
        test.done();
    },
    
    testListFmtUnitStylearYENumberFormatThreeFull: function(test) {
        var fmt = new ListFmt({
            locale: "ar-YE",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["واحد", "اثنان", "ثلاثة"]), "واحد، واثنان، وثلاثة");
        test.done();
    },
    
    testListFmtUnitStylearYENumberFormatFourFull: function(test) {
        var fmt = new ListFmt({
            locale: "ar-YE",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);                                       
        test.equal(fmt.format(["واحد", "اثنان", "ثلاثة", "أربعة"]), "واحد، واثنان، وثلاثة، وأربعة");
        test.done();
    }
};
