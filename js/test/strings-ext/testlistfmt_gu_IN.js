/*
 * testlistfmt_gu_IN.js - test the list formatter object
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

if (typeof(ilib) === "undefined") {
    var ilib = require("../../lib/ilib.js");
}

module.exports.testlistfmt_gu_IN = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    // gu-IN
    
    testListFmtguINNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "gu-IN"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["એક"]), "એક");
        test.done();
    },
    
    testListFmtguINNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "gu-IN"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["એક", "બે"]), "એક અને બે");
        test.done();
    },
    
    testListFmtguINNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "gu-IN"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["એક", "બે", "ત્રણ"]), "એક, બે અને ત્રણ");
        test.done();
    },
    
    testListFmtguINNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "gu-IN"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["એક", "બે", "ત્રણ", "ચાર"]), "એક, બે, ત્રણ અને ચાર");
        test.done();
    },
    testListFmtUnitStyleguINNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "gu-IN",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["એક"]), "એક");
        test.done();
    },
    
    testListFmtUnitStyleguINNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "gu-IN",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["એક", "બે"]), "એક, બે");
        test.done();
    },
    
    testListFmtUnitStyleguINNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "gu-IN",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["એક", "બે", "ત્રણ"]), "એક, બે, ત્રણ");
        test.done();
    },
    
    testListFmtUnitStyleguINNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "gu-IN",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["એક", "બે", "ત્રણ", "ચાર"]), "એક, બે, ત્રણ, ચાર");
        test.done();
    },
    testListFmtUnitStyleguINNumberFormatOneMedium: function(test) {
        var fmt = new ListFmt({
            locale: "gu-IN",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["એક"]), "એક");
        test.done();
    },
    
    testListFmtUnitStyleguINNumberFormatTwoMedium: function(test) {
        var fmt = new ListFmt({
            locale: "gu-IN",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["એક", "બે"]), "એક, બે");
        test.done();
    },
    
    testListFmtUnitStyleguINNumberFormatThreeMedium: function(test) {
        var fmt = new ListFmt({
            locale: "gu-IN",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["એક", "બે", "ત્રણ"]), "એક, બે, ત્રણ");
        test.done();
    },
    
    testListFmtUnitStyleguINNumberFormatFourMedium: function(test) {
        var fmt = new ListFmt({
            locale: "gu-IN",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["એક", "બે", "ત્રણ", "ચાર"]), "એક, બે, ત્રણ, ચાર");
        test.done();
    }
};
