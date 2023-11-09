/*
 * testlistfmt_el.js - test the list formatter object
 *
 * Copyright © 2017, 2020 JEDLSoft
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

module.exports.testlistfmt_el = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    // el-CY
    testListFmtelCYNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "el-CY"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ένας"]), "ένας");
        test.done();
    },
    testListFmtelCYNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "el-CY"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ένας", "δυο"]), "ένας και δυο");
        test.done();
    },
    testListFmtelCYNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "el-CY"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ένας", "δυο", "τρία"]), "ένας, δυο και τρία");
        test.done();
    },
    testListFmtelCYNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "el-CY"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ένας", "δυο", "τρία", "τέσσερα"]), "ένας, δυο, τρία και τέσσερα");
        test.done();
    },
    testListFmtUnitStyleelCYNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "el-CY",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ένας"]), "ένας");
        test.done();
    },
    testListFmtUnitStyleelCYNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "el-CY",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ένας", "δυο"]), "ένας, δυο");
        test.done();
    },
    testListFmtUnitStyleelCYNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "el-CY",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ένας", "δυο", "τρία"]), "ένας, δυο, τρία");
        test.done();
    },
    testListFmtUnitStyleelCYNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "el-CY",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ένας", "δυο", "τρία", "τέσσερα"]), "ένας, δυο, τρία, τέσσερα");
        test.done();
    },
    testListFmtUnitStyleelCYNumberFormatOneMedium: function(test) {
        var fmt = new ListFmt({
            locale: "el-CY",
            style: "unit",
            length: "medium"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ένας"]), "ένας");
        test.done();
    },
    testListFmtUnitStyleelCYNumberFormatTwoMedium: function(test) {
        var fmt = new ListFmt({
            locale: "el-CY",
            style: "unit",
            length: "medium"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ένας", "δυο"]), "ένας, δυο");
        test.done();
    },
    testListFmtUnitStyleelCYNumberFormatThreeMedium: function(test) {
        var fmt = new ListFmt({
            locale: "el-CY",
            style: "unit",
            length: "medium"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ένας", "δυο", "τρία"]), "ένας, δυο, τρία");
        test.done();
    },
    testListFmtUnitStyleelCYNumberFormatFourMedium: function(test) {
        var fmt = new ListFmt({
            locale: "el-CY",
            style: "unit",
            length: "medium"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ένας", "δυο", "τρία", "τέσσερα"]), "ένας, δυο, τρία, τέσσερα");
        test.done();
    },
    // el-GR

    testListFmtelGRNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "el-GR"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ένας"]), "ένας");
        test.done();
    },
    testListFmtelGRNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "el-GR"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ένας", "δυο"]), "ένας και δυο");
        test.done();
    },
    testListFmtelGRNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "el-GR"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ένας", "δυο", "τρία"]), "ένας, δυο και τρία");
        test.done();
    },
    testListFmtelGRNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "el-GR"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ένας", "δυο", "τρία", "τέσσερα"]), "ένας, δυο, τρία και τέσσερα");
        test.done();
    },
    testListFmtUnitStyleelGRNumberFormatOneLong: function(test) {
        var fmt = new ListFmt({
            locale: "el-GR",
            style: "unit",
            length: "long"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ένας"]), "ένας");
        test.done();
    },
    testListFmtUnitStyleelGRNumberFormatTwoLong: function(test) {
        var fmt = new ListFmt({
            locale: "el-GR",
            style: "unit",
            length: "long"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ένας", "δυο"]), "ένας, δυο");
        test.done();
    },
    testListFmtUnitStyleelGRNumberFormatThreeLong: function(test) {
        var fmt = new ListFmt({
            locale: "el-GR",
            style: "unit",
            length: "long"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ένας", "δυο", "τρία"]), "ένας, δυο, τρία");
        test.done();
    },
    testListFmtUnitStyleelGRNumberFormatFourLong: function(test) {
        var fmt = new ListFmt({
            locale: "el-GR",
            style: "unit",
            length: "long"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ένας", "δυο", "τρία", "τέσσερα"]), "ένας, δυο, τρία, τέσσερα");
        test.done();
    },
    testListFmtUnitStyleelGRNumberFormatOneFull: function(test) {
        var fmt = new ListFmt({
            locale: "el-GR",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ένας"]), "ένας");
        test.done();
    },
    testListFmtUnitStyleelGRNumberFormatTwoFull: function(test) {
        var fmt = new ListFmt({
            locale: "el-GR",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ένας", "δυο"]), "ένας, δυο");
        test.done();
    },
    testListFmtUnitStyleelGRNumberFormatThreeFull: function(test) {
        var fmt = new ListFmt({
            locale: "el-GR",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ένας", "δυο", "τρία"]), "ένας, δυο, τρία");
        test.done();
    },
    testListFmtUnitStyleelGRNumberFormatFourFull: function(test) {
        var fmt = new ListFmt({
            locale: "el-GR",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ένας", "δυο", "τρία", "τέσσερα"]), "ένας, δυο, τρία, τέσσερα");
        test.done();
    }
};