/*
 * testlistfmt_he_IL.js - test the list formatter object
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

module.exports.testlistfmt_he_IL = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    // he-IL
    
    testListFmtheILNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "he-IL"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["אחד"]), "אחד");
        test.done();
    },
    
    testListFmtheILNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "he-IL"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["אחד", "שתיים"]), "אחד ושתיים");
        test.done();
    },
    
    testListFmtheILNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "he-IL"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["אחד", "שתיים", "שְׁלוֹשָׁה"]), "אחד, שתיים ושְׁלוֹשָׁה");
        test.done();
    },
    
    testListFmtheILNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "he-IL"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["אחד", "שתיים", "שְׁלוֹשָׁה", "ארבעה"]), "אחד, שתיים, שְׁלוֹשָׁה וארבעה");
        test.done();
    },
    testListFmtUnitStyleheILNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "he-IL",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["אחד"]), "אחד");
        test.done();
    },
    
    testListFmtUnitStyleheILNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "he-IL",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["אחד", "שתיים"]), "אחד שתיים");
        test.done();
    },
    
    testListFmtUnitStyleheILNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "he-IL",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["אחד", "שתיים", "שְׁלוֹשָׁה"]), "אחד שתיים שְׁלוֹשָׁה");
        test.done();
    },
    
    testListFmtUnitStyleheILNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "he-IL",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["אחד", "שתיים", "שְׁלוֹשָׁה", "ארבעה"]), "אחד שתיים שְׁלוֹשָׁה ארבעה");
        test.done();
    },
    testListFmtUnitStyleheILNumberFormatOneMedium: function(test) {
        var fmt = new ListFmt({
            locale: "he-IL",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["אחד"]), "אחד");
        test.done();
    },
    
    testListFmtUnitStyleheILNumberFormatTwoMedium: function(test) {
        var fmt = new ListFmt({
            locale: "he-IL",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["אחד", "שתיים"]), "אחד, שתיים");
        test.done();
    },
    
    testListFmtUnitStyleheILNumberFormatThreeMedium: function(test) {
        var fmt = new ListFmt({
            locale: "he-IL",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["אחד", "שתיים", "שְׁלוֹשָׁה"]), "אחד, שתיים, שְׁלוֹשָׁה");
        test.done();
    },
    
    testListFmtUnitStyleheILNumberFormatFourMedium: function(test) {
        var fmt = new ListFmt({
            locale: "he-IL",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["אחד", "שתיים", "שְׁלוֹשָׁה", "ארבעה"]), "אחד, שתיים, שְׁלוֹשָׁה, ארבעה");
        test.done();
    },
    testListFmtUnitStyleheILNumberFormatOneFull: function(test) {
        var fmt = new ListFmt({
            locale: "he-IL",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["אחד"]), "אחד");
        test.done();
    },
    
    testListFmtUnitStyleheILNumberFormatTwoFull: function(test) {
        var fmt = new ListFmt({
            locale: "he-IL",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["אחד", "שתיים"]), "אחד, שתיים");
        test.done();
    },
    
    testListFmtUnitStyleheILNumberFormatThreeFull: function(test) {
        var fmt = new ListFmt({
            locale: "he-IL",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["אחד", "שתיים", "שְׁלוֹשָׁה"]), "אחד, שתיים ושְׁלוֹשָׁה");
        test.done();
    },
    
    testListFmtUnitStyleheILNumberFormatFourFull: function(test) {
        var fmt = new ListFmt({
            locale: "he-IL",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["אחד", "שתיים", "שְׁלוֹשָׁה", "ארבעה"]), "אחד, שתיים, שְׁלוֹשָׁה וארבעה");
        test.done();
    }

};
