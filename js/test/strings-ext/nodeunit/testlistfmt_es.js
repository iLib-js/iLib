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
    var ilib = require("../../../lib/ilib.js");
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
    },
    // es-AR
    testListFmtesARNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "es-AR"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno"]), "uno");
        test.done();
    },
    
    testListFmtesARNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "es-AR"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "dos"]), "uno y dos");
        test.done();
    },
    
    testListFmtesARNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "es-AR"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "dos", "tres"]), "uno, dos y tres");
        test.done();
    },
    
    testListFmtesARNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "es-AR"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "dos", "tres", "cuatro"]), "uno, dos, tres y cuatro");
        test.done();
    },  
    // es-BO
    testListFmtesBONumberFormatOneMedium: function(test) {
        var fmt = new ListFmt({
            locale: "es-BO",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno"]), "uno");
        test.done();
    },
    
    testListFmtesBONumberFormatTwoMedium: function(test) {
        var fmt = new ListFmt({
            locale: "es-BO",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "dos"]), "uno y dos");
        test.done();
    },
    
    testListFmtesBONumberFormatThreeMedium: function(test) {
        var fmt = new ListFmt({
            locale: "es-BO",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "dos", "tres"]), "uno, dos y tres");
        test.done();
    },
    
    testListFmtesBONumberFormatFourMedium: function(test) {
        var fmt = new ListFmt({
            locale: "es-BO",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "dos", "tres", "cuatro"]), "uno, dos, tres y cuatro");
        test.done();
    },
    // es-CL
    testListFmtesCLNumberFormatOneLong: function(test) {
        var fmt = new ListFmt({
            locale: "es-CL",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno"]), "uno");
        test.done();
    },
    
    testListFmtesCLNumberFormatTwoLong: function(test) {
        var fmt = new ListFmt({
            locale: "es-CL",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "dos"]), "uno y dos");
        test.done();
    },
    
    testListFmtesCLNumberFormatThreeLong: function(test) {
        var fmt = new ListFmt({
            locale: "es-CL",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "dos", "tres"]), "uno, dos y tres");
        test.done();
    },
    
    testListFmtesCLNumberFormatFourLong: function(test) {
        var fmt = new ListFmt({
            locale: "es-CL",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "dos", "tres", "cuatro"]), "uno, dos, tres y cuatro");
        test.done();
    },
    // es-CO
    testListFmtesCONumberFormatOneFull: function(test) {
        var fmt = new ListFmt({
            locale: "es-CO",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno"]), "uno");
        test.done();
    },
    
    testListFmtesCONumberFormatTwoFull: function(test) {
        var fmt = new ListFmt({
            locale: "es-CO",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "dos"]), "uno y dos");
        test.done();
    },
    
    testListFmtesCONumberFormatThreeFull: function(test) {
        var fmt = new ListFmt({
            locale: "es-CO",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "dos", "tres"]), "uno, dos y tres");
        test.done();
    },
    
    testListFmtesCONumberFormatFourFull: function(test) {
        var fmt = new ListFmt({
            locale: "es-CO",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "dos", "tres", "cuatro"]), "uno, dos, tres y cuatro");
        test.done();
    },
    // es-EC
    testListFmtUnitStyleesECNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "es-EC",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno"]), "uno");
        test.done();
    },
    
    testListFmtUnitStyleesECNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "es-EC",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "dos"]), "uno dos");
        test.done();
    },
    
    testListFmtUnitStyleesECNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "es-EC",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "dos", "tres"]), "uno dos tres");
        test.done();
    },
    
    testListFmtUnitStyleesECNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "es-EC",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "dos", "tres", "cuatro"]), "uno dos tres cuatro");
        test.done();
    },
    // es-GT
    testListFmtUnitStyleesGTNumberFormatOneMedium: function(test) {
        var fmt = new ListFmt({
            locale: "es-GT",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno"]), "uno");
        test.done();
    },
    
    testListFmtUnitStyleesGTNumberFormatTwoMedium: function(test) {
        var fmt = new ListFmt({
            locale: "es-GT",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "dos"]), "uno y dos");
        test.done();
    },
    
    testListFmtUnitStyleesGTNumberFormatThreeMedium: function(test) {
        var fmt = new ListFmt({
            locale: "es-GT",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "dos", "tres"]), "uno, dos, tres");
        test.done();
    },
    
    testListFmtUnitStyleesGTNumberFormatFourMedium: function(test) {
        var fmt = new ListFmt({
            locale: "es-GT",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "dos", "tres", "cuatro"]), "uno, dos, tres, cuatro");
        test.done();
    },
    // es-HN
    testListFmtUnitStyleesHNNumberFormatOneLong: function(test) {
        var fmt = new ListFmt({
            locale: "es-HN",
            style: "unit",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno"]), "uno");
        test.done();
    },
    
    testListFmtUnitStyleesHNNumberFormatTwoLong: function(test) {
        var fmt = new ListFmt({
            locale: "es-HN",
            style: "unit",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "dos"]), "uno y dos");
        test.done();
    },
    
    testListFmtUnitStyleesHNNumberFormatThreeLong: function(test) {
        var fmt = new ListFmt({
            locale: "es-HN",
            style: "unit",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "dos", "tres"]), "uno, dos y tres");
        test.done();
    },
    
    testListFmtUnitStyleesHNNumberFormatFourLong: function(test) {
        var fmt = new ListFmt({
            locale: "es-HN",
            style: "unit",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "dos", "tres", "cuatro"]), "uno, dos, tres y cuatro");
        test.done();
    },

    // es-MX
    testListFmtUnitStyleesMXNumberFormatOneFull: function(test) {
        var fmt = new ListFmt({
            locale: "es-MX",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno"]), "uno");
        test.done();
    },
    
    testListFmtUnitStyleesMXNumberFormatTwoFull: function(test) {
        var fmt = new ListFmt({
            locale: "es-MX",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "dos"]), "uno y dos");
        test.done();
    },
    
    testListFmtUnitStyleesMXNumberFormatThreeFull: function(test) {
        var fmt = new ListFmt({
            locale: "es-MX",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "dos", "tres"]), "uno, dos y tres");
        test.done();
    },
    
    testListFmtUnitStyleesMXNumberFormatFourFull: function(test) {
        var fmt = new ListFmt({
            locale: "es-MX",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "dos", "tres", "cuatro"]), "uno, dos, tres y cuatro");
        test.done();
    },
    // es-NI
    testListFmtesNINumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "es-NI"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno"]), "uno");
        test.done();
    },
    
    testListFmtesNINumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "es-NI"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "dos"]), "uno y dos");
        test.done();
    },
    
    testListFmtesNINumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "es-NI"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "dos", "tres"]), "uno, dos y tres");
        test.done();
    },
    
    testListFmtesNINumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "es-NI"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "dos", "tres", "cuatro"]), "uno, dos, tres y cuatro");
        test.done();
    },  
    // es-PA
    testListFmtesPANumberFormatOneMedium: function(test) {
        var fmt = new ListFmt({
            locale: "es-PA",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno"]), "uno");
        test.done();
    },
    
    testListFmtesPANumberFormatTwoMedium: function(test) {
        var fmt = new ListFmt({
            locale: "es-PA",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "dos"]), "uno y dos");
        test.done();
    },
    
    testListFmtesPANumberFormatThreeMedium: function(test) {
        var fmt = new ListFmt({
            locale: "es-PA",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "dos", "tres"]), "uno, dos y tres");
        test.done();
    },
    
    testListFmtesPANumberFormatFourMedium: function(test) {
        var fmt = new ListFmt({
            locale: "es-PA",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "dos", "tres", "cuatro"]), "uno, dos, tres y cuatro");
        test.done();
    },
    // es-PE
    testListFmtesPENumberFormatOneLong: function(test) {
        var fmt = new ListFmt({
            locale: "es-PE",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno"]), "uno");
        test.done();
    },
    
    testListFmtesPENumberFormatTwoLong: function(test) {
        var fmt = new ListFmt({
            locale: "es-PE",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "dos"]), "uno y dos");
        test.done();
    },
    
    testListFmtesPENumberFormatThreeLong: function(test) {
        var fmt = new ListFmt({
            locale: "es-PE",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "dos", "tres"]), "uno, dos y tres");
        test.done();
    },
    
    testListFmtesPENumberFormatFourLong: function(test) {
        var fmt = new ListFmt({
            locale: "es-PE",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "dos", "tres", "cuatro"]), "uno, dos, tres y cuatro");
        test.done();
    },
    // es-PR
    testListFmtesPRNumberFormatOneFull: function(test) {
        var fmt = new ListFmt({
            locale: "es-PR",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno"]), "uno");
        test.done();
    },
    
    testListFmtesPRNumberFormatTwoFull: function(test) {
        var fmt = new ListFmt({
            locale: "es-PR",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "dos"]), "uno y dos");
        test.done();
    },
    
    testListFmtesPRNumberFormatThreeFull: function(test) {
        var fmt = new ListFmt({
            locale: "es-PR",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "dos", "tres"]), "uno, dos y tres");
        test.done();
    },
    
    testListFmtesPRNumberFormatFourFull: function(test) {
        var fmt = new ListFmt({
            locale: "es-PR",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "dos", "tres", "cuatro"]), "uno, dos, tres y cuatro");
        test.done();
    },
    // es-SV
    testListFmtUnitStyleesSVNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "es-SV",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno"]), "uno");
        test.done();
    },
    
    testListFmtUnitStyleesSVNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "es-SV",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "dos"]), "uno dos");
        test.done();
    },
    
    testListFmtUnitStyleesSVNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "es-SV",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "dos", "tres"]), "uno dos tres");
        test.done();
    },
    
    testListFmtUnitStyleesSVNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "es-SV",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "dos", "tres", "cuatro"]), "uno dos tres cuatro");
        test.done();
    },
    // es-US
    testListFmtUnitStyleesUSNumberFormatOneMedium: function(test) {
        var fmt = new ListFmt({
            locale: "es-US",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno"]), "uno");
        test.done();
    },
    
    testListFmtUnitStyleesUSNumberFormatTwoMedium: function(test) {
        var fmt = new ListFmt({
            locale: "es-US",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "dos"]), "uno y dos");
        test.done();
    },
    
    testListFmtUnitStyleesUSNumberFormatThreeMedium: function(test) {
        var fmt = new ListFmt({
            locale: "es-US",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "dos", "tres"]), "uno, dos, tres");
        test.done();
    },
    
    testListFmtUnitStyleesUSNumberFormatFourMedium: function(test) {
        var fmt = new ListFmt({
            locale: "es-US",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "dos", "tres", "cuatro"]), "uno, dos, tres, cuatro");
        test.done();
    },
    // es-UY
    testListFmtUnitStyleesHNNumberFormatOneLong: function(test) {
        var fmt = new ListFmt({
            locale: "es-UY",
            style: "unit",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno"]), "uno");
        test.done();
    },
    
    testListFmtUnitStyleesUYNumberFormatTwoLong: function(test) {
        var fmt = new ListFmt({
            locale: "es-UY",
            style: "unit",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "dos"]), "uno y dos");
        test.done();
    },
    
    testListFmtUnitStyleesUYNumberFormatThreeLong: function(test) {
        var fmt = new ListFmt({
            locale: "es-UY",
            style: "unit",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "dos", "tres"]), "uno, dos y tres");
        test.done();
    },
    
    testListFmtUnitStyleesUYNumberFormatFourLong: function(test) {
        var fmt = new ListFmt({
            locale: "es-UY",
            style: "unit",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "dos", "tres", "cuatro"]), "uno, dos, tres y cuatro");
        test.done();
    },

    // es-VE
    testListFmtUnitStyleesVENumberFormatOneFull: function(test) {
        var fmt = new ListFmt({
            locale: "es-VE",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno"]), "uno");
        test.done();
    },
    
    testListFmtUnitStyleesVENumberFormatTwoFull: function(test) {
        var fmt = new ListFmt({
            locale: "es-VE",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "dos"]), "uno y dos");
        test.done();
    },
    
    testListFmtUnitStyleesVENumberFormatThreeFull: function(test) {
        var fmt = new ListFmt({
            locale: "es-VE",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "dos", "tres"]), "uno, dos y tres");
        test.done();
    },
    
    testListFmtUnitStyleesVENumberFormatFourFull: function(test) {
        var fmt = new ListFmt({
            locale: "es-VE",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "dos", "tres", "cuatro"]), "uno, dos, tres y cuatro");
        test.done();
    },
    // es-CA
    testListFmtesCANumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "es-CA"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno"]), "uno");
        test.done();
    },
    
    testListFmtesCANumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "es-CA"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "dos"]), "uno y dos");
        test.done();
    },
    
    testListFmtesCANumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "es-CA"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "dos", "tres"]), "uno, dos y tres");
        test.done();
    },
    
    testListFmtesCANumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "es-CA"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "dos", "tres", "cuatro"]), "uno, dos, tres y cuatro");
        test.done();
    },  
    // es-CR
    testListFmtesCRNumberFormatOneMedium: function(test) {
        var fmt = new ListFmt({
            locale: "es-CR",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno"]), "uno");
        test.done();
    },
    
    testListFmtesCRNumberFormatTwoMedium: function(test) {
        var fmt = new ListFmt({
            locale: "es-CR",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "dos"]), "uno y dos");
        test.done();
    },
    
    testListFmtesCRNumberFormatThreeMedium: function(test) {
        var fmt = new ListFmt({
            locale: "es-CR",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "dos", "tres"]), "uno, dos y tres");
        test.done();
    },
    
    testListFmtesCRNumberFormatFourMedium: function(test) {
        var fmt = new ListFmt({
            locale: "es-CR",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "dos", "tres", "cuatro"]), "uno, dos, tres y cuatro");
        test.done();
    },
    // es-GQ
    testListFmtesGQNumberFormatOneLong: function(test) {
        var fmt = new ListFmt({
            locale: "es-GQ",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno"]), "uno");
        test.done();
    },
    
    testListFmtesGQNumberFormatTwoLong: function(test) {
        var fmt = new ListFmt({
            locale: "es-GQ",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "dos"]), "uno y dos");
        test.done();
    },
    
    testListFmtesGQNumberFormatThreeLong: function(test) {
        var fmt = new ListFmt({
            locale: "es-GQ",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "dos", "tres"]), "uno, dos y tres");
        test.done();
    },
    
    testListFmtesGQNumberFormatFourLong: function(test) {
        var fmt = new ListFmt({
            locale: "es-GQ",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "dos", "tres", "cuatro"]), "uno, dos, tres y cuatro");
        test.done();
    },
    // es-PH
    testListFmtesPHNumberFormatOneFull: function(test) {
        var fmt = new ListFmt({
            locale: "es-PH",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno"]), "uno");
        test.done();
    },
    
    testListFmtesPHNumberFormatTwoFull: function(test) {
        var fmt = new ListFmt({
            locale: "es-PH",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "dos"]), "uno y dos");
        test.done();
    },
    
    testListFmtesPHNumberFormatThreeFull: function(test) {
        var fmt = new ListFmt({
            locale: "es-PH",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "dos", "tres"]), "uno, dos y tres");
        test.done();
    },
    testListFmtesPHNumberFormatFourFull: function(test) {
        var fmt = new ListFmt({
            locale: "es-PH",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["uno", "dos", "tres", "cuatro"]), "uno, dos, tres y cuatro");
        test.done();
    }
};
