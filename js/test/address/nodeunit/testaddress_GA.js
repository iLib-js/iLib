/*
 * testaddress_GA.js - test the address parsing and formatting routines
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

module.exports.testaddress_GA = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAddressGANormal: function(test) {
        var parsedAddress = new Address("Direction de la Poste Service de l'organisation et de l'exploitation du réseau postal BP 20000\nLIBREVILLE\nGABON", {locale: 'fr-GA'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Direction de la Poste Service de l'organisation et de l'exploitation du réseau postal BP 20000");
        test.equal(parsedAddress.locality, "LIBREVILLE");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "GABON");
        test.equal(parsedAddress.countryCode, "GA");
        test.done();
    },
    
    testParseAddressGANoZip: function(test) {
        var parsedAddress = new Address("Direction de la Poste Service de l'organisation et de l'exploitation du réseau postal BP 20000\nLIBREVILLE\nGABON", {locale: 'fr-GA'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Direction de la Poste Service de l'organisation et de l'exploitation du réseau postal BP 20000");
        test.equal(parsedAddress.locality, "LIBREVILLE");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.country, "GABON");
        test.equal(parsedAddress.countryCode, "GA");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    
    testParseAddressGANoCountry: function(test) {
        var parsedAddress = new Address("Direction de la Poste Service de l'organisation et de l'exploitation du réseau postal BP 20000\nLIBREVILLE", {locale: 'fr-GA'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Direction de la Poste Service de l'organisation et de l'exploitation du réseau postal BP 20000");
        test.equal(parsedAddress.locality, "LIBREVILLE");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "GA");
        test.done();
    },
    
    testParseAddressGAManyLines: function(test) {
        var parsedAddress = new Address("Direction de la Poste Service\nde l'organisation et\nde l'exploitation du réseau postal\nBP 20000\nLIBREVILLE\nGABON", {locale: 'fr-GA'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
          test.equal(parsedAddress.streetAddress, "Direction de la Poste Service, de l'organisation et, de l'exploitation du réseau postal, BP 20000");
        test.equal(parsedAddress.locality, "LIBREVILLE");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "GABON");
        test.equal(parsedAddress.countryCode, "GA");
        test.done();
    },
    
    testParseAddressGAOneLine: function(test) {
        var parsedAddress = new Address("Direction de la Poste Service , de l'organisation et , de l'exploitation du réseau postal , BP 20000 , LIBREVILLE , GABON", {locale: 'fr-GA'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
          test.equal(parsedAddress.streetAddress, "Direction de la Poste Service, de l'organisation et, de l'exploitation du réseau postal, BP 20000");
        test.equal(parsedAddress.locality, "LIBREVILLE");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "GABON");
        test.equal(parsedAddress.countryCode, "GA");
        test.done();
    },
    
    testParseAddressGASuperfluousWhitespace: function(test) {
        var parsedAddress = new Address("Direction de la Poste Service\r\r\tde l'organisation et\t\t\tde l'exploitation du réseau postal\t\t\rBP 20000\r\r\n\nLIBREVILLE\t\r\n\t\rGABON", {locale: 'fr-GA'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
          test.equal(parsedAddress.streetAddress, "Direction de la Poste Service de l'organisation et de l'exploitation du réseau postal BP 20000");
        test.equal(parsedAddress.locality, "LIBREVILLE");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "GABON");
        test.equal(parsedAddress.countryCode, "GA");
        test.done();
    },
    
    testParseAddressGANoDelimiters: function(test) {
        var parsedAddress = new Address("Direction de la Poste Service de l'organisation et de l'exploitation du réseau postal BP 20000 LIBREVILLE GABON", {locale: 'fr-GA'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Direction de la Poste Service de l'organisation et de l'exploitation du réseau postal BP 20000");
        test.equal(parsedAddress.locality, "LIBREVILLE");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "GABON");
        test.equal(parsedAddress.countryCode, "GA");
        test.done();
    },
    
    testParseAddressGAFromUS: function(test) {
        var parsedAddress = new Address("Direction de la Poste Service de l'organisation et de l'exploitation du réseau postal BP 20000\nLIBREVILLE\nGABON", {locale: 'fr-GA'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Direction de la Poste Service de l'organisation et de l'exploitation du réseau postal BP 20000");
        test.equal(parsedAddress.locality, "LIBREVILLE");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "GABON");
        test.equal(parsedAddress.countryCode, "GA");
        test.done();
    },
    
    testFormatAddressGA: function(test) {
        var parsedAddress = new Address({
            streetAddress: "Direction de la Poste Service de l'organisation et de l'exploitation du réseau postal BP 20000",
            locality: "LIBREVILLE",
            postalCode: "1010",
            country: "GABON",
            countryCode: "GA"
        }, {locale: 'fr-GA'});
        
        var expected = "Direction de la Poste Service de l'organisation et de l'exploitation du réseau postal BP 20000\nLIBREVILLE\nGABON";
        var formatter = new AddressFmt({locale: 'fr-GA'});
        test.expect(1);
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressGAFromUS: function(test) {
        var parsedAddress = new Address({
            streetAddress: "Direction de la Poste Service de l'organisation et de l'exploitation du réseau postal BP 20000",
            locality: "LIBREVILLE",
            postalCode: "1010",
            country: "GABON",
            countryCode: "GA"
        }, {locale: 'en-US'});
        
        var expected = "Direction de la Poste Service de l'organisation et de l'exploitation du réseau postal BP 20000\nLIBREVILLE\nGABON";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.expect(1);
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
    
};