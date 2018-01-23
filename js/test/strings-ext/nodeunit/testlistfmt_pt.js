/*
 * testlistfmt_pt.js - test the list formatter object
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
    var ListFmt = require("../../../lib/ListFmt.js");
}

if (typeof(ilib) === "undefined") {
    var ilib = require("../../../lib/ilib.js");
}

module.exports.testlistfmt_pt = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    // pt-BR
    testListFmtptBRNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "pt-BR"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["um"]), "um");
        test.done();
    },
    
    testListFmtptBRNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "pt-BR"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["um", "dois"]), "um e dois");
        test.done();
    },
    
    testListFmtptBRNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "pt-BR"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["um", "dois", "três"]), "um, dois e três");
        test.done();
    },
    
    testListFmtptBRNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "pt-BR"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["um", "dois", "três", "quatro"]), "um, dois, três e quatro");
        test.done();
    },
    
    testListFmtptBRUnitStyleName: function(test) {
        var fmt = new ListFmt({
            locale: "pt-BR",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.getStyle(), "unit");
        test.done();
    },
    
    testListFmtUnitStyleptBRNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "pt-BR",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["um"]), "um");
        test.done();
    },
    
    testListFmtUnitStyleptBRNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "pt-BR",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["um", "dois"]), "um e dois");
        test.done();
    },
    
    testListFmtUnitStyleptBRNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "pt-BR",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["um", "dois", "três"]), "um, dois e três");
        test.done();
    },
    
    testListFmtUnitStyleptBRNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "pt-BR",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["um", "dois", "três", "quatro"]), "um, dois, três e quatro");
        test.done();
    },
    
    testListFmtUnitStyleptBRNumberFormatFive: function(test) {
        var fmt = new ListFmt({
            locale: "pt-BR",
            style:"unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["um", "dois", "três", "quatro", "cinco"]), "um, dois, três, quatro e cinco");
        test.done();
    },
    
    //pt-AO
    testListFmtptAONumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "pt-AO"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["um"]), "um");
        test.done();
    },
    
    testListFmtptAONumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "pt-AO"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["um", "dois"]), "um e dois");
        test.done();
    },
    
    testListFmtptAONumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "pt-AO"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["um", "dois", "três"]), "um, dois e três");
        test.done();
    },
    
    testListFmtptAONumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "pt-AO"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["um", "dois", "três", "quatro"]), "um, dois, três e quatro");
        test.done();
    },

    //pt-GQ
    testListFmtptGQNumberFormatOneMedium: function(test) {
        var fmt = new ListFmt({
            locale: "pt-GQ",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["um"]), "um");
        test.done();
    },
    
    testListFmtptGQNumberFormatTwoMedium: function(test) {
        var fmt = new ListFmt({
            locale: "pt-GQ",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["um", "dois"]), "um e dois");
        test.done();
    },
    
    testListFmtptGQNumberFormatThreeMedium: function(test) {
        var fmt = new ListFmt({
            locale: "pt-GQ",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["um", "dois", "três"]), "um, dois e três");
        test.done();
    },
    
    testListFmtptGQNumberFormatFourMedium: function(test) {
        var fmt = new ListFmt({
            locale: "pt-GQ",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["um", "dois", "três", "quatro"]), "um, dois, três e quatro");
        test.done();
    },

    //pt-CV
    testListFmtptCVNumberFormatOneLong: function(test) {
        var fmt = new ListFmt({
            locale: "pt-CV",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["um"]), "um");
        test.done();
    },
    
    testListFmtptCVNumberFormatTwoLong: function(test) {
        var fmt = new ListFmt({
            locale: "pt-CV",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["um", "dois"]), "um e dois");
        test.done();
    },
    
    testListFmtptCVNumberFormatThreeLong: function(test) {
        var fmt = new ListFmt({
            locale: "pt-CV",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["um", "dois", "três"]), "um, dois e três");
        test.done();
    },
    
    testListFmtptCVNumberFormatFourLong: function(test) {
        var fmt = new ListFmt({
            locale: "pt-CV",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["um", "dois", "três", "quatro"]), "um, dois, três e quatro");
        test.done();
    },
    //pt-PT
    testListFmtptPTNumberFormatOneFull: function(test) {
        var fmt = new ListFmt({
            locale: "pt-PT",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["um"]), "um");
        test.done();
    },
    
    testListFmtptPTNumberFormatTwoFull: function(test) {
        var fmt = new ListFmt({
            locale: "pt-PT",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["um", "dois"]), "um e dois");
        test.done();
    },
    
    testListFmtptPTNumberFormatThreeFull: function(test) {
        var fmt = new ListFmt({
            locale: "pt-PT",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["um", "dois", "três"]), "um, dois e três");
        test.done();
    },
    
    testListFmtptPTNumberFormatFourFull: function(test) {
        var fmt = new ListFmt({
            locale: "pt-PT",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["um", "dois", "três", "quatro"]), "um, dois, três e quatro");
        test.done();
    }
};
