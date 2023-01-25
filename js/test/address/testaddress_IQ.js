/*
 * testaddress_IQ.js - test the address parsing and formatting routines
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

module.exports.testaddress_IQ = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAddressIQNormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("السيد احمد طارق, ١٠ قهوة الشريعة\nالاصمعي , البصرة\n٦١٠٠٢\nالعراق", {locale: 'ar-IQ'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "السيد احمد طارق, ١٠ قهوة الشريعة");
        test.equal(parsedAddress.locality, "الاصمعي");
        test.equal(parsedAddress.region, "البصرة");
        test.equal(parsedAddress.postalCode, "٦١٠٠٢");
        test.equal(parsedAddress.country, "العراق");
        test.equal(parsedAddress.countryCode, "IQ");
        test.done();
    },



    testParseAddressIQNoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("السيد احمد طارق, ١٠ قهوة الشريعة\nالاصمعي , البصرة\nالعراق", {locale: 'ar-IQ'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "السيد احمد طارق, ١٠ قهوة الشريعة");
        test.equal(parsedAddress.locality, "الاصمعي");
        test.equal(parsedAddress.region, "البصرة");
        test.equal(parsedAddress.country, "العراق");
        test.equal(parsedAddress.countryCode, "IQ");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },


    testParseAddressIQNoCountry: function(test) {
        test.expect(7);
        var parsedAddress = new Address("السيد احمد طارق, ١٠ قهوة الشريعة\nالاصمعي , البصرة\n ٦١٠٠٢", {locale: 'ar-IQ'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "السيد احمد طارق, ١٠ قهوة الشريعة");
        test.equal(parsedAddress.locality, "الاصمعي");
        test.equal(parsedAddress.region, "البصرة");
        test.equal(parsedAddress.countryCode, "IQ");
        test.equal(parsedAddress.postalCode, "٦١٠٠٢");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.done();

    },


    testParseAddressIQManyLines: function(test) {
        test.expect(7);
        var parsedAddress = new Address("السيد احمد طارق\n١٠ قهوة الشريعة\nالاصمعي\nالبصرة\n٦١٠٠٢\nالعراق\n\n", {locale: 'ar-IQ'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "السيد احمد طارق, ١٠ قهوة الشريعة");
        test.equal(parsedAddress.locality, "الاصمعي");
        test.equal(parsedAddress.region, "البصرة");
        test.equal(parsedAddress.countryCode, "IQ");
        test.equal(parsedAddress.postalCode, "٦١٠٠٢");
        test.equal(parsedAddress.country, "العراق");
        test.done();
    },

    testParseAddressIQOneLine: function(test) {
        test.expect(7);
        var parsedAddress = new Address("السيد احمد طارق , ١٠ قهوة الشريعة , الاصمعي , البصرة , ٦١٠٠٢ , العراق", {locale: 'ar-IQ'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "السيد احمد طارق, ١٠ قهوة الشريعة");
        test.equal(parsedAddress.locality, "الاصمعي");
        test.equal(parsedAddress.region, "البصرة");
        test.equal(parsedAddress.countryCode, "IQ");
        test.equal(parsedAddress.postalCode, "٦١٠٠٢");
        test.equal(parsedAddress.country, "العراق");
        test.done();
    },


    testParseAddressIQNoDelimiters: function(test) {
        test.expect(7);
        var parsedAddress = new Address("السيد احمد طارق, ١٠ قهوة الشريعة الاصمعي  البصرة  ٦١٠٠٢ العراق", {locale: 'ar-IQ'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "السيد احمد طارق, ١٠ قهوة الشريعة");
        test.equal(parsedAddress.locality, "الاصمعي");
        test.equal(parsedAddress.region, "البصرة");
        test.equal(parsedAddress.countryCode, "IQ");
        test.equal(parsedAddress.postalCode, "٦١٠٠٢");
        test.equal(parsedAddress.country, "العراق");
        test.done();
    },

    testParseAddressIQFromUS: function(test) {
        test.expect(7);
        var parsedAddress = new Address("السيد احمد طارق, ١٠ قهوة الشريعة\nالاصمعي , البصرة\n ٦١٠٠٢\nIraq", {locale: 'en-US'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "السيد احمد طارق, ١٠ قهوة الشريعة");
        test.equal(parsedAddress.locality, "الاصمعي");
        test.equal(parsedAddress.region, "البصرة");
        test.equal(parsedAddress.countryCode, "IQ");
        test.equal(parsedAddress.postalCode, "٦١٠٠٢");
        test.equal(parsedAddress.country, "Iraq");
        test.done();
    },


    testFormatAddressIQ: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "السيد احمد طارق, ١٠ قهوة الشريعة",
            locality: "الاصمعي",
            region: "البصرة",
            postalCode: "٦١٠٠٢",
            country: "العراق",
            countryCode: "IQ"
        }, {locale: 'ar-IQ'});

        var expected = "السيد احمد طارق, ١٠ قهوة الشريعة\nالاصمعي, البصرة\n٦١٠٠٢\nالعراق";
        var formatter = new AddressFmt({locale: 'ar-IQ'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },


    testFormatAddressIQFromUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "السيد احمد طارق, ١٠ قهوة الشريعة",
            locality: "الاصمعي",
            region: "البصرة",
            postalCode: "٦١٠٠٢",
            country: "Iraq",
            countryCode: "IQ"
        }, {locale: 'en-US'});

        var expected = "السيد احمد طارق, ١٠ قهوة الشريعة\nالاصمعي, البصرة\n٦١٠٠٢\nIraq";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }

};
