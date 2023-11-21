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

module.exports.testaddress_CA = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testParseAddressCASimpleCA: function(test) {
        test.expect(7);
        var parsedAddress = new Address("5150 Spectrum Way\nMississauga, ON\nL4W 5G1\nCanada", {locale: 'en-CA'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "5150 Spectrum Way");
        test.equal(parsedAddress.locality, "Mississauga");
        test.equal(parsedAddress.region, "ON");
        test.equal(parsedAddress.postalCode, "L4W 5G1");
        test.equal(parsedAddress.country, "Canada");
        test.equal(parsedAddress.countryCode, "CA");
        test.done();
    },
    // to verify NOV-111026
    testParseAddressCAWithAccents: function(test) {
        test.expect(7);
        var parsedAddress = new Address("1253 McGill College\nSuite 250\nMontréal, QC, H2B 2Y5", {locale: 'en-CA'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "1253 McGill College, Suite 250");
        test.equal(parsedAddress.locality, "Montréal");
        test.equal(parsedAddress.region, "QC");
        test.equal(parsedAddress.postalCode, "H2B 2Y5");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "CA");
        test.done();
    },
    testParseAddressCASpelledOutProvince: function(test) {
        test.expect(7);
        var parsedAddress = new Address("340 Hagey Blvd\n2nd Floor\nWaterloo, Ontario, N2L 6R6", {locale: 'en-CA'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "340 Hagey Blvd, 2nd Floor");
        test.equal(parsedAddress.locality, "Waterloo");
        test.equal(parsedAddress.region, "Ontario");
        test.equal(parsedAddress.postalCode, "N2L 6R6");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "CA");
        test.done();
    },
    testParseAddressCASpelledOutProvinceWithSpaces: function(test) {
        test.expect(7);
        var parsedAddress = new Address("20 Main St.\nMyTown, Prince Edward Island A1B 2C3\nCanada", {locale: 'en-CA'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "20 Main St.");
        test.equal(parsedAddress.locality, "MyTown");
        test.equal(parsedAddress.region, "Prince Edward Island");
        test.equal(parsedAddress.postalCode, "A1B 2C3");
        test.equal(parsedAddress.country, "Canada");
        test.equal(parsedAddress.countryCode, "CA");
        test.done();
    },
    testParseAddressCANoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("20 Main St.\nMyTown, AB\nCanada", {locale: 'en-CA'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "20 Main St.");
        test.equal(parsedAddress.locality, "MyTown");
        test.equal(parsedAddress.region, "AB");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "Canada");
        test.equal(parsedAddress.countryCode, "CA");
        test.done();
    },
    testParseAddressCAManyLines: function(test) {
        test.expect(7);
        var parsedAddress = new Address("950 W 21st Ave\nApt 45\nCambridge\nON\nA4C 5N4", {locale: 'en-CA'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "950 W 21st Ave, Apt 45");
        test.equal(parsedAddress.locality, "Cambridge");
        test.equal(parsedAddress.region, "ON");
        test.equal(parsedAddress.postalCode, "A4C 5N4");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "CA");
        test.done();
    },
    testParseAddressCAOneLine: function(test) {
        test.expect(7);
        var parsedAddress = new Address("5150 Spectrum Way, Mississauga, ON, L4W 5G1, Canada", {locale: 'en-CA'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "5150 Spectrum Way");
        test.equal(parsedAddress.locality, "Mississauga");
        test.equal(parsedAddress.region, "ON");
        test.equal(parsedAddress.postalCode, "L4W 5G1");
        test.equal(parsedAddress.country, "Canada");
        test.equal(parsedAddress.countryCode, "CA");
        test.done();
    },
    testParseAddressCASuperfluousWhitespace: function(test) {
        test.expect(7);
        var parsedAddress = new Address("5150 Spectrum Way\n  \t \t Mississauga, \n   \t ON, \n, \n\n L4W 5G1   \n  Canada\n\n   \n\n", {locale: 'en-CA'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "5150 Spectrum Way");
        test.equal(parsedAddress.locality, "Mississauga");
        test.equal(parsedAddress.region, "ON");
        test.equal(parsedAddress.postalCode, "L4W 5G1");
        test.equal(parsedAddress.country, "Canada");
        test.equal(parsedAddress.countryCode, "CA");
        test.done();
    },
    testParseAddressCANoDelimiters: function(test) {
        test.expect(7);
        var parsedAddress = new Address("5150 Spectrum Way Mississauga ON L4W 5G1 Canada", {locale: 'en-CA'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "5150 Spectrum Way");
        test.equal(parsedAddress.locality, "Mississauga");
        test.equal(parsedAddress.region, "ON");
        test.equal(parsedAddress.postalCode, "L4W 5G1");
        test.equal(parsedAddress.country, "Canada");
        test.equal(parsedAddress.countryCode, "CA");
        test.done();
    },
    testParseAddressCAPOBox: function(test) {
        test.expect(7);
        var parsedAddress = new Address("P.O. Box 350\nToronto ON Y5T 5T5", {locale: 'en-CA'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "P.O. Box 350");
        test.equal(parsedAddress.locality, "Toronto");
        test.equal(parsedAddress.region, "ON");
        test.equal(parsedAddress.postalCode, "Y5T 5T5");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "CA");
        test.done();
    },
    testParseAddressCAFrench: function(test) {
        test.expect(7);
        var parsedAddress = new Address("20 Montée Lavalle\nÉparnay, Nouveau-Brunswick Y7Y 7Y7", {locale: 'en-CA'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "20 Montée Lavalle");
        test.equal(parsedAddress.locality, "Éparnay");
        test.equal(parsedAddress.region, "Nouveau-Brunswick");
        test.equal(parsedAddress.postalCode, "Y7Y 7Y7");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "CA");
        test.done();
    },
    testParseAddressCAForeign: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Achterberglaan 23, 2345 GD Uithoorn, Netherlands", {locale: 'en-CA'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Achterberglaan 23");
        test.equal(parsedAddress.locality, "Uithoorn");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "2345 GD");
        test.equal(parsedAddress.country, "Netherlands");
        test.equal(parsedAddress.countryCode, "NL");
        test.done();
    },
    testFormatAddressCA: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "5150 Spectrum Way",
            locality: "Mississauga",
            region: "Ontario",
            postalCode: "L4W 5G1",
            country: "Canada",
            countryCode: "CA"
        }, {locale: 'en-CA'});

        var expected = "5150 Spectrum Way\nMississauga, Ontario L4W 5G1\nCanada";
        var formatter = new AddressFmt({locale: 'en-CA'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    testFormatAddressCADomestic: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "5150 Spectrum Way",
            locality: "Mississauga",
            region: "Ontario",
            postalCode: "L4W 5G1",
            country: "Canada",
            countryCode: "CA"
        }, {locale: 'en-CA'});

        var expected = "5150 Spectrum Way\nMississauga, Ontario L4W 5G1";
        var formatter = new AddressFmt({locale: 'en-CA', style: 'nocountry'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }

    /*
    canada:

    5150 Spectrum Way
    Mississauga, Ontario
    L4W 5G1
    Canada

    1253 McGill College, Suite 250
    Montreal, Quebec, H2B 2Y5

    340 Hagey Blvd
    2nd Floor
    Waterloo, Ontario, N2L 6R6

    10 Dundas Street East
    Suite 600
    Toronto, Ontario M5B 2G9


    */
};
