/*
 * phonenum_AU.js - Test parsing phone numbers in AU
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
if (typeof(ilib) === "undefined") {
    var ilib = require("../../../lib/ilib.js");
}

module.exports.phonenum_AU = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAUFull: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("(08) 1234 5678", {locale: "en-AU"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "8",
            subscriberNumber: "12345678"
        }, {locale: "en-AU"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseAULocalNumber: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("23456789", {locale: "en-AU"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            subscriberNumber: "23456789"
        }, {locale: "en-AU"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseAUBogusPrefix: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("09 69812345", {locale: "en-AU"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            subscriberNumber: "969812345",
            invalid: true
        }, {locale: "en-AU"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseAUIgnoreFormatting: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("(02) 1234-5678", {locale: "en-AU"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "2",
            subscriberNumber: "12345678"
        }, {locale: "en-AU"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseAUIgnoreCrap: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("$02@1234&5678-", {locale: "en-AU"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "2",
            subscriberNumber: "12345678"
        }, {locale: "en-AU"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseAUNoAreaCode: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("91234567", {locale: "en-AU"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            subscriberNumber: "91234567"
        }, {locale: "en-AU"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseAUServiceCode: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("0198 123 456", {locale: "en-AU"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            serviceCode: "198",
            subscriberNumber: "123456"
        }, {locale: "en-AU"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseAUWithVSC: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("1831 02 2345 6789", {locale: "en-AU"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            vsc: "1831",
            trunkAccess: "0",
            areaCode: "2",
            subscriberNumber: "23456789"
        }, {locale: "en-AU"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseAUInternationalCarrierSelection: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("0016 61 2 5678 1234", {locale: "en-AU"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            iddPrefix: "0016",
            countryCode: "61",
            areaCode: "2",
            subscriberNumber: "56781234"
        }, {locale: "en-AU"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseAUCarrierSelectionInternational: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("1441 0011 61 2 5678 1234", {locale: "en-AU"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            cic: "1441",
            iddPrefix: "0011",
            countryCode: "61",
            areaCode: "2",
            subscriberNumber: "56781234"
        }, {locale: "en-AU"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseAUCarrierSelectionDomestic: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("1441 2 5678 1234", {locale: "en-AU"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            cic: "1441",
            areaCode: "2",
            subscriberNumber: "56781234"
        }, {locale: "en-AU"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseAUMobileNumber: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("0412 345 678", {locale: "en-AU"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            mobilePrefix: "4123",
            subscriberNumber: "45678"
        }, {locale: "en-AU"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseAUPlusIDDToUS: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+12028675309", {locale: "en-AU"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "1",
            areaCode: "202",
            subscriberNumber: "8675309"
        }, {locale: "en-AU"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseAUZerosIDDToUS: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("001112028675309", {locale: "en-AU"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            iddPrefix: "0011",
            countryCode: "1",
            areaCode: "202",
            subscriberNumber: "8675309"
        }, {locale: "en-AU"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseAUInternationalDialAround: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("1456 0011 1 202 867 5309", {locale: "en-AU"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            cic: "1456",
            iddPrefix: "0011",
            countryCode: "1",
            areaCode: "202",
            subscriberNumber: "8675309"
        }, {locale: "en-AU"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseAUEmergencyNumber: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("000", {locale: "en-AU"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            emergency: "000"
        }, {locale: "en-AU"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseAUEmergencyGSM: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("112", {locale: "en-AU"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            emergency: "112"
        }, {locale: "en-AU"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseAUPartial1: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("0", {locale: "en-AU"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0"
        }, {locale: "en-AU"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseAUPartial2: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("02", {locale: "en-AU"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "2"
        }, {locale: "en-AU"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseAUPartial3: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("02 2", {locale: "en-AU"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "2",
            subscriberNumber: "2"
        }, {locale: "en-AU"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseAUPartial4: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("02 23", {locale: "en-AU"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "2",
            subscriberNumber: "23"
        }, {locale: "en-AU"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseAUPartial5: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("02 234", {locale: "en-AU"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "2",
            subscriberNumber: "234"
        }, {locale: "en-AU"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseAUPartial6: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("02 2345", {locale: "en-AU"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "2",
            subscriberNumber: "2345"
        }, {locale: "en-AU"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseAUPartial7: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("02 2345 6", {locale: "en-AU"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "2",
            subscriberNumber: "23456"
        }, {locale: "en-AU"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseAUPartial8: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("02 2345 67", {locale: "en-AU"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "2",
            subscriberNumber: "234567"
        }, {locale: "en-AU"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseAUPartial9: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("02 2345 678", {locale: "en-AU"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "2",
                subscriberNumber: "2345678"
        }, {locale: "en-AU"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseAUPartial10: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("02 2345 6789", {locale: "en-AU"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "2",
                subscriberNumber: "23456789"
        }, {locale: "en-AU"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseAUPartial11: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("02 2345 6789 0", {locale: "en-AU"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "2",
                subscriberNumber: "234567890",
                invalid: true
        }, {locale: "en-AU"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseAUWithUSMCC: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("02 1234 5678", {locale: "en-AU", mcc: "316"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            subscriberNumber: "0212345678",
            invalid: true
        }, {locale: "en-US"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseAUWithFRMCC: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("02 1234 5678", {locale: "en-AU", mcc: "208"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "2",
            subscriberNumber: "12345678"
        }, {locale: "en-FR"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseAUWithMXMCC: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("02 1234 5678", {locale: "en-AU", mcc: "334"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            serviceCode: "02",
            subscriberNumber: "12345678"
        }, {locale: "en-MX"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseAUWithDEMCC: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("02 1234 5678", {locale: "en-AU", mcc: "262"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "212",
            subscriberNumber: "345678"
        }, {locale: "en-DE"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseAUWithAUMCC: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("02 1234 5678", {locale: "en-AU", mcc: "505"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "2",
            subscriberNumber: "12345678"
        }, {locale: "en-AU"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    }
    
};
