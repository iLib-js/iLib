/*
 * phonefmt_MX.js - Test the phonefmt_MX Style.
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

module.exports.phonefmt_MX = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testFormatMXStyle0: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
                areaCode: "33",
                subscriberNumber: "12345678"
        });
        var expected = "33-1234-5678";
        
        var fmt = new PhoneFmt({locale: "es-MX", style: "default"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatMXStyle1: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
                areaCode: "33",
                subscriberNumber: "12345678"
        });
        var expected = "(33) 1234-5678";
        
        var fmt = new PhoneFmt({locale: "es-MX", style: "paréntesis"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatMXStyle2: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
                areaCode: "33",
                subscriberNumber: "12345678"
        });
        var expected = "33 12 34 56 78";
        
        var fmt = new PhoneFmt({locale: "es-MX", style: "espacios"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatMXStyle3: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
                areaCode: "33",
                subscriberNumber: "12345678"
        });
        var expected = "33/1234-5678";
        
        var fmt = new PhoneFmt({locale: "es-MX", style: "barras"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
     
    testFormatMXInternational: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
                iddPrefix: "+",
                countryCode: "33",
                areaCode: "1",
                subscriberNumber: "12345678"
        });
        var expected = "+33 1 12 34 56 78";
        
        var fmt = new PhoneFmt({locale: "es-MX", style: "default"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    testFormatMXInternationalAccessCode: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
                iddPrefix: "00",
                countryCode: "33",
                areaCode: "1",
                subscriberNumber: "12345678"
        });
        var expected = "00 33 1 12 34 56 78";
        
        var fmt = new PhoneFmt({locale: "es-MX", style: "default"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    testFormatMXInternationalDialToCell: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
                iddPrefix: "+",
                countryCode: "52",
                mobilePrefix: "044",
                areaCode: "55",
                subscriberNumber: "12345678"
        });
        var expected = "+52 1 55 1234 5678";
        
        var fmt = new PhoneFmt({locale: "es-MX", style: "default"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    testFormatMXService: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "01",
                serviceCode: "800",
                subscriberNumber: "12345678"
        });
        var expected = "01-800-1234-5678";
        
        var fmt = new PhoneFmt({locale: "es-MX", style: "default"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    testFormatSMSPartial: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "12345"
        });
        var expected = "123-45";
        
        var fmt = new PhoneFmt({locale: "es-MX"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatSMSWhole: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "12345"
        });
        var expected = "12345";
        
        var fmt = new PhoneFmt({locale: "es-MX"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    testFormatNumberWithUSMCC: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            areaCode: "615",
            subscriberNumber: "9876543"
        });
        var expected = "(615) 987-6543";
        
        var fmt = new PhoneFmt({locale: "es-MX", style: "default", mcc: "316"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    testFormatNumberWithUSMCCNoLocale: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            areaCode: "615",
            subscriberNumber: "9876543"
        });
        var expected = "(615) 987-6543";
        
        var fmt = new PhoneFmt({style: "default", mcc: "316"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    testFormatLocalNumberWithMXMCC: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            subscriberNumber: "9876543"
        });
        var expected = "987-6543";
        
        var fmt = new PhoneFmt({locale: "es-MX", style: "default", mcc: "316"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    testFormatLocalNumberWithMXMCCNoLocale: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            subscriberNumber: "9876543"
        });
        var expected = "987-6543";
        
        var fmt = new PhoneFmt({style: "default", mcc: "316"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    
    testFormatNumberWithFRMCC: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "6",
            subscriberNumber: "15987654"
        });
        var expected = "06 15 98 76 54";
        
        var fmt = new PhoneFmt({locale: "es-MX", style: "default", mcc: "208"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    testFormatNumberWithFRMCCNoLocale: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "6",
            subscriberNumber: "15987654"
        });
        var expected = "06 15 98 76 54";
        
        var fmt = new PhoneFmt({style: "default", mcc: "208"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    testFormatLocalNumberWithFRMCC: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            subscriberNumber: "15987654"
        });
        var expected = "15 98 76 54";
        
        var fmt = new PhoneFmt({locale: "es-MX", style: "default", mcc: "208"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    testFormatLocalNumberWithFRMCCNoLocale: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            subscriberNumber: "15987654"
        });
        var expected = "15 98 76 54";
        
        var fmt = new PhoneFmt({style: "default", mcc: "208"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    
    testFormatNumberWithDEMCC: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "212",
            subscriberNumber: "98765432"
        });
        var expected = "0212 98 76 54 32";
        
        var fmt = new PhoneFmt({locale: "es-MX", style: "default", mcc: "262"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    testFormatNumberWithDEMCCNoLocale: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "212",
            subscriberNumber: "98765432"
        });
        var expected = "0212 98 76 54 32";
        
        var fmt = new PhoneFmt({style: "default", mcc: "262"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    testFormatLocalNumberWithFRMCC: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            subscriberNumber: "98765432"
        });
        var expected = "98 76 54 32";
        
        var fmt = new PhoneFmt({locale: "es-MX", style: "default", mcc: "208"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    testFormatLocalNumberWithFRMCCNoLocale: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            subscriberNumber: "98765432"
        });
        var expected = "98 76 54 32";
        
        var fmt = new PhoneFmt({style: "default", mcc: "208"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    testFormatNumberWithMXMCC: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            areaCode: "615",
            subscriberNumber: "9876543"
        });
        var expected = "615-987-6543";
        
        var fmt = new PhoneFmt({locale: "es-MX", style: "default", mcc: "334"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    testFormatNumberWithMXMCCNoLocale: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            areaCode: "615",
            subscriberNumber: "9876543"
        });
        var expected = "615-987-6543";
        
        var fmt = new PhoneFmt({style: "default", mcc: "334"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    testFormatLocalNumberWithMXMCC: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            subscriberNumber: "9876543"
        });
        var expected = "987-6543";
        
        var fmt = new PhoneFmt({locale: "es-MX", style: "default", mcc: "334"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    testFormatLocalNumberWithMXMCCNoLocale: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            subscriberNumber: "9876543"
        });
        var expected = "987-6543";
        
        var fmt = new PhoneFmt({style: "default", mcc: "334"});
        formatted = fmt.format(parsed);
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    
    
    
    
    testFormatWithParamsStyle0Partial1: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "3"
        });
        var expected = "3";
        
        var fmt = new PhoneFmt({locale: "es-MX"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatWithParamsStyle0Partial2: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "33"
        });
        var expected = "33";
        
        var fmt = new PhoneFmt({locale: "es-MX"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatWithParamsStyle0Partial3: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "331"
        });
        var expected = "331";
        
        var fmt = new PhoneFmt({locale: "es-MX"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatWithParamsStyle0Partial4: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "3312"
        });
        var expected = "331-2";
        
        var fmt = new PhoneFmt({locale: "es-MX"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatWithParamsStyle0Partial5: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "33123"
        });
        var expected = "331-23";
        
        var fmt = new PhoneFmt({locale: "es-MX"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatWithParamsStyle0Partial6: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "331234"
        });
        var expected = "331-234";
        
        var fmt = new PhoneFmt({locale: "es-MX"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatWithParamsStyle0Partial7: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "3312345"
        });
        var expected = "331-2345";
        
        var fmt = new PhoneFmt({locale: "es-MX"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatWithParamsStyle0Partial8: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "33123456"
        });
        var expected = "3312-3456";
        
        var fmt = new PhoneFmt({locale: "es-MX"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatWithParamsStyle0Partial9: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
                areaCode: "33",
                subscriberNumber: "1234567"
        });
        var expected = "33-123-4567";
        
        var fmt = new PhoneFmt({locale: "es-MX"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatWithParamsStyle0Partial10: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
                areaCode: "33",
                subscriberNumber: "12345678"
        });
        var expected = "33-1234-5678";
        
        var fmt = new PhoneFmt({locale: "es-MX"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatWithParamsStyle0Partial11: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
                areaCode: "33",
                subscriberNumber: "123456789" // too long
        });
        var expected = "33123456789"; // use last resort rule
        
        var fmt = new PhoneFmt({locale: "es-MX"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    testFormatWithParamsStyle0PartialLocal1: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "4"
        });
        var expected = "4";
        
        var fmt = new PhoneFmt({locale: "es-MX"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatWithParamsStyle0PartialLocal2: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "45"
        });
        var expected = "45";
        
        var fmt = new PhoneFmt({locale: "es-MX"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatWithParamsStyle0PartialLocal3: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "456"
        });
        var expected = "456";
        
        var fmt = new PhoneFmt({locale: "es-MX"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatWithParamsStyle0PartialLocal4: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "4563"
        });
        var expected = "456-3";
        
        var fmt = new PhoneFmt({locale: "es-MX"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatWithParamsStyle0PartialLocal5: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "45634"
        });
        var expected = "456-34";
        
        var fmt = new PhoneFmt({locale: "es-MX"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatWithParamsStyle0PartialLocal6: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "456345"
        });
        var expected = "456-345";
        
        var fmt = new PhoneFmt({locale: "es-MX"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatWithParamsStyle0PartialLocal7: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "4563453"
        });
        var expected = "456-3453";
        
        var fmt = new PhoneFmt({locale: "es-MX"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatWithParamsStyle0PartialLocal8: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "45634535"
        });
        var expected = "4563-4535";
        
        var fmt = new PhoneFmt({locale: "es-MX"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatWithParamsStyle0PartialLocal8: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "456345356"  // too long
        });
        var expected = "456345356";  // use last resort rule
        
        var fmt = new PhoneFmt({locale: "es-MX"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    testFormatWithParamsStyle0PartialTrunk0: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "0"
        });
        var expected = "0";
        
        var fmt = new PhoneFmt({locale: "es-MX"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatWithParamsStyle0PartialTrunk1: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "01"
        });
        var expected = "01";
        
        var fmt = new PhoneFmt({locale: "es-MX"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatWithParamsStyle0PartialTrunk1: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "01",
                areaCode: "5"
        });
        var expected = "01-5-";
        
        var fmt = new PhoneFmt({locale: "es-MX"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatWithParamsStyle0PartialTrunk2: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "01",
                areaCode: "55"
        });
        var expected = "01-55-";
        
        var fmt = new PhoneFmt({locale: "es-MX"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatWithParamsStyle0PartialTrunk3: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "01",
                areaCode: "55",
                subscriberNumber: "1"
        });
        var expected = "01-55-1";
        
        var fmt = new PhoneFmt({locale: "es-MX"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatWithParamsStyle0PartialTrunk4: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "01",
                areaCode: "55",
                subscriberNumber: "12"
        });
        var expected = "01-55-12";
        
        var fmt = new PhoneFmt({locale: "es-MX"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatWithParamsStyle0PartialTrunk5: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "01",
                areaCode: "55",
                subscriberNumber: "123"
        });
        var expected = "01-55-123";
        
        var fmt = new PhoneFmt({locale: "es-MX"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatWithParamsStyle0PartialTrunk6: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "01",
                areaCode: "55",
                subscriberNumber: "1234"
        });
        var expected = "01-55-123-4";
        
        var fmt = new PhoneFmt({locale: "es-MX"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatWithParamsStyle0PartialTrunk7: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "01",
                areaCode: "55",
                subscriberNumber: "12345"
        });
        var expected = "01-55-123-45";
        
        var fmt = new PhoneFmt({locale: "es-MX"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatWithParamsStyle0PartialTrunk8: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "01",
                areaCode: "55",
                subscriberNumber: "123456"
        });
        var expected = "01-55-123-456";
        
        var fmt = new PhoneFmt({locale: "es-MX"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatWithParamsStyle0PartialTrunk9: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "01",
                areaCode: "55",
                subscriberNumber: "1234567"
        });
        var expected = "01-55-123-4567";
        
        var fmt = new PhoneFmt({locale: "es-MX"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatWithParamsStyle0PartialTrunk10: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "01",
                areaCode: "55",
                subscriberNumber: "12345678"
        });
        var expected = "01-55-1234-5678";
        
        var fmt = new PhoneFmt({locale: "es-MX"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatWithParamsStyle0PartialTrunk11: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "01",
                areaCode: "55",
                subscriberNumber: "123456789" // too long 
        });
        var expected = "0155123456789";    // use last resort rule
        
        var fmt = new PhoneFmt({locale: "es-MX"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    testFormatWithParamsStyle1Partial1: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "3"
        });
        var expected = "3";
        
        var fmt = new PhoneFmt({locale: "es-MX", style: "paréntesis"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatWithParamsStyle1Partial2: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "33"
        });
        var expected = "33";
        
        var fmt = new PhoneFmt({locale: "es-MX", style: "paréntesis"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatWithParamsStyle1Partial3: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "331"
        });
        var expected = "331";
        
        var fmt = new PhoneFmt({locale: "es-MX", style: "paréntesis"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatWithParamsStyle1Partial4: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "3312"
        });
        var expected = "331-2";
        
        var fmt = new PhoneFmt({locale: "es-MX", style: "paréntesis"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatWithParamsStyle1Partial5: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "33123"
        });
        var expected = "331-23";
        
        var fmt = new PhoneFmt({locale: "es-MX", style: "paréntesis"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatWithParamsStyle1Partial6: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "331234"
        });
        var expected = "331-234";
        
        var fmt = new PhoneFmt({locale: "es-MX", style: "paréntesis"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatWithParamsStyle1Partial7: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "3312345"
        });
        var expected = "331-2345";
        
        var fmt = new PhoneFmt({locale: "es-MX", style: "paréntesis"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatWithParamsStyle1Partial8: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "33123456"
        });
        var expected = "3312-3456";
        
        var fmt = new PhoneFmt({locale: "es-MX", style: "paréntesis"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatWithParamsStyle1Partial9: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
                areaCode: "33",
                subscriberNumber: "1234567"
        });
        var expected = "(33) 123-4567";
        
        var fmt = new PhoneFmt({locale: "es-MX", style: "paréntesis"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatWithParamsStyle1Partial10: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
                areaCode: "33",
                subscriberNumber: "12345678"
        });
        var expected = "(33) 1234-5678";
        
        var fmt = new PhoneFmt({locale: "es-MX", style: "paréntesis"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatWithParamsStyle1Partial11: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
                areaCode: "33",
                subscriberNumber: "123456789" // too long
        });
        var expected = "33123456789"; // use last resort rule
        
        var fmt = new PhoneFmt({locale: "es-MX", style: "paréntesis"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    testFormatWithParamsStyle1PartialLocal1: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "4"
        });
        var expected = "4";
        
        var fmt = new PhoneFmt({locale: "es-MX", style: "paréntesis"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatWithParamsStyle1PartialLocal2: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "45"
        });
        var expected = "45";
        
        var fmt = new PhoneFmt({locale: "es-MX", style: "paréntesis"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatWithParamsStyle1PartialLocal3: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "456"
        });
        var expected = "456";
        
        var fmt = new PhoneFmt({locale: "es-MX", style: "paréntesis"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatWithParamsStyle1PartialLocal4: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "4563"
        });
        var expected = "456-3";
        
        var fmt = new PhoneFmt({locale: "es-MX", style: "paréntesis"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatWithParamsStyle1PartialLocal5: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "45634"
        });
        var expected = "456-34";
        
        var fmt = new PhoneFmt({locale: "es-MX", style: "paréntesis"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatWithParamsStyle1PartialLocal6: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "456345"
        });
        var expected = "456-345";
        
        var fmt = new PhoneFmt({locale: "es-MX", style: "paréntesis"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatWithParamsStyle1PartialLocal7: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "4563453"
        });
        var expected = "456-3453";
        
        var fmt = new PhoneFmt({locale: "es-MX", style: "paréntesis"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatWithParamsStyle1PartialLocal8: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "45634535"
        });
        var expected = "4563-4535";
        
        var fmt = new PhoneFmt({locale: "es-MX", style: "paréntesis"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatWithParamsStyle1PartialLocal8: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "456345356"  // too long
        });
        var expected = "456345356";  // use last resort rule
        
        var fmt = new PhoneFmt({locale: "es-MX", style: "paréntesis"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    testFormatWithParamsStyle1PartialTrunk0: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "0"
        });
        var expected = "0";
        
        var fmt = new PhoneFmt({locale: "es-MX", style: "paréntesis"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatWithParamsStyle1PartialTrunk1: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "01"
        });
        var expected = "01";
        
        var fmt = new PhoneFmt({locale: "es-MX", style: "paréntesis"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatWithParamsStyle1PartialTrunk1: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "01",
                areaCode: "5"
        });
        var expected = "01 (5) ";
        
        var fmt = new PhoneFmt({locale: "es-MX", style: "paréntesis"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatWithParamsStyle1PartialTrunk2: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "01",
                areaCode: "55"
        });
        var expected = "01 (55) ";
        
        var fmt = new PhoneFmt({locale: "es-MX", style: "paréntesis"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatWithParamsStyle1PartialTrunk3: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "01",
                areaCode: "55",
                subscriberNumber: "1"
        });
        var expected = "01 (55) 1";
        
        var fmt = new PhoneFmt({locale: "es-MX", style: "paréntesis"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatWithParamsStyle1PartialTrunk4: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "01",
                areaCode: "55",
                subscriberNumber: "12"
        });
        var expected = "01 (55) 12";
        
        var fmt = new PhoneFmt({locale: "es-MX", style: "paréntesis"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatWithParamsStyle1PartialTrunk5: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "01",
                areaCode: "55",
                subscriberNumber: "123"
        });
        var expected = "01 (55) 123";
        
        var fmt = new PhoneFmt({locale: "es-MX", style: "paréntesis"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatWithParamsStyle1PartialTrunk6: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "01",
                areaCode: "55",
                subscriberNumber: "1234"
        });
        var expected = "01 (55) 123-4";
        
        var fmt = new PhoneFmt({locale: "es-MX", style: "paréntesis"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatWithParamsStyle1PartialTrunk7: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "01",
                areaCode: "55",
                subscriberNumber: "12345"
        });
        var expected = "01 (55) 123-45";
        
        var fmt = new PhoneFmt({locale: "es-MX", style: "paréntesis"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatWithParamsStyle1PartialTrunk8: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "01",
                areaCode: "55",
                subscriberNumber: "123456"
        });
        var expected = "01 (55) 123-456";
        
        var fmt = new PhoneFmt({locale: "es-MX", style: "paréntesis"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatWithParamsStyle1PartialTrunk9: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "01",
                areaCode: "55",
                subscriberNumber: "1234567"
        });
        var expected = "01 (55) 123-4567";
        
        var fmt = new PhoneFmt({locale: "es-MX", style: "paréntesis"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatWithParamsStyle1PartialTrunk10: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "01",
                areaCode: "55",
                subscriberNumber: "12345678"
        });
        var expected = "01 (55) 1234-5678";
        
        var fmt = new PhoneFmt({locale: "es-MX", style: "paréntesis"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatWithParamsStyle1PartialTrunk11: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "01",
                areaCode: "55",
                subscriberNumber: "123456789" // too long 
        });
        var expected = "0155123456789";    // use last resort rule
        
        var fmt = new PhoneFmt({locale: "es-MX", style: "paréntesis"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    //for bug NOV-119557
    testFormatTollFree: function(test) {
        var formatted;
        var parsed = new PhoneNumber({
            trunkAccess: "01",
            serviceCode: "800",
            subscriberNumber: "0220606" 
        });
        var expected = "01-800-022-0606";
        
        var fmt = new PhoneFmt({locale: "es-MX"});
        formatted = fmt.format(parsed, {partial: false});
        
        test.expect(1);
        test.equal(formatted, expected);
        test.done();
        
        
    }
    
};