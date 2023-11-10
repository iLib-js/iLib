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

module.exports.testaddress_ET = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testParseAddressETNormal: function(test) {
        test.expect(6);
        var parsedAddress = new Address("Mr. Abebe Bekele, P.O. Box 1519, ADDIS ABABA, ETHIOPIA", {locale: 'en-ET'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Mr. Abebe Bekele, P.O. Box 1519");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "ADDIS ABABA");
        test.equal(parsedAddress.country, "ETHIOPIA");
        test.equal(parsedAddress.countryCode, "ET");
        test.done();
    },
    testParseAddressETNoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Mr. Abebe Bekele, P.O. Box 1519, ADDIS ABABA, ETHIOPIA", {locale: 'en-ET'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Mr. Abebe Bekele, P.O. Box 1519");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "ADDIS ABABA");
        test.equal(parsedAddress.country, "ETHIOPIA");
        test.equal(parsedAddress.countryCode, "ET");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    testParseAddressETManyLines: function(test) {
        test.expect(6);
        var parsedAddress = new Address("Mr. Abebe Bekele\nP.O. Box 1519\nADDIS ABABA\nETHIOPIA", {locale: 'en-ET'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Mr. Abebe Bekele, P.O. Box 1519");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "ADDIS ABABA");
        test.equal(parsedAddress.country, "ETHIOPIA");
        test.equal(parsedAddress.countryCode, "ET");
        test.done();
    },
    testParseAddressETOneLine: function(test) {
        test.expect(6);
        var parsedAddress = new Address("Mr. Abebe Bekele, P.O. Box 1519, ADDIS ABABA, ETHIOPIA", {locale: 'en-ET'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Mr. Abebe Bekele, P.O. Box 1519");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "ADDIS ABABA");
        test.equal(parsedAddress.country, "ETHIOPIA");
        test.equal(parsedAddress.countryCode, "ET");
        test.done();
    },
    testParseAddressETSuperfluousWhitespace: function(test) {
        test.expect(6);
        var parsedAddress = new Address("Mr. Abebe Bekele\n\tP.O. Box 1519  \n\t\n ADDIS ABABA\t\n\n ETHIOPIA  \n  \t\t\t", {locale: 'en-ET'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Mr. Abebe Bekele, P.O. Box 1519");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "ADDIS ABABA");
        test.equal(parsedAddress.country, "ETHIOPIA");
        test.equal(parsedAddress.countryCode, "ET");
        test.done();
    },
    testParseAddressETNoDelimiters: function(test) {
        test.expect(6);
        var parsedAddress = new Address("Mr. Abebe Bekele P.O. Box 1519 ADDIS ABABA ETHIOPIA", {locale: 'en-ET'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Mr. Abebe Bekele P.O. Box 1519");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "ADDIS ABABA");
        test.equal(parsedAddress.country, "ETHIOPIA");
        test.equal(parsedAddress.countryCode, "ET");
        test.done();
    },
    testParseAddressETSpecialChars: function(test) {
        test.expect(6);
        var parsedAddress = new Address("Post Office Headquarters, P.O. Box 5555, ADDIS ABABA, ETHIOPIA", {locale: 'en-ET'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Post Office Headquarters, P.O. Box 5555");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "ADDIS ABABA");
        test.equal(parsedAddress.country, "ETHIOPIA");
        test.equal(parsedAddress.countryCode, "ET");
        test.done();
    },
    testParseAddressETFromUS: function(test) {
        test.expect(6);
        var parsedAddress = new Address("Mr. Abebe Bekele, P.O. Box 1519, ADDIS ABABA, ETHIOPIA", {locale: 'en-US'});

        // the country name is in English because this address is for a contact in a US database

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Mr. Abebe Bekele, P.O. Box 1519");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "ADDIS ABABA");
        test.equal(parsedAddress.country, "ETHIOPIA");
        test.equal(parsedAddress.countryCode, "ET");
        test.done();
    },
    testFormatAddressET: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Mr. Abebe Bekele\nP.O. Box 1519",
            locality: "ADDIS ABABA",
            country: "ETHIOPIA",
            countryCode: "ET"
        }, {locale: 'en-ET'});

        var expected = "Mr. Abebe Bekele\nP.O. Box 1519\nADDIS ABABA\nETHIOPIA";
        var formatter = new AddressFmt({locale: 'en-ET'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    testFormatAddressETFromUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Mr. Abebe Bekele\nP.O. Box 1519",
            locality: "ADDIS ABABA",
            country: "ETHIOPIA",
            countryCode: "ET"
        }, {locale: 'en-US'});

        var expected = "Mr. Abebe Bekele\nP.O. Box 1519\nADDIS ABABA\nETHIOPIA";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
};