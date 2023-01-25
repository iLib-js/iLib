/*
 * testaddress_TN.js - test the address parsing and formatting routines
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

module.exports.testaddress_TN = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAddressTNNormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("ﻢﻴﻠﻴﻫ ﺭﺅﻮﻓ ﺲﻋﺍﺩ ﺏﻮﻴﺗ ﺏﺮﻴﻔﻳ ٧٢\n٨١٢٩ ﻊﻴﻧ ﺩﺭﺎﻬﻣ\nتونس", {locale: 'ar-TN'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "ﻢﻴﻠﻴﻫ ﺭﺅﻮﻓ ﺲﻋﺍﺩ ﺏﻮﻴﺗ ﺏﺮﻴﻔﻳ ٧٢");
        test.equal(parsedAddress.locality, "ﻊﻴﻧ ﺩﺭﺎﻬﻣ");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "٨١٢٩");
        test.equal(parsedAddress.country, "تونس");
        test.equal(parsedAddress.countryCode, "TN");
        test.done();
    },

    testParseAddressTNNoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("ﻢﻴﻠﻴﻫ ﺭﺅﻮﻓ ﺲﻋﺍﺩ ﺏﻮﻴﺗ ﺏﺮﻴﻔﻳ ٧٢\nﻊﻴﻧ ﺩﺭﺎﻬﻣ\nتونس", {locale: 'ar-TN'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "ﻢﻴﻠﻴﻫ ﺭﺅﻮﻓ ﺲﻋﺍﺩ ﺏﻮﻴﺗ ﺏﺮﻴﻔﻳ ٧٢");
        test.equal(parsedAddress.locality, "ﻊﻴﻧ ﺩﺭﺎﻬﻣ");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.country, "تونس");
        test.equal(parsedAddress.countryCode, "TN");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },

    testParseAddressTNNoCountry: function(test) {
        test.expect(7);
        var parsedAddress = new Address("ﻢﻴﻠﻴﻫ ﺭﺅﻮﻓ ﺲﻋﺍﺩ ﺏﻮﻴﺗ ﺏﺮﻴﻔﻳ ٧٢\n٨١٢٩ ﻊﻴﻧ ﺩﺭﺎﻬﻣ", {locale: 'ar-TN'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "ﻢﻴﻠﻴﻫ ﺭﺅﻮﻓ ﺲﻋﺍﺩ ﺏﻮﻴﺗ ﺏﺮﻴﻔﻳ ٧٢");
        test.equal(parsedAddress.locality, "ﻊﻴﻧ ﺩﺭﺎﻬﻣ");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "٨١٢٩");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "TN");
        test.done();
    },

    testParseAddressTNManyLines: function(test) {
        test.expect(7);
        var parsedAddress = new Address("ﺏﻮﻴﺗ ﺏﺮﻴﻔﻳ ٧٢\nﻢﻴﻠﻴﻫ ﺭﺅﻮﻓ ﺲﻋﺍﺩ\n٨١٢٩\nﻊﻴﻧ ﺩﺭﺎﻬﻣ\n\nتونس\n\n\n", {locale: 'ar-TN'});
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "ﺏﻮﻴﺗ ﺏﺮﻴﻔﻳ ٧٢, ﻢﻴﻠﻴﻫ ﺭﺅﻮﻓ ﺲﻋﺍﺩ");
        test.equal(parsedAddress.locality, "ﻊﻴﻧ ﺩﺭﺎﻬﻣ");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "٨١٢٩");
        test.equal(parsedAddress.country, "تونس");
        test.equal(parsedAddress.countryCode, "TN");
        test.done();
    },


    testParseAddressTNSuperfluousWhitespace: function(test) {
        test.expect(7);
        var parsedAddress = new Address("\t\t\tﺏﻮﻴﺗ ﺏﺮﻴﻔﻳ ٧٢\n\n\tﻢﻴﻠﻴﻫ ﺭﺅﻮﻓ ﺲﻋﺍﺩ\n\n\t٨١٢٩\n\n\tﻊﻴﻧ ﺩﺭﺎﻬﻣ\n\n\tتونس\n\n\n", {locale: 'ar-TN'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "ﺏﻮﻴﺗ ﺏﺮﻴﻔﻳ ٧٢, ﻢﻴﻠﻴﻫ ﺭﺅﻮﻓ ﺲﻋﺍﺩ");
        test.equal(parsedAddress.locality, "ﻊﻴﻧ ﺩﺭﺎﻬﻣ");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "٨١٢٩");
        test.equal(parsedAddress.country, "تونس");
        test.equal(parsedAddress.countryCode, "TN");
        test.done();
    },


    testParseAddressTNFromUS: function(test) {
        test.expect(7);
        var parsedAddress = new Address("ﻢﻴﻠﻴﻫ ﺭﺅﻮﻓ ﺲﻋﺍﺩ ﺏﻮﻴﺗ ﺏﺮﻴﻔﻳ ٧٢\n٨١٢٩\nﻊﻴﻧ ﺩﺭﺎﻬﻣ\nTunisia", {locale: 'en-US'});


        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "ﻢﻴﻠﻴﻫ ﺭﺅﻮﻓ ﺲﻋﺍﺩ ﺏﻮﻴﺗ ﺏﺮﻴﻔﻳ ٧٢");
        test.equal(parsedAddress.locality, "ﻊﻴﻧ ﺩﺭﺎﻬﻣ");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "٨١٢٩");
        test.equal(parsedAddress.country, "Tunisia");
        test.equal(parsedAddress.countryCode, "TN");
        test.done();
    },

    testFormatAddressTN: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "ﻢﻴﻠﻴﻫ ﺭﺅﻮﻓ ﺲﻋﺍﺩ ﺏﻮﻴﺗ ﺏﺮﻴﻔﻳ ٧٢",
            locality: "ﻊﻴﻧ ﺩﺭﺎﻬﻣ",
            postalCode: "٨١٢٩",
            country: "تونس",
            countryCode: "TN"
        }, {locale: 'ar-TN'});

        var expected = "ﻢﻴﻠﻴﻫ ﺭﺅﻮﻓ ﺲﻋﺍﺩ ﺏﻮﻴﺗ ﺏﺮﻴﻔﻳ ٧٢\n٨١٢٩ ﻊﻴﻧ ﺩﺭﺎﻬﻣ\nتونس";
        var formatter = new AddressFmt({locale: 'ar-TN'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },

    testFormatAddressTNFromUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "ﻢﻴﻠﻴﻫ ﺭﺅﻮﻓ ﺲﻋﺍﺩ ﺏﻮﻴﺗ ﺏﺮﻴﻔﻳ ٧٢",
            locality: "ﻊﻴﻧ ﺩﺭﺎﻬﻣ",
            postalCode: "٨١٢٩",
            country: "Tunisia",
            countryCode: "TN"
        }, {locale: 'en-US'});

        var expected = "ﻢﻴﻠﻴﻫ ﺭﺅﻮﻓ ﺲﻋﺍﺩ ﺏﻮﻴﺗ ﺏﺮﻴﻔﻳ ٧٢\n٨١٢٩ ﻊﻴﻧ ﺩﺭﺎﻬﻣ\nTunisia";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }

};
