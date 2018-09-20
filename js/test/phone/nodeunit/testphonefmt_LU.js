/*
 * phonefmt_LU.js - Test the phonefmt_LU Style.
 * 
 * Copyright © 2014-2015,2017, JEDLSoft
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
 
if (typeof(PhoneNumber) === "undefined") {
    var PhoneNumber = require("../../../lib/PhoneNumber.js");
}
if (typeof(PhoneFmt) === "undefined") {
    var PhoneFmt = require("../../../lib/PhoneFmt.js");
}
if (typeof(ilib) === "undefined") {
    var ilib = require("../../../lib/ilib.js");
}

module.exports.phonefmt_LU = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testFormatNLLUStyle0: function(test) {
        test.expect(1);
        var formatted,
            parsed = new PhoneNumber({
                subscriberNumber: "223456"
            }),
            expected = "22 34 56";
        
        var fmt = new PhoneFmt({locale: "de-LU", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    testFormatNLLUStyle1: function(test) {
        test.expect(1);
        var formatted,
            parsed = new PhoneNumber({
                subscriberNumber: "223456"
            }),
            expected = "223456";
        
        var fmt = new PhoneFmt({locale: "de-LU", style: "komprimierte/comprimé"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatNLLUStyle2: function(test) {
        test.expect(1);
        var formatted,
            parsed = new PhoneNumber({
                subscriberNumber: "223456"
            }),
            expected = "223-456";
        
        var fmt = new PhoneFmt({locale: "de-LU", style: "Bindestrichen/tirets"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    testFormatNLLUInternational: function(test) {
        test.expect(1);
        var formatted,
            parsed = new PhoneNumber({
                iddPrefix: "+",
                countryCode: "352",
                subscriberNumber: "123456"
            }),
            expected = "+352 123 456";
        
        var fmt = new PhoneFmt({locale: "de-LU", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    testFormatNLLUInternationalAccessCode: function(test) {
        test.expect(1);
        var formatted,
            parsed = new PhoneNumber({
                iddPrefix: "00",
                countryCode: "352",
                subscriberNumber: "123456"
            }),
            expected = "00 352 123 456";
        
        var fmt = new PhoneFmt({locale: "de-LU", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    testFormatNLLUMobile: function(test) {
        test.expect(1);
        var formatted,
            parsed = new PhoneNumber({
                mobilePrefix: "661",
                subscriberNumber: "234567"
            }),
            expected = "661 234 567";
        
        var fmt = new PhoneFmt({locale: "de-LU", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    testFormatNLLUMobileInternational: function(test) {
        test.expect(1);
        var formatted,
            parsed = new PhoneNumber({
                iddPrefix: "+",
                countryCode: "352",
                mobilePrefix: "661",
                subscriberNumber: "234567"
            }),
            expected = "+352 661 234 567";
        
        var fmt = new PhoneFmt({locale: "de-LU", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    
    testFormatNLLUWithParamsSMSPartial: function(test) {
        test.expect(1);
        var formatted,
            parsed = new PhoneNumber({
                subscriberNumber: "8765"
            }),
            expected = "87 65";
        
        var fmt = new PhoneFmt({locale: "de-LU"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    testFormatNLLUWithParamsSMSWhole: function(test) {
        test.expect(1);
        var formatted,
            parsed = new PhoneNumber({
                subscriberNumber: "8765"
            }),
            expected = "8765";
        
        var fmt = new PhoneFmt({locale: "de-LU"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    testFormatNLLUPremium: function(test) {
        test.expect(1);
        var formatted,
            parsed = new PhoneNumber({
                serviceCode: "901",
                subscriberNumber: "12345"
            }),
            expected = "901 123 45";
        
        var fmt = new PhoneFmt({locale: "de-LU", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatNLLUBlock: function(test) {
        test.expect(1);
        var formatted,
            parsed = new PhoneNumber({
                serviceCode: "116",
                subscriberNumber: "116"
            }),
            expected = "116 116";
        
        var fmt = new PhoneFmt({locale: "de-LU", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    
    
    testFormatNLLUStyle0Partial1: function(test) {
        test.expect(1);
        var formatted,
            parsed = new PhoneNumber({
                subscriberNumber: "5"
            }),
            expected = "5";
        
        var fmt = new PhoneFmt({locale: "de-LU"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatNLLUStyle0Partial2: function(test) {
        test.expect(1);
        var formatted,
            parsed = new PhoneNumber({
                subscriberNumber: "50"
            }),
            expected = "50";
        
        var fmt = new PhoneFmt({locale: "de-LU"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatNLLUStyle0Partial3: function(test) {
        test.expect(1);
        var formatted,
            parsed = new PhoneNumber({
                subscriberNumber: "501"
            }),
            expected = "501";
        
        var fmt = new PhoneFmt({locale: "de-LU"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatNLLUStyle0Partial4: function(test) {
        test.expect(1);
        var formatted,
            parsed = new PhoneNumber({
                subscriberNumber: "5012"
            }),
            expected = "50 12";
        
        var fmt = new PhoneFmt({locale: "de-LU"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatNLLUStyle0Partial5: function(test) {
        test.expect(1);
        var formatted,
            parsed = new PhoneNumber({
                subscriberNumber: "50123"
            }),
            expected = "501 23";
        
        var fmt = new PhoneFmt({locale: "de-LU"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatNLLUStyle0Partial6: function(test) {
        test.expect(1);
        var formatted,
            parsed = new PhoneNumber({
                subscriberNumber: "501234"
            }),
            expected = "50 12 34";
        
        var fmt = new PhoneFmt({locale: "de-LU"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatNLLUStyle0Partial7: function(test) {
        test.expect(1);
        var formatted,
            parsed = new PhoneNumber({
                subscriberNumber: "5012345" // too long
            }),
            expected = "5012345";
        
        var fmt = new PhoneFmt({locale: "de-LU"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    
    testFormatNLLUStyle1Partial1: function(test) {
        test.expect(1);
        var formatted,
            parsed = new PhoneNumber({
                subscriberNumber: "5"
            }),
            expected = "5";
        
        var fmt = new PhoneFmt({locale: "de-LU", style: "komprimierte/comprimé"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatNLLUStyle1Partial2: function(test) {
        test.expect(1);
        var formatted,
            parsed = new PhoneNumber({
                subscriberNumber: "50"
            }),
            expected = "50";
        
        var fmt = new PhoneFmt({locale: "de-LU", style: "komprimierte/comprimé"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatNLLUStyle1Partial3: function(test) {
        test.expect(1);
        var formatted,
            parsed = new PhoneNumber({
                subscriberNumber: "501"
            }),
            expected = "501";
        
        var fmt = new PhoneFmt({locale: "de-LU", style: "komprimierte/comprimé"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatNLLUStyle1Partial4: function(test) {
        test.expect(1);
        var formatted,
            parsed = new PhoneNumber({
                subscriberNumber: "5012"
            }),
            expected = "5012";
        
        var fmt = new PhoneFmt({locale: "de-LU", style: "komprimierte/comprimé"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatNLLUStyle1Partial5: function(test) {
        test.expect(1);
        var formatted,
            parsed = new PhoneNumber({
                subscriberNumber: "50123"
            }),
            expected = "50123";
        
        var fmt = new PhoneFmt({locale: "de-LU", style: "komprimierte/comprimé"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatNLLUStyle1Partial6: function(test) {
        test.expect(1);
        var formatted,
            parsed = new PhoneNumber({
                subscriberNumber: "501234"
            }),
            expected = "501234";
        
        var fmt = new PhoneFmt({locale: "de-LU", style: "komprimierte/comprimé"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatNLLUStyle1Partial7: function(test) {
        test.expect(1);
        var formatted,
            parsed = new PhoneNumber({
                subscriberNumber: "5012345"
            }),
            expected = "5012345"; // too long
        
        var fmt = new PhoneFmt({locale: "de-LU", style: "komprimierte/comprimé"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    
    testFormatNLLUStyle2Partial1: function(test) {
        test.expect(1);
        var formatted,
            parsed = new PhoneNumber({
                subscriberNumber: "5"
            }),
            expected = "5";
        
        var fmt = new PhoneFmt({locale: "de-LU", style: "Bindestrichen/tirets"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatNLLUStyle2Partial2: function(test) {
        test.expect(1);
        var formatted,
            parsed = new PhoneNumber({
                subscriberNumber: "50"
            }),
            expected = "50";
        
        var fmt = new PhoneFmt({locale: "de-LU", style: "Bindestrichen/tirets"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatNLLUStyle2Partial3: function(test) {
        test.expect(1);
        var formatted,
            parsed = new PhoneNumber({
                subscriberNumber: "501"
            }),
            expected = "501";
        
        var fmt = new PhoneFmt({locale: "de-LU", style: "Bindestrichen/tirets"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatNLLUStyle2Partial4: function(test) {
        test.expect(1);
        var formatted,
            parsed = new PhoneNumber({
                subscriberNumber: "5012"
            }),
            expected = "501-2";
        
        var fmt = new PhoneFmt({locale: "de-LU", style: "Bindestrichen/tirets"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatNLLUStyle2Partial5: function(test) {
        test.expect(1);
        var formatted,
            parsed = new PhoneNumber({
                subscriberNumber: "50123"
            }),
            expected = "501-23";
        
        var fmt = new PhoneFmt({locale: "de-LU", style: "Bindestrichen/tirets"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatNLLUStyle2Partial6: function(test) {
        test.expect(1);
        var formatted,
            parsed = new PhoneNumber({
                subscriberNumber: "501234"
            }),
            expected = "501-234";
        
        var fmt = new PhoneFmt({locale: "de-LU", style: "Bindestrichen/tirets"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatNLLUStyle2Partial7: function(test) {
        test.expect(1);
        var formatted,
            parsed = new PhoneNumber({
                subscriberNumber: "5012345" // too long
            }),
            expected = "5012345";
        
        var fmt = new PhoneFmt({locale: "de-LU", style: "Bindestrichen/tirets"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
        
        
    }
    
};
