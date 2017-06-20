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

module.exports.testaddress_CV = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAddressCVNormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Luis Felipe Ramos, Rua 5 de Julho 138/Platô, C.P. 38, 7600 PRAIA, SANTIAGO, CAPE VERDE", {locale: 'pt-CV'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Luis Felipe Ramos, Rua 5 de Julho 138/Platô, C.P. 38");
        test.equal(parsedAddress.region, "SANTIAGO");
        test.equal(parsedAddress.locality, "PRAIA");
        test.equal(parsedAddress.postalCode, "7600");
        test.equal(parsedAddress.country, "CAPE VERDE");
        test.equal(parsedAddress.countryCode, "CV");
        test.done();
    },
    
    testParseAddressCVNoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Luis Felipe Ramos, Rua 5 de Julho 138/Platô, C.P. 38,PRAIA, SANTIAGO, CAPE VERDE", {locale: 'pt-CV'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Luis Felipe Ramos, Rua 5 de Julho 138/Platô, C.P. 38");
        test.equal(parsedAddress.region, "SANTIAGO");
        test.equal(parsedAddress.locality, "PRAIA");
        test.equal(parsedAddress.country, "CAPE VERDE");
        test.equal(parsedAddress.countryCode, "CV");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    
    testParseAddressCVManyLines: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Luis Felipe Ramos\nRua 5 de Julho 138/Platô, C.P. 38\n7600 PRAIA\nSANTIAGO\nCAPE VERDE", {locale: 'pt-CV'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Luis Felipe Ramos, Rua 5 de Julho 138/Platô, C.P. 38");
        test.equal(parsedAddress.region, "SANTIAGO");
        test.equal(parsedAddress.locality, "PRAIA");
        test.equal(parsedAddress.postalCode, "7600");
        test.equal(parsedAddress.country, "CAPE VERDE");
        test.equal(parsedAddress.countryCode, "CV");
        test.done();
    },
    
    testParseAddressCVOneLine: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Luis Felipe Ramos, Rua 5 de Julho 138/Platô, C.P. 38, 7600 PRAIA, SANTIAGO, CAPE VERDE", {locale: 'pt-CV'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Luis Felipe Ramos, Rua 5 de Julho 138/Platô, C.P. 38");
        test.equal(parsedAddress.region, "SANTIAGO");
        test.equal(parsedAddress.locality, "PRAIA");
        test.equal(parsedAddress.postalCode, "7600");
        test.equal(parsedAddress.country, "CAPE VERDE");
        test.equal(parsedAddress.countryCode, "CV");
        test.done();
    },
    
    testParseAddressCVSuperfluousWhitespace: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Luis Felipe Ramos, Rua 5 de Julho 138/Platô, C.P. 38  \n\t\n 7600 PRAIA, SANTIAGO\t\n\n CAPE VERDE  \n  \t\t\t", {locale: 'pt-CV'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Luis Felipe Ramos, Rua 5 de Julho 138/Platô, C.P. 38");
        test.equal(parsedAddress.region, "SANTIAGO");
        test.equal(parsedAddress.locality, "PRAIA");
        test.equal(parsedAddress.postalCode, "7600");
        test.equal(parsedAddress.country, "CAPE VERDE");
        test.equal(parsedAddress.countryCode, "CV");
        test.done();
    },
    
    testParseAddressCVNoDelimiters: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Luis Felipe Ramos Rua 5 de Julho 138/Platô C.P. 38 7600 PRAIA SANTIAGO CAPE VERDE", {locale: 'pt-CV'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Luis Felipe Ramos Rua 5 de Julho 138/Platô C.P. 38");
        test.equal(parsedAddress.region, "SANTIAGO");
        test.equal(parsedAddress.locality, "PRAIA");
        test.equal(parsedAddress.postalCode, "7600");
        test.equal(parsedAddress.country, "CAPE VERDE");
        test.equal(parsedAddress.countryCode, "CV");
        test.done();
    },
    
    testParseAddressCVSpecialChars: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Luis Felipe Ramos, Rua 5 de Julho 138/Platô, C.P. 38, 7600 PRAIA, SANTIAGO, CAPE VERDE", {locale: 'pt-CV'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Luis Felipe Ramos, Rua 5 de Julho 138/Platô, C.P. 38");
        test.equal(parsedAddress.region, "SANTIAGO");
        test.equal(parsedAddress.locality, "PRAIA");
        test.equal(parsedAddress.postalCode, "7600");
        test.equal(parsedAddress.country, "CAPE VERDE");
        test.equal(parsedAddress.countryCode, "CV");
        test.done();
    },
    
    testParseAddressCVFromUS: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Luis Felipe Ramos, Rua 5 de Julho 138/Platô, C.P. 38, 7600 PRAIA, SANTIAGO, CAPE VERDE", {locale: 'en-US'});
        
        // the country name is in English because this address is for a contact in a US database
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Luis Felipe Ramos, Rua 5 de Julho 138/Platô, C.P. 38");
        test.equal(parsedAddress.region, "SANTIAGO");
        test.equal(parsedAddress.locality, "PRAIA");
        test.equal(parsedAddress.postalCode, "7600");
        test.equal(parsedAddress.country, "CAPE VERDE");
        test.equal(parsedAddress.countryCode, "CV");
        test.done();
    },
    
    testFormatAddressCV: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Luis Felipe Ramos, Rua 5 de Julho 138/Platô, C.P. 38",
            locality: "PRAIA",
            postalCode: "7600",
            region: "SANTIAGO",
            country: "CAPE VERDE",
            countryCode: "CV"
        }, {locale: 'pt-CV'});
        
        var expected = "Luis Felipe Ramos, Rua 5 de Julho 138/Platô, C.P. 38\n7600 PRAIA\nSANTIAGO\nCAPE VERDE";
        var formatter = new AddressFmt({locale: 'pt-CV'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressCVFromUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Luis Felipe Ramos, Rua 5 de Julho 138/Platô, C.P. 38",
            postalCode: "7600",
            region: "SANTIAGO",
            country: "CAPE VERDE",
            locality: "PRAIA",
            countryCode: "CV"
        }, {locale: 'en-US'});
        
        var expected = "Luis Felipe Ramos, Rua 5 de Julho 138/Platô, C.P. 38\n7600 PRAIA\nSANTIAGO\nCAPE VERDE";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
    
};