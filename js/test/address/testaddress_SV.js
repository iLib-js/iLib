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
    var Address = require("../../lib/Address.js");
}
if (typeof(AddressFmt) === "undefined") {
    var AddressFmt = require("../../lib/AddressFmt.js");
}


if (typeof(ilib) === "undefined") {
    var ilib = require("../../lib/ilib.js");
}

module.exports.testaddress_SV = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAddressSVNormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Señora Rina Isabel Peña Borja, Colonia Universitaria Norte #2, Calle Alcaine #29, CP 1120 - MEJICANOS, SAN SALVADOR, EL SALVADOR", {locale: 'es-SV'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Señora Rina Isabel Peña Borja, Colonia Universitaria Norte #2, Calle Alcaine #29");
        test.equal(parsedAddress.region, "SAN SALVADOR");
        test.equal(parsedAddress.locality, "MEJICANOS");
        test.equal(parsedAddress.postalCode, "CP 1120");
        test.equal(parsedAddress.country, "EL SALVADOR");
        test.equal(parsedAddress.countryCode, "SV");
        test.done();
    },
    
    testParseAddressSVNoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Señora Rina Isabel Peña Borja, Colonia Universitaria Norte #2, Calle Alcaine #29, MEJICANOS, SAN SALVADOR, EL SALVADOR", {locale: 'es-SV'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Señora Rina Isabel Peña Borja, Colonia Universitaria Norte #2, Calle Alcaine #29");
        test.equal(parsedAddress.region, "SAN SALVADOR");
        test.equal(parsedAddress.locality, "MEJICANOS");
        test.equal(parsedAddress.country, "EL SALVADOR");
        test.equal(parsedAddress.countryCode, "SV");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    
    testParseAddressSVManyLines: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Señora Rina Isabel Peña Borja\nColonia Universitaria Norte #2\nCalle Alcaine #29\nCP 1120 - MEJICANOS\nSAN SALVADOR\nEL SALVADOR", {locale: 'es-SV'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Señora Rina Isabel Peña Borja, Colonia Universitaria Norte #2, Calle Alcaine #29");
        test.equal(parsedAddress.region, "SAN SALVADOR");
        test.equal(parsedAddress.locality, "MEJICANOS");
        test.equal(parsedAddress.postalCode, "CP 1120");
        test.equal(parsedAddress.country, "EL SALVADOR");
        test.equal(parsedAddress.countryCode, "SV");
        test.done();
    },
    
    testParseAddressSVOneLine: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Señora Rina Isabel Peña Borja, Colonia Universitaria Norte #2, Calle Alcaine #29, CP 1120 - MEJICANOS, SAN SALVADOR, EL SALVADOR", {locale: 'es-SV'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Señora Rina Isabel Peña Borja, Colonia Universitaria Norte #2, Calle Alcaine #29");
        test.equal(parsedAddress.region, "SAN SALVADOR");
        test.equal(parsedAddress.locality, "MEJICANOS");
        test.equal(parsedAddress.postalCode, "CP 1120");
        test.equal(parsedAddress.country, "EL SALVADOR");
        test.equal(parsedAddress.countryCode, "SV");
        test.done();
    },
    
    testParseAddressSVSuperfluousWhitespace: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Señora Rina Isabel Peña Borja, Colonia Universitaria Norte #2, Calle Alcaine #29  \n\t\n CP 1120 - MEJICANOS, SAN SALVADOR\t\n\n EL SALVADOR  \n  \t\t\t", {locale: 'es-SV'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Señora Rina Isabel Peña Borja, Colonia Universitaria Norte #2, Calle Alcaine #29");
        test.equal(parsedAddress.region, "SAN SALVADOR");
        test.equal(parsedAddress.locality, "MEJICANOS");
        test.equal(parsedAddress.postalCode, "CP 1120");
        test.equal(parsedAddress.country, "EL SALVADOR");
        test.equal(parsedAddress.countryCode, "SV");
        test.done();
    },
    
    testParseAddressSVNoDelimiters: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Señora Rina Isabel Peña Borja Colonia Universitaria Norte #2 Calle Alcaine #29 CP 1120 - MEJICANOS SAN SALVADOR EL SALVADOR", {locale: 'es-SV'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Señora Rina Isabel Peña Borja Colonia Universitaria Norte #2 Calle Alcaine #29");
        test.equal(parsedAddress.region, "SAN SALVADOR");
        test.equal(parsedAddress.locality, "MEJICANOS");
        test.equal(parsedAddress.postalCode, "CP 1120");
        test.equal(parsedAddress.country, "EL SALVADOR");
        test.equal(parsedAddress.countryCode, "SV");
        test.done();
    },
    
    testParseAddressSVSpecialChars: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Señora Rina Isabel Peña Borja, Colonia Universitaria Norte #2, Calle Alcaine #29, CP 1120 - MEJICANOS, SAN SALVADOR, EL SALVADOR", {locale: 'es-SV'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Señora Rina Isabel Peña Borja, Colonia Universitaria Norte #2, Calle Alcaine #29");
        test.equal(parsedAddress.region, "SAN SALVADOR");
        test.equal(parsedAddress.locality, "MEJICANOS");
        test.equal(parsedAddress.postalCode, "CP 1120");
        test.equal(parsedAddress.country, "EL SALVADOR");
        test.equal(parsedAddress.countryCode, "SV");
        test.done();
    },
    
    testParseAddressSVFromUS: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Señora Rina Isabel Peña Borja, Colonia Universitaria Norte #2, Calle Alcaine #29, CP 1120 - MEJICANOS, SAN SALVADOR, EL SALVADOR", {locale: 'en-US'});
        
        // the country name is in English because this address is for a contact in a US database
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Señora Rina Isabel Peña Borja, Colonia Universitaria Norte #2, Calle Alcaine #29");
        test.equal(parsedAddress.region, "SAN SALVADOR");
        test.equal(parsedAddress.locality, "MEJICANOS");
        test.equal(parsedAddress.postalCode, "CP 1120");
        test.equal(parsedAddress.country, "EL SALVADOR");
        test.equal(parsedAddress.countryCode, "SV");
        test.done();
    },
    
    testFormatAddressSV: function(test) {
        test.expect(1);
            var parsedAddress = new Address({
            streetAddress: "Señora Rina Isabel Peña Borja\nColonia Universitaria Norte #2\nCalle Alcaine #29",
            region: "SAN SALVADOR",
            locality: "MEJICANOS",
            postalCode: "CP 1120",
            country: "EL SALVADOR",
            countryCode: "SV"
        }, {locale: 'es-SV'});
        
        var expected = "Señora Rina Isabel Peña Borja\nColonia Universitaria Norte #2\nCalle Alcaine #29\nCP 1120 - MEJICANOS\nSAN SALVADOR\nEL SALVADOR";
        var formatter = new AddressFmt({locale: 'es-SV'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressSVFromUS: function(test) {
        test.expect(1);
            var parsedAddress = new Address({
            streetAddress: "Señora Rina Isabel Peña Borja\nColonia Universitaria Norte #2\nCalle Alcaine #29",
            region: "SAN SALVADOR",
            locality: "MEJICANOS",
            postalCode: "CP 1120",
            country: "EL SALVADOR",
            countryCode: "SV"
        }, {locale: 'es-SV'});
        
        var expected = "Señora Rina Isabel Peña Borja\nColonia Universitaria Norte #2\nCalle Alcaine #29\nCP 1120 - MEJICANOS\nSAN SALVADOR\nEL SALVADOR";
        var formatter = new AddressFmt({locale: 'es-SV'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
    
};
