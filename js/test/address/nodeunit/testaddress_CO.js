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
    var ilib = require("../../../lib/ilib.js");
}

module.exports.testaddress_CO = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAddressCONormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("SEÑOR, Gabriel Garcia Marquez, SOCIEDAD DE ESCRITORES COLOMBIANOS, Av. 15 no 80–13 oficina 702, ARACATACA–MAGDALENA, COLOMBIA", {locale: 'es-CO'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "SEÑOR, Gabriel Garcia Marquez, SOCIEDAD DE ESCRITORES COLOMBIANOS, Av. 15 no 80–13 oficina 702");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "ARACATACA–MAGDALENA");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "COLOMBIA");
        test.equal(parsedAddress.countryCode, "CO");
        test.done();
    },
    
    testParseAddressCONoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("SEÑOR, Gabriel Garcia Marquez, SOCIEDAD DE ESCRITORES COLOMBIANOS, Av. 15 no 80–13 oficina 702, ARACATACA–MAGDALENA, COLOMBIA", {locale: 'es-CO'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "SEÑOR, Gabriel Garcia Marquez, SOCIEDAD DE ESCRITORES COLOMBIANOS, Av. 15 no 80–13 oficina 702");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "ARACATACA–MAGDALENA");
        test.equal(parsedAddress.country, "COLOMBIA");
        test.equal(parsedAddress.countryCode, "CO");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    
    testParseAddressCOManyLines: function(test) {
        test.expect(7);
        var parsedAddress = new Address("SEÑOR\nFEDERICO TERRAZAS ARIAS, SOCIEDAD DE ESCRITORES COLOMBIANOS, Av. 15 no 80–13 oficina 702\nARACATACA–MAGDALENA\nCOLOMBIA", {locale: 'es-CO'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "SEÑOR, FEDERICO TERRAZAS ARIAS, SOCIEDAD DE ESCRITORES COLOMBIANOS, Av. 15 no 80–13 oficina 702");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "ARACATACA–MAGDALENA");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "COLOMBIA");
        test.equal(parsedAddress.countryCode, "CO");
        test.done();
    },
    
    testParseAddressCOOneLine: function(test) {
        test.expect(7);
        var parsedAddress = new Address("SEÑOR, Gabriel Garcia Marquez, SOCIEDAD DE ESCRITORES COLOMBIANOS, Av. 15 no 80–13 oficina 702, ARACATACA–MAGDALENA, COLOMBIA", {locale: 'es-CO'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "SEÑOR, Gabriel Garcia Marquez, SOCIEDAD DE ESCRITORES COLOMBIANOS, Av. 15 no 80–13 oficina 702");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "ARACATACA–MAGDALENA");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "COLOMBIA");
        test.equal(parsedAddress.countryCode, "CO");
        test.done();
    },
    
    testParseAddressCOSuperfluousWhitespace: function(test) {
        test.expect(7);
        var parsedAddress = new Address("SEÑOR, Gabriel Garcia Marquez, SOCIEDAD DE ESCRITORES COLOMBIANOS, Av. 15 no 80–13 oficina 702  \n\t\n ARACATACA–MAGDALENA\t\n\n COLOMBIA  \n  \t\t\t", {locale: 'es-CO'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "SEÑOR, Gabriel Garcia Marquez, SOCIEDAD DE ESCRITORES COLOMBIANOS, Av. 15 no 80–13 oficina 702");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "ARACATACA–MAGDALENA");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "COLOMBIA");
        test.equal(parsedAddress.countryCode, "CO");
        test.done();
    },
    
    testParseAddressCONoDelimiters: function(test) {
        test.expect(7);
        var parsedAddress = new Address("SEÑOR Gabriel Garcia Marquez SOCIEDAD DE ESCRITORES COLOMBIANOS Av. 15 no 80–13 oficina 702 ARACATACA–MAGDALENA COLOMBIA", {locale: 'es-CO'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "SEÑOR Gabriel Garcia Marquez SOCIEDAD DE ESCRITORES COLOMBIANOS Av. 15 no 80–13 oficina 702");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "ARACATACA–MAGDALENA");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "COLOMBIA");
        test.equal(parsedAddress.countryCode, "CO");
        test.done();
    },
    
    testParseAddressCOSpecialChars: function(test) {
        test.expect(7);
        var parsedAddress = new Address("SEÑOR, Gabriel García Márquez, SOCIEDAD DE ESCRITORES, SOCIEDAD DE ESCRITORES COLOMBIANOS, Av. 15 no 80–13 oficina 702, ARACATACA–MAGDALENA, COLOMBIA", {locale: 'es-CO'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "SEÑOR, Gabriel García Márquez, SOCIEDAD DE ESCRITORES, SOCIEDAD DE ESCRITORES COLOMBIANOS, Av. 15 no 80–13 oficina 702");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "ARACATACA–MAGDALENA");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "COLOMBIA");
        test.equal(parsedAddress.countryCode, "CO");
        test.done();
    },
    
    testParseAddressCOFromUS: function(test) {
        test.expect(7);
        var parsedAddress = new Address("SEÑOR, Gabriel Garcia Marquez, SOCIEDAD DE ESCRITORES COLOMBIANOS, Av. 15 no 80–13 oficina 702, ARACATACA–MAGDALENA, COLOMBIA", {locale: 'en-US'});
        
        // the country name is in English because this address is for a contact in a US database
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "SEÑOR, Gabriel Garcia Marquez, SOCIEDAD DE ESCRITORES COLOMBIANOS, Av. 15 no 80–13 oficina 702");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "ARACATACA–MAGDALENA");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "COLOMBIA");
        test.equal(parsedAddress.countryCode, "CO");
        test.done();
    },
    
    testFormatAddressCO: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "SEÑOR, Gabriel Garcia Marquez, SOCIEDAD DE ESCRITORES COLOMBIANOS, Av. 15 no 80–13 oficina 702",
            locality: "ARACATACA–MAGDALENA",
            country: "COLOMBIA",
            countryCode: "CO"
        }, {locale: 'es-CO'});
        
        var expected = "SEÑOR, Gabriel Garcia Marquez, SOCIEDAD DE ESCRITORES COLOMBIANOS, Av. 15 no 80–13 oficina 702\nARACATACA–MAGDALENA\nCOLOMBIA";
        var formatter = new AddressFmt({locale: 'es-CO'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressCOFromUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "SEÑOR, Gabriel Garcia Marquez, SOCIEDAD DE ESCRITORES COLOMBIANOS, Av. 15 no 80–13 oficina 702",
            country: "COLOMBIA",
            locality: "ARACATACA–MAGDALENA",
            countryCode: "CO"
        }, {locale: 'en-US'});
        
        var expected = "SEÑOR, Gabriel Garcia Marquez, SOCIEDAD DE ESCRITORES COLOMBIANOS, Av. 15 no 80–13 oficina 702\nARACATACA–MAGDALENA\nCOLOMBIA";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
    
};
