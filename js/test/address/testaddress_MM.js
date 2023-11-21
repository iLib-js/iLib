/*
 * testaddress_PY.js - test the address parsing and formatting routines
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

module.exports.testaddress_MM = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testParseAddressMMNormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Posts and Telecommunications No 43 Bo Aung Gyaw Street\nYANGON, 11181\n\nMyanmar", {locale: 'en-MM'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Posts and Telecommunications No 43 Bo Aung Gyaw Street");
        test.equal(parsedAddress.locality, "YANGON");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "11181");
        test.equal(parsedAddress.country, "Myanmar");
        test.equal(parsedAddress.countryCode, "MM");
        test.done();
    },
    testParseAddressMMNoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Posts and Telecommunications No 43 Bo Aung Gyaw Street\nYANGON\nMyanmar", {locale: 'en-MM'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Posts and Telecommunications No 43 Bo Aung Gyaw Street");
        test.equal(parsedAddress.locality, "YANGON");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.country, "Myanmar");
        test.equal(parsedAddress.countryCode, "MM");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    testParseAddressMMNoCountry: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Posts and Telecommunications No 43 Bo Aung Gyaw Street\nYANGON, 11181", {locale: 'en-MM'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Posts and Telecommunications No 43 Bo Aung Gyaw Street");
        test.equal(parsedAddress.locality, "YANGON");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "11181");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "MM");
        test.done();
    },
    testParseAddressMMManyLines: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Posts and Telecommunications\nNo 43 Bo Aung Gyaw Street\n\nYANGON\n\n11181\nMyanmar\n\n\n", {locale: 'en-MM'});
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Posts and Telecommunications, No 43 Bo Aung Gyaw Street");
        test.equal(parsedAddress.locality, "YANGON");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "11181");
        test.equal(parsedAddress.country, "Myanmar");
        test.equal(parsedAddress.countryCode, "MM");
        test.done();
    },
    testParseAddressMMOneLine: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Posts and Telecommunications , No 43 Bo Aung Gyaw Street , YANGON , 11181 , Myanmar", {locale: 'en-MM'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Posts and Telecommunications, No 43 Bo Aung Gyaw Street");
        test.equal(parsedAddress.locality, "YANGON");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "11181");
        test.equal(parsedAddress.country, "Myanmar");
        test.equal(parsedAddress.countryCode, "MM");
        test.done();
    },
    testParseAddressMMSuperfluousWhitespace: function(test) {
        test.expect(7);
        var parsedAddress = new Address("\t\t\tPosts and Telecommunications\n\t\t\rNo 43 Bo\t\t\rAung Gyaw Street\t\n\n\nYANGON\n\n11181\n\t Myanmar\n\n\n", {locale: 'en-MM'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Posts and Telecommunications, No 43 Bo Aung Gyaw Street");
        test.equal(parsedAddress.locality, "YANGON");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "11181");
        test.equal(parsedAddress.country, "Myanmar");
        test.equal(parsedAddress.countryCode, "MM");
        test.done();
    },
    testParseAddressMMNoDelimiters: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Posts and Telecommunications No 43 Bo Aung Gyaw Street YANGON, 11181 Myanmar", {locale: 'en-MM'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Posts and Telecommunications No 43 Bo Aung Gyaw Street");
        test.equal(parsedAddress.locality, "YANGON");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "11181");
        test.equal(parsedAddress.country, "Myanmar");
        test.equal(parsedAddress.countryCode, "MM");
        test.done();
    },
    testParseAddressMMFromUS: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Posts and Telecommunications No 43 Bo Aung Gyaw Street\nYANGON, 11181\nMyanmar", {locale: 'en-US'});

        // the country name is in German because this address is for a contact in a German database

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Posts and Telecommunications No 43 Bo Aung Gyaw Street");
        test.equal(parsedAddress.locality, "YANGON");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "11181");
        test.equal(parsedAddress.country, "Myanmar");
        test.equal(parsedAddress.countryCode, "MM");
        test.done();
    },
    testFormatAddressMM: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Posts and Telecommunications No 43 Bo Aung Gyaw Street",
            locality: "YANGON",
            postalCode: "11181",
            country: "Myanmar",
            countryCode: "MM"
        }, {locale: 'en-MM'});

        var expected = "Posts and Telecommunications No 43 Bo Aung Gyaw Street\nYANGON, 11181\nMyanmar";
        var formatter = new AddressFmt({locale: 'en-MM'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    testFormatAddressMMFromUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Posts and Telecommunications No 43 Bo Aung Gyaw Street",
            locality: "YANGON",
            postalCode: "11181",
            country: "Myanmar",
            countryCode: "MM"
        }, {locale: 'en-US'});

        var expected = "Posts and Telecommunications No 43 Bo Aung Gyaw Street\nYANGON, 11181\nMyanmar";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
};