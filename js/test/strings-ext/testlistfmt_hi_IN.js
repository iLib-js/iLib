/*
 * testlistfmt_hi_IN.js - test the list formatter object
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

module.exports.testlistfmt_hi_IN = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    // hi-IN
    
    testListFmthiINNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "hi-IN"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["एक"]), "एक");
        test.done();
    },
    
    testListFmthiINNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "hi-IN"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["एक", "दो"]), "एक और दो");
        test.done();
    },
    
    testListFmthiINNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "hi-IN"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["एक", "दो", "तीन"]), "एक, दो और तीन");
        test.done();
    },
    
    testListFmthiINNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "hi-IN"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["एक", "दो", "तीन", "चार"]), "एक, दो, तीन और चार");
        test.done();
    },
    testListFmtUnitStylehiINNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "hi-IN",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["एक"]), "एक");
        test.done();
    },
    
    testListFmtUnitStylehiINNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "hi-IN",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["एक", "दो"]), "एक दो");
        test.done();
    },
    
    testListFmtUnitStylehiINNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "hi-IN",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["एक", "दो", "तीन"]), "एक, दो तीन");
        test.done();
    },
    
    testListFmtUnitStylehiINNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "hi-IN",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["एक", "दो", "तीन", "चार"]), "एक, दो, तीन चार");
        test.done();
    },
    testListFmtUnitStylehiINNumberFormatOneMedium: function(test) {
        var fmt = new ListFmt({
            locale: "hi-IN",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["एक"]), "एक");
        test.done();
    },
    
    testListFmtUnitStylehiINNumberFormatTwoMedium: function(test) {
        var fmt = new ListFmt({
            locale: "hi-IN",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["एक", "दो"]), "एक, दो");
        test.done();
    },
    
    testListFmtUnitStylehiINNumberFormatThreeMedium: function(test) {
        var fmt = new ListFmt({
            locale: "hi-IN",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["एक", "दो", "तीन"]), "एक, दो, तीन");
        test.done();
    },
    
    testListFmtUnitStylehiINNumberFormatFourMedium: function(test) {
        var fmt = new ListFmt({
            locale: "hi-IN",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["एक", "दो", "तीन", "चार"]), "एक, दो, तीन, चार");
        test.done();
    },
    testListFmtUnitStylehiINNumberFormatOneFull: function(test) {
        var fmt = new ListFmt({
            locale: "hi-IN",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["एक"]), "एक");
        test.done();
    },
    
    testListFmtUnitStylehiINNumberFormatTwoFull: function(test) {
        var fmt = new ListFmt({
            locale: "hi-IN",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["एक", "दो"]), "एक और दो");
        test.done();
    },
    
    testListFmtUnitStylehiINNumberFormatThreeFull: function(test) {
        var fmt = new ListFmt({
            locale: "hi-IN",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["एक", "दो", "तीन"]), "एक, दो, और तीन");
        test.done();
    },
    
    testListFmtUnitStylehiINNumberFormatFourFull: function(test) {
        var fmt = new ListFmt({
            locale: "hi-IN",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["एक", "दो", "तीन", "चार"]), "एक, दो, तीन, और चार");
        test.done();
    }   
};
