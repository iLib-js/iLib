/*
 * phonefmt_NZ.js - Test the phonefmt_NZ Style.
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

module.exports.phonefmt_NZ = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testFormatNZStyle0: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "3",
                subscriberNumber: "3452343"
        });
        var expected = "(03) 345-2343";
        
        var fmt = new PhoneFmt({locale: "en-NZ", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    testFormatNZStyle1: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "3",
                subscriberNumber: "3452343"
        });
        var expected = "03 345 2343";
        
        var fmt = new PhoneFmt({locale: "en-NZ", style: "spaces"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    testFormatNZInternational: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                iddPrefix: "+",
                countryCode: "64",
                areaCode: "3",
                subscriberNumber: "1234567"
        });
        var expected = "+64 3 123 4567";
        
        var fmt = new PhoneFmt({locale: "en-NZ", style: "spaces"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    testFormatNZInternationalAccessCode: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                iddPrefix: "00",
                countryCode: "64",
                areaCode: "3",
                subscriberNumber: "1234567"
        });
        var expected = "00 64 3 123 4567";
        
        var fmt = new PhoneFmt({locale: "en-NZ", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    testFormatNZLongNumber: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "3",
                subscriberNumber: "12345678"
        });
        var expected = "(03) 1234-5678";
        
        var fmt = new PhoneFmt({locale: "en-NZ", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    
    testFormatNZMobile: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                mobilePrefix: "21",
                subscriberNumber: "1234567"
        });
        var expected = "021 123 4567";
        
        var fmt = new PhoneFmt({locale: "en-NZ", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    testFormatNZMobileInternational: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                iddPrefix: "+",
                countryCode: "44",
                trunkAccess: "0",
                mobilePrefix: "75",
                subscriberNumber: "1234567"
        });
        var expected = "+44 75 123 4567";
        
        var fmt = new PhoneFmt({locale: "en-NZ", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    testFormatNZService: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                serviceCode: "800",
                subscriberNumber: "12345"
        });
        var expected = "0800 12345";
        
        var fmt = new PhoneFmt({locale: "en-NZ", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    testFormatNZIEIDD: function(test) {
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
        
        var fmt = new PhoneFmt({locale: "en-NZ", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    testFormatNZStyle0Partial0: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0"
        });
        var expected = "0";
        
        var fmt = new PhoneFmt({locale: "en-NZ", style: "default"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatNZStyle0Partial1: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "3"
        });
        var expected = "(03) ";
        
        var fmt = new PhoneFmt({ locale: "en-NZ", style: "default"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatNZStyle0Partial2: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "3",
                subscriberNumber: "1"
        });
        var expected = "(03) 1";
        
        var fmt = new PhoneFmt({locale: "en-NZ", style: "default"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatNZStyle0Partial3: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "3",
                subscriberNumber: "22"
        });
        var expected = "(03) 22";
        
        var fmt = new PhoneFmt({locale: "en-NZ", style: "default"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatNZStyle0Partial4: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "3",
                subscriberNumber: "220"
        });
        var expected = "(03) 220";
        
        var fmt = new PhoneFmt({locale: "en-NZ", style: "default"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatNZStyle0Partial5: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "3",
                subscriberNumber: "2203"
        });
        var expected = "(03) 220-3";
        
        var fmt = new PhoneFmt({locale: "en-NZ", style: "default"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatNZStyle0Partial6: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "3",
                subscriberNumber: "22034"
        });
        var expected = "(03) 220-34";
        
        var fmt = new PhoneFmt({locale: "en-NZ", style: "default"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatNZStyle0Partial7: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "3",
                subscriberNumber: "220345"
        });
        var expected = "(03) 220-345";
        
        var fmt = new PhoneFmt({locale: "en-NZ", style: "default"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatNZStyle0Partial8: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "3",
                subscriberNumber: "2203456"
        });
        var expected = "(03) 220-3456";
        
        var fmt = new PhoneFmt({locale: "en-NZ", style: "default"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatNZStyle0Partial9: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "3",
                subscriberNumber: "22034567"
        });
        var expected = "(03) 2203-4567";
        
        var fmt = new PhoneFmt({locale: "en-NZ", style: "default"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatNZStyle0Partial10: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "3",
                subscriberNumber: "220345678"    // too long
        });
        var expected = "03220345678";
        
        var fmt = new PhoneFmt({locale: "en-NZ", style: "default"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    testFormatNZStyle0PartialLocal1: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "4"
        });
        var expected = "4";
        
        var fmt = new PhoneFmt({locale: "en-NZ", style: "default"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatNZStyle0PartialLocal2: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "45"
        });
        var expected = "45";
        
        var fmt = new PhoneFmt({locale: "en-NZ", style: "default"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatNZStyle0PartialLocal3: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "456"
        });
        var expected = "456";
        
        var fmt = new PhoneFmt({locale: "en-NZ", style: "default"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatNZStyle0PartialLocal4: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "4563"
        });
        var expected = "456-3";
        
        var fmt = new PhoneFmt({locale: "en-NZ", style: "default"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatNZStyle0PartialLocal5: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "45634"
        });
        var expected = "456-34";
        
        var fmt = new PhoneFmt({locale: "en-NZ", style: "default"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatNZStyle0PartialLocal6: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "456345"
        });
        var expected = "456-345";
        
        var fmt = new PhoneFmt({locale: "en-NZ", style: "default"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatNZStyle0PartialLocal7: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "4563453"
        });
        var expected = "456-3453";
        
        var fmt = new PhoneFmt({locale: "en-NZ", style: "default"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatNZStyle0PartialLocal8: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "45634535"
        });
        var expected = "4563-4535";
        
        var fmt = new PhoneFmt({locale: "en-NZ", style: "default"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatNZStyle0PartialLocal9: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "456345352"    // too long
        });
        var expected = "456345352";    // use last resort rule
        
        var fmt = new PhoneFmt({locale: "en-NZ", style: "default"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    testFormatNZStyle1PartialLocal1: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "4"
        });
        var expected = "4";
        
        var fmt = new PhoneFmt({locale: "en-NZ", style: "spaces"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatNZStyle1PartialLocal2: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "45"
        });
        var expected = "45";
        
        var fmt = new PhoneFmt({locale: "en-NZ", style: "spaces"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatNZStyle1PartialLocal3: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "456"
        });
        var expected = "456";
        
        var fmt = new PhoneFmt({locale: "en-NZ", style: "spaces"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatNZStyle1PartialLocal4: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "4563"
        });
        var expected = "456 3";
        
        var fmt = new PhoneFmt({locale: "en-NZ", style: "spaces"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatNZStyle1PartialLocal5: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "45634"
        });
        var expected = "456 34";
        
        var fmt = new PhoneFmt({locale: "en-NZ", style: "spaces"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatNZStyle1PartialLocal6: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "456345"
        });
        var expected = "456 345";
        
        var fmt = new PhoneFmt({locale: "en-NZ", style: "spaces"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatNZStyle1PartialLocal7: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "4563453"
        });
        var expected = "456 3453";
        
        var fmt = new PhoneFmt({locale: "en-NZ", style: "spaces"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatNZStyle1PartialLocal8: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "45634534"
        });
        var expected = "4563 4534";
        
        var fmt = new PhoneFmt({locale: "en-NZ", style: "spaces"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatNZStyle1PartialLocal9: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "456345345"    // too long
        });
        var expected = "456345345"; // use last resort rule
        
        var fmt = new PhoneFmt({locale: "en-NZ", style: "spaces"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
        
        
    }
    
};
