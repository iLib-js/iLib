/*
 * testlistfmt_yo.js - test the list formatter object
 *
 * Copyright © 2022-2024, JEDLSoft
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

module.exports.testlistfmt_yo = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    // yo-NG
    testListFmtNumberFormatOne_yo_NG: function(test) {
        var fmt = new ListFmt({
            locale: "yo-NG"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ọkan"]), "ọkan");
        test.done();
    },
    testListFmtNumberFormatTwo_yo_NG: function(test) {
        var fmt = new ListFmt({
            locale: "yo-NG"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ọkan", "meji"]), "ọkan àtimeji");
        test.done();
    },
    testListFmtNumberFormatThree_yo_NG: function(test) {
        var fmt = new ListFmt({
            locale: "yo-NG"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ọkan", "meji", "mẹta"]), "ọkan, meji àti mẹta");
        test.done();
    },
    testListFmtNumberFormatFour_yo_NG: function(test) {
        var fmt = new ListFmt({
            locale: "yo-NG"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ọkan", "meji", "mẹta", "mẹrin"]), "ọkan, meji, mẹta àti mẹrin");
        test.done();
    },
    testListFmtNumberFormatFive_yo_NG: function(test) {
        var fmt = new ListFmt({
            locale: "yo-NG"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ọkan", "meji", "mẹta", "mẹrin", "fënnef"]), "ọkan, meji, mẹta, mẹrin àti fënnef");
        test.done();
    },
    testListFmtUnitStyleNumberFormatOneShort_yo_NG: function(test) {
        var fmt = new ListFmt({
            locale: "yo-NG",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ọkan"]), "ọkan");
        test.done();
    },
    testListFmtUnitStyleNumberFormatTwoShort_yo_NG: function(test) {
        var fmt = new ListFmt({
            locale: "yo-NG",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ọkan", "meji"]), "ọkan àtimeji");
        test.done();
    },
    testListFmtUnitStyleNumberFormatThreeShort_yo_NG: function(test) {
        var fmt = new ListFmt({
            locale: "yo-NG",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ọkan", "meji", "mẹta"]), "ọkan, meji, mẹta");
        test.done();
    },
    testListFmtUnitStyleNumberFormatFourShort_yo_NG: function(test) {
        var fmt = new ListFmt({
            locale: "yo-NG",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ọkan", "meji", "mẹta", "mẹrin"]), "ọkan, meji, mẹta, mẹrin");
        test.done();
    },
    testListFmtUnitStyleNumberFormatFiveShort_yo_NG: function(test) {
        var fmt = new ListFmt({
            locale: "yo-NG",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ọkan", "meji", "mẹta", "mẹrin", "mẹrin"]), "ọkan, meji, mẹta, mẹrin, mẹrin");
        test.done();
    },
    testListFmtUnitStyleNumberFormatOneFull_yo_NG: function(test) {
        var fmt = new ListFmt({
            locale: "yo-NG",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ọkan"]), "ọkan");
        test.done();
    },
    testListFmtUnitStyleNumberFormatTwoFull_yo_NG: function(test) {
        var fmt = new ListFmt({
            locale: "yo-NG",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ọkan", "meji"]), "ọkan àtimeji");
        test.done();
    },
    testListFmtUnitStyleNumberFormatThreeFull_yo_NG: function(test) {
        var fmt = new ListFmt({
            locale: "yo-NG",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ọkan", "meji", "mẹta"]), "ọkan, meji, mẹta");
        test.done();
    },
    testListFmtUnitStyleNumberFormatFourFull_yo_NG: function(test) {
        var fmt = new ListFmt({
            locale: "yo-NG",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ọkan", "meji", "mẹta", "mẹrin"]), "ọkan, meji, mẹta, mẹrin");
        test.done();
    },
    testListFmtUnitStyleNumberFormatFiveFull_yo_NG: function(test) {
        var fmt = new ListFmt({
            locale: "yo-NG",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ọkan", "meji", "mẹta", "mẹrin", "mẹrin"]), "ọkan, meji, mẹta, mẹrin, mẹrin");
        test.done();
    },
    testListFmtORStyleNumberFormatOne_yo_NG: function(test) {
        var fmt = new ListFmt({
            locale: "yo-NG",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ọkan"]), "ọkan");
        test.done();
    },
    testListFmtORStyleNumberFormatTwo_yo_NG: function(test) {
        var fmt = new ListFmt({
            locale: "yo-NG",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ọkan", "meji"]), "ọkan tàbí meji");
        test.done();
    },
    testListFmtORStyleNumberFormatThree_yo_NG: function(test) {
        var fmt = new ListFmt({
            locale: "yo-NG",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ọkan", "meji", "mẹta"]), "ọkan, meji, tabi mẹta");
        test.done();
    },
    testListFmtORStyleNumberFormatFour_yo_NG: function(test) {
        var fmt = new ListFmt({
            locale: "yo-NG",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ọkan", "meji", "mẹta", "mẹrin"]), "ọkan, meji, mẹta, tabi mẹrin");
        test.done();
    },
    testListFmtORStyleNumberFormatFiveFull_yo_NG: function(test) {
        var fmt = new ListFmt({
            locale: "yo-NG",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ọkan", "meji", "mẹta", "mẹrin", "mẹrin"]), "ọkan, meji, mẹta, mẹrin, tabi mẹrin");
        test.done();
    },
    testListFmtORStyleNumberFormatShortFiveFull_yo_NG: function(test) {
        var fmt = new ListFmt({
            locale: "yo-NG",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ọkan", "meji", "mẹta", "mẹrin", "mẹrin"]), "ọkan, meji, mẹta, mẹrin, tabi mẹrin");
        test.done();
    },
    // yo-BJ
    testListFmtNumberFormatOne_yo_BJ: function(test) {
        var fmt = new ListFmt({
            locale: "yo-BJ"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ọkan"]), "ọkan");
        test.done();
    },
    testListFmtNumberFormatTwo_yo_BJ: function(test) {
        var fmt = new ListFmt({
            locale: "yo-BJ"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ọkan", "meji"]), "ọkan àtimeji");
        test.done();
    },
    testListFmtNumberFormatThree_yo_BJ: function(test) {
        var fmt = new ListFmt({
            locale: "yo-BJ"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ọkan", "meji", "mẹta"]), "ọkan, meji àti mẹta");
        test.done();
    },
    testListFmtNumberFormatFour_yo_BJ: function(test) {
        var fmt = new ListFmt({
            locale: "yo-BJ"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ọkan", "meji", "mẹta", "mẹrin"]), "ọkan, meji, mẹta àti mẹrin");
        test.done();
    },
    testListFmtNumberFormatFive_yo_BJ: function(test) {
        var fmt = new ListFmt({
            locale: "yo-BJ"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ọkan", "meji", "mẹta", "mẹrin", "fënnef"]), "ọkan, meji, mẹta, mẹrin àti fënnef");
        test.done();
    },
    testListFmtUnitStyleNumberFormatOneShort_yo_BJ: function(test) {
        var fmt = new ListFmt({
            locale: "yo-BJ",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ọkan"]), "ọkan");
        test.done();
    },
    testListFmtUnitStyleNumberFormatTwoShort_yo_BJ: function(test) {
        var fmt = new ListFmt({
            locale: "yo-BJ",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ọkan", "meji"]), "ọkan àtimeji");
        test.done();
    },
    testListFmtUnitStyleNumberFormatThreeShort_yo_BJ: function(test) {
        var fmt = new ListFmt({
            locale: "yo-BJ",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ọkan", "meji", "mẹta"]), "ọkan, meji, mẹta");
        test.done();
    },
    testListFmtUnitStyleNumberFormatFourShort_yo_BJ: function(test) {
        var fmt = new ListFmt({
            locale: "yo-BJ",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ọkan", "meji", "mẹta", "mẹrin"]), "ọkan, meji, mẹta, mẹrin");
        test.done();
    },
    testListFmtUnitStyleNumberFormatFiveShort_yo_BJ: function(test) {
        var fmt = new ListFmt({
            locale: "yo-BJ",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ọkan", "meji", "mẹta", "mẹrin", "mẹrin"]), "ọkan, meji, mẹta, mẹrin, mẹrin");
        test.done();
    },
    testListFmtUnitStyleNumberFormatOneFull_yo_BJ: function(test) {
        var fmt = new ListFmt({
            locale: "yo-BJ",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ọkan"]), "ọkan");
        test.done();
    },
    testListFmtUnitStyleNumberFormatTwoFull_yo_BJ: function(test) {
        var fmt = new ListFmt({
            locale: "yo-BJ",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ọkan", "meji"]), "ọkan àtimeji");
        test.done();
    },
    testListFmtUnitStyleNumberFormatThreeFull_yo_BJ: function(test) {
        var fmt = new ListFmt({
            locale: "yo-BJ",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ọkan", "meji", "mẹta"]), "ọkan, meji, mẹta");
        test.done();
    },
    testListFmtUnitStyleNumberFormatFourFull_yo_BJ: function(test) {
        var fmt = new ListFmt({
            locale: "yo-BJ",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ọkan", "meji", "mẹta", "mẹrin"]), "ọkan, meji, mẹta, mẹrin");
        test.done();
    },
    testListFmtUnitStyleNumberFormatFiveFull_yo_BJ: function(test) {
        var fmt = new ListFmt({
            locale: "yo-BJ",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ọkan", "meji", "mẹta", "mẹrin", "mẹrin"]), "ọkan, meji, mẹta, mẹrin, mẹrin");
        test.done();
    },
    testListFmtORStyleNumberFormatOne_yo_BJ: function(test) {
        var fmt = new ListFmt({
            locale: "yo-BJ",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ọkan"]), "ọkan");
        test.done();
    },
    testListFmtORStyleNumberFormatTwo_yo_BJ: function(test) {
        var fmt = new ListFmt({
            locale: "yo-BJ",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ọkan", "meji"]), "ọkan tàbí meji");
        test.done();
    },
    testListFmtORStyleNumberFormatThree_yo_BJ: function(test) {
        var fmt = new ListFmt({
            locale: "yo-BJ",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ọkan", "meji", "mẹta"]), "ọkan pɛ̀lú meji, tabi mẹta");
        test.done();
    },
    testListFmtORStyleNumberFormatFour_yo_BJ: function(test) {
        var fmt = new ListFmt({
            locale: "yo-BJ",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ọkan", "meji", "mẹta", "mẹrin"]), "ọkan pɛ̀lú meji, mẹta, tabi mẹrin");
        test.done();
    },
    testListFmtORStyleNumberFormatFiveFull_yo_BJ: function(test) {
        var fmt = new ListFmt({
            locale: "yo-BJ",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ọkan", "meji", "mẹta", "mẹrin", "mẹrin"]), "ọkan pɛ̀lú meji, mẹta, mẹrin, tabi mẹrin");
        test.done();
    },
    testListFmtORStyleNumberFormatShortFiveFull_yo_BJ: function(test) {
        var fmt = new ListFmt({
            locale: "yo-BJ",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ọkan", "meji", "mẹta", "mẹrin", "mẹrin"]), "ọkan pɛ̀lú meji, mẹta, mẹrin, tabi mẹrin");
        test.done();
    }
};