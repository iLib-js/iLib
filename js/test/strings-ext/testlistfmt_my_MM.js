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
    testListFmtNumberFormatOne_my_MM: function(test) {
        var fmt = new ListFmt({
            locale: "my-MM"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["တစ္"]), "တစ္");
        test.done();
    },
    testListFmtNumberFormatTwo_my_MM: function(test) {
        var fmt = new ListFmt({
            locale: "my-MM"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["တစ္", "ႎႀစ္"]), 'တစ္နှင့် ႎႀစ္');
        test.done();
    },
    testListFmtNumberFormatThree_my_MM: function(test) {
        var fmt = new ListFmt({
            locale: "my-MM"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["တစ္", "ႎႀစ္", "သံုး"]), 'တစ္ ႎႀစ္နှင့် သံုး');
        test.done();
    },
    testListFmtNumberFormatFour_my_MM: function(test) {
        var fmt = new ListFmt({
            locale: "my-MM"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["တစ္", "ႎႀစ္", "သံုး", "ေလး"]), 'တစ္ ႎႀစ္ သံုးနှင့် ေလး');
        test.done();
    },
    testListFmtNumberFormatFive_my_MM: function(test) {
        var fmt = new ListFmt({
            locale: "my-MM"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["တစ္", "ႎႀစ္", "သံုး", "ေလး", "ငၝး"]), 'တစ္ ႎႀစ္ သံုး ေလးနှင့် ငၝး');
        test.done();
    },
    testListFmtUnitStyleNumberFormatOneShort_my_MM: function(test) {
        var fmt = new ListFmt({
            locale: "my-MM",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["တစ္"]), "တစ္");
        test.done();
    },
    testListFmtUnitStyleNumberFormatTwoShort_my_MM: function(test) {
        var fmt = new ListFmt({
            locale: "my-MM",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["တစ္", "ႎႀစ္"]), 'တစ္နှင့် ႎႀစ္');
        test.done();
    },
    testListFmtUnitStyleNumberFormatThreeShort_my_MM: function(test) {
        var fmt = new ListFmt({
            locale: "my-MM",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["တစ္", "ႎႀစ္", "သံုး"]), 'တစ္ ႎႀစ္နှင့် သံုး');
        test.done();
    },
    testListFmtUnitStyleNumberFormatFourShort_my_MM: function(test) {
        var fmt = new ListFmt({
            locale: "my-MM",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["တစ္", "ႎႀစ္", "သံုး", "ေလး"]), 'တစ္ ႎႀစ္ သံုးနှင့် ေလး');
        test.done();
    },
    testListFmtUnitStyleNumberFormatFiveShort_my_MM: function(test) {
        var fmt = new ListFmt({
            locale: "my-MM",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["တစ္", "ႎႀစ္", "သံုး", "ေလး", "ငၝး"]), 'တစ္ ႎႀစ္ သံုး ေလးနှင့် ငၝး');
        test.done();
    },
    testListFmtUnitStyleNumberFormatOneFull_my_MM: function(test) {
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
    testListFmtUnitStyleNumberFormatTwoFull_my_MM: function(test) {
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
    testListFmtUnitStyleNumberFormatThreeFull_my_MM: function(test) {
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
    testListFmtUnitStyleNumberFormatFourFull_my_MM: function(test) {
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
    testListFmtUnitStyleNumberFormatFiveFull_my_MM: function(test) {
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
    testListFmtORStyleNumberFormatOne_my_MM: function(test) {
        var fmt = new ListFmt({
            locale: "my-MM",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["တစ္"]), "တစ္");
        test.done();
    },
    testListFmtORStyleNumberFormatTwo_my_MM: function(test) {
        var fmt = new ListFmt({
            locale: "my-MM",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["တစ္", "ႎႀစ္"]), 'တစ္ သို့မဟုတ် ႎႀစ္');
        test.done();
    },
    testListFmtORStyleNumberFormatThree_my_MM: function(test) {
        var fmt = new ListFmt({
            locale: "my-MM",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["တစ္", "ႎႀစ္", "သံုး"]), 'တစ္ ၊ ႎႀစ္ သို့မဟုတ် သံုး');
        test.done();
    },
    testListFmtORStyleNumberFormatFour_my_MM: function(test) {
        var fmt = new ListFmt({
            locale: "my-MM",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["တစ္", "ႎႀစ္", "သံုး", "ေလး"]), 'တစ္ ၊ ႎႀစ္ သံုး သို့မဟုတ် ေလး');
        test.done();
    },
    testListFmtORStyleNumberFormatFiveFull_my_MM: function(test) {
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