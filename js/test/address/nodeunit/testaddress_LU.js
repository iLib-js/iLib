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
// TODO: get some Luxembourg addresses

if (typeof(ilib) === "undefined") {
    var ilib = require("../../../lib/ilib.js");
}

module.exports.testaddress_LU = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAddressLUNormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("M. Andrée TROMMER BP 501\nL-1050 Luxembourg\nLUXEMBOURG", {locale: 'fr-LU'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "M. Andrée TROMMER BP 501");
        test.equal(parsedAddress.locality, "Luxembourg");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "L-1050");
        test.equal(parsedAddress.country, "LUXEMBOURG");
        test.equal(parsedAddress.countryCode, "LU");
        test.done();
    },
    
    
    testParseAddressLUotherNormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("M. Jacques Muller 71, route de Longwy\nL-4750 PETANGE\nLUXEMBOURG", {locale: 'fr-LU'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "M. Jacques Muller 71, route de Longwy");
        test.equal(parsedAddress.locality, "PETANGE");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "L-4750");
        test.equal(parsedAddress.country, "LUXEMBOURG");
        test.equal(parsedAddress.countryCode, "LU");
        test.done();
    },
    
    
    testParseAddressLUNoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("M. Andrée TROMMER BP 5019\nLuxembourg\nLUXEMBOURG", {locale: 'fr-LU'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "M. Andrée TROMMER BP 5019");
        test.equal(parsedAddress.locality, "Luxembourg");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.country, "LUXEMBOURG");
        test.equal(parsedAddress.countryCode, "LU");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    
    testParseAddressLUManyLines: function(test) {
        test.expect(7);
        var parsedAddress = new Address("M. Jacques Muller 71\nroute\nde\nLongwy\nL-4750\nPETANGE\nLUXEMBOURG\n\n\n", {locale: 'fr-LU'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "M. Jacques Muller 71, route, de, Longwy");
        test.equal(parsedAddress.locality, "PETANGE");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "L-4750");
        test.equal(parsedAddress.country, "LUXEMBOURG");
        test.equal(parsedAddress.countryCode, "LU");
        test.done();
    },
    
    testParseAddressLUOneLine: function(test) {
        test.expect(7);
        var parsedAddress = new Address("M. Jacques Muller 71, route, de, Longwy, L-4750, PETANGE, LUXEMBOURG", {locale: 'fr-LU'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "M. Jacques Muller 71, route, de, Longwy");
        test.equal(parsedAddress.locality, "PETANGE");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "L-4750");
        test.equal(parsedAddress.country, "LUXEMBOURG");
        test.equal(parsedAddress.countryCode, "LU");
        test.done();
    },
    
    testParseAddressLUSuperfluousWhitespace: function(test) {
        test.expect(7);
        var parsedAddress = new Address("M. Jacques Muller 71\n\troute\n\tde\tLongwy\t\nL-4750\n\tPETANGE\n\tLUXEMBOURG\n\t", {locale: 'fr-LU'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "M. Jacques Muller 71, route, de Longwy");
        test.equal(parsedAddress.locality, "PETANGE");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "L-4750");
        test.equal(parsedAddress.country, "LUXEMBOURG");
        test.equal(parsedAddress.countryCode, "LU");
        test.done();
    },
    
    testParseAddressLUNoDelimiters: function(test) {
        test.expect(7);
        var parsedAddress = new Address("M. Andrée TROMMER BP 5019 L-1050 Luxembourg LUXEMBOURG", {locale: 'fr-LU'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "M. Andrée TROMMER BP 5019");
        test.equal(parsedAddress.locality, "Luxembourg");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "L-1050");
        test.equal(parsedAddress.country, "LUXEMBOURG");
        test.equal(parsedAddress.countryCode, "LU");
        test.done();
    },
    
    
    testParseAddressLUFromUS: function(test) {
        test.expect(7);
        var parsedAddress = new Address("M. Andrée TROMMER BP 501\nL-1050 Luxembourg\nLUXEMBOURG", {locale: 'en-US'});
        
        // the country name is in English because this address is for a contact in a US database
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "M. Andrée TROMMER BP 501");
        test.equal(parsedAddress.locality, "Luxembourg");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "L-1050");
        test.equal(parsedAddress.country, "LUXEMBOURG");
        test.equal(parsedAddress.countryCode, "LU");
        test.done();
    },
    
    testFormatAddressLU: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "M. Andrée TROMMER BP 5019",
            locality: "Luxembourg",
            postalCode: "L-1050",
            country: "LUXEMBOURG",
            countryCode: "LU"
        }, {locale: 'fr-LU'});
        
        var expected = "M. Andrée TROMMER BP 5019\nL-1050 Luxembourg\nLUXEMBOURG";
        var formatter = new AddressFmt({locale: 'fr-LU'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressLUFromUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "M. Andrée TROMMER BP 5019",
            locality: "Luxembourg",
            postalCode: "L-1050",
            country: "LUXEMBOURG",
            countryCode: "LU"
        }, {locale: 'en-US'});
        
        var expected = "M. Andrée TROMMER BP 5019\nL-1050 Luxembourg\nLUXEMBOURG";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
    
};
