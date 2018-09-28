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
    var Address = require("../../lib/Address.js");
}
if (typeof(AddressFmt) === "undefined") {
    var AddressFmt = require("../../lib/AddressFmt.js");
}

// TODO: fill in Belgian addresses here

if (typeof(ilib) === "undefined") {
    var ilib = require("../../lib/ilib.js");
}

module.exports.testaddress_BE = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAddressBENormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("31, Place de Brouckere\n1000 Brussels\nBelgium", {locale: 'nl-BE'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "31, Place de Brouckere");
        test.equal(parsedAddress.locality, "Brussels");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "1000");
        test.equal(parsedAddress.country, "Belgium");
        test.equal(parsedAddress.countryCode, "BE");
        test.done();
    },
    
    testParseAddressBEOtherNormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("31, Place de Brouckère\n1000 Bruxelles\nBelgium", {locale: 'fr-BE'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "31, Place de Brouckère");
        test.equal(parsedAddress.locality, "Bruxelles");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "1000");
        test.equal(parsedAddress.country, "Belgium");
        test.equal(parsedAddress.countryCode, "BE");
        test.done();
        
    },
    
    testParseAddressBENoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("31, Place de Brouckère\nBruxelles\nBelgium", {locale: 'fr-BE'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "31, Place de Brouckère");
        test.equal(parsedAddress.locality, "Bruxelles");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.country, "Belgium");
        test.equal(parsedAddress.countryCode, "BE");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    
    
    testParseAddressBEManyLines: function(test) {
        test.expect(7);
        var parsedAddress = new Address("31\nPlace\nde Brouckere\n1000\nBrussels\nBelgium", {locale: 'nl-BE'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "31, Place, de Brouckere");
        test.equal(parsedAddress.locality, "Brussels");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "1000");
        test.equal(parsedAddress.country, "Belgium");
        test.equal(parsedAddress.countryCode, "BE");
        test.done();
    },
    
    testParseAddressBEOneLine: function(test) {
        test.expect(7);
        var parsedAddress = new Address("31, Place de Brouckere , 1000 Brussels , Belgium", {locale: 'nl-BE'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "31, Place de Brouckere");
        test.equal(parsedAddress.locality, "Brussels");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "1000");
        test.equal(parsedAddress.country, "Belgium");
        test.equal(parsedAddress.countryCode, "BE");
        test.done();
    },
    
    
    
    testParseAddressBENoDelimiters: function(test) {
        test.expect(7);
        var parsedAddress = new Address("31 Place de Brouckere 1000 Brussels Belgium", {locale: 'nl-BE'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "31 Place de Brouckere");
        test.equal(parsedAddress.locality, "Brussels");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "1000");
        test.equal(parsedAddress.country, "Belgium");
        test.equal(parsedAddress.countryCode, "BE");
        test.done();
    },
    
    
    
    testParseAddressBEFromUS: function(test) {
        test.expect(7);
        var parsedAddress = new Address("31, Place de Brouckere , 1000 Brussels , Belgium", {locale: 'en-US'});
        
        // the country name is in English because this address is for a contact in a US database
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "31, Place de Brouckere");
        test.equal(parsedAddress.locality, "Brussels");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "1000");
        test.equal(parsedAddress.country, "Belgium");
        test.equal(parsedAddress.countryCode, "BE");
        test.done();
    },
    
    testFormatAddressBE: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "31, Place de Brouckere",
            locality: "Brussels",
            postalCode: "1000",
            country: "Belgium",
            countryCode: "BE"
        }, {locale: 'nl-BE'});
        
        var expected = "31, Place de Brouckere\n1000 Brussels\nBelgium";
        var formatter = new AddressFmt({locale: 'nl-BE'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressBEFromUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "31, Place de Brouckere",
            locality: "Brussels",
            postalCode: "1000",
            country: "Belgium",
            countryCode: "BE"
        }, {locale: 'en-US'});
        
        var expected = "31, Place de Brouckere\n1000 Brussels\nBelgium";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
    
};
