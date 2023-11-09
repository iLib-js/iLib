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

module.exports.testaddress_BA = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testParseAddressBANormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Nedim Marevac, ul. Skenderija 60, 71000 SARAJEVO, BOSNIA", {locale: 'bs-Latn-BA'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Nedim Marevac, ul. Skenderija 60");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "SARAJEVO");
        test.equal(parsedAddress.postalCode, "71000");
        test.equal(parsedAddress.country, "BOSNIA");
        test.equal(parsedAddress.countryCode, "BA");
        test.done();
    },
    testParseAddressBANoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Nedim Marevac, ul. Skenderija 60, SARAJEVO, BOSNIA", {locale: 'bs-Latn-BA'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Nedim Marevac, ul. Skenderija 60");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "SARAJEVO");
        test.equal(parsedAddress.country, "BOSNIA");
        test.equal(parsedAddress.countryCode, "BA");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    testParseAddressBAManyLines: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Nedim Marevac\nul. Skenderija 60\n71000 SARAJEVO\nBOSNIA", {locale: 'bs-Latn-BA'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Nedim Marevac, ul. Skenderija 60");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "SARAJEVO");
        test.equal(parsedAddress.postalCode, "71000");
        test.equal(parsedAddress.country, "BOSNIA");
        test.equal(parsedAddress.countryCode, "BA");
        test.done();
    },
    testParseAddressBAOneLine: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Nedim Marevac, ul. Skenderija 60, 71000 SARAJEVO, BOSNIA", {locale: 'bs-Latn-BA'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Nedim Marevac, ul. Skenderija 60");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "SARAJEVO");
        test.equal(parsedAddress.postalCode, "71000");
        test.equal(parsedAddress.country, "BOSNIA");
        test.equal(parsedAddress.countryCode, "BA");
        test.done();
    },
    testParseAddressBASuperfluousWhitespace: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Nedim Marevac, ul. Skenderija 60  \n\t\n 71000 SARAJEVO\t\n\n BOSNIA  \n  \t\t\t", {locale: 'bs-Latn-BA'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Nedim Marevac, ul. Skenderija 60");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "SARAJEVO");
        test.equal(parsedAddress.postalCode, "71000");
        test.equal(parsedAddress.country, "BOSNIA");
        test.equal(parsedAddress.countryCode, "BA");
        test.done();
    },
    testParseAddressBANoDelimiters: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Nedim Marevac FEDERICO TERRAZAS ARIAS CALLE ADELA ZAMUDIO 1716 PO BAX 580 71000 SARAJEVO BOSNIA", {locale: 'bs-Latn-BA'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Nedim Marevac FEDERICO TERRAZAS ARIAS CALLE ADELA ZAMUDIO 1716 PO BAX 580");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "SARAJEVO");
        test.equal(parsedAddress.postalCode, "71000");
        test.equal(parsedAddress.country, "BOSNIA");
        test.equal(parsedAddress.countryCode, "BA");
        test.done();
    },
    testParseAddressBASpeciAMChars: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Nedim Marevac, ul. Skenderija 60, 71000 SARAJEVO, BOSNIA", {locale: 'bs-Latn-BA'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Nedim Marevac, ul. Skenderija 60");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "SARAJEVO");
        test.equal(parsedAddress.postalCode, "71000");
        test.equal(parsedAddress.country, "BOSNIA");
        test.equal(parsedAddress.countryCode, "BA");
        test.done();
    },
    testParseAddressBAFromUS: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Nedim Marevac, ul. Skenderija 60, 71000 SARAJEVO, BOSNIA", {locale: 'en-US'});

        // the country name is in English because this address is for a contact in a US database

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Nedim Marevac, ul. Skenderija 60");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "SARAJEVO");
        test.equal(parsedAddress.postalCode, "71000");
        test.equal(parsedAddress.country, "BOSNIA");
        test.equal(parsedAddress.countryCode, "BA");
        test.done();
    },
    testFormatAddressBA: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Nedim Marevac, ul. Skenderija 60",
            locality: "71000 SARAJEVO",
            country: "BOSNIA",
            countryCode: "BA"
        }, {locale: 'bs-Latn-BA'});

        var expected = "Nedim Marevac, ul. Skenderija 60\n71000 SARAJEVO\nBOSNIA";
        var formatter = new AddressFmt({locale: 'bs-Latn-BA'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    testFormatAddressBAFromUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Nedim Marevac, ul. Skenderija 60",
            country: "BOSNIA",
            locality: "71000 SARAJEVO",
            countryCode: "BA"
        }, {locale: 'en-US'});

        var expected = "Nedim Marevac, ul. Skenderija 60\n71000 SARAJEVO\nBOSNIA";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
};