/*
 * testlistfmt_th_TH.js - test the list formatter object
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

if (typeof(ilib) === "undefined") {
    var ilib = require("../../../lib/ilib.js");
}

module.exports.testlistfmt_th_TH = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    // th-TH
    
    testListFmtthTHNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "th-TH"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["หนึ่ง"]), "หนึ่ง");
        test.done();
    },
    
    testListFmtthTHNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "th-TH"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["หนึ่ง", "สอง"]), "หนึ่ง และ สอง");
        test.done();
    },
    
    testListFmtthTHNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "th-TH"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["หนึ่ง", "สอง", "สาม"]), "หนึ่ง สอง และสาม");
        test.done();
    },
    
    testListFmtthTHNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "th-TH"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["หนึ่ง", "สอง", "สาม", "สี่"]), "หนึ่ง สอง สาม และสี่");
        test.done();
    },
    testListFmtUnitStylethTHNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "th-TH",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["หนึ่ง"]), "หนึ่ง");
        test.done();
    },
    
    testListFmtUnitStylethTHNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "th-TH",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["หนึ่ง", "สอง"]), "หนึ่ง สอง");
        test.done();
    },
    
    testListFmtUnitStylethTHNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "th-TH",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["หนึ่ง", "สอง", "สาม"]), "หนึ่ง สอง สาม");
        test.done();
    },
    
    testListFmtUnitStylethTHNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "th-TH",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["หนึ่ง", "สอง", "สาม", "สี่"]), "หนึ่ง สอง สาม สี่");
        test.done();
    },
    testListFmtUnitStylethTHNumberFormatOneMedium: function(test) {
        var fmt = new ListFmt({
            locale: "th-TH",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["หนึ่ง"]), "หนึ่ง");
        test.done();
    },
    
    testListFmtUnitStylethTHNumberFormatTwoMedium: function(test) {
        var fmt = new ListFmt({
            locale: "th-TH",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["หนึ่ง", "สอง"]), "หนึ่ง สอง");
        test.done();
    },
    
    testListFmtUnitStylethTHNumberFormatThreeMedium: function(test) {
        var fmt = new ListFmt({
            locale: "th-TH",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["หนึ่ง", "สอง", "สาม"]), "หนึ่ง สอง และ สาม");
        test.done();
    },
    
    testListFmtUnitStylethTHNumberFormatFourMedium: function(test) {
        var fmt = new ListFmt({
            locale: "th-TH",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["หนึ่ง", "สอง", "สาม", "สี่"]), "หนึ่ง สอง สาม และ สี่");
        test.done();
    },

};
