/*
 * testlistfmt_ur.js - test the list formatter object
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

module.exports.testlistfmt_ur = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    // ur-Arab-PK
    
    testListFmturArabPKNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "ur-Arab-PK"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ایک کو"]), "ایک کو");
        test.done();
    },
    
    testListFmturArabPKNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "ur-Arab-PK"
        });
    
        test.expect(2);
        test.ok(fmt !== null);                  
        test.equal(fmt.format(["ایک کو", "دو"]), "ایک کو اور دو");
        test.done();
    },
    
    testListFmturArabPKNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "ur-Arab-PK"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ایک کو", "دو", "تین"]), "ایک کو، دو، اور تین");
        test.done();
    },
    
    testListFmturArabPKNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "ur-Arab-PK"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ایک کو", "دو", "تین", "چار"]), "ایک کو، دو، تین، اور چار");
        test.done();
    },
    testListFmtUnitStyleurArabPKNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "ur-Arab-PK",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ایک کو"]), "ایک کو");
        test.done();
    },
    
    testListFmtUnitStyleurArabPKNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "ur-Arab-PK",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ایک کو", "دو"]), "ایک کو اور دو");
        test.done();
    },
    
    testListFmtUnitStyleurArabPKNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "ur-Arab-PK",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ایک کو", "دو", "تین"]), "ایک کو، دو، اور تین");
        test.done();
    },
    
    testListFmtUnitStyleurArabPKNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "ur-Arab-PK",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ایک کو", "دو", "تین", "چار"]), "ایک کو، دو، تین، اور چار");
        test.done();
    },
    testListFmtUnitStyleurArabPKNumberFormatOneMedium: function(test) {
        var fmt = new ListFmt({
            locale: "ur-Arab-PK",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ایک کو"]), "ایک کو");
        test.done();
    },
    
    testListFmtUnitStyleurArabPKNumberFormatTwoMedium: function(test) {
        var fmt = new ListFmt({
            locale: "ur-Arab-PK",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ایک کو", "دو"]), "ایک کو اور دو");
        test.done();
    },
    
    testListFmtUnitStyleurArabPKNumberFormatThreeMedium: function(test) {
        var fmt = new ListFmt({
            locale: "ur-Arab-PK",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ایک کو", "دو", "تین"]), "ایک کو، دو، اور تین");
        test.done();
    },
    
    testListFmtUnitStyleurArabPKNumberFormatFourMedium: function(test) {
        var fmt = new ListFmt({
            locale: "ur-Arab-PK",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ایک کو", "دو", "تین", "چار"]), "ایک کو، دو، تین، اور چار");
        test.done();
    },



    // ur-Arab-IN
    
    testListFmturArabINNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "ur-Arab-IN"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ایک کو"]), "ایک کو");
        test.done();
    },
    
    testListFmturArabINNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "ur-Arab-IN"
        });
    
        test.expect(2);
        test.ok(fmt !== null);                  
        test.equal(fmt.format(["ایک کو", "دو"]), "ایک کو اور دو");
        test.done();
    },
    
    testListFmturArabINNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "ur-Arab-IN"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ایک کو", "دو", "تین"]), "ایک کو، دو، اور تین");
        test.done();
    },
    
    testListFmturArabINNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "ur-Arab-IN"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ایک کو", "دو", "تین", "چار"]), "ایک کو، دو، تین، اور چار");
        test.done();
    },
    testListFmtUnitStyleurArabINNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "ur-Arab-IN",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ایک کو"]), "ایک کو");
        test.done();
    },
    
    testListFmtUnitStyleurArabINNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "ur-Arab-IN",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);                    
        test.equal(fmt.format(["ایک کو", "دو"]), "دو، ایک کو");
        test.done();
    },
    
    testListFmtUnitStyleurArabINNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "ur-Arab-IN",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ایک کو", "دو", "تین"]), "ایک کو، تین، دو");
        test.done();
    },
    
    testListFmtUnitStyleurArabINNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "ur-Arab-IN",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ایک کو", "دو", "تین", "چار"]), "ایک کو، دو، چار، تین");
        test.done();
    },
    testListFmtUnitStyleurArabINNumberFormatOneFull: function(test) {
        var fmt = new ListFmt({
            locale: "ur-Arab-IN",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ایک کو"]), "ایک کو");
        test.done();
    },
    
    testListFmtUnitStyleurArabINNumberFormatTwoFull: function(test) {
        var fmt = new ListFmt({
            locale: "ur-Arab-IN",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);                    
        test.equal(fmt.format(["ایک کو", "دو"]), "دو، ایک کو");
        test.done();
    },
    
    testListFmtUnitStyleurArabINNumberFormatThreeFull: function(test) {
        var fmt = new ListFmt({
            locale: "ur-Arab-IN",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ایک کو", "دو", "تین"]), "ایک کو, تین، دو");
        test.done();
    },
    
    testListFmtUnitStyleurArabINNumberFormatFourFull: function(test) {
        var fmt = new ListFmt({
            locale: "ur-Arab-IN",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["ایک کو", "دو", "تین", "چار"]), "ایک کو, دو, چار، تین");
        test.done();
    }
};
