/*
 * testaddress_MX.js - test the address parsing and formatting routines for Mexico
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
if (typeof(ilib) === "undefined") {
    var ilib = require("../../lib/ilib.js");
}

module.exports.testaddress_MX = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAddressMXNormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Paseo de la Reforma #115, Piso 22\nCol. Lomas de Chapultepec\n11000 México D.F.\nMéxico", {locale: 'es-MX'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Paseo de la Reforma #115, Piso 22, Col. Lomas de Chapultepec");
        test.equal(parsedAddress.locality, "México");
        test.equal(parsedAddress.region, "D.F.");
        test.equal(parsedAddress.postalCode, "11000");
        test.equal(parsedAddress.country, "México");
        test.equal(parsedAddress.countryCode, "MX");
        test.done();
    },
    
    testParseAddressMXNoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("20 de Noviembre 855 Sur\nObispado\nMonterrey, NL\nMéxico", {locale: 'es-MX'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "20 de Noviembre 855 Sur, Obispado");
        test.equal(parsedAddress.locality, "Monterrey");
        test.equal(parsedAddress.region, "NL");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "México");
        test.equal(parsedAddress.countryCode, "MX");
        test.done();
    },
    
    testParseAddressMXNoCountry: function(test) {
        test.expect(7);
        var parsedAddress = new Address("AV RIO MIXCOAC N° 125 , INSURGENTES MIXCOAC , C.P 03920 , BENITO JUAREZ , DF", {locale: 'es-MX'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "AV RIO MIXCOAC N° 125, INSURGENTES MIXCOAC");
        test.equal(parsedAddress.locality, "BENITO JUAREZ");
        test.equal(parsedAddress.region, "DF");
        test.equal(parsedAddress.postalCode, "C.P 03920");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "MX");
        test.done();
    },
    
    testParseAddressMXManyLines: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Colegio Niños de México\nQueretaro 151\nRoma\nC.P 06700\nCuauhtemoc\nDF\nMéxico", {locale: 'es-MX'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Colegio Niños de México, Queretaro 151, Roma");
        test.equal(parsedAddress.locality, "Cuauhtemoc");
        test.equal(parsedAddress.region, "DF");
        test.equal(parsedAddress.postalCode, "C.P 06700");
        test.equal(parsedAddress.country, "México");
        test.equal(parsedAddress.countryCode, "MX");
        test.done();
    },
    
    testParseAddressMXOneLine: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Vicente Guerrero S/N , Centro , C.P 23450 , Cabo San Lucas , BCS , México", {locale: 'es-MX'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Vicente Guerrero S/N, Centro");
        test.equal(parsedAddress.locality, "Cabo San Lucas");
        test.equal(parsedAddress.region, "BCS");
        test.equal(parsedAddress.postalCode, "C.P 23450");
        test.equal(parsedAddress.country, "México");
        test.equal(parsedAddress.countryCode, "MX");
        test.done();
    },
    
    testParseAddressMXSuperfluousWhitespace: function(test) {
        test.expect(7);
        var parsedAddress = new Address("\t\t\tVicente     Guerrero \tS/N\n\t\tCentro\t\n C.P\t\r 23450\n\t\t\r Cabo   \t\r San Lucas\n\n\n\tBCS\r\t\nMéxico\n\n\n", {locale: 'es-MX'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Vicente Guerrero S/N, Centro");
        test.equal(parsedAddress.locality, "Cabo San Lucas");
        test.equal(parsedAddress.region, "BCS");
        test.equal(parsedAddress.postalCode, "C.P 23450");
        test.equal(parsedAddress.country, "México");
        test.equal(parsedAddress.countryCode, "MX");
        test.done();
    },
    
    testParseAddressMXNoDelimiters: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Vicente Guerrero S/N Centro C.P 23450 Cabo San Lucas BCS México", {locale: 'es-MX'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Vicente Guerrero S/N Centro");
        test.equal(parsedAddress.locality, "Cabo San Lucas");
        test.equal(parsedAddress.region, "BCS");
        test.equal(parsedAddress.postalCode, "C.P 23450");
        test.equal(parsedAddress.country, "México");
        test.equal(parsedAddress.countryCode, "MX");
        test.done();
    },
    
    testParseAddressMXSpecialChars: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Calle Yucatán No. 45\nC.P 97751 Chichén Itzá, Yucatán\nMéxico", {locale: 'es-MX'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Calle Yucatán No. 45");
        test.equal(parsedAddress.locality, "Chichén Itzá");
        test.equal(parsedAddress.region, "Yucatán");
        test.equal(parsedAddress.postalCode, "C.P 97751");
        test.equal(parsedAddress.country, "México");
        test.equal(parsedAddress.countryCode, "MX");
        test.done();
    },
    
    testParseAddressMXFromUS: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Vicente Guerrero S/N , Centro\nC.P 23450 Cabo San Lucas, BCS\nMexico", {locale: 'en-US'});
        
        // the country name is in English because this address is for a contact in a US database
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Vicente Guerrero S/N, Centro");
        test.equal(parsedAddress.locality, "Cabo San Lucas");
        test.equal(parsedAddress.region, "BCS");
        test.equal(parsedAddress.postalCode, "C.P 23450");
        test.equal(parsedAddress.country, "Mexico");
        test.equal(parsedAddress.countryCode, "MX");
        test.done();
    },
    
    testFormatAddressMX: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Vicente Guerrero S/N, Centro",
            locality: "Cabo San Lucas",
            region: "BCS",
            postalCode: "C.P 23450",
            country: "México",
            countryCode: "MX"
        }, {locale: 'es-MX'});
        
        var expected = "Vicente Guerrero S/N, Centro\nC.P 23450 Cabo San Lucas, BCS\nMéxico";
        var formatter = new AddressFmt({locale: 'es-MX'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressMXFromUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Vicente Guerrero S/N, Centro",
            locality: "Cabo San Lucas",
            region: "BCS",
            postalCode: "C.P 23450",
            country: "Mexico",
            countryCode: "MX"
        }, {locale: 'en-US'});
        
        var expected = "Vicente Guerrero S/N, Centro\nC.P 23450 Cabo San Lucas, BCS\nMexico";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
    
};
