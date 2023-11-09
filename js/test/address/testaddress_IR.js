/*
 * testaddress_IR.js - test the address parsing and formatting routines
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

module.exports.testaddress_IR = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testParseAddressIRNormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("خانم فاطمه, شماره طبقه, فرهنگ, تهران, ۱۱۹۳۶۵۴۴۷۱, ایران", {locale: 'fa-IR'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "خانم فاطمه, شماره طبقه");
        test.equal(parsedAddress.locality, "فرهنگ");
        test.equal(parsedAddress.region, "تهران");
        test.equal(parsedAddress.postalCode, "۱۱۹۳۶۵۴۴۷۱");
        test.equal(parsedAddress.country, "ایران");
        test.equal(parsedAddress.countryCode, "IR");
        test.done();
    },
    testParseAddressIRNoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("خانم فاطمه,شماره  طبقه, فرهنگ, تهران, ایران", {locale: 'fa-IR'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "خانم فاطمه, شماره طبقه");
        test.equal(parsedAddress.locality, "فرهنگ");
        test.equal(parsedAddress.region, "تهران");
        test.equal(parsedAddress.country, "ایران");
        test.equal(parsedAddress.countryCode, "IR");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    testParseAddressIRManyLines: function(test) {
        test.expect(7);
        var parsedAddress = new Address("خانم فاطمه\nشماره  طبقه\nفرهنگ, تهران ۱۱۹۳۶۵۴۴۷۱\nایران", {locale: 'fa-IR'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "خانم فاطمه, شماره طبقه");
        test.equal(parsedAddress.locality, "فرهنگ");
        test.equal(parsedAddress.region, "تهران");
        test.equal(parsedAddress.postalCode, "۱۱۹۳۶۵۴۴۷۱");
        test.equal(parsedAddress.country, "ایران");
        test.equal(parsedAddress.countryCode, "IR");
        test.done();
    },
    testParseAddressIROneLine: function(test) {
        test.expect(7);
        var parsedAddress = new Address("خانم فاطمه,شماره  طبقه,فرهنگ, تهران ۱۱۹۳۶۵۴۴۷۱ ایران", {locale: 'fa-IR'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "خانم فاطمه, شماره طبقه");
        test.equal(parsedAddress.locality, "فرهنگ");
        test.equal(parsedAddress.region, "تهران");
        test.equal(parsedAddress.postalCode, "۱۱۹۳۶۵۴۴۷۱");
        test.equal(parsedAddress.country, "ایران");
        test.equal(parsedAddress.countryCode, "IR");
        test.done();
    },
    testParseAddressIRSuperfluousWhitespace: function(test) {
        test.expect(7);
        var parsedAddress = new Address("خانم فاطمه,شماره  طبقه   \n\t\n فرهنگ, تهران ۱۱۹۳۶۵۴۴۷۱\t\n\n ایران  \n  \t\t\t", {locale: 'fa-IR'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "خانم فاطمه, شماره طبقه");
        test.equal(parsedAddress.locality, "فرهنگ");
        test.equal(parsedAddress.region, "تهران");
        test.equal(parsedAddress.postalCode, "۱۱۹۳۶۵۴۴۷۱");
        test.equal(parsedAddress.country, "ایران");
        test.equal(parsedAddress.countryCode, "IR");
        test.done();
    },
    testParseAddressIRNoDelimiters: function(test) {
        test.expect(7);
        var parsedAddress = new Address("خانم فاطمه شماره  طبقه فرهنگ, تهران ۱۱۹۳۶۵۴۴۷۱ ایران", {locale: 'fa-IR'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "خانم فاطمه شماره طبقه");
        test.equal(parsedAddress.locality, "فرهنگ");
        test.equal(parsedAddress.region, "تهران");
        test.equal(parsedAddress.postalCode, "۱۱۹۳۶۵۴۴۷۱");
        test.equal(parsedAddress.country, "ایران");
        test.equal(parsedAddress.countryCode, "IR");
        test.done();
    },
    testParseAddressIRFromUS: function(test) {
        test.expect(7);
        var parsedAddress = new Address("خانم فاطمه,شماره  طبقه,فرهنگ, تهران ۱۱۹۳۶۵۴۴۷۱,Iran", {locale: 'en-US'});

        // the country name is in English because this address is for a contact in a US database

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "خانم فاطمه, شماره طبقه");
        test.equal(parsedAddress.locality, "فرهنگ");
        test.equal(parsedAddress.region, "تهران");
        test.equal(parsedAddress.postalCode, "۱۱۹۳۶۵۴۴۷۱");
        test.equal(parsedAddress.country, "Iran");
        test.equal(parsedAddress.countryCode, "IR");
        test.done();
    },
    testFormatAddressIR: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "خانم فاطمه,شماره  طبقه",
            locality: "فرهنگ",
            region: "تهران",
            postalCode: "۱۱۹۳۶۵۴۴۷۱",
            country: "ایران",
            countryCode: "IR"
        }, {locale: 'fa-IR'});

        var expected = "خانم فاطمه,شماره طبقه\nفرهنگ\nتهران\n۱۱۹۳۶۵۴۴۷۱\nایران";
        var formatter = new AddressFmt({locale: 'fa-IR'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    testFormatAddressIRFromUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "خانم فاطمه,شماره  طبقه",
            postalCode: "۱۱۹۳۶۵۴۴۷۱",
            country: "Iran",
            countryCode: "IR"
        }, {locale: 'en-US'});

        var expected = "خانم فاطمه,شماره طبقه\n۱۱۹۳۶۵۴۴۷۱\nIran";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
};