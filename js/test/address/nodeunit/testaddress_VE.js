/*
 * testaddress_VE.js - test the address parsing and formatting routines
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

module.exports.testaddress_VE = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAddressVENormal: function(test) {
        var parsedAddress = new Address("SEÑOR JOSE PEREZ AV. FUERZAS ARMADAS TORRE SAN JOSE, ENTRADA B PISO 5 APARTAMENTO 20\nCARACAS 1010, D.F.\nVenezuela", {locale: 'es-VE'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "SEÑOR JOSE PEREZ AV. FUERZAS ARMADAS TORRE SAN JOSE, ENTRADA B PISO 5 APARTAMENTO 20");
        test.equal(parsedAddress.locality, "CARACAS");
        test.equal(parsedAddress.region, "D.F.");
        test.equal(parsedAddress.postalCode, "1010");
        test.equal(parsedAddress.country, "Venezuela");
        test.equal(parsedAddress.countryCode, "VE");
        test.done();
    },
    
    testParseAddressVENoZip: function(test) {
        var parsedAddress = new Address("SEÑOR JOSE PEREZ AV. FUERZAS ARMADAS TORRE SAN JOSE, ENTRADA B PISO 5 APARTAMENTO 20\nCARACAS D.F.\nVenezuela", {locale: 'es-VE'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "SEÑOR JOSE PEREZ AV. FUERZAS ARMADAS TORRE SAN JOSE, ENTRADA B PISO 5 APARTAMENTO 20");
        test.equal(parsedAddress.locality, "CARACAS");
        test.equal(parsedAddress.region, "D.F.");
        test.equal(parsedAddress.country, "Venezuela");
        test.equal(parsedAddress.countryCode, "VE");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    
    testParseAddressVENoCountry: function(test) {
        var parsedAddress = new Address("SEÑOR JOSE PEREZ AV. FUERZAS ARMADAS TORRE SAN JOSE, ENTRADA B PISO 5 APARTAMENTO 20\nCARACAS 1010, D.F.", {locale: 'es-VE'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "SEÑOR JOSE PEREZ AV. FUERZAS ARMADAS TORRE SAN JOSE, ENTRADA B PISO 5 APARTAMENTO 20");
        test.equal(parsedAddress.locality, "CARACAS");
        test.equal(parsedAddress.region, "D.F.");
        test.equal(parsedAddress.postalCode, "1010");    
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "VE");
        test.done();
    },
    
    testParseAddressVEManyLines: function(test) {
        var parsedAddress = new Address("SEÑOR JOSE PEREZ AV.\nFUERZAS ARMADAS TORRE\nSAN JOSE\nENTRADA B PISO 5\nAPARTAMENTO 20\nCARACAS 1010, D.F.\nVenezuela", {locale: 'es-VE'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
          test.equal(parsedAddress.streetAddress, "SEÑOR JOSE PEREZ AV., FUERZAS ARMADAS TORRE, SAN JOSE, ENTRADA B PISO 5, APARTAMENTO 20");
        test.equal(parsedAddress.locality, "CARACAS");
        test.equal(parsedAddress.region, "D.F.");
        test.equal(parsedAddress.postalCode, "1010");
        test.equal(parsedAddress.country, "Venezuela");
        test.equal(parsedAddress.countryCode, "VE");
        test.done();
    },
    
    testParseAddressVEOneLine: function(test) {
        var parsedAddress = new Address("SEÑOR JOSE PEREZ AV. , FUERZAS ARMADAS TORRE , SAN JOSE , ENTRADA B PISO 5 , APARTAMENTO 20 , CARACAS , 1010 , D.F. , Venezuela", {locale: 'es-VE'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
          test.equal(parsedAddress.streetAddress, "SEÑOR JOSE PEREZ AV., FUERZAS ARMADAS TORRE, SAN JOSE, ENTRADA B PISO 5, APARTAMENTO 20");
        test.equal(parsedAddress.locality, "CARACAS");
        test.equal(parsedAddress.region, "D.F.");
        test.equal(parsedAddress.postalCode, "1010");
        test.equal(parsedAddress.country, "Venezuela");
        test.equal(parsedAddress.countryCode, "VE");
        test.done();
    },
    
    testParseAddressVESuperfluousWhitespace: function(test) {
        var parsedAddress = new Address("SEÑOR JOSE PEREZ AV.\n\n\t\rFUERZAS ARMADAS TORRE\t\t\rSAN JOSE\r\r\rENTRADA B PISO 5\t\t\rAPARTAMENTO 20\n\n\nCARACAS\t\t\r1010\r\r\rD.F.\t\t\rVenezuela", {locale: 'es-VE'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
          test.equal(parsedAddress.streetAddress, "SEÑOR JOSE PEREZ AV., FUERZAS ARMADAS TORRE SAN JOSE ENTRADA B PISO 5 APARTAMENTO 20");
        test.equal(parsedAddress.locality, "CARACAS");
        test.equal(parsedAddress.region, "D.F.");
        test.equal(parsedAddress.postalCode, "1010");
        test.equal(parsedAddress.country, "Venezuela");
        test.equal(parsedAddress.countryCode, "VE");
        test.done();
    },
    
    testParseAddressVENoDelimiters: function(test) {
        var parsedAddress = new Address("SEÑOR JOSE PEREZ AV. FUERZAS ARMADAS TORRE SAN JOSE, ENTRADA B PISO 5 APARTAMENTO 20 CARACAS 1010 D.F., Venezuela", {locale: 'es-VE'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "SEÑOR JOSE PEREZ AV. FUERZAS ARMADAS TORRE SAN JOSE, ENTRADA B PISO 5 APARTAMENTO 20");
        test.equal(parsedAddress.locality, "CARACAS");
        test.equal(parsedAddress.region, "D.F.");
        test.equal(parsedAddress.postalCode, "1010");
        test.equal(parsedAddress.country, "Venezuela");
        test.equal(parsedAddress.countryCode, "VE");
        test.done();
    },
    
    testParseAddressVEFromUS: function(test) {
        var parsedAddress = new Address("Mr. JOSE PEREZ AV. FUERZAS ARMADAS TORRE SAN JOSE, ENTRADA B PISO 5 APARTAMENTO 20\nCARACAS 1010, D.F.\nVenezuela", {locale: 'es-VE'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Mr. JOSE PEREZ AV. FUERZAS ARMADAS TORRE SAN JOSE, ENTRADA B PISO 5 APARTAMENTO 20");
        test.equal(parsedAddress.locality, "CARACAS");
        test.equal(parsedAddress.region, "D.F.");
        test.equal(parsedAddress.postalCode, "1010");
        test.equal(parsedAddress.country, "Venezuela");
        test.equal(parsedAddress.countryCode, "VE");
        test.done();
    },
    
    testFormatAddressVE: function(test) {
        var parsedAddress = new Address({
            streetAddress: "SEÑOR JOSE PEREZ AV. FUERZAS ARMADAS TORRE SAN JOSE, ENTRADA B PISO 5 APARTAMENTO 20",
            locality: "CARACAS",
            postalCode: "1010",
            region: "D.F.",
            country: "Venezuela",
            countryCode: "VE"
        }, {locale: 'es-VE'});
        
        var expected = "SEÑOR JOSE PEREZ AV. FUERZAS ARMADAS TORRE SAN JOSE, ENTRADA B PISO 5 APARTAMENTO 20\nCARACAS 1010, D.F.\nVenezuela";
        var formatter = new AddressFmt({locale: 'es-VE'});
        test.expect(1);
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressVEFromUS: function(test) {
        var parsedAddress = new Address({
            streetAddress: "Mr. JOSE PEREZ AV. FUERZAS ARMADAS TORRE SAN JOSE, ENTRADA B PISO 5 APARTAMENTO 20",
            locality: "CARACAS",
            postalCode: "1010",
            region: "D.F.",
            country: "Venezuela",
            countryCode: "VE"
        }, {locale: 'en-US'});
        
        var expected = "Mr. JOSE PEREZ AV. FUERZAS ARMADAS TORRE SAN JOSE, ENTRADA B PISO 5 APARTAMENTO 20\nCARACAS 1010, D.F.\nVenezuela";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.expect(1);
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
    
};