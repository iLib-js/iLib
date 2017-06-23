/*
 * phonenum_MX.js - Test parsing phone numbers in MX
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

module.exports.phonenum_MX = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseMXFull: function(test) {
        var parsed = new PhoneNumber("6241234567", {locale: "es-MX"});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            areaCode: "624",
            subscriberNumber: "1234567"
        }, {locale: "es-MX"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseMXLocal: function(test) {
        var parsed = new PhoneNumber("62412345", {locale: "es-MX"});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            subscriberNumber: "62412345"
        }, {locale: "es-MX"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseMXIgnoreFormatting: function(test) {
        var parsed = new PhoneNumber("624-123-4567", {locale: "es-MX"});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            areaCode: "624",
            subscriberNumber: "1234567"
        }, {locale: "es-MX"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseMXIgnoreCrap: function(test) {
        var parsed = new PhoneNumber("62@4$1%2^3&45!67", {locale: "es-MX"});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            areaCode: "624",
            subscriberNumber: "1234567"
        }, {locale: "es-MX"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseMXPlusIDDToUS: function(test) {
        var parsed = new PhoneNumber("+12028675309", {locale: "es-MX"});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "1",
            areaCode: "202",
            subscriberNumber: "8675309"
        }, {locale: "es-MX"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseMXZerosIDDToUS: function(test) {
        var parsed = new PhoneNumber("0012028675309", {locale: "es-MX"});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            iddPrefix: "00",
            countryCode: "1",
            areaCode: "202",
            subscriberNumber: "8675309"
        }, {locale: "es-MX"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseMXPlusIDDToGB: function(test) {
        var parsed = new PhoneNumber("+442012345678", {locale: "es-MX"});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "44",
            areaCode: "20",
            subscriberNumber: "12345678"
        }, {locale: "es-MX"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseMXZerosIDDToGB: function(test) {
        var parsed = new PhoneNumber("00442012345678", {locale: "es-MX"});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            iddPrefix: "00",
            countryCode: "44",
            areaCode: "20",
            subscriberNumber: "12345678"
        }, {locale: "es-MX"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseMXMobileNumber: function(test) {
        var parsed = new PhoneNumber("019981234567", {locale: "es-MX"});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "01",
            areaCode: "998",
            subscriberNumber: "1234567"
        }, {locale: "es-MX"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseMXServiceNumber: function(test) {
        var parsed = new PhoneNumber("026241234567", {locale: "es-MX"});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            serviceCode: "02",
            subscriberNumber: "6241234567",
            invalid: true
        }, {locale: "es-MX"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseMXServiceNumber2: function(test) {
        var parsed = new PhoneNumber("8006241234567", {locale: "es-MX"});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            serviceCode: "800",
            subscriberNumber: "6241234567",
            invalid: true
        }, {locale: "es-MX"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseMXShortAreaCode: function(test) {
        var parsed = new PhoneNumber("5512345678", {locale: "es-MX"});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            areaCode: "55",
            subscriberNumber: "12345678"
        }, {locale: "es-MX"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseMXPartial1: function(test) {
        var parsed = new PhoneNumber("5", {locale: "es-MX"});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            subscriberNumber: "5"
        }, {locale: "es-MX"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseMXPartial2: function(test) {
        var parsed = new PhoneNumber("55", {locale: "es-MX"});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
                subscriberNumber: "55"
        }, {locale: "es-MX"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseMXPartial3: function(test) {
        var parsed = new PhoneNumber("551", {locale: "es-MX"});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            subscriberNumber: "551"
        }, {locale: "es-MX"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseMXPartial4: function(test) {
        var parsed = new PhoneNumber("5512", {locale: "es-MX"});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            subscriberNumber: "5512"
        }, {locale: "es-MX"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseMXPartial5: function(test) {
        var parsed = new PhoneNumber("55123", {locale: "es-MX"});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            subscriberNumber: "55123"
        }, {locale: "es-MX"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseMXPartial6: function(test) {
        var parsed = new PhoneNumber("551234", {locale: "es-MX"});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            subscriberNumber: "551234"
        }, {locale: "es-MX"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseMXPartial7: function(test) {
        var parsed = new PhoneNumber("5512345", {locale: "es-MX"});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            subscriberNumber: "5512345"
        }, {locale: "es-MX"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseMXPartial8: function(test) {
        var parsed = new PhoneNumber("55123456", {locale: "es-MX"});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            subscriberNumber: "55123456"
        }, {locale: "es-MX"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseMXPartial9: function(test) {
        var parsed = new PhoneNumber("551234567", {locale: "es-MX"});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
                areaCode: "55",
                subscriberNumber: "1234567"
        }, {locale: "es-MX"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseMXPartial10: function(test) {
        var parsed = new PhoneNumber("5512345678", {locale: "es-MX"});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
                areaCode: "55",
                subscriberNumber: "12345678"
        }, {locale: "es-MX"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseMXPartialTrunk0: function(test) {
        var parsed = new PhoneNumber("0", {locale: "es-MX"});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
                subscriberNumber: "0"
        }, {locale: "es-MX"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseMXPartialTrunk1: function(test) {
        var parsed = new PhoneNumber("01", {locale: "es-MX"});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
                trunkAccess: "01"
        }, {locale: "es-MX"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseMXPartialTrunk2: function(test) {
        var parsed = new PhoneNumber("015", {locale: "es-MX"});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
                trunkAccess: "01",
                subscriberNumber: "5"
        }, {locale: "es-MX"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseMXPartialTrunk3: function(test) {
        var parsed = new PhoneNumber("0155", {locale: "es-MX"});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
                trunkAccess: "01",
                areaCode: "55"
        }, {locale: "es-MX"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseMXPartialTrunk4: function(test) {
        var parsed = new PhoneNumber("01551", {locale: "es-MX"});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
                trunkAccess: "01",
                areaCode: "55",
                subscriberNumber: "1"
        }, {locale: "es-MX"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseMXPartialTrunk5: function(test) {
        var parsed = new PhoneNumber("015512", {locale: "es-MX"});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
                trunkAccess: "01",
                areaCode: "55",
                subscriberNumber: "12"
        }, {locale: "es-MX"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseMXPartialTrunk6: function(test) {
        var parsed = new PhoneNumber("0155123", {locale: "es-MX"});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
                trunkAccess: "01",
                areaCode: "55",
                subscriberNumber: "123"
        }, {locale: "es-MX"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseMXPartialTrunk7: function(test) {
        var parsed = new PhoneNumber("01551234", {locale: "es-MX"});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
                trunkAccess: "01",
                areaCode: "55",
                subscriberNumber: "1234"
        }, {locale: "es-MX"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseMXPartialTrunk8: function(test) {
        var parsed = new PhoneNumber("015512345", {locale: "es-MX"});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
                trunkAccess: "01",
                areaCode: "55",
                subscriberNumber: "12345"
        }, {locale: "es-MX"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseMXPartialTrunk9: function(test) {
        var parsed = new PhoneNumber("0155123456", {locale: "es-MX"});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
                trunkAccess: "01",
                areaCode: "55",
                subscriberNumber: "123456"
        }, {locale: "es-MX"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseMXPartialTrunk10: function(test) {
        var parsed = new PhoneNumber("01551234567", {locale: "es-MX"});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
                trunkAccess: "01",
                areaCode: "55",
                subscriberNumber: "1234567"
        }, {locale: "es-MX"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseMXPartialTrunk11: function(test) {
        var parsed = new PhoneNumber("015512345678", {locale: "es-MX"});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
                trunkAccess: "01",
                areaCode: "55",
                subscriberNumber: "12345678"
        }, {locale: "es-MX"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseMXWithUSMCC: function(test) {
        var parsed = new PhoneNumber("6153222313", {locale: "es-MX", mcc: "316"});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            areaCode: "615",
            subscriberNumber: "3222313"
        }, {locale: "es-US"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseMXWithFRMCC: function(test) {
        var parsed = new PhoneNumber("6153222313", {locale: "es-MX", mcc: "208"});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            subscriberNumber: "6153222313"
        }, {locale: "es-FR"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseMXWithMXMCC: function(test) {
        var parsed = new PhoneNumber("6153222313", {locale: "es-MX", mcc: "334"});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            areaCode: "615",
            subscriberNumber: "3222313"
        }, {locale: "es-MX"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseMXWithDEMCC: function(test) {
        var parsed = new PhoneNumber("6153222313", {locale: "es-MX", mcc: "262"});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            subscriberNumber: "6153222313"
        }, {locale: "es-DE"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    // for bug NOV-119557
    testParseMXTollFree: function(test) {
        var parsed = new PhoneNumber("01 800 022 0606", {locale: "es-MX"});
        test.expect(2);
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "01",
            serviceCode: "800",
            subscriberNumber: "0220606"
        }, {locale: "es-MX"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    }
    
};