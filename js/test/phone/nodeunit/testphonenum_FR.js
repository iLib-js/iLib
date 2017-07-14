/*
 * phonenum_FR.js - Test parsing phone numbers in FR
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

module.exports.phonenum_FR = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseFRFull: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("0112345678", {locale: "fr-FR"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "1",
            subscriberNumber: "12345678"
        }, {locale: "fr-FR"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseFRIgnoreFormatting: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("(01) 12 34 56 78", {locale: "fr-FR"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "1",
            subscriberNumber: "12345678"
        }, {locale: "fr-FR"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseFRIgnoreCrap: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("0@11$23%45&678", {locale: "fr-FR"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "1",
            subscriberNumber: "12345678"
        }, {locale: "fr-FR"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseFRNoAreaCode: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("12 34 56 78", {locale: "fr-FR"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            subscriberNumber: "12345678"
        }, {locale: "fr-FR"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseFRPlusIDDToUS: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+12028675309", {locale: "fr-FR"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "1",
            areaCode: "202",
            subscriberNumber: "8675309"
        }, {locale: "fr-FR"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseFRIDDToIEMobile: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+353 86 8223689", {locale: "fr-FR"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "353",
            mobilePrefix: "86",
            subscriberNumber: "8223689"
        }, {locale: "fr-FR"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    
    testParseFRZerosIDDToUS: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("0012028675309", {locale: "fr-FR"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            iddPrefix: "00",
            countryCode: "1",
            areaCode: "202",
            subscriberNumber: "8675309"
        }, {locale: "fr-FR"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseFRLongAreaCodeNoTrunk: function(test) {
        test.expect(2);
        // this number uses an area code to start it, but without the trunk, we should
        // not recognize it as an area code
        var parsed = new PhoneNumber("1 23 45 67 89 00", {locale: "fr-FR"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            subscriberNumber: "12345678900"
        }, {locale: "fr-FR"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseFRLocalNumber: function(test) {
        test.expect(2);
        // this number uses an area code to start it, but without the trunk, we should
        // not recognize it as an area code
        var parsed = new PhoneNumber("12345678", {locale: "fr-FR"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            subscriberNumber: "12345678"
        }, {locale: "fr-FR"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseFRPlusIDDToGB: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+442012345678", {locale: "fr-FR"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "44",
            areaCode: "20",
            subscriberNumber: "12345678"
        }, {locale: "fr-FR"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseFRZerosIDDToGB: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("00442012345678", {locale: "fr-FR"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            iddPrefix: "00",
            countryCode: "44",
            areaCode: "20",
            subscriberNumber: "12345678"
        }, {locale: "fr-FR"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseFRDepartments: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("0590 123 456", {locale: "fr-FR"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            serviceCode: "5",
            subscriberNumber: "90123456"
        }, {locale: "fr-FR"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseFRInternationalToDepartments: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+33 590 123 456", {locale: "fr-FR"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "33",
            serviceCode: "5",
            subscriberNumber: "90123456"
        }, {locale: "fr-FR"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseFRMobileNumber: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("0712345678", {locale: "fr-FR"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            mobilePrefix: "7",
            subscriberNumber: "12345678"
        }, {locale: "fr-FR"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseFRPartial1: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("0", {locale: "fr-FR"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0"
        }, {locale: "fr-FR"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseFRPartial2: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("05", {locale: "fr-FR"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "5"
        }, {locale: "fr-FR"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseFRPartial3: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("051", {locale: "fr-FR"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "5",
            subscriberNumber: "1"
        }, {locale: "fr-FR"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseFRPartial4: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("0512", {locale: "fr-FR"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "5",
            subscriberNumber: "12"
        }, {locale: "fr-FR"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseFRPartial5: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("05123", {locale: "fr-FR"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "5",
            subscriberNumber: "123"
        }, {locale: "fr-FR"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseFRPartial6: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("051234", {locale: "fr-FR"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "5",
            subscriberNumber: "1234"
        }, {locale: "fr-FR"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseFRPartial7: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("0512345", {locale: "fr-FR"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "5",
            subscriberNumber: "12345"
        }, {locale: "fr-FR"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseFRPartial8: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("05123456", {locale: "fr-FR"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "5",
            subscriberNumber: "123456"
        }, {locale: "fr-FR"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseFRPartial9: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("051234567", {locale: "fr-FR"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "5",
                subscriberNumber: "1234567"
        }, {locale: "fr-FR"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseFRPartial10: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("0512345678", {locale: "fr-FR"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "5",
                subscriberNumber: "12345678"
        }, {locale: "fr-FR"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    
    // for NOV-113777
    testParseFRLocalNumber: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("41551735", {locale: "fr-FR"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            subscriberNumber: "41551735"
        }, {locale: "fr-FR"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    }
    
};