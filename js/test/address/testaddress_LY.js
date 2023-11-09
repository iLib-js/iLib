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

module.exports.testaddress_LY = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testParseAddressLYARNormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("السيد محمد علي خليفة, الغزالي ١٢, طرابلس, ليبيا", {locale: 'ar-LY'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "السيد محمد علي خليفة, الغزالي ١٢");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "طرابلس");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "ليبيا");
        test.equal(parsedAddress.countryCode, "LY");
        test.done();
    },
    testParseAddressLYARNoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("السيد محمد علي خليفة, الغزالي ١٢, طرابلس, ليبيا", {locale: 'ar-LY'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "السيد محمد علي خليفة, الغزالي ١٢");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "طرابلس");
        test.equal(parsedAddress.country, "ليبيا");
        test.equal(parsedAddress.countryCode, "LY");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    testParseAddressLYARManyLines: function(test) {
        test.expect(7);
        var parsedAddress = new Address("السيد محمد علي خليفة, الغزالي ١٢\nطرابلس\n ليبيا", {locale: 'ar-LY'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "السيد محمد علي خليفة, الغزالي ١٢");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "طرابلس");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "ليبيا");
        test.equal(parsedAddress.countryCode, "LY");
        test.done();
    },
    testParseAddressLYAROneLine: function(test) {
        test.expect(7);
        var parsedAddress = new Address("السيد محمد علي خليفة, الغزالي ١٢,طرابلس, ليبيا", {locale: 'ar-LY'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "السيد محمد علي خليفة, الغزالي ١٢");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "طرابلس");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "ليبيا");
        test.equal(parsedAddress.countryCode, "LY");
        test.done();
    },
    testParseAddressLYARSuperfluousWhitespace: function(test) {
        test.expect(7);
        var parsedAddress = new Address("السيد محمد علي خليفة, الغزالي ١٢   \n\t\n طرابلس\t\n\n  ليبيا  \n  \t\t\t", {locale: 'ar-LY'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "السيد محمد علي خليفة, الغزالي ١٢");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "طرابلس");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "ليبيا");
        test.equal(parsedAddress.countryCode, "LY");
        test.done();
    },
    //needs a precise regular expression to handle locality with and without spaces in no delimiter case
    /*
    testParseAddressLYARNoDelimiters: function(test) {
        test.expect(7);
        var parsedAddress = new Address("السيد محمد علي خليفة الغزالي ١٢  ٢ شارع الاستقلال طرابلس  ليبيا", {locale: 'ar-LY'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "السيد محمد علي خليفة الغزالي ١٢ ٢ شارع الاستقلال");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "طرابلس");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "ليبيا");
        test.equal(parsedAddress.countryCode, "LY");
        test.done();
    },
    */


    testParseAddressLYARSpecialChars: function(test) {
        test.expect(7);
        var parsedAddress = new Address("السيد محمد علي خليفة, الغزالي ١٢,طرابلس, ليبيا", {locale: 'ar-LY'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "السيد محمد علي خليفة, الغزالي ١٢");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "طرابلس");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "ليبيا");
        test.equal(parsedAddress.countryCode, "LY");
        test.done();
    },
    testParseAddressLYFromUS: function(test) {
        test.expect(7);
        var parsedAddress = new Address("السيد محمد علي خليفة, الغزالي ١٢,طرابلس, Libya", {locale: 'en-US'});

        // the country name is in English because this address is for a contact in a US database

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "السيد محمد علي خليفة, الغزالي ١٢");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "طرابلس");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "Libya");
        test.equal(parsedAddress.countryCode, "LY");
        test.done();
    },
    testFormatAddressLY: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "السيد محمد علي خليفة, الغزالي ١٢",
            locality: "طرابلس",
            country: " ليبيا",
            countryCode: "LY"
        }, {locale: 'ar-LY'});

        var expected = "السيد محمد علي خليفة, الغزالي ١٢\nطرابلس\nليبيا";
        var formatter = new AddressFmt({locale: 'ar-LY'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    testFormatAddressLYARFromUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "السيد محمد علي خليفة, الغزالي ١٢",
            locality: "طرابلس",
            country: "Libya",
            countryCode: "LY"
        }, {locale: 'en-US'});

        var expected = "السيد محمد علي خليفة, الغزالي ١٢\nطرابلس\nLibya";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
};