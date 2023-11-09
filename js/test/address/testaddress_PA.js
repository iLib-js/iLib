/*
 * testaddress_PA.js - test the address parsing and formatting routines
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

module.exports.testaddress_PA = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testParseAddressPANormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Calle 52 y Ricardo Arias.\nArea Bancaria\nPanama City\nPanama", {locale: 'es-PA'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Calle 52 y Ricardo Arias.");
        test.equal(parsedAddress.locality, "Area Bancaria");
        test.equal(parsedAddress.region, "Panama City");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "Panama");
        test.equal(parsedAddress.countryCode, "PA");
        test.done();
    },
    testParseAddressPANoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Calle 52 y Ricardo Arias.\nArea Bancaria\nPanama City\nPanama", {locale: 'es-PA'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Calle 52 y Ricardo Arias.");
        test.equal(parsedAddress.locality, "Area Bancaria");
        test.equal(parsedAddress.region, "Panama City");
        test.equal(parsedAddress.country, "Panama");
        test.equal(parsedAddress.countryCode, "PA");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    testParseAddressPANoCountry: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Calle 52 y Ricardo Arias.\nArea Bancaria\nPanama City", {locale: 'es-PA'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Calle 52 y Ricardo Arias.");
        test.equal(parsedAddress.locality, "Area Bancaria");
        test.equal(parsedAddress.region, "Panama City");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "PA");
        test.done();
    },
    testParseAddressPAManyLines: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Calle 52 y\nRicardo Arias.\nArea Bancaria\nPanama City\nPanama", {locale: 'es-PA'});

        test.ok(typeof(parsedAddress) !== "undefined");
          test.equal(parsedAddress.streetAddress, "Calle 52 y, Ricardo Arias.");
        test.equal(parsedAddress.locality, "Area Bancaria");
        test.equal(parsedAddress.region, "Panama City");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "Panama");
        test.equal(parsedAddress.countryCode, "PA");
        test.done();
    },
    testParseAddressPAOneLine: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Calle 52 y , Ricardo Arias. , Area Bancaria , Panama City , Panama", {locale: 'es-PA'});

        test.ok(typeof(parsedAddress) !== "undefined");
          test.equal(parsedAddress.streetAddress, "Calle 52 y, Ricardo Arias.");
        test.equal(parsedAddress.locality, "Area Bancaria");
        test.equal(parsedAddress.region, "Panama City");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "Panama");
        test.equal(parsedAddress.countryCode, "PA");
        test.done();
    },
    testParseAddressPASuperfluousWhitespace: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Calle 52 y\n\n\t\r\t\t\rRicardo Arias.\r\r\r\t\t\r\n\n\nArea Bancaria\t\r\r\rPanama City\t\t\rPanama", {locale: 'es-PA'});

        test.ok(typeof(parsedAddress) !== "undefined");
          test.equal(parsedAddress.streetAddress, "Calle 52 y, Ricardo Arias.");
        test.equal(parsedAddress.locality, "Area Bancaria");
        test.equal(parsedAddress.region, "Panama City");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "Panama");
        test.equal(parsedAddress.countryCode, "PA");
        test.done();
    },
    testParseAddressPAFromUS: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Calle 52 y Ricardo Arias.\nArea Bancaria\nPanama City\nPanama", {locale: 'es-PA'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Calle 52 y Ricardo Arias.");
        test.equal(parsedAddress.locality, "Area Bancaria");
        test.equal(parsedAddress.region, "Panama City");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "Panama");
        test.equal(parsedAddress.countryCode, "PA");
        test.done();
    },
    testFormatAddressPA: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Calle 52 y Ricardo Arias.",
            locality: "Area Bancaria",
            postalCode: "1010",
            region: "Panama City",
            country: "Panama",
            countryCode: "PA"
        }, {locale: 'es-PA'});

        var expected = "Calle 52 y Ricardo Arias.\nArea Bancaria\nPanama City\nPanama";
        var formatter = new AddressFmt({locale: 'es-PA'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    testFormatAddressPAFromUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Calle 52 y Ricardo Arias.",
            locality: "Area Bancaria",
            postalCode: "1010",
            region: "Panama City",
            country: "Panama",
            countryCode: "PA"
        }, {locale: 'en-US'});

        var expected = "Calle 52 y Ricardo Arias.\nArea Bancaria\nPanama City\nPanama";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    testParseAddressPANormal1: function(test) {
        test.expect(7);
        var parsedAddress = new Address("MARTÍN GUTIERREZ,Via Israel 3,0424,VOLCÁN,Chiriquí,PANAMA", {locale: 'es-PA'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "MARTÍN GUTIERREZ, Via Israel 3, 0424");
        test.equal(parsedAddress.locality, "VOLCÁN");
        test.equal(parsedAddress.region, "Chiriquí");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "PANAMA");
        test.equal(parsedAddress.countryCode, "PA");
        test.done();
    },
    testParseAddressPANormal2: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Parque Industrial Milla 8,Ciudad de Panamá,Panamá,PANAMA", {locale: 'es-PA'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Parque Industrial Milla 8");
        test.equal(parsedAddress.locality, "Ciudad de Panamá");
        test.equal(parsedAddress.region, "Panamá");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "PANAMA");
        test.equal(parsedAddress.countryCode, "PA");
        test.done();
    },
    testParseAddressPANormal3: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Edificio Plaza Fidanque, Piso 2,P.O Box 0816-01349,Ciudad de Panamá,Panamá,PANAMA", {locale: 'es-PA'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Edificio Plaza Fidanque, Piso 2, P.O Box 0816-01349");
        test.equal(parsedAddress.locality, "Ciudad de Panamá");
        test.equal(parsedAddress.region, "Panamá");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "PANAMA");
        test.equal(parsedAddress.countryCode, "PA");
        test.done();
    }
};