/*
 * testlistfmt_ml_IN.js - test the list formatter object
 *
 * Copyright © 2017, 2020-2021 JEDLSoft
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

module.exports.testlistfmt_ml_IN = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    // ml-IN

    testListFmtmlINNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "ml-IN"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ഒന്ന്"]), "ഒന്ന്");
        test.done();
    },

    testListFmtmlINNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "ml-IN"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ഒന്ന്", "രണ്ട്"]), "ഒന്ന് കൂടാതെ രണ്ട്");
        test.done();
    },

    testListFmtmlINNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "ml-IN"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ഒന്ന്", "രണ്ട്", "മൂന്ന്"]), "ഒന്ന്, രണ്ട്, മൂന്ന് എന്നിവ");
        test.done();
    },

    testListFmtmlINNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "ml-IN"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ഒന്ന്", "രണ്ട്", "മൂന്ന്", "നാല്"]), "ഒന്ന്, രണ്ട്, മൂന്ന്, നാല് എന്നിവ");
        test.done();
    },
    testListFmtUnitStylemlINNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "ml-IN",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ഒന്ന്"]), "ഒന്ന്");
        test.done();
    },

    testListFmtUnitStylemlINNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "ml-IN",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ഒന്ന്", "രണ്ട്"]), 'ഒന്ന്, രണ്ട്');
        test.done();
    },

    testListFmtUnitStylemlINNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "ml-IN",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ഒന്ന്", "രണ്ട്", "മൂന്ന്"]), "ഒന്ന്, രണ്ട്, മൂന്ന്");
        test.done();
    },

    testListFmtUnitStylemlINNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "ml-IN",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ഒന്ന്", "രണ്ട്", "മൂന്ന്", "നാല്"]), "ഒന്ന്, രണ്ട്, മൂന്ന്, നാല്");
        test.done();
    },
    testListFmtUnitStylemlINNumberFormatOneMedium: function(test) {
        var fmt = new ListFmt({
            locale: "ml-IN",
            style: "unit",
            length: "medium"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ഒന്ന്"]), "ഒന്ന്");
        test.done();
    },

    testListFmtUnitStylemlINNumberFormatTwoMedium: function(test) {
        var fmt = new ListFmt({
            locale: "ml-IN",
            style: "unit",
            length: "medium"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ഒന്ന്", "രണ്ട്"]), 'ഒന്ന്, രണ്ട്');
        test.done();
    },

    testListFmtUnitStylemlINNumberFormatThreeMedium: function(test) {
        var fmt = new ListFmt({
            locale: "ml-IN",
            style: "unit",
            length: "medium"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ഒന്ന്", "രണ്ട്", "മൂന്ന്"]), "ഒന്ന്, രണ്ട്, മൂന്ന്");
        test.done();
    },

    testListFmtUnitStylemlINNumberFormatFourMedium: function(test) {
        var fmt = new ListFmt({
            locale: "ml-IN",
            style: "unit",
            length: "medium"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ഒന്ന്", "രണ്ട്", "മൂന്ന്", "നാല്"]), "ഒന്ന്, രണ്ട്, മൂന്ന്, നാല്");
        test.done();
    },
    testListFmtORStyle_ml_IN_One: function(test) {
        var fmt = new ListFmt({
            locale: "ml-IN",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ഒന്ന്"]), "ഒന്ന്");
        test.done();
    },

    testListFmtORStyle_ml_IN_Two: function(test) {
        var fmt = new ListFmt({
            locale: "ml-IN",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ഒന്ന്", "രണ്ട്"]), 'ഒന്ന് അല്ലെങ്കിൽ രണ്ട്');
        test.done();
    },

    testListFmtORStyle_ml_IN_Three: function(test) {
        var fmt = new ListFmt({
            locale: "ml-IN",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ഒന്ന്", "രണ്ട്", "മൂന്ന്"]), 'ഒന്ന്, രണ്ട്, അല്ലെങ്കിൽ മൂന്ന്');
        test.done();
    },

    testListFmtORStyle_ml_IN_Four: function(test) {
        var fmt = new ListFmt({
            locale: "ml-IN",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ഒന്ന്", "രണ്ട്", "മൂന്ന്", "നാല്"]), 'ഒന്ന്, രണ്ട്, മൂന്ന്, അല്ലെങ്കിൽ നാല്');
        test.done();
    },
};
