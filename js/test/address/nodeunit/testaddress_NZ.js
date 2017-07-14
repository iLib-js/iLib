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

module.exports.testaddress_NZ = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAddressNZNormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("PO Box 10362\nWellington 6143\nNew Zealand", {locale: 'en-NZ'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "PO Box 10362");
        test.equal(parsedAddress.locality, "Wellington");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "6143");
        test.equal(parsedAddress.country, "New Zealand");
        test.equal(parsedAddress.countryCode, "NZ");
        test.done();
    },
    
    testParseAddressNZNoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("23 Kate Sheppard Place,\nThorndon\nWellington\nNew Zealand", {locale: 'en-NZ'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "23 Kate Sheppard Place, Thorndon");
        test.equal(parsedAddress.locality, "Wellington");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.country, "New Zealand");
        test.equal(parsedAddress.countryCode, "NZ");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    
    testParseAddressNZNoCountry: function(test) {
        test.expect(7);
        var parsedAddress = new Address("45a Clevedon-Takanini Rd\nArdmore\nAuckland 2582", {locale: 'en-NZ'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "45a Clevedon-Takanini Rd, Ardmore");
        test.equal(parsedAddress.locality, "Auckland");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "2582");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "NZ");
        test.done();
    },
    
    testParseAddressNZManyLines: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Level 6\nTower Centre\n45 Queen Street\nAuckland\n1010\nNew Zealand\n\n\n", {locale: 'en-NZ'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Level 6, Tower Centre, 45 Queen Street");
        test.equal(parsedAddress.locality, "Auckland");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "1010");
        test.equal(parsedAddress.country, "New Zealand");
        test.equal(parsedAddress.countryCode, "NZ");
        test.done();
    },
    
    testParseAddressNZOneLine: function(test) {
        test.expect(7);
        var parsedAddress = new Address("70 Falsgrave St, Waltham, Christchurch 8011, New Zealand", {locale: 'en-NZ'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "70 Falsgrave St, Waltham");
        test.equal(parsedAddress.locality, "Christchurch");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "8011");
        test.equal(parsedAddress.country, "New Zealand");
        test.equal(parsedAddress.countryCode, "NZ");
        test.done();
    },
    
    testParseAddressNZSuperfluousWhitespace: function(test) {
        test.expect(7);
        var parsedAddress = new Address("\t\t\t29b Bolt Rd\n\n\r\r\t\n   Tahuna\n\t\r\rNelson\r5678\r\r\n\r\n\tNew\tZealand\n\n\n", {locale: 'en-NZ'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "29b Bolt Rd, Tahuna");
        test.equal(parsedAddress.locality, "Nelson");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "5678");
        test.equal(parsedAddress.country, "New Zealand");
        test.equal(parsedAddress.countryCode, "NZ");
        test.done();
    },
    
    testParseAddressNZNoDelimiters: function(test) {
        test.expect(7);
        var parsedAddress = new Address("70 Falsgrave St Waltham Christchurch 8011 New Zealand", {locale: 'en-NZ'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "70 Falsgrave St Waltham");
        test.equal(parsedAddress.locality, "Christchurch");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "8011");
        test.equal(parsedAddress.country, "New Zealand");
        test.equal(parsedAddress.countryCode, "NZ");
        test.done();
    },
    
    testParseAddressNZFromUS: function(test) {
        test.expect(7);
        var parsedAddress = new Address("70 Falsgrave St\nWaltham\nChristchurch 8011\nNew Zealand", {locale: 'en-US'});
        
        // the country name is in English because this address is for a contact in a US database
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "70 Falsgrave St, Waltham");
        test.equal(parsedAddress.locality, "Christchurch");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "8011");
        test.equal(parsedAddress.country, "New Zealand");
        test.equal(parsedAddress.countryCode, "NZ");
        test.done();
    },
    
    testFormatAddressNZ: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "70 Falsgrave St, Waltham",
            locality: "Christchurch",
            postalCode: "8011",
            country: "New Zealand",
            countryCode: "NZ"
        }, {locale: 'en-NZ'});
        
        var expected = "70 Falsgrave St, Waltham\nChristchurch 8011\nNew Zealand";
        var formatter = new AddressFmt({locale: 'en-NZ'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressNZFromUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "70 Falsgrave St, Waltham",
            locality: "Christchurch",
            postalCode: "8011",
            country: "New Zealand",
            countryCode: "NZ"
        }, {locale: 'en-US'});
        
        var expected = "70 Falsgrave St, Waltham\nChristchurch 8011\nNew Zealand";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
    
};