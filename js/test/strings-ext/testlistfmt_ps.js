/*
 * testlistfmt_ps.js - test the list formatter object
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

module.exports.testlistfmt_ps = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    // ps-PK
    testListFmtNumberFormatOne_ps_PK: function(test) {
        var fmt = new ListFmt({
            locale: "ps-PK"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["یو"]), "یو");
        test.done();
    },
    testListFmtNumberFormatTwo_ps_PK: function(test) {
        var fmt = new ListFmt({
            locale: "ps-PK"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["یو", "دوه"]), 'یو او دوه');
        test.done();
    },
    testListFmtNumberFormatThree_ps_PK: function(test) {
        var fmt = new ListFmt({
            locale: "ps-PK"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["یو", "دوه", "درې"]), 'یو، دوه، او درې');
        test.done();
    },
    testListFmtNumberFormatFour_ps_PK: function(test) {
        var fmt = new ListFmt({
            locale: "ps-PK"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["یو", "دوه", "درې", "څلور"]), 'یو، دوه، درې، او څلور');
        test.done();
    },
    testListFmtNumberFormatFive_ps_PK: function(test) {
        var fmt = new ListFmt({
            locale: "ps-PK"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["یو", "دوه", "درې", "څلور", "پنځه"]), 'یو، دوه، درې، څلور، او پنځه');
        test.done();
    },
    testListFmtUnitStyleNumberFormatOneShort_ps_PK: function(test) {
        var fmt = new ListFmt({
            locale: "ps-PK",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["یو"]), "یو");
        test.done();
    },
    testListFmtUnitStyleNumberFormatTwoShort_ps_PK: function(test) {
        var fmt = new ListFmt({
            locale: "ps-PK",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["یو", "دوه"]), 'یو و دوه');
        test.done();
    },
    testListFmtUnitStyleNumberFormatThreeShort_ps_PK: function(test) {
        var fmt = new ListFmt({
            locale: "ps-PK",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["یو", "دوه", "درې"]), 'یو, دوه, درې');
        test.done();
    },
    testListFmtUnitStyleNumberFormatFourShort_ps_PK: function(test) {
        var fmt = new ListFmt({
            locale: "ps-PK",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["یو", "دوه", "درې", "څلور"]), 'یو, دوه, درې, څلور');
        test.done();
    },
    testListFmtUnitStyleNumberFormatFiveShort_ps_PK: function(test) {
        var fmt = new ListFmt({
            locale: "ps-PK",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["یو", "دوه", "درې", "څلور", "پنځه"]), 'یو, دوه, درې, څلور, پنځه');
        test.done();
    },
    testListFmtUnitStyleNumberFormatOneFull_ps_PK: function(test) {
        var fmt = new ListFmt({
            locale: "ps-PK",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["یو"]), "یو");
        test.done();
    },
    testListFmtUnitStyleNumberFormatTwoFull_ps_PK: function(test) {
        var fmt = new ListFmt({
            locale: "ps-PK",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["یو", "دوه"]), 'یو او دوه');
        test.done();
    },
    testListFmtUnitStyleNumberFormatThreeFull_ps_PK: function(test) {
        var fmt = new ListFmt({
            locale: "ps-PK",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["یو", "دوه", "درې"]), 'یو, دوه, درې');
        test.done();
    },
    testListFmtUnitStyleNumberFormatFourFull_ps_PK: function(test) {
        var fmt = new ListFmt({
            locale: "ps-PK",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["یو", "دوه", "درې", "څلور"]), 'یو, دوه, درې, څلور');
        test.done();
    },
    testListFmtUnitStyleNumberFormatFiveFull_ps_PK: function(test) {
        var fmt = new ListFmt({
            locale: "ps-PK",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["یو", "دوه", "درې", "څلور", "پنځه"]), 'یو, دوه, درې, څلور, پنځه');
        test.done();
    },
    testListFmtORStyleNumberFormatOne_ps_PK: function(test) {
        var fmt = new ListFmt({
            locale: "ps-PK",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["یو"]), "یو");
        test.done();
    },
    testListFmtORStyleNumberFormatTwo_ps_PK: function(test) {
        var fmt = new ListFmt({
            locale: "ps-PK",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["یو", "دوه"]), 'یو یا دوه');
        test.done();
    },
    testListFmtORStyleNumberFormatThree_ps_PK: function(test) {
        var fmt = new ListFmt({
            locale: "ps-PK",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["یو", "دوه", "درې"]), 'یو, دوه, یا درې');
        test.done();
    },
    testListFmtORStyleNumberFormatFour_ps_PK: function(test) {
        var fmt = new ListFmt({
            locale: "ps-PK",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["یو", "دوه", "درې", "څلور"]), 'یو, دوه, درې, یا څلور');
        test.done();
    },
    testListFmtORStyleNumberFormatFiveFull_ps_PK: function(test) {
        var fmt = new ListFmt({
            locale: "ps-PK",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["یو", "دوه", "درې", "څلور", "پنځه"]), 'یو, دوه, درې, څلور, یا پنځه');
        test.done();
    },
    testListFmtORStyleNumberFormatShortFiveFull_ps_PK: function(test) {
        var fmt = new ListFmt({
            locale: "ps-PK",
            style: "disjunction",
            length: "short"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["یو", "دوه", "درې", "څلور", "پنځه"]), 'یو, دوه, درې, څلور, یا پنځه');
        test.done();
    },
    // ps-AF
    testListFmtNumberFormatOne_ps_AF: function(test) {
        var fmt = new ListFmt({
            locale: "ps-AF"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["یو"]), "یو");
        test.done();
    },
    testListFmtNumberFormatTwo_ps_AF: function(test) {
        var fmt = new ListFmt({
            locale: "ps-AF"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["یو", "دوه"]), 'یو او دوه');
        test.done();
    },
    testListFmtNumberFormatThree_ps_AF: function(test) {
        var fmt = new ListFmt({
            locale: "ps-AF"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["یو", "دوه", "درې"]), 'یو، دوه، او درې');
        test.done();
    },
    testListFmtNumberFormatFour_ps_AF: function(test) {
        var fmt = new ListFmt({
            locale: "ps-AF"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["یو", "دوه", "درې", "څلور"]), 'یو، دوه، درې، او څلور');
        test.done();
    },
    testListFmtNumberFormatFive_ps_AF: function(test) {
        var fmt = new ListFmt({
            locale: "ps-AF"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["یو", "دوه", "درې", "څلور", "پنځه"]), 'یو، دوه، درې، څلور، او پنځه');
        test.done();
    },
    testListFmtUnitStyleNumberFormatOneShort_ps_AF: function(test) {
        var fmt = new ListFmt({
            locale: "ps-AF",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["یو"]), "یو");
        test.done();
    },
    testListFmtUnitStyleNumberFormatTwoShort_ps_AF: function(test) {
        var fmt = new ListFmt({
            locale: "ps-AF",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["یو", "دوه"]), 'یو و دوه');
        test.done();
    },
    testListFmtUnitStyleNumberFormatThreeShort_ps_AF: function(test) {
        var fmt = new ListFmt({
            locale: "ps-AF",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["یو", "دوه", "درې"]), 'یو, دوه, درې');
        test.done();
    },
    testListFmtUnitStyleNumberFormatFourShort_ps_AF: function(test) {
        var fmt = new ListFmt({
            locale: "ps-AF",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["یو", "دوه", "درې", "څلور"]), 'یو, دوه, درې, څلور');
        test.done();
    },
    testListFmtUnitStyleNumberFormatFiveShort_ps_AF: function(test) {
        var fmt = new ListFmt({
            locale: "ps-AF",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["یو", "دوه", "درې", "څلور", "پنځه"]), 'یو, دوه, درې, څلور, پنځه');
        test.done();
    },
    testListFmtUnitStyleNumberFormatOneFull_ps_AF: function(test) {
        var fmt = new ListFmt({
            locale: "ps-AF",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["یو"]), "یو");
        test.done();
    },
    testListFmtUnitStyleNumberFormatTwoFull_ps_AF: function(test) {
        var fmt = new ListFmt({
            locale: "ps-AF",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["یو", "دوه"]), 'یو او دوه');
        test.done();
    },
    testListFmtUnitStyleNumberFormatThreeFull_ps_AF: function(test) {
        var fmt = new ListFmt({
            locale: "ps-AF",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["یو", "دوه", "درې"]), 'یو, دوه, درې');
        test.done();
    },
    testListFmtUnitStyleNumberFormatFourFull_ps_AF: function(test) {
        var fmt = new ListFmt({
            locale: "ps-AF",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["یو", "دوه", "درې", "څلور"]), 'یو, دوه, درې, څلور');
        test.done();
    },
    testListFmtUnitStyleNumberFormatFiveFull_ps_AF: function(test) {
        var fmt = new ListFmt({
            locale: "ps-AF",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["یو", "دوه", "درې", "څلور", "پنځه"]), 'یو, دوه, درې, څلور, پنځه');
        test.done();
    },
    testListFmtORStyleNumberFormatOne_ps_AF: function(test) {
        var fmt = new ListFmt({
            locale: "ps-AF",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["یو"]), "یو");
        test.done();
    },
    testListFmtORStyleNumberFormatTwo_ps_AF: function(test) {
        var fmt = new ListFmt({
            locale: "ps-AF",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["یو", "دوه"]), 'یو یا دوه');
        test.done();
    },
    testListFmtORStyleNumberFormatThree_ps_AF: function(test) {
        var fmt = new ListFmt({
            locale: "ps-AF",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["یو", "دوه", "درې"]), 'یو, دوه, یا درې');
        test.done();
    },
    testListFmtORStyleNumberFormatFour_ps_AF: function(test) {
        var fmt = new ListFmt({
            locale: "ps-AF",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["یو", "دوه", "درې", "څلور"]), 'یو, دوه, درې, یا څلور');
        test.done();
    },
    testListFmtORStyleNumberFormatFiveFull_ps_AF: function(test) {
        var fmt = new ListFmt({
            locale: "ps-AF",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["یو", "دوه", "درې", "څلور", "پنځه"]), 'یو, دوه, درې, څلور, یا پنځه');
        test.done();
    },
    testListFmtORStyleNumberFormatShortFiveFull_ps_AF: function(test) {
        var fmt = new ListFmt({
            locale: "ps-AF",
            style: "disjunction",
            length: "short"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["یو", "دوه", "درې", "څلور", "پنځه"]), 'یو, دوه, درې, څلور, یا پنځه');
        test.done();
    }
};