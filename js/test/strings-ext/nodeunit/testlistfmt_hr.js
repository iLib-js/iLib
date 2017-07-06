/*
 * testlistfmt_hr.js - test the list formatter object
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
    var ilib = require("../../..");
}

module.exports.testlistfmt_hr = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    // hr-HR
    
    testListFmthrHRNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "hr-HR"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["jedan"]), "jedan");
        test.done();
    },
    
    testListFmthrHRNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "hr-HR"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["jedan", "dva"]), "jedan i dva");
        test.done();
    },
    
    testListFmthrHRNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "hr-HR"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["jedan", "dva", "три"]), "jedan, dva i три");
        test.done();
    },
    
    testListFmthrHRNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "hr-HR"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["jedan", "dva", "tri", "četiri"]), "jedan, dva, tri i četiri");
        test.done();
    },
    
    testListFmtUnitStylehrHRNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "hr-HR",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["jedan"]), "jedan");
        test.done();
    },
    
    testListFmtUnitStylehrHRNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "hr-HR",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["jedan", "dva"]), "jedan dva");
        test.done();
    },
    
    testListFmtUnitStylehrHRNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "hr-HR",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["jedan", "dva", "три"]), "jedan dva три");
        test.done();
    },
    
    testListFmtUnitStylehrHRNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "hr-HR",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["jedan", "dva", "три", "četiri"]), "jedan dva три četiri");
        test.done();
    },
    
    testListFmtUnitStylehrHRNumberFormatFive: function(test) {
        var fmt = new ListFmt({
            locale: "hr-HR",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["jedan", "dva", "три", "četiri", "пять"]), "jedan dva три četiri пять");
        test.done();
    },








    // hr-ME
    
    testListFmthrMENumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "hr-ME"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["jedan"]), "jedan");
        test.done();
    },
    
    testListFmthrMENumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "hr-ME"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["jedan", "dva"]), "jedan i dva");
        test.done();
    },
    
    testListFmthrMENumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "hr-ME"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["jedan", "dva", "три"]), "jedan, dva i три");
        test.done();
    },
    
    testListFmthrMENumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "hr-ME"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["jedan", "dva", "tri", "četiri"]), "jedan, dva, tri i četiri");
        test.done();
    },
    
    testListFmtUnitStylehrMENumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "hr-ME",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["jedan"]), "jedan");
        test.done();
    },
    
    testListFmtUnitStylehrMENumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "hr-ME",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["jedan", "dva"]), "jedan dva");
        test.done();
    },
    
    testListFmtUnitStylehrMENumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "hr-ME",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["jedan", "dva", "три"]), "jedan dva три");
        test.done();
    },
    
    testListFmtUnitStylehrMENumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "hr-ME",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["jedan", "dva", "три", "četiri"]), "jedan dva три četiri");
        test.done();
    },
    
    testListFmtUnitStylehrMENumberFormatFive: function(test) {
        var fmt = new ListFmt({
            locale: "hr-ME",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["jedan", "dva", "три", "četiri", "пять"]), "jedan dva три četiri пять");
        test.done();
    },



    testListFmtUnitStylehrMENumberFormatOneFull: function(test) {
        var fmt = new ListFmt({
            locale: "hr-ME",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["jedan"]), "jedan");
        test.done();
    },
    
    testListFmtUnitStylehrMENumberFormatTwoFull: function(test) {
        var fmt = new ListFmt({
            locale: "hr-ME",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["jedan", "dva"]), "jedan i dva");
        test.done();
    },
    
    testListFmtUnitStylehrMENumberFormatThreeFull: function(test) {
        var fmt = new ListFmt({
            locale: "hr-ME",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["jedan", "dva", "три"]), "jedan, dva i три");
        test.done();
    },
    
    testListFmtUnitStylehrMENumberFormatFourFull: function(test) {
        var fmt = new ListFmt({
            locale: "hr-ME",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["jedan", "dva", "три", "četiri"]), "jedan, dva, три i četiri");
        test.done();
    },
    
    testListFmtUnitStylehrMENumberFormatFiveFull: function(test) {
        var fmt = new ListFmt({
            locale: "hr-ME",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["jedan", "dva", "три", "četiri", "пять"]), "jedan, dva, три, četiri i пять");
        test.done();
    }
};
