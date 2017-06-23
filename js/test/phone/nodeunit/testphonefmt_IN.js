/*
 * phonefmt_IN.js - Test the phonefmt_IN Style.
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
    var PhoneNumber = require("../.././../lib/PhoneNumber.js");
}
if (typeof(PhoneFmt) === "undefined") {
    var PhoneFmt = require("../.././../lib/PhoneFmt.js");
}
if (typeof(ilib) === "undefined") {
    var ilib = require("../../..");
}

module.exports.phonefmt_IN = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testFormatINStyle0: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "11",
                subscriberNumber: "12345678"
        });
        var expected = "011-12345678";
        
        var fmt = new PhoneFmt({locale: "en-IN", style: "default"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatINStyle1: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "11",
                subscriberNumber: "12345678"
        });
        var expected = "011 1234 5678";
        
        var fmt = new PhoneFmt({locale: "en-IN", style: "spaces"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatINStyle2: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "11",
                subscriberNumber: "12345678"
        });
        var expected = "011-1234-5678";
        
        var fmt = new PhoneFmt({locale: "en-IN", style: "hyphens"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    testFormatINInternational: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
                iddPrefix: "+",
                countryCode: "91",
                areaCode: "11",
                subscriberNumber: "12345678"
        });
        var expected = "+91 11 12345678";
        
        var fmt = new PhoneFmt({locale: "en-IN", style: "default"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatINInternationalLongArea: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
                iddPrefix: "+",
                countryCode: "91",
                areaCode: "7753",
                subscriberNumber: "123456"
        });
        var expected = "+91 7753 123456";
        
        var fmt = new PhoneFmt({locale: "en-IN", style: "default"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatINInternationalAccessCode: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
                iddPrefix: "00",
                countryCode: "91",
                areaCode: "11",
                subscriberNumber: "12345678"
        });
        var expected = "00 91 11 12345678";
        
        var fmt = new PhoneFmt({locale: "en-IN", style: "default"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    testFormatINPlusIDDtoUnknownCountry: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "872",    // pitcairn island
            subscriberNumber: "987654321"
        });
        var expected = "+872 987654321";    // use last resort rule for subscriber number
        
        var fmt = new PhoneFmt({locale: "en-IN", style: "spaces"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    testFormatINInternationalMobile: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "91",
            mobilePrefix: "912",
            subscriberNumber: "7654321"
        });
        var expected = "+91 91276 54321";
        
        var fmt = new PhoneFmt({locale: "en-us", style: "spaces"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    testFormatINMobile: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            mobilePrefix: "912",
            subscriberNumber: "7654321"
        });
        var expected = "91276-54321";
        
        var fmt = new PhoneFmt({locale: "en-IN", style: "spaces"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    testFormatINStyle0Partial1: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "0"
        });
        var expected = "0";
        
        var fmt = new PhoneFmt({locale: "en-IN", style: "default"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatINStyle0Partial2: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "0",
            subscriberNumber: "1"
        });
        var expected = "01";
        
        var fmt = new PhoneFmt({locale: "en-IN", style: "default"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatINStyle0Partial3: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "11"
        });
        var expected = "011-";
        
        var fmt = new PhoneFmt({locale: "en-IN", style: "default"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatINStyle0Partial4: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "11",
            subscriberNumber: "1"
        });
        var expected = "011-1";
        
        var fmt = new PhoneFmt({locale: "en-IN", style: "default"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatINStyle0Partial5: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "11",
            subscriberNumber: "12"
        });
        var expected = "011-12";
        
        var fmt = new PhoneFmt({locale: "en-IN", style: "default"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatINStyle0Partial6: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "11",
            subscriberNumber: "123"
        });
        var expected = "011-123";
        
        var fmt = new PhoneFmt({locale: "en-IN", style: "default"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatINStyle0Partial7: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "11",
            subscriberNumber: "1234"
        });
        var expected = "011-1234";
        
        var fmt = new PhoneFmt({locale: "en-IN", style: "default"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatINStyle0Partial8: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "11",
            subscriberNumber: "12345"
        });
        var expected = "011-12345";
        
        var fmt = new PhoneFmt({locale: "en-IN", style: "default"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatINStyle0Partial9: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "11",
            subscriberNumber: "123456"
        });
        var expected = "011-123456";
        
        var fmt = new PhoneFmt({locale: "en-IN", style: "default"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatINStyle0Partial10: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "11",
            subscriberNumber: "1234567"
        });
        var expected = "011-1234567";
        
        var fmt = new PhoneFmt({locale: "en-IN", style: "default"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatINStyle0Partial11: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "11",
            subscriberNumber: "12345678"
        });
        var expected = "011-12345678";
        
        var fmt = new PhoneFmt({locale: "en-IN", style: "default"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatINStyle0Partial12: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "11",
            subscriberNumber: "123456789" // too long
        });
        var expected = "011123456789"; // use last resort rule
        
        var fmt = new PhoneFmt({locale: "en-IN", style: "default"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    testFormatINStyle0PartialLocal1: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            subscriberNumber: "8"
        });
        var expected = "8";
        
        var fmt = new PhoneFmt({locale: "en-IN", style: "default"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatINStyle0PartialLocal2: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "87"
        });
        var expected = "87";
        
        var fmt = new PhoneFmt({locale: "en-IN", style: "default"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatINStyle0PartialLocal3: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "876"
        });
        var expected = "876";
        
        var fmt = new PhoneFmt({locale: "en-IN", style: "default"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatINStyle0PartialLocal4: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "8765"
        });
        var expected = "8765";
        
        var fmt = new PhoneFmt({locale: "en-IN", style: "default"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatINStyle0PartialLocal5: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "87654"
        });
        var expected = "87654";
        
        var fmt = new PhoneFmt({locale: "en-IN", style: "default"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatINStyle0PartialLocal6: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "876543"
        });
        var expected = "876543";
        
        var fmt = new PhoneFmt({locale: "en-IN", style: "default"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatINStyle0PartialLocal7: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "8765432"
        });
        var expected = "8765432";
        
        var fmt = new PhoneFmt({locale: "en-IN", style: "default"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatINStyle0PartialLocal8: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "87654321"
        });
        var expected = "87654321";
        
        var fmt = new PhoneFmt({locale: "en-IN", style: "default"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatINStyle0PartialLocal9: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            subscriberNumber: "876543210"  // too long
        });
        var expected = "876543210";  // shouldn't matter, but theoretically use the last resort rule
        
        var fmt = new PhoneFmt({locale: "en-IN", style: "default"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatINMobile: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            mobilePrefix: "991",
            subscriberNumber: "2345678"
        });
        var expected = "99123-45678";
        
        var fmt = new PhoneFmt({locale: "en-IN", style: "default"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    }
    
};