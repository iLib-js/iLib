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

module.exports.testaddress_CH = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testParseAddressCHNormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Herr Hans Katze Tastentanzenstrasse 5/16\n1234 Zuerich\nSWITZERLAND", {locale: 'de-CH'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Herr Hans Katze Tastentanzenstrasse 5/16");
        test.equal(parsedAddress.locality, "Zuerich");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "1234");
        test.equal(parsedAddress.country, "SWITZERLAND");
        test.equal(parsedAddress.countryCode, "CH");
        test.done();
    },
    testParseAddressCHNormalWithAccents: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Herr Hans Katze Tastentanzenstrasse 5/16\n1234 Zürich\nSWITZERLAND", {locale: 'de-CH'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Herr Hans Katze Tastentanzenstrasse 5/16");
        test.equal(parsedAddress.locality, "Zürich");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "1234");
        test.equal(parsedAddress.country, "SWITZERLAND");
        test.equal(parsedAddress.countryCode, "CH");
        test.done();
    },
    testParseAddressCHNormalforItaly: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Mr. Hans gatto Tastentanz Via 5/16\n1234 Zurich\nSVIZZERA", {locale: 'it-CH'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Mr. Hans gatto Tastentanz Via 5/16");
        test.equal(parsedAddress.locality, "Zurich");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "1234");
        test.equal(parsedAddress.country, "SVIZZERA");
        test.equal(parsedAddress.countryCode, "CH");
        test.done();
    },
    testParseAddressCHNormalforFrance: function(test) {
        test.expect(7);
        var parsedAddress = new Address("M. Hans chat Tastentanz rue 5/16\n1234 Zurich\nSUISSE", {locale: 'fr-CH'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "M. Hans chat Tastentanz rue 5/16");
        test.equal(parsedAddress.locality, "Zurich");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "1234");
        test.equal(parsedAddress.country, "SUISSE");
        test.equal(parsedAddress.countryCode, "CH");
        test.done();
    },
    testParseAddressCHNoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Herr Hans Katze Tastentanzenstrasse 5/16\nZuerich\nSWITZERLAND", {locale: 'de-CH'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Herr Hans Katze Tastentanzenstrasse 5/16");
        test.equal(parsedAddress.locality, "Zuerich");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.country, "SWITZERLAND");
        test.equal(parsedAddress.countryCode, "CH");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    testParseAddressCHNoCountry: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Herr Hans Katze Tastentanzenstrasse 5/16\n1234 Zuerich", {locale: 'de-CH'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Herr Hans Katze Tastentanzenstrasse 5/16");
        test.equal(parsedAddress.locality, "Zuerich");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "1234");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "CH");
        test.done();
    },
    testParseAddressCHManyLines: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Herr Hans Katze\nTastentanzenstrasse\n5/16\n1234\nZuerich\nSWITZERLAND\n\n", {locale: 'de-CH'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Herr Hans Katze, Tastentanzenstrasse, 5/16");
        test.equal(parsedAddress.locality, "Zuerich");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "1234");
        test.equal(parsedAddress.country, "SWITZERLAND");
        test.equal(parsedAddress.countryCode, "CH");
        test.done();
    },
    testParseAddressCHOneLine: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Herr Hans Katze , Tastentanzenstrasse , 5/16 , 1234 , Zuerich , SWITZERLAND", {locale: 'de-CH'});
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Herr Hans Katze, Tastentanzenstrasse, 5/16");
        test.equal(parsedAddress.locality, "Zuerich");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "1234");
        test.equal(parsedAddress.country, "SWITZERLAND");
        test.equal(parsedAddress.countryCode, "CH");
        test.done();
    },
    testParseAddressCHSuperfluousWhitespace: function(test) {
        test.expect(7);
        var parsedAddress = new Address("\t\t\t\Herr Hans Katze\nTastentanzenstrasse\n5/16\n\t1234\n\t\tZuerich\n\t\tSWITZERLAND\t\t", {locale: 'de-CH'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Herr Hans Katze, Tastentanzenstrasse, 5/16");
        test.equal(parsedAddress.locality, "Zuerich");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "1234");
        test.equal(parsedAddress.country, "SWITZERLAND");
        test.equal(parsedAddress.countryCode, "CH");
        test.done();
    },
    testParseAddressCHNoDelimiters: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Herr Hans Katze Tastentanzenstrasse 5/16 1234 Zuerich SWITZERLAND", {locale: 'de-CH'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Herr Hans Katze Tastentanzenstrasse 5/16");
        test.equal(parsedAddress.locality, "Zuerich");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "1234");
        test.equal(parsedAddress.country, "SWITZERLAND");
        test.equal(parsedAddress.countryCode, "CH");
        test.done();
    },
    testParseAddressCHFromUS: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Herr Hans Katze Tastentanzenstrasse 5/16\n1234 Zuerich\nSWITZERLAND", {locale: 'en-US'});

        // the country name is in English because this address is for a contact in a US database

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Herr Hans Katze Tastentanzenstrasse 5/16");
        test.equal(parsedAddress.locality, "Zuerich");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "1234");
        test.equal(parsedAddress.country, "SWITZERLAND");
        test.equal(parsedAddress.countryCode, "CH");
        test.done();
    },
    testFormatAddressCH: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Herr Hans Katze Tastentanzenstrasse 5/16",
            locality: "Zuerich",
            postalCode: "1234",
            country: "SWITZERLAND",
            countryCode: "CH"
        }, {locale: 'de-CH'});

        var expected = "Herr Hans Katze Tastentanzenstrasse 5/16\n1234 Zuerich\nSWITZERLAND";
        var formatter = new AddressFmt({locale: 'de-CH'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    testFormatAddressCHFromUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Herr Hans Katze Tastentanzenstrasse 5/16",
            locality: "Zuerich",
            postalCode: "1234",
            country: "SWITZERLAND",
            countryCode: "CH"
        }, {locale: 'en-US'});

        var expected = "Herr Hans Katze Tastentanzenstrasse 5/16\n1234 Zuerich\nSWITZERLAND";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
};