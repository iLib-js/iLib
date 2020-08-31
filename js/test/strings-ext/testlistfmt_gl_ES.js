/*
 * testlistfmt_gl_ES.js - test the list formatter object
 *
 * Copyright © 2020, JEDLSoft
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

module.exports.testlistfmt_gl_ES = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testListFmteuESNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "gl-ES"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un"]), "un");
        test.done();
    },
    testListFmteuESNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "gl-ES"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "dous"]), "un e dous");
        test.done();
    },
    testListFmteuESNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "gl-ES"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "dous", "tres"]), "un, dous e tres");
        test.done();
    },
    testListFmteuESNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "gl-ES"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "dous", "tres", "catro"]), "un, dous, tres e catro");
        test.done();
    },
    testListFmteuESNumberFormatFive: function(test) {
        var fmt = new ListFmt({
            locale: "gl-ES"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "dous", "tres", "catro", "cinco"]), "un, dous, tres, catro e cinco");
        test.done();
    },
    testListFmtUnitStyleeuESNumberFormatOneShort: function(test) {
        var fmt = new ListFmt({
            locale: "gl-ES",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un"]), "un");
        test.done();
    },
    testListFmtUnitStyleeuESNumberFormatTwoShort: function(test) {
        var fmt = new ListFmt({
            locale: "gl-ES",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "dous"]), "un, dous");
        test.done();
    },
    testListFmtUnitStyleeuESNumberFormatThreeShort: function(test) {
        var fmt = new ListFmt({
            locale: "gl-ES",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "dous", "tres"]), "un, dous, tres");
        test.done();
    },
    testListFmtUnitStyleeuESNumberFormatFourShort: function(test) {
        var fmt = new ListFmt({
            locale: "gl-ES",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "dous", "tres", "catro"]), "un, dous, tres, catro");
        test.done();
    },
    testListFmtUnitStyleeuESNumberFormatFiveShort: function(test) {
        var fmt = new ListFmt({
            locale: "gl-ES",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "dous", "tres", "catro", "cinco"]), "un, dous, tres, catro, cinco");
        test.done();
    },
    testListFmtUnitStyleeuESNumberFormatOneFull: function(test) {
        var fmt = new ListFmt({
            locale: "gl-ES",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un"]), "un");
        test.done();
    },
    testListFmtUnitStyleeuESNumberFormatTwoFull: function(test) {
        var fmt = new ListFmt({
            locale: "gl-ES",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "dous"]), "un e dous");
        test.done();
    },
    testListFmtUnitStyleeuESNumberFormatThreeFull: function(test) {
        var fmt = new ListFmt({
            locale: "gl-ES",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "dous", "tres"]), "un, dous e tres");
        test.done();
    },
    testListFmtUnitStyleeuESNumberFormatFourFull: function(test) {
        var fmt = new ListFmt({
            locale: "gl-ES",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "dous", "tres", "catro"]), "un, dous, tres e catro");
        test.done();
    },
    testListFmtUnitStyleeuESNumberFormatFiveFull: function(test) {
        var fmt = new ListFmt({
            locale: "gl-ES",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "dous", "tres", "catro", "cinco"]), "un, dous, tres, catro e cinco");
        test.done();
    },
    testListFmtORStyleeuESNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "gl-ES",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un"]), "un");
        test.done();
    },
    testListFmtORStyleeuESNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "gl-ES",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "dous"]), "un ou dous");
        test.done();
    },
    testListFmtORStyleeuESNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "gl-ES",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "dous", "tres"]), "un, dous ou tres");
        test.done();
    },
    testListFmtORStyleeuESNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "gl-ES",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "dous", "tres", "catro"]), "un, dous, tres ou catro");
        test.done();
    },
    testListFmtORStyleeuESNumberFormatFiveFull: function(test) {
        var fmt = new ListFmt({
            locale: "gl-ES",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "dous", "tres", "catro", "cinco"]), "un, dous, tres, catro ou cinco");
        test.done();
    }
};