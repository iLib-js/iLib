/*
 * testlistfmt_sv.js - test the list formatter object
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
 * distrebuted under the License is distrebuted on an "AS IS" BASIS,
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

module.exports.testlistfmt_bs = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    // sv-FI  
    testListFmtsvFINumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "sv-FI"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ett"]), "ett");
        test.done();
    },
    
    testListFmtsvFINumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "sv-FI"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ett", "två"]), "ett och två");
        test.done();
    },
    
    testListFmtsvFINumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "sv-FI"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ett", "två", "tre"]), "ett, två och tre");
        test.done();
    },
    
    testListFmtsvFINumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "sv-FI"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ett", "två", "tre", "fyra"]), "ett, två, tre och fyra");
        test.done();
    },

    testListFmtUnitStylesvFINumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "sv-FI",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ett"]), "ett");
        test.done();
    },
    
    testListFmtUnitStylesvFINumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "sv-FI",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ett", "två"]), "ett två");
        test.done();
    },
    
    testListFmtUnitStylesvFINumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "sv-FI",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ett", "två", "tre"]), "ett två tre");
        test.done();
    },
    
    testListFmtUnitStylesvFINumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "sv-FI",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ett", "två", "tre", "fyra"]), "ett två tre fyra");
        test.done();
    },
    testListFmtUnitStylesvFINumberFormatOneFull: function(test) {
        var fmt = new ListFmt({
            locale: "sv-FI",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ett"]), "ett");
        test.done();
    },
    
    testListFmtUnitStylesvFINumberFormatTwoFull: function(test) {
        var fmt = new ListFmt({
            locale: "sv-FI",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ett", "två"]), "ett, två");
        test.done();
    },
    
    testListFmtUnitStylesvFINumberFormatThreeFull: function(test) {
        var fmt = new ListFmt({
            locale: "sv-FI",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ett", "två", "tre"]), "ett, två, tre");
        test.done();
    },
    
    testListFmtUnitStylesvFINumberFormatFourFull: function(test) {
        var fmt = new ListFmt({
            locale: "sv-FI",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ett", "två", "tre", "fyra"]), "ett, två, tre, fyra");
        test.done();
    },


    // sv-SE
    testListFmtsvSENumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "sv-SE"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ett"]), "ett");
        test.done();
    },
    
    testListFmtsvSENumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "sv-SE"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ett", "två"]), "ett och två");
        test.done();
    },
    
    testListFmtsvSENumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "sv-SE"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ett", "två", "tre"]), "ett, två och tre");
        test.done();
    },
    
    testListFmtsvSENumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "sv-SE"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ett", "två", "tre", "fyra"]), "ett, två, tre och fyra");
        test.done();
    },

    testListFmtUnitStylesvSENumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "sv-SE",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ett"]), "ett");
        test.done();
    },
    
    testListFmtUnitStylesvSENumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "sv-SE",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ett", "två"]), "ett två");
        test.done();
    },
    
    testListFmtUnitStylesvSENumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "sv-SE",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ett", "två", "tre"]), "ett två tre");
        test.done();
    },
    
    testListFmtUnitStylesvSENumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "sv-SE",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ett", "två", "tre", "fyra"]), "ett två tre fyra");
        test.done();
    },
    testListFmtUnitStylesvSENumberFormatOneMedium: function(test) {
        var fmt = new ListFmt({
            locale: "sv-SE",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ett"]), "ett");
        test.done();
    },
    
    testListFmtUnitStylesvSENumberFormatTwoMedium: function(test) {
        var fmt = new ListFmt({
            locale: "sv-SE",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ett", "två"]), "ett, två");
        test.done();
    },
    
    testListFmtUnitStylesvSENumberFormatThreeMedium: function(test) {
        var fmt = new ListFmt({
            locale: "sv-SE",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ett", "två", "tre"]), "ett, två, tre");
        test.done();
    },
    
    testListFmtUnitStylesvSENumberFormatFourMedium: function(test) {
        var fmt = new ListFmt({
            locale: "sv-SE",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ett", "två", "tre", "fyra"]), "ett, två, tre, fyra");
        test.done();
    }
};
