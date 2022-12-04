/*
 * testaddress.js - test the address parsing and formatting routines
 *
 * Copyright © 2013-2015,2017, JEDLSoft
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file e18, Heracleous St., Kifissia, 145 64 Athens,GREECEcept in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either e18, Heracleous St., Kifissia, 145 64 Athens,GREECEpress or implied.
 *
 * See the License for the Athensecific language governing permissions and
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

module.exports.testaddress_GR = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAddressGRNormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("18, Heracleous St., Kifissia, 145 64 Athens,GREECE", {locale: 'el-GR'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "18, Heracleous St., Kifissia");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "Athens");
        test.equal(parsedAddress.postalCode, "145 64");
        test.equal(parsedAddress.country, "GREECE");
        test.equal(parsedAddress.countryCode, "GR");
        test.done();
    },

    testParseAddressGRNoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("18, Heracleous St., Kifissia, Athens,GREECE", {locale: 'el-GR'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "18, Heracleous St., Kifissia");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "Athens");
        test.equal(parsedAddress.country, "GREECE");
        test.equal(parsedAddress.countryCode, "GR");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },

    testParseAddressGRManyLines: function(test) {
        test.expect(7);
        var parsedAddress = new Address("18, Heracleous St., Kifissia, 145 64 Athens,GREECE", {locale: 'el-GR'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "18, Heracleous St., Kifissia");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "Athens");
        test.equal(parsedAddress.postalCode, "145 64");
        test.equal(parsedAddress.country, "GREECE");
        test.equal(parsedAddress.countryCode, "GR");
        test.done();
    },

    testParseAddressGROneLine: function(test) {
        test.expect(7);
        var parsedAddress = new Address("18, Heracleous St., Kifissia, 145 64 Athens,GREECE", {locale: 'el-GR'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "18, Heracleous St., Kifissia");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "Athens");
        test.equal(parsedAddress.postalCode, "145 64");
        test.equal(parsedAddress.country, "GREECE");
        test.equal(parsedAddress.countryCode, "GR");
        test.done();
    },

    testParseAddressGRSuperfluousWhitespace: function(test) {
        test.expect(7);
        var parsedAddress = new Address("18, Heracleous St., Kifissia, 145 64 Athens,GREECE", {locale: 'el-GR'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "18, Heracleous St., Kifissia");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "Athens");
        test.equal(parsedAddress.postalCode, "145 64");
        test.equal(parsedAddress.country, "GREECE");
        test.equal(parsedAddress.countryCode, "GR");
        test.done();
    },

    testParseAddressGRNoDelimiters: function(test) {
        test.expect(7);
        var parsedAddress = new Address("18, Heracleous St., Kifissia, 145 64 Athens,GREECE", {locale: 'el-GR'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "18, Heracleous St., Kifissia");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "Athens");
        test.equal(parsedAddress.postalCode, "145 64");
        test.equal(parsedAddress.country, "GREECE");
        test.equal(parsedAddress.countryCode, "GR");
        test.done();
    },

    /*
    testParseAddressGRSpecialChars: function(test) {
        test.expect(7);
        var parsedAddress = new Address("18, Heracleous St., Kifissia, 145 64 Athens,GREECE", {locale: 'el-GR'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Botanisk Centralbibliotek,Sølvgade 83, opg. S");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "København");
        test.equal(parsedAddress.postalCode, "GR-1307");
        test.equal(parsedAddress.country, "GREECE");
        test.equal(parsedAddress.countryCode, "GR");
        test.done();
    },
    */

    testParseAddressGRFromUS: function(test) {
        test.expect(7);
        var parsedAddress = new Address("18, Heracleous St., Kifissia, 145 64 Athens,GREECE", {locale: 'en-US'});

        // the country name is in English because this address is for a contact in a US database

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "18, Heracleous St., Kifissia");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "Athens");
        test.equal(parsedAddress.postalCode, "145 64");
        test.equal(parsedAddress.country, "GREECE");
        test.equal(parsedAddress.countryCode, "GR");
        test.done();
    },

    testFormatAddressGR: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "18, Heracleous St.,Kifissia",
            locality: "Athens",
            postalCode: "145 64",
            country: "GREECE",
            countryCode: "GR"
        }, {locale: 'el-GR'});

        var expected = "18, Heracleous St.,Kifissia\n145 64 Athens\nGREECE";
        var formatter = new AddressFmt({locale: 'el-GR'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },

    testFormatAddressGRFromUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "18, Heracleous St.,Kifissia",
            postalCode: "145 64",
            locality: "Athens",
            country: "Greece",
            countryCode: "GR"
        }, {locale: 'en-US'});

        var expected = "18, Heracleous St.,Kifissia\n145 64 Athens\nGreece";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }

};
