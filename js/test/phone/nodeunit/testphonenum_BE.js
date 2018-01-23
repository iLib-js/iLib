/*
 * phonenum_BE.js - Test parsing phone numbers in BE
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

module.exports.phonenum_BE = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseBEFull: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("038234567", {locale: "nl-BE"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "3",
            subscriberNumber: "8234567"
        }, {locale: "nl-BE"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseBEIgnoreFormatting: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("03-823-45-67", {locale: "nl-BE"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "3",
            subscriberNumber: "8234567"
        }, {locale: "nl-BE"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseBEIgnoreCrap: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("0@3!8$2^34(56_7", {locale: "nl-BE"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "3",
            subscriberNumber: "8234567"
        }, {locale: "nl-BE"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseBENoAreaCode: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("8234567", {locale: "nl-BE"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            subscriberNumber: "8234567"
        }, {locale: "nl-BE"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseBEPlusIDDToUS: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+12028675309", {locale: "nl-BE"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "1",
            areaCode: "202",
            subscriberNumber: "8675309"
        }, {locale: "nl-BE"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseBEZerosIDDToUS: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("0012028675309", {locale: "nl-BE"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            iddPrefix: "00",
            countryCode: "1",
            areaCode: "202",
            subscriberNumber: "8675309"
        }, {locale: "nl-BE"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseBELongAreaCodeNoTrunk: function(test) {
        test.expect(2);
        // this number uses an area code to start it, but without the trunk, we should
        // not recognize it as an area code
        var parsed = new PhoneNumber("71123456", {locale: "nl-BE"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            subscriberNumber: "71123456"
        }, {locale: "nl-BE"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseBELocalNumber: function(test) {
        test.expect(2);
        // this number uses an area code to start it, but without the trunk, we should
        // not recognize it as an area code
        var parsed = new PhoneNumber("82 34 56", {locale: "nl-BE"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            subscriberNumber: "823456"
        }, {locale: "nl-BE"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseBEPlusIDDToGB: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+442082345678", {locale: "nl-BE"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "44",
            areaCode: "20",
            subscriberNumber: "82345678"
        }, {locale: "nl-BE"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseBEZerosIDDToGB: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("00442082345678", {locale: "nl-BE"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            iddPrefix: "00",
            countryCode: "44",
            areaCode: "20",
            subscriberNumber: "82345678"
        }, {locale: "nl-BE"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseBEEmergencyNumber: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("112", {locale: "nl-BE"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
                emergency: "112"
        }, {locale: "nl-BE"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseBEEmergencyNumberPlus: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("112115", {locale: "nl-BE"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
                emergency: "112",
                subscriberNumber: "115"
        }, {locale: "nl-BE"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseBEMobileNumber: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("0492 823456", {locale: "nl-BE"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            mobilePrefix: "492",
            subscriberNumber: "823456"
        }, {locale: "nl-BE"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseBEInternational: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+32 3 823 45 67", {locale: "nl-BE"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "32",
            areaCode: "3",
            subscriberNumber: "8234567"
        }, {locale: "nl-BE"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseBEInternationalMobile: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+32 492 823 456", {locale: "nl-BE"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "32",
            mobilePrefix: "492",
            subscriberNumber: "823456"
        }, {locale: "nl-BE"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseBEService: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("0800 82345678", {locale: "nl-BE"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            serviceCode: "800",
            subscriberNumber: "82345678"
        }, {locale: "nl-BE"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseBEBlock: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("116116", {locale: "nl-BE"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            serviceCode: "116",
            subscriberNumber: "116"
        }, {locale: "nl-BE"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseBEPartial1: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("0", {locale: "nl-BE"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0"
        }, {locale: "nl-BE"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseBEPartial2: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("05", {locale: "nl-BE"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            subscriberNumber: "5"
        }, {locale: "nl-BE"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseBEPartial3: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("058", {locale: "nl-BE"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "58"
        }, {locale: "nl-BE"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseBEPartial4: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("0584", {locale: "nl-BE"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "58",
            subscriberNumber: "4"
        }, {locale: "nl-BE"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseBEPartial5: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("05844", {locale: "nl-BE"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "58",
            subscriberNumber: "44"
        }, {locale: "nl-BE"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseBEPartial6: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("058441", {locale: "nl-BE"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "58",
            subscriberNumber: "441"
        }, {locale: "nl-BE"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseBEPartial7: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("0584412", {locale: "nl-BE"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "58",
            subscriberNumber: "4412"
        }, {locale: "nl-BE"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseBEPartial8: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("05844123", {locale: "nl-BE"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "58",
            subscriberNumber: "44123"
        }, {locale: "nl-BE"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseBEPartial9: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("058441234", {locale: "nl-BE"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "58",
                subscriberNumber: "441234"
        }, {locale: "nl-BE"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseBEPartial10: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("0584412345", {locale: "nl-BE"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "58",
                subscriberNumber: "4412345"
        }, {locale: "nl-BE"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseBEPartial11: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("05844123456", {locale: "nl-BE"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "58",
                subscriberNumber: "44123456"
        }, {locale: "nl-BE"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    }
};