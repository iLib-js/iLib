/*
 * testlistfmt_es.js - test the list formatter object
 *
 * Copyright © 2017,2017, JEDLSoft
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
    var ListFmt = require("../.././../lib/ListFmt.js");
}

// es-ES

if (typeof(ilib) === "undefined") {
    var ilib = require("../../..");
}

module.exports.testlistfmt_es = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testListFmtesESNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "es-ES"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno"]), "uno");
        test.done();
    },
    
    testListFmtesESNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "es-ES"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "dos"]), "uno y dos");
        test.done();
    },
    
    testListFmtesESNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "es-ES"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "dos", "tres"]), "uno, dos y tres");
        test.done();
    },
    
    testListFmtesESNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "es-ES"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "dos", "tres", "cuatro"]), "uno, dos, tres y cuatro");
        test.done();
    },
    
    testListFmtUnitStyleesESNumberFormatOneMedium: function(test) {
        var fmt = new ListFmt({
            locale: "es-ES",
            style:"unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno"]), "uno");
        test.done();
    },
    
    testListFmtUnitStyleesESNumberFormatTwoUnitStyleMedium: function(test) {
        var fmt = new ListFmt({
            locale: "es-ES",
            style:"unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "dos"]), "uno y dos");
        test.done();
    },
    
    testListFmtUnitStyleesESNumberFormatThreeMedium: function(test) {
        var fmt = new ListFmt({
            locale: "es-ES",
            style:"unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "dos", "tres"]), "uno, dos, tres");
        test.done();
    },
    
    testListFmtUnitStyleesESNumberFormatFourMedium: function(test) {
        var fmt = new ListFmt({
            locale: "es-ES",
            style:"unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "dos", "tres", "cuatro"]), "uno, dos, tres, cuatro");
        test.done();
    },
    
    testListFmtUnitStyleesESNumberFormatFiveMedium: function(test) {
        var fmt = new ListFmt({
            locale: "es-ES",
            style:"unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "dos", "tres", "cuatro", "cinco"]), "uno, dos, tres, cuatro, cinco");
        test.done();
    },
    
    testListFmtUnitStyleesESNumberFormatOneLong: function(test) {
        var fmt = new ListFmt({
            locale: "es-ES",
            style:"unit",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno"]), "uno");
        test.done();
    },
    
    testListFmtUnitStyleesESNumberFormatTwoUnitStyleLong: function(test) {
        var fmt = new ListFmt({
            locale: "es-ES",
            style:"unit",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "dos"]), "uno y dos");
        test.done();
    },
    
    testListFmtUnitStyleesESNumberFormatThreeLong: function(test) {
        var fmt = new ListFmt({
            locale: "es-ES",
            style:"unit",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "dos", "tres"]), "uno, dos y tres");
        test.done();
    },
    
    testListFmtUnitStyleesESNumberFormatFourLong: function(test) {
        var fmt = new ListFmt({
            locale: "es-ES",
            style:"unit",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "dos", "tres", "cuatro"]), "uno, dos, tres y cuatro");
        test.done();
    },
    
    testListFmtUnitStyleesESNumberFormatFiveLong: function(test) {
        var fmt = new ListFmt({
            locale: "es-ES",
            style:"unit",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "dos", "tres", "cuatro", "cinco"]), "uno, dos, tres, cuatro y cinco");
        test.done();
    },
    
    testListFmtUnitStyleesESNumberFormatOneFull: function(test) {
        var fmt = new ListFmt({
            locale: "es-ES",
            style:"unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno"]), "uno");
        test.done();
    },
    
    testListFmtUnitStyleesESNumberFormatTwoUnitStyleFull: function(test) {
        var fmt = new ListFmt({
            locale: "es-ES",
            style:"unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "dos"]), "uno y dos");
        test.done();
    },
    
    testListFmtUnitStyleesESNumberFormatThreeFull: function(test) {
        var fmt = new ListFmt({
            locale: "es-ES",
            style:"unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "dos", "tres"]), "uno, dos y tres");
        test.done();
    },
    
    testListFmtUnitStyleesESNumberFormatFourFull: function(test) {
        var fmt = new ListFmt({
            locale: "es-ES",
            style:"unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "dos", "tres", "cuatro"]), "uno, dos, tres y cuatro");
        test.done();
    },
    
    testListFmtUnitStyleesESNumberFormatFiveFull: function(test) {
        var fmt = new ListFmt({
            locale: "es-ES",
            style:"unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "dos", "tres", "cuatro", "cinco"]), "uno, dos, tres, cuatro y cinco");
        test.done();
    },
    
    
    
    
    
    
    
    
    // es-DO
    
    testListFmtUnitStyleesDONumberFormatOneShort: function(test) {
        var fmt = new ListFmt({
            locale: "es-DO",
            style:"unit",
            length: "short"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno"]), "uno");
        test.done();
    },
    
    testListFmtUnitStyleesDONumberFormatTwoUnitStyleShort: function(test) {
        var fmt = new ListFmt({
            locale: "es-DO",
            style:"unit",
            length: "short"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "dos"]), "uno dos");
        test.done();
    },
    
    testListFmtUnitStyleesDONumberFormatThreeShort: function(test) {
        var fmt = new ListFmt({
            locale: "es-DO",
            style:"unit",
            length: "short"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "dos", "tres"]), "uno dos y tres");
        test.done();
    },
    
    testListFmtUnitStyleesDONumberFormatFourShort: function(test) {
        var fmt = new ListFmt({
            locale: "es-DO",
            style:"unit",
            length: "short"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "dos", "tres", "cuatro"]), "uno dos tres y cuatro");
        test.done();
    },
    
    testListFmtUnitStyleesDONumberFormatFiveShort: function(test) {
        var fmt = new ListFmt({
            locale: "es-DO",
            style:"unit",
            length: "short"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "dos", "tres", "cuatro", "cinco"]), "uno dos tres cuatro y cinco");
        test.done();
    },
    
    testListFmtUnitStyleesDONumberFormatOneMedium: function(test) {
        var fmt = new ListFmt({
            locale: "es-DO",
            style:"unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno"]), "uno");
        test.done();
    },
    
    testListFmtUnitStyleesDONumberFormatTwoUnitStyleMedium: function(test) {
        var fmt = new ListFmt({
            locale: "es-DO",
            style:"unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "dos"]), "uno y dos");
        test.done();
    },
    
    testListFmtUnitStyleesDONumberFormatThreeMedium: function(test) {
        var fmt = new ListFmt({
            locale: "es-DO",
            style:"unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "dos", "tres"]), "uno, dos y tres");
        test.done();
    },
    
    testListFmtUnitStyleesDONumberFormatFourMedium: function(test) {
        var fmt = new ListFmt({
            locale: "es-DO",
            style:"unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "dos", "tres", "cuatro"]), "uno, dos, tres y cuatro");
        test.done();
    },
    
    testListFmtUnitStyleesDONumberFormatFiveMedium: function(test) {
        var fmt = new ListFmt({
            locale: "es-DO",
            style:"unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "dos", "tres", "cuatro", "cinco"]), "uno, dos, tres, cuatro y cinco");
        test.done();
    },
    
    // es-PY
    
    testListFmtUnitStyleesPYNumberFormatOneMedium: function(test) {
        var fmt = new ListFmt({
            locale: "es-PY",
            style:"unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno"]), "uno");
        test.done();
    },
    
    testListFmtUnitStyleesPYNumberFormatTwoUnitStyleMedium: function(test) {
        var fmt = new ListFmt({
            locale: "es-PY",
            style:"unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "dos"]), "uno y dos");
        test.done();
    },
    
    testListFmtUnitStyleesPYNumberFormatThreeMedium: function(test) {
        var fmt = new ListFmt({
            locale: "es-PY",
            style:"unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "dos", "tres"]), "uno, dos y tres");
        test.done();
    },
    
    testListFmtUnitStyleesPYNumberFormatFourMedium: function(test) {
        var fmt = new ListFmt({
            locale: "es-PY",
            style:"unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "dos", "tres", "cuatro"]), "uno, dos, tres y cuatro");
        test.done();
    },
    
    testListFmtUnitStyleesPYNumberFormatFiveMedium: function(test) {
        var fmt = new ListFmt({
            locale: "es-PY",
            style:"unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "dos", "tres", "cuatro", "cinco"]), "uno, dos, tres, cuatro y cinco");
        test.done();
    }
};