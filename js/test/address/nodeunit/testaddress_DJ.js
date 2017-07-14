
/*
 * testaddress.js - test the address parsing and formatting routines
 * 
 * Copyright © 2013-2015,2017, JEDLSoft
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
 * See the License for the Specific language governing permissions and
 * limitations under the License.
 */

if (typeof(Address) === "undefined") {
    var Address = require("../../../lib/Address.js");
}
if (typeof(AddressFmt) === "undefined") {
    var AddressFmt = require("../../../lib/AddressFmt.js");
}


if (typeof(ilib) === "undefined") {
    var ilib = require("../../..");
}

module.exports.testaddress_DJ = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAddressDJFRNormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Mr. Farah Ismaël, BP 32, DJIBOUTI, DJIBOUTI", {locale: 'fr-DJ'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Mr. Farah Ismaël, BP 32");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "DJIBOUTI");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "DJIBOUTI");
        test.equal(parsedAddress.countryCode, "DJ");
        test.done();
    },
    
    testParseAddressDJFRNoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Mr. Farah Ismaël, BP 32, DJIBOUTI, DJIBOUTI", {locale: 'fr-DJ'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Mr. Farah Ismaël, BP 32");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "DJIBOUTI");
        test.equal(parsedAddress.country, "DJIBOUTI");
        test.equal(parsedAddress.countryCode, "DJ");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    
    testParseAddressDJFRManyLines: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Mr. Farah Ismaël\nBP 32\nDJIBOUTI\n DJIBOUTI", {locale: 'fr-DJ'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Mr. Farah Ismaël, BP 32");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "DJIBOUTI");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "DJIBOUTI");
        test.equal(parsedAddress.countryCode, "DJ");
        test.done();
    },
    
    testParseAddressDJFROneLine: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Mr. Farah Ismaël, BP 32,DJIBOUTI, DJIBOUTI", {locale: 'fr-DJ'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Mr. Farah Ismaël, BP 32");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "DJIBOUTI");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "DJIBOUTI");
        test.equal(parsedAddress.countryCode, "DJ");
        test.done();
    },
    
    testParseAddressDJFRSuperfluousWhitespace: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Mr. Farah Ismaël \n BP 32   \n\t\n DJIBOUTI\t\n\n  DJIBOUTI  \n  \t\t\t", {locale: 'fr-DJ'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Mr. Farah Ismaël, BP 32");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "DJIBOUTI");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "DJIBOUTI");
        test.equal(parsedAddress.countryCode, "DJ");
        test.done();
    },
    
    testParseAddressDJFRNoDelimiters: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Mr. Farah Ismaël 2  BP 32 DJIBOUTI  DJIBOUTI", {locale: 'fr-DJ'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Mr. Farah Ismaël 2 BP 32");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "DJIBOUTI");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "DJIBOUTI");
        test.equal(parsedAddress.countryCode, "DJ");
        test.done();
    },
    
    testParseAddressDJFRSpecialChars: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Mr. Farah Ismaël,BP 32,DJIBOUTI, DJIBOUTI", {locale: 'fr-DJ'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Mr. Farah Ismaël, BP 32");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "DJIBOUTI");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "DJIBOUTI");
        test.equal(parsedAddress.countryCode, "DJ");
        test.done();
    },
    
    testParseAddressDJFRFromUS: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Mr. Farah Ismaël,BP 32,DJIBOUTI, DJIBOUTI", {locale: 'en-US'});
        
        // the country name is in English because this address is for a contact in a US database
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Mr. Farah Ismaël, BP 32");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "DJIBOUTI");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "DJIBOUTI");
        test.equal(parsedAddress.countryCode, "DJ");
        test.done();
    },
    
    testFormatAddressDJFR: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Mr. Farah Ismaël\nBP 32",
            locality: "DJIBOUTI",
            country: " DJIBOUTI",
            countryCode: "DJ"
        }, {locale: 'fr-DJ'});
        
        var expected = "Mr. Farah Ismaël\nBP 32\nDJIBOUTI\nDJIBOUTI";
        var formatter = new AddressFmt({locale: 'fr-DJ'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressDJFRFromUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Mr. Farah Ismaël\nBP 32",
            locality: "DJIBOUTI",
            country: " DJIBOUTI",
            countryCode: "DJ"
        }, {locale: 'en-US'});
        
        var expected = "Mr. Farah Ismaël\nBP 32\nDJIBOUTI\nDJIBOUTI";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    
    testParseAddressDJARNormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("السيد فرح إسماعيل, جيبوتي, جيبوتي", {locale: 'ar-DJ'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "السيد فرح إسماعيل");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "جيبوتي");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "جيبوتي");
        test.equal(parsedAddress.countryCode, "DJ");
        test.done();
    },
    
    testParseAddressDJARNoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("السيد فرح إسماعيل, جيبوتي, جيبوتي", {locale: 'ar-DJ'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "السيد فرح إسماعيل");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "جيبوتي");
        test.equal(parsedAddress.country, "جيبوتي");
        test.equal(parsedAddress.countryCode, "DJ");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    
    testParseAddressDJARManyLines: function(test) {
        test.expect(7);
        var parsedAddress = new Address("السيد فرح إسماعيل\nجيبوتي\n جيبوتي", {locale: 'ar-DJ'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "السيد فرح إسماعيل");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "جيبوتي");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "جيبوتي");
        test.equal(parsedAddress.countryCode, "DJ");
        test.done();
    },
    
    testParseAddressDJAROneLine: function(test) {
        test.expect(7);
        var parsedAddress = new Address("السيد فرح إسماعيل,جيبوتي, جيبوتي", {locale: 'ar-DJ'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "السيد فرح إسماعيل");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "جيبوتي");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "جيبوتي");
        test.equal(parsedAddress.countryCode, "DJ");
        test.done();
    },
    
    testParseAddressDJARSuperfluousWhitespace: function(test) {
        test.expect(7);
        var parsedAddress = new Address("السيد فرح إسماعيل   \n\t\n جيبوتي\t\n\n  جيبوتي  \n  \t\t\t", {locale: 'ar-DJ'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "السيد فرح إسماعيل");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "جيبوتي");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "جيبوتي");
        test.equal(parsedAddress.countryCode, "DJ");
        test.done();
    },
    
    testParseAddressDJARNoDelimiters: function(test) {
        test.expect(7);
        var parsedAddress = new Address("السيد فرح إسماعيل  ٢ شارع الاستقلال جيبوتي  جيبوتي", {locale: 'ar-DJ'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "السيد فرح إسماعيل ٢ شارع الاستقلال");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "جيبوتي");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "جيبوتي");
        test.equal(parsedAddress.countryCode, "DJ");
        test.done();
    },
    
    testParseAddressDJARSpecialChars: function(test) {
        test.expect(7);
        var parsedAddress = new Address("السيد فرح إسماعيل,جيبوتي, جيبوتي", {locale: 'ar-DJ'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "السيد فرح إسماعيل");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "جيبوتي");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "جيبوتي");
        test.equal(parsedAddress.countryCode, "DJ");
        test.done();
    },
    
    testParseAddressDJARFromUS: function(test) {
        test.expect(7);
        var parsedAddress = new Address("السيد فرح إسماعيل,جيبوتي, DJIBOUTI", {locale: 'en-US'});
        
        // the country name is in English because this address is for a contact in a US database
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "السيد فرح إسماعيل");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "جيبوتي");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "DJIBOUTI");
        test.equal(parsedAddress.countryCode, "DJ");
        test.done();
    },
    
    testFormatARAddress: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "السيد فرح إسماعيل",
            locality: "جيبوتي",
            country: " جيبوتي",
            countryCode: "DJ"
        }, {locale: 'ar-DJ'});
        
        var expected = "السيد فرح إسماعيل\nجيبوتي\nجيبوتي";
        var formatter = new AddressFmt({locale: 'ar-DJ'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressDJARFromUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "السيد فرح إسماعيل",
            locality: "جيبوتي",
            country: "DJIBOUTI",
            countryCode: "DJ"
        }, {locale: 'en-US'});
        
        var expected = "السيد فرح إسماعيل\nجيبوتي\nDJIBOUTI";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
    
};