/*
 * phonenum_DE.js - Test parsing phone numbers in DE
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

module.exports.phonenum_DE = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseDEFull: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("02360123456", {locale: "de-DE"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "2360",
            subscriberNumber: "123456"
        }, {locale: "de-DE"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    
    testParseDEIgnoreFormatting: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("02360/ 123456", {locale: "de-DE"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "2360",
            subscriberNumber: "123456"
        }, {locale: "de-DE"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    
    testParseDEIgnoreCrap: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("0@23!60$12^34(56", {locale: "de-DE"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "2360",
            subscriberNumber: "123456"
        }, {locale: "de-DE"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    
    testParseDENoAreaCode: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("8234 5678", {locale: "de-DE"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            subscriberNumber: "82345678"
        }, {locale: "de-DE"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    
    testParseDEPlusIDDToUS: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+12028675309", {locale: "de-DE"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "1",
            areaCode: "202",
            subscriberNumber: "8675309"
        }, {locale: "de-DE"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    
    testParseDEZerosIDDToUS: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("0012028675309", {locale: "de-DE"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            iddPrefix: "00",
            countryCode: "1",
            areaCode: "202",
            subscriberNumber: "8675309"
        }, {locale: "de-DE"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    
    testParseDEIDDToIEMobile: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+353 86 8223689", {locale: "de-DE"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "353",
            mobilePrefix: "86",
            subscriberNumber: "8223689"
        }, {locale: "de-DE"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    
    testParseDELongAreaCodeNoTrunk: function(test) {
        test.expect(2);
        // this number uses an area code to start it, but without the trunk, we should
        // not recognize it as an area code
        var parsed = new PhoneNumber("2360/ 123456", {locale: "de-DE"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            subscriberNumber: "2360123456"
        }, {locale: "de-DE"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    
    testParseDELocalNumber: function(test) {
        test.expect(2);
        // this number uses an area code to start it, but without the trunk, we should
        // not recognize it as an area code
        var parsed = new PhoneNumber("723 456", {locale: "de-DE"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            subscriberNumber: "723456"
        }, {locale: "de-DE"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    
    testParseDEInvalidLocalNumber: function(test) {
        test.expect(2);
        // this number uses an area code to start it, but without the trunk, we should
        // not recognize it as an area code
        var parsed = new PhoneNumber("123 456", {locale: "de-DE"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            subscriberNumber: "123456",
            invalid: true
        }, {locale: "de-DE"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    
    testParseDELocalWithPauseChars: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("4156568w1234", {locale: "de-DE"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            subscriberNumber: "4156568",
            extension: "w1234"
        }, {locale: "de-DE"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    
    testParseDELDWithPauseChars: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("02360/ 123456w1234", {locale: "de-DE"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "2360",
            subscriberNumber: "123456",
            extension: "w1234"
        }, {locale: "de-DE"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    
    testParseDEPlusIDDToGB: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("+442012345678", {locale: "de-DE"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            iddPrefix: "+",
            countryCode: "44",
            areaCode: "20",
            subscriberNumber: "12345678"
        }, {locale: "de-DE"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    
    testParseDEZerosIDDToGB: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("00442012345678", {locale: "de-DE"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            iddPrefix: "00",
            countryCode: "44",
            areaCode: "20",
            subscriberNumber: "12345678"
        }, {locale: "de-DE"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    
    testParseDEEmergencyNumber: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("112", {locale: "de-DE"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
                emergency: "112"
        }, {locale: "de-DE"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseDEEmergencyNumberPlus: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("19222115", {locale: "de-DE"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
                emergency: "19222",
                subscriberNumber: "115"
        }, {locale: "de-DE"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    
    testParseDEMobileNumber: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("016512345678", {locale: "de-DE"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            mobilePrefix: "165",
            subscriberNumber: "12345678"
        }, {locale: "de-DE"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseDEDialAround: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("01032 2360/ 123456", {locale: "de-DE"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            cic: "1032",
            areaCode: "2360",
            subscriberNumber: "123456"
        }, {locale: "de-DE"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseDEDialAroundLong: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("010032 2360/ 123456", {locale: "de-DE"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            cic: "10032",
            areaCode: "2360",
            subscriberNumber: "123456"
        }, {locale: "de-DE"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseDEService: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("01169 123/45678", {locale: "de-DE"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            serviceCode: "11",
            subscriberNumber: "6912345678"
        }, {locale: "de-DE"});
        
        test.ok(parsed.equals(expected));
        test.done();
    },
    testParseDEBlock: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("116116", {locale: "de-DE"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            serviceCode: "116116"
        }, {locale: "de-DE"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseDEInternetDialup: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("01925 87654321", {locale: "de-DE"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            serviceCode: "192",
            subscriberNumber: "587654321"
        }, {locale: "de-DE"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseDEPartial1: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("0", {locale: "de-DE"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0"
        }, {locale: "de-DE"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    
    testParseDEPartial2: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("05", {locale: "de-DE"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            subscriberNumber: "5"
        }, {locale: "de-DE"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseDEPartial3: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("058", {locale: "de-DE"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            subscriberNumber: "58"
        }, {locale: "de-DE"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseDEPartial4: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("0584", {locale: "de-DE"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            subscriberNumber: "584"
        }, {locale: "de-DE"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseDEPartial5: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("05844", {locale: "de-DE"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "5844"
        }, {locale: "de-DE"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseDEPartial6: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("058441", {locale: "de-DE"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "5844",
            subscriberNumber: "1"
        }, {locale: "de-DE"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseDEPartial7: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("0584412", {locale: "de-DE"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "5844",
            subscriberNumber: "12"
        }, {locale: "de-DE"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseDEPartial8: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("05844123", {locale: "de-DE"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
            trunkAccess: "0",
            areaCode: "5844",
            subscriberNumber: "123"
        }, {locale: "de-DE"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseDEPartial9: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("058441234", {locale: "de-DE"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "5844",
                subscriberNumber: "1234"
        }, {locale: "de-DE"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseDEPartial10: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("0584412345", {locale: "de-DE"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "5844",
                subscriberNumber: "12345"
        }, {locale: "de-DE"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    },
    testParseDEPartial11: function(test) {
        test.expect(2);
        var parsed = new PhoneNumber("05844123456", {locale: "de-DE"});
        test.ok(typeof(parsed) !== "undefined");
        
        var expected = new PhoneNumber({
                trunkAccess: "0",
                areaCode: "5844",
                subscriberNumber: "123456"
        }, {locale: "de-DE"});
        
        test.ok(parsed.equals(expected));
        test.done();
        
    }
};
