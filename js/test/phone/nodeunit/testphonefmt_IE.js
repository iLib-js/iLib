/*
 * phonefmt_IE.js - Test the phonefmt_IE Style.
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
    var ilib = require("../../../lib/ilib.js");
}

module.exports.phonefmt_IE = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testFormatIEStyle0: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "1",
                subscriberNumber: "1234567"
        });
        var expected = "(01) 123 4567";
        
        var fmt = new PhoneFmt({locale: "en-IE", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    testFormatIEStyle1: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "1",
                subscriberNumber: "1234567"
        });
        var expected = "01 123 4567";
        
        var fmt = new PhoneFmt({locale: "en-IE", style: "spaces"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    testFormatIEInternational: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                iddPrefix: "+",
                countryCode: "33",
                areaCode: "1",
                subscriberNumber: "12345678"
        });
        var expected = "+33 1 12 34 56 78";
        
        var fmt = new PhoneFmt({locale: "en-IE", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    testFormatIEInternationalAccessCode: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                iddPrefix: "00",
                countryCode: "33",
                areaCode: "1",
                subscriberNumber: "12345678"
        });
        var expected = "00 33 1 12 34 56 78";
        
        var fmt = new PhoneFmt({locale: "en-IE", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    testFormatIELongAreaCode: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "404",
                subscriberNumber: "12345"
        });
        var expected = "(0404) 12345";
        
        var fmt = new PhoneFmt({locale: "en-IE", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    testFormatIEMobile: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                mobilePrefix: "85",
                subscriberNumber: "1234567"
        });
        var expected = "085 123 4567";
        
        var fmt = new PhoneFmt({locale: "en-IE", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    testFormatInternationalMobile: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "353",
            mobilePrefix: "86",
            subscriberNumber: "8223689"
        });
        var expected = "+353 86 822 3689";
    
        var fmt = new PhoneFmt({locale: "en-IE", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
    },
    
    testFormatIEService: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                serviceCode: "1569",
                subscriberNumber: "1234567"
        });
        var expected = "1569 123 4567";
        
        var fmt = new PhoneFmt({locale: "en-IE", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    testFormatIEIDD: function(test) {
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
        
        var fmt = new PhoneFmt({locale: "en-IE", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    testFormatIEPersonal: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                serviceCode: "700",
                subscriberNumber: "1234567"
        });
        var expected = "0700 123 4567";
        
        var fmt = new PhoneFmt({locale: "en-IE", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    testFormatIEStyle0Partial0: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0"
        });
        var expected = "0";
        
        var fmt = new PhoneFmt({locale: "en-IE", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatIEStyle0Partial1: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                subscriberNumber: "4"
        });
        var expected = "04";
        
        var fmt = new PhoneFmt({locale: "en-IE", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatIEStyle0Partial2: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                subscriberNumber: "40"
        });
        var expected = "040";
        
        var fmt = new PhoneFmt({locale: "en-IE", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatIEStyle0Partial3: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "404"
        });
        var expected = "(0404) ";
        
        var fmt = new PhoneFmt({locale: "en-IE", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatIEStyle0Partial4: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "404",
                subscriberNumber: "1"
        });
        var expected = "(0404) 1";
        
        var fmt = new PhoneFmt({locale: "en-IE", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatIEStyle0Partial5: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "404",
                subscriberNumber: "12"
        });
        var expected = "(0404) 12";
        
        var fmt = new PhoneFmt({locale: "en-IE", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatIEStyle0Partial6: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "404",
                subscriberNumber: "123"
        });
        var expected = "(0404) 123";
        
        var fmt = new PhoneFmt({locale: "en-IE", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatIEStyle0Partial7: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "404",
                subscriberNumber: "1234"
        });
        var expected = "(0404) 1234";
        
        var fmt = new PhoneFmt({locale: "en-IE", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatIEStyle0Partial8: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "404",
                subscriberNumber: "12345"
        });
        var expected = "(0404) 12345";
        
        var fmt = new PhoneFmt({locale: "en-IE", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatIEStyle0Partial9: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "404",
                subscriberNumber: "123456"
        });
        var expected = "(0404) 123 456";
        
        var fmt = new PhoneFmt({locale: "en-IE", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatIEStyle0Partial10: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "404",
                subscriberNumber: "1234567"
        });
        var expected = "(0404) 123 4567";
        
        var fmt = new PhoneFmt({locale: "en-IE", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatIEStyle0Partial11: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "404",
                subscriberNumber: "12345678"
        });
        var expected = "(0404) 1234 5678";
        
        var fmt = new PhoneFmt({locale: "en-IE", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatIEStyle0Partial12: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "404",
                subscriberNumber: "123456789" // too long
        });
        var expected = "0404123456789";    // last resort rule
        
        var fmt = new PhoneFmt({locale: "en-IE", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    
    testFormatIEStyle1Partial0: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0"
        });
        var expected = "0";
        
        var fmt = new PhoneFmt({locale: "en-IE", style: "spaces"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatIEStyle1Partial1: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "4"
        });
        var expected = "04 ";
        
        var fmt = new PhoneFmt({locale: "en-IE", style: "spaces"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatIEStyle1Partial2: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "40"
        });
        var expected = "040 ";
        
        var fmt = new PhoneFmt({locale: "en-IE", style: "spaces"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatIEStyle1Partial3: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "404"
        });
        var expected = "0404 ";
        
        var fmt = new PhoneFmt({locale: "en-IE", style: "spaces"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatIEStyle1Partial4: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "404",
                subscriberNumber: "1"
        });
        var expected = "0404 1";
        
        var fmt = new PhoneFmt({locale: "en-IE", style: "spaces"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatIEStyle1Partial5: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "404",
                subscriberNumber: "12"
        });
        var expected = "0404 12";
        
        var fmt = new PhoneFmt({locale: "en-IE", style: "spaces"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatIEStyle1Partial6: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "404",
                subscriberNumber: "123"
        });
        var expected = "0404 123";
        
        var fmt = new PhoneFmt({locale: "en-IE", style: "spaces"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatIEStyle1Partial7: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "404",
                subscriberNumber: "1234"
        });
        var expected = "0404 1234";
        
        var fmt = new PhoneFmt({locale: "en-IE", style: "spaces"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatIEStyle1Partial8: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "404",
                subscriberNumber: "12345"
        });
        var expected = "0404 12345";
        
        var fmt = new PhoneFmt({locale: "en-IE", style: "spaces"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatIEStyle1Partial9: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "404",
                subscriberNumber: "123456"
        });
        var expected = "0404 123 456";
        
        var fmt = new PhoneFmt({locale: "en-IE", style: "spaces"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatIEStyle1Partial10: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "404",
                subscriberNumber: "1234567"
        });
        var expected = "0404 123 4567";
        
        var fmt = new PhoneFmt({locale: "en-IE", style: "spaces"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatIEStyle1Partial11: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "404",
                subscriberNumber: "12345678"
        });
        var expected = "0404 1234 5678";
        
        var fmt = new PhoneFmt({locale: "en-IE", style: "spaces"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatIEStyle1Partial11: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "404",
                subscriberNumber: "123456789"
        });
        var expected = "0404123456789";    // last resort rule because subscriberNumber is too long
        
        var fmt = new PhoneFmt({locale: "en-IE", style: "spaces"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    testFormatIEStyle0PartialLocal1: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "4"
        });
        var expected = "4";
        
        var fmt = new PhoneFmt({locale: "en-IE", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatIEStyle0PartialLocal2: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "45"
        });
        var expected = "45";
        
        var fmt = new PhoneFmt({locale: "en-IE", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatIEStyle0PartialLocal3: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "456"
        });
        var expected = "456";
        
        var fmt = new PhoneFmt({locale: "en-IE", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatIEStyle0PartialLocal4: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "4563"
        });
        var expected = "4563";
        
        var fmt = new PhoneFmt({locale: "en-IE", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatIEStyle0PartialLocal5: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "45634"
        });
        var expected = "45634";
        
        var fmt = new PhoneFmt({locale: "en-IE", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatIEStyle0PartialLocal6: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "456345"
        });
        var expected = "456 345";
        
        var fmt = new PhoneFmt({locale: "en-IE", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatIEStyle0PartialLocal7: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "4563453"
        });
        var expected = "456 3453";
        
        var fmt = new PhoneFmt({locale: "en-IE", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatIEStyle0PartialLocal8: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "45634535"
        });
        var expected = "4563 4535";
        
        var fmt = new PhoneFmt({locale: "en-IE", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    testFormatIEStyle1PartialLocal1: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "4"
        });
        var expected = "4";
        
        var fmt = new PhoneFmt({locale: "en-IE", style: "spaces"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatIEStyle1PartialLocal2: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "45"
        });
        var expected = "45";
        
        var fmt = new PhoneFmt({locale: "en-IE", style: "spaces"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatIEStyle1PartialLocal3: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "456"
        });
        var expected = "456";
        
        var fmt = new PhoneFmt({locale: "en-IE", style: "spaces"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatIEStyle1PartialLocal4: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "4563"
        });
        var expected = "4563";
        
        var fmt = new PhoneFmt({locale: "en-IE", style: "spaces"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatIEStyle1PartialLocal5: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "45634"
        });
        var expected = "45634";
        
        var fmt = new PhoneFmt({locale: "en-IE", style: "spaces"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatIEStyle1PartialLocal6: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "456345"
        });
        var expected = "456 345";
        
        var fmt = new PhoneFmt({locale: "en-IE", style: "spaces"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatIEStyle1PartialLocal7: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "4563453"
        });
        var expected = "456 3453";
        
        var fmt = new PhoneFmt({locale: "en-IE", style: "spaces"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatIEStyle1PartialLocal8: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "45634534"
        });
        var expected = "4563 4534";
        
        var fmt = new PhoneFmt({locale: "en-IE", style: "spaces"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatIEStyle1PartialLocal9: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "456345345"
        });
        var expected = "456345345";
        
        var fmt = new PhoneFmt({locale: "en-IE", style: "spaces"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    // for CFISH-5426
    testFormatIEEmergency: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber("999", {locale: 'en_ie'});
        var expected = "999";
        
        var fmt = new PhoneFmt({locale: "en-IE", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    }
};
