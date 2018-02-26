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

module.exports.testaddress_ES = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAddressESNormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Avda.General Avilés, 35-37, Bajo\n46015 - Valencia\nEspaña", {locale: 'es-ES'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Avda.General Avilés, 35-37, Bajo");
        test.equal(parsedAddress.region, "Valencia");
        test.ok(typeof(parsedAddress.locality) === "undefined");
        test.equal(parsedAddress.postalCode, "46015");
        test.equal(parsedAddress.country, "España");
        test.equal(parsedAddress.countryCode, "ES");
        test.done();
    },
    
    testParseAddressESNoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Torre Picasso\nPlaza Pablo Ruiz Picasso 1\nMadrid\nEspaña", {locale: 'es-ES'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Torre Picasso, Plaza Pablo Ruiz Picasso 1");
        test.equal(parsedAddress.region, "Madrid");
        test.ok(typeof(parsedAddress.locality) === "undefined");
        test.equal(parsedAddress.country, "España");
        test.equal(parsedAddress.countryCode, "ES");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    
    testParseAddressESNoCountry: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Isabel de Santo Domingo, 6\n50014 - Zaragoza", {locale: 'es-ES'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Isabel de Santo Domingo, 6");
        test.equal(parsedAddress.region, "Zaragoza");
        test.ok(typeof(parsedAddress.locality) === "undefined");
        test.equal(parsedAddress.postalCode, "50014");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "ES");
        test.done();
    },
    
    testParseAddressESManyLines: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Cami de Can Graells\nno. 1-21\n08174\nSant Cugat del Valles\nBarcelona\nEspaña", {locale: 'es-ES'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Cami de Can Graells, no. 1-21");
        test.equal(parsedAddress.locality, "Sant Cugat del Valles");
        test.equal(parsedAddress.region, "Barcelona");
        test.equal(parsedAddress.postalCode, "08174");
        test.equal(parsedAddress.country, "España");
        test.equal(parsedAddress.countryCode, "ES");
        test.done();
    },
    
    testParseAddressESOneLine: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Calle José Echegaray, 8, Parque Empresarial Madrid-Las Rozas, 28232 - Las Rozas. Madrid, España", {locale: 'es-ES'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Calle José Echegaray, 8, Parque Empresarial Madrid-Las Rozas");
        test.equal(parsedAddress.locality, "Las Rozas.");
        test.equal(parsedAddress.region, "Madrid");
        test.equal(parsedAddress.postalCode, "28232");
        test.equal(parsedAddress.country, "España");
        test.equal(parsedAddress.countryCode, "ES");
        test.done();
    },
    
    testParseAddressESSuperfluousWhitespace: function(test) {
        test.expect(7);
        var parsedAddress = new Address("\t\t\tAvda.General\t\t\r Avilés,\r 35-37,\r Bajo\n\t\t\t\r\r46015\r -\r\r \nValencia,\n,\t\tEspaña\n\n\n", {locale: 'es-ES'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Avda.General Avilés, 35-37, Bajo");
        test.equal(parsedAddress.region, "Valencia");
        test.ok(typeof(parsedAddress.locality) === "undefined");
        test.equal(parsedAddress.postalCode, "46015");
        test.equal(parsedAddress.country, "España");
        test.equal(parsedAddress.countryCode, "ES");
        test.done();
    },
    
    testParseAddressESNoDelimiters: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Calle José Echegaray, 8 Parque Empresarial Madrid-Las Rozas 28232 - Las Rozas Madrid España", {locale: 'es-ES'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Calle José Echegaray, 8 Parque Empresarial Madrid-Las Rozas");
        test.equal(parsedAddress.locality, "Las Rozas");
        test.equal(parsedAddress.region, "Madrid");
        test.equal(parsedAddress.postalCode, "28232");
        test.equal(parsedAddress.country, "España");
        test.equal(parsedAddress.countryCode, "ES");
        test.done();
    },
    
    testParseAddressESSpecialChars: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Avda.General Avilés, 35-37, Bajo\n46015 - Sedaví, València", {locale: 'es-ES'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Avda.General Avilés, 35-37, Bajo");
        test.equal(parsedAddress.locality, "Sedaví");
        test.equal(parsedAddress.region, "València");
        test.equal(parsedAddress.postalCode, "46015");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "ES");
        test.done();
    },
    
    testParseAddressESFromUS: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Avda.General Avilés, 35-37, Bajo\n46015 - Sedaví, València, Spain", {locale: 'en-US'});
        
        // the country name is in English because this address is for a contact in a US database
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Avda.General Avilés, 35-37, Bajo");
        test.equal(parsedAddress.locality, "Sedaví");
        test.equal(parsedAddress.region, "València");
        test.equal(parsedAddress.postalCode, "46015");
        test.equal(parsedAddress.country, "Spain");
        test.equal(parsedAddress.countryCode, "ES");
        test.done();
    },
    
    testFormatAddressES: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Avda.General Avilés, 35-37, Bajo",
            locality: "Sedaví",
            region: "València",
            postalCode: "46015",
            country: "España",
            countryCode: "ES"
        }, {locale: 'es-ES'});
        
        var expected = "Avda.General Avilés, 35-37, Bajo\n46015 - Sedaví València\nEspaña";
        var formatter = new AddressFmt({locale: 'es-ES'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressESFromUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Avda.General Avilés, 35-37, Bajo",
            locality: "Sedaví",
            region: "València",
            postalCode: "46015",
            country: "Spain",
            countryCode: "ES"
        }, {locale: 'en-US'});
        
        var expected = "Avda.General Avilés, 35-37, Bajo\n46015 - Sedaví València\nSpain";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
    
};
