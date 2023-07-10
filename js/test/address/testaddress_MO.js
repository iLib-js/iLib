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

module.exports.testaddress_MO = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAddressMOLatinNormal: function(test) {
        test.expect(6);
        var parsedAddress = new Address("Rua Cidade de Lisboa N.o 130\n Lisboa Gardens, Tower B3\n 14th Floor D,\n Macau 999078\n Macau", {locale: 'pt-MO'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Rua Cidade de Lisboa N.o 130, Lisboa Gardens, Tower B3, 14th Floor D");
        test.equal(parsedAddress.region, "Macau");
        test.equal(parsedAddress.postalCode, "999078");
        test.equal(parsedAddress.country, "Macau");
        test.equal(parsedAddress.countryCode, "MO");
        test.done();
    },

    testParseAddressMOLatinNoZip: function(test) {
        test.expect(6);
        var parsedAddress = new Address("Rua Cidade de Lisboa N.o 130\n Lisboa Gardens, Tower B3\n 14th Floor D,\n Macau \n Macau", {locale: 'pt-MO'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Rua Cidade de Lisboa N.o 130, Lisboa Gardens, Tower B3, 14th Floor D");
        test.equal(parsedAddress.region, "Macau");
        test.equal(parsedAddress.country, "Macau");
        test.equal(parsedAddress.countryCode, "MO");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },

    testParseAddressMOLatinNoCountry: function(test) {
        test.expect(6);
        var parsedAddress = new Address("Rua Cidade de Lisboa N.o 130\n Lisboa Gardens, Tower B3\n 14th Floor D,\n Macau 999078", {locale: 'pt-MO'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Rua Cidade de Lisboa N.o 130, Lisboa Gardens, Tower B3, 14th Floor D");
        test.equal(parsedAddress.region, "Macau");
        test.equal(parsedAddress.postalCode, "999078");
        test.equal(parsedAddress.countryCode, "MO");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.done();
    },

    testParseAddressMOAsianNormal: function(test) {
        test.expect(5);
        var parsedAddress = new Address("澳門999078商業大馬路251A-301號\n這是一個友善博祚20樓\n行政中心", {locale: 'zh-MO'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "商業大馬路251A-301號這是一個友善博祚20樓行政中心");
        test.equal(parsedAddress.country, "澳門");
        test.equal(parsedAddress.postalCode, "999078");
        test.equal(parsedAddress.countryCode, "MO");
        test.done();
    },

    testParseAddressMOAsianNoZip: function(test) {
        test.expect(5);
        var parsedAddress = new Address("澳門商業大馬路251A-301號\n這是一個友善博祚20樓\n行政中心", {locale: 'zh-MO'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "商業大馬路251A-301號這是一個友善博祚20樓行政中心");
        test.equal(parsedAddress.country, "澳門");
        test.equal(parsedAddress.countryCode, "MO");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },

    testParseAddressMOAsianNoCountry: function(test) {
        test.expect(5);
        var parsedAddress = new Address("999078商業大馬路251A-301號\n這是一個友善博祚20樓\n行政中心", {locale: 'zh-MO'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "商業大馬路251A-301號這是一個友善博祚20樓行政中心");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.postalCode, "999078");
        test.equal(parsedAddress.countryCode, "MO");
        test.done();
    },

    testParseAddressMOManyLines: function(test) {
        test.expect(6);
        var parsedAddress = new Address("Rua Cidade de Lisboa N.o 130\n\n Lisboa Gardens, Tower B3\n\n 14th Floor D,\n\n\n Macau 999078\n\n Macau", {locale: 'pt-MO'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Rua Cidade de Lisboa N.o 130, Lisboa Gardens, Tower B3, 14th Floor D");
        test.equal(parsedAddress.region, "Macau");
        test.equal(parsedAddress.postalCode, "999078");
        test.equal(parsedAddress.country, "Macau");
        test.equal(parsedAddress.countryCode, "MO");
        test.done();
    },

    testParseAddressMOOneLine: function(test) {
        test.expect(6);
        var parsedAddress = new Address("Rua Cidade de Lisboa N.o 130 Lisboa Gardens, Tower B3 14th Floor D, Macau 999078 Macau", {locale: 'pt-MO'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Rua Cidade de Lisboa N.o 130 Lisboa Gardens, Tower B3 14th Floor D");
        test.equal(parsedAddress.region, "Macau");
        test.equal(parsedAddress.postalCode, "999078");
        test.equal(parsedAddress.country, "Macau");
        test.equal(parsedAddress.countryCode, "MO");
        test.done();
    },

    testParseAddressMOSuperfluousWhitespace: function(test) {
        test.expect(6);
        var parsedAddress = new Address("\t\t\tRua Cidade de Lisboa N.o 130\r\t Lisboa Gardens,\r\t   \tTower B3 14th Floor D,\t\t\n\t Macau \r\t999078 \n\t\t\r\rMacau\t\n\n\n", {locale: 'pt-MO'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Rua Cidade de Lisboa N.o 130 Lisboa Gardens, Tower B3 14th Floor D");
        test.equal(parsedAddress.region, "Macau");
        test.equal(parsedAddress.postalCode, "999078");
        test.equal(parsedAddress.country, "Macau");
        test.equal(parsedAddress.countryCode, "MO");
        test.done();
    },

    testParseAddressMONoDelimiters: function(test) {
        test.expect(6);
        var parsedAddress = new Address("Rua Cidade de Lisboa N.o 130 Lisboa Gardens Tower B3 14th Floor D Macau 999078 Macau", {locale: 'pt-MO'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Rua Cidade de Lisboa N.o 130 Lisboa Gardens Tower B3 14th Floor D");
        test.equal(parsedAddress.region, "Macau");
        test.equal(parsedAddress.postalCode, "999078");
        test.equal(parsedAddress.country, "Macau");
        test.equal(parsedAddress.countryCode, "MO");
        test.done();
    },

    testParseAddressMOFromUS: function(test) {
        test.expect(6);

        var parsedAddress = new Address("Rua Cidade de Lisboa N.o 130\n Lisboa Gardens, Tower B3\n 14th Floor D,\n Macau 999078\n Macau", {locale: 'en-US'});
        // the country name is in English because this address is for a contact in a US database

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Rua Cidade de Lisboa N.o 130, Lisboa Gardens, Tower B3, 14th Floor D");
        test.equal(parsedAddress.region, "Macau");
        test.equal(parsedAddress.postalCode, "999078");
        test.equal(parsedAddress.country, "Macau");
        test.equal(parsedAddress.countryCode, "MO");
        test.done();
    },

    testFormatAddressMOLatin: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Rua Cidade de Lisboa N.o 130, Lisboa Gardens, Tower B3, 14th Floor D",
            region: "Macau",
            postalCode: "999078",
            country: "Macau",
            countryCode: "MO",
            format: "latin"
        }, {locale: 'pt-MO'});

        var expected = "Rua Cidade de Lisboa N.o 130, Lisboa Gardens, Tower B3, 14th Floor D\nMacau 999078\nMacau";
        var formatter = new AddressFmt({locale: 'pt-MO'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },

    testFormatAddressMOFromUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Rua Cidade de Lisboa N.o 130, Lisboa Gardens, Tower B3, 14th Floor D",
            region: "Macau",
            postalCode: "999078",
            country: "Macau",
            countryCode: "MO",
            format: "latin"
        }, {locale: 'en-US'});

        var expected = "Rua Cidade de Lisboa N.o 130, Lisboa Gardens, Tower B3, 14th Floor D\nMacau 999078\nMacau";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }

};
