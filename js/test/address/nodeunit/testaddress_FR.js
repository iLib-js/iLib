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

module.exports.testaddress_FR = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAddressFRNormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("38 avenue de l‘Opéra\n75002 Paris\nFrance", {locale: 'fr-FR'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "38 avenue de l‘Opéra");
        test.equal(parsedAddress.locality, "Paris");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "75002");
        test.equal(parsedAddress.country, "France");
        test.equal(parsedAddress.countryCode, "FR");
        test.done();
    },
    
    testParseAddressFRNoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("80 rue Camille Desmoulins\nIssy-les-Moulineaux\nFrance", {locale: 'fr-FR'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "80 rue Camille Desmoulins");
        test.equal(parsedAddress.locality, "Issy-les-Moulineaux");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.country, "France");
        test.equal(parsedAddress.countryCode, "FR");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    
    testParseAddressFRNoCountry: function(test) {
        test.expect(7);
        var parsedAddress = new Address("38 avenue de l‘Opéra\n75002 Paris", {locale: 'fr-FR'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "38 avenue de l‘Opéra");
        test.equal(parsedAddress.locality, "Paris");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "75002");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "FR");
        test.done();
    },
    
    testParseAddressFRCedex: function(test) {
        test.expect(8);
        var parsedAddress = new Address("38 avenue de l‘Opéra\n75002 Paris cedex 9\nFrance", {locale: 'fr-FR'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "38 avenue de l‘Opéra");
        test.equal(parsedAddress.locality, "Paris");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "75002");
        test.equal(parsedAddress.postOffice, "cedex 9");
        test.equal(parsedAddress.country, "France");
        test.equal(parsedAddress.countryCode, "FR");
        test.done();
    },
    
    testParseAddressFRManyLines: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Technoparc de l'Aubinière\n3, avenie des Améthystes\n44300\nNantes\nFrance", {locale: 'fr-FR'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Technoparc de l'Aubinière, 3, avenie des Améthystes");
        test.equal(parsedAddress.locality, "Nantes");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "44300");
        test.equal(parsedAddress.country, "France");
        test.equal(parsedAddress.countryCode, "FR");
        test.done();
    },
    
    testParseAddressFROneLine: function(test) {
        test.expect(7);
        var parsedAddress = new Address("4, Avenue Pablo Picasso, 92024 Nanterre, France", {locale: 'fr-FR'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "4, Avenue Pablo Picasso");
        test.equal(parsedAddress.locality, "Nanterre");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "92024");
        test.equal(parsedAddress.country, "France");
        test.equal(parsedAddress.countryCode, "FR");
        test.done();
    },
    
    testParseAddressFRSuperfluousWhitespace: function(test) {
        test.expect(7);
        var parsedAddress = new Address("\t\t\tTechnoparc de l'Aubinière\n  \t \t \t  3, avenie des Améthystes\n\n\t \t \n44300 \t\r \n       Nantes\t\nFrance \r\r\t \t \n\n\n", {locale: 'fr-FR'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Technoparc de l'Aubinière, 3, avenie des Améthystes");
        test.equal(parsedAddress.locality, "Nantes");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "44300");
        test.equal(parsedAddress.country, "France");
        test.equal(parsedAddress.countryCode, "FR");
        test.done();
    },
    
    testParseAddressFRNoDelimiters: function(test) {
        test.expect(7);
        var parsedAddress = new Address("4 Avenue Pablo Picasso 92024 Nanterre France", {locale: 'fr-FR'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "4 Avenue Pablo Picasso");
        test.equal(parsedAddress.locality, "Nanterre");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "92024");
        test.equal(parsedAddress.country, "France");
        test.equal(parsedAddress.countryCode, "FR");
        test.done();
    },
    
    testParseAddressFRFromUS: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Z.I. de Courtaboeuf\n1, avenue du Canada\n91947 Les Ulis\nFrance", {locale: 'en-US'});
        
        // the country name is in English because this address is for a contact in a US database
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Z.I. de Courtaboeuf, 1, avenue du Canada");
        test.equal(parsedAddress.locality, "Les Ulis");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "91947");
        test.equal(parsedAddress.country, "France");
        test.equal(parsedAddress.countryCode, "FR");
        test.done();
    },
    
    testFormatAddressFR: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "38 avenue de l‘Opéra",
            locality: "Paris",
            postalCode: "75002",
            country: "France",
            countryCode: "FR"
        }, {locale: 'fr-FR'});
        
        var expected = "38 avenue de l‘Opéra\n75002 Paris\nFrance";
        var formatter = new AddressFmt({locale: 'fr-FR'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressFRFromUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "38 avenue de l‘Opéra",
            locality: "Paris",
            postalCode: "75002",
            country: "France",
            countryCode: "FR"
        }, {locale: 'en-US'});
        
        var expected = "38 avenue de l‘Opéra\n75002 Paris\nFrance";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
    
};
