/*
 * testlistfmt_nb_NO.js - test the list formatter object
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

module.exports.testlistfmt_nb_NO = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    // nb-NO
    testListFmtnbNONumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "nb-NO"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ett"]), "ett");
        test.done();
    },
    
    testListFmtnbNONumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "nb-NO"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ett", "to"]), "ett og to");
        test.done();
    },
    
    testListFmtnbNONumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "nb-NO"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ett", "to", "tre"]), "ett, to og tre");
        test.done();
    },
    
    testListFmtnbNONumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "nb-NO"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ett", "to", "tre", "fire"]), "ett, to, tre og fire");
        test.done();
    },
    testListFmtUnitStylenbNONumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "nb-NO",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ett"]), "ett");
        test.done();
    },
    
    testListFmtUnitStylenbNONumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "nb-NO",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ett", "to"]), "ett, to");
        test.done();
    },
    
    testListFmtUnitStylenbNONumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "nb-NO",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ett", "to", "tre"]), "ett, to, tre");
        test.done();
    },
    
    testListFmtUnitStylenbNONumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "nb-NO",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ett", "to", "tre", "fire"]), "ett, to, tre, fire");
        test.done();
    },
    testListFmtUnitStylenbNONumberFormatOneMedium: function(test) {
        var fmt = new ListFmt({
            locale: "nb-NO",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ett"]), "ett");
        test.done();
    },
    
    testListFmtUnitStylenbNONumberFormatTwoMedium: function(test) {
        var fmt = new ListFmt({
            locale: "nb-NO",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ett", "to"]), "ett, to");
        test.done();
    },
    
    testListFmtUnitStylenbNONumberFormatThreeMedium: function(test) {
        var fmt = new ListFmt({
            locale: "nb-NO",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ett", "to", "tre"]), "ett, to, tre");
        test.done();
    },
    
    testListFmtUnitStylenbNONumberFormatFourMedium: function(test) {
        var fmt = new ListFmt({
            locale: "nb-NO",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ett", "to", "tre", "fire"]), "ett, to, tre, fire");
        test.done();
    },
    testListFmtUnitStylenbNONumberFormatOneFull: function(test) {
        var fmt = new ListFmt({
            locale: "nb-NO",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ett"]), "ett");
        test.done();
    },
    
    testListFmtUnitStylenbNONumberFormatTwoFull: function(test) {
        var fmt = new ListFmt({
            locale: "nb-NO",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ett", "to"]), "ett og to");
        test.done();
    },
    
    testListFmtUnitStylenbNONumberFormatThreeFull: function(test) {
        var fmt = new ListFmt({
            locale: "nb-NO",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ett", "to", "tre"]), "ett, to og tre");
        test.done();
    },
    
    testListFmtUnitStylenbNONumberFormatFourFull: function(test) {
        var fmt = new ListFmt({
            locale: "nb-NO",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ett", "to", "tre", "fire"]), "ett, to, tre og fire");
        test.done();
    }
};
