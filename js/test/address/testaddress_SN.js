/*
 * testaddress_SN.js - test the address parsing and formatting routines
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

module.exports.testaddress_SN = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testParseAddressSNNormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("La Poste Direction de la production postale 6 RUE ABDOULAYE SECK MARIE PÉRSINE\n10000 DAKAR\nSenegal", {locale: 'fr-SN'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "La Poste Direction de la production postale 6 RUE ABDOULAYE SECK MARIE PÉRSINE");
        test.equal(parsedAddress.locality, "DAKAR");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.country, "Senegal");
        test.equal(parsedAddress.postalCode, "10000");
        test.equal(parsedAddress.countryCode, "SN");
        test.done();
    },
    testParseAddressSNNoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("La Poste Direction de la production postale 6 RUE ABDOULAYE SECK MARIE PÉRSINE\nDAKAR\nSenegal", {locale: 'fr-SN'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "La Poste Direction de la production postale 6 RUE ABDOULAYE SECK MARIE PÉRSINE");
        test.equal(parsedAddress.locality, "DAKAR");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.country, "Senegal");
        test.equal(parsedAddress.countryCode, "SN");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    testParseAddressSNNoCountry: function(test) {
        test.expect(7);
        var parsedAddress = new Address("La Poste Direction de la production postale 6 RUE ABDOULAYE SECK MARIE PÉRSINE\n10000 DAKAR", {locale: 'fr-SN'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "La Poste Direction de la production postale 6 RUE ABDOULAYE SECK MARIE PÉRSINE");
        test.equal(parsedAddress.locality, "DAKAR");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "10000");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "SN");
        test.done();
    },
    testParseAddressSNManyLines: function(test) {
        test.expect(7);
        var parsedAddress = new Address("La Poste\nDirection de la production\npostale 6 RUE ABDOULAYE SECK MARIE PÉRSINE\n10000\nDAKAR\nSenegal\n\n\n", {locale: 'fr-SN'});
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "La Poste, Direction de la production, postale 6 RUE ABDOULAYE SECK MARIE PÉRSINE");
        test.equal(parsedAddress.locality, "DAKAR");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "10000");
        test.equal(parsedAddress.country, "Senegal");
        test.equal(parsedAddress.countryCode, "SN");
        test.done();
    },
    testParseAddressSNOneLine: function(test) {
        test.expect(7);
        var parsedAddress = new Address("La Poste , Direction de la production , postale 6 RUE ABDOULAYE SECK MARIE PÉRSINE , 10000, DAKAR , Senegal", {locale: 'fr-SN'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "La Poste, Direction de la production, postale 6 RUE ABDOULAYE SECK MARIE PÉRSINE");
        test.equal(parsedAddress.locality, "DAKAR");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "10000");
        test.equal(parsedAddress.country, "Senegal");
        test.equal(parsedAddress.countryCode, "SN");
        test.done();
    },
    testParseAddressSNSuperfluousWhitespace: function(test) {
        test.expect(7);
        var parsedAddress = new Address("\t\t\t\tLa Poste\t\t\tDirection de la production postale\t\t\r6 RUE ABDOULAYE SECK MARIE PÉRSINE\t\n10000\n\tDAKAR\n\t Senegal\n\n\n", {locale: 'fr-SN'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "La Poste Direction de la production postale 6 RUE ABDOULAYE SECK MARIE PÉRSINE");
        test.equal(parsedAddress.locality, "DAKAR");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "10000");
        test.equal(parsedAddress.country, "Senegal");
        test.equal(parsedAddress.countryCode, "SN");
        test.done();
    },
    testParseAddressSNNoDelimiters: function(test) {
        test.expect(7);
        var parsedAddress = new Address("La Poste Direction de la production postale 6 RUE ABDOULAYE SECK MARIE PÉRSINE 12500 DAKAR Senegal", {locale: 'fr-SN'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "La Poste Direction de la production postale 6 RUE ABDOULAYE SECK MARIE PÉRSINE");
        test.equal(parsedAddress.locality, "DAKAR");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "12500");
        test.equal(parsedAddress.country, "Senegal");
        test.equal(parsedAddress.countryCode, "SN");
        test.done();
    },
    testParseAddressSNFromUS: function(test) {
        test.expect(7);
        var parsedAddress = new Address("La Poste Direction de la production postale 6 RUE ABDOULAYE SECK MARIE PÉRSINE\n10000 DAKAR\nSenegal", {locale: 'en-US'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "La Poste Direction de la production postale 6 RUE ABDOULAYE SECK MARIE PÉRSINE");
        test.equal(parsedAddress.locality, "DAKAR");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "10000");
        test.equal(parsedAddress.country, "Senegal");
        test.equal(parsedAddress.countryCode, "SN");
        test.done();
    },
    testFormatAddressSN: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "La Poste Direction de la production postale 6 RUE ABDOULAYE SECK MARIE PÉRSINE",
            locality: "DAKAR",
            country: "Senegal",
            countryCode: "SN"
        }, {locale: 'fr-SN'});

        var expected = "La Poste Direction de la production postale 6 RUE ABDOULAYE SECK MARIE PÉRSINE\nDAKAR\nSenegal";
        var formatter = new AddressFmt({locale: 'fr-SN'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    testFormatAddressSNFromUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "La Poste Direction de la production postale 6 RUE ABDOULAYE SECK MARIE PÉRSINE",
            locality: "DAKAR",
            country: "Senegal",
            countryCode: "SN"
        }, {locale: 'en-US'});

        var expected = "La Poste Direction de la production postale 6 RUE ABDOULAYE SECK MARIE PÉRSINE\nDAKAR\nSenegal";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    testParseAddressSN1: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Monsieur Amadou Diop, Résidence Fallou Ndiaye, Appartement 12, 12 Avenue Cheikh Anta Diop, 12500 Dakar, SENEGAL");
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Monsieur Amadou Diop, Résidence Fallou Ndiaye, Appartement 12, 12 Avenue Cheikh Anta Diop");
        test.equal(parsedAddress.locality, "Dakar");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "12500");
        test.equal(parsedAddress.country, "SENEGAL");
        test.equal(parsedAddress.countryCode, "SN");
        test.done();
    },
    testParseAddressSN2: function(test) {
        test.expect(6);
        var parsedAddress = new Address("American Embassy Dakar, Route des Almadies, Dakar, Senegal");
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "American Embassy Dakar, Route des Almadies");
        test.equal(parsedAddress.locality, "Dakar");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.country, "Senegal");
        test.equal(parsedAddress.countryCode, "SN");
        test.done();
    },
    testFormatAddressSN1: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Monsieur Amadou DIOP, Appartement 12, Résidence Fallou Ndiaye",
            locality: "DAKAR",
            postalCode: "12500",
            country: "Senegal",
            countryCode: "SN"
        }, {locale: 'en-US'});

        var expected = "Monsieur Amadou DIOP, Appartement 12, Résidence Fallou Ndiaye\n12500 DAKAR\nSenegal";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
};