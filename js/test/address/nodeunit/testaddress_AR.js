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

module.exports.testaddress_AR = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseARAddressNormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Luis Escala Piedras 623\nPiso 2, depto 4\nC1070AAM Capital Federa\nARGENTINA", {locale: 'es-AR'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Luis Escala Piedras 623, Piso 2, depto 4");
        test.equal(parsedAddress.locality, "Capital Federa");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "C1070AAM");
        test.equal(parsedAddress.country, "ARGENTINA");
        test.equal(parsedAddress.countryCode, "AR");
        test.done();
    },
    
    
    testParseARAddressNoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Luis Escala Piedras 623\nPiso 2, depto 4\nCapital Federa\nARGENTINA", {locale: 'es-AR'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Luis Escala Piedras 623, Piso 2, depto 4");
        test.equal(parsedAddress.locality, "Capital Federa");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.country, "ARGENTINA");
        test.equal(parsedAddress.countryCode, "AR");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    
    testParseARAddressNoCountry: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Juana Aguirre, Piedras No 623, Piso2 Dto.4\nC1070AAM Capital Federal", {locale: 'es-AR'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Juana Aguirre, Piedras No 623, Piso2 Dto.4");
        test.equal(parsedAddress.locality, "Capital Federal");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "C1070AAM");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "AR");
        test.done();
    },
    
    testParseARAddressManyLines: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Juana Aguirre\nEscuela Rural 45 \nPiedras No 623\nPiso2 Dto.4\nC1070AAM Capital Federal\nARGENTINA\n\n\n", {locale: 'es-AR'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Juana Aguirre, Escuela Rural 45, Piedras No 623, Piso2 Dto.4");
        test.equal(parsedAddress.locality, "Capital Federal");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "C1070AAM");
        test.equal(parsedAddress.country, "ARGENTINA");
        test.equal(parsedAddress.countryCode, "AR");
        test.done();
        
    },
    
    testParseARAddressOneLine: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Juana Aguirre, Piedras No 623, Piso2 Dto.4, C1070AAM Capital Federal, ARGENTINA", {locale: 'es-AR'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Juana Aguirre, Piedras No 623, Piso2 Dto.4");
        test.equal(parsedAddress.locality, "Capital Federal");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "C1070AAM");
        test.equal(parsedAddress.country, "ARGENTINA");
        test.equal(parsedAddress.countryCode, "AR");
        test.done();
        
    },
    
    testParseARAddressSuperfluousWhitespace: function(test) {
        test.expect(7);
        var parsedAddress = new Address("\t\t\tLuis Escala Piedras 623\n\n\nPiso 2, depto 4\n   \t\nC1070AAM Capital Federa\n   \r\t\t \t \t ARGENTINA\n\n\n", {locale: 'es-AR'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Luis Escala Piedras 623, Piso 2, depto 4");
        test.equal(parsedAddress.locality, "Capital Federa");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "C1070AAM");
        test.equal(parsedAddress.country, "ARGENTINA");
        test.equal(parsedAddress.countryCode, "AR");
        test.done();
        
    },
    
    testParseARAddressNoDelimiters: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Luis Escala Piedras 623 Piso 2, depto 4 C1070AAM  Capital Federa ARGENTINA", {locale: 'es-AR'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Luis Escala Piedras 623 Piso 2, depto 4");
        test.equal(parsedAddress.locality, "Capital Federa");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "C1070AAM");
        test.equal(parsedAddress.country, "ARGENTINA");
        test.equal(parsedAddress.countryCode, "AR");
        test.done();
        
    },
    
    testParseARAddressSpecialChars: function(test) {
        test.expect(7);
        var parsedAddress = new Address("At. Sr. Hiro Gordo-Globo\nSumo Informática S.A.\nCalle 39 No 1540\nB1000TBU San Sebastian\nARGENTINA", {locale: 'es-AR'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "At. Sr. Hiro Gordo-Globo, Sumo Informática S.A., Calle 39 No 1540");
        test.equal(parsedAddress.locality, "San Sebastian");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "B1000TBU");
        test.equal(parsedAddress.country, "ARGENTINA");
        test.equal(parsedAddress.countryCode, "AR");
        test.done();
        
    },
    
    
    testParseARAddressFromUS: function(test) {
        test.expect(7);
        var parsedAddress = new Address("At. Sr. Hiro Gordo-Globo, Sumo Informática S.A., Calle 39 No 1540\nB1000TBU San Sebastian\nArgentina", {locale: 'en-US'});
        
        // the country name is in English because this address is for a contact in a US database
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "At. Sr. Hiro Gordo-Globo, Sumo Informática S.A., Calle 39 No 1540");
        test.equal(parsedAddress.locality, "San Sebastian");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "B1000TBU");
        test.equal(parsedAddress.country, "Argentina");
        test.equal(parsedAddress.countryCode, "AR");
        test.done();
        
    },
    
    testFormatAddressAR: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "At. Sr. Hiro Gordo-Globo, Sumo Informática S.A., Calle 39 No 1540",
            locality: "San Sebastian",
            postalCode: "B1000TBU",
            country: "ARGENTINA",
            countryCode: "AT"
        }, {locale: 'es-AR'});
        
        var expected = "At. Sr. Hiro Gordo-Globo, Sumo Informática S.A., Calle 39 No 1540\nB1000TBU San Sebastian\nARGENTINA";
        var formatter = new AddressFmt({locale: 'es-AR'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
        
    },
    
    testFormatAddressARFromUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "At. Sr. Hiro Gordo-Globo, Sumo Informática S.A., Calle 39 No 1540",
            locality: "San Sebastian",
            postalCode: "B1000TBU",
            country: "Argentina",
            countryCode: "AT"
        }, {locale: 'en-US'});
        
        var expected = "At. Sr. Hiro Gordo-Globo, Sumo Informática S.A., Calle 39 No 1540\nB1000TBU San Sebastian\nArgentina";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
        
    }
    
};