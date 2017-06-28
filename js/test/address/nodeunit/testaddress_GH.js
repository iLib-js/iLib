/*
 * testaddress_GH.js - test the address parsing and formatting routines
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

module.exports.testaddress_GH = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAddressGHNormal: function(test) {
        var parsedAddress = new Address("Mr. John Mensah P.O. Box 1234\nACCRA\nGHANA", {locale: 'en-GH'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Mr. John Mensah P.O. Box 1234");
        test.equal(parsedAddress.locality, "ACCRA");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "GHANA");
        test.equal(parsedAddress.countryCode, "GH");
        test.done();
    },
    
    testParseAddressGHNoZip: function(test) {
        var parsedAddress = new Address("Mr. John Mensah P.O. Box 1234\nACCRA\nGHANA", {locale: 'en-GH'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Mr. John Mensah P.O. Box 1234");
        test.equal(parsedAddress.locality, "ACCRA");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.country, "GHANA");
        test.equal(parsedAddress.countryCode, "GH");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    
    testParseAddressGHNoCountry: function(test) {
        var parsedAddress = new Address("Mr. John Mensah P.O. Box 1234\nACCRA", {locale: 'en-GH'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Mr. John Mensah P.O. Box 1234");
        test.equal(parsedAddress.locality, "ACCRA");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "GH");
        test.done();
    },
    
    testParseAddressGHManyLines: function(test) {
        var parsedAddress = new Address("Mr. John Mensah\nP.O. Box 1234\nACCRA\nGHANA", {locale: 'en-GH'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
          test.equal(parsedAddress.streetAddress, "Mr. John Mensah, P.O. Box 1234");
        test.equal(parsedAddress.locality, "ACCRA");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "GHANA");
        test.equal(parsedAddress.countryCode, "GH");
        test.done();
    },
    
    testParseAddressGHOneLine: function(test) {
        var parsedAddress = new Address("Mr. John Mensah , P.O. Box 1234 , ACCRA , GHANA", {locale: 'en-GH'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
          test.equal(parsedAddress.streetAddress, "Mr. John Mensah, P.O. Box 1234");
        test.equal(parsedAddress.locality, "ACCRA");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "GHANA");
        test.equal(parsedAddress.countryCode, "GH");
        test.done();
    },
    
    testParseAddressGHSuperfluousWhitespace: function(test) {
        var parsedAddress = new Address("Mr. John Mensah\n\n\t\r\t\t\rP.O. Box 1234\r\r\n\nACCRA\t\r\n\t\rGHANA", {locale: 'en-GH'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
          test.equal(parsedAddress.streetAddress, "Mr. John Mensah, P.O. Box 1234");
        test.equal(parsedAddress.locality, "ACCRA");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "GHANA");
        test.equal(parsedAddress.countryCode, "GH");
        test.done();
    },
    
    testParseAddressGHNoDelimiters: function(test) {
        var parsedAddress = new Address("Mr. John Mensah P.O. Box 1234 ACCRA GHANA", {locale: 'en-GH'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Mr. John Mensah P.O. Box 1234");
        test.equal(parsedAddress.locality, "ACCRA");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "GHANA");
        test.equal(parsedAddress.countryCode, "GH");
        test.done();
    },
    
    testParseAddressGHFromUS: function(test) {
        var parsedAddress = new Address("Mr. John Mensah P.O. Box 1234\nACCRA\nGHANA", {locale: 'en-GH'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Mr. John Mensah P.O. Box 1234");
        test.equal(parsedAddress.locality, "ACCRA");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "GHANA");
        test.equal(parsedAddress.countryCode, "GH");
        test.done();
    },
    
    testFormatAddressGH: function(test) {
        var parsedAddress = new Address({
            streetAddress: "Mr. John Mensah P.O. Box 1234",
            locality: "ACCRA",
            postalCode: "1010",
            country: "GHANA",
            countryCode: "GH"
        }, {locale: 'en-GH'});
        
        var expected = "Mr. John Mensah P.O. Box 1234\nACCRA\nGHANA";
        var formatter = new AddressFmt({locale: 'en-GH'});
        test.expect(1);
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressGHFromUS: function(test) {
        var parsedAddress = new Address({
            streetAddress: "Mr. John Mensah P.O. Box 1234",
            locality: "ACCRA",
            postalCode: "1010",
            country: "GHANA",
            countryCode: "GH"
        }, {locale: 'en-US'});
        
        var expected = "Mr. John Mensah P.O. Box 1234\nACCRA\nGHANA";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.expect(1);
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
    
};