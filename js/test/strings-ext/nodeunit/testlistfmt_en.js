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
    var ListFmt = require("../../../lib/ListFmt.js");
}

//en-US
if (typeof(ilib) === "undefined") {
    var ilib = require("../../../lib/ilib.js");
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
    },

    // en-AZ
    
    testListFmtenAZNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "en-AZ"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one"]), "one");
        test.done();
    },
    
    testListFmtenAZNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "en-AZ"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two"]), "one and two");
        test.done();
    },
    
    testListFmtenAZNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "en-AZ"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two", "three"]), "one, two, and three");
        test.done();
    },
    
    testListFmtenAZNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "en-AZ"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two", "three", "four"]), "one, two, three, and four");
        test.done();
    },

    // en-CA
    testListFmtenCANumberFormatOneMedium: function(test) {
        var fmt = new ListFmt({
            locale: "en-CA",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one"]), "one");
        test.done();
    },
    
    testListFmtenCANumberFormatTwoMedium: function(test) {
        var fmt = new ListFmt({
            locale: "en-CA",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two"]), "one and two");
        test.done();
    },
    
    testListFmtenCANumberFormatThreeMedium: function(test) {
        var fmt = new ListFmt({
            locale: "en-CA",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two", "three"]), "one, two, and three");
        test.done();
    },
    
    testListFmtenCANumberFormatFourMedium: function(test) {
        var fmt = new ListFmt({
            locale: "en-CA",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two", "three", "four"]), "one, two, three, and four");
        test.done();
    },
    // en-GH
    testListFmtenGHNumberFormatOneLong: function(test) {
        var fmt = new ListFmt({
            locale: "en-GH",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one"]), "one");
        test.done();
    },
    
    testListFmtenGHNumberFormatTwoLong: function(test) {
        var fmt = new ListFmt({
            locale: "en-GH",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two"]), "one and two");
        test.done();
    },
    
    testListFmtenGHNumberFormatThreeLong: function(test) {
        var fmt = new ListFmt({
            locale: "en-GH",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two", "three"]), "one, two, and three");
        test.done();
    },
    
    testListFmtenGHNumberFormatFourLong: function(test) {
        var fmt = new ListFmt({
            locale: "en-GH",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two", "three", "four"]), "one, two, three, and four");
        test.done();
    },
    // en-HK
    testListFmtenHKNumberFormatOneFull: function(test) {
        var fmt = new ListFmt({
            locale: "en-HK",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one"]), "one");
        test.done();
    },
    
    testListFmtenHKNumberFormatTwoFull: function(test) {
        var fmt = new ListFmt({
            locale: "en-HK",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two"]), "one and two");
        test.done();
    },
    
    testListFmtenHKNumberFormatThreeFull: function(test) {
        var fmt = new ListFmt({
            locale: "en-HK",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two", "three"]), "one, two, and three");
        test.done();
    },
    
    testListFmtenHKNumberFormatFourFull: function(test) {
        var fmt = new ListFmt({
            locale: "en-HK",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two", "three", "four"]), "one, two, three, and four");
        test.done();
    },
    // en-IE
    testListFmtUnitStyleenIENumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "en-IE",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one"]), "one");
        test.done();
    },
    
    testListFmtUnitStyleenIENumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "en-IE",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two"]), "one two");
        test.done();
    },
    
    testListFmtUnitStyleenIENumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "en-IE",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two", "three"]), "one two three");
        test.done();
    },
    
    testListFmtUnitStyleenIENumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "en-IE",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two", "three", "four"]), "one two three four");
        test.done();
    },
    // en-IN
    testListFmtUnitStyleenINNumberFormatOneMedium: function(test) {
        var fmt = new ListFmt({
            locale: "en-IN",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one"]), "one");
        test.done();
    },
    
    testListFmtUnitStyleenINNumberFormatTwoMedium: function(test) {
        var fmt = new ListFmt({
            locale: "en-IN",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two"]), "one, two");
        test.done();
    },
    
    testListFmtUnitStyleenINNumberFormatThreeMedium: function(test) {
        var fmt = new ListFmt({
            locale: "en-IN",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two", "three"]), "one, two, three");
        test.done();
    },
    
    testListFmtUnitStyleenINNumberFormatFourMedium: function(test) {
        var fmt = new ListFmt({
            locale: "en-IN",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two", "three", "four"]), "one, two, three, four");
        test.done();
    },
    // en-IS
    testListFmtUnitStyleenISNumberFormatOneLong: function(test) {
        var fmt = new ListFmt({
            locale: "en-IS",
            style: "unit",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one"]), "one");
        test.done();
    },
    
    testListFmtUnitStyleenISNumberFormatTwoLong: function(test) {
        var fmt = new ListFmt({
            locale: "en-IS",
            style: "unit",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two"]), "one, two");
        test.done();
    },
    
    testListFmtUnitStyleenISNumberFormatThreeLong: function(test) {
        var fmt = new ListFmt({
            locale: "en-IS",
            style: "unit",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two", "three"]), "one, two, three");
        test.done();
    },
    
    testListFmtUnitStyleenISNumberFormatFourLong: function(test) {
        var fmt = new ListFmt({
            locale: "en-IS",
            style: "unit",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two", "three", "four"]), "one, two, three, four");
        test.done();
    },
    // en-JP
    testListFmtUnitStyleenJPNumberFormatOneFull: function(test) {
        var fmt = new ListFmt({
            locale: "en-JP",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one"]), "one");
        test.done();
    },
    
    testListFmtUnitStyleenJPNumberFormatTwoFull: function(test) {
        var fmt = new ListFmt({
            locale: "en-JP",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two"]), "one, two");
        test.done();
    },
    
    testListFmtUnitStyleenJPNumberFormatThreeFull: function(test) {
        var fmt = new ListFmt({
            locale: "en-JP",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two", "three"]), "one, two, three");
        test.done();
    },
    
    testListFmtUnitStyleenJPNumberFormatFourFull: function(test) {
        var fmt = new ListFmt({
            locale: "en-JP",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two", "three", "four"]), "one, two, three, four");
        test.done();
    },
    // en-KR
    
    testListFmtenKRNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "en-KR"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one"]), "one");
        test.done();
    },
    
    testListFmtenKRNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "en-KR"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two"]), "one and two");
        test.done();
    },
    
    testListFmtenKRNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "en-KR"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two", "three"]), "one, two, and three");
        test.done();
    },
    
    testListFmtenKRNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "en-KR"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two", "three", "four"]), "one, two, three, and four");
        test.done();
    },

    // en-KE
    testListFmtenKENumberFormatOneMedium: function(test) {
        var fmt = new ListFmt({
            locale: "en-KE",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one"]), "one");
        test.done();
    },
    
    testListFmtenKENumberFormatTwoMedium: function(test) {
        var fmt = new ListFmt({
            locale: "en-KE",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two"]), "one and two");
        test.done();
    },
    
    testListFmtenKENumberFormatThreeMedium: function(test) {
        var fmt = new ListFmt({
            locale: "en-KE",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two", "three"]), "one, two, and three");
        test.done();
    },
    
    testListFmtenKENumberFormatFourMedium: function(test) {
        var fmt = new ListFmt({
            locale: "en-KE",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two", "three", "four"]), "one, two, three, and four");
        test.done();
    },
    // en-LK
    testListFmtenLKNumberFormatOneLong: function(test) {
        var fmt = new ListFmt({
            locale: "en-LK",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one"]), "one");
        test.done();
    },
    
    testListFmtenLKNumberFormatTwoLong: function(test) {
        var fmt = new ListFmt({
            locale: "en-LK",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two"]), "one and two");
        test.done();
    },
    
    testListFmtenLKNumberFormatThreeLong: function(test) {
        var fmt = new ListFmt({
            locale: "en-LK",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two", "three"]), "one, two, and three");
        test.done();
    },
    
    testListFmtenLKNumberFormatFourLong: function(test) {
        var fmt = new ListFmt({
            locale: "en-LK",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two", "three", "four"]), "one, two, three, and four");
        test.done();
    },
    // en-MM
    testListFmtenMMNumberFormatOneFull: function(test) {
        var fmt = new ListFmt({
            locale: "en-MM",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one"]), "one");
        test.done();
    },
    
    testListFmtenMMNumberFormatTwoFull: function(test) {
        var fmt = new ListFmt({
            locale: "en-MM",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two"]), "one and two");
        test.done();
    },
    
    testListFmtenMMNumberFormatThreeFull: function(test) {
        var fmt = new ListFmt({
            locale: "en-MM",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two", "three"]), "one, two, and three");
        test.done();
    },
    
    testListFmtenMMNumberFormatFourFull: function(test) {
        var fmt = new ListFmt({
            locale: "en-MM",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two", "three", "four"]), "one, two, three, and four");
        test.done();
    },
    // en-MW
    testListFmtUnitStyleenMWNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "en-MW",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one"]), "one");
        test.done();
    },
    
    testListFmtUnitStyleenMWNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "en-MW",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two"]), "one two");
        test.done();
    },
    
    testListFmtUnitStyleenMWNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "en-MW",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two", "three"]), "one two three");
        test.done();
    },
    
    testListFmtUnitStyleenMWNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "en-MW",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two", "three", "four"]), "one two three four");
        test.done();
    },
    // en-MY
    testListFmtUnitStyleenMYNumberFormatOneMedium: function(test) {
        var fmt = new ListFmt({
            locale: "en-MY",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one"]), "one");
        test.done();
    },
    
    testListFmtUnitStyleenMYNumberFormatTwoMedium: function(test) {
        var fmt = new ListFmt({
            locale: "en-MY",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two"]), "one, two");
        test.done();
    },
    
    testListFmtUnitStyleenMYNumberFormatThreeMedium: function(test) {
        var fmt = new ListFmt({
            locale: "en-MY",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two", "three"]), "one, two, three");
        test.done();
    },
    
    testListFmtUnitStyleenMYNumberFormatFourMedium: function(test) {
        var fmt = new ListFmt({
            locale: "en-MY",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two", "three", "four"]), "one, two, three, four");
        test.done();
    },
    // en-NG
    testListFmtUnitStyleenNGNumberFormatOneLong: function(test) {
        var fmt = new ListFmt({
            locale: "en-NG",
            style: "unit",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one"]), "one");
        test.done();
    },
    
    testListFmtUnitStyleenNGNumberFormatTwoLong: function(test) {
        var fmt = new ListFmt({
            locale: "en-NG",
            style: "unit",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two"]), "one, two");
        test.done();
    },
    
    testListFmtUnitStyleenNGNumberFormatThreeLong: function(test) {
        var fmt = new ListFmt({
            locale: "en-NG",
            style: "unit",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two", "three"]), "one, two, three");
        test.done();
    },
    
    testListFmtUnitStyleenNGNumberFormatFourLong: function(test) {
        var fmt = new ListFmt({
            locale: "en-NG",
            style: "unit",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two", "three", "four"]), "one, two, three, four");
        test.done();
    },
    // en-PH
    testListFmtUnitStyleenPHNumberFormatOneFull: function(test) {
        var fmt = new ListFmt({
            locale: "en-PH",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one"]), "one");
        test.done();
    },
    
    testListFmtUnitStyleenPHNumberFormatTwoFull: function(test) {
        var fmt = new ListFmt({
            locale: "en-PH",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two"]), "one, two");
        test.done();
    },
    
    testListFmtUnitStyleenPHNumberFormatThreeFull: function(test) {
        var fmt = new ListFmt({
            locale: "en-PH",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two", "three"]), "one, two, three");
        test.done();
    },
    
    testListFmtUnitStyleenPHNumberFormatFourFull: function(test) {
        var fmt = new ListFmt({
            locale: "en-PH",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two", "three", "four"]), "one, two, three, four");
        test.done();
    },
    // en-PR
    
    testListFmtenPRNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "en-PR"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one"]), "one");
        test.done();
    },
    
    testListFmtenPRNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "en-PR"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two"]), "one and two");
        test.done();
    },
    
    testListFmtenPRNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "en-PR"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two", "three"]), "one, two, and three");
        test.done();
    },
    
    testListFmtenPRNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "en-PR"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two", "three", "four"]), "one, two, three, and four");
        test.done();
    },

    // en-SG
    testListFmtenSGNumberFormatOneMedium: function(test) {
        var fmt = new ListFmt({
            locale: "en-SG",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one"]), "one");
        test.done();
    },
    
    testListFmtenSGNumberFormatTwoMedium: function(test) {
        var fmt = new ListFmt({
            locale: "en-SG",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two"]), "one and two");
        test.done();
    },
    
    testListFmtenSGNumberFormatThreeMedium: function(test) {
        var fmt = new ListFmt({
            locale: "en-SG",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two", "three"]), "one, two, and three");
        test.done();
    },
    
    testListFmtenSGNumberFormatFourMedium: function(test) {
        var fmt = new ListFmt({
            locale: "en-SG",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two", "three", "four"]), "one, two, three, and four");
        test.done();
    },
    // en-UG
    testListFmtenUGNumberFormatOneLong: function(test) {
        var fmt = new ListFmt({
            locale: "en-UG",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one"]), "one");
        test.done();
    },
    
    testListFmtenUGNumberFormatTwoLong: function(test) {
        var fmt = new ListFmt({
            locale: "en-UG",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two"]), "one and two");
        test.done();
    },
    
    testListFmtenUGNumberFormatThreeLong: function(test) {
        var fmt = new ListFmt({
            locale: "en-UG",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two", "three"]), "one, two, and three");
        test.done();
    },
    
    testListFmtenUGNumberFormatFourLong: function(test) {
        var fmt = new ListFmt({
            locale: "en-UG",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two", "three", "four"]), "one, two, three, and four");
        test.done();
    },
    // en-ZM
    testListFmtenZMNumberFormatOneFull: function(test) {
        var fmt = new ListFmt({
            locale: "en-ZM",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one"]), "one");
        test.done();
    },
    
    testListFmtenZMNumberFormatTwoFull: function(test) {
        var fmt = new ListFmt({
            locale: "en-ZM",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two"]), "one and two");
        test.done();
    },
    
    testListFmtenZMNumberFormatThreeFull: function(test) {
        var fmt = new ListFmt({
            locale: "en-ZM",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two", "three"]), "one, two, and three");
        test.done();
    },
    
    testListFmtenZMNumberFormatFourFull: function(test) {
        var fmt = new ListFmt({
            locale: "en-ZM",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two", "three", "four"]), "one, two, three, and four");
        test.done();
    },

    // en-GE
    testListFmtUnitStyleenGENumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "en-GE",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one"]), "one");
        test.done();
    },
    
    testListFmtUnitStyleenGENumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "en-GE",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two"]), "one two");
        test.done();
    },
    
    testListFmtUnitStyleenGENumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "en-GE",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two", "three"]), "one two three");
        test.done();
    },
    
    testListFmtUnitStyleenGENumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "en-GE",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two", "three", "four"]), "one two three four");
        test.done();
    },
    // en-CN
    testListFmtUnitStyleenCNNumberFormatOneMedium: function(test) {
        var fmt = new ListFmt({
            locale: "en-CN",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one"]), "one");
        test.done();
    },
    
    testListFmtUnitStyleenCNNumberFormatTwoMedium: function(test) {
        var fmt = new ListFmt({
            locale: "en-CN",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two"]), "one, two");
        test.done();
    },
    
    testListFmtUnitStyleenCNNumberFormatThreeMedium: function(test) {
        var fmt = new ListFmt({
            locale: "en-CN",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two", "three"]), "one, two, three");
        test.done();
    },
    
    testListFmtUnitStyleenCNNumberFormatFourMedium: function(test) {
        var fmt = new ListFmt({
            locale: "en-CN",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two", "three", "four"]), "one, two, three, four");
        test.done();
    },
    // en-MX
    testListFmtUnitStyleenMXNumberFormatOneLong: function(test) {
        var fmt = new ListFmt({
            locale: "en-MX",
            style: "unit",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one"]), "one");
        test.done();
    },
    
    testListFmtUnitStyleenMXNumberFormatTwoLong: function(test) {
        var fmt = new ListFmt({
            locale: "en-MX",
            style: "unit",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two"]), "one, two");
        test.done();
    },
    
    testListFmtUnitStyleenMXNumberFormatThreeLong: function(test) {
        var fmt = new ListFmt({
            locale: "en-MX",
            style: "unit",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two", "three"]), "one, two, three");
        test.done();
    },
    
    testListFmtUnitStyleenMXNumberFormatFourLong: function(test) {
        var fmt = new ListFmt({
            locale: "en-MX",
            style: "unit",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two", "three", "four"]), "one, two, three, four");
        test.done();
    },
    // en-TW
    testListFmtUnitStyleenTWNumberFormatOneFull: function(test) {
        var fmt = new ListFmt({
            locale: "en-TW",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one"]), "one");
        test.done();
    },
    
    testListFmtUnitStyleenTWNumberFormatTwoFull: function(test) {
        var fmt = new ListFmt({
            locale: "en-TW",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two"]), "one, two");
        test.done();
    },
    
    testListFmtUnitStyleenTWNumberFormatThreeFull: function(test) {
        var fmt = new ListFmt({
            locale: "en-TW",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two", "three"]), "one, two, three");
        test.done();
    },
    
    testListFmtUnitStyleenTWNumberFormatFourFull: function(test) {
        var fmt = new ListFmt({
            locale: "en-TW",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two", "three", "four"]), "one, two, three, four");
        test.done();
    },
    // en-ET
    
    testListFmtenETNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "en-ET"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one"]), "one");
        test.done();
    },
    
    testListFmtenETNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "en-ET"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two"]), "one and two");
        test.done();
    },
    
    testListFmtenETNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "en-ET"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two", "three"]), "one, two, and three");
        test.done();
    },
    
    testListFmtenETNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "en-ET"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two", "three", "four"]), "one, two, three, and four");
        test.done();
    },

    // en-GM
    testListFmtenGMNumberFormatOneMedium: function(test) {
        var fmt = new ListFmt({
            locale: "en-GM",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one"]), "one");
        test.done();
    },
    
    testListFmtenGMNumberFormatTwoMedium: function(test) {
        var fmt = new ListFmt({
            locale: "en-GM",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two"]), "one and two");
        test.done();
    },
    
    testListFmtenGMNumberFormatThreeMedium: function(test) {
        var fmt = new ListFmt({
            locale: "en-GM",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two", "three"]), "one, two, and three");
        test.done();
    },
    
    testListFmtenGMNumberFormatFourMedium: function(test) {
        var fmt = new ListFmt({
            locale: "en-GM",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two", "three", "four"]), "one, two, three, and four");
        test.done();
    },
    // en-LR
    testListFmtenLRNumberFormatOneLong: function(test) {
        var fmt = new ListFmt({
            locale: "en-LR",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one"]), "one");
        test.done();
    },
    
    testListFmtenLRNumberFormatTwoLong: function(test) {
        var fmt = new ListFmt({
            locale: "en-LR",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two"]), "one and two");
        test.done();
    },
    
    testListFmtenLRNumberFormatThreeLong: function(test) {
        var fmt = new ListFmt({
            locale: "en-LR",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two", "three"]), "one, two, and three");
        test.done();
    },
    
    testListFmtenLRNumberFormatFourLong: function(test) {
        var fmt = new ListFmt({
            locale: "en-LR",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two", "three", "four"]), "one, two, three, and four");
        test.done();
    },
    // en-PK
    testListFmtenPKNumberFormatOneFull: function(test) {
        var fmt = new ListFmt({
            locale: "en-PK",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one"]), "one");
        test.done();
    },
    
    testListFmtenPKNumberFormatTwoFull: function(test) {
        var fmt = new ListFmt({
            locale: "en-PK",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two"]), "one and two");
        test.done();
    },
    
    testListFmtenPKNumberFormatThreeFull: function(test) {
        var fmt = new ListFmt({
            locale: "en-PK",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two", "three"]), "one, two, and three");
        test.done();
    },
    
    testListFmtenPKNumberFormatFourFull: function(test) {
        var fmt = new ListFmt({
            locale: "en-PK",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two", "three", "four"]), "one, two, three, and four");
        test.done();
    },

    // en-RW
    testListFmtUnitStyleenRWNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "en-RW",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one"]), "one");
        test.done();
    },
    
    testListFmtUnitStyleenRWNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "en-RW",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two"]), "one two");
        test.done();
    },
    
    testListFmtUnitStyleenRWNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "en-RW",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two", "three"]), "one two three");
        test.done();
    },
    
    testListFmtUnitStyleenRWNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "en-RW",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two", "three", "four"]), "one two three four");
        test.done();
    },
    // en-SD
    testListFmtUnitStyleenSDNumberFormatOneMedium: function(test) {
        var fmt = new ListFmt({
            locale: "en-SD",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one"]), "one");
        test.done();
    },
    
    testListFmtUnitStyleenSDNumberFormatTwoMedium: function(test) {
        var fmt = new ListFmt({
            locale: "en-SD",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two"]), "one, two");
        test.done();
    },
    
    testListFmtUnitStyleenSDNumberFormatThreeMedium: function(test) {
        var fmt = new ListFmt({
            locale: "en-SD",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two", "three"]), "one, two, three");
        test.done();
    },
    
    testListFmtUnitStyleenSDNumberFormatFourMedium: function(test) {
        var fmt = new ListFmt({
            locale: "en-SD",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two", "three", "four"]), "one, two, three, four");
        test.done();
    },
    // en-SL
    testListFmtUnitStyleenSLNumberFormatOneLong: function(test) {
        var fmt = new ListFmt({
            locale: "en-SL",
            style: "unit",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one"]), "one");
        test.done();
    },
    
    testListFmtUnitStyleenSLNumberFormatTwoLong: function(test) {
        var fmt = new ListFmt({
            locale: "en-SL",
            style: "unit",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two"]), "one, two");
        test.done();
    },
    
    testListFmtUnitStyleenSLNumberFormatThreeLong: function(test) {
        var fmt = new ListFmt({
            locale: "en-SL",
            style: "unit",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two", "three"]), "one, two, three");
        test.done();
    },
    
    testListFmtUnitStyleenSLNumberFormatFourLong: function(test) {
        var fmt = new ListFmt({
            locale: "en-SL",
            style: "unit",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two", "three", "four"]), "one, two, three, four");
        test.done();
    },
    // en-TZ
    testListFmtUnitStyleenTZNumberFormatOneFull: function(test) {
        var fmt = new ListFmt({
            locale: "en-TZ",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one"]), "one");
        test.done();
    },
    
    testListFmtUnitStyleenTZNumberFormatTwoFull: function(test) {
        var fmt = new ListFmt({
            locale: "en-TZ",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two"]), "one, two");
        test.done();
    },
    
    testListFmtUnitStyleenTZNumberFormatThreeFull: function(test) {
        var fmt = new ListFmt({
            locale: "en-TZ",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two", "three"]), "one, two, three");
        test.done();
    },
    
    testListFmtUnitStyleenTZNumberFormatFourFull: function(test) {
        var fmt = new ListFmt({
            locale: "en-TZ",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two", "three", "four"]), "one, two, three, four");
        test.done();
    },
    // en-AM
    
    testListFmtenAMNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "en-AM"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one"]), "one");
        test.done();
    },
    
    testListFmtenAMNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "en-AM"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two"]), "one and two");
        test.done();
    },
    
    testListFmtenAMNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "en-AM"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two", "three"]), "one, two, and three");
        test.done();
    },
    
    testListFmtenAMNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "en-AM"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two", "three", "four"]), "one, two, three, and four");
        test.done();
    },
    
    testListFmtenAMNumberFormatFive: function(test) {
        var fmt = new ListFmt({
            locale: "en-AM"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two", "three", "four", "five"]), "one, two, three, four, and five");
        test.done();
    }
};