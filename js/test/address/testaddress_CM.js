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

module.exports.testaddress_CM = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAddressCMNormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("M. Pierre Marie, BP 6000, YAOUNDE, CAMEROON", {locale: 'fr-CM'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "M. Pierre Marie, BP 6000");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "YAOUNDE");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "CAMEROON");
        test.equal(parsedAddress.countryCode, "CM");
        test.done();
    },

    testParseAddressCMNoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("M. Pierre Marie, BP 6000, YAOUNDE, CAMEROON", {locale: 'fr-CM'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "M. Pierre Marie, BP 6000");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "YAOUNDE");
        test.equal(parsedAddress.country, "CAMEROON");
        test.equal(parsedAddress.countryCode, "CM");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },

    testParseAddressCMManyLines: function(test) {
        test.expect(7);
        var parsedAddress = new Address("M. Pierre Marie\nBP 6000, YAOUNDE\nCAMEROON", {locale: 'fr-CM'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "M. Pierre Marie, BP 6000");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "YAOUNDE");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "CAMEROON");
        test.equal(parsedAddress.countryCode, "CM");
        test.done();
    },

    testParseAddressCMOneLine: function(test) {
        test.expect(7);
        var parsedAddress = new Address("M. Pierre Marie, BP 6000, YAOUNDE, CAMEROON", {locale: 'fr-CM'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "M. Pierre Marie, BP 6000");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "YAOUNDE");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "CAMEROON");
        test.equal(parsedAddress.countryCode, "CM");
        test.done();
    },

    testParseAddressCMSuperfluousWhitespace: function(test) {
        test.expect(7);
        var parsedAddress = new Address("M. Pierre Marie  \n\t\n BP 6000, YAOUNDE\t\n\n CAMEROON  \n  \t\t\t", {locale: 'fr-CM'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "M. Pierre Marie, BP 6000");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "YAOUNDE");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "CAMEROON");
        test.equal(parsedAddress.countryCode, "CM");
        test.done();
    },

    testParseAddressCMNoDelimiters: function(test) {
        test.expect(7);
        var parsedAddress = new Address("M. Pierre Marie BP 6000 YAOUNDE CAMEROON", {locale: 'fr-CM'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "M. Pierre Marie BP 6000");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "YAOUNDE");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "CAMEROON");
        test.equal(parsedAddress.countryCode, "CM");
        test.done();
    },

    testParseAddressCMSpecialChars: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Direction des postes ,Régulation des réseaux et services postaux, YAOUNDE, CAMEROON", {locale: 'fr-CM'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Direction des postes, Régulation des réseaux et services postaux");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "YAOUNDE");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "CAMEROON");
        test.equal(parsedAddress.countryCode, "CM");
        test.done();
    },

    testParseAddressCMFromUS: function(test) {
        test.expect(7);
        var parsedAddress = new Address("M. Pierre Marie, BP 6000, YAOUNDE, CAMEROON", {locale: 'en-US'});

        // the country name is in English because this address is for a contact in a US database

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "M. Pierre Marie, BP 6000");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "YAOUNDE");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "CAMEROON");
        test.equal(parsedAddress.countryCode, "CM");
        test.done();
    },

    testFormatAddressCM: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "M. Pierre Marie\nBP 6000",
            locality: "YAOUNDE",
            country: "CAMEROON",
            countryCode: "AM"
        }, {locale: 'fr-CM'});

        var expected = "M. Pierre Marie\nBP 6000\nYAOUNDE\nCAMEROON";
        var formatter = new AddressFmt({locale: 'fr-CM'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },

    testFormatAddressCMFromUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "M. Pierre Marie\nBP 6000",
            country: "CAMEROON",
            locality: "YAOUNDE",
            countryCode: "AM"
        }, {locale: 'en-US'});

        var expected = "M. Pierre Marie\nBP 6000\nYAOUNDE\nCAMEROON";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }

};
