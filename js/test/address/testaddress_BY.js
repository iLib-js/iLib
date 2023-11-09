/*
 * testaddress_BY.js - test the address parsing and formatting routines
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

module.exports.testaddress_BY = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testParseAddressBYNormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Адамович 4-й пер. ЧЕРНЫШЕВСКОГО 8\n211388, Орша\nBelarus", {locale: 'ru-BY'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Адамович 4-й пер. ЧЕРНЫШЕВСКОГО 8");
        test.equal(parsedAddress.locality, "Орша");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "211388");
        test.equal(parsedAddress.country, "Belarus");
        test.equal(parsedAddress.countryCode, "BY");
        test.done();
    },
    testParseAddressBYNoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Адамович 4-й пер. ЧЕРНЫШЕВСКОГО 8\nОрша\nBelarus", {locale: 'ru-BY'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Адамович 4-й пер. ЧЕРНЫШЕВСКОГО 8");
        test.equal(parsedAddress.locality, "Орша");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.country, "Belarus");
        test.equal(parsedAddress.countryCode, "BY");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    testParseAddressBYNoCountry: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Адамович 4-й пер. ЧЕРНЫШЕВСКОГО 8\nОрша\n211388", {locale: 'ru-BY'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Адамович 4-й пер. ЧЕРНЫШЕВСКОГО 8");
        test.equal(parsedAddress.locality, "Орша");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "211388");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "BY");
        test.done();
    },
    testParseAddressBYManyLines: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Адамович 4-й пер.\nЧЕРНЫШЕВСКОГО 8\n\n\n\n\nОрша\n\n211388\n\nBelarus\n\n\n", {locale: 'ru-BY'});
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Адамович 4-й пер., ЧЕРНЫШЕВСКОГО 8");
        test.equal(parsedAddress.locality, "Орша");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "211388");
        test.equal(parsedAddress.country, "Belarus");
        test.equal(parsedAddress.countryCode, "BY");
        test.done();
    },
    testParseAddressBYOneLine: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Адамович 4-й пер. , ЧЕРНЫШЕВСКОГО 8 , Орша , 211388 , Belarus", {locale: 'ru-BY'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Адамович 4-й пер., ЧЕРНЫШЕВСКОГО 8");
        test.equal(parsedAddress.locality, "Орша");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "211388");
        test.equal(parsedAddress.country, "Belarus");
        test.equal(parsedAddress.countryCode, "BY");
        test.done();
    },
    testParseAddressBYSuperfluousWhitespace: function(test) {
        test.expect(7);
        var parsedAddress = new Address("\t\t\tАдамович 4-й пер.\t\t\rЧЕРНЫШЕВСКОГО 8\t\t\r\n\n\n\nОрша\n\t211388\n\nBelarus\n\n\n", {locale: 'ru-BY'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Адамович 4-й пер. ЧЕРНЫШЕВСКОГО 8");
        test.equal(parsedAddress.locality, "Орша");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "211388");
        test.equal(parsedAddress.country, "Belarus");
        test.equal(parsedAddress.countryCode, "BY");
        test.done();
    },
    testParseAddressBYNoDelimiters: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Адамович 4-й пер. ЧЕРНЫШЕВСКОГО 8 Орша\n211388 Belarus", {locale: 'ru-BY'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Адамович 4-й пер. ЧЕРНЫШЕВСКОГО 8");
        test.equal(parsedAddress.locality, "Орша");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "211388");
        test.equal(parsedAddress.country, "Belarus");
        test.equal(parsedAddress.countryCode, "BY");
        test.done();
    },
    testParseAddressBYFromUS: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Адамович 4-й пер. ЧЕРНЫШЕВСКОГО 8\nОрша\n211388\nBelarus", {locale: 'en-US'});

        // the country name is in German because this address is for a contact in a German database

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Адамович 4-й пер. ЧЕРНЫШЕВСКОГО 8");
        test.equal(parsedAddress.locality, "Орша");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "211388");
        test.equal(parsedAddress.country, "Belarus");
        test.equal(parsedAddress.countryCode, "BY");
        test.done();
    },
    testFormatAddressBY: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Адамович 4-й пер. ЧЕРНЫШЕВСКОГО 8",
            locality: "Орша",
            postalCode: "211388",
            country: "Belarus",
            countryCode: "BY"
        }, {locale: 'ru-BY'});

        var expected = "Адамович 4-й пер. ЧЕРНЫШЕВСКОГО 8\n211388, Орша\nBelarus";
        var formatter = new AddressFmt({locale: 'ru-BY'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    testFormatAddressBYFromUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Адамович 4-й пер. ЧЕРНЫШЕВСКОГО 8",
            locality: "Орша",
            postalCode: "211388",
            country: "Belarus",
            countryCode: "BY"
        }, {locale: 'en-US'});

        var expected = "Адамович 4-й пер. ЧЕРНЫШЕВСКОГО 8\n211388, Орша\nBelarus";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
};