/*
 * testlistfmt_tr.js - test the list formatter object
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

module.exports.testlistfmt_tr = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    // tr-TR
    
    testListFmttrTRNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "tr-TR"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["bir"]), "bir");
        test.done();
    },
    
    testListFmttrTRNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "tr-TR"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["bir", "два"]), "bir ve два");
        test.done();
    },
    
    testListFmttrTRNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "tr-TR"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["bir", "два", "три"]), "bir, два ve три");
        test.done();
    },
    
    testListFmttrTRNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "tr-TR"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["bir", "два", "три", "четыре"]), "bir, два, три ve четыре");
        test.done();
    },
    
    testListFmtUnitStyletrTRNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "tr-TR",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["bir"]), "bir");
        test.done();
    },
    
    testListFmtUnitStyletrTRNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "tr-TR",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["bir", "два"]), "bir два");
        test.done();
    },
    
    testListFmtUnitStyletrTRNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "tr-TR",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["bir", "два", "три"]), "bir два три");
        test.done();
    },
    
    testListFmtUnitStyletrTRNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "tr-TR",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["bir", "два", "три", "четыре"]), "bir два три четыре");
        test.done();
    },
    
    testListFmtUnitStyletrTRNumberFormatFive: function(test) {
        var fmt = new ListFmt({
            locale: "tr-TR",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["bir", "два", "три", "четыре", "пять"]), "bir два три четыре пять");
        test.done();
    },


    // tr-AM
    
    testListFmttrAMNumberFormatOneLong: function(test) {
        var fmt = new ListFmt({
            locale: "tr-AM",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["bir"]), "bir");
        test.done();
    },
    
    testListFmttrAMNumberFormatTwoLong: function(test) {
        var fmt = new ListFmt({
            locale: "tr-AM",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["bir", "два"]), "bir ve два");
        test.done();
    },
    
    testListFmttrAMNumberFormatThreeLong: function(test) {
        var fmt = new ListFmt({
            locale: "tr-AM",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["bir", "два", "три"]), "bir, два ve три");
        test.done();
    },
    
    testListFmttrAMNumberFormatFourLong: function(test) {
        var fmt = new ListFmt({
            locale: "tr-AM",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["bir", "два", "три", "четыре"]), "bir, два, три ve четыре");
        test.done();
    },
    
    testListFmtUnitStyletrAMNumberFormatOneLong: function(test) {
        var fmt = new ListFmt({
            locale: "tr-AM",
            style: "unit",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["bir"]), "bir");
        test.done();
    },
    
    testListFmtUnitStyletrAMNumberFormatTwoLong: function(test) {
        var fmt = new ListFmt({
            locale: "tr-AM",
            style: "unit",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["bir", "два"]), "bir два");
        test.done();
    },
    
    testListFmtUnitStyletrAMNumberFormatThreeLong: function(test) {
        var fmt = new ListFmt({
            locale: "tr-AM",
            style: "unit",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["bir", "два", "три"]), "bir два три");
        test.done();
    },
    
    testListFmtUnitStyletrAMNumberFormatFourLong: function(test) {
        var fmt = new ListFmt({
            locale: "tr-AM",
            style: "unit",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["bir", "два", "три", "четыре"]), "bir два три четыре");
        test.done();
    },
    
    testListFmtUnitStyletrAMNumberFormatFiveLong: function(test) {
        var fmt = new ListFmt({
            locale: "tr-AM",
            style: "unit",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["bir", "два", "три", "четыре", "пять"]), "bir два три четыре пять");
        test.done();
    },
    // tr-AZ
    
    testListFmttrAMNumberFormatOneMedium: function(test) {
        var fmt = new ListFmt({
            locale: "tr-AZ",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["bir"]), "bir");
        test.done();
    },
    
    testListFmttrAZNumberFormatTwoMedium: function(test) {
        var fmt = new ListFmt({
            locale: "tr-AZ",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["bir", "два"]), "bir ve два");
        test.done();
    },
    
    testListFmttrAZNumberFormatThreeMedium: function(test) {
        var fmt = new ListFmt({
            locale: "tr-AZ",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["bir", "два", "три"]), "bir, два ve три");
        test.done();
    },
    
    testListFmttrAZNumberFormatFourMedium: function(test) {
        var fmt = new ListFmt({
            locale: "tr-AZ",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["bir", "два", "три", "четыре"]), "bir, два, три ve четыре");
        test.done();
    },
    
    testListFmtUnitStyletrAZNumberFormatOneMedium: function(test) {
        var fmt = new ListFmt({
            locale: "tr-AZ",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["bir"]), "bir");
        test.done();
    },
    
    testListFmtUnitStyletrAZNumberFormatTwoMedium: function(test) {
        var fmt = new ListFmt({
            locale: "tr-AZ",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["bir", "два"]), "bir два");
        test.done();
    },
    
    testListFmtUnitStyletrAZNumberFormatThreeMedium: function(test) {
        var fmt = new ListFmt({
            locale: "tr-AZ",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["bir", "два", "три"]), "bir два три");
        test.done();
    },
    
    testListFmtUnitStyletrAZNumberFormatFourMedium: function(test) {
        var fmt = new ListFmt({
            locale: "tr-AZ",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["bir", "два", "три", "четыре"]), "bir два три четыре");
        test.done();
    },
    
    testListFmtUnitStyletrAZNumberFormatFiveMedium: function(test) {
        var fmt = new ListFmt({
            locale: "tr-AZ",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["bir", "два", "три", "четыре", "пять"]), "bir два три четыре пять");
        test.done();
    },
    
    // tr-CY
    
    testListFmttrCYNumberFormatOneMedium: function(test) {
        var fmt = new ListFmt({
            locale: "tr-CY",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["bir"]), "bir");
        test.done();
    },
    
    testListFmttrCYNumberFormatTwoMedium: function(test) {
        var fmt = new ListFmt({
            locale: "tr-CY",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["bir", "два"]), "bir ve два");
        test.done();
    },
    
    testListFmttrCYNumberFormatThreeMedium: function(test) {
        var fmt = new ListFmt({
            locale: "tr-CY",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["bir", "два", "три"]), "bir, два ve три");
        test.done();
    },
    
    testListFmttrCYNumberFormatFourMedium: function(test) {
        var fmt = new ListFmt({
            locale: "tr-CY",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["bir", "два", "три", "четыре"]), "bir, два, три ve четыре");
        test.done();
    },
    
    testListFmtUnitStyletrCYNumberFormatOneMedium: function(test) {
        var fmt = new ListFmt({
            locale: "tr-CY",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["bir"]), "bir");
        test.done();
    },
    
    testListFmtUnitStyletrCYNumberFormatTwoMedium: function(test) {
        var fmt = new ListFmt({
            locale: "tr-CY",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["bir", "два"]), "bir два");
        test.done();
    },
    
    testListFmtUnitStyletrCYNumberFormatThreeMedium: function(test) {
        var fmt = new ListFmt({
            locale: "tr-CY",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["bir", "два", "три"]), "bir два три");
        test.done();
    },
    
    testListFmtUnitStyletrCYNumberFormatFourMedium: function(test) {
        var fmt = new ListFmt({
            locale: "tr-CY",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["bir", "два", "три", "четыре"]), "bir два три четыре");
        test.done();
    },
    
    testListFmtUnitStyletrCYNumberFormatFiveMedium: function(test) {
        var fmt = new ListFmt({
            locale: "tr-CY",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["bir", "два", "три", "четыре", "пять"]), "bir два три четыре пять");
        test.done();
    } 
};
