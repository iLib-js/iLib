/*
 * testaddress_SE.js - test the address parsing and formatting routines
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

module.exports.testaddress_SE = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testParseAddressSENormal: function(test) {
        test.expect(7);
            var parsedAddress = new Address("Martin Rebas Gyllenkrooksgatan 1\n412 84 GÖTEBORG\nSWEDEN", {locale: 'sv-SE'});
            test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Martin Rebas Gyllenkrooksgatan 1");
        test.equal(parsedAddress.locality, "GÖTEBORG");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "412 84");
        test.equal(parsedAddress.country, "SWEDEN");
        test.equal(parsedAddress.countryCode, "SE");
        test.done();

    },
    testParseAddressSENoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Martin Rebas Gyllenkrooksgatan 1\nGÖTEBORG\nSWEDEN", {locale: 'sv-SE'});
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Martin Rebas Gyllenkrooksgatan 1");
        test.equal(parsedAddress.locality, "GÖTEBORG");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "SWEDEN");
        test.equal(parsedAddress.countryCode, "SE");
        test.done();
    },
    testParseAddressSENoCountry: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Martin Rebas Gyllenkrooksgatan 1 , 412 84 , GÖTEBORG", {locale: 'sv-SE'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Martin Rebas Gyllenkrooksgatan 1");
        test.equal(parsedAddress.locality, "GÖTEBORG");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "412 84");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "SE");
        test.done();
    },
    testParseAddressSEManyLines: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Ms. Hypothetical\nc/o Jon Wätte Hagagatan 1\nvi\n113 49\nStockholm\nSWEDEN", {locale: 'sv-SE'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Ms. Hypothetical, c/o Jon Wätte Hagagatan 1, vi");
        test.equal(parsedAddress.locality, "Stockholm");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "113 49");
        test.equal(parsedAddress.country, "SWEDEN");
        test.equal(parsedAddress.countryCode, "SE");
        test.done();
    },
    testParseAddressSEOneLine: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Ms. Hypothetical , c/o Jon Wätte Hagagatan 1 , 113 49 , Stockholm , SWEDEN", {locale: 'sv-SE'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Ms. Hypothetical, c/o Jon Wätte Hagagatan 1");
        test.equal(parsedAddress.locality, "Stockholm");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "113 49");
        test.equal(parsedAddress.country, "SWEDEN");
        test.equal(parsedAddress.countryCode, "SE");
        test.done();
    },
    testParseAddressSENoDelimiters: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Ms. Hypothetical c/o Jon Wätte Hagagatan 113 49 Stockholm SWEDEN", {locale: 'sv-SE'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Ms. Hypothetical c/o Jon Wätte Hagagatan");
        test.equal(parsedAddress.locality, "Stockholm");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "113 49");
        test.equal(parsedAddress.country, "SWEDEN");
        test.equal(parsedAddress.countryCode, "SE");
        test.done();
    },
    testParseAddressSEFromUS: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Martin Rebas Gyllenkrooksgatan 1\nGÖTEBORG 412 84\nSWEDEN", {locale: 'en-US'});

        // the country name is in English because this address is for a contact in a US database

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Martin Rebas Gyllenkrooksgatan 1");
        test.equal(parsedAddress.locality, "GÖTEBORG");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "412 84");
        test.equal(parsedAddress.country, "SWEDEN");
        test.equal(parsedAddress.countryCode, "SE");
        test.done();
    },
    testFormatAddressSE: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Martin Rebas Gyllenkrooksgatan 1",
            locality: "GÖTEBORG",
            region: null,
            postalCode: "412 84",
            country: "SWEDEN",
            countryCode: "SE"
        }, {locale: 'sv-SE'});

        var expected = "Martin Rebas Gyllenkrooksgatan 1\n412 84 GÖTEBORG\nSWEDEN";
        var formatter = new AddressFmt({locale: 'sv-SE'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    testFormatAddressSEFromUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Martin Rebas Gyllenkrooksgatan",
            locality: "GÖTEBORG",
            region: null,
            postalCode: "412 84",
            country: "SWEDEN",
            countryCode: "SE"
        }, {locale: 'en-US'});

        var expected = "Martin Rebas Gyllenkrooksgatan\n412 84 GÖTEBORG\nSWEDEN";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
};