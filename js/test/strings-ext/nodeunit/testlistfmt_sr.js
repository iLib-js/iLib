/*
 * testlistfmt_sr.js - test the list formatter object
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

module.exports.testlistfmt_sr = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    // sr-Cyrl-RS
    
    testListFmtsrCyrlRSNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "sr-Cyrl-RS"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["један"]), "један");
        test.done();
    },
    
    testListFmtsrCyrlRSNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "sr-Cyrl-RS"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["један", "два"]), "један и два");
        test.done();
    },
    
    testListFmtsrCyrlRSNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "sr-Cyrl-RS"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["један", "два", "три"]), "један, два и три");
        test.done();
    },
    
    testListFmtsrCyrlRSNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "sr-Cyrl-RS"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["један", "два", "три", "четири"]), "један, два, три и четири");
        test.done();
    },
    testListFmtUnitStylesrCyrlRSNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "sr-Cyrl-RS",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["један"]), "један");
        test.done();
    },
    
    testListFmtUnitStylesrCyrlRSNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "sr-Cyrl-RS",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["један", "два"]), "један и два");
        test.done();
    },
    
    testListFmtUnitStylesrCyrlRSNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "sr-Cyrl-RS",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["један", "два", "три"]), "један, два и три");
        test.done();
    },
    
    testListFmtUnitStylesrCyrlRSNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "sr-Cyrl-RS",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["један", "два", "три", "четири"]), "један, два, три и четири");
        test.done();
    },
    testListFmtUnitStylesrCyrlRSNumberFormatOneMedium: function(test) {
        var fmt = new ListFmt({
            locale: "sr-Cyrl-RS",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["један"]), "један");
        test.done();
    },
    
    testListFmtUnitStylesrCyrlRSNumberFormatTwoMedium: function(test) {
        var fmt = new ListFmt({
            locale: "sr-Cyrl-RS",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["један", "два"]), "један и два");
        test.done();
    },
    
    testListFmtUnitStylesrCyrlRSNumberFormatThreeMedium: function(test) {
        var fmt = new ListFmt({
            locale: "sr-Cyrl-RS",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["један", "два", "три"]), "један, два и три");
        test.done();
    },
    
    testListFmtUnitStylesrCyrlRSNumberFormatFourMedium: function(test) {
        var fmt = new ListFmt({
            locale: "sr-Cyrl-RS",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["један", "два", "три", "четири"]), "један, два, три и четири");
        test.done();
    },

    // sr-Latn-RS
    
    testListFmtsrLatnRSNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "sr-Latn-RS"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["један"]), "један");
        test.done();
    },
    
    testListFmtsrLatnRSNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "sr-Latn-RS"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["један", "два"]), "један i два");
        test.done();
    },
    
    testListFmtsrLatnRSNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "sr-Latn-RS"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["један", "два", "три"]), "један, два i три");
        test.done();
    },
    
    testListFmtsrLatnRSNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "sr-Latn-RS"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["један", "два", "три", "четири"]), "један, два, три i четири");
        test.done();
    },
    testListFmtUnitStylesrLatnRSNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "sr-Latn-RS",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["један"]), "један");
        test.done();
    },
    
    testListFmtUnitStylesrLatnRSNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "sr-Latn-RS",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["један", "два"]), "један i два");
        test.done();
    },
    
    testListFmtUnitStylesrLatnRSNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "sr-Latn-RS",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["један", "два", "три"]), "један, два i три");
        test.done();
    },
    
    testListFmtUnitStylesrLatnRSNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "sr-Latn-RS",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["један", "два", "три", "четири"]), "један, два, три i четири");
        test.done();
    },
    testListFmtUnitStylesrLatnRSNumberFormatOneMedium: function(test) {
        var fmt = new ListFmt({
            locale: "sr-Latn-RS",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["један"]), "један");
        test.done();
    },
    
    testListFmtUnitStylesrLatnRSNumberFormatTwoMedium: function(test) {
        var fmt = new ListFmt({
            locale: "sr-Latn-RS",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["један", "два"]), "један i два");
        test.done();
    },
    
    testListFmtUnitStylesrLatnRSNumberFormatThreeMedium: function(test) {
        var fmt = new ListFmt({
            locale: "sr-Latn-RS",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["један", "два", "три"]), "један, два i три");
        test.done();
    },
    
    testListFmtUnitStylesrLatnRSNumberFormatFourMedium: function(test) {
        var fmt = new ListFmt({
            locale: "sr-Latn-RS",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["један", "два", "три", "четири"]), "један, два, три i четири");
        test.done();
    }
};
