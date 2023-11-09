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

module.exports.testaddress_BO = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testParseAddressBONormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("SEÑOR, FEDERICO TERRAZAS ARIAS, CALLE ADELA ZAMUDIO 1716, PO BOX 580, COCHABAMBA, BOLIVIA", {locale: 'es-BO'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "SEÑOR, FEDERICO TERRAZAS ARIAS, CALLE ADELA ZAMUDIO 1716, PO BOX 580");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "COCHABAMBA");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "BOLIVIA");
        test.equal(parsedAddress.countryCode, "BO");
        test.done();
    },
    testParseAddressBONoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("SEÑOR, FEDERICO TERRAZAS ARIAS, CALLE ADELA ZAMUDIO 1716, PO BOX 580, COCHABAMBA, BOLIVIA", {locale: 'es-BO'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "SEÑOR, FEDERICO TERRAZAS ARIAS, CALLE ADELA ZAMUDIO 1716, PO BOX 580");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "COCHABAMBA");
        test.equal(parsedAddress.country, "BOLIVIA");
        test.equal(parsedAddress.countryCode, "BO");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    testParseAddressBOManyLines: function(test) {
        test.expect(7);
        var parsedAddress = new Address("SEÑOR\nFEDERICO TERRAZAS ARIAS, CALLE ADELA ZAMUDIO 1716, PO BOX 580\nCOCHABAMBA\nBOLIVIA", {locale: 'es-BO'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "SEÑOR, FEDERICO TERRAZAS ARIAS, CALLE ADELA ZAMUDIO 1716, PO BOX 580");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "COCHABAMBA");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "BOLIVIA");
        test.equal(parsedAddress.countryCode, "BO");
        test.done();
    },
    testParseAddressBOOneLine: function(test) {
        test.expect(7);
        var parsedAddress = new Address("SEÑOR, FEDERICO TERRAZAS ARIAS, CALLE ADELA ZAMUDIO 1716, PO BOX 580, COCHABAMBA, BOLIVIA", {locale: 'es-BO'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "SEÑOR, FEDERICO TERRAZAS ARIAS, CALLE ADELA ZAMUDIO 1716, PO BOX 580");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "COCHABAMBA");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "BOLIVIA");
        test.equal(parsedAddress.countryCode, "BO");
        test.done();
    },
    testParseAddressBOSuperfluousWhitespace: function(test) {
        test.expect(7);
        var parsedAddress = new Address("SEÑOR, FEDERICO TERRAZAS ARIAS, CALLE ADELA ZAMUDIO 1716, PO BOX 580  \n\t\n COCHABAMBA\t\n\n BOLIVIA  \n  \t\t\t", {locale: 'es-BO'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "SEÑOR, FEDERICO TERRAZAS ARIAS, CALLE ADELA ZAMUDIO 1716, PO BOX 580");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "COCHABAMBA");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "BOLIVIA");
        test.equal(parsedAddress.countryCode, "BO");
        test.done();
    },
    testParseAddressBONoDelimiters: function(test) {
        test.expect(7);
        var parsedAddress = new Address("SEÑOR FEDERICO TERRAZAS ARIAS CALLE ADELA ZAMUDIO 1716 PO BOX 580 COCHABAMBA BOLIVIA", {locale: 'es-BO'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "SEÑOR FEDERICO TERRAZAS ARIAS CALLE ADELA ZAMUDIO 1716 PO BOX 580");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "COCHABAMBA");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "BOLIVIA");
        test.equal(parsedAddress.countryCode, "BO");
        test.done();
    },
    testParseAddressBOSpecialChars: function(test) {
        test.expect(7);
        var parsedAddress = new Address("SEÑOR, FEDERICO TERRAZAS ARIAS, CALLE ADELA ZAMUDIO 1716, PO BOX 580, COCHABAMBA, BOLIVIA", {locale: 'es-BO'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "SEÑOR, FEDERICO TERRAZAS ARIAS, CALLE ADELA ZAMUDIO 1716, PO BOX 580");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "COCHABAMBA");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "BOLIVIA");
        test.equal(parsedAddress.countryCode, "BO");
        test.done();
    },
    testParseAddressBOFromUS: function(test) {
        test.expect(7);
        var parsedAddress = new Address("SEÑOR, FEDERICO TERRAZAS ARIAS, CALLE ADELA ZAMUDIO 1716, PO BOX 580, COCHABAMBA, BOLIVIA", {locale: 'en-US'});

        // the country name is in English because this address is for a contact in a US database

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "SEÑOR, FEDERICO TERRAZAS ARIAS, CALLE ADELA ZAMUDIO 1716, PO BOX 580");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "COCHABAMBA");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "BOLIVIA");
        test.equal(parsedAddress.countryCode, "BO");
        test.done();
    },
    testFormatAddressBO: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "SEÑOR, FEDERICO TERRAZAS ARIAS, CALLE ADELA ZAMUDIO 1716, PO BOX 580",
            locality: "COCHABAMBA",
            country: "BOLIVIA",
            countryCode: "BO"
        }, {locale: 'es-BO'});

        var expected = "SEÑOR, FEDERICO TERRAZAS ARIAS, CALLE ADELA ZAMUDIO 1716, PO BOX 580\nCOCHABAMBA\nBOLIVIA";
        var formatter = new AddressFmt({locale: 'es-BO'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    testFormatAddressBOFromUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "SEÑOR, FEDERICO TERRAZAS ARIAS, CALLE ADELA ZAMUDIO 1716, PO BOX 580",
            country: "BOLIVIA",
            locality: "COCHABAMBA",
            countryCode: "BO"
        }, {locale: 'en-US'});

        var expected = "SEÑOR, FEDERICO TERRAZAS ARIAS, CALLE ADELA ZAMUDIO 1716, PO BOX 580\nCOCHABAMBA\nBOLIVIA";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    testFormatAddressBOHotel: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Calle Arturo Costa De La Torre 1359 A 1/2 Cuadra De La Plaza",
            country: "BOLIVIA",
            locality: "San Pedro",
            countryCode: "BO"
        }, {locale: 'en-US'});

        var expected = "Calle Arturo Costa De La Torre 1359 A 1/2 Cuadra De La Plaza\nSan Pedro\nBOLIVIA";
        var formatter = new AddressFmt({locale: 'es-BO'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    testFormatAddressBOUNICEF: function(test) {
        test.expect(7);
        var parsedAddress = new Address("UNICEF, United Nations Children's Fund, P.O. Box 3-12435,La Paz, Bolivia", {locale: 'es-BO'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "UNICEF, United Nations Children's Fund, P.O. Box 3-12435");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "La Paz");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "Bolivia");
        test.equal(parsedAddress.countryCode, "BO");
        test.done();
    }
};