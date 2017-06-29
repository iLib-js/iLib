/*
 * phonefmt_CN.js - Test the phonefmt_CN Style.
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
 function testFormatCNStyle0() {
    var formatted;
    var parsed = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "10",
            subscriberNumber: "12345678"
    });
    var expected = "010 12345678";
    
    var fmt = new PhoneFmt({locale: "zh-CN"});
    formatted = fmt.format(parsed);
    
    assertEquals(expected, formatted);
};

if (typeof(ilib) === "undefined") {
    var ilib = require("../../..");
}

module.exports.phonefmt_CN = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testFormatCNInternational: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                iddPrefix: "+",
                countryCode: "33",
                areaCode: "1",
                subscriberNumber: "12345678"
        });
        var expected = "+33 1 12 34 56 78";
        
        var fmt = new PhoneFmt({locale: "zh-CN"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatCNInternationalLongArea: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                iddPrefix: "+",
                countryCode: "44",
                areaCode: "1997",
                subscriberNumber: "123456"
        });
        var expected = "+44 1997 123456";
        
        var fmt = new PhoneFmt({locale: "zh-CN"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);    
        test.done();
    },
    
    testFormatCNInternationalAccessCode: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                iddPrefix: "00",
                countryCode: "33",
                areaCode: "1",
                subscriberNumber: "12345678"
        });
        var expected = "00 33 1 12 34 56 78";
        
        var fmt = new PhoneFmt({locale: "zh-CN"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatCNPlusIDDtoUnknownCountry: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "123",
            subscriberNumber: "987654321"
        });
        var expected = "+123 987654321";    // use last resort rule for subscriber number
        
        var fmt = new PhoneFmt({locale: "zh-CN", style: "破折号"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatMobile: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            mobilePrefix: "150",
            subscriberNumber: "05179573"
        });
        var expected = "150 05179573";
        
        var fmt = new PhoneFmt({locale: "zh-CN"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatMobileInternational: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "86",
            mobilePrefix: "150",
            subscriberNumber: "05179573"
        });
        var expected = "+86 150 05179573";
        
        var fmt = new PhoneFmt({locale: "zh-CN"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatCNStyle0Partial1: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "0"
        });
        var expected = "0";
        
        var fmt = new PhoneFmt({locale: "zh-CN"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatCNStyle0Partial2: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "0",
            subscriberNumber: "1"
        });
        var expected = "01";
        
        var fmt = new PhoneFmt({locale: "zh-CN"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatCNStyle0Partial3: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "10"
        });
        var expected = "010 ";
        
        var fmt = new PhoneFmt({locale: "zh-CN"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);    
        test.done();
    },
    
    testFormatCNStyle0Partial4: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "10",
            subscriberNumber: "1"
        });
        var expected = "010 1";
        
        var fmt = new PhoneFmt({locale: "zh-CN"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);    
        test.done();
    },
    
    testFormatCNStyle0Partial5: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "10",
            subscriberNumber: "12"
        });
        var expected = "010 12";
        
        var fmt = new PhoneFmt({locale: "zh-CN"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);    
        test.done();
    },
    
    testFormatCNStyle0Partial6: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "10",
            subscriberNumber: "123"
        });
        var expected = "010 123";
        
        var fmt = new PhoneFmt({locale: "zh-CN"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);    
        test.done();
    },
    
    testFormatCNStyle0Partial7: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "10",
            subscriberNumber: "1234"
        });
        var expected = "010 1234";
        
        var fmt = new PhoneFmt({locale: "zh-CN"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatCNStyle0Partial8: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "10",
            subscriberNumber: "12345"
        });
        var expected = "010 12345";
        
        var fmt = new PhoneFmt({locale: "zh-CN"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);    
        test.done();
    },
    
    testFormatCNStyle0Partial9: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "10",
            subscriberNumber: "123456"
        });
        var expected = "010 123456";
        
        var fmt = new PhoneFmt({locale: "zh-CN"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);    
        test.done();
    },
    
    testFormatCNStyle0Partial10: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "10",
            subscriberNumber: "1234567"
        });
        var expected = "010 1234567";
        
        var fmt = new PhoneFmt({locale: "zh-CN"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);    
        test.done();
    },
    
    testFormatCNStyle0Partial11: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "10",
            subscriberNumber: "12345678"
        });
        var expected = "010 12345678";
        
        var fmt = new PhoneFmt({locale: "zh-CN"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);    
        test.done();
    },
    
    testFormatCNStyle0Partial12: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "10",
            subscriberNumber: "123456789" // too long
        });
        var expected = "010123456789"; // use last resort rule
        
        var fmt = new PhoneFmt({locale: "zh-CN"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);    
        test.done();
    },
    
    testFormatCNStyle0PartialLocal1: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            subscriberNumber: "8"
        });
        var expected = "8";
        
        var fmt = new PhoneFmt({locale: "zh-CN"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatCNStyle0PartialLocal2: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "87"
        });
        var expected = "87";
        
        var fmt = new PhoneFmt({locale: "zh-CN"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);    
        test.done();
    },
    
    testFormatCNStyle0PartialLocal3: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "876"
        });
        var expected = "876";
        
        var fmt = new PhoneFmt({locale: "zh-CN"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);    
        test.done();
    },
    
    testFormatCNStyle0PartialLocal4: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "8765"
        });
        var expected = "8765";
        
        var fmt = new PhoneFmt({locale: "zh-CN"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);    
        test.done();
    },
    
    testFormatCNStyle0PartialLocal5: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "87654"
        });
        var expected = "87654";
        
        var fmt = new PhoneFmt({locale: "zh-CN"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);    
        test.done();
    },
    
    testFormatCNStyle0PartialLocal6: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "876543"
        });
        var expected = "876543";
        
        var fmt = new PhoneFmt({locale: "zh-CN"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);    
        test.done();
    },
    
    testFormatCNStyle0PartialLocal7: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "8765432"
        });
        var expected = "8765432";
        
        var fmt = new PhoneFmt({locale: "zh-CN"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);    
        test.done();
    },
    
    testFormatCNStyle0PartialLocal8: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "87654321"
        });
        var expected = "87654321";
        
        var fmt = new PhoneFmt({locale: "zh-CN"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);    
        test.done();
    },
    
    testFormatCNStyle0PartialLocal9: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            subscriberNumber: "876543210"  // too long
        });
        var expected = "876543210";  // shouldn't matter, but theoretically use the last resort rule
        
        var fmt = new PhoneFmt({locale: "zh-CN"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatWithParamsStyle0: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "10",
                subscriberNumber: "12345678"
        });
        var expected = "010 12345678";
        
        var fmt = new PhoneFmt({locale: "zh-CN"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatWithParamsInternational: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                iddPrefix: "+",
                countryCode: "33",
                areaCode: "1",
                subscriberNumber: "12345678"
        });
        var expected = "+33 1 12 34 56 78";
        
        var fmt = new PhoneFmt({locale: "zh-CN"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatWithParamsInternationalLongArea: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                iddPrefix: "+",
                countryCode: "44",
                areaCode: "1997",
                subscriberNumber: "123456"
        });
        var expected = "+44 1997 123456";
        
        var fmt = new PhoneFmt({locale: "zh-CN"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatWithParamsInternationalAccessCode: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                iddPrefix: "00",
                countryCode: "33",
                areaCode: "1",
                subscriberNumber: "12345678"
        });
        var expected = "00 33 1 12 34 56 78";
        
        var fmt = new PhoneFmt({locale: "zh-CN"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatWithParamsPlusIDDtoUnknownCountry: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "123",
            subscriberNumber: "987654321"
        });
        var expected = "+123 987654321";
        
        var fmt = new PhoneFmt({locale: "zh-CN", style: "破折号"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatMobile: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            mobilePrefix: "150",
            subscriberNumber: "05179573"
        });
        var expected = "150 05179573";
        
        var fmt = new PhoneFmt({locale: "zh-CN"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatMobileInternational: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "86",
            mobilePrefix: "150",
            subscriberNumber: "05179573"
        });
        var expected = "+86 150 05179573";
        
        var fmt = new PhoneFmt({locale: "zh-CN"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatWithParamsStyle0Partial1: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "0"
        });
        var expected = "0";
        
        var fmt = new PhoneFmt({locale: "zh-CN"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);    
        test.done();
    },
    
    testFormatWithParamsStyle0Partial2: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "0",
            subscriberNumber: "1"
        });
        var expected = "01";
        
        var fmt = new PhoneFmt({locale: "zh-CN"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatWithParamsStyle0Partial3: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "10"
        });
        var expected = "010 ";
        
        var fmt = new PhoneFmt({locale: "zh-CN"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatWithParamsStyle0Partial4: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "10",
            subscriberNumber: "1"
        });
        var expected = "010 1";
        
        var fmt = new PhoneFmt({locale: "zh-CN"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatWithParamsStyle0Partial5: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "10",
            subscriberNumber: "12"
        });
        var expected = "010 12";
        
        var fmt = new PhoneFmt({locale: "zh-CN"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatWithParamsStyle0Partial6: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "10",
            subscriberNumber: "123"
        });
        var expected = "010 123";
        
        var fmt = new PhoneFmt({locale: "zh-CN"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatWithParamsStyle0Partial7: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "10",
            subscriberNumber: "1234"
        });
        var expected = "010 1234";
        
        var fmt = new PhoneFmt({locale: "zh-CN"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);    
        test.done();
    },
    
    testFormatWithParamsStyle0Partial8: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "10",
            subscriberNumber: "12345"
        });
        var expected = "010 12345";
        
        var fmt = new PhoneFmt({locale: "zh-CN"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatWithParamsStyle0Partial9: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "10",
            subscriberNumber: "123456"
        });
        var expected = "010 123456";
        
        var fmt = new PhoneFmt({locale: "zh-CN"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatWithParamsStyle0Partial10: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "10",
            subscriberNumber: "1234567"
        });
        var expected = "010 1234567";
        
        var fmt = new PhoneFmt({locale: "zh-CN"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatWithParamsStyle0Partial11: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "10",
            subscriberNumber: "12345678"
        });
        var expected = "010 12345678";
        
        var fmt = new PhoneFmt({locale: "zh-CN"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatWithParamsStyle0Partial12: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "10",
            subscriberNumber: "123456789" // too long
        });
        var expected = "010123456789"; // use last resort rule
        
        var fmt = new PhoneFmt({locale: "zh-CN"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatWithParamsStyle0PartialLocal1: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            subscriberNumber: "8"
        });
        var expected = "8";
        
        var fmt = new PhoneFmt({locale: "zh-CN"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatWithParamsStyle0PartialLocal2: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "87"
        });
        var expected = "87";
        
        var fmt = new PhoneFmt({locale: "zh-CN"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatWithParamsStyle0PartialLocal3: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "876"
        });
        var expected = "876";
        
        var fmt = new PhoneFmt({locale: "zh-CN"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatWithParamsStyle0PartialLocal4: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "8765"
        });
        var expected = "8765";
        
        var fmt = new PhoneFmt({locale: "zh-CN"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatWithParamsStyle0PartialLocal5: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "87654"
        });
        var expected = "87654";
        
        var fmt = new PhoneFmt({locale: "zh-CN"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatWithParamsStyle0PartialLocal6: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "876543"
        });
        var expected = "876543";
        
        var fmt = new PhoneFmt({locale: "zh-CN"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatWithParamsStyle0PartialLocal7: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "8765432"
        });
        var expected = "8765432";
        
        var fmt = new PhoneFmt({locale: "zh-CN"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatWithParamsStyle0PartialLocal8: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "87654321"
        });
        var expected = "87654321";
        
        var fmt = new PhoneFmt({locale: "zh-CN"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
    },
    
    testFormatWithParamsStyle0PartialLocal9: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            subscriberNumber: "876543210"  // too long
        });
        var expected = "876543210";  // shouldn't matter, but theoretically use the last resort rule
        
        var fmt = new PhoneFmt({locale: "zh-CN"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);    
        test.done();
    }
};