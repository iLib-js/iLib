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

module.exports.testaddress_BR = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAddressBRNormal: function(test) {
        var parsedAddress = new Address("Carlos Rossi,Avenida João Jorge, 112, ap. 31 Vila Industrial,Campinas - SP,13035-680,BRAZIL", {locale: 'pt-BR'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Carlos Rossi, Avenida João Jorge, 112, ap. 31 Vila Industrial");
        test.equal(parsedAddress.locality, "Campinas");
        test.equal(parsedAddress.region, "SP");
        test.equal(parsedAddress.postalCode, "13035-680");
        test.equal(parsedAddress.country, "BRAZIL");
        test.equal(parsedAddress.countryCode, "BR");
        test.done();
    },
    
    testParseAddressBRNoZip: function(test) {
        var parsedAddress = new Address("Avenida João Jorge, 112, ap. 31 Vila Industrial,Campinas - SP, BRAZIL", {locale: 'pt-BR'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Avenida João Jorge, 112, ap. 31 Vila Industrial");
        test.equal(parsedAddress.locality, "Campinas");
        test.equal(parsedAddress.region, "SP");
        test.equal(parsedAddress.country, "BRAZIL");
        test.equal(parsedAddress.countryCode, "BR");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    
    testParseAddressBRManyLines: function(test) {
        var parsedAddress = new Address("Carlos Rossi\nAvenida João Jorge, 112, ap. 31\nVila Industrial\nCampinas - SP\n13035-680\nBRAZIL", {locale: 'pt-BR'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Carlos Rossi, Avenida João Jorge, 112, ap. 31, Vila Industrial");
        test.equal(parsedAddress.locality, "Campinas");
        test.equal(parsedAddress.region, "SP");
        test.equal(parsedAddress.postalCode, "13035-680");
        test.equal(parsedAddress.country, "BRAZIL");
        test.equal(parsedAddress.countryCode, "BR");
        test.done();
    },
    
    testParseAddressBROneLine: function(test) {
        var parsedAddress = new Address("Rua Visconde de Porto Seguro 1238, Sao Paulo - SP,BRAZIL", {locale: 'pt-BR'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Rua Visconde de Porto Seguro 1238");
        test.equal(parsedAddress.locality, "Sao Paulo");
        test.equal(parsedAddress.region, "SP");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "BRAZIL");
        test.equal(parsedAddress.countryCode, "BR");
        test.done();
    },
    
    testParseAddressBRSuperfluousWhitespace: function(test) {
        var parsedAddress = new Address("Rua Visconde de Porto Seguro 1238   \n\t\n Sao Paulo - SP\n\n\n BRAZIL  \n  \t\n 04642-000 \t\t\t", {locale: 'pt-BR'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Rua Visconde de Porto Seguro 1238");
        test.equal(parsedAddress.locality, "Sao Paulo");
        test.equal(parsedAddress.region, "SP");
        test.equal(parsedAddress.postalCode, "04642-000");
        test.equal(parsedAddress.country, "BRAZIL");
        test.equal(parsedAddress.countryCode, "BR");
        test.done();
    },
    
    testParseAddressBRNoDelimiters: function(test) {
        var parsedAddress = new Address("Rua Visconde de Porto Seguro Sao Paulo - SP BRAZIL  04642-000 ", {locale: 'pt-BR'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Rua Visconde de Porto Seguro");
        test.equal(parsedAddress.locality, "Sao Paulo");
        test.equal(parsedAddress.region, "SP");
        test.equal(parsedAddress.postalCode, "04642-000");
        test.equal(parsedAddress.country, "BRAZIL");
        test.equal(parsedAddress.countryCode, "BR");
        test.done();
    },
    
    testParseAddressBRSpecialChars: function(test) {
        var parsedAddress = new Address("SOCIEDADE BRASILEIRA DE FÍSICA,Caixa Postal 66328,São Paulo - SP,BRAZIL,05315-970", {locale: 'pt-BR'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "SOCIEDADE BRASILEIRA DE FÍSICA, Caixa Postal 66328");
        test.equal(parsedAddress.locality, "São Paulo");
        test.equal(parsedAddress.region, "SP");
        test.equal(parsedAddress.postalCode, "05315-970");
        test.equal(parsedAddress.country, "BRAZIL");
        test.equal(parsedAddress.countryCode, "BR");
        test.done();
    },
    
    testParseAddressBRFromUS: function(test) {
        var parsedAddress = new Address("Rua Visconde de Porto Seguro, Sao Paulo - SP, Brasil, 04642-000", {locale: 'pt-BR'});
        
        // the country name is in English because this address is for a contact in a US database
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Rua Visconde de Porto Seguro");
        test.equal(parsedAddress.locality, "Sao Paulo");
        test.equal(parsedAddress.region, "SP");
        test.equal(parsedAddress.postalCode, "04642-000");
        test.equal(parsedAddress.country, "Brasil");
        test.equal(parsedAddress.countryCode, "BR");
        test.done();
    },
    
    testFormatAddressBR: function(test) {
        var parsedAddress = new Address({
            streetAddress: "Rua Visconde de Porto Seguro",
            locality: "Sao Paulo",
            region: "SP",
            postalCode: "04642-000",
            country: "BRAZIL",
            countryCode: "BR"
        }, {locale: 'pt-BR'});
        
        var expected = "Rua Visconde de Porto Seguro\nSao Paulo-SP\nBRAZIL\n04642-000";
        var formatter = new AddressFmt({locale: 'pt-BR'});
        test.expect(1);
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressBRFromUS: function(test) {
        var parsedAddress = new Address({
            streetAddress: "Rua Visconde de Porto Seguro",
            locality: "Sao Paulo",
            region: "SP",
            postalCode: "04642-000",
            country: "BRAZIL",
            countryCode: "BR"
        }, {locale: 'en-US'});
        
        var expected = "Rua Visconde de Porto Seguro\nSao Paulo-SP\nBRAZIL\n04642-000";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.expect(1);
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testParseAddressBR1: function(test) {
        var parsedAddress = new Address("Lívia Amaral, Av. Paulista, 1098, 1º andar, apto. 101, Bela Vista, São Paulo - SP, Brasil, 01310-000", {locale: 'pt-BR'});
        
        // the country name is in English because this address is for a contact in a US database
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Lívia Amaral, Av. Paulista, 1098, 1º andar, apto. 101, Bela Vista");
        test.equal(parsedAddress.locality, "São Paulo");
        test.equal(parsedAddress.region, "SP");
        test.equal(parsedAddress.postalCode, "01310-000");
        test.equal(parsedAddress.country, "Brasil");
        test.equal(parsedAddress.countryCode, "BR");
        test.done();
    },
    
    testParseAddressBR2: function(test) {
        var parsedAddress = new Address("Rua Afonso Canargo, 805, Santana, Guarapuava - PR, 85070-200", {locale: 'pt-BR'});
        
        // the country name is in English because this address is for a contact in a US database
        
        test.expect(6);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Rua Afonso Canargo, 805, Santana");
        test.equal(parsedAddress.locality, "Guarapuava");
        test.equal(parsedAddress.region, "PR");
        test.equal(parsedAddress.postalCode, "85070-200");
    
        test.equal(parsedAddress.countryCode, "BR");
        test.done();
    },
    
    testParseAddressBR3: function(test) {
        var parsedAddress = new Address("Boulevard das Flores 255,    SALVADOR - BA, BRAZIL, 40301-110", {locale: 'pt-BR'});
        
        // the country name is in English because this address is for a contact in a US database
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Boulevard das Flores 255");
        test.equal(parsedAddress.locality, "SALVADOR");
        test.equal(parsedAddress.region, "BA");
        test.equal(parsedAddress.postalCode, "40301-110");
        test.equal(parsedAddress.country, "BRAZIL");
        test.equal(parsedAddress.countryCode, "BR");
        test.done();
    }
    
};