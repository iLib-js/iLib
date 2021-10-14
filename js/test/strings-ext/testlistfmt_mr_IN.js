/*
 * testlistfmt_mr_IN.js - test the list formatter object
 *
 * Copyright © 2017, 2020 JEDLSoft
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

module.exports.testlistfmt_mr_IN = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    // mr-IN
    
    testListFmtmrINNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "mr-IN"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["एक"]), "एक");
        test.done();
    },
    
    testListFmtmrINNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "mr-IN"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["एक", "दोन"]), "एक आणि दोन");
        test.done();
    },
    
    testListFmtmrINNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "mr-IN"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["एक", "दोन", "तीन"]), "एक, दोन आणि तीन");
        test.done();
    },
    
    testListFmtmrINNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "mr-IN"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["एक", "दोन", "तीन", "चार"]), "एक, दोन, तीन आणि चार");
        test.done();
    },
    testListFmtUnitStylemrINNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "mr-IN",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["एक"]), "एक");
        test.done();
    },
    
    testListFmtUnitStylemrINNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "mr-IN",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["एक", "दोन"]), "एक, दोन");
        test.done();
    },
    
    testListFmtUnitStylemrINNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "mr-IN",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["एक", "दोन", "तीन"]), "एक, दोन, तीन");
        test.done();
    },
    
    testListFmtUnitStylemrINNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "mr-IN",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["एक", "दोन", "तीन", "चार"]), "एक, दोन, तीन, चार");
        test.done();
    },
    testListFmtUnitStylemrINNumberFormatOneFull: function(test) {
        var fmt = new ListFmt({
            locale: "mr-IN",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["एक"]), "एक");
        test.done();
    },
    
    testListFmtUnitStylemrINNumberFormatTwoFull: function(test) {
        var fmt = new ListFmt({
            locale: "mr-IN",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["एक", "दोन"]), "एक, दोन");
        test.done();
    },
    
    testListFmtUnitStylemrINNumberFormatThreeFull: function(test) {
        var fmt = new ListFmt({
            locale: "mr-IN",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["एक", "दोन", "तीन"]), "एक, दोन, तीन");
        test.done();
    },
    
    testListFmtUnitStylemrINNumberFormatFourFull: function(test) {
        var fmt = new ListFmt({
            locale: "mr-IN",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["एक", "दोन", "तीन", "चार"]), "एक, दोन, तीन, चार");
        test.done();
    }

};
