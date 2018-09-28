/*
 * phonenum_IE.js - Test parsing phone numbers in IE
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
if (typeof(ilib) === "undefined") {
    var ilib = require("../../lib/ilib.js");
}

module.exports.phonenum_IE = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseIEFull: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("0112345678", {locale: "en-IE"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "1",
            subscriberNumber: "12345678"
        }, {locale: "en-IE"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseIEFullLongAreaCode: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("040412345", {locale: "en-IE"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "404",
            subscriberNumber: "12345"
        }, {locale: "en-IE"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseIEIgnoreFormatting: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("(0404) 12-345", {locale: "en-IE"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "404",
            subscriberNumber: "12345"
        }, {locale: "en-IE"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseIEIgnoreCrap: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("0@11$23%45&678", {locale: "en-IE"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "1",
            subscriberNumber: "12345678"
        }, {locale: "en-IE"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseIENoAreaCode: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("82345678", {locale: "en-IE"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            subscriberNumber: "82345678"
        }, {locale: "en-IE"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseIELocalInvalidNumber: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("12345678", {locale: "en-IE"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            subscriberNumber: "12345678",
            invalid: true
        }, {locale: "en-IE"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testVSC: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("14282345678", {locale: "en-IE"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            vsc: "142",
            subscriberNumber: "82345678"
        }, {locale: "en-IE"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseIEPlusIDDToUS: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+12028675309", {locale: "en-IE"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "1",
            areaCode: "202",
            subscriberNumber: "8675309"
        }, {locale: "en-IE"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseIEZerosIDDToUS: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("0012028675309", {locale: "en-IE"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            iddPrefix: "00",
            countryCode: "1",
            areaCode: "202",
            subscriberNumber: "8675309"
        }, {locale: "en-IE"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseIELongAreaCodeNoTrunk: function(test) {
        test.expect(2);
        // this number uses an area code to start it, but without the trunk, we should
        // not recognize it as an area code
        var parsed = new PhoneNumber("404123456", {locale: "en-IE"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            subscriberNumber: "404123456"
        }, {locale: "en-IE"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseIELocalNumber: function(test) {
        test.expect(2);
        // this number uses an area code to start it, but without the trunk, we should
        // not recognize it as an area code
        var parsed = new PhoneNumber("82345678", {locale: "en-IE"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            subscriberNumber: "82345678"
        }, {locale: "en-IE"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseIEPlusIDDToGB: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+442012345678", {locale: "en-IE"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "44",
            areaCode: "20",
            subscriberNumber: "12345678"
        }, {locale: "en-IE"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseIEPlusIDDToIE: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+353 86 822 3689", {locale: "en-IE"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "353",
            mobilePrefix: "86",
            subscriberNumber: "8223689"
        }, {locale: "en-IE"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseIEZerosIDDToGB: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("00442012345678", {locale: "en-IE"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            iddPrefix: "00",
            countryCode: "44",
            areaCode: "20",
            subscriberNumber: "12345678"
        }, {locale: "en-IE"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseIEService: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("15308765432", {locale: "en-IE"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            serviceCode: "1530",
            subscriberNumber: "8765432"
        }, {locale: "en-IE"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseIEMobileNumber: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("0871234567", {locale: "en-IE"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            mobilePrefix: "87",
            subscriberNumber: "1234567"
        }, {locale: "en-IE"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseIEPartial1: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("0", {locale: "en-IE"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0"
        }, {locale: "en-IE"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseIEPartial2: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("04", {locale: "en-IE"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            subscriberNumber: "4"
        }, {locale: "en-IE"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseIEPartial3: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("040", {locale: "en-IE"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            subscriberNumber: "40"
        }, {locale: "en-IE"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseIEPartial4: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("0404", {locale: "en-IE"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "404"
        }, {locale: "en-IE"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseIEPartial5: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("04041", {locale: "en-IE"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "404",
                subscriberNumber: "1"
        }, {locale: "en-IE"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseIEPartial6: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("040412", {locale: "en-IE"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "404",
            subscriberNumber: "12"
        }, {locale: "en-IE"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseIEPartial7: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("0404123", {locale: "en-IE"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "404",
            subscriberNumber: "123"
        }, {locale: "en-IE"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseIEPartial8: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("04041234", {locale: "en-IE"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "404",
            subscriberNumber: "1234"
        }, {locale: "en-IE"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseIEPartial9: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("040412345", {locale: "en-IE"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "404",
                subscriberNumber: "12345"
        }, {locale: "en-IE"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    // for CFISH-5426
    testParseIEEmergencyNumber: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("999", {locale: "en-IE"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            emergency: "999"
        }, {locale: "en-IE"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    }
    
};
