/*
 * phonenum_TW.js - Test parsing phone numbers in TW
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

module.exports.phonenum_TW = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseTWFull: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("(039)606-5378", {locale: "zh-TW"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "39",
            subscriberNumber: "6065378"
        }, {locale: "zh-TW"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    
    testParseTWLocalNumber: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("345-6789", {locale: "zh-TW"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            subscriberNumber: "3456789"
        }, {locale: "zh-TW"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    
    testParseTWFullLongAreaCode: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("0458-345-6789", {locale: "zh-TW"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "458",
            subscriberNumber: "3456789"
        }, {locale: "zh-TW"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    
    testParseTWIgnoreFormatting: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("039-1234-5678", {locale: "zh-TW"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "39",
            subscriberNumber: "12345678"
        }, {locale: "zh-TW"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    
    testParseTWIgnoreCrap: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("$039@1234&5678-", {locale: "zh-TW"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "39",
            subscriberNumber: "12345678"
        }, {locale: "zh-TW"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    
    testParseTWNoAreaCode: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("82345678", {locale: "zh-TW"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            subscriberNumber: "82345678"
        }, {locale: "zh-TW"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    
    testParseTWInvalidLocalNumber: function(test) {
        test.expect(2);
        // local number is too long
        var parsed = new PhoneNumber("23456788889123", {locale: "zh-TW"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            subscriberNumber: "23456788889123",
            invalid: true
        }, {locale: "zh-TW"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    
    testParseTWServiceCode: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("0800-011-765", {locale: "zh-TW"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            serviceCode: "800",
            subscriberNumber: "011765"
        }, {locale: "zh-TW"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    
    testParseTWMobileNumber: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("0988-123-456", {locale: "zh-TW"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            mobilePrefix: "9",
            subscriberNumber: "88123456"
        }, {locale: "zh-TW"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    
    testParseTWPlusIDDToUS: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+12028675309", {locale: "zh-TW"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "1",
            areaCode: "202",
            subscriberNumber: "8675309"
        }, {locale: "zh-TW"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    
    testParseTWZerosIDDToUS: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("00212028675309", {locale: "zh-TW"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            iddPrefix: "002",
            countryCode: "1",
            areaCode: "202",
            subscriberNumber: "8675309"
        }, {locale: "zh-TW"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    
    testParseTWLongAreaCodeNoTrunk: function(test) {
        test.expect(2);
        // this number uses an area code to start it, but without the trunk, we should
        // not recognize it as an area code
        var parsed = new PhoneNumber("3912345678", {locale: "zh-TW"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            subscriberNumber: "3912345678"
        }, {locale: "zh-TW"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    
    testParseTWEmergencyNumber: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("110", {locale: "zh-TW"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            emergency: "110"
        }, {locale: "zh-TW"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseTWEmergencyNumberPlus: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("117171", {locale: "zh-TW"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            emergency: "117",
            subscriberNumber: "171"
        }, {locale: "zh-TW"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    
    testParseTWPartial1: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("0", {locale: "zh-TW"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0"
        }, {locale: "zh-TW"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    
    testParseTWPartial2: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("03", {locale: "zh-TW"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "3"
        }, {locale: "zh-TW"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseTWPartial3: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("039", {locale: "zh-TW"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "39"
        }, {locale: "zh-TW"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseTWPartial4: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("0391", {locale: "zh-TW"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "39",
            subscriberNumber: "1"
        }, {locale: "zh-TW"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseTWPartial5: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("03912", {locale: "zh-TW"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "39",
                subscriberNumber: "12"
        }, {locale: "zh-TW"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseTWPartial6: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("039123", {locale: "zh-TW"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "39",
            subscriberNumber: "123"
        }, {locale: "zh-TW"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseTWPartial7: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("0391234", {locale: "zh-TW"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "39",
            subscriberNumber: "1234"
        }, {locale: "zh-TW"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseTWPartial8: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("03912345", {locale: "zh-TW"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "39",
            subscriberNumber: "12345"
        }, {locale: "zh-TW"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseTWPartial9: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("039123456", {locale: "zh-TW"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "39",
                subscriberNumber: "123456"
        }, {locale: "zh-TW"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseTWPartial10: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("0391234567", {locale: "zh-TW"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "39",
                subscriberNumber: "1234567"
        }, {locale: "zh-TW"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    
    testParseTWPartial11: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("03912345678", {locale: "zh-TW"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "39",
                subscriberNumber: "12345678"
        }, {locale: "zh-TW"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    
    testParseTWPartial12: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("039123456789", {locale: "zh-TW"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "39",
                subscriberNumber: "123456789"
        }, {locale: "zh-TW"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    
    testParseTWWithUSMCC: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("6153222313", {locale: "zh-TW", mcc: "316"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            areaCode: "615",
            subscriberNumber: "3222313"
        }, {locale: "zh-US"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    
    testParseTWWithFRMCC: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("6153222313", {locale: "zh-TW", mcc: "208"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            subscriberNumber: "6153222313"
        }, {locale: "zh-FR"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    
    testParseTWWithMXMCC: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("6153222313", {locale: "zh-TW", mcc: "334"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            areaCode: "615",
            subscriberNumber: "3222313"
        }, {locale: "zh-MX"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    
    testParseTWWithDEMCC: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("6153222313", {locale: "zh-TW", mcc: "262"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            subscriberNumber: "6153222313"
        }, {locale: "zh-DE"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    
    testParseTWWithKRMCC: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("6153222313", {locale: "zh-TW", mcc: "450"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            subscriberNumber: "6153222313",
            invalid: true
        }, {locale: "zh-KR"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    
    testParseTWWithJPMCC: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("6153222313", {locale: "zh-TW", mcc: "440"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            subscriberNumber: "6153222313"
        }, {locale: "zh-JP"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    
    testParseTWWithTWMCC: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("6153222313", {locale: "zh-TW", mcc: "466"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            subscriberNumber: "6153222313"
        }, {locale: "zh-TW"});
        
        test.ok(parsed.equals(expected));
        test.done();
    }
};
