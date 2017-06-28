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
 * See the License for the specific language governing permissions and
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

module.exports.testaddress_GB = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAddressGBNormal: function(test) {
        var parsedAddress = new Address("Belgrave House\n76 Buckingham Palace Road\nLondon SW1W 9TQ\nUnited Kingdom", {locale: 'en-GB'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Belgrave House, 76 Buckingham Palace Road");
        test.equal(parsedAddress.locality, "London");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "SW1W 9TQ");
        test.equal(parsedAddress.country, "United Kingdom");
        test.equal(parsedAddress.countryCode, "GB");
        test.done();
    },
    
    testParseAddressGBNoZip: function(test) {
        var parsedAddress = new Address("Peter House\nOxford Street\nManchester", {locale: 'en-GB'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Peter House, Oxford Street");
        test.equal(parsedAddress.locality, "Manchester");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "GB");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    
    testParseAddressGBNoCountry: function(test) {
        var parsedAddress = new Address("88 Wood Street\nLondon\nEC2V 7QT", {locale: 'en-GB'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "88 Wood Street");
        test.equal(parsedAddress.locality, "London");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "EC2V 7QT");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "GB");
        test.done();
    },
    
    testParseAddressGBManyLines: function(test) {
        var parsedAddress = new Address("2 Kelvin Close\nBirchwood Science Park North\nNorth Risley\nWarrington\nCheshire\nWA3 7PB\nUK", {locale: 'en-GB'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "2 Kelvin Close, Birchwood Science Park North, North Risley, Warrington");
        test.equal(parsedAddress.locality, "Cheshire");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "WA3 7PB");
        test.equal(parsedAddress.country, "UK");
        test.equal(parsedAddress.countryCode, "GB");
        test.done();
    },
    
    testParseAddressGBOneLine: function(test) {
        var parsedAddress = new Address("Amen Corner, Cain Road, Bracknell, Berkshire, RG12 1HN, England", {locale: 'en-GB'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Amen Corner, Cain Road, Bracknell");
        test.equal(parsedAddress.locality, "Berkshire");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "RG12 1HN");
        test.equal(parsedAddress.country, "England");
        test.equal(parsedAddress.countryCode, "GB");
        test.done();
    },
    
    testParseAddressGBSuperfluousWhitespace: function(test) {
        var parsedAddress = new Address("\t\t\tAmen Corner\n\t\t\tCain Road, \t\t\t\r\r Bracknell, \n \r \tBerkshire, \n\t\nRG12 1HN\t\n\t England\n\n\n", {locale: 'en-GB'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Amen Corner, Cain Road, Bracknell");
        test.equal(parsedAddress.locality, "Berkshire");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "RG12 1HN");
        test.equal(parsedAddress.country, "England");
        test.equal(parsedAddress.countryCode, "GB");
        test.done();
    },
    
    testParseAddressGBNoDelimiters: function(test) {
        var parsedAddress = new Address("Amen Corner Cain Road Bracknell Berkshire RG12 1HN England", {locale: 'en-GB'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Amen Corner Cain Road Bracknell");
        test.equal(parsedAddress.locality, "Berkshire");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "RG12 1HN");
        test.equal(parsedAddress.country, "England");
        test.equal(parsedAddress.countryCode, "GB");
        test.done();
    },
    
    testParseAddressGBFromDE: function(test) {
        var parsedAddress = new Address("Belgrave House\n76 Buckingham Palace Road\nLondon SW1W 9TQ\nVereinigtes Königreich", {locale: 'de-DE'});
        
        // the country name is in German because this address is for a contact in a German database
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Belgrave House, 76 Buckingham Palace Road");
        test.equal(parsedAddress.locality, "London");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "SW1W 9TQ");
        test.equal(parsedAddress.country, "Vereinigtes Königreich");
        test.equal(parsedAddress.countryCode, "GB");
        test.done();
    },
    
    testFormatAddressGB: function(test) {
        var parsedAddress = new Address({
            streetAddress: "Belgrave House, 76 Buckingham Palace Road",
            locality: "London",
            postalCode: "SW1W 9TQ",
            country: "Old Blighty",
            countryCode: "GB"
        }, {locale: 'en-GB'});
        
        var expected = "Belgrave House, 76 Buckingham Palace Road\nLondon\nSW1W 9TQ\nOld Blighty";
        var formatter = new AddressFmt({locale: 'en-GB'});
        test.expect(1);
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressGBFromDE: function(test) {
        var parsedAddress = new Address({
            streetAddress: "Belgrave House, 76 Buckingham Palace Road",
            locality: "London",
            postalCode: "SW1W 9TQ",
            country: "Old Blighty",
            countryCode: "GB"
        }, {locale: 'de-DE'});
        
        var expected = "Belgrave House, 76 Buckingham Palace Road\nLondon\nSW1W 9TQ\nOld Blighty";
        var formatter = new AddressFmt({locale: 'de-DE'});
        test.expect(1);
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
    
};