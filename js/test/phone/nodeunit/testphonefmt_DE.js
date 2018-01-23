/*
 * phonefmt_DE.js - Test the phonefmt_DE Style.
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

module.exports.phonefmt_DE = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testFormatDEStyle0: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "6224",
                subscriberNumber: "1234567"
        });
        var expected = "06224 123 45 67";
        
        var fmt = new PhoneFmt({locale: "de-DE", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    testFormatDEStyle1: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "6224",
                subscriberNumber: "1234567"
        });
        var expected = "06224/1 23 45 67";
        
        var fmt = new PhoneFmt({locale: "de-DE", style: "alten"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatDEStyle2: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "6224",
                subscriberNumber: "1234567"
        });
        var expected = "(06224) 123 4567";
        
        var fmt = new PhoneFmt({locale: "de-DE", style: "Microsoft"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatDEStyle3: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "6224",
                subscriberNumber: "1234567"
        });
        var expected = "06224 1234567";
        
        var fmt = new PhoneFmt({locale: "de-DE", style: "minimalistischen"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatDEStyle4: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "6224",
                subscriberNumber: "1234567"
        });
        var expected = "06224 123 4567";
        
        var fmt = new PhoneFmt({locale: "de-DE", style: "alternitive"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    testFormatDEInternational: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                iddPrefix: "+",
                countryCode: "33",
                areaCode: "1",
                subscriberNumber: "12345678"
        });
        var expected = "+33 1 12 34 56 78";
        
        var fmt = new PhoneFmt({locale: "de-DE", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    testFormatDEInternationalAccessCode: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                iddPrefix: "00",
                countryCode: "33",
                areaCode: "1",
                subscriberNumber: "12345678"
        });
        var expected = "00 33 1 12 34 56 78";
        
        var fmt = new PhoneFmt({locale: "de-DE", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    testFormatDEMobile: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "353",
            mobilePrefix: "86",
            subscriberNumber: "8223689"
        });
        var expected = "+353 86 822 3689";
        
        var fmt = new PhoneFmt({locale: "de-DE", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    testFormatDELongAreaCode: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "38852",
                subscriberNumber: "123456"
        });
        var expected = "038852 12 34 56";
        
        var fmt = new PhoneFmt({locale: "de-DE", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    
    testFormatDEMobile: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                mobilePrefix: "165",
                subscriberNumber: "12345678"
        });
        var expected = "0165 1234 5678";
        
        var fmt = new PhoneFmt({locale: "de-DE", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatDEDialAround: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                cic: "1032",
                areaCode: "2360",
                subscriberNumber: "123456"
        });
        var expected = "01032 2360 12 34 56";
        
        var fmt = new PhoneFmt({locale: "de-DE", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatDEDialAroundLong: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                cic: "10032",
                areaCode: "2360",
                subscriberNumber: "1234567"
        });
        var expected = "010032 2360 123 45 67";
        
        var fmt = new PhoneFmt({locale: "de-DE", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatDEpremium: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                serviceCode: "1169",
                subscriberNumber: "12345678"
        });
        var expected = "01169 12 34 56 78";
        
        var fmt = new PhoneFmt({locale: "de-DE", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatDEBlock: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                serviceCode: "116",
                subscriberNumber: "116"
        });
        var expected = "116 116";
        
        var fmt = new PhoneFmt({locale: "de-DE", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatDEInternetDialUp: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                serviceCode: "1925",
                subscriberNumber: "87654321"
        });
        var expected = "01925 87 65 43 21";
        
        var fmt = new PhoneFmt({locale: "de-DE", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    testFormatDEStyle0Partial0: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0"
        });
        var expected = "0";
        
        var fmt = new PhoneFmt({locale: "de-DE", style: "Microsoft"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatDEStyle0Partial1: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                subscriberNumber: "3"
        });
        var expected = "03";
        
        var fmt = new PhoneFmt({locale: "de-DE", style: "Microsoft"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatDEStyle0Partial2: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "30"
        });
        var expected = "(030) ";
        
        var fmt = new PhoneFmt({locale: "de-DE", style: "Microsoft"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatDEStyle0Partial3: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "30",
                subscriberNumber: "1"
        });
        var expected = "(030) 1";
        
        var fmt = new PhoneFmt({locale: "de-DE", style: "Microsoft"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatDEStyle0Partial4: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "30",
                subscriberNumber: "12"
        });
        var expected = "(030) 12";
        
        var fmt = new PhoneFmt({locale: "de-DE", style: "Microsoft"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatDEStyle0Partial5: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "30",
                subscriberNumber: "123"
        });
        var expected = "(030) 123";
        
        var fmt = new PhoneFmt({locale: "de-DE", style: "Microsoft"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatDEStyle0Partial6: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "30",
                subscriberNumber: "1234"
        });
        var expected = "(030) 1234";
        
        var fmt = new PhoneFmt({locale: "de-DE", style: "Microsoft"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatDEStyle0Partial7: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "30",
                subscriberNumber: "12345"
        });
        var expected = "(030) 12345";
        
        var fmt = new PhoneFmt({locale: "de-DE", style: "Microsoft"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatDEStyle0Partial8: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "30",
                subscriberNumber: "123456"
        });
        var expected = "(030) 123 456";
        
        var fmt = new PhoneFmt({locale: "de-DE", style: "Microsoft"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatDEStyle0Partial9: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "30",
                subscriberNumber: "1234567"
        });
        var expected = "(030) 123 4567";
        
        var fmt = new PhoneFmt({locale: "de-DE", style: "Microsoft"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatDEStyle0Partial10: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "30",
                subscriberNumber: "12345678"
        });
        var expected = "(030) 1234 5678";
        
        var fmt = new PhoneFmt({locale: "de-DE", style: "Microsoft"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatDEStyle0Partial11: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "30",
                subscriberNumber: "123456789"    // too long
        });
        var expected = "030123456789";    // last resort rule
        
        var fmt = new PhoneFmt({locale: "de-DE", style: "Microsoft"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    testFormatDEStyle0PartialLocal1: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "4"
        });
        var expected = "4";
        
        var fmt = new PhoneFmt({locale: "de-DE", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatDEStyle0PartialLocal2: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "45"
        });
        var expected = "45";
        
        var fmt = new PhoneFmt({locale: "de-DE", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatDEStyle0PartialLocal3: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "456"
        });
        var expected = "456";
        
        var fmt = new PhoneFmt({locale: "de-DE", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatDEStyle0PartialLocal4: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "4563"
        });
        var expected = "4563";
        
        var fmt = new PhoneFmt({locale: "de-DE", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatDEStyle0PartialLocal5: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "45634"
        });
        var expected = "45634";
        
        var fmt = new PhoneFmt({locale: "de-DE", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatDEStyle0PartialLocal6: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "456345"
        });
        var expected = "45 63 45";
        
        var fmt = new PhoneFmt({locale: "de-DE", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatDEStyle0PartialLocal7: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "4563453"
        });
        var expected = "456 34 53";
        
        var fmt = new PhoneFmt({locale: "de-DE", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatDEStyle0PartialLocal8: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "45634535"
        });
        var expected = "45 63 45 35";
        
        var fmt = new PhoneFmt({locale: "de-DE", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatDEStyle0PartialLocal9: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "456345352"    // too long
        });
        var expected = "456345352";    // use last resort rule
        
        var fmt = new PhoneFmt({locale: "de-DE", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    testFormatDEStyle1PartialLocal1: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "4"
        });
        var expected = "4";
        
        var fmt = new PhoneFmt({locale: "de-DE", style: "alten"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatDEStyle1PartialLocal2: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "45"
        });
        var expected = "45";
        
        var fmt = new PhoneFmt({locale: "de-DE", style: "alten"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatDEStyle1PartialLocal3: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "456"
        });
        var expected = "4 56";
        
        var fmt = new PhoneFmt({locale: "de-DE", style: "alten"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatDEStyle1PartialLocal4: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "4563"
        });
        var expected = "45 63";
        
        var fmt = new PhoneFmt({locale: "de-DE", style: "alten"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatDEStyle1PartialLocal5: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "45634"
        });
        var expected = "4 56 34";
        
        var fmt = new PhoneFmt({locale: "de-DE", style: "alten"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatDEStyle1PartialLocal6: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "456345"
        });
        var expected = "45 63 45";
        
        var fmt = new PhoneFmt({locale: "de-DE", style: "alten"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatDEStyle1PartialLocal7: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "4563453"
        });
        var expected = "4 56 34 53";
        
        var fmt = new PhoneFmt({locale: "de-DE", style: "alten"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatDEStyle1PartialLocal8: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "45634534"
        });
        var expected = "45 63 45 34";
        
        var fmt = new PhoneFmt({locale: "de-DE", style: "alten"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatDEStyle1PartialLocal9: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "456345345"    // too long
        });
        var expected = "456345345"; // use last resort rule
        
        var fmt = new PhoneFmt({locale: "de-DE", style: "alten"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    }
    
};