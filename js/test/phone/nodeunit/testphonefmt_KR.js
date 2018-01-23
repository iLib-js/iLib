
/*
 * phonefmt_KR.js - Test the phonefmt_KR Style.
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

module.exports.phonefmt_KR = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testFormatKRStyle0: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "2",
            subscriberNumber: "34523434"
        });
        var expected = "02-3452-3434";
        
        var fmt = new PhoneFmt({locale: "ko-KR", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatKRStyle1: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "2",
            subscriberNumber: "34523434"
        });
        var expected = "(02) 3452-3434";
        
        var fmt = new PhoneFmt({locale: "ko-KR", style: "괄호"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatKRInternational: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "33",
            areaCode: "1",
            subscriberNumber: "12345678"
        });
        var expected = "+33 1 12 34 56 78";
        
        var fmt = new PhoneFmt({locale: "ko-KR", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
    },
    
    
    testFormatKRInternational2: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("+61212345678", {locale:"ko-KR"});
        var expected = "+61 2 1234 5678";
        
        var fmt = new PhoneFmt({locale: "ko-KR", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatKRInternationalAccessCode: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            iddPrefix: "002",
            countryCode: "33",
            areaCode: "1",
            subscriberNumber: "12345678"
        });
        var expected = "002 33 1 12 34 56 78";
        
        var fmt = new PhoneFmt({locale: "ko-KR", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatKRLongAreaCode: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "33",
            subscriberNumber: "1234567"
        });
        var expected = "033-123-4567";
        
        var fmt = new PhoneFmt({locale: "ko-KR", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
    },
    
    
    testFormatKRMobile: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "0",
            mobilePrefix: "18",
            subscriberNumber: "12345678"
        });
        var expected = "018-1234-5678";
        
        var fmt = new PhoneFmt({locale: "ko-KR", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatKRMobileInternational: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "82",
            mobilePrefix: "16",
            subscriberNumber: "12345678"
        });
        var expected = "+82 16 1234 5678";
        
        var fmt = new PhoneFmt({locale: "ko-KR", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatKRService: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "0",
            serviceCode: "30",
            subscriberNumber: "1234567"
        });
        var expected = "030-123-4567";
        
        var fmt = new PhoneFmt({locale: "ko-KR", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatKRIEIDD: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "353",
            trunkAccess: "0",
            areaCode: "1",
            subscriberNumber: "1234567"
        });
        var expected = "+353 1 123 4567";
        
        var fmt = new PhoneFmt({locale: "ko-KR", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatKRStyle0Partial0: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "0"
        });
        var expected = "0";
        
        var fmt = new PhoneFmt({locale: "ko-KR", style: "default"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
    },
    testFormatKRStyle0Partial1: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "0",
            subscriberNumber: "3"
        });
        var expected = "03";
        
        var fmt = new PhoneFmt({locale: "ko-KR", style: "default"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatKRStyle0Partial2: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "33"
        });
        var expected = "033";
        
        var fmt = new PhoneFmt({locale: "ko-KR", style: "default"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatKRStyle0Partial3: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "33",
            subscriberNumber: "1"
        });
        var expected = "033-1";
        
        var fmt = new PhoneFmt({locale: "ko-KR", style: "default"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
    },
    testFormatKRStyle0Partial4: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "33",
            subscriberNumber: "12"
        });
        var expected = "033-12";
        
        var fmt = new PhoneFmt({locale: "ko-KR", style: "default"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
    },
    testFormatKRStyle0Partial5: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "33",
            subscriberNumber: "123"
        });
        var expected = "033-123";
        
        var fmt = new PhoneFmt({locale: "ko-KR", style: "default"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
    },
    testFormatKRStyle0Partial6: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "33",
            subscriberNumber: "1234"
        });
        var expected = "033-123-4";
        
        var fmt = new PhoneFmt({locale: "ko-KR", style: "default"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
    },
    testFormatKRStyle0Partial7: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "33",
            subscriberNumber: "12345"
        });
        var expected = "033-123-45";
        
        var fmt = new PhoneFmt({locale: "ko-KR", style: "default"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
    },
    testFormatKRStyle0Partial8: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "33",
            subscriberNumber: "123456"
        });
        var expected = "033-123-456";
        
        var fmt = new PhoneFmt({locale: "ko-KR", style: "default"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
    },
    testFormatKRStyle0Partial9: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "33",
            subscriberNumber: "1234567"
        });
        var expected = "033-123-4567";
        
        var fmt = new PhoneFmt({locale: "ko-KR", style: "default"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
    },
    testFormatKRStyle0Partial10: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "33",
            subscriberNumber: "12345678"
        });
        var expected = "033-1234-5678";
        
        var fmt = new PhoneFmt({locale: "ko-KR", style: "default"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatKRStyle0Partial10: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "33",
            subscriberNumber: "123456781234",
            invalid: true
        });
        var expected = "033-1234-56781234";
        
        var fmt = new PhoneFmt({locale: "ko-KR", style: "default"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
    },
    
    
    testFormatKRStyle0Whole0: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "0"
        });
        var expected = "0";
        
        var fmt = new PhoneFmt({locale: "ko-KR", style: "default"});
        formatted = fmt.format(parsed, {partial: false});
        
        test.equal(formatted, expected);
        test.done();
    },
    testFormatKRStyle0Whole1: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "0",
            subscriberNumber: "3"
        });
        var expected = "03";
        
        var fmt = new PhoneFmt({locale: "ko-KR", style: "default"});
        formatted = fmt.format(parsed, {partial: false});
        
        test.equal(formatted, expected);
        test.done();
    },
    testFormatKRStyle0Whole2: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "33"
        });
        var expected = "033";
        
        var fmt = new PhoneFmt({locale: "ko-KR", style: "default"});
        formatted = fmt.format(parsed, {partial: false});
        
        test.equal(formatted, expected);
        test.done();
    },
    testFormatKRStyle0Whole3: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "33",
            subscriberNumber: "1"
        });
        var expected = "033-1";
        
        var fmt = new PhoneFmt({locale: "ko-KR", style: "default"});
        formatted = fmt.format(parsed, {partial: false});
        
        test.equal(formatted, expected);
        test.done();
    },
    testFormatKRStyle0Whole4: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "33",
            subscriberNumber: "12"
        });
        var expected = "033-12";
        
        var fmt = new PhoneFmt({locale: "ko-KR", style: "default"});
        formatted = fmt.format(parsed, {partial: false});
        
        test.equal(formatted, expected);
        test.done();
    },
    testFormatKRStyle0Whole5: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "33",
            subscriberNumber: "123"
        });
        var expected = "033-123";
        
        var fmt = new PhoneFmt({locale: "ko-KR", style: "default"});
        formatted = fmt.format(parsed, {partial: false});
        
        test.equal(formatted, expected);
        test.done();
    },
    testFormatKRStyle0Whole6: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "33",
            subscriberNumber: "1234"
        });
        var expected = "033-123-4";
        
        var fmt = new PhoneFmt({locale: "ko-KR", style: "default"});
        formatted = fmt.format(parsed, {partial: false});
        
        test.equal(formatted, expected);
        test.done();
    },
    testFormatKRStyle0Whole7: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "33",
            subscriberNumber: "12345"
        });
        var expected = "033-123-45";
        
        var fmt = new PhoneFmt({locale: "ko-KR", style: "default"});
        formatted = fmt.format(parsed, {partial: false});
        
        test.equal(formatted, expected);
        test.done();
    },
    testFormatKRStyle0Whole8: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "33",
            subscriberNumber: "123456"
        });
        var expected = "033-123-456";
        
        var fmt = new PhoneFmt({locale: "ko-KR", style: "default"});
        formatted = fmt.format(parsed, {partial: false});
        
        test.equal(formatted, expected);
        test.done();
    },
    testFormatKRStyle0Whole9: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "33",
            subscriberNumber: "1234567"
        });
        var expected = "033-123-4567";
        
        var fmt = new PhoneFmt({locale: "ko-KR", style: "default"});
        formatted = fmt.format(parsed, {partial: false});
        
        test.equal(formatted, expected);
        test.done();
    },
    testFormatKRStyle0Whole10: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "33",
            subscriberNumber: "12345678"
        });
        var expected = "033-1234-5678";
        
        var fmt = new PhoneFmt({locale: "ko-KR", style: "default"});
        formatted = fmt.format(parsed, {partial: false});
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatKRStyle1Partial0: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "0"
        });
        var expected = "0";
        
        var fmt = new PhoneFmt({locale: "ko-KR", style: "괄호"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
    },
    testFormatKRStyle1Partial1: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "0",
            subscriberNumber: "3"
        });
        var expected = "03";
        
        var fmt = new PhoneFmt({locale: "ko-KR", style: "괄호"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
    },
    testFormatKRStyle1Partial2: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "33"
        });
        var expected = "(033) ";
        
        var fmt = new PhoneFmt({locale: "ko-KR", style: "괄호"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
    },
    testFormatKRStyle1Partial3: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "33",
            subscriberNumber: "1"
        });
        var expected = "(033) 1";
        
        var fmt = new PhoneFmt({locale: "ko-KR", style: "괄호"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
    },
    testFormatKRStyle1Partial4: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "33",
            subscriberNumber: "12"
        });
        var expected = "(033) 12";
        
        var fmt = new PhoneFmt({locale: "ko-KR", style: "괄호"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
    },
    testFormatKRStyle1Partial5: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "33",
            subscriberNumber: "123"
        });
        var expected = "(033) 123";
        
        var fmt = new PhoneFmt({locale: "ko-KR", style: "괄호"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
    },
    testFormatKRStyle1Partial6: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "33",
            subscriberNumber: "1234"
        });
        var expected = "(033) 123-4";
        
        var fmt = new PhoneFmt({locale: "ko-KR", style: "괄호"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
    },
    testFormatKRStyle1Partial7: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "33",
            subscriberNumber: "12345"
        });
        var expected = "(033) 123-45";
        
        var fmt = new PhoneFmt({locale: "ko-KR", style: "괄호"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
    },
    testFormatKRStyle1Partial8: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "33",
            subscriberNumber: "123456"
        });
        var expected = "(033) 123-456";
        
        var fmt = new PhoneFmt({locale: "ko-KR", style: "괄호"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
    },
    testFormatKRStyle1Partial9: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "33",
            subscriberNumber: "1234567"
        });
        var expected = "(033) 123-4567";
        
        var fmt = new PhoneFmt({locale: "ko-KR", style: "괄호"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
    },
    testFormatKRStyle1Partial10: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "33",
            subscriberNumber: "12345678"
        });
        var expected = "(033) 1234-5678";
        
        var fmt = new PhoneFmt({locale: "ko-KR", style: "괄호"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatKRStyle0PartialLocal1: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            subscriberNumber: "4"
        });
        var expected = "4";
        
        var fmt = new PhoneFmt({locale: "ko-KR", style: "default"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
    },
    testFormatKRStyle0PartialLocal2: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            subscriberNumber: "45"
        });
        var expected = "45";
        
        var fmt = new PhoneFmt({locale: "ko-KR", style: "default"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
    },
    testFormatKRStyle0PartialLocal3: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            subscriberNumber: "456"
        });
        var expected = "456";
        
        var fmt = new PhoneFmt({locale: "ko-KR", style: "default"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
    },
    testFormatKRStyle0PartialLocal4: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            subscriberNumber: "4563"
        });
        var expected = "456-3";
        
        var fmt = new PhoneFmt({locale: "ko-KR", style: "default"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
    },
    testFormatKRStyle0PartialLocal5: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            subscriberNumber: "45634"
        });
        var expected = "456-34";
        
        var fmt = new PhoneFmt({locale: "ko-KR", style: "default"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
    },
    testFormatKRStyle0PartialLocal6: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            subscriberNumber: "456345"
        });
        var expected = "456-345";
        
        var fmt = new PhoneFmt({locale: "ko-KR", style: "default"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
    },
    testFormatKRStyle0PartialLocal7: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            subscriberNumber: "4563453"
        });
        var expected = "456-3453";
        
        var fmt = new PhoneFmt({locale: "ko-KR", style: "default"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
    },
    testFormatKRStyle0PartialLocal8: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            subscriberNumber: "45634535"
        });
        var expected = "4563-4535";
        
        var fmt = new PhoneFmt({locale: "ko-KR", style: "default"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
    },
    testFormatKRStyle0PartialLocal9: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            subscriberNumber: "456345352"    // too long
        });
        var expected = "4563-45352";    // use last resort rule
        
        var fmt = new PhoneFmt({locale: "ko-KR", style: "default"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatKRStyle1PartialLocal1: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            subscriberNumber: "4"
        });
        var expected = "4";
        
        var fmt = new PhoneFmt({locale: "ko-KR", style: "점"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
    },
    testFormatKRStyle1PartialLocal2: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            subscriberNumber: "45"
        });
        var expected = "45";
        
        var fmt = new PhoneFmt({locale: "ko-KR", style: "점"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
    },
    testFormatKRStyle1PartialLocal3: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            subscriberNumber: "456"
        });
        var expected = "456";
        
        var fmt = new PhoneFmt({locale: "ko-KR", style: "점"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
    },
    testFormatKRStyle1PartialLocal4: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            subscriberNumber: "4563"
        });
        var expected = "456.3";
        
        var fmt = new PhoneFmt({locale: "ko-KR", style: "점"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
    },
    testFormatKRStyle1PartialLocal5: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            subscriberNumber: "45634"
        });
        var expected = "456.34";
        
        var fmt = new PhoneFmt({locale: "ko-KR", style: "점"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
    },
    testFormatKRStyle1PartialLocal6: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            subscriberNumber: "456345"
        });
        var expected = "456.345";
        
        var fmt = new PhoneFmt({locale: "ko-KR", style: "점"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
    },
    testFormatKRStyle1PartialLocal7: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            subscriberNumber: "4563453"
        });
        var expected = "456.3453";
        
        var fmt = new PhoneFmt({locale: "ko-KR", style: "점"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
    },
    testFormatKRStyle1PartialLocal8: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            subscriberNumber: "45634534"
        });
        var expected = "4563.4534";
        
        var fmt = new PhoneFmt({locale: "ko-KR", style: "점"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
    },
    testFormatKRStyle1PartialLocal9: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            subscriberNumber: "456345345"    // too long
        });
        var expected = "4563.45345"; // use last resort rule
        
        var fmt = new PhoneFmt({locale: "ko-KR", style: "점"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatKREmergency1: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("111", {locale: "ko-KR"});
        var expected = "111";
        
        var fmt = new PhoneFmt({locale: "ko-KR", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatKREmergency2: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("1355", {locale: "ko-KR"});
        var expected = "1355";
        
        var fmt = new PhoneFmt({locale: "ko-KR", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatKRWithTrunkAccessNumber: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("00", {locale: "ko-KR"});
        var expected = "00";
        
        var fmt = new PhoneFmt({locale: "ko-KR", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatKRStyle0WithMobilePrefix: function(test) {
        test.expect(1);
        var formatted;
    
        var parsed = new PhoneNumber("010", {locale: "ko-KR"});
        
        var expected = "010";
        
        var fmt = new PhoneFmt({locale: "ko-KR", style: "default"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatKRStyle0WithMobilePrefix2: function(test) {
        test.expect(1);
        var formatted;
    
        var parsed = new PhoneNumber("0109", {locale: "ko-KR"});
        
        var expected = "010-9";
        
        var fmt = new PhoneFmt({locale: "ko-KR", style: "default"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
    },
    
    
    testFormatKRStyle1WithAreaNumber: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("031", {locale: "ko-KR"});
        var expected = "031";
        
        var fmt = new PhoneFmt({locale: "ko-KR", style: "점"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatKRStyle1WithAreaNumber2: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("0317", {locale: "ko-KR"});
        var expected = "031.7";
        
        var fmt = new PhoneFmt({locale: "ko-KR", style: "점"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatKRStyle1WithServiceNumber: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("070", {locale: "ko-KR"});
        var expected = "070";
        
        var fmt = new PhoneFmt({locale: "ko-KR", style: "default"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatKRStyle1WithServiceNumber2: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("0701", {locale: "ko-KR"});
        var expected = "070-1";
        
        var fmt = new PhoneFmt({locale: "ko-KR", style: "default"});
        formatted = fmt.format(parsed, {partial: false});
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatKRStyle1WithServiceNumber3: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("03012345677", {locale: "ko-KR"});
        var expected = "030-1234-5677";
        
        var fmt = new PhoneFmt({locale: "ko-KR", style: "default"});
        formatted = fmt.format(parsed, {partial: false});
        
        test.equal(formatted, expected);
        test.done();
    },
    
    /*Add this phonenumber formatting template temporarily */
    testFormatKRStyle1WithlongSubscribeNumber0: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("031123456778", {locale: "ko-KR"});
        var expected = "031-1234-56778";
        
        var fmt = new PhoneFmt({locale: "ko-KR", style: "default"});
        formatted = fmt.format(parsed, {partial: false});
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatKRStyle1WithlongSubscribeNumber1: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("0311234567781", {locale: "ko-KR"});
        var expected = "031-1234-567781";
        
        var fmt = new PhoneFmt({locale: "ko-KR", style: "default"});
        formatted = fmt.format(parsed, {partial: false});
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatKRStyle1WithlongSubscribeNumber2: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("03112345677812", {locale: "ko-KR"});
        var expected = "031-1234-5677812";
        
        var fmt = new PhoneFmt({locale: "ko-KR", style: "default"});
        formatted = fmt.format(parsed, {partial: false});
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatKRStyle1WithlongSubscribeNumber3: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("031123456778123", {locale: "ko-KR"});
        var expected = "031-1234-56778123";
        
        var fmt = new PhoneFmt({locale: "ko-KR", style: "default"});
        formatted = fmt.format(parsed, {partial: false});
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatKRStyle0WithExtensionCharacter: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("5551212,1234", {locale: "ko-KR"});
        var expected = "555-1212,1234";
        
        var fmt = new PhoneFmt({locale: "ko-KR", style: "default"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatKRStyle1WithExtensionCharacter: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("5551212,1234", {locale: "ko-KR"});
        var expected = "555.1212,1234";
        
        var fmt = new PhoneFmt({locale: "ko-KR", style: "점"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatKRStyle2WithExtensionCharacter: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("5551212,1234", {locale: "ko-KR"});
        var expected = "555 1212,1234";
        
        var fmt = new PhoneFmt({locale: "ko-KR", style: "공간"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatKRStyle1WithExtensionCharacter2: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("35850950777;12345", {locale: "ko-KR"});
        var expected = "3585-0950777;12345";
        
        var fmt = new PhoneFmt({locale: "ko-KR", style: "default"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
    }
};