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

module.exports.testaddress_MY = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAddressMYMYLatinNormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("11 Jalan Budi 1\nTaman Budiman\n42700 BANTING\nSELANGOR\nMalaysia", {locale: 'en-MY'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "11 Jalan Budi 1, Taman Budiman");
        test.equal(parsedAddress.locality, "BANTING");
        test.equal(parsedAddress.region, "SELANGOR");
        test.equal(parsedAddress.postalCode, "42700");
        test.equal(parsedAddress.country, "Malaysia");
        test.equal(parsedAddress.countryCode, "MY");
        test.done();
    },

    testParseAddressMYMYLatinNoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Capital Shipping Bhd, Lot 323, 1st Floor, Bintang Commercial Centre,29 Jalan Sekilau\nJOHOR BAHRU\nJohor\nMalaysia", {locale: 'en-MY'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Capital Shipping Bhd, Lot 323, 1st Floor, Bintang Commercial Centre, 29 Jalan Sekilau");
        test.equal(parsedAddress.locality, "JOHOR BAHRU");
        test.equal(parsedAddress.region, "Johor");
        test.equal(parsedAddress.country, "Malaysia");
        test.equal(parsedAddress.countryCode, "MY");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },

    testParseAddressMYMYLatinNoCountry: function(test) {
        test.expect(7);
        var parsedAddress = new Address("11 Jalan Budi 1\nTaman Budiman\n42700 BANTING\nSELANGOR", {locale: 'en-MY'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "11 Jalan Budi 1, Taman Budiman");
        test.equal(parsedAddress.locality, "BANTING");
        test.equal(parsedAddress.region, "SELANGOR");
        test.equal(parsedAddress.postalCode, "42700");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "MY");
        test.done();
    },

    /*
    testParseAddressMYMYAsianNormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("新加坡共和國159088新加坡麟記路4＃06-07/08矽統科技大廈", {locale: 'zh-MY'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "麟記路4＃06-07/08矽統科技大廈");
        test.equal(parsedAddress.locality, "新加坡");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "159088");
        test.equal(parsedAddress.country, "新加坡共和國");
        test.equal(parsedAddress.countryCode, "MY");
        test.done();
    },

    testParseAddressMYMYAsianNoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("新加坡麟記路4＃06-07/08矽統科技大廈", {locale: 'zh-MY'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "麟記路4＃06-07/08矽統科技大廈");
        test.ok(typeof(parsedAddress.locality) === "undefined");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "新加坡");
        test.equal(parsedAddress.countryCode, "MY");
        test.done();
    },

    testParseAddressMYMYAsianNoCountry: function(test) {
        test.expect(7);
        var parsedAddress = new Address("159088新加坡麟記路4＃06-07/08矽統科技大廈", {locale: 'zh-MY'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "麟記路4＃06-07/08矽統科技大廈");
        test.equal(parsedAddress.locality, "新加坡");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "159088");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "MY");
        test.done();
    },
    */

    testParseAddressMYMYManyLines: function(test) {
        test.expect(7);
        var parsedAddress = new Address("11 Jalan Budi 1\nTaman Budiman\n42700 BANTING\nSELANGOR\nMalaysia", {locale: 'en-MY'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "11 Jalan Budi 1, Taman Budiman");
        test.equal(parsedAddress.locality, "BANTING");
        test.equal(parsedAddress.region, "SELANGOR");
        test.equal(parsedAddress.postalCode, "42700");
        test.equal(parsedAddress.country, "Malaysia");
        test.equal(parsedAddress.countryCode, "MY");
        test.done();
    },

    testParseAddressMYMYOneLine: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Capital Shipping Bhd, Lot 323, 1st Floor, Bintang Commercial Centre,29 Jalan Sekilau,JOHOR BAHRU,Johor,Malaysia", {locale: 'en-MY'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Capital Shipping Bhd, Lot 323, 1st Floor, Bintang Commercial Centre, 29 Jalan Sekilau");
        test.equal(parsedAddress.locality, "JOHOR BAHRU");
        test.equal(parsedAddress.region, "Johor");
        test.equal(parsedAddress.country, "Malaysia");
        test.equal(parsedAddress.countryCode, "MY");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },

    testParseAddressMYMYSuperfluousWhitespace: function(test) {
        test.expect(7);
        var parsedAddress = new Address("\t\t\t11 Jalan Budi 1\t\t\r\n\t42700 BANTING\r\t SELANGOR\t\nMalaysia\r\t\n", {locale: 'en-MY'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "11 Jalan Budi 1");
        test.equal(parsedAddress.locality, "BANTING");
        test.equal(parsedAddress.region, "SELANGOR");
        test.equal(parsedAddress.postalCode, "42700");
        test.equal(parsedAddress.country, "Malaysia");
        test.equal(parsedAddress.countryCode, "MY");
        test.done();
    },

    testParseAddressMYMYNoDelimiters: function(test) {
        test.expect(7);
        var parsedAddress = new Address("11 Jalan Budi 1 Taman Budiman 42700 BANTING SELANGOR Malaysia", {locale: 'en-MY'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "11 Jalan Budi 1 Taman Budiman");
        test.equal(parsedAddress.locality, "BANTING");
        test.equal(parsedAddress.region, "SELANGOR");
        test.equal(parsedAddress.postalCode, "42700");
        test.equal(parsedAddress.country, "Malaysia");
        test.equal(parsedAddress.countryCode, "MY");
        test.done();
    },

    /*
    testParseAddressMYMYSpecialChars: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Lín Jì Lù 4\n# 06-07/08 Xì Tǒng Kējì Dàshà\nMalaysia 159088\n", {locale: 'en-MY'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Lín Jì Lù 4, # 06-07/08 Xì Tǒng Kējì Dàshà");
        test.equal(parsedAddress.locality, "Malaysia");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "159088");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "MY");
        test.done();
    },
    */

    testParseAddressMYMYFromUS: function(test) {
        test.expect(7);
        var parsedAddress = new Address("11 Jalan Budi 1\nTaman Budiman\n42700 BANTING\nMalaysia", {locale: 'en-US'});

        // the country name is in English because this address is for a contact in a US database

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "11 Jalan Budi 1, Taman Budiman");
        test.equal(parsedAddress.locality, "BANTING");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "42700");
        test.equal(parsedAddress.country, "Malaysia");
        test.equal(parsedAddress.countryCode, "MY");
        test.done();
    },

    testFormatAddressMYLatin: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "11 Jalan Budi 1, Taman Budiman",
            locality: "BANTING",
            postalCode: "42700",
            country: "Malaysia",
            countryCode: "MY",
            format: "latin"
        }, {locale: 'en-MY'});

        var expected = "11 Jalan Budi 1, Taman Budiman\nBANTING 42700\nMalaysia";
        var formatter = new AddressFmt({locale: 'en-MY'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },

    /*
    testFormatAddressMYAsian: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "麟記路4＃06-07/08矽統科技大廈",
            locality: "新加坡",
            postalCode: "159088",
            country: "新加坡共和國",
            countryCode: "MY",
            format: "asian"
        }, {locale: 'zh-MY'});

        var expected = "新加坡共和國159088新加坡麟記路4＃06-07/08矽統科技大廈";
        var formatter = new AddressFmt({locale: 'zh-MY'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    */

    testFormatAddressMYFromUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "11 Jalan Budi 1, Taman Budiman",
            locality: "BANTING",
            postalCode: "42700",
            country: "Malaysia",
            countryCode: "MY",
            format: "latin"
        }, {locale: 'en-US'});

        var expected = "11 Jalan Budi 1, Taman Budiman\nBANTING 42700\nMalaysia";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }

};
