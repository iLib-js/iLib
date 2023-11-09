/*
 * testaddress_UG.js - test the address parsing and formatting routines
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

module.exports.testaddress_UG = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testParseAddressUGNormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Ms. Olive Takubua P.O. Box 21310\nKAMPALA\nUganda", {locale: 'en-UG'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Ms. Olive Takubua P.O. Box 21310");
        test.equal(parsedAddress.locality, "KAMPALA");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "Uganda");
        test.equal(parsedAddress.countryCode, "UG");
        test.done();
    },
    testParseAddressUGNoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Ms. Olive Takubua P.O. Box 21310\nKAMPALA\nUganda", {locale: 'en-UG'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Ms. Olive Takubua P.O. Box 21310");
        test.equal(parsedAddress.locality, "KAMPALA");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.country, "Uganda");
        test.equal(parsedAddress.countryCode, "UG");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    testParseAddressUGNoCountry: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Ms. Olive Takubua P.O. Box 21310\nKAMPALA", {locale: 'en-UG'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Ms. Olive Takubua P.O. Box 21310");
        test.equal(parsedAddress.locality, "KAMPALA");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "UG");
        test.done();
    },
    testParseAddressUGManyLines: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Ms. Olive Takubua\nP.O. Box 21310\nKAMPALA\nUganda\n\n\n", {locale: 'en-UG'});
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Ms. Olive Takubua, P.O. Box 21310");
        test.equal(parsedAddress.locality, "KAMPALA");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "Uganda");
        test.equal(parsedAddress.countryCode, "UG");
        test.done();
    },
    testParseAddressUGOneLine: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Ms. Olive Takubua , P.O. Box 21310 , KAMPALA , Uganda", {locale: 'en-UG'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Ms. Olive Takubua, P.O. Box 21310");
        test.equal(parsedAddress.locality, "KAMPALA");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "Uganda");
        test.equal(parsedAddress.countryCode, "UG");
        test.done();
    },
    testParseAddressUGSuperfluousWhitespace: function(test) {
        test.expect(7);
        var parsedAddress = new Address("\t\t\t\tMs. Olive Takubua\t\t\tP.O. Box\t\r\r21310\t\nKAMPALA\n\t Uganda\n\n\n", {locale: 'en-UG'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Ms. Olive Takubua P.O. Box 21310");
        test.equal(parsedAddress.locality, "KAMPALA");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "Uganda");
        test.equal(parsedAddress.countryCode, "UG");
        test.done();
    },
    testParseAddressUGNoDelimiters: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Ms. Olive Takubua P.O. Box 21310 KAMPALA Uganda", {locale: 'en-UG'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Ms. Olive Takubua P.O. Box 21310");
        test.equal(parsedAddress.locality, "KAMPALA");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "Uganda");
        test.equal(parsedAddress.countryCode, "UG");
        test.done();
    },
    testParseAddressUGFromUS: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Ms. Olive Takubua P.O. Box 21310\nKAMPALA\nUganda", {locale: 'en-US'});

        // the country name is in German because this address is for a contact in a German database

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Ms. Olive Takubua P.O. Box 21310");
        test.equal(parsedAddress.locality, "KAMPALA");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "Uganda");
        test.equal(parsedAddress.countryCode, "UG");
        test.done();
    },
    testFormatAddressUG: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Ms. Olive Takubua P.O. Box 21310",
            locality: "KAMPALA",
            country: "Uganda",
            countryCode: "UG"
        }, {locale: 'en-UG'});

        var expected = "Ms. Olive Takubua P.O. Box 21310\nKAMPALA\nUganda";
        var formatter = new AddressFmt({locale: 'en-UG'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    testFormatAddressUGFromUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Ms. Olive Takubua P.O. Box 21310",
            locality: "KAMPALA",
            country: "Uganda",
            countryCode: "UG"
        }, {locale: 'en-US'});

        var expected = "Ms. Olive Takubua P.O. Box 21310\nKAMPALA\nUganda";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
};