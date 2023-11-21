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

module.exports.testaddress_NL = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testParseAddressNLNormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Achterberglaan 23, 2345 GD Uithoorn, Nederland", {locale: 'nl-NL'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Achterberglaan 23");
        test.equal(parsedAddress.locality, "Uithoorn");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "2345 GD");
        test.equal(parsedAddress.country, "Nederland");
        test.equal(parsedAddress.countryCode, "NL");
        test.done();
    },
    testParseAddressNLNoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Achterberglaan 23, Uithoorn, Nederland", {locale: 'nl-NL'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Achterberglaan 23");
        test.equal(parsedAddress.locality, "Uithoorn");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.country, "Nederland");
        test.equal(parsedAddress.countryCode, "NL");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    testParseAddressNLManyLines: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Claude Debussylaan 34\nVinoly Mahler 4\nToren B\n15th Floor\n1082 MD\nAmsterdam\nNederland", {locale: 'nl-NL'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Claude Debussylaan 34, Vinoly Mahler 4, Toren B, 15th Floor");
        test.equal(parsedAddress.locality, "Amsterdam");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "1082 MD");
        test.equal(parsedAddress.country, "Nederland");
        test.equal(parsedAddress.countryCode, "NL");
        test.done();
    },
    testParseAddressNLOneLine: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Startbaan 16, 1187 XR Amstelveen, Nederland", {locale: 'nl-NL'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Startbaan 16");
        test.equal(parsedAddress.locality, "Amstelveen");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "1187 XR");
        test.equal(parsedAddress.country, "Nederland");
        test.equal(parsedAddress.countryCode, "NL");
        test.done();
    },
    testParseAddressNLSuperfluousWhitespace: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Startbaan 16,   \n\t\n 1187 XR \t\t Amstelveen,\n\n\n Nederland  \n  \t\t\t", {locale: 'nl-NL'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Startbaan 16");
        test.equal(parsedAddress.locality, "Amstelveen");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "1187 XR");
        test.equal(parsedAddress.country, "Nederland");
        test.equal(parsedAddress.countryCode, "NL");
        test.done();
    },
    testParseAddressNLNoDelimiters: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Startbaan 16 1187 XR Amstelveen Nederland", {locale: 'nl-NL'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Startbaan 16");
        test.equal(parsedAddress.locality, "Amstelveen");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "1187 XR");
        test.equal(parsedAddress.country, "Nederland");
        test.equal(parsedAddress.countryCode, "NL");
        test.done();
    },
    testParseAddressNLSpecialChars: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Óók 16, 1187 XR s'Hertogen-bósch, Nederland", {locale: 'nl-NL'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Óók 16");
        test.equal(parsedAddress.locality, "s'Hertogen-bósch");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "1187 XR");
        test.equal(parsedAddress.country, "Nederland");
        test.equal(parsedAddress.countryCode, "NL");
        test.done();
    },
    testParseAddressNLFromUS: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Achterberglaan 23, 2345 GD Uithoorn, Netherlands", {locale: 'en-US'});

        // the country name is in English because this address is for a contact in a US database

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Achterberglaan 23");
        test.equal(parsedAddress.locality, "Uithoorn");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "2345 GD");
        test.equal(parsedAddress.country, "Netherlands");
        test.equal(parsedAddress.countryCode, "NL");
        test.done();
    },
    testFormatAddressNL: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Achterberglaan 23",
            locality: "Uithoorn",
            postalCode: "2345 GD",
            country: "Nederland",
            countryCode: "NL"
        }, {locale: 'nl-NL'});

        var expected = "Achterberglaan 23\n2345 GD Uithoorn\nNederland";
        var formatter = new AddressFmt({locale: 'nl-NL'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    testFormatAddressNLFromUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Achterberglaan 23",
            locality: "Uithoorn",
            postalCode: "2345 GD",
            country: "Netherlands",
            countryCode: "NL"
        }, {locale: 'en-US'});

        var expected = "Achterberglaan 23\n2345 GD Uithoorn\nNetherlands";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
};