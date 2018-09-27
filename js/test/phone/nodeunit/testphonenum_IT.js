/*
 * phonenum_IT.js - Test parsing phone numbers in IT
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
if (typeof(ilib) === "undefined") {
    var ilib = require("../../../lib/ilib.js");
}

module.exports.phonenum_IT = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseITFull: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("06 1234 5678", {locale: "it-IT"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "6",
            subscriberNumber: "12345678"
        }, {locale: "it-IT"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseITIgnoreFormatting: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("(06) 1234 5678", {locale: "it-IT"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "6",
            subscriberNumber: "12345678"
        }, {locale: "it-IT"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseITIgnoreCrap: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("0@61$23%45&678", {locale: "it-IT"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "6",
            subscriberNumber: "12345678"
        }, {locale: "it-IT"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseITPlusIDDToUS: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+12028675309", {locale: "it-IT"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "1",
            areaCode: "202",
            subscriberNumber: "8675309"
        }, {locale: "it-IT"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseITZerosIDDToUS: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("0012028675309", {locale: "it-IT"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            iddPrefix: "00",
            countryCode: "1",
            areaCode: "202",
            subscriberNumber: "8675309"
        }, {locale: "it-IT"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseIDDToSanMarino: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+378 0549 123 456", {locale: "it-IT"});
        test.ok(typeof(parsed) !== "undefined");
        
        // San Marino should use the Italian parsing algorithm, so we can get the parts instead
        // of everything being in the subscriber number
        var expected = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "378",
            trunkAccess: "0",
            areaCode: "549",
            subscriberNumber: "123456"
        }, {locale: "it-IT"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseITPlusIDDToGB: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+442012345678", {locale: "it-IT"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "44",
            areaCode: "20",
            subscriberNumber: "12345678"
        }, {locale: "it-IT"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseITZerosIDDToGB: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("00442012345678", {locale: "it-IT"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            iddPrefix: "00",
            countryCode: "44",
            areaCode: "20",
            subscriberNumber: "12345678"
        }, {locale: "it-IT"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseITEmergencyNumber: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("112", {locale: "it-IT"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
                emergency: "112"
        }, {locale: "it-IT"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseITEmergencyNumberPlus: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("112115", {locale: "it-IT"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
                emergency: "112",
                subscriberNumber: "115"
        }, {locale: "it-IT"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseITMobileNumber: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("3991234567", {locale: "it-IT"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            mobilePrefix: "399",
            subscriberNumber: "1234567"
        }, {locale: "it-IT"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseITServiceNumber: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("7991234567", {locale: "it-IT"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            serviceCode: "799",
            subscriberNumber: "1234567"
        }, {locale: "it-IT"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseITNetServiceNumber: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("4345654343", {locale: "it-IT"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            serviceCode: "4",
            subscriberNumber: "345654343"
        }, {locale: "it-IT"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseITSpecialRateNumber: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("8991234567", {locale: "it-IT"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            serviceCode: "899",
            subscriberNumber: "1234567"
        }, {locale: "it-IT"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseITPartial1: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("0", {locale: "it-IT"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0"
        }, {locale: "it-IT"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseITPartial2: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("05", {locale: "it-IT"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            subscriberNumber: "5"
        }, {locale: "it-IT"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseITPartial3: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("057", {locale: "it-IT"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            subscriberNumber: "57"
        }, {locale: "it-IT"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseITPartial4: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("0577", {locale: "it-IT"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "577"
        }, {locale: "it-IT"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseITPartial5: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("0577 1", {locale: "it-IT"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "577",
                subscriberNumber: "1"
        }, {locale: "it-IT"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseITPartial6: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("0577 12", {locale: "it-IT"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "577",
            subscriberNumber: "12"
        }, {locale: "it-IT"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseITPartial7: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("0577 123", {locale: "it-IT"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "577",
            subscriberNumber: "123"
        }, {locale: "it-IT"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseITPartial8: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("0577 1234", {locale: "it-IT"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "577",
            subscriberNumber: "1234"
        }, {locale: "it-IT"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseITPartial9: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("0577 12345", {locale: "it-IT"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "577",
                subscriberNumber: "12345"
        }, {locale: "it-IT"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseITPartial10: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("0577 123456", {locale: "it-IT"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "577",
                subscriberNumber: "123456"
        }, {locale: "it-IT"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    // for bug NOV-115337
    testParseITIntlToMobile: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+3939012345678", {locale: "it-IT"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
                iddPrefix: "+",
                countryCode: "39",
                mobilePrefix: "390",
                subscriberNumber: "12345678"
        }, {locale: "it-IT"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseITIntlToAreaCode: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+3903912345678", {locale: "it-IT"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
                iddPrefix: "+",
                countryCode: "39",
                trunkAccess: "0",
                areaCode: "39",
                subscriberNumber: "12345678"
        }, {locale: "it-IT"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    }
    
};
