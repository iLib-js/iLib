/*
 * testaddress_LR.js - test the address parsing and formatting routines
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

module.exports.testaddress_LR = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAddressLRNormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Ministry of Posts and Telecommunications Postal Operations GPO\n1000 MONROVIA 10\nLiberia", {locale: 'en-LR'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Ministry of Posts and Telecommunications Postal Operations GPO");
        test.equal(parsedAddress.locality, "MONROVIA 10");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "1000");
        test.equal(parsedAddress.country, "Liberia");
        test.equal(parsedAddress.countryCode, "LR");
        test.done();
    },

    testParseAddressLRNoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Ministry of Posts and Telecommunications Postal Operations GPO\nMONROVIA 10\nLiberia", {locale: 'en-LR'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Ministry of Posts and Telecommunications Postal Operations GPO");
        test.equal(parsedAddress.locality, "MONROVIA 10");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.country, "Liberia");
        test.equal(parsedAddress.countryCode, "LR");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },

    testParseAddressLRNoCountry: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Ministry of Posts and Telecommunications Postal Operations GPO\n1000 MONROVIA 10", {locale: 'en-LR'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Ministry of Posts and Telecommunications Postal Operations GPO");
        test.equal(parsedAddress.locality, "MONROVIA 10");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "1000");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "LR");
        test.done();
    },

    testParseAddressLRManyLines: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Ministry of Posts and Telecommunications\nPostal Operations\nGPO\n\n1000\n\nMONROVIA 10\n\n\nLiberia\n\n\n", {locale: 'en-LR'});
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Ministry of Posts and Telecommunications, Postal Operations, GPO");
        test.equal(parsedAddress.locality, "MONROVIA 10");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "1000");
        test.equal(parsedAddress.country, "Liberia");
        test.equal(parsedAddress.countryCode, "LR");
        test.done();
    },

    testParseAddressLROneLine: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Ministry of Posts and Telecommunications , Postal Operations , GPO , 1000 , MONROVIA 10 , Liberia", {locale: 'en-LR'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Ministry of Posts and Telecommunications, Postal Operations, GPO");
        test.equal(parsedAddress.locality, "MONROVIA 10");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "1000");
        test.equal(parsedAddress.country, "Liberia");
        test.equal(parsedAddress.countryCode, "LR");
        test.done();
    },

    testParseAddressLRSuperfluousWhitespace: function(test) {
        test.expect(7);
        var parsedAddress = new Address("\t\t\tMinistry of Posts and Telecommunications\t\t\rPostal Operations\t\t\rGPO\n\n1000\n\nMONROVIA 10\n\t Liberia\n\n\n", {locale: 'en-LR'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Ministry of Posts and Telecommunications Postal Operations GPO");
        test.equal(parsedAddress.locality, "MONROVIA 10");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "1000");
        test.equal(parsedAddress.country, "Liberia");
        test.equal(parsedAddress.countryCode, "LR");
        test.done();
    },

    testParseAddressLRNoDelimiters: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Ministry of Posts and Telecommunications Postal Operations GPO 1000 MONROVIA 10 Liberia", {locale: 'en-LR'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Ministry of Posts and Telecommunications Postal Operations GPO");
        test.equal(parsedAddress.locality, "MONROVIA 10");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "1000");
        test.equal(parsedAddress.country, "Liberia");
        test.equal(parsedAddress.countryCode, "LR");
        test.done();
    },

    testParseAddressLRFromUS: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Ministry of Posts and Telecommunications Postal Operations GPO\n1000 MONROVIA 10\nLiberia", {locale: 'en-US'});

        // the country name is in German because this address is for a contact in a German database

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Ministry of Posts and Telecommunications Postal Operations GPO");
        test.equal(parsedAddress.locality, "MONROVIA 10");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "1000");
        test.equal(parsedAddress.country, "Liberia");
        test.equal(parsedAddress.countryCode, "LR");
        test.done();
    },

    testFormatAddressLR: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Ministry of Posts and Telecommunications Postal Operations GPO",
            locality: "MONROVIA 10",
            postalCode: "1000",
            country: "Liberia",
            countryCode: "LR"
        }, {locale: 'en-LR'});

        var expected = "Ministry of Posts and Telecommunications Postal Operations GPO\n1000 MONROVIA 10\nLiberia";
        var formatter = new AddressFmt({locale: 'en-LR'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },

    testFormatAddressLRFromUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Ministry of Posts and Telecommunications Postal Operations GPO",
            locality: "MONROVIA 10",
            postalCode: "1000",
            country: "Liberia",
            countryCode: "LR"
        }, {locale: 'en-US'});

        var expected = "Ministry of Posts and Telecommunications Postal Operations GPO\n1000 MONROVIA 10\nLiberia";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }

};
