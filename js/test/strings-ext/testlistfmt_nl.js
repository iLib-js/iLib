/*
 * testlistfmt_nl.js - test the list formatter object
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
 * disdriebuted under the License is disdriebuted on an "AS IS" BASIS,
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

module.exports.testlistfmt_nl = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    // nl-BE
    testListFmtnlBENumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "nl-BE"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["een"]), "een");
        test.done();
    },

    testListFmtnlBENumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "nl-BE"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["een", "twee"]), "een en twee");
        test.done();
    },

    testListFmtnlBENumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "nl-BE"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["een", "twee", "drie"]), "een, twee en drie");
        test.done();
    },

    testListFmtnlBENumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "nl-BE"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["een", "twee", "drie", "vier"]), "een, twee, drie en vier");
        test.done();
    },

    testListFmtUnitStylenlBENumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "nl-BE",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["een"]), "een");
        test.done();
    },

    testListFmtUnitStylenlBENumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "nl-BE",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["een", "twee"]), "een, twee");
        test.done();
    },

    testListFmtUnitStylenlBENumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "nl-BE",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["een", "twee", "drie"]), "een, twee, drie");
        test.done();
    },

    testListFmtUnitStylenlBENumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "nl-BE",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["een", "twee", "drie", "vier"]), "een, twee, drie, vier");
        test.done();
    },
    testListFmtUnitStylenlBENumberFormatOneFull: function(test) {
        var fmt = new ListFmt({
            locale: "nl-BE",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["een"]), "een");
        test.done();
    },

    testListFmtUnitStylenlBENumberFormatTwoFull: function(test) {
        var fmt = new ListFmt({
            locale: "nl-BE",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["een", "twee"]), "een en twee");
        test.done();
    },

    testListFmtUnitStylenlBENumberFormatThreeFull: function(test) {
        var fmt = new ListFmt({
            locale: "nl-BE",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["een", "twee", "drie"]), "een, twee en drie");
        test.done();
    },

    testListFmtUnitStylenlBENumberFormatFourFull: function(test) {
        var fmt = new ListFmt({
            locale: "nl-BE",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["een", "twee", "drie", "vier"]), "een, twee, drie en vier");
        test.done();
    },

    // nl-NL
    testListFmtnlNLNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "nl-NL"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["een"]), "een");
        test.done();
    },

    testListFmtnlNLNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "nl-NL"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["een", "twee"]), "een en twee");
        test.done();
    },

    testListFmtnlNLNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "nl-NL"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["een", "twee", "drie"]), "een, twee en drie");
        test.done();
    },

    testListFmtnlNLNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "nl-NL"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["een", "twee", "drie", "vier"]), "een, twee, drie en vier");
        test.done();
    },

    testListFmtUnitStylenlNLNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "nl-NL",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["een"]), "een");
        test.done();
    },

    testListFmtUnitStylenlNLNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "nl-NL",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["een", "twee"]), "een, twee");
        test.done();
    },

    testListFmtUnitStylenlNLNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "nl-NL",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["een", "twee", "drie"]), "een, twee, drie");
        test.done();
    },

    testListFmtUnitStylenlNLNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "nl-NL",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["een", "twee", "drie", "vier"]), "een, twee, drie, vier");
        test.done();
    },
    testListFmtUnitStylenlNLNumberFormatOneFull: function(test) {
        var fmt = new ListFmt({
            locale: "nl-NL",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["een"]), "een");
        test.done();
    },

    testListFmtUnitStylenlNLNumberFormatTwoFull: function(test) {
        var fmt = new ListFmt({
            locale: "nl-NL",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["een", "twee"]), "een en twee");
        test.done();
    },

    testListFmtUnitStylenlNLNumberFormatThreeFull: function(test) {
        var fmt = new ListFmt({
            locale: "nl-NL",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["een", "twee", "drie"]), "een, twee en drie");
        test.done();
    },

    testListFmtUnitStylenlNLNumberFormatFourFull: function(test) {
        var fmt = new ListFmt({
            locale: "nl-NL",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["een", "twee", "drie", "vier"]), "een, twee, drie en vier");
        test.done();
    }
};
