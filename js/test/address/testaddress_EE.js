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

module.exports.testaddress_EE = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testParseAddressEENormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("The Stenbock House, Rahukohtu 3, 15161 Tallinn, Estonia", {locale: 'et-EE'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "The Stenbock House, Rahukohtu 3");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "Tallinn");
        test.equal(parsedAddress.postalCode, "15161");
        test.equal(parsedAddress.country, "Estonia");
        test.equal(parsedAddress.countryCode, "EE");
        test.done();
    },
    testParseAddressEENoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("The Stenbock House, Rahukohtu 3,Tallinn, Estonia", {locale: 'et-EE'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "The Stenbock House, Rahukohtu 3");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "Tallinn");
        test.equal(parsedAddress.country, "Estonia");
        test.equal(parsedAddress.countryCode, "EE");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    testParseAddressEEManyLines: function(test) {
        test.expect(7);
        var parsedAddress = new Address("The Stenbock House\nRahukohtu 3\n15161 Tallinn\nEstonia", {locale: 'et-EE'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "The Stenbock House, Rahukohtu 3");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "Tallinn");
        test.equal(parsedAddress.postalCode, "15161");
        test.equal(parsedAddress.country, "Estonia");
        test.equal(parsedAddress.countryCode, "EE");
        test.done();
    },
    testParseAddressEEOneLine: function(test) {
        test.expect(7);
        var parsedAddress = new Address("The Stenbock House, Rahukohtu 3, 15161 Tallinn, Estonia", {locale: 'et-EE'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "The Stenbock House, Rahukohtu 3");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "Tallinn");
        test.equal(parsedAddress.postalCode, "15161");
        test.equal(parsedAddress.country, "Estonia");
        test.equal(parsedAddress.countryCode, "EE");
        test.done();
    },
    testParseAddressEESuperfluousWhitespace: function(test) {
        test.expect(7);
        var parsedAddress = new Address("The Stenbock House\n\tRahukohtu 3  \n\t\n 15161 Tallinn\t\n\n Estonia  \n  \t\t\t", {locale: 'et-EE'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "The Stenbock House, Rahukohtu 3");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "Tallinn");
        test.equal(parsedAddress.postalCode, "15161");
        test.equal(parsedAddress.country, "Estonia");
        test.equal(parsedAddress.countryCode, "EE");
        test.done();
    },
    testParseAddressEENoDelimiters: function(test) {
        test.expect(7);
        var parsedAddress = new Address("The Stenbock House Rahukohtu 3 15161 Tallinn Estonia", {locale: 'et-EE'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "The Stenbock House Rahukohtu 3");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "Tallinn");
        test.equal(parsedAddress.postalCode, "15161");
        test.equal(parsedAddress.country, "Estonia");
        test.equal(parsedAddress.countryCode, "EE");
        test.done();
    },
    testParseAddressEESpecialChars: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Informatics Center, Rävala 5, 15169 Tallinn, Estonia", {locale: 'et-EE'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Informatics Center, Rävala 5");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "Tallinn");
        test.equal(parsedAddress.postalCode, "15169");
        test.equal(parsedAddress.country, "Estonia");
        test.equal(parsedAddress.countryCode, "EE");
        test.done();
    },
    testParseAddressEEFromUS: function(test) {
        test.expect(7);
        var parsedAddress = new Address("The Stenbock House, Rahukohtu 3, 15161 Tallinn, Estonia", {locale: 'en-US'});

        // the country name is in English because this address is for a contact in a US database

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "The Stenbock House, Rahukohtu 3");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "Tallinn");
        test.equal(parsedAddress.postalCode, "15161");
        test.equal(parsedAddress.country, "Estonia");
        test.equal(parsedAddress.countryCode, "EE");
        test.done();
    },
    testFormatAddressEE: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "The Stenbock House\nRahukohtu 3",
            locality: "Tallinn",
            postalCode: "15161",
            country: "Estonia",
            countryCode: "EE"
        }, {locale: 'et-EE'});

        var expected = "The Stenbock House\nRahukohtu 3\n15161 Tallinn\nEstonia";
        var formatter = new AddressFmt({locale: 'et-EE'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    testFormatAddressEEFromUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "The Stenbock House\nRahukohtu 3",
            locality: "Tallinn",
            postalCode: "15161",
            country: "Estonia",
            countryCode: "EE"
        }, {locale: 'en-US'});

        var expected = "The Stenbock House\nRahukohtu 3\n15161 Tallinn\nEstonia";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
};