/*
 * phonefmt_FR.js - Test the phonefmt_FR Style.
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
    var PhoneNumber = require("../../lib/PhoneNumber.js");
}
if (typeof(PhoneFmt) === "undefined") {
    var PhoneFmt = require("../../lib/PhoneFmt.js");
}
if (typeof(ilib) === "undefined") {
    var ilib = require("../../lib/ilib.js");
}

module.exports.phonefmt_FR = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testFormatFRStyle0: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "1",
                subscriberNumber: "12345678"
        });
        var expected = "01 12 34 56 78";
        
        var fmt = new PhoneFmt({locale: "fr-FR", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    testFormatFRStyle1: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "1",
                subscriberNumber: "12345678"
        });
        var expected = "(0)1 12 34 56 78";
        
        var fmt = new PhoneFmt({locale: "fr-FR", style: "parenthèses"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    testFormatFRInternational: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                iddPrefix: "+",
                countryCode: "33",
                areaCode: "1",
                subscriberNumber: "12345678"
        });
        var expected = "+33 1 12 34 56 78";
        
        var fmt = new PhoneFmt({locale: "fr-FR", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    testFormatIEMobile: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "353",
            mobilePrefix: "86",
            subscriberNumber: "8223689"
        });
        var expected = "+353 86 822 3689";
        
        var fmt = new PhoneFmt({locale: "fr-FR", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    testFormatFRInternationalAccessCode: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                iddPrefix: "00",
                countryCode: "33",
                areaCode: "1",
                subscriberNumber: "12345678"
        });
        var expected = "00 33 1 12 34 56 78";
        
        var fmt = new PhoneFmt({locale: "fr-FR", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    testFormatFRMobile: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                mobilePrefix: "6",
                subscriberNumber: "12345678"
        });
        var expected = "06 12 34 56 78";
        
        var fmt = new PhoneFmt({locale: "fr-FR", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    testFormatFRFreephone: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                serviceCode: "800",
                subscriberNumber: "345678"
        });
        var expected = "0800 345 678";
        
        var fmt = new PhoneFmt({locale: "fr-FR", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    testFormatFRToll: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                serviceCode: "810",
                subscriberNumber: "345678"
        });
        var expected = "0810 345 678";
        
        var fmt = new PhoneFmt({locale: "fr-FR", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    testFormatFRDepartment: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                serviceCode: "590",
                subscriberNumber: "123456"
        });
        var expected = "0590 123 456";
        
        var fmt = new PhoneFmt({locale: "fr-FR", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatFRInternationalDepartment: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                iddPrefix: "+",
                countryCode: "33",
                serviceCode: "590",
                subscriberNumber: "123456"
        });
        var expected = "+33 590 12 34 56";
        
        var fmt = new PhoneFmt({locale: "fr-FR", style: "default"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    
    
    
    
    
    
    testFormatWithParamsStyle0: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "1",
                subscriberNumber: "12345678"
        });
        var expected = "01 12 34 56 78";
        
        var fmt = new PhoneFmt({locale: "fr-FR"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    testFormatWithParamsStyle1: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "1",
                subscriberNumber: "12345678"
        });
        var expected = "(0)1 12 34 56 78";
        
        var fmt = new PhoneFmt({locale: "fr-FR", style: "parenthèses"});
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
        
        var fmt = new PhoneFmt({locale: "fr-FR"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    testFormatIEMobile: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "353",
            mobilePrefix: "86",
            subscriberNumber: "8223689"
        });
        var expected = "+353 86 822 3689";
        
        var fmt = new PhoneFmt({locale: "fr-FR"});
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
        
        var fmt = new PhoneFmt({locale: "fr-FR"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    testFormatWithParamsMobile: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                mobilePrefix: "6",
                subscriberNumber: "12345678"
        });
        var expected = "06 12 34 56 78";
        
        var fmt = new PhoneFmt({locale: "fr-FR"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    testFormatWithParamsDepartment: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                serviceCode: "590",
                subscriberNumber: "123456"
        });
        var expected = "0590 123 456";
        
        var fmt = new PhoneFmt({locale: "fr-FR"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatWithParamsInternationalDepartment: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                iddPrefix: "+",
                countryCode: "33",
                serviceCode: "590",
                subscriberNumber: "123456"
        });
        var expected = "+33 590 12 34 56";
        
        var fmt = new PhoneFmt({locale: "fr-FR"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    testFormatWithParamsSMSPartial: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "12345"
        });
        var expected = "12 34 5";
        
        var fmt = new PhoneFmt({locale: "fr-FR"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatWithParamsSMSWhole: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "12345"
        });
        var expected = "12345";
        
        var fmt = new PhoneFmt({locale: "fr-FR"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    testFormatWithParamsStyle0Partial0: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0"
        });
        var expected = "0";
        
        var fmt = new PhoneFmt({locale: "fr-FR"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatWithParamsStyle0Partial1: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "4"
        });
        var expected = "04 ";
        
        var fmt = new PhoneFmt({locale: "fr-FR"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatWithParamsStyle0Partial2: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "4",
                subscriberNumber: "1"
        });
        var expected = "04 1";
        
        var fmt = new PhoneFmt({locale: "fr-FR"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatWithParamsStyle0Partial3: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "4",
                subscriberNumber: "12"
        });
        var expected = "04 12";
        
        var fmt = new PhoneFmt({locale: "fr-FR"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatWithParamsStyle0Partial4: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "4",
                subscriberNumber: "123"
        });
        var expected = "04 12 3";
        
        var fmt = new PhoneFmt({locale: "fr-FR"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatWithParamsStyle0Partial5: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "4",
                subscriberNumber: "1234"
        });
        var expected = "04 12 34";
        
        var fmt = new PhoneFmt({locale: "fr-FR"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatWithParamsStyle0Partial6: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "4",
                subscriberNumber: "12345"
        });
        var expected = "04 12 34 5";
        
        var fmt = new PhoneFmt({locale: "fr-FR"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatWithParamsStyle0Partial7: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "4",
                subscriberNumber: "123456"
        });
        var expected = "04 12 34 56";
        
        var fmt = new PhoneFmt({locale: "fr-FR"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatWithParamsStyle0Partial8: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "4",
                subscriberNumber: "1234567"
        });
        var expected = "04 12 34 56 7";
        
        var fmt = new PhoneFmt({locale: "fr-FR"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatWithParamsStyle0Partial9: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "4",
                subscriberNumber: "12345678"
        });
        var expected = "04 12 34 56 78";
        
        var fmt = new PhoneFmt({locale: "fr-FR"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatWithParamsStyle0Partial10: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "4",
                subscriberNumber: "123456789"    // too long
        });
        var expected = "04123456789"; // use last resort rule
        
        var fmt = new PhoneFmt({locale: "fr-FR"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    testFormatWithParamsStyle1Partial0: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0"
        });
        var expected = "0";
        
        var fmt = new PhoneFmt({locale: "fr-FR", style: "parenthèses"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatWithParamsStyle1Partial1: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "4"
        });
        var expected = "(0)4 ";
        
        var fmt = new PhoneFmt({locale: "fr-FR", style: "parenthèses"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatWithParamsStyle1Partial2: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "4",
                subscriberNumber: "1"
        });
        var expected = "(0)4 1";
        
        var fmt = new PhoneFmt({locale: "fr-FR", style: "parenthèses"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatWithParamsStyle1Partial3: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "4",
                subscriberNumber: "12"
        });
        var expected = "(0)4 12";
        
        var fmt = new PhoneFmt({locale: "fr-FR", style: "parenthèses"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatWithParamsStyle1Partial4: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "4",
                subscriberNumber: "123"
        });
        var expected = "(0)4 12 3";
        
        var fmt = new PhoneFmt({locale: "fr-FR", style: "parenthèses"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatWithParamsStyle1Partial5: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "4",
                subscriberNumber: "1234"
        });
        var expected = "(0)4 12 34";
        
        var fmt = new PhoneFmt({locale: "fr-FR", style: "parenthèses"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatWithParamsStyle1Partial6: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "4",
                subscriberNumber: "12345"
        });
        var expected = "(0)4 12 34 5";
        
        var fmt = new PhoneFmt({locale: "fr-FR", style: "parenthèses"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatWithParamsStyle1Partial7: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "4",
                subscriberNumber: "123456"
        });
        var expected = "(0)4 12 34 56";
        
        var fmt = new PhoneFmt({locale: "fr-FR", style: "parenthèses"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatWithParamsStyle1Partial8: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "4",
                subscriberNumber: "1234567"
        });
        var expected = "(0)4 12 34 56 7";
        
        var fmt = new PhoneFmt({locale: "fr-FR", style: "parenthèses"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatWithParamsStyle1Partial9: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "4",
                subscriberNumber: "12345678"
        });
        var expected = "(0)4 12 34 56 78";
        
        var fmt = new PhoneFmt({locale: "fr-FR", style: "parenthèses"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatWithParamsStyle1Partial10: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "4",
                subscriberNumber: "123456789"    // too long
        });
        var expected = "04123456789"; // use last resort rule
        
        var fmt = new PhoneFmt({locale: "fr-FR", style: "parenthèses"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    
    testFormatWithParamsStyle0PartialLocal1: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "4"
        });
        var expected = "4";
        
        var fmt = new PhoneFmt({locale: "fr-FR"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatWithParamsStyle0PartialLocal2: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "45"
        });
        var expected = "45";
        
        var fmt = new PhoneFmt({locale: "fr-FR"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatWithParamsStyle0PartialLocal3: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "456"
        });
        var expected = "45 6";
        
        var fmt = new PhoneFmt({locale: "fr-FR"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatWithParamsStyle0PartialLocal4: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "4563"
        });
        var expected = "45 63";
        
        var fmt = new PhoneFmt({locale: "fr-FR"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatWithParamsStyle0PartialLocal5: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "45634"
        });
        var expected = "45 63 4";
        
        var fmt = new PhoneFmt({locale: "fr-FR"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatWithParamsStyle0PartialLocal6: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "456345"
        });
        var expected = "45 63 45";
        
        var fmt = new PhoneFmt({locale: "fr-FR"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatWithParamsStyle0PartialLocal7: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "4563453"
        });
        var expected = "45 63 45 3";
        
        var fmt = new PhoneFmt({locale: "fr-FR"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatWithParamsStyle0PartialLocal8: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "45634535"
        });
        var expected = "45 63 45 35";
        
        var fmt = new PhoneFmt({locale: "fr-FR"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatWithParamsStyle0PartialLocal9: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
                subscriberNumber: "456345353" // too long
        });
        var expected = "456345353";           // use last resort rule
        
        var fmt = new PhoneFmt({locale: "fr-FR"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    
    
    // for NOV-113777
    testFormatLocalNumberPartial: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            subscriberNumber: "41551735"
        });
        var expected = "41 55 17 35";
        
        var fmt = new PhoneFmt({mcc: "208"});
        formatted = fmt.format(parsed, {partial: true});
        
        test.equal(formatted, expected);
        test.done();
        
        
    },
    testFormatLocalNumberWhole: function(test) {
        test.expect(1);
        var formatted;
        var parsed = new PhoneNumber({
            subscriberNumber: "41551735"
        });
        var expected = "41 55 17 35";
        
        var fmt = new PhoneFmt({mcc: "208"});
        formatted = fmt.format(parsed);
        
        test.equal(formatted, expected);
        test.done();
        
        
    }
    
};
