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

module.exports.testaddress_EC = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAddressECNormal: function(test) {
        var parsedAddress = new Address("Señor Ing. Gonzalo Vargas San Martín, Empresa Nacional de Correos, Succursal No 21– Quito, P0133V, QUITO, Ecuador", {locale: 'es-EC'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Señor Ing. Gonzalo Vargas San Martín, Empresa Nacional de Correos, Succursal No 21– Quito");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "QUITO");
        test.equal(parsedAddress.postalCode, "P0133V");
        test.equal(parsedAddress.country, "Ecuador");
        test.equal(parsedAddress.countryCode, "EC");
        test.done();
    },
    
    testParseAddressECNoZip: function(test) {
        var parsedAddress = new Address("Señor Ing. Gonzalo Vargas San Martín, Empresa Nacional de Correos, Succursal No 21– Quito, QUITO, Ecuador", {locale: 'es-EC'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Señor Ing. Gonzalo Vargas San Martín, Empresa Nacional de Correos, Succursal No 21– Quito");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "QUITO");
        test.equal(parsedAddress.country, "Ecuador");
        test.equal(parsedAddress.countryCode, "EC");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    
    testParseAddressECManyLines: function(test) {
        var parsedAddress = new Address("Señor Ing. Gonzalo Vargas San Martín\nEmpresa Nacional de Correos\nSuccursal No 21– Quito\nP0133V, QUITO\nEcuador", {locale: 'es-EC'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Señor Ing. Gonzalo Vargas San Martín, Empresa Nacional de Correos, Succursal No 21– Quito");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "QUITO");
        test.equal(parsedAddress.postalCode, "P0133V");
        test.equal(parsedAddress.country, "Ecuador");
        test.equal(parsedAddress.countryCode, "EC");
        test.done();
    },
    
    testParseAddressECOneLine: function(test) {
        var parsedAddress = new Address("Señor Ing. Gonzalo Vargas San Martín, Empresa Nacional de Correos, Succursal No 21– Quito, P0133V, QUITO, Ecuador", {locale: 'es-EC'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Señor Ing. Gonzalo Vargas San Martín, Empresa Nacional de Correos, Succursal No 21– Quito");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "QUITO");
        test.equal(parsedAddress.postalCode, "P0133V");
        test.equal(parsedAddress.country, "Ecuador");
        test.equal(parsedAddress.countryCode, "EC");
        test.done();
    },
    
    testParseAddressECSuperfluousWhitespace: function(test) {
        var parsedAddress = new Address("Señor Ing. Gonzalo Vargas San Martín, Empresa Nacional de Correos, Succursal No 21– Quito  \n\t\n P0133V, QUITO\t\n\n Ecuador  \n  \t\t\t", {locale: 'es-EC'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Señor Ing. Gonzalo Vargas San Martín, Empresa Nacional de Correos, Succursal No 21– Quito");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "QUITO");
        test.equal(parsedAddress.postalCode, "P0133V");
        test.equal(parsedAddress.country, "Ecuador");
        test.equal(parsedAddress.countryCode, "EC");
        test.done();
    },
    
    testParseAddressECNoDelimiters: function(test) {
        var parsedAddress = new Address("Señor Ing. Gonzalo Vargas San Martín Empresa Nacional de Correos Succursal No 21– Quito  P0133V QUITO Ecuador", {locale: 'es-EC'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Señor Ing. Gonzalo Vargas San Martín Empresa Nacional de Correos Succursal No 21– Quito");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "QUITO");
        test.equal(parsedAddress.postalCode, "P0133V");
        test.equal(parsedAddress.country, "Ecuador");
        test.equal(parsedAddress.countryCode, "EC");
        test.done();
    },
    
    testParseAddressECSpecialChars: function(test) {
        var parsedAddress = new Address("Señor Ing. Gonzalo Vargas San Martín, Empresa Nacional de Correos, Succursal No 21– Quito, P0133V, QUITO, Ecuador", {locale: 'es-EC'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Señor Ing. Gonzalo Vargas San Martín, Empresa Nacional de Correos, Succursal No 21– Quito");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "QUITO");
        test.equal(parsedAddress.postalCode, "P0133V");
        test.equal(parsedAddress.country, "Ecuador");
        test.equal(parsedAddress.countryCode, "EC");
        test.done();
    },
    
    testParseAddressECFromUS: function(test) {
        var parsedAddress = new Address("Señor Ing. Gonzalo Vargas San Martín, Empresa Nacional de Correos, Succursal No 21– Quito, P0133V, QUITO, Ecuador", {locale: 'en-US'});
        
        // the country name is in English because this address is for a contact in a US database
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Señor Ing. Gonzalo Vargas San Martín, Empresa Nacional de Correos, Succursal No 21– Quito");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "QUITO");
        test.equal(parsedAddress.postalCode, "P0133V");
        test.equal(parsedAddress.country, "Ecuador");
        test.equal(parsedAddress.countryCode, "EC");
        test.done();
    },
    
    testFormatAddressEC: function(test) {
        var parsedAddress = new Address({
            streetAddress: "Señor Ing. Gonzalo Vargas San Martín\nEmpresa Nacional de Correos\nSuccursal No 21– Quito",
            locality: "QUITO",
            postalCode: "P0133V",
            country: "Ecuador",
            countryCode: "EC"
        }, {locale: 'es-EC'});
        
        var expected = "Señor Ing. Gonzalo Vargas San Martín\nEmpresa Nacional de Correos\nSuccursal No 21– Quito\nP0133V\nQUITO\nEcuador";
        var formatter = new AddressFmt({locale: 'es-EC'});
        test.expect(1);
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressECFromUS: function(test) {
        var parsedAddress = new Address({
            streetAddress: "Señor Ing. Gonzalo Vargas San Martín\nEmpresa Nacional de Correos\nSuccursal No 21– Quito",
            locality: "QUITO",
            postalCode: "P0133V",
            country: "Ecuador",
            countryCode: "EC"
        }, {locale: 'es-EC'});
        
        var expected = "Señor Ing. Gonzalo Vargas San Martín\nEmpresa Nacional de Correos\nSuccursal No 21– Quito\nP0133V\nQUITO\nEcuador";
        var formatter = new AddressFmt({locale: 'es-EC'});
        test.expect(1);
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
    
};