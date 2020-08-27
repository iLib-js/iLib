/*
 * testlistfmt_my_MM.js - test the list formatter object
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

module.exports.testlistfmt_my_MM = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testListFmteuESNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "my-MM"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["တစ္"]), "တစ္");
        test.done();
    },
    testListFmteuESNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "my-MM"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["တစ္", "ႎႀစ္"]), 'တစ္နှင့် ႎႀစ္');
        test.done();
    },
    testListFmteuESNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "my-MM"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["တစ္", "ႎႀစ္", "သံုး"]), 'တစ္ ႎႀစ္နှင့် သံုး');
        test.done();
    },
    testListFmteuESNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "my-MM"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["တစ္", "ႎႀစ္", "သံုး", "ေလး"]), 'တစ္ ႎႀစ္ သံုးနှင့် ေလး');
        test.done();
    },
    testListFmteuESNumberFormatFive: function(test) {
        var fmt = new ListFmt({
            locale: "my-MM"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["တစ္", "ႎႀစ္", "သံုး", "ေလး", "ငၝး"]), 'တစ္ ႎႀစ္ သံုး ေလးနှင့် ငၝး');
        test.done();
    },
    testListFmtUnitStyleeuESNumberFormatOneShort: function(test) {
        var fmt = new ListFmt({
            locale: "my-MM",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["တစ္"]), "တစ္");
        test.done();
    },
    testListFmtUnitStyleeuESNumberFormatTwoShort: function(test) {
        var fmt = new ListFmt({
            locale: "my-MM",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["တစ္", "ႎႀစ္"]), 'တစ္နှင့် ႎႀစ္');
        test.done();
    },
    testListFmtUnitStyleeuESNumberFormatThreeShort: function(test) {
        var fmt = new ListFmt({
            locale: "my-MM",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["တစ္", "ႎႀစ္", "သံုး"]), 'တစ္ ႎႀစ္နှင့် သံုး');
        test.done();
    },
    testListFmtUnitStyleeuESNumberFormatFourShort: function(test) {
        var fmt = new ListFmt({
            locale: "my-MM",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["တစ္", "ႎႀစ္", "သံုး", "ေလး"]), 'တစ္ ႎႀစ္ သံုးနှင့် ေလး');
        test.done();
    },
    testListFmtUnitStyleeuESNumberFormatFiveShort: function(test) {
        var fmt = new ListFmt({
            locale: "my-MM",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["တစ္", "ႎႀစ္", "သံုး", "ေလး", "ငၝး"]), 'တစ္ ႎႀစ္ သံုး ေလးနှင့် ငၝး');
        test.done();
    },
    testListFmtUnitStyleeuESNumberFormatOneFull: function(test) {
        var fmt = new ListFmt({
            locale: "my-MM",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["တစ္"]), "တစ္");
        test.done();
    },
    testListFmtUnitStyleeuESNumberFormatTwoFull: function(test) {
        var fmt = new ListFmt({
            locale: "my-MM",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["တစ္", "ႎႀစ္"]), 'တစ္နှင့်ႎႀစ္');
        test.done();
    },
    testListFmtUnitStyleeuESNumberFormatThreeFull: function(test) {
        var fmt = new ListFmt({
            locale: "my-MM",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["တစ္", "ႎႀစ္", "သံုး"]), 'တစ္ ႎႀစ္နှင့် သံုး');
        test.done();
    },
    testListFmtUnitStyleeuESNumberFormatFourFull: function(test) {
        var fmt = new ListFmt({
            locale: "my-MM",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["တစ္", "ႎႀစ္", "သံုး", "ေလး"]), 'တစ္ ႎႀစ္ သံုးနှင့် ေလး');
        test.done();
    },
    testListFmtUnitStyleeuESNumberFormatFiveFull: function(test) {
        var fmt = new ListFmt({
            locale: "my-MM",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["တစ္", "ႎႀစ္", "သံုး", "ေလး", "ငၝး"]), 'တစ္ ႎႀစ္ သံုး ေလးနှင့် ငၝး');
        test.done();
    },
    testListFmtORStyleeuESNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "my-MM",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["တစ္"]), "တစ္");
        test.done();
    },
    testListFmtORStyleeuESNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "my-MM",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["တစ္", "ႎႀစ္"]), 'တစ္ သို့မဟုတ် ႎႀစ္');
        test.done();
    },
    testListFmtORStyleeuESNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "my-MM",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["တစ္", "ႎႀစ္", "သံုး"]), 'တစ္ ၊ ႎႀစ္ သို့မဟုတ် သံုး');
        test.done();
    },
    testListFmtORStyleeuESNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "my-MM",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["တစ္", "ႎႀစ္", "သံုး", "ေလး"]), 'တစ္ ၊ ႎႀစ္ သံုး သို့မဟုတ် ေလး');
        test.done();
    },
    testListFmtORStyleeuESNumberFormatFiveFull: function(test) {
        var fmt = new ListFmt({
            locale: "my-MM",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["တစ္", "ႎႀစ္", "သံုး", "ေလး", "ငၝး"]), 'တစ္ ၊ ႎႀစ္ သံုး ေလး သို့မဟုတ် ငၝး');
        test.done();
    }
};