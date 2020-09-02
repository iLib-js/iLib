/*
 * testlistfmt_ca.js - test the list formatter object
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

module.exports.testlistfmt_ca = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    //// ca-AD ////
    testListFmtcaADNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "ca-AD"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un"]), "un");
        test.done();
    },
    testListFmtcaADNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "ca-AD"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "dos"]), "un i dos");
        test.done();
    },
    testListFmtcaADNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "ca-AD"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "dos", "tres"]), "un, dos i tres");
        test.done();
    },
    testListFmtcaADNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "ca-AD"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "dos", "tres", "quatre"]), "un, dos, tres i quatre");
        test.done();
    },
    testListFmtcaADNumberFormatFive: function(test) {
        var fmt = new ListFmt({
            locale: "ca-AD"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "dos", "tres", "quatre", "cinc"]), "un, dos, tres, quatre i cinc");
        test.done();
    },
    testListFmtUnitStylecaADNumberFormatOneShort: function(test) {
        var fmt = new ListFmt({
            locale: "ca-AD",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un"]), "un");
        test.done();
    },
    testListFmtUnitStylecaADNumberFormatTwoShort: function(test) {
        var fmt = new ListFmt({
            locale: "ca-AD",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "dos"]), "un i dos");
        test.done();
    },
    testListFmtUnitStylecaADNumberFormatThreeShort: function(test) {
        var fmt = new ListFmt({
            locale: "ca-AD",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "dos", "tres"]), "un, dos i tres");
        test.done();
    },
    testListFmtUnitStylecaADNumberFormatFourShort: function(test) {
        var fmt = new ListFmt({
            locale: "ca-AD",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "dos", "tres", "quatre"]), "un, dos, tres i quatre");
        test.done();
    },
    testListFmtUnitStylecaADNumberFormatFiveShort: function(test) {
        var fmt = new ListFmt({
            locale: "ca-AD",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "dos", "tres", "quatre", "cinc"]), "un, dos, tres, quatre i cinc");
        test.done();
    },
    testListFmtUnitStylecaADNumberFormatOneFull: function(test) {
        var fmt = new ListFmt({
            locale: "ca-AD",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un"]), "un");
        test.done();
    },
    testListFmtUnitStylecaADNumberFormatTwoFull: function(test) {
        var fmt = new ListFmt({
            locale: "ca-AD",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "dos"]), "un i dos");
        test.done();
    },
    testListFmtUnitStylecaADNumberFormatThreeFull: function(test) {
        var fmt = new ListFmt({
            locale: "ca-AD",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "dos", "tres"]), "un, dos i tres");
        test.done();
    },
    testListFmtUnitStylecaADNumberFormatFourFull: function(test) {
        var fmt = new ListFmt({
            locale: "ca-AD",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "dos", "tres", "quatre"]), "un, dos, tres i quatre");
        test.done();
    },
    testListFmtUnitStylecaADNumberFormatFiveFull: function(test) {
        var fmt = new ListFmt({
            locale: "ca-AD",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "dos", "tres", "quatre", "cinc"]), "un, dos, tres, quatre i cinc");
        test.done();
    },
    testListFmtORStylecaADNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "ca-AD",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un"]), "un");
        test.done();
    },
    testListFmtORStylecaADNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "ca-AD",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "dos"]), "un o dos");
        test.done();
    },
    testListFmtORStylecaADNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "ca-AD",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "dos", "tres"]), "un, dos o tres");
        test.done();
    },
    testListFmtORStylecaADNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "ca-AD",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "dos", "tres", "quatre"]), "un, dos, tres o quatre");
        test.done();
    },
    testListFmtORStylecaADNumberFormatFiveFull: function(test) {
        var fmt = new ListFmt({
            locale: "ca-AD",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "dos", "tres", "quatre", "cinc"]), "un, dos, tres, quatre o cinc");
        test.done();
    },
    //// ca-ES ////
    testListFmtcaESNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "ca-ES"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un"]), "un");
        test.done();
    },
    testListFmtcaESNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "ca-ES"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "dos"]), "un i dos");
        test.done();
    },
    testListFmtcaESNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "ca-ES"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "dos", "tres"]), "un, dos i tres");
        test.done();
    },
    testListFmtcaESNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "ca-ES"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "dos", "tres", "quatre"]), "un, dos, tres i quatre");
        test.done();
    },
    testListFmtcaESNumberFormatFive: function(test) {
        var fmt = new ListFmt({
            locale: "ca-ES"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "dos", "tres", "quatre", "cinc"]), "un, dos, tres, quatre i cinc");
        test.done();
    },
    testListFmtUnitStylecaESNumberFormatOneShort: function(test) {
        var fmt = new ListFmt({
            locale: "ca-ES",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un"]), "un");
        test.done();
    },
    testListFmtUnitStylecaESNumberFormatTwoShort: function(test) {
        var fmt = new ListFmt({
            locale: "ca-ES",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "dos"]), "un i dos");
        test.done();
    },
    testListFmtUnitStylecaESNumberFormatThreeShort: function(test) {
        var fmt = new ListFmt({
            locale: "ca-ES",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "dos", "tres"]), "un, dos i tres");
        test.done();
    },
    testListFmtUnitStylecaESNumberFormatFourShort: function(test) {
        var fmt = new ListFmt({
            locale: "ca-ES",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "dos", "tres", "quatre"]), "un, dos, tres i quatre");
        test.done();
    },
    testListFmtUnitStylecaESNumberFormatFiveShort: function(test) {
        var fmt = new ListFmt({
            locale: "ca-ES",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "dos", "tres", "quatre", "cinc"]), "un, dos, tres, quatre i cinc");
        test.done();
    },
    testListFmtUnitStylecaESNumberFormatOneFull: function(test) {
        var fmt = new ListFmt({
            locale: "ca-ES",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un"]), "un");
        test.done();
    },
    testListFmtUnitStylecaESNumberFormatTwoFull: function(test) {
        var fmt = new ListFmt({
            locale: "ca-ES",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "dos"]), "un i dos");
        test.done();
    },
    testListFmtUnitStylecaESNumberFormatThreeFull: function(test) {
        var fmt = new ListFmt({
            locale: "ca-ES",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "dos", "tres"]), "un, dos i tres");
        test.done();
    },
    testListFmtUnitStylecaESNumberFormatFourFull: function(test) {
        var fmt = new ListFmt({
            locale: "ca-ES",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "dos", "tres", "quatre"]), "un, dos, tres i quatre");
        test.done();
    },
    testListFmtUnitStylecaESNumberFormatFiveFull: function(test) {
        var fmt = new ListFmt({
            locale: "ca-ES",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "dos", "tres", "quatre", "cinc"]), "un, dos, tres, quatre i cinc");
        test.done();
    },
    testListFmtORStylecaESNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "ca-ES",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un"]), "un");
        test.done();
    },
    testListFmtORStylecaESNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "ca-ES",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "dos"]), "un o dos");
        test.done();
    },
    testListFmtORStylecaESNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "ca-ES",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "dos", "tres"]), "un, dos o tres");
        test.done();
    },
    testListFmtORStylecaESNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "ca-ES",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "dos", "tres", "quatre"]), "un, dos, tres o quatre");
        test.done();
    },
    testListFmtORStylecaESNumberFormatFiveFull: function(test) {
        var fmt = new ListFmt({
            locale: "ca-ES",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["un", "dos", "tres", "quatre", "cinc"]), "un, dos, tres, quatre o cinc");
        test.done();
    }
};