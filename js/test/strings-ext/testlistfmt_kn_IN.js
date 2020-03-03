/*
 * testlistfmt_kn_IN.js - test the list formatter object
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

module.exports.testlistfmt_kn_IN = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    // kn-IN
    
    testListFmtknINNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "kn-IN"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ಒಂದು"]), "ಒಂದು");
        test.done();
    },
    
    testListFmtknINNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "kn-IN"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ಒಂದು", "ಎರಡು"]), "ಒಂದು ಮತ್ತು ಎರಡು");
        test.done();
    },
    
    testListFmtknINNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "kn-IN"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ಒಂದು", "ಎರಡು", "ಮೂರು"]), "ಒಂದು, ಎರಡು, ಮತ್ತು ಮೂರು");
        test.done();
    },
    
    testListFmtknINNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "kn-IN"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ಒಂದು", "ಎರಡು", "ಮೂರು", "ನಾಲ್ಕು"]), "ಒಂದು, ಎರಡು, ಮೂರು, ಮತ್ತು ನಾಲ್ಕು");
        test.done();
    },
    testListFmtUnitStyleknINNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "kn-IN",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ಒಂದು"]), "ಒಂದು");
        test.done();
    },
    
    testListFmtUnitStyleknINNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "kn-IN",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ಒಂದು", "ಎರಡು"]), "ಒಂದು ಎರಡು");
        test.done();
    },
    
    testListFmtUnitStyleknINNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "kn-IN",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ಒಂದು", "ಎರಡು", "ಮೂರು"]), "ಒಂದು, ಎರಡು, ಮೂರು");
        test.done();
    },
    
    testListFmtUnitStyleknINNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "kn-IN",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ಒಂದು", "ಎರಡು", "ಮೂರು", "ನಾಲ್ಕು"]), "ಒಂದು, ಎರಡು, ಮೂರು, ನಾಲ್ಕು");
        test.done();
    },
    testListFmtUnitStyleknINNumberFormatOneMedium: function(test) {
        var fmt = new ListFmt({
            locale: "kn-IN",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ಒಂದು"]), "ಒಂದು");
        test.done();
    },
    
    testListFmtUnitStyleknINNumberFormatTwoMedium: function(test) {
        var fmt = new ListFmt({
            locale: "kn-IN",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ಒಂದು", "ಎರಡು"]), "ಒಂದು, ಎರಡು");
        test.done();
    },
    
    testListFmtUnitStyleknINNumberFormatThreeMedium: function(test) {
        var fmt = new ListFmt({
            locale: "kn-IN",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ಒಂದು", "ಎರಡು", "ಮೂರು"]), "ಒಂದು, ಎರಡು, ಮೂರು");
        test.done();
    },
    
    testListFmtUnitStyleknINNumberFormatFourMedium: function(test) {
        var fmt = new ListFmt({
            locale: "kn-IN",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ಒಂದು", "ಎರಡು", "ಮೂರು", "ನಾಲ್ಕು"]), "ಒಂದು, ಎರಡು, ಮೂರು, ನಾಲ್ಕು");
        test.done();
    },
    testListFmtUnitStyleelGRNumberFormatOneFull: function(test) {
        var fmt = new ListFmt({
            locale: "kn-IN",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ಒಂದು"]), "ಒಂದು");
        test.done();
    },
    
    testListFmtUnitStyleelGRNumberFormatTwoFull: function(test) {
        var fmt = new ListFmt({
            locale: "kn-IN",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ಒಂದು", "ಎರಡು"]), "ಒಂದು, ಎರಡು");
        test.done();
    },
    
    testListFmtUnitStyleelGRNumberFormatThreeFull: function(test) {
        var fmt = new ListFmt({
            locale: "kn-IN",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ಒಂದು", "ಎರಡು", "ಮೂರು"]), "ಒಂದು, ಎರಡು, ಮೂರು");
        test.done();
    },
    
    testListFmtUnitStyleelGRNumberFormatFourFull: function(test) {
        var fmt = new ListFmt({
            locale: "kn-IN",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ಒಂದು", "ಎರಡು", "ಮೂರು", "ನಾಲ್ಕು"]), "ಒಂದು, ಎರಡು, ಮೂರು, ನಾಲ್ಕು");
        test.done();
    }
};
