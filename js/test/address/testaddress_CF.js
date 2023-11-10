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

module.exports.testaddress_CF = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testParseAddressCFNormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Evangelical Church Elim Bangui – M'Poko, BP 729, BANGUI, CENTRAL AFRICAN REPUBLIC", {locale: 'fr-CF'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Evangelical Church Elim Bangui – M'Poko, BP 729");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "BANGUI");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "CENTRAL AFRICAN REPUBLIC");
        test.equal(parsedAddress.countryCode, "CF");
        test.done();
    },
    testParseAddressCFNoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Evangelical Church Elim Bangui – M'Poko, BP 729, BANGUI, CENTRAL AFRICAN REPUBLIC", {locale: 'fr-CF'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Evangelical Church Elim Bangui – M'Poko, BP 729");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "BANGUI");
        test.equal(parsedAddress.country, "CENTRAL AFRICAN REPUBLIC");
        test.equal(parsedAddress.countryCode, "CF");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    testParseAddressCFManyLines: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Evangelical Church Elim Bangui – M'Poko\nBP 729, BANGUI\nCENTRAL AFRICAN REPUBLIC", {locale: 'fr-CF'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Evangelical Church Elim Bangui – M'Poko, BP 729");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "BANGUI");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "CENTRAL AFRICAN REPUBLIC");
        test.equal(parsedAddress.countryCode, "CF");
        test.done();
    },
    testParseAddressCFOneLine: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Evangelical Church Elim Bangui – M'Poko, BP 729, BANGUI, CENTRAL AFRICAN REPUBLIC", {locale: 'fr-CF'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Evangelical Church Elim Bangui – M'Poko, BP 729");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "BANGUI");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "CENTRAL AFRICAN REPUBLIC");
        test.equal(parsedAddress.countryCode, "CF");
        test.done();
    },
    testParseAddressCFSuperfluousWhitespace: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Evangelical Church Elim Bangui – M'Poko  \n\t\n BP 729\nBANGUI\t\n\n CENTRAL AFRICAN REPUBLIC  \n  \t\t\t", {locale: 'fr-CF'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Evangelical Church Elim Bangui – M'Poko, BP 729");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "BANGUI");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "CENTRAL AFRICAN REPUBLIC");
        test.equal(parsedAddress.countryCode, "CF");
        test.done();
    },
    testParseAddressCFNoDelimiters: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Evangelical Church Elim Bangui – M'Poko BP 729 BANGUI CENTRAL AFRICAN REPUBLIC", {locale: 'fr-CF'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Evangelical Church Elim Bangui – M'Poko BP 729");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "BANGUI");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "CENTRAL AFRICAN REPUBLIC");
        test.equal(parsedAddress.countryCode, "CF");
        test.done();
    },
    testParseAddressCFSpecialChars: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Avenue des Martyrs Boîte postale 344, BANGUI, République centrafricaine", {locale: 'fr-CF'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Avenue des Martyrs Boîte postale 344");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "BANGUI");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "République centrafricaine");
        test.equal(parsedAddress.countryCode, "CF");
        test.done();
    },
    testParseAddressCFFromUS: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Evangelical Church Elim Bangui – M'Poko, BP 729, BANGUI, CENTRAL AFRICAN REPUBLIC", {locale: 'en-US'});

        // the country name is in English because this address is for a contact in a US database

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Evangelical Church Elim Bangui – M'Poko, BP 729");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "BANGUI");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "CENTRAL AFRICAN REPUBLIC");
        test.equal(parsedAddress.countryCode, "CF");
        test.done();
    },
    testFormatAddressCF: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Evangelical Church Elim Bangui – M'Poko\nBP 729",
            locality: "BANGUI",
            country: "CENTRAL AFRICAN REPUBLIC",
            countryCode: "AM"
        }, {locale: 'fr-CF'});

        var expected = "Evangelical Church Elim Bangui – M'Poko\nBP 729\nBANGUI\nCENTRAL AFRICAN REPUBLIC";
        var formatter = new AddressFmt({locale: 'fr-CF'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    testFormatAddressCFFromUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Evangelical Church Elim Bangui – M'Poko\nBP 729",
            country: "CENTRAL AFRICAN REPUBLIC",
            locality: "BANGUI",
            countryCode: "AM"
        }, {locale: 'en-US'});

        var expected = "Evangelical Church Elim Bangui – M'Poko\nBP 729\nBANGUI\nCENTRAL AFRICAN REPUBLIC";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
};