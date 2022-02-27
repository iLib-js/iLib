/*
 * testlistfmt_lb_LU.js - test the list formatter object
 *
 * Copyright © 2022, JEDLSoft
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

module.exports.testlistfmt_lb_LU = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testListFmtNumberFormatOne_lb_LU: function(test) {
        var fmt = new ListFmt({
            locale: "lb-LU"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["eent"]), "eent");
        test.done();
    },
    testListFmtNumberFormatTwo_lb_LU: function(test) {
        var fmt = new ListFmt({
            locale: "lb-LU"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["eent", "zwee"]), "eent a(n) zwee");
        test.done();
    },
    testListFmtNumberFormatThree_lb_LU: function(test) {
        var fmt = new ListFmt({
            locale: "lb-LU"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["eent", "zwee", "dräi"]), "eent, zwee a(n) dräi");
        test.done();
    },
    testListFmtNumberFormatFour_lb_LU: function(test) {
        var fmt = new ListFmt({
            locale: "lb-LU"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["eent", "zwee", "dräi", "véier"]), "eent, zwee, dräi a(n) véier");
        test.done();
    },
    testListFmtNumberFormatFive_lb_LU: function(test) {
        var fmt = new ListFmt({
            locale: "lb-LU"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["eent", "zwee", "dräi", "véier", "fënnef"]), "eent, zwee, dräi, véier a(n) fënnef");
        test.done();
    },
    testListFmtUnitStyleNumberFormatOneShort_lb_LU: function(test) {
        var fmt = new ListFmt({
            locale: "lb-LU",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["eent"]), "eent");
        test.done();
    },
    testListFmtUnitStyleNumberFormatTwoShort_lb_LU: function(test) {
        var fmt = new ListFmt({
            locale: "lb-LU",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["eent", "zwee"]), "eent, zwee");
        test.done();
    },
    testListFmtUnitStyleNumberFormatThreeShort_lb_LU: function(test) {
        var fmt = new ListFmt({
            locale: "lb-LU",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["eent", "zwee", "dräi"]), "eent, zwee, dräi");
        test.done();
    },
    testListFmtUnitStyleNumberFormatFourShort_lb_LU: function(test) {
        var fmt = new ListFmt({
            locale: "lb-LU",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["eent", "zwee", "dräi", "véier"]), "eent, zwee, dräi, véier");
        test.done();
    },
    testListFmtUnitStyleNumberFormatFiveShort_lb_LU: function(test) {
        var fmt = new ListFmt({
            locale: "lb-LU",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["eent", "zwee", "dräi", "véier", "véier"]), "eent, zwee, dräi, véier, véier");
        test.done();
    },
    testListFmtUnitStyleNumberFormatOneFull_lb_LU: function(test) {
        var fmt = new ListFmt({
            locale: "lb-LU",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["eent"]), "eent");
        test.done();
    },
    testListFmtUnitStyleNumberFormatTwoFull_lb_LU: function(test) {
        var fmt = new ListFmt({
            locale: "lb-LU",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["eent", "zwee"]), "eent, zwee");
        test.done();
    },
    testListFmtUnitStyleNumberFormatThreeFull_lb_LU: function(test) {
        var fmt = new ListFmt({
            locale: "lb-LU",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["eent", "zwee", "dräi"]), "eent, zwee, dräi");
        test.done();
    },
    testListFmtUnitStyleNumberFormatFourFull_lb_LU: function(test) {
        var fmt = new ListFmt({
            locale: "lb-LU",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["eent", "zwee", "dräi", "véier"]), "eent, zwee, dräi, véier");
        test.done();
    },
    testListFmtUnitStyleNumberFormatFiveFull_lb_LU: function(test) {
        var fmt = new ListFmt({
            locale: "lb-LU",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["eent", "zwee", "dräi", "véier", "véier"]), "eent, zwee, dräi, véier, véier");
        test.done();
    },
    testListFmtORStyleNumberFormatOne_lb_LU: function(test) {
        var fmt = new ListFmt({
            locale: "lb-LU",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["eent"]), "eent");
        test.done();
    },
    testListFmtORStyleNumberFormatTwo_lb_LU: function(test) {
        var fmt = new ListFmt({
            locale: "lb-LU",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["eent", "zwee"]), "eent oder zwee");
        test.done();
    },
    testListFmtORStyleNumberFormatThree_lb_LU: function(test) {
        var fmt = new ListFmt({
            locale: "lb-LU",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["eent", "zwee", "dräi"]), "eent, zwee, oder dräi");
        test.done();
    },
    testListFmtORStyleNumberFormatFour_lb_LU: function(test) {
        var fmt = new ListFmt({
            locale: "lb-LU",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["eent", "zwee", "dräi", "véier"]), "eent, zwee, dräi, oder véier");
        test.done();
    },
    testListFmtORStyleNumberFormatFiveFull_lb_LU: function(test) {
        var fmt = new ListFmt({
            locale: "lb-LU",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["eent", "zwee", "dräi", "véier", "véier"]), "eent, zwee, dräi, véier, oder véier");
        test.done();
    },
    testListFmtORStyleNumberFormatShortFiveFull_lb_LU: function(test) {
        var fmt = new ListFmt({
            locale: "lb-LU",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["eent", "zwee", "dräi", "véier", "véier"]), "eent, zwee, dräi, véier, oder véier");
        test.done();
    }
};