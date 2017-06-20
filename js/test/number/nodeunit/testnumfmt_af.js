/*
 * testnumfmt_af.js - test the number formatter object for Afrikaans language
 * 
 * Copyright © 2015, JEDLSoft
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


if (typeof(NumFmt) === "undefined") {
    var NumFmt = require("../.././../lib/NumFmt.js");
}
if (typeof(ilib) === "undefined") {
    var ilib = require("../../..");
}

module.exports.testnumfmt_af = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testNumFmtNumberZAFormatNoFractionalLimit: function(test) {
        test.expect(2);
    
        var fmt = new NumFmt({
            locale: "af-ZA"
        });
        test.ok(fmt !== null);
        
        // no limit imposed by the function -- JavaScript has a limit for itself though
        // of about 16 significant digits, which stems from the implementation of
        // floating point arithmetic that it uses
        test.equal(fmt.format(1.012345678901234), "1,012345678901234");
        test.done();
    },
    
    testNumFmtNumberZAFormatNoIntegralLimit: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "af-ZA"
        });
        
        test.ok(fmt !== null);
        
        // no limit imposed by the function -- JavaScript has a limit for itself though
        // of about 16 significant digits, which stems from the implementation of
        // floating point arithmetic that it uses
        test.equal(fmt.format(12345678901234.0), "12 345 678 901 234");
        test.done();
    },
    
    testNumFmtNumberZAFormatWithMaxFracDigits: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "af-ZA",
            maxFractionDigits: 2
        });
        
        test.ok(fmt !== null);
        
        test.equal(fmt.format(1.7453), "1,75");
        test.done();
    },
    
    testNumFmtNumberZAFormatWithMinFracDigits: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "af-ZA",
            minFractionDigits: 4
        });
        
        test.ok(fmt !== null);
        
        test.equal(fmt.format(1.75), "1,7500");
        test.done();
    },
    
    testNumFmtNumberZAFormatWithMinFracDigitsTooSmall: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "af-ZA",
            minFractionDigits: -5
        });
        
        test.ok(fmt !== null);
        
        // lower bound is 0
        test.equal(fmt.format(1.75), "1,75");
        test.done();
    },
    
    testNumFmtNumberZAFormatWithMinFracDigitsTooSmallNoDigits: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "af-ZA",
            minFractionDigits: -5
        });
        
        test.ok(fmt !== null);
        
        // lower bound is 0
        test.equal(fmt.format(17500), "17 500");
        test.done();
    },
    
    testNumFmtNumberZAFormatWithMinFracDigitsTooBig: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "af-ZA",
            minFractionDigits: 25
        });
        
        test.ok(fmt !== null);
    
        // limit to 20, but the precision is only to 16 so it is rounded and zero-padded at the end
        test.equal(fmt.format(1.012345678901234567890123456789), "1,01234567890123460000");
        test.done();
    },
    
    testNumFmtNumberZAFormatWithMinAndMaxFracDigitsTooSmall: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "af-ZA",
            minFractionDigits: 3,
            maxFractionDigits: 6
        });
        
        test.ok(fmt !== null);
        
        test.equal(fmt.format(1.7), "1,700");
        test.done();
    },
    
    testNumFmtNumberZAFormatWithMinAndMaxFracDigitsTooBig: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "af-ZA",
            minFractionDigits: 3,
            maxFractionDigits: 6
        });
        
        test.ok(fmt !== null);
        
        test.equal(fmt.format(1.76543298765), "1,765433");
        test.done();
    },
    
    testNumFmtNumberZAFormatWithMinAndMaxFracDigitsJustRight: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            minFractionDigits: 3,
            maxFractionDigits: 6
        });
        
        test.ok(fmt !== null);
        
        test.equal(fmt.format(1.76543), "1.76543");
        test.done();
    },
    
    testNumFmtNumberZAStyleStandard: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "af-ZA",
            style: "standard"
        });
        
        test.ok(fmt !== null);
        
        test.equal(fmt.format(2345678901234567.0), "2 345 678 901 234 567");
        test.done();
    },
    
    testNumFmtNumberZAFormatStandardWithMultiGroups: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "af-ZA",
            style: "standard"
        });
        
        test.ok(fmt !== null);
        
        test.equal(fmt.format(123456789.4), "123 456 789,4");
        test.done();
    },
    
    testNumFmtNumberZAFormatWithMultiGroupsNegative: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "af-ZA",
            style: "standard"
        });
        
        test.ok(fmt !== null);
        
        test.equal(fmt.format(-123456789.4), "-123 456 789,4");
        test.done();
    },
    
    testNumFmtNumberZAStyleScientific: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "af-ZA",
            style: "scientific"
        });
        
        test.ok(fmt !== null);
        
        test.equal(fmt.format(12345678901234567890123456789.0), "1,2345678901234568E+28");
        test.done();
    },
    
    testNumFmtNumberZAStyleScientificSmall: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "af-ZA",
            style: "scientific"
        });
        
        test.ok(fmt !== null);
        
        test.equal(fmt.format(0.000001234567890123456), "1,234567890123456E-6");
        test.done();
    },
    
    
    testNumFmtNumberZAStyleScientificWithMinFractionDigits: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "af-ZA",
            style: "scientific",
            minFractionDigits: 5
        });
        
        test.ok(fmt !== null);
        
        test.equal(fmt.format(12340000000000000000000000000.0), "1,23400E+28");
        test.done();
    },
    
    testNumFmtNumberZAStyleScientificWithMinFractionDigits: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "af-ZA",
            style: "scientific",
            minFractionDigits: 1
        });
        
        test.ok(fmt !== null);
        
        // min of 1 means we can have more digits than one!
        test.equal(fmt.format(12345678900000000000000000000.0), "1,23456789E+28");
        test.done();
    },
    
    testNumFmtNumberZAStyleScientificWithMinFractionDigitsTooSmall: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "af-ZA",
            style: "scientific",
            minFractionDigits: -2
        });
        
        test.ok(fmt !== null);
        
        test.equal(fmt.format(123400000000000000000.0), "1,234E+20");
        test.done();
    },
    
    testNumFmtNumberZAStyleScientificWithMinFractionDigitsTooSmallNoDigits: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            style: "scientific",
        locale: "af-ZA",
            minFractionDigits: -2
        });
        
        test.ok(fmt !== null);
        
        test.equal(fmt.format(10000000000000000000000000000.0), "1E+28");
        test.done();
    },
    
    testNumFmtNumberZAStyleScientificWithMinFractionDigitsTooBig: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
        locale: "af-ZA",
            style: "scientific",
            minFractionDigits: 25
        });
        
        test.ok(fmt !== null);
        
        // max is 20
        test.equal(fmt.format(12340000000000000000000000000.0), "1,23400000000000000000E+28");
        test.done();
    },
    
    testNumFmtNumberZAStyleScientificWithMaxAndRoundUp: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            style: "scientific",
        locale: "af-ZA",
            maxFractionDigits: 5,
            roundingMode: "up"
        });
        
        test.ok(fmt !== null);
        
        test.equal(fmt.format(12345678901234567890123456789.0), "1,23457E+28");
        test.done();
    },
    
    
    
    
    testNumFmtNumberZAStyleNogroupingInteger: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
        locale:"af-ZA",
            style: "nogrouping"
        });
        
        test.ok(fmt !== null);
        
        test.equal(fmt.format(123456789), "123456789");
        test.done();
    },
    
    testNumFmtNumberZAStyleNogroupingFloat: function(test) {
        test.expect(4);
        test.expect(2);
        var fmt = new NumFmt({
        locale:"af-ZA",
            style: "nogrouping"
        });
        
        test.ok(fmt !== null);
        
        test.equal(fmt.format(123456789.345345), "123456789,345345");
        test.done();
    },
    
    function GetUseNativeHasNativeButFalse() {
        var fmt = new NumFmt({
            locale: "af-ZA"
        });
        
        test.ok(fmt !== null);
        
        // Tamil does have native digits, but they are not frequently used
        test.ok(!fmt.getUseNative());
        test.done();
    },
    
    testNumFmtGetUseNativeOverrideTrue: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "af-ZA",
            useNative: true
        });
        
        test.ok(fmt !== null);
        
        test.ok(fmt.getUseNative());
        test.done();
    },
    
    testNumFmtGetUseNativeExplicitTrue: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "af-ZA",
            useNative: true
        });
        
        test.ok(fmt !== null);
        
        test.ok(fmt.getUseNative());
        test.done();
    },
    
    testNumFmtGetUseNativeExplicitFalse: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "af-ZA",
            useNative: false
        });
        
        test.ok(fmt !== null);
        
        test.ok(!fmt.getUseNative());
        test.done();
    },
    
    testNumFmtGetUseNativeOverrideFalse: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "af-ZA",
            useNative: false
        });
        
        test.ok(fmt !== null);
        
        test.ok(!fmt.getUseNative());
        test.done();
    },
    
    
    
    testNumFmtPercentageFormatRegular: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "af-ZA",    
            type: "percentage"
        });
        
        test.ok(fmt !== null);
        
        test.equal(fmt.format(57.0), "57%");
        test.done();
    },
    
    testNumFmtPercentageGetType: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "af-ZA",
            type: "percentage"
        });
        
        test.ok(fmt !== null);
        
        test.equal(fmt.getType(), "percentage");
        test.done();
    },
    
    testNumFmtPercentageFormatWithDecimal: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "af-ZA",
            type: "percentage"
        });
        
        test.ok(fmt !== null);
        
        test.equal(fmt.format(57.8), "57,8%");
        test.done();
    },
    
    testNumFmtCurrencyFormatZADefault: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "af-ZA",
            currency: "ZAR"
        });
        
        test.ok(fmt !== null);
        
        test.equal(fmt.format(57.05), "R57,05");
        test.done();
    },
    
    testNumFmtCurrencyFormatZADefault: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            currency: "ZAR"
        });
        
        test.ok(fmt !== null);
        
        test.equal(fmt.format(57.05), "R57.05");
        test.done();
    },
    testNumFmtCurrencyFormatZADefault: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "af-ZA",
            currency: "ZAR"
        });
        
        test.ok(fmt !== null);
        
        test.equal(fmt.format(57.056), "R57,06");
        test.done();
    },
    
    testNumFmtCurrencyUseCorrectFractionDigitsForLocale: function(test) {
        test.expect(3);
        var fmt = new NumFmt({
            type: "currency",
            locale: "af-ZA",
            currency: "ZAR"
        });
        
        test.ok(fmt !== null);
        
        test.equal(fmt.getMaxFractionDigits(), 2);
        test.equal(fmt.getMinFractionDigits(), 2);
        test.done();
    },
    
    testNumFmtCurrencyFormatZADefault: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "af-ZA",
            currency: "ZAR"
        });
        
        test.ok(fmt !== null);
        
        test.equal(fmt.format(57), "R57,00");
        test.done();
    },
    
    testNumFmtCurrencyFormatZADefault: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "af-ZA",
            currency: "ZAR"
        });
        
        test.ok(fmt !== null);
        
        test.equal(fmt.format(57.1), "R57,10");
        test.done();
    },
    
    testNumFmtCurrencyFormatZADefault: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "af-ZA",
            minFractionDigits: 5,
            currency: "ZAR"
        });
        
        test.ok(fmt !== null);
        
        test.equal(fmt.format(57.1), "R57,10000");
        test.done();
    },
    
    testNumFmtCurrencyFormatZADefault: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "af-ZA",
            style: "iso",
            currency: "ZAR"
        });
        
        test.ok(fmt !== null);
        
        test.equal(fmt.format(57.1), "ZAR57,10000");
        test.done();
    },
    
    testNumFmtCurrencyFormatZADefault: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "af-ZA",
            currency: "ZAR"
        });
        
        test.ok(fmt !== null);
        
        test.equal(fmt.format(-57), "-R57,00");
        test.done();
    },
    
    testNumFmtCurrencyFormatZAGrouping: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "af-ZA",
            currency: "ZAR"
        });
        
        test.ok(fmt !== null);
        
        test.equal(fmt.format(123456788), "R123 456 788,00");
        test.done();
    },
    
    /*Namibia test cases*/
    
    
    testNumFmtNumberNAFormatNoFractionalLimit: function(test) {
        test.expect(2);
    
        var fmt = new NumFmt({
            locale: "af-NA"
        });
        test.ok(fmt !== null);
        
        // no limit imposed by the function -- JavaScript has a limit for itself though
        // of about 16 significant digits, which stems from the implementation of
        // floating point arithmetic that it uses
        test.equal(fmt.format(1.012345678901234), "1,012345678901234");
        test.done();
    },
    
    testNumFmtNumberNAFormatNoIntegralLimit: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "af-NA"
        });
        
        test.ok(fmt !== null);
        
        // no limit imposed by the function -- JavaScript has a limit for itself though
        // of about 16 significant digits, which stems from the implementation of
        // floating point arithmetic that it uses
        test.equal(fmt.format(12345678901234.0), "12 345 678 901 234");
        test.done();
    },
    
    testNumFmtNumberNAFormatWithMaxFracDigits: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "af-NA",
            maxFractionDigits: 2
        });
        
        test.ok(fmt !== null);
        
        test.equal(fmt.format(1.7453), "1,75");
        test.done();
    },
    
    testNumFmtNumberNAFormatWithMinFracDigits: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "af-NA",
            minFractionDigits: 4
        });
        
        test.ok(fmt !== null);
        
        test.equal(fmt.format(1.75), "1,7500");
        test.done();
    },
    
    testNumFmtNumberNAFormatWithMinFracDigitsTooSmall: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "af-NA",
            minFractionDigits: -5
        });
        
        test.ok(fmt !== null);
        
        // lower bound is 0
        test.equal(fmt.format(1.75), "1,75");
        test.done();
    },
    
    testNumFmtNumberNAFormatWithMinFracDigitsTooSmallNoDigits: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "af-NA",
            minFractionDigits: -5
        });
        
        test.ok(fmt !== null);
        
        // lower bound is 0
        test.equal(fmt.format(17500), "17 500");
        test.done();
    },
    
    testNumFmtNumberNAFormatWithMinFracDigitsTooBig: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "af-NA",
            minFractionDigits: 25
        });
        
        test.ok(fmt !== null);
    
        // limit to 20, but the precision is only to 16 so it is rounded and zero-padded at the end
        test.equal(fmt.format(1.012345678901234567890123456789), "1,01234567890123460000");
        test.done();
    },
    
    testNumFmtNumberNAFormatWithMinAndMaxFracDigitsTooSmall: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "af-NA",
            minFractionDigits: 3,
            maxFractionDigits: 6
        });
        
        test.ok(fmt !== null);
        
        test.equal(fmt.format(1.7), "1,700");
        test.done();
    },
    
    testNumFmtNumberNAFormatWithMinAndMaxFracDigitsTooBig: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "af-NA",
            minFractionDigits: 3,
            maxFractionDigits: 6
        });
        
        test.ok(fmt !== null);
        
        test.equal(fmt.format(1.76543298765), "1,765433");
        test.done();
    },
    
    testNumFmtNumberNAFormatWithMinAndMaxFracDigitsJustRight: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            minFractionDigits: 3,
            maxFractionDigits: 6
        });
        
        test.ok(fmt !== null);
        
        test.equal(fmt.format(1.76543), "1.76543");
        test.done();
    },
    
    testNumFmtNumberNAStyleStandard: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "af-NA",
            style: "standard"
        });
        
        test.ok(fmt !== null);
        
        test.equal(fmt.format(2345678901234567.0), "2 345 678 901 234 567");
        test.done();
    },
    
    testNumFmtNumberNAFormatStandardWithMultiGroups: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "af-NA",
            style: "standard"
        });
        
        test.ok(fmt !== null);
        
        test.equal(fmt.format(123456789.4), "123 456 789,4");
        test.done();
    },
    
    testNumFmtNumberNAFormatWithMultiGroupsNegative: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "af-NA",
            style: "standard"
        });
        
        test.ok(fmt !== null);
        
        test.equal(fmt.format(-123456789.4), "-123 456 789,4");
        test.done();
    },
    
    testNumFmtNumberNAStyleScientific: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "af-NA",
            style: "scientific"
        });
        
        test.ok(fmt !== null);
        
        test.equal(fmt.format(12345678901234567890123456789.0), "1,2345678901234568E+28");
        test.done();
    },
    
    testNumFmtNumberNAStyleScientificSmall: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "af-NA",
            style: "scientific"
        });
        
        test.ok(fmt !== null);
        
        test.equal(fmt.format(0.000001234567890123456), "1,234567890123456E-6");
        test.done();
    },
    
    
    testNumFmtNumberNAStyleScientificWithMinFractionDigits: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "af-NA",
            style: "scientific",
            minFractionDigits: 5
        });
        
        test.ok(fmt !== null);
        
        test.equal(fmt.format(12340000000000000000000000000.0), "1,23400E+28");
        test.done();
    },
    
    testNumFmtNumberNAStyleScientificWithMinFractionDigits: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "af-NA",
            style: "scientific",
            minFractionDigits: 1
        });
        
        test.ok(fmt !== null);
        
        // min of 1 means we can have more digits than one!
        test.equal(fmt.format(12345678900000000000000000000.0), "1,23456789E+28");
        test.done();
    },
    
    testNumFmtNumberNAStyleScientificWithMinFractionDigitsTooSmall: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "af-NA",
            style: "scientific",
            minFractionDigits: -2
        });
        
        test.ok(fmt !== null);
        
        test.equal(fmt.format(123400000000000000000.0), "1,234E+20");
        test.done();
    },
    
    testNumFmtNumberNAStyleScientificWithMinFractionDigitsTooSmallNoDigits: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            style: "scientific",
        locale: "af-NA",
            minFractionDigits: -2
        });
        
        test.ok(fmt !== null);
        
        test.equal(fmt.format(10000000000000000000000000000.0), "1E+28");
        test.done();
    },
    
    testNumFmtNumberNAStyleScientificWithMinFractionDigitsTooBig: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
        locale: "af-NA",
            style: "scientific",
            minFractionDigits: 25
        });
        
        test.ok(fmt !== null);
        
        // max is 20
        test.equal(fmt.format(12340000000000000000000000000.0), "1,23400000000000000000E+28");
        test.done();
    },
    
    testNumFmtNumberNAStyleScientificWithMaxAndRoundUp: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            style: "scientific",
        locale: "af-NA",
            maxFractionDigits: 5,
            roundingMode: "up"
        });
        
        test.ok(fmt !== null);
        
        test.equal(fmt.format(12345678901234567890123456789.0), "1,23457E+28");
        test.done();
    },
    
    
    
    
    testNumFmtNumberNAStyleNogroupingInteger: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
        locale:"af-NA",
            style: "nogrouping"
        });
        
        test.ok(fmt !== null);
        
        test.equal(fmt.format(123456789), "123456789");
        test.done();
    },
    
    testNumFmtNumberNAStyleNogroupingFloat: function(test) {
        test.expect(4);
        test.expect(2);
        var fmt = new NumFmt({
        locale:"af-NA",
            style: "nogrouping"
        });
        
        test.ok(fmt !== null);
        
        test.equal(fmt.format(123456789.345345), "123456789,345345");
        test.done();
    },
    
    function GetUseNativeHasNativeButFalse() {
        var fmt = new NumFmt({
            locale: "af-NA"
        });
        
        test.ok(fmt !== null);
        
        // Tamil does have native digits, but they are not frequently used
        test.ok(!fmt.getUseNative());
        test.done();
    },
    
    testNumFmtGetUseNativeOverrideTrue: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "af-NA",
            useNative: true
        });
        
        test.ok(fmt !== null);
        
        test.ok(fmt.getUseNative());
        test.done();
    },
    
    testNumFmtGetUseNativeExplicitTrue: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "af-NA",
            useNative: true
        });
        
        test.ok(fmt !== null);
        
        test.ok(fmt.getUseNative());
        test.done();
    },
    
    testNumFmtGetUseNativeExplicitFalse: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "af-NA",
            useNative: false
        });
        
        test.ok(fmt !== null);
        
        test.ok(!fmt.getUseNative());
        test.done();
    },
    
    testNumFmtGetUseNativeOverrideFalse: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "af-NA",
            useNative: false
        });
        
        test.ok(fmt !== null);
        
        test.ok(!fmt.getUseNative());
        test.done();
    },
    
    
    
    testNumFmtPercentageFormatRegular: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "af-NA",    
            type: "percentage"
        });
        
        test.ok(fmt !== null);
        
        test.equal(fmt.format(57.0), "57%");
        test.done();
    },
    
    testNumFmtPercentageGetType: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "af-NA",
            type: "percentage"
        });
        
        test.ok(fmt !== null);
        
        test.equal(fmt.getType(), "percentage");
        test.done();
    },
    
    testNumFmtPercentageFormatWithDecimal: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "af-NA",
            type: "percentage"
        });
        
        test.ok(fmt !== null);
        
        test.equal(fmt.format(57.8), "57,8%");
        test.done();
    },
    
    testNumFmtCurrencyFormatNADefault: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "af-NA",
            currency: "NAD"
        });
        
        test.ok(fmt !== null);
        
        test.equal(fmt.format(57.05), "$ 57,05");
        test.done();
    },
    
    testNumFmtCurrencyFormatNADefault: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            currency: "NAD"
        });
        
        test.ok(fmt !== null);
        
        test.equal(fmt.format(57.05), "$ 57.05");
        test.done();
    },
    testNumFmtCurrencyFormatNADefault: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "af-NA",
            currency: "NAD"
        });
        
        test.ok(fmt !== null);
        
        test.equal(fmt.format(57.056), "$ 57,06");
        test.done();
    },
    
    testNumFmtCurrencyUseCorrectFractionDigitsForLocale: function(test) {
        test.expect(3);
        var fmt = new NumFmt({
            type: "currency",
            locale: "af-NA",
            currency: "NAD"
        });
        
        test.ok(fmt !== null);
        
        test.equal(fmt.getMaxFractionDigits(), 2);
        test.equal(fmt.getMinFractionDigits(), 2);
        test.done();
    },
    
    testNumFmtCurrencyFormatNADefault: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "af-NA",
            currency: "NAD"
        });
        
        test.ok(fmt !== null);
        
        test.equal(fmt.format(57), "$ 57,00");
        test.done();
    },
    
    testNumFmtCurrencyFormatNADefault: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "af-NA",
            currency: "NAD"
        });
        
        test.ok(fmt !== null);
        
        test.equal(fmt.format(57.1), "$ 57,10");
        test.done();
    },
    
    testNumFmtCurrencyFormatNADefault: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "af-NA",
            minFractionDigits: 5,
            currency: "NAD"
        });
        
        test.ok(fmt !== null);
        
        test.equal(fmt.format(57.1), "$ 57,10000");
        test.done();
    },
    
    testNumFmtCurrencyFormatNADefault: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "af-NA",
            style: "iso",
            currency: "NAD"
        });
        
        test.ok(fmt !== null);
        
        test.equal(fmt.format(57.1), "NAD57,10000");
        test.done();
    },
    
    testNumFmtCurrencyFormatNADefault: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "af-NA",
            currency: "NAD"
        });
        
        test.ok(fmt !== null);
        
        test.equal(fmt.format(-57), "-$57,00");
        test.done();
    },
    
    testNumFmtCurrencyFormatNAGrouping: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "af-NA",
            currency: "NAD"
        });
        
        test.ok(fmt !== null);
        
        test.equal(fmt.format(123456788), "$123 456 788,00");
        test.done();
    }
    
    
    
};