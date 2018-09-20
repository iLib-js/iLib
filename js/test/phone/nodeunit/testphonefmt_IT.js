/*
 * phonefmt_IT.js - Test the phonefmt_IT Style.
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

module.exports.phonefmt_IT = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testFormatITStyle0: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "89",
                subscriberNumber: "1234567"
        });
        var expected = "089 1234567";
        
        var fmt = new PhoneFmt({locale: "it-IT", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatITStyle1: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "89",
                subscriberNumber: "1234567"
        });
        var expected = "089-1234567";
        
        var fmt = new PhoneFmt({locale: "it-IT", style: "trattini"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatITStyle2: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "89",
                subscriberNumber: "1234567"
        });
        var expected = "089/1234567";
        
        var fmt = new PhoneFmt({locale: "it-IT", style: "slash"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    testFormatITInternational: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                iddPrefix: "+",
                countryCode: "39",
                trunkAccess: "0",
                areaCode: "6",
                subscriberNumber: "12345678"
        });
        var expected = "+39 06 12345678";
        
        var fmt = new PhoneFmt({locale: "it-IT", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    testFormatITInternationalAccessCode: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                iddPrefix: "00",
                countryCode: "39",
                trunkAccess: "0",
                areaCode: "6",
                subscriberNumber: "12345678"
        });
        var expected = "00 39 06 12345678";
        
        var fmt = new PhoneFmt({locale: "it-IT", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    testFormatITMobile: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                mobilePrefix: "399",
                subscriberNumber: "1234567"
        });
        var expected = "399 1234567";
        
        var fmt = new PhoneFmt({locale: "it-IT", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatITService: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                serviceCode: "799",
                subscriberNumber: "1234567"
        });
        var expected = "799 1234567";
        
        var fmt = new PhoneFmt({locale: "it-IT", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatITNetService: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                serviceCode: "4",
                subscriberNumber: "34565434"
        });
        var expected = "4 34565434";
        
        var fmt = new PhoneFmt({locale: "it-IT", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatITSpecialRate: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                serviceCode: "899",
                subscriberNumber: "1234567"
        });
        var expected = "899 1234567";
        
        var fmt = new PhoneFmt({locale: "it-IT", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    testFormatITStyle0Partial1: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0"
        });
        var expected = "0";
        
        var fmt = new PhoneFmt({locale: "it-IT", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatITStyle0Partial2: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                subscriberNumber: "9"
        });
        var expected = "09";
        
        var fmt = new PhoneFmt({locale: "it-IT", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatITStyle0Partial3: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                subscriberNumber: "96"
        });
        var expected = "096";
        
        var fmt = new PhoneFmt({locale: "it-IT", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatITStyle0Partial4: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "962"
        });
        var expected = "0962 ";
        
        var fmt = new PhoneFmt({locale: "it-IT", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatITStyle0Partial5: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "962",
                subscriberNumber: "1"
        });
        var expected = "0962 1";
        
        var fmt = new PhoneFmt({locale: "it-IT", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatITStyle0Partial6: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "962",
                subscriberNumber: "12"
        });
        var expected = "0962 12";
        
        var fmt = new PhoneFmt({locale: "it-IT", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatITStyle0Partial7: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "962",
                subscriberNumber: "123"
        });
        var expected = "0962 123";
        
        var fmt = new PhoneFmt({locale: "it-IT", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatITStyle0Partial8: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "962",
                subscriberNumber: "1234"
        });
        var expected = "0962 1234";
        
        var fmt = new PhoneFmt({locale: "it-IT", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatITStyle0Partial9: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "962",
                subscriberNumber: "12345"
        });
        var expected = "0962 12345";
        
        var fmt = new PhoneFmt({locale: "it-IT", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatITStyle0Partial10: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "962",
                subscriberNumber: "123456"
        });
        var expected = "0962 123456";
        
        var fmt = new PhoneFmt({locale: "it-IT", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatITStyle0Partial11: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "962",
                subscriberNumber: "1234567"
        });
        var expected = "0962 1234567";
        
        var fmt = new PhoneFmt({locale: "it-IT", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatITStyle0Partial12: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "962",
                subscriberNumber: "12345678"
        });
        var expected = "0962 12345678";
        
        var fmt = new PhoneFmt({locale: "it-IT", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatITStyle0Partial12: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "962",
                subscriberNumber: "123456789" // too long
        });
        var expected = "0962123456789"; // use last resort rule
        
        var fmt = new PhoneFmt({locale: "it-IT", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    testFormatITStyle1Partial1: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0"
        });
        var expected = "0";
        
        var fmt = new PhoneFmt({locale: "it-IT", style: "trattini"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatITStyle1Partial2: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                subscriberNumber: "9"
        });
        var expected = "09";
        
        var fmt = new PhoneFmt({locale: "it-IT", style: "trattini"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatITStyle1Partial3: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                subscriberNumber: "96"
        });
        var expected = "096";
        
        var fmt = new PhoneFmt({locale: "it-IT", style: "trattini"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatITStyle1Partial4: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "962"
        });
        var expected = "0962-";
        
        var fmt = new PhoneFmt({locale: "it-IT", style: "trattini"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatITStyle1Partial5: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "962",
                subscriberNumber: "1"
        });
        var expected = "0962-1";
        
        var fmt = new PhoneFmt({locale: "it-IT", style: "trattini"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatITStyle1Partial6: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "962",
                subscriberNumber: "12"
        });
        var expected = "0962-12";
        
        var fmt = new PhoneFmt({locale: "it-IT", style: "trattini"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatITStyle1Partial7: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "962",
                subscriberNumber: "123"
        });
        var expected = "0962-123";
        
        var fmt = new PhoneFmt({locale: "it-IT", style: "trattini"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatITStyle1Partial8: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "962",
                subscriberNumber: "1234"
        });
        var expected = "0962-1234";
        
        var fmt = new PhoneFmt({locale: "it-IT", style: "trattini"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatITStyle1Partial9: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "962",
                subscriberNumber: "12345"
        });
        var expected = "0962-12345";
        
        var fmt = new PhoneFmt({locale: "it-IT", style: "trattini"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatITStyle1Partial10: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "962",
                subscriberNumber: "123456"
        });
        var expected = "0962-123456";
        
        var fmt = new PhoneFmt({locale: "it-IT", style: "trattini"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatITStyle1Partial11: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "962",
                subscriberNumber: "1234567"
        });
        var expected = "0962-1234567";
        
        var fmt = new PhoneFmt({locale: "it-IT", style: "trattini"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatITStyle1Partial12: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "962",
                subscriberNumber: "12345678"
        });
        var expected = "0962-12345678";
        
        var fmt = new PhoneFmt({locale: "it-IT", style: "trattini"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatITStyle1Partial13: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "962",
                subscriberNumber: "123456789" // too long
        });
        var expected = "0962123456789"; // use last resort rule
        
        var fmt = new PhoneFmt({locale: "it-IT", style: "trattini"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    }
    
};
