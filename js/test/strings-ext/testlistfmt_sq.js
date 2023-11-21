/*
 * testlistfmt_sq.js - test the list formatter object
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

module.exports.testlistfmt_sq = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    // sq-AL
    testListFmtsqALNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "sq-AL"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["një"]), "një");
        test.done();
    },
    testListFmtsqALNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "sq-AL"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["një", "dy"]), "një dhe dy");
        test.done();
    },
    testListFmtsqALNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "sq-AL"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["një", "dy", "tresh"]), "një, dy dhe tresh");
        test.done();
    },
    testListFmtsqALNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "sq-AL"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["një", "dy", "tresh", "katër"]), "një, dy, tresh dhe katër");
        test.done();
    },
    testListFmtUnitStylesqALNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "sq-AL",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["një"]), "një");
        test.done();
    },
    testListFmtUnitStylesqALNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "sq-AL",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["një", "dy"]), "një e dy");
        test.done();
    },
    testListFmtUnitStylesqALNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "sq-AL",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["një", "dy", "tresh"]), "një, dy e tresh");
        test.done();
    },
    testListFmtUnitStylesqALNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "sq-AL",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["një", "dy", "tresh", "katër"]), "një, dy, tresh e katër");
        test.done();
    },
    testListFmtUnitStylesqALNumberFormatOneMedium: function(test) {
        var fmt = new ListFmt({
            locale: "sq-AL",
            style: "unit",
            length: "medium"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["një"]), "një");
        test.done();
    },
    testListFmtUnitStylesqALNumberFormatTwoMedium: function(test) {
        var fmt = new ListFmt({
            locale: "sq-AL",
            style: "unit",
            length: "medium"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["një", "dy"]), "një e dy");
        test.done();
    },
    testListFmtUnitStylesqALNumberFormatThreeMedium: function(test) {
        var fmt = new ListFmt({
            locale: "sq-AL",
            style: "unit",
            length: "medium"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["një", "dy", "tresh"]), "një, dy e tresh");
        test.done();
    },
    testListFmtUnitStylesqALNumberFormatFourMedium: function(test) {
        var fmt = new ListFmt({
            locale: "sq-AL",
            style: "unit",
            length: "medium"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["një", "dy", "tresh", "katër"]), "një, dy, tresh e katër");
        test.done();
    }
};
