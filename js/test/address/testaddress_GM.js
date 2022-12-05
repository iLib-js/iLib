/*
 * testaddress_GM.js - test the address parsing and formatting routines
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

module.exports.testaddress_GM = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAddressGMNormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Mr. A. Ceesay 21 Liberation Avenue\nBANJUL\nGAMBIA", {locale: 'en-GM'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Mr. A. Ceesay 21 Liberation Avenue");
        test.equal(parsedAddress.locality, "BANJUL");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "GAMBIA");
        test.equal(parsedAddress.countryCode, "GM");
        test.done();
    },

    testParseAddressGMNoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Mr. A. Ceesay 21 Liberation Avenue\nBANJUL\nGAMBIA", {locale: 'en-GM'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Mr. A. Ceesay 21 Liberation Avenue");
        test.equal(parsedAddress.locality, "BANJUL");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.country, "GAMBIA");
        test.equal(parsedAddress.countryCode, "GM");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },

    testParseAddressGMNoCountry: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Mr. A. Ceesay 21 Liberation Avenue\nBANJUL", {locale: 'en-GM'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Mr. A. Ceesay 21 Liberation Avenue");
        test.equal(parsedAddress.locality, "BANJUL");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "GM");
        test.done();
    },

    testParseAddressGMManyLines: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Mr. A. Ceesay\n21 Liberation Avenue\nBANJUL\nGAMBIA", {locale: 'en-GM'});

        test.ok(typeof(parsedAddress) !== "undefined");
          test.equal(parsedAddress.streetAddress, "Mr. A. Ceesay, 21 Liberation Avenue");
        test.equal(parsedAddress.locality, "BANJUL");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "GAMBIA");
        test.equal(parsedAddress.countryCode, "GM");
        test.done();
    },

    testParseAddressGMOneLine: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Mr. A. Ceesay , 21 Liberation Avenue , BANJUL , GAMBIA", {locale: 'en-GM'});

        test.ok(typeof(parsedAddress) !== "undefined");
          test.equal(parsedAddress.streetAddress, "Mr. A. Ceesay, 21 Liberation Avenue");
        test.equal(parsedAddress.locality, "BANJUL");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "GAMBIA");
        test.equal(parsedAddress.countryCode, "GM");
        test.done();
    },

    testParseAddressGMSuperfluousWhitespace: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Mr. A. Ceesay\n\n\t\r\t\t\r21 Liberation Avenue\r\r\n\nBANJUL\t\r\n\t\rGAMBIA", {locale: 'en-GM'});

        test.ok(typeof(parsedAddress) !== "undefined");
          test.equal(parsedAddress.streetAddress, "Mr. A. Ceesay, 21 Liberation Avenue");
        test.equal(parsedAddress.locality, "BANJUL");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "GAMBIA");
        test.equal(parsedAddress.countryCode, "GM");
        test.done();
    },

    /*
    testParseAddressGMNoDelimiters: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Mr. A. Ceesay 21 Liberation Avenue BANJUL GAMBIA", {locale: 'en-GM'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Mr. A. Ceesay 21 Liberation Avenue");
        test.equal(parsedAddress.locality, "BANJUL");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "GAMBIA");
        test.equal(parsedAddress.countryCode, "GM");
        test.done();
    },
    */

    testParseAddressGMFromUS: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Mr. A. Ceesay 21 Liberation Avenue\nBANJUL\nGAMBIA", {locale: 'en-GM'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Mr. A. Ceesay 21 Liberation Avenue");
        test.equal(parsedAddress.locality, "BANJUL");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "GAMBIA");
        test.equal(parsedAddress.countryCode, "GM");
        test.done();
    },

    testFormatAddressGM: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Mr. A. Ceesay 21 Liberation Avenue",
            locality: "BANJUL",
            postalCode: "1010",
            country: "GAMBIA",
            countryCode: "GM"
        }, {locale: 'en-GM'});

        var expected = "Mr. A. Ceesay 21 Liberation Avenue\nBANJUL\nGAMBIA";
        var formatter = new AddressFmt({locale: 'en-GM'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },

    testFormatAddressGMFromUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Mr. A. Ceesay 21 Liberation Avenue",
            locality: "BANJUL",
            postalCode: "1010",
            country: "GAMBIA",
            countryCode: "GM"
        }, {locale: 'en-US'});

        var expected = "Mr. A. Ceesay 21 Liberation Avenue\nBANJUL\nGAMBIA";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }

};
