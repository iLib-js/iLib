/*
 * testlistfmt_el.js - test the list formatter object
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

module.exports.testlistfmt_it = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    // it-IT
    
    testListFmtitITNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "it-IT"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno"]), "uno");
        test.done();
    },
    
    testListFmtitITNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "it-IT"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "due"]), "uno e due");
        test.done();
    },
    
    testListFmtitITNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "it-IT"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "due", "tre"]), "uno, due e tre");
        test.done();
    },
    
    testListFmtitITNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "it-IT"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "due", "tre", "quattro"]), "uno, due, tre e quattro");
        test.done();
    },
    
    testListFmtitITUnitStyleName: function(test) {
        var fmt = new ListFmt({
            locale: "it-IT",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.getStyle(), "unit");
        test.done();
    },
    
    testListFmtUnitStyleitITNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "it-IT",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno"]), "uno");
        test.done();
    },
    
    testListFmtUnitStyleitITNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "it-IT",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "due"]), "uno due");
        test.done();
    },
    
    testListFmtUnitStyleitITNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "it-IT",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "due", "tre"]), "uno due tre");
        test.done();
    },
    
    testListFmtUnitStyleitITNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "it-IT",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "due", "tre", "quattro"]), "uno due tre quattro");
        test.done();
    },
    
    testListFmtUnitStyleitITNumberFormatFive: function(test) {
        var fmt = new ListFmt({
            locale: "it-IT",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "due", "tre", "quattro", "cinque"]), "uno due tre quattro cinque");
        test.done();
    },
    
    testListFmtUnitStyleitITNumberFormatOneMedium: function(test) {
        var fmt = new ListFmt({
            locale: "it-IT",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno"]), "uno");
        test.done();
    },
    
    testListFmtUnitStyleitITNumberFormatTwoMedium: function(test) {
        var fmt = new ListFmt({
            locale: "it-IT",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "due"]), "uno e due");
        test.done();
    },
    
    testListFmtUnitStyleitITNumberFormatThreeMedium: function(test) {
        var fmt = new ListFmt({
            locale: "it-IT",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "due", "tre"]), "uno, due e tre");
        test.done();
    },
    
    testListFmtUnitStyleitITNumberFormatFourMedium: function(test) {
        var fmt = new ListFmt({
            locale: "it-IT",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "due", "tre", "quattro"]), "uno, due, tre e quattro");
        test.done();
    },
    
    testListFmtUnitStyleitITNumberFormatFiveMedium: function(test) {
        var fmt = new ListFmt({
            locale: "it-IT",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "due", "tre", "quattro", "cinque"]), "uno, due, tre, quattro e cinque");
        test.done();
    },










    // it-CH
    
    testListFmtitCHNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "it-CH"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno"]), "uno");
        test.done();
    },
    
    testListFmtitCHNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "it-CH"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "due"]), "uno e due");
        test.done();
    },
    
    testListFmtitCHNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "it-CH"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "due", "tre"]), "uno, due e tre");
        test.done();
    },
    
    testListFmtitCHNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "it-CH"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "due", "tre", "quattro"]), "uno, due, tre e quattro");
        test.done();
    },
    
    testListFmtitCHUnitStyleName: function(test) {
        var fmt = new ListFmt({
            locale: "it-CH",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.getStyle(), "unit");
        test.done();
    },
    
    testListFmtUnitStyleitCHNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "it-CH",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno"]), "uno");
        test.done();
    },
    
    testListFmtUnitStyleitCHNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "it-CH",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "due"]), "uno due");
        test.done();
    },
    
    testListFmtUnitStyleitCHNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "it-CH",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "due", "tre"]), "uno due tre");
        test.done();
    },
    
    testListFmtUnitStyleitCHNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "it-CH",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "due", "tre", "quattro"]), "uno due tre quattro");
        test.done();
    },
    
    testListFmtUnitStyleitCHNumberFormatFive: function(test) {
        var fmt = new ListFmt({
            locale: "it-CH",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "due", "tre", "quattro", "cinque"]), "uno due tre quattro cinque");
        test.done();
    },
    
    testListFmtUnitStyleitCHNumberFormatOneFull: function(test) {
        var fmt = new ListFmt({
            locale: "it-CH",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno"]), "uno");
        test.done();
    },
    
    testListFmtUnitStyleitCHNumberFormatTwoFull: function(test) {
        var fmt = new ListFmt({
            locale: "it-CH",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "due"]), "uno e due");
        test.done();
    },
    
    testListFmtUnitStyleitCHNumberFormatThreeFull: function(test) {
        var fmt = new ListFmt({
            locale: "it-CH",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "due", "tre"]), "uno, due e tre");
        test.done();
    },
    
    testListFmtUnitStyleitCHNumberFormatFourFull: function(test) {
        var fmt = new ListFmt({
            locale: "it-CH",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "due", "tre", "quattro"]), "uno, due, tre e quattro");
        test.done();
    },
    
    testListFmtUnitStyleitCHNumberFormatFiveFull: function(test) {
        var fmt = new ListFmt({
            locale: "it-CH",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "due", "tre", "quattro", "cinque"]), "uno, due, tre, quattro e cinque");
        test.done();
    }

};
