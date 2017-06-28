/*
 * testlistfmt_en.js - test the list formatter object
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

//en-US
if (typeof(ilib) === "undefined") {
    var ilib = require("../../..");
}

module.exports.testlistfmt_en = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testListFmtenUSNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "en-US"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one"]), "one");
        test.done();
    },
    
    testListFmtenUSNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "en-US"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two"]), "one and two");
        test.done();
    },
    
    testListFmtenUSNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "en-US"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two", "three"]), "one, two, and three");
        test.done();
    },
    
    testListFmtenUSNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "en-US"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two", "three", "four"]), "one, two, three, and four");
        test.done();
    },
    
    testListFmtenUSNumberFormatFive: function(test) {
        var fmt = new ListFmt({
            locale: "en-US"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two", "three", "four", "five"]), "one, two, three, four, and five");
        test.done();
    },
    
    testListFmtUnitStyleenUSNumberFormatOneShort: function(test) {
        var fmt = new ListFmt({
            locale: "en-US",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one"]), "one");
        test.done();
    },
    
    testListFmtUnitStyleenUSNumberFormatTwoShort: function(test) {
        var fmt = new ListFmt({
            locale: "en-US",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two"]), "one two");
        test.done();
    },
    
    testListFmtUnitStyleenUSNumberFormatThreeShort: function(test) {
        var fmt = new ListFmt({
            locale: "en-US",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two", "three"]), "one two three");
        test.done();
    },
    
    testListFmtUnitStyleenUSNumberFormatFourShort: function(test) {
        var fmt = new ListFmt({
            locale: "en-US",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two", "three", "four"]), "one two three four");
        test.done();
    },
    
    testListFmtUnitStyleenUSNumberFormatFiveShort: function(test) {
        var fmt = new ListFmt({
            locale: "en-US",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two", "three", "four", "five"]), "one two three four five");
        test.done();
    },
    
    testListFmtUnitStyleenUSNumberFormatOneFull: function(test) {
        var fmt = new ListFmt({
            locale: "en-US",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one"]), "one");
        test.done();
    },
    
    testListFmtUnitStyleenUSNumberFormatTwoFull: function(test) {
        var fmt = new ListFmt({
            locale: "en-US",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two"]), "one, two");
        test.done();
    },
    
    testListFmtUnitStyleenUSNumberFormatThreeFull: function(test) {
        var fmt = new ListFmt({
            locale: "en-US",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two", "three"]), "one, two, three");
        test.done();
    },
    
    testListFmtUnitStyleenUSNumberFormatFourFull: function(test) {
        var fmt = new ListFmt({
            locale: "en-US",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two", "three", "four"]), "one, two, three, four");
        test.done();
    },
    
    testListFmtUnitStyleenUSNumberFormatFiveFull: function(test) {
        var fmt = new ListFmt({
            locale: "en-US",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two", "three", "four", "five"]), "one, two, three, four, five");
        test.done();
    },
    
    //en-GB
    
    testListFmtenGBNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "en-GB"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one"]), "one");
        test.done();
    },
    
    testListFmtenGBNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "en-GB"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two"]), "one and two");
        test.done();
    },
    
    testListFmtenGBNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "en-GB"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two", "three"]), "one, two and three");
        test.done();
    },
    
    testListFmtenGBNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "en-GB"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two", "three", "four"]), "one, two, three and four");
        test.done();
    },
    
    testListFmtenGBNumberFormatFive: function(test) {
        var fmt = new ListFmt({
            locale: "en-GB"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two", "three", "four", "five"]), "one, two, three, four and five");
        test.done();
    },
    
    // en-AU
    
    testListFmtenAUNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "en-AU"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one"]), "one");
        test.done();
    },
    
    testListFmtenAUNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "en-AU"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two"]), "one and two");
        test.done();
    },
    
    testListFmtenAUNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "en-AU"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two", "three"]), "one, two and three");
        test.done();
    },
    
    testListFmtenAUNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "en-AU"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two", "three", "four"]), "one, two, three and four");
        test.done();
    },
    
    testListFmtenAUNumberFormatFive: function(test) {
        var fmt = new ListFmt({
            locale: "en-AU"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two", "three", "four", "five"]), "one, two, three, four and five");
        test.done();
    },
    
    // en-HK
    
    testListFmtenHKNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "en-HK"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one"]), "one");
        test.done();
    },
    
    testListFmtenHKNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "en-HK"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two"]), "one and two");
        test.done();
    },
    
    testListFmtenHKNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "en-HK"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two", "three"]), "one, two, and three");
        test.done();
    },
    
    testListFmtenHKNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "en-HK"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two", "three", "four"]), "one, two, three, and four");
        test.done();
    },
    
    testListFmtenHKNumberFormatFive: function(test) {
        var fmt = new ListFmt({
            locale: "en-HK"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two", "three", "four", "five"]), "one, two, three, four, and five");
        test.done();
    },
    
    testListFmtUnitStyleenHKNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "en-HK",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one"]), "one");
        test.done();
    },
    
    testListFmtUnitStyleenHKNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "en-HK",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two"]), "one two");
        test.done();
    },
    
    testListFmtUnitStyleenHKNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "en-HK",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two", "three"]), "one two three");
        test.done();
    },
    
    testListFmtUnitStyleenHKNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "en-HK",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two", "three", "four"]), "one two three four");
        test.done();
    },
    
    testListFmtUnitStyleenHKNumberFormatFive: function(test) {
        var fmt = new ListFmt({
            locale: "en-HK",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two", "three", "four", "five"]), "one two three four five");
        test.done();
    },
    
    // en-ZA
    
    testListFmtenZANumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "en-ZA"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one"]), "one");
        test.done();
    },
    
    testListFmtenZANumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "en-ZA"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two"]), "one and two");
        test.done();
    },
    
    testListFmtenZANumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "en-ZA"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two", "three"]), "one, two, and three");
        test.done();
    },
    
    testListFmtenZANumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "en-ZA"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two", "three", "four"]), "one, two, three, and four");
        test.done();
    },
    
    testListFmtenZANumberFormatFive: function(test) {
        var fmt = new ListFmt({
            locale: "en-ZA"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two", "three", "four", "five"]), "one, two, three, four, and five");
        test.done();
    },
    
    // en-NZ
    
    testListFmtUnitStyleenNZNumberFormatOneMedium: function(test) {
        var fmt = new ListFmt({
            locale: "en-NZ",
            style : "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one"]), "one");
        test.done();
    },
    
    testListFmtUnitStyleenNZNumberFormatTwoMedium: function(test) {
        var fmt = new ListFmt({
            locale: "en-NZ",
            style : "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two"]), "one, two");
        test.done();
    },
    
    testListFmtUnitStyleenNZNumberFormatThreeMedium: function(test) {
        var fmt = new ListFmt({
            locale: "en-NZ",
            style : "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two", "three"]), "one, two, three");
        test.done();
    },
    
    testListFmtUnitStyleenNZNumberFormatFourMedium: function(test) {
        var fmt = new ListFmt({
            locale: "en-NZ",
            style : "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two", "three", "four"]), "one, two, three, four");
        test.done();
    },
    
    testListFmtUnitStyleenNZNumberFormatFiveMedium: function(test) {
        var fmt = new ListFmt({
            locale: "en-NZ",
            style : "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two", "three", "four", "five"]), "one, two, three, four, five");
        test.done();
    }
};