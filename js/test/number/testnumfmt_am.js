/*
 * testnumfmt_am.js - test the number formatter object for Amharic language
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
    var NumFmt = require("../../lib/NumFmt.js");
}
if (typeof(ilib) === "undefined") {
    var ilib = require("../../lib/ilib.js");
}

module.exports.testnumfmt_am = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testNumFmtNumberETFormatNoFractionalLimit: function(test) {
        test.expect(2);
    
        var fmt = new NumFmt({
            locale: "am-ET"
        });
        test.ok(fmt !== null);
        
        // no limit imposed by the function -- JavaScript has a limit for itself though
        // of about 16 significant digits, which stems from the implementation of
        // floating point arithmetic that it uses
        test.equal(fmt.format(1.012345678901234), "1.012345678901234");
        test.done();
    },
    
    testNumFmtNumberETFormatNoIntegralLimit: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "am-ET"
        });
        
        test.ok(fmt !== null);
        
        // no limit imposed by the function -- JavaScript has a limit for itself though
        // of about 16 significant digits, which stems from the implementation of
        // floating point arithmetic that it uses
        test.equal(fmt.format(12345678901234.0), "12,345,678,901,234");
        test.done();
    },
    
    testNumFmtNumberETFormatWithMaxFracDigits: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "am-ET",
            maxFractionDigits: 2
        });
        
        test.ok(fmt !== null);
        
        test.equal(fmt.format(1.7453), "1.75");
        test.done();
    },
    
    testNumFmtNumberETFormatWithMinFracDigits: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "am-ET",
            minFractionDigits: 4
        });
        
        test.ok(fmt !== null);
        
        test.equal(fmt.format(1.75), "1.7500");
        test.done();
    },
    
    testNumFmtNumberETFormatWithMinFracDigitsTooSmall: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "am-ET",
            minFractionDigits: -5
        });
        
        test.ok(fmt !== null);
        
        // lower bound is 0
        test.equal(fmt.format(1.75), "1.75");
        test.done();
    },
    
    testNumFmtNumberETFormatWithMinFracDigitsTooSmallNoDigits: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "am-ET",
            minFractionDigits: -5
        });
        
        test.ok(fmt !== null);
        
        // lower bound is 0
        test.equal(fmt.format(17500), "17,500");
        test.done();
    },
    
    testNumFmtNumberETFormatWithMinFracDigitsTooBig: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "am-ET",
            minFractionDigits: 25
        });
        
        test.ok(fmt !== null);
    
        // limit to 20, but the precision is only to 16 so it is rounded and zero-padded at the end
        test.equal(fmt.format(1.012345678901234567890123456789), "1.01234567890123460000");
        test.done();
    },
    
    testNumFmtNumberETFormatWithMinAndMaxFracDigitsTooSmall: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "am-ET",
            minFractionDigits: 3,
            maxFractionDigits: 6
        });
        
        test.ok(fmt !== null);
        
        test.equal(fmt.format(1.7), "1.700");
        test.done();
    },
    
    testNumFmtNumberETFormatWithMinAndMaxFracDigitsTooBig: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "am-ET",
            minFractionDigits: 3,
            maxFractionDigits: 6
        });
        
        test.ok(fmt !== null);
        
        test.equal(fmt.format(1.76543298765), "1.765433");
        test.done();
    },
    
    testNumFmtNumberETFormatWithMinAndMaxFracDigitsJustRight: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            minFractionDigits: 3,
            maxFractionDigits: 6
        });
        
        test.ok(fmt !== null);
        
        test.equal(fmt.format(1.76543), "1.76543");
        test.done();
    },
    
    testNumFmtNumberETStyleStandard: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "am-ET",
            style: "standard"
        });
        
        test.ok(fmt !== null);
        
        test.equal(fmt.format(2345678901234567.0), "2,345,678,901,234,567");
        test.done();
    },
    
    testNumFmtNumberETFormatStandardWithMultiGroups: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "am-ET",
            style: "standard"
        });
        
        test.ok(fmt !== null);
        
        test.equal(fmt.format(123456789.4), "123,456,789.4");
        test.done();
    },
    
    testNumFmtNumberETFormatWithMultiGroupsNegative: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "am-ET",
            style: "standard"
        });
        
        test.ok(fmt !== null);
        
        test.equal(fmt.format(-123456789.4), "-123,456,789.4");
        test.done();
    },
    
    testNumFmtNumberETStyleScientific: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "am-ET",
            style: "scientific"
        });
        
        test.ok(fmt !== null);
        
        test.equal(fmt.format(12345678901234567890123456789.0), "1.2345678901234568E+28");
        test.done();
    },
    
    testNumFmtNumberETStyleScientificSmall: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "am-ET",
            style: "scientific"
        });
        
        test.ok(fmt !== null);
        
        test.equal(fmt.format(0.000001234567890123456), "1.234567890123456E-6");
        test.done();
    },
    
    
    testNumFmtNumberETStyleScientificWithMinFractionDigits: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "am-ET",
            style: "scientific",
            minFractionDigits: 5
        });
        
        test.ok(fmt !== null);
        
        test.equal(fmt.format(12340000000000000000000000000.0), "1.23400E+28");
        test.done();
    },
    
    testNumFmtNumberETStyleScientificWithMinFractionDigits: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "am-ET",
            style: "scientific",
            minFractionDigits: 1
        });
        
        test.ok(fmt !== null);
        
        // min of 1 means we can have more digits than one!
        test.equal(fmt.format(12345678900000000000000000000.0), "1.23456789E+28");
        test.done();
    },
    
    testNumFmtNumberETStyleScientificWithMinFractionDigitsTooSmall: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "am-ET",
            style: "scientific",
            minFractionDigits: -2
        });
        
        test.ok(fmt !== null);
        
        test.equal(fmt.format(123400000000000000000.0), "1.234E+20");
        test.done();
    },
    
    testNumFmtNumberETStyleScientificWithMinFractionDigitsTooSmallNoDigits: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            style: "scientific",
        locale: "am-ET",
            minFractionDigits: -2
        });
        
        test.ok(fmt !== null);
        
        test.equal(fmt.format(10000000000000000000000000000.0), "1E+28");
        test.done();
    },
    
    testNumFmtNumberETStyleScientificWithMinFractionDigitsTooBig: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
        locale: "am-ET",
            style: "scientific",
            minFractionDigits: 25
        });
        
        test.ok(fmt !== null);
        
        // max is 20
        test.equal(fmt.format(12340000000000000000000000000.0), "1.23400000000000000000E+28");
        test.done();
    },
    
    testNumFmtNumberETStyleScientificWithMaxAndRoundUp: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            style: "scientific",
        locale: "am-ET",
            maxFractionDigits: 5,
            roundingMode: "up"
        });
        
        test.ok(fmt !== null);
        
        test.equal(fmt.format(12345678901234567890123456789.0), "1.23457E+28");
        test.done();
    },
    
    
    
    
    testNumFmtNumberETStyleNogroupingInteger: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
        locale:"am-ET",
            style: "nogrouping"
        });
        
        test.ok(fmt !== null);
        
        test.equal(fmt.format(123456789), "123456789");
        test.done();
    },
    
    testNumFmtNumberETStyleNogroupingFloat: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
        locale:"am-ET",
            style: "nogrouping"
        });
        
        test.ok(fmt !== null);
        
        test.equal(fmt.format(123456789.345345), "123456789.345345");
        test.done();
    },
    
    testNumFmtETGetUseNativeHasNativeButFalse: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "am-ET"
        });
        
        test.ok(fmt !== null);
        
        // Tamil does have native digits, but they are not frequently used
        test.ok(!fmt.getUseNative());
        test.done();
    },
    
    testNumFmtGetUseNativeOverrideTrue: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "am-ET",
            useNative: true
        });
        
        test.ok(fmt !== null);
        
        test.ok(fmt.getUseNative());
        test.done();
    },
    
    testNumFmtGetUseNativeExplicitTrue: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "am-ET",
            useNative: true
        });
        
        test.ok(fmt !== null);
        
        test.ok(fmt.getUseNative());
        test.done();
    },
    
    testNumFmtGetUseNativeExplicitFalse: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "am-ET",
            useNative: false
        });
        
        test.ok(fmt !== null);
        
        test.ok(!fmt.getUseNative());
        test.done();
    },
    
    testNumFmtGetUseNativeOverrideFalse: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "am-ET",
            useNative: false
        });
        
        test.ok(fmt !== null);
        
        test.ok(!fmt.getUseNative());
        test.done();
    },
    
    
    
    testNumFmtPercentageFormatRegular: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "am-ET",    
            type: "percentage"
        });
        
        test.ok(fmt !== null);
        
        test.equal(fmt.format(57.0), "57%");
        test.done();
    },
    
    testNumFmtPercentageGetType: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "am-ET",
            type: "percentage"
        });
        
        test.ok(fmt !== null);
        
        test.equal(fmt.getType(), "percentage");
        test.done();
    },
    
    testNumFmtPercentageFormatWithDecimal: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            locale: "am-ET",
            type: "percentage"
        });
        
        test.ok(fmt !== null);
        
        test.equal(fmt.format(57.8), "57.8%");
        test.done();
    },
    
    testNumFmtCurrencyFormatETDefault: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "am-ET",
            currency: "ETB"
        });
        
        test.ok(fmt !== null);
        
        test.equal(fmt.format(57.05), "Br57.05");
        test.done();
    },
    
    testNumFmtCurrencyFormatETDefault: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            currency: "ETB"
        });
        
        test.ok(fmt !== null);
        
        test.equal(fmt.format(57.05), "Br57.05");
        test.done();
    },
    testNumFmtCurrencyFormatETDefault: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "am-ET",
            currency: "ETB"
        });
        
        test.ok(fmt !== null);
        
        test.equal(fmt.format(57.056), "Br57,06");
        test.done();
    },
    
    testNumFmtCurrencyUseCorrectFractionDigitsForLocale: function(test) {
        test.expect(3);
        var fmt = new NumFmt({
            type: "currency",
            locale: "am-ET",
            currency: "ETB"
        });
        
        test.ok(fmt !== null);
        
        test.equal(fmt.getMaxFractionDigits(), 2);
        test.equal(fmt.getMinFractionDigits(), 2);
        test.done();
    },
    
    testNumFmtCurrencyFormatETDefault: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "am-ET",
            currency: "ETB"
        });
        
        test.ok(fmt !== null);
        
        test.equal(fmt.format(57), "Br57,00");
        test.done();
    },
    
    testNumFmtCurrencyFormatETDefault: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "am-ET",
            currency: "ETB"
        });
        
        test.ok(fmt !== null);
        
        test.equal(fmt.format(57.1), "Br57.10");
        test.done();
    },
    
    testNumFmtCurrencyFormatETDefault: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "am-ET",
            minFractionDigits: 5,
            currency: "ETB"
        });
        
        test.ok(fmt !== null);
        
        test.equal(fmt.format(57.1), "BR57.10000");
        test.done();
    },
    
    testNumFmtCurrencyFormatETDefault: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "am-ET",
            style: "iso",
            currency: "ETB"
        });
        
        test.ok(fmt !== null);
        
        test.equal(fmt.format(57.1), "ETB57,10000");
        test.done();
    },
    
    testNumFmtCurrencyFormatETDefault: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "am-ET",
            currency: "ETB"
        });
        
        test.ok(fmt !== null);
        
        test.equal(fmt.format(-57), "-ETB57.00");
        test.done();
    },
    
    testNumFmtCurrencyFormatETGrouping: function(test) {
        test.expect(2);
        var fmt = new NumFmt({
            type: "currency",
            locale: "am-ET",
            currency: "ETB"
        });
        
        test.ok(fmt !== null);
        
        test.equal(fmt.format(123456788), "ETB123,456,788.00");
        test.done();
    }
    
};
