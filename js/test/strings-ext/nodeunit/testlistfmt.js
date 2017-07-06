/*
 * testlistfmt.js - test the list formatter object
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

module.exports.testlistfmt = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testListFmtConstructorEmpty: function(test) {
        var fmt = new ListFmt();
    
        test.expect(1);
        test.ok(fmt !== null);
        test.done();
    },
    
    testListFmtDefaults: function(test) {
        var fmt = new ListFmt();
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.getLocale(), "en-US");
        test.done();
    },
    
    testListFmtDefaultStyle: function(test) {
        var fmt = new ListFmt();
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.getStyle(), "standard");
        test.done();
    },
    
    testListFmtTestProperty1: function(test) {
        var fmt = new ListFmt();
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format([""]), "");
        test.done();
    },
    
    testListFmtTestProperty2: function(test) {
        var fmt = new ListFmt();
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(), "");
        test.done();
    },
    
    testListFmtTestProperty3: function(test) {
        var fmt = new ListFmt();
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(undefined), "");
        test.done();
    },
    
    testListFmtTestProperty4: function(test) {
        var fmt = new ListFmt();
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format("one"), "");
        test.done();
    },
    
    testListFmtTestProperty5: function(test) {
        var fmt = new ListFmt();
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format("one", "two"), "");
        test.done();
    },
    
    testListFmtTestProperty6: function(test) {
        var fmt = new ListFmt();
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(100), "");
        test.done();
    },
    
    testListFmtTestProperty7: function(test) {
        var fmt = new ListFmt();
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(false), "");
        test.done();
    },
    
    testListFmtTestProperty8: function(test) {
        var fmt = new ListFmt();
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["true", "false"]), "true and false");
        test.done();
    },
    
    testListFmtNumberFormatOne: function(test) {
        var fmt = new ListFmt();
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one"]), "one");
        test.done();
    },
    
    testListFmtNumberFormatTwo: function(test) {
        var fmt = new ListFmt();
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two"]), "one and two");
        test.done();
    },
    
    testListFmtNumberFormatThree: function(test) {
        var fmt = new ListFmt();
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two", "three"]), "one, two, and three");
        test.done();
    },
    
    testListFmtNumberFormatFour: function(test) {
        var fmt = new ListFmt();
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["one", "two", "three", "four"]), "one, two, three, and four");
        test.done();
    },

    // as-IN
    testListFmtasINMonthOne: function(test) {
        var fmt = new ListFmt({
            locale: "as-IN"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["জানু"]), "জানু");
        test.done();
    },
    testListFmtasINMonthTwo: function(test) {
        var fmt = new ListFmt({
            locale: "as-IN"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["জানু", "ফেব্ৰু"]), "জানু, ফেব্ৰু");
        test.done();
    },
    testListFmtasINMonthThree: function(test) {
        var fmt = new ListFmt({
            locale: "as-IN"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["জানু", "ফেব্ৰু", "মাৰ্চ"]), "জানু, ফেব্ৰু, মাৰ্চ");
        test.done();
    },
    testListFmtasINMonthFour: function(test) {
        var fmt = new ListFmt({
            locale: "as-IN"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["জানু", "ফেব্ৰু", "মাৰ্চ", "এপ্ৰিল"]), "জানু, ফেব্ৰু, মাৰ্চ, এপ্ৰিল");
        test.done();
    },
    //az-Latn-AZ
    testListFmtazLatnAZNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "az-Latn-AZ"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["bir"]), "bir");
        test.done();
    },
    testListFmtazLatnAZNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "az-Latn-AZ"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["bir", "iki"]), "bir və iki");
        test.done();
    },
    testListFmtazLatnAZNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "az-Latn-AZ"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["bir", "iki", "üç"]), "bir, iki və üç");
        test.done();
    },
    testListFmtazLatnAZNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "az-Latn-AZ"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["bir", "iki", "üç", "dörd"]), "bir, iki, üç və dörd");
        test.done();
    },
    testListFmtUnitStyleazLatnAZNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "az-Latn-AZ",
            style : "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["bir"]), "bir");
        test.done();
    },
    testListFmtUnitStyleazLatnAZNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "az-Latn-AZ",
            style : "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["bir", "iki"]), "bir, iki");
        test.done();
    },
    testListFmtUnitStyleazLatnAZNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "az-Latn-AZ",
            style : "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["bir", "iki", "üç"]), "bir, iki, üç");
        test.done();
    },
    testListFmtUnitStyleazLatnAZNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "az-Latn-AZ",
            style : "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["bir", "iki", "üç", "dörd"]), "bir, iki, üç, dörd");
        test.done();
    },
    testListFmtUnitStyleazLatnAZNumberFormatOneFull: function(test) {
        var fmt = new ListFmt({
            locale: "az-Latn-AZ",
            style : "unit",
            length : "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format([""]), "");
        test.done();
    },
    testListFmtUnitStyleazLatnAZNumberFormatTwoFull: function(test) {
        var fmt = new ListFmt({
            locale: "az-Latn-AZ",
            style : "unit",
            length : "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format([""]), "");
        test.done();
    },
    testListFmtUnitStyleazLatnAZNumberFormatThreeFull: function(test) {
        var fmt = new ListFmt({
            locale: "az-Latn-AZ",
            style : "unit",
            length : "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format([""]), "");
        test.done();
    },
    testListFmtUnitStyleazLatnAZNumberFormatFourFull: function(test) {
        var fmt = new ListFmt({
            locale: "az-Latn-AZ",
            style : "unit",
            length : "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format([""]), "");
        test.done();
    },
    testListFmtazLatnAZNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "az-Latn-AZ",
            style : "unit",
            length : "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format([""]), "");
        test.done();
    },

    // bg-BG
    testListFmtbgBGNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "bg-BG"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format([""]), "");
        test.done();
    },
    testListFmtbgBGNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "bg-BG"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["един", "два"]), "един идва");
        test.done();
    },
    testListFmtbgBGNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "bg-BG"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["един", "два", "три"]), "един, два и три");
        test.done();
    },
    testListFmtbgBGNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "bg-BG"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["един", "два", "три", "четири"]), "един, два, три и четири");
        test.done();
    },
    testListFmtbgBGNumberFormatOneLong: function(test) {
        var fmt = new ListFmt({
            locale: "bg-BG",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["един"]), "един");
        test.done();
    },
    testListFmtbgBGNumberFormatTwoLong: function(test) {
        var fmt = new ListFmt({
            locale: "bg-BG",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["един", "два"]), "един и два");
        test.done();
    },
    testListFmtbgBGNumberFormatThreeLong: function(test) {
        var fmt = new ListFmt({
            locale: "bg-BG",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["един", "два", "три"]), "един, два и три");
        test.done();
    },
    testListFmtbgBGNumberFormatFourLong: function(test) {
        var fmt = new ListFmt({
            locale: "bg-BG",
            length: "long"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["един", "два", "три", "четири"]), "един, два, три и четири");
        test.done();
    },
    testListFmtUnitStylebgBGNumberFormatOneMedium: function(test) {
        var fmt = new ListFmt({
            locale: "bg-BG",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["един"]), "един");
        test.done();
    },
    testListFmtUnitStylebgBGNumberFormatTwoMedium: function(test) {
        var fmt = new ListFmt({
            locale: "bg-BG",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["един", "два"]), "един и два");
        test.done();
    },
    testListFmtUnitStylebgBGNumberFormatThreeMedium: function(test) {
        var fmt = new ListFmt({
            locale: "bg-BG",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["един", "два", "три"]), "един, два, три");
        test.done();
    },
    testListFmtUnitStylebgBGNumberFormatFourMedium: function(test) {
        var fmt = new ListFmt({
            locale: "bg-BG",
            style: "unit",
            length: "medium"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["един", "два", "три", "четири"]), "един, два, три, четири");
        test.done();
    },
    testListFmtUnitStylebgBGNumberFormatOneFull: function(test) {
        var fmt = new ListFmt({
            locale: "bg-BG",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["един"]), "един");
        test.done();
    },
    testListFmtUnitStylebgBGNumberFormatTwoFull: function(test) {
        var fmt = new ListFmt({
            locale: "bg-BG",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["един", "два", "три"]), "един, два и три");
        test.done();
    },
    testListFmtUnitStylebgBGNumberFormatThreeFull: function(test) {
        var fmt = new ListFmt({
            locale: "bg-BG",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["един", "два", "три"]), "един, два и три");
        test.done();
    },
    testListFmtUnitStylebgBGNumberFormatFourFull: function(test) {
        var fmt = new ListFmt({
            locale: "bg-BG",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["един", "два", "три", "четири"]), "един, два, три и четири");
        test.done();
    },

    // bn-IN
    testListFmtbnINNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "bn-IN"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["এক"]), "এক");
        test.done();
    },
    testListFmtbnINNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "bn-IN"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["এক", "দুই"]), "এক এবং দুই");
        test.done();
    },
    testListFmtbnINNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "bn-IN"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["এক", "দুই", "তিন"]), "এক, দুই এবং তিন");
        test.done();
    },
    testListFmtbnINNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "bn-IN"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["এক", "দুই", "তিন", "চার"]), "এক, দুই, তিন এবং চার");
        test.done();
    },

    // cs-CZ
    testListFmtcsCZNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "cs-CZ"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["jeden"]), "jeden");
        test.done();
    },
    testListFmtcsCZNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "cs-CZ"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["jeden", "dva"]), "jeden a dva");
        test.done();
    },
    testListFmtcsCZNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "cs-CZ"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["jeden", "dva", "tři"]), "jeden, dva a tři");
        test.done();
    },
    testListFmtcsCZNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "cs-CZ"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["jeden", "dva", "tři", "čtyři"]), "jeden, dva, tři a čtyři");
        test.done();
    },

    testListFmtUnitStylecsCZNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "cs-CZ",
            style : "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["jeden"]), "jeden");
        test.done();
    },
    testListFmtUnitStylecsCZNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "cs-CZ",
            style : "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["jeden", "dva"]), "jeden dva");
        test.done();
    },
    testListFmtUnitStylecsCZNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "cs-CZ",
            style : "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["jeden", "dva", "tři"]), "jeden dva tři");
        test.done();
    },
    testListFmtUnitStylecsCZNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "cs-CZ",
            style : "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["jeden", "dva", "tři", "čtyři"]), "jeden dva tři čtyři");
        test.done();
    },

    testListFmtUnitStylecsCZNumberFormatOneFull: function(test) {
        var fmt = new ListFmt({
            locale: "cs-CZ",
            style : "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["jeden"]), "jeden");
        test.done();
    },
    testListFmtUnitStylecsCZNumberFormatTwoFull: function(test) {
        var fmt = new ListFmt({
            locale: "cs-CZ",
            style : "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["jeden", "dva"]), "jeden a dva");
        test.done();
    },
    testListFmtUnitStylecsCZNumberFormatThreeFull: function(test) {
        var fmt = new ListFmt({
            locale: "cs-CZ",
            style : "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["jeden", "dva", "tři"]), "jeden, dva a tři");
        test.done();
    },
    testListFmtUnitStylecsCZNumberFormatFourFull: function(test) {
        var fmt = new ListFmt({
            locale: "cs-CZ",
            style : "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["jeden", "dva", "tři", "čtyři"]), "jeden, dva, tři a čtyři");
        test.done();
    },


    // da-DK
    testListFmtdaDKNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "da-DK"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["en"]), "en");
        test.done();
    },
    testListFmtdaDKNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "da-DK"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["en", "to"]), "en og to");
        test.done();
    },
    testListFmtdaDKNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "da-DK"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["en", "to", "tre"]), "en, to og tre");
        test.done();
    },
    testListFmtdaDKNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "da-DK"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["en", "to", "tre", "fire"]), "en, to, tre og fire");
        test.done();
    },

    testListFmtUnitStyledaDKNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "da-DK",
            style : "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["en"]), "en");
        test.done();
    },
    testListFmtUnitStyledaDKNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "da-DK",
            style : "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["en", "to"]), "en og to");
        test.done();
    },
    testListFmtUnitStyledaDKNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "da-DK",
            style : "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["en", "to", "tre"]), "en, to og tre");
        test.done();
    },
    testListFmtUnitStyledaDKNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "da-DK",
            style : "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["en", "to", "tre", "fire"]), "en, to, tre og fire");
        test.done();
    },

    // et-EE
    testListFmtetEENumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "et-EE"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["Üks"]), "Üks");
        test.done();
    },
    testListFmtetEENumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "et-EE"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["Üks", "Kaks"]), "Üks ja Kaks");
        test.done();
    },
    testListFmtetEENumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "et-EE"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["Üks", "Kaks", "kolm"]), "Üks, Kaks ja kolm");
        test.done();
    },
    testListFmtetEENumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "et-EE"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["Üks", "Kaks", "kolm", "Neli"]), "Üks, Kaks, kolm ja Neli");
        test.done();
    },

    testListFmtUnitStyleetEENumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "et-EE",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["Üks"]), "Üks");
        test.done();
    },
    testListFmtUnitStyleetEENumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "et-EE",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["Üks", "Kaks"]), "Üks Kaks");
        test.done();
    },
    testListFmtUnitStyleetEENumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "et-EE",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["Üks", "Kaks", "kolm"]), "Üks Kaks kolm");
        test.done();
    },
    testListFmtUnitStyleetEENumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "et-EE",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["Üks", "Kaks", "kolm", "Neli"]), "Üks Kaks kolm Neli");
        test.done();
    },
    testListFmtUnitStyleetEENumberFormatOneFull: function(test) {
        var fmt = new ListFmt({
            locale: "et-EE",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["Üks"]), "Üks");
        test.done();
    },
    testListFmtUnitStyleetEENumberFormatTwoFull: function(test) {
        var fmt = new ListFmt({
            locale: "et-EE",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["Üks", "Kaks"]), "Üks, Kaks");
        test.done();
    },
    testListFmtUnitStyleetEENumberFormatThreeFull: function(test) {
        var fmt = new ListFmt({
            locale: "et-EE",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["Üks", "Kaks", "kolm"]), "Üks, Kaks, kolm");
        test.done();
    },
    testListFmtUnitStyleetEENumberFormatFourFull: function(test) {
        var fmt = new ListFmt({
            locale: "et-EE",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["Üks", "Kaks", "kolm", "Neli"]), "Üks, Kaks, kolm, Neli");
        test.done();
    },



    // fi-FI
    testListFmtfiFINumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "fi-FI"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["yksi"]), "yksi");
        test.done();
    },
    testListFmtfiFINumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "fi-FI"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["yksi", "kaksi"]), "yksi ja kaksi");
        test.done();
    },
    testListFmtfiFINumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "fi-FI"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["yksi", "kaksi", "kolmikko"]), "yksi, kaksi ja kolmikko");
        test.done();
    },
    testListFmtfiFINumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "fi-FI"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["yksi", "kaksi", "kolmikko", "neljä"]), "yksi, kaksi, kolmikko ja neljä");
        test.done();
    },

    // fi-FI
    testListFmtUnitStylefiFINumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "fi-FI",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["yksi"]), "yksi");
        test.done();
    },
    testListFmtUnitStylefiFINumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "fi-FI",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["yksi", "kaksi"]), "yksi kaksi");
        test.done();
    },
    testListFmtUnitStylefiFINumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "fi-FI",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["yksi", "kaksi", "kolmikko"]), "yksi kaksi kolmikko");
        test.done();
    },
    testListFmtUnitStylefiFINumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "fi-FI",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["yksi", "kaksi", "kolmikko", "neljä"]), "yksi kaksi kolmikko neljä");
        test.done();
    },











    // ko-KR
    
    testListFmtkoKRNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "ko-KR"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["하나"]), "하나");
        test.done();
    },
    
    testListFmtkoKRNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "ko-KR"
        });
    5
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["하나", "둘"]), "하나 및 둘");
        test.done();
    },
    
    testListFmtkoKRNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "ko-KR"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["하나", "둘", "셋"]), "하나, 둘 및 셋");
        test.done();
    },
    
    testListFmtkoKRNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "ko-KR"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["하나", "둘", "셋", "넷"]), "하나, 둘, 셋 및 넷");
        test.done();
    },
    
    testListFmtUnitStyleNamekoKR: function(test) {
        var fmt = new ListFmt({
            locale: "ko-KR",
            style:"unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.getStyle(), "unit");
        test.done();
    },
    
    testListFmtUnitStylekoKRNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "ko-KR",
            style:"unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["1월"]), "1월");
        test.done();
    },
    
    testListFmtUnitStylekoKRNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "ko-KR",
            style:"unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["1월","2월"]), "1월 2월");
        test.done();
    },
    
    testListFmtUnitStylekoKRNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "ko-KR",
            style:"unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["1월","2월","3월"]), "1월 2월 3월");
        test.done();
    },
    
    testListFmtUnitStylekoKRNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "ko-KR",
            style:"unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["1월","2월","3월","4월"]), "1월 2월 3월 4월");
        test.done();
    },
    
    testListFmtUnitStylekoKRNumberFormatFive: function(test) {
        var fmt = new ListFmt({
            locale: "ko-KR",
            style:"unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["1월","2월","3월","4월","5월"]), "1월 2월 3월 4월 5월");
        test.done();
    },
    
    // id-ID
    
    testListFmtidIDStyleName: function(test) {
        var fmt = new ListFmt({
            locale: "id-ID"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.getStyle(), "standard");
        test.done();
    },
    
    testListFmtidIDNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "id-ID"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["satu"]), "satu");
        test.done();
    },
    
    testListFmtitIDNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "id-ID"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["satu", "dua"]), "satu dan dua");
        test.done();
    },
    
    testListFmtidIDNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "id-ID"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["satu", "dua", "tiga"]), "satu, dua, dan tiga");
        test.done();
    },
    
    testListFmtidIDNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "id-ID"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["satu", "dua", "tiga", "empat"]), "satu, dua, tiga, dan empat");
        test.done();
    },
    
    testListFmtidIDUnitStyleName: function(test) {
        var fmt = new ListFmt({
            locale: "id-ID",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.getStyle(), "unit");
        test.done();
    },
    
    testListFmtUnitStyleidIDNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "id-ID",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["satu"]), "satu");
        test.done();
    },
    
    testListFmtUnitStyleidIDNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "id-ID",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["satu", "dua"]), "satu, dua");
        test.done();
    },
    
    testListFmtUnitStyleidIDNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "id-ID",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["satu", "dua", "tiga"]), "satu, dua, tiga");
        test.done();
    },
    
    testListFmtUnitStyleidIDNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "id-ID",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["satu", "dua", "tiga", "empat"]), "satu, dua, tiga, empat");
        test.done();
    },
    
    testListFmtUnitStyleidIDNumberFormatFive: function(test) {
        var fmt = new ListFmt({
            locale: "id-ID",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["satu", "dua", "tiga", "empat", "lima"]), "satu, dua, tiga, empat, lima");
        test.done();
    },    
    
    
    // vi-VI
    
    testListFmttrTRNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "vi-VI"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["một"]), "một");
        test.done();
    },
    
    testListFmttrTRNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "vi-VI"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["một", "hai"]), "một và hai");
        test.done();
    },
    
    testListFmttrTRNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "vi-VI"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["một", "hai", "ba"]), "một, hai và ba");
        test.done();
    },
    
    testListFmttrTRNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "vi-VI"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["một", "hai", "ba", "bốn"]), "một, hai, ba và bốn");
        test.done();
    },
    
    testListFmtUnitStyletrTRNumberFormatOne: function(test) {
        var fmt = new ListFmt({
            locale: "vi-VI",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["bir"]), "bir");
        test.done();
    },
    
    testListFmtUnitStyletrTRNumberFormatTwo: function(test) {
        var fmt = new ListFmt({
            locale: "vi-VI",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["bir", "два"]), "bir два");
        test.done();
    },
    
    testListFmtUnitStyletrTRNumberFormatThree: function(test) {
        var fmt = new ListFmt({
            locale: "vi-VI",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["bir", "два", "три"]), "bir два три");
        test.done();
    },
    
    testListFmtUnitStyletrTRNumberFormatFour: function(test) {
        var fmt = new ListFmt({
            locale: "vi-VI",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["bir", "два", "три", "четыре"]), "bir два три четыре");
        test.done();
    },
    
    testListFmtUnitStyletrTRNumberFormatFive: function(test) {
        var fmt = new ListFmt({
            locale: "vi-VI",
            style: "unit"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["bir", "два", "три", "четыре", "пять"]), "bir два три четыре пять");
        test.done();
    },
    
    testListFmtUnitStyletrTRNumberFormatOneFull: function(test) {
        var fmt = new ListFmt({
            locale: "vi-VI",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["bir"]), "bir");
        test.done();
    },
    
    testListFmtUnitStyletrTRNumberFormatTwoFull: function(test) {
        var fmt = new ListFmt({
            locale: "vi-VI",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["bir", "два"]), "bir, два");
        test.done();
    },
    
    testListFmtUnitStyletrTRNumberFormatThreeFull: function(test) {
        var fmt = new ListFmt({
            locale: "vi-VI",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["bir", "два", "три"]), "bir, два, три");
        test.done();
    },
    
    testListFmtUnitStyletrTRNumberFormatFourFull: function(test) {
        var fmt = new ListFmt({
            locale: "vi-VI",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["bir", "два", "три", "четыре"]), "bir, два, три, четыре");
        test.done();
    },
    
    testListFmtUnitStyletrTRNumberFormatFiveFull: function(test) {
        var fmt = new ListFmt({
            locale: "vi-VI",
            style: "unit",
            length: "full"
        });
    
        test.expect(2);
        test.ok(fmt !== null);
        test.equal(fmt.format(["bir", "два", "три", "четыре", "пять"]), "bir, два, три, четыре, пять");
        test.done();
    }
};
