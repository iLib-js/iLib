/*
 * phonenum_KR.js - Test parsing phone numbers in KR
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
    var ilib = require("../../..");
}

module.exports.phonenum_KR = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseKRFull: function(test) {
        var parsed = new PhoneNumber("02-1234-5678", {locale: "ko-KR"});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "2",
            subscriberNumber: "12345678"
        }, {locale: "ko-KR"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    
    testParseKRLocalNumber: function(test) {
        var parsed = new PhoneNumber("345-6789", {locale: "ko-KR"});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            subscriberNumber: "3456789"
        }, {locale: "ko-KR"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    
    testParseKRFullLongAreaCode: function(test) {
        var parsed = new PhoneNumber("033-9467-2345", {locale: "ko-KR"});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "33",
            subscriberNumber: "94672345"
        }, {locale: "ko-KR"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    
    testParseKRIgnoreFormatting: function(test) {
        var parsed = new PhoneNumber("(051) 1234-5678", {locale: "ko-KR"});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "51",
            subscriberNumber: "12345678"
        }, {locale: "ko-KR"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    
    testParseKRIgnoreCrap: function(test) {
        var parsed = new PhoneNumber("$051@1234&5678-", {locale: "ko-KR"});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "51",
            subscriberNumber: "12345678"
        }, {locale: "ko-KR"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    
    testParseKRNoAreaCode: function(test) {
        var parsed = new PhoneNumber("82345678", {locale: "ko-KR"});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            subscriberNumber: "82345678"
        }, {locale: "ko-KR"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    
    testParseKRInvalidLocalNumber: function(test) {
        // local number is too long
        var parsed = new PhoneNumber("2345678888", {locale: "ko-KR"});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            subscriberNumber: "2345678888",
            invalid: true
        }, {locale: "ko-KR"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    
    testParseKRServiceCode: function(test) {
        var parsed = new PhoneNumber("030-12345678", {locale: "ko-KR"});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            serviceCode: "30",
            subscriberNumber: "12345678"
        }, {locale: "ko-KR"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    
    /*
    no vsc in Korea?
    testParseKRWithVSC: function(test) {
        var parsed = new PhoneNumber("14102012345678", {locale: "ko-KR"});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            vsc: "141",
            trunkAccess: "0",
            areaCode: "20",
            subscriberNumber: "12345678"
        }, {locale: "ko-KR"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    
    no personal numbering in Korea?
    testParseKRPersonalNumbering: function(test) {
        var parsed = new PhoneNumber("07012345678", {locale: "ko-KR"});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            serviceCode: "70",
            subscriberNumber: "12345678"
        }, {locale: "ko-KR"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    */
    
    testParseKRMobileNumber: function(test) {
        var parsed = new PhoneNumber("016-53412345", {locale: "ko-KR"});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            mobilePrefix: "16",
            subscriberNumber: "53412345"
        }, {locale: "ko-KR"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    
    testParseKRPlusIDDToUS: function(test) {
        var parsed = new PhoneNumber("+12028675309", {locale: "ko-KR"});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "1",
            areaCode: "202",
            subscriberNumber: "8675309"
        }, {locale: "ko-KR"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    
    testParseKRZerosIDDToUS: function(test) {
        var parsed = new PhoneNumber("00212028675309", {locale: "ko-KR"});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            iddPrefix: "002",
            countryCode: "1",
            areaCode: "202",
            subscriberNumber: "8675309"
        }, {locale: "ko-KR"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    
    testParseKRLongAreaCodeNoTrunk: function(test) {
        // this number uses an area code to start it, but without the trunk, we should
        // not recognize it as an area code
        var parsed = new PhoneNumber("212345678", {locale: "ko-KR"});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            subscriberNumber: "212345678",
            invalid: true
        }, {locale: "ko-KR"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    
    testParseKREmergencyNumber: function(test) {
        var parsed = new PhoneNumber("112", {locale: "ko-KR"});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            emergency: "112"
        }, {locale: "ko-KR"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseKREmergencyNumberPlus: function(test) {
        var parsed = new PhoneNumber("112112", {locale: "ko-KR"});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            emergency: "112",
            subscriberNumber: "112"
        }, {locale: "ko-KR"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    
    testParseKRPartial1: function(test) {
        var parsed = new PhoneNumber("0", {locale: "ko-KR"});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0"
        }, {locale: "ko-KR"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    
    testParseKRPartial2: function(test) {
        var parsed = new PhoneNumber("02", {locale: "ko-KR"});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "2"
        }, {locale: "ko-KR"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseKRPartial3: function(test) {
        var parsed = new PhoneNumber("029", {locale: "ko-KR"});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "2",
            subscriberNumber: "9"
        }, {locale: "ko-KR"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseKRPartial4: function(test) {
        var parsed = new PhoneNumber("0299", {locale: "ko-KR"});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "2",
            subscriberNumber: "99"
        }, {locale: "ko-KR"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseKRPartial5: function(test) {
        var parsed = new PhoneNumber("02999", {locale: "ko-KR"});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "2",
                subscriberNumber: "999"
        }, {locale: "ko-KR"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseKRPartial6: function(test) {
        var parsed = new PhoneNumber("029991", {locale: "ko-KR"});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "2",
            subscriberNumber: "9991"
        }, {locale: "ko-KR"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseKRPartial7: function(test) {
        var parsed = new PhoneNumber("0299912", {locale: "ko-KR"});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "2",
            subscriberNumber: "99912"
        }, {locale: "ko-KR"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseKRPartial8: function(test) {
        var parsed = new PhoneNumber("02999123", {locale: "ko-KR"});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "2",
            subscriberNumber: "999123"
        }, {locale: "ko-KR"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseKRPartial9: function(test) {
        var parsed = new PhoneNumber("029991234", {locale: "ko-KR"});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "2",
                subscriberNumber: "9991234"
        }, {locale: "ko-KR"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseKRPartial10: function(test) {
        var parsed = new PhoneNumber("0299912345", {locale: "ko-KR"});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "2",
                subscriberNumber: "99912345"
        }, {locale: "ko-KR"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    
    testParseKRWithUSMCC: function(test) {
        var parsed = new PhoneNumber("6153222313", {locale: "ko-KR", mcc: "316"});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            areaCode: "615",
            subscriberNumber: "3222313"
        }, {locale: "ko-US"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    
    testParseKRWithFRMCC: function(test) {
        var parsed = new PhoneNumber("6153222313", {locale: "ko-KR", mcc: "208"});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            subscriberNumber: "6153222313"
        }, {locale: "ko-FR"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    
    testParseKRWithMXMCC: function(test) {
        var parsed = new PhoneNumber("6153222313", {locale: "ko-KR", mcc: "334"});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            areaCode: "615",
            subscriberNumber: "3222313"
        }, {locale: "ko-MX"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    
    testParseKRWithDEMCC: function(test) {
        var parsed = new PhoneNumber("6153222313", {locale: "ko-KR", mcc: "262"});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            subscriberNumber: "6153222313"
        }, {locale: "ko-DE"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    
    testParseKRWithKRMCC: function(test) {
        var parsed = new PhoneNumber("6153222313", {locale: "ko-KR", mcc: "450"});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            subscriberNumber: "6153222313",
            invalid: true
        }, {locale: "ko-KR"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    
    testParseKRWithTrunkAccess: function(test) {
        var parsed = new PhoneNumber("00", {locale: "ko-KR"});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            subscriberNumber: "0"
        }, {locale: "ko-KR"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    
    testParseKRWithExtensionCharacter: function(test) {
        var parsed = new PhoneNumber("5551212,1234", {locale: "ko-KR"});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            subscriberNumber: "5551212",
            extension:",1234"
        }, {locale: "ko-KR"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    
    testParseKRWithExtensionCharacter2: function(test) {
        var parsed = new PhoneNumber("35850950777;12345", {locale: "ko-KR"});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            subscriberNumber: "35850950777",
            invalid:true,
            extension:";12345"
        }, {locale: "ko-KR"});
        
        test.ok(parsed.equals(expected));
        test.done();
    }
};