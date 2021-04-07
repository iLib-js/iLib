/*
 * testlistfmt_tk_TM.js - test the list formatter object
 *
 * Copyright © 2021, JEDLSoft
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

module.exports.testlistfmt_tk_TM = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testListFmtNumberFormatOne_tk_TM: function(test) {
        var fmt = new ListFmt({
            locale: "tk-TM"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["biri"]), "biri");
        test.done();
    },
    testListFmtNumberFormatTwo_tk_TM: function(test) {
        var fmt = new ListFmt({
            locale: "tk-TM"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["biri", "iki"]), "biri we iki");
        test.done();
    },
    testListFmtNumberFormatThree_tk_TM: function(test) {
        var fmt = new ListFmt({
            locale: "tk-TM"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["biri", "iki", "üç"]), "biri, iki we üç");
        test.done();
    },
    testListFmtNumberFormatFour_tk_TM: function(test) {
        var fmt = new ListFmt({
            locale: "tk-TM"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["biri", "iki", "üç", "dört"]), "biri, iki, üç we dört");
        test.done();
    },
    testListFmtNumberFormatFive_tk_TM: function(test) {
        var fmt = new ListFmt({
            locale: "tk-TM"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["biri", "iki", "üç", "dört", "bäş"]), "biri, iki, üç, dört we bäş");
        test.done();
    },
    testListFmtUnitStyleNumberFormatOneShort_tk_TM: function(test) {
        var fmt = new ListFmt({
            locale: "tk-TM",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["biri"]), "biri");
        test.done();
    },
    testListFmtUnitStyleNumberFormatTwoShort_tk_TM: function(test) {
        var fmt = new ListFmt({
            locale: "tk-TM",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["biri", "iki"]), "biri, iki");
        test.done();
    },
    testListFmtUnitStyleNumberFormatThreeShort_tk_TM: function(test) {
        var fmt = new ListFmt({
            locale: "tk-TM",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["biri", "iki", "üç"]), "biri, iki, üç");
        test.done();
    },
    testListFmtUnitStyleNumberFormatFourShort_tk_TM: function(test) {
        var fmt = new ListFmt({
            locale: "tk-TM",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["biri", "iki", "üç", "dört"]), "biri, iki, üç, dört");
        test.done();
    },
    testListFmtUnitStyleNumberFormatFiveShort_tk_TM: function(test) {
        var fmt = new ListFmt({
            locale: "tk-TM",
            style: "unit"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["biri", "iki", "üç", "dört", "bäş"]), "biri, iki, üç, dört, bäş");
        test.done();
    },
    testListFmtUnitStyleNumberFormatOneFull_tk_TM: function(test) {
        var fmt = new ListFmt({
            locale: "tk-TM",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["biri"]), "biri");
        test.done();
    },
    testListFmtUnitStyleNumberFormatTwoFull_tk_TM: function(test) {
        var fmt = new ListFmt({
            locale: "tk-TM",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["biri", "iki"]), "biri, iki");
        test.done();
    },
    testListFmtUnitStyleNumberFormatThreeFull_tk_TM: function(test) {
        var fmt = new ListFmt({
            locale: "tk-TM",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["biri", "iki", "üç"]), "biri, iki, üç");
        test.done();
    },
    testListFmtUnitStyleNumberFormatFourFull_tk_TM: function(test) {
        var fmt = new ListFmt({
            locale: "tk-TM",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["biri", "iki", "üç", "dört"]), "biri, iki, üç, dört");
        test.done();
    },
    testListFmtUnitStyleNumberFormatFiveFull_tk_TM: function(test) {
        var fmt = new ListFmt({
            locale: "tk-TM",
            style: "unit",
            length: "full"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["biri", "iki", "üç", "dört", "bäş"]), "biri, iki, üç, dört, bäş");
        test.done();
    },
    testListFmtORStyleNumberFormatOne_tk_TM: function(test) {
        var fmt = new ListFmt({
            locale: "tk-TM",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["biri"]), "biri");
        test.done();
    },
    testListFmtORStyleNumberFormatTwo_tk_TM: function(test) {
        var fmt = new ListFmt({
            locale: "tk-TM",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["biri", "iki"]), "biri ýa-da iki");
        test.done();
    },
    testListFmtORStyleNumberFormatThree_tk_TM: function(test) {
        var fmt = new ListFmt({
            locale: "tk-TM",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["biri", "iki", "üç"]), "biri, iki ýa-da üç");
        test.done();
    },
    testListFmtORStyleNumberFormatFour_tk_TM: function(test) {
        var fmt = new ListFmt({
            locale: "tk-TM",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["biri", "iki", "üç", "dört"]), "biri, iki, üç ýa-da dört");
        test.done();
    },
    testListFmtORStyleNumberFormatFiveFull_tk_TM: function(test) {
        var fmt = new ListFmt({
            locale: "tk-TM",
            style: "disjunction"
        });

        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["biri", "iki", "üç", "dört", "bäş"]), "biri, iki, üç, dört ýa-da bäş");
        test.done();
    }
};