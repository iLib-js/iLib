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

module.exports.testaddress_MA = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testParseAddressMANormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("السيد. محمد إبراهيم, بلدية خريبكة,٢٥٠٠٥ خريبكة , المغرب", {locale: 'ar-MA'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "السيد. محمد إبراهيم, بلدية خريبكة");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "خريبكة");
        test.equal(parsedAddress.postalCode, "٢٥٠٠٥");
        test.equal(parsedAddress.country, "المغرب");
        test.equal(parsedAddress.countryCode, "MA");
        test.done();
    },
    testParseAddressMANoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("السيد. محمد إبراهيم, بلدية خريبكة,خريبكة , المغرب", {locale: 'ar-MA'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "السيد. محمد إبراهيم, بلدية خريبكة");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "خريبكة");
        test.equal(parsedAddress.country, "المغرب");
        test.equal(parsedAddress.countryCode, "MA");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    testParseAddressMAManyLines: function(test) {
        test.expect(7);
        var parsedAddress = new Address("السيد. محمد إبراهيم, بلدية خريبكة\n٢٥٠٠٥ خريبكة \n المغرب", {locale: 'ar-MA'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "السيد. محمد إبراهيم, بلدية خريبكة");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "خريبكة");
        test.equal(parsedAddress.postalCode, "٢٥٠٠٥");
        test.equal(parsedAddress.country, "المغرب");
        test.equal(parsedAddress.countryCode, "MA");
        test.done();
    },
    testParseAddressMAOneLine: function(test) {
        test.expect(7);
        var parsedAddress = new Address("السيد. محمد إبراهيم, بلدية خريبكة,٢٥٠٠٥ خريبكة , المغرب", {locale: 'ar-MA'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "السيد. محمد إبراهيم, بلدية خريبكة");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "خريبكة");
        test.equal(parsedAddress.postalCode, "٢٥٠٠٥");
        test.equal(parsedAddress.country, "المغرب");
        test.equal(parsedAddress.countryCode, "MA");
        test.done();
    },
    testParseAddressMASuperfluousWhitespace: function(test) {
        test.expect(7);
        var parsedAddress = new Address("السيد. محمد إبراهيم, بلدية خريبكة   \n\t\n٢٥٠٠٥ خريبكة \t\n\n  المغرب  \n  \t\t\t", {locale: 'ar-MA'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "السيد. محمد إبراهيم, بلدية خريبكة");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "خريبكة");
        test.equal(parsedAddress.postalCode, "٢٥٠٠٥");
        test.equal(parsedAddress.country, "المغرب");
        test.equal(parsedAddress.countryCode, "MA");
        test.done();
    },
    testParseAddressMANoDelimiters: function(test) {
        test.expect(7);
        var parsedAddress = new Address("السيد. محمد إبراهيم بلدية خريبكة  ٢ شارع الاستقلال٢٥٠٠٥  خريبكة   المغرب", {locale: 'ar-MA'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "السيد. محمد إبراهيم بلدية خريبكة ٢ شارع الاستقلال");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "خريبكة");
        test.equal(parsedAddress.postalCode, "٢٥٠٠٥");
        test.equal(parsedAddress.country, "المغرب");
        test.equal(parsedAddress.countryCode, "MA");
        test.done();
    },
    testParseAddressMASpecialChars: function(test) {
        test.expect(7);
        var parsedAddress = new Address("السيد. محمد إبراهيم, بلدية خريبكة,٢٥٠٠٥ خريبكة , المغرب", {locale: 'ar-MA'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "السيد. محمد إبراهيم, بلدية خريبكة");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "خريبكة");
        test.equal(parsedAddress.postalCode, "٢٥٠٠٥");
        test.equal(parsedAddress.country, "المغرب");
        test.equal(parsedAddress.countryCode, "MA");
        test.done();
    },
    testParseAddressMAFromUS: function(test) {
        test.expect(7);
        var parsedAddress = new Address("السيد. محمد إبراهيم, بلدية خريبكة,٢٥٠٠٥ خريبكة , Morocco", {locale: 'en-US'});

        // the country name is in English because this address is for a contact in a US database

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "السيد. محمد إبراهيم, بلدية خريبكة");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "خريبكة");
        test.equal(parsedAddress.postalCode, "٢٥٠٠٥");
        test.equal(parsedAddress.country, "Morocco");
        test.equal(parsedAddress.countryCode, "MA");
        test.done();
    },
    testFormatAddressMA: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "السيد. محمد إبراهيم, بلدية خريبكة",
            locality: "طرابلس",
            country: "المغرب",
            countryCode: "MA"
        }, {locale: 'ar-MA'});

        var expected = "السيد. محمد إبراهيم, بلدية خريبكة\nطرابلس\nالمغرب";
        var formatter = new AddressFmt({locale: 'ar-MA'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    testFormatAddressMAARFromUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "السيد. محمد إبراهيم, بلدية خريبكة",
            locality: "طرابلس",
            country: "Morocco",
            countryCode: "MA"
        }, {locale: 'en-US'});

        var expected = "السيد. محمد إبراهيم, بلدية خريبكة\nطرابلس\nMorocco";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
};