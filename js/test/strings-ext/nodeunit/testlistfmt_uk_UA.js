/*
 * testlistfmt_uk_UA.js - test the list formatter object
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

module.exports.testlistfmt_uk_UA = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    // uk-UA
    
    testListFmtukUANumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "uk-UA"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["Один"]), "Один");
        test.done();
    },
    
    testListFmtukUANumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "uk-UA"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["Один", "Два"]), "Один і Два");
        test.done();
    },
    
    testListFmtukUANumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "uk-UA"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["Один", "Два", "Три"]), "Один, Два і Три");
        test.done();
    },
    
    testListFmtukUANumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "uk-UA"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["Один", "Два", "Три", "Чотири"]), "Один, Два, Три і Чотири");
        test.done();
    },
    testListFmtUnitStyleukUANumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "uk-UA",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["Один"]), "Один");
        test.done();
    },
    
    testListFmtUnitStyleukUANumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "uk-UA",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["Один", "Два"]), "Один, Два");
        test.done();
    },
    
    testListFmtUnitStyleukUANumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "uk-UA",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["Один", "Два", "Три"]), "Один, Два, Три");
        test.done();
    },
    
    testListFmtUnitStyleukUANumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "uk-UA",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["Один", "Два", "Три", "Чотири"]), "Один, Два, Три, Чотири");
        test.done();
    },
    testListFmtUnitStyleukUANumberFormatOneFull: function(test) {
        var fmt = new ListFmt({
            locale: "uk-UA",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["Один"]), "Один");
        test.done();
    },
    
    testListFmtUnitStyleukUANumberFormatTwoFull: function(test) {
        var fmt = new ListFmt({
            locale: "uk-UA",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["Один", "Два"]), "Один і Два");
        test.done();
    },
    
    testListFmtUnitStyleukUANumberFormatThreeFull: function(test) {
        var fmt = new ListFmt({
            locale: "uk-UA",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["Один", "Два", "Три"]), "Один, Два і Три");
        test.done();
    },
    
    testListFmtUnitStyleukUANumberFormatFourFull: function(test) {
        var fmt = new ListFmt({
            locale: "uk-UA",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["Один", "Два", "Три", "Чотири"]), "Один, Два, Три і Чотири");
        test.done();
    }
};
