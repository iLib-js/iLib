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

module.exports.testaddress_AM = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },
    testParseAMAddressNormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Armen Simonyan, Saryan str 22 apt 25, 0002, YEREVAN, ARMENIA", {locale: 'en-AM'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Armen Simonyan, Saryan str 22 apt 25");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "YEREVAN");
        test.equal(parsedAddress.postalCode, "0002");
        test.equal(parsedAddress.country, "ARMENIA");
        test.equal(parsedAddress.countryCode, "AM");
        test.done();
    },
    testParseAMAddressNoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Armen Simonyan, Saryan str 22 apt 25, YEREVAN, ARMENIA", {locale: 'en-AM'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Armen Simonyan, Saryan str 22 apt 25");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "YEREVAN");
        test.equal(parsedAddress.country, "ARMENIA");
        test.equal(parsedAddress.countryCode, "AM");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    testParseAMAddressManyLines: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Armen Simonyan\nSaryan str 22 apt 25\n0002 YEREVAN\nARMENIA", {locale: 'en-AM'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Armen Simonyan, Saryan str 22 apt 25");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "YEREVAN");
        test.equal(parsedAddress.postalCode, "0002");
        test.equal(parsedAddress.country, "ARMENIA");
        test.equal(parsedAddress.countryCode, "AM");
        test.done();
    },
    testParseAMAddressOneLine: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Armen Simonyan, Saryan str 22 apt 25, 0002 YEREVAN, ARMENIA", {locale: 'en-AM'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Armen Simonyan, Saryan str 22 apt 25");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "YEREVAN");
        test.equal(parsedAddress.postalCode, "0002");
        test.equal(parsedAddress.country, "ARMENIA");
        test.equal(parsedAddress.countryCode, "AM");
        test.done();
    },
    testParseAMAddressSuperfluousWhitespace: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Armen Simonyan, Saryan str 22 apt 25  \n\t\n 0002 YEREVAN\t\n\n ARMENIA  \n  \t\t\t", {locale: 'en-AM'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Armen Simonyan, Saryan str 22 apt 25");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "YEREVAN");
        test.equal(parsedAddress.postalCode, "0002");
        test.equal(parsedAddress.country, "ARMENIA");
        test.equal(parsedAddress.countryCode, "AM");
        test.done();
    },
    testParseAMAddressNoDelimiters: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Armen Simonyan P. 15 Sh. 1 0002 YEREVAN ARMENIA", {locale: 'en-AM'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Armen Simonyan P. 15 Sh. 1");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "YEREVAN");
        test.equal(parsedAddress.postalCode, "0002");
        test.equal(parsedAddress.country, "ARMENIA");
        test.equal(parsedAddress.countryCode, "AM");
        test.done();
    },
    testParseAMAddressSpeciAMChars: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Armen Simonyan, Saryan str 22 apt 25, 0002 YEREVAN, ARMENIA", {locale: 'en-AM'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Armen Simonyan, Saryan str 22 apt 25");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "YEREVAN");
        test.equal(parsedAddress.postalCode, "0002");
        test.equal(parsedAddress.country, "ARMENIA");
        test.equal(parsedAddress.countryCode, "AM");
        test.done();
    },
    testParseAMAddressFromUS: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Armen Simonyan, Saryan str 22 apt 25, 0002 YEREVAN, ARMENIA", {locale: 'en-US'});

        // the country name is in English because this address is for a contact in a US database

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Armen Simonyan, Saryan str 22 apt 25");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "YEREVAN");
        test.equal(parsedAddress.postalCode, "0002");
        test.equal(parsedAddress.country, "ARMENIA");
        test.equal(parsedAddress.countryCode, "AM");
        test.done();
    },
    testFormatAddressAM: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Armen Simonyan, Saryan str 22 apt 25",
            locality: "YEREVAN",
            postalCode: "0002",
            country: "ARMENIA",
            countryCode: "AM"
        }, {locale: 'en-AM'});

        var expected = "Armen Simonyan, Saryan str 22 apt 25\n0002 YEREVAN\nARMENIA";
        var formatter = new AddressFmt({locale: 'en-AM'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    testFormatAddressAMFromUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Armen Simonyan, Saryan str 22 apt 25",
            postalCode: "0002",
            country: "ARMENIA",
            locality: "YEREVAN",
            countryCode: "AM"
        }, {locale: 'en-US'});

        var expected = "Armen Simonyan, Saryan str 22 apt 25\n0002 YEREVAN\nARMENIA";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    testParseAddressinArmenian: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Արմեն Սիմոնյանը , Սարյան փող 22 , բն 25 , 0002 ԵՐԵՎԱՆ , ՀԱՅԱՍՏԱՆ", {locale: 'hy-AM'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Արմեն Սիմոնյանը, Սարյան փող 22, բն 25");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "ԵՐԵՎԱՆ");
        test.equal(parsedAddress.postalCode, "0002");
        test.equal(parsedAddress.country, "ՀԱՅԱՍՏԱՆ");
        test.equal(parsedAddress.countryCode, "AM");
        test.done();
    },
    testParseAddressinArmenianNoZip: function(test) {
        test.expect(6);
        var parsedAddress = new Address("Արմեն Սիմոնյանը , Սարյան փող 22 , բն 25 , ԵՐԵՎԱՆ , ՀԱՅԱՍՏԱՆ", {locale: 'hy-AM'});

        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Արմեն Սիմոնյանը, Սարյան փող 22, բն 25");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "ԵՐԵՎԱՆ");
        test.equal(parsedAddress.country, "ՀԱՅԱՍՏԱՆ");
        test.equal(parsedAddress.countryCode, "AM");
        test.done();
    },
    testParseAMAddressSuperfluousinArmenianWhitespace: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Արմեն Սիմոնյանը , Սարյան փող 22 , բն 25 \n\t\n 0002 ԵՐԵՎԱՆ\t\n\n ՀԱՅԱՍՏԱՆ \n  \t\t\t", {locale: 'hy-AM'});
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Արմեն Սիմոնյանը, Սարյան փող 22, բն 25");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "ԵՐԵՎԱՆ");
        test.equal(parsedAddress.postalCode, "0002");
        test.equal(parsedAddress.country, "ՀԱՅԱՍՏԱՆ");
        test.equal(parsedAddress.countryCode, "AM");
        test.done();
    },
    testParseAMAddressManyLineinArmenian: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Արմեն Սիմոնյանը , Սարյան փող 22 , բն 25 \n 0002 ԵՐԵՎԱՆ\n ՀԱՅԱՍՏԱՆ \n", {locale: 'hy-AM'});
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Արմեն Սիմոնյանը, Սարյան փող 22, բն 25");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "ԵՐԵՎԱՆ");
        test.equal(parsedAddress.postalCode, "0002");
        test.equal(parsedAddress.country, "ՀԱՅԱՍՏԱՆ");
        test.equal(parsedAddress.countryCode, "AM");
        test.done();
    },
    testParseAMAddressNoDelimittersinArmenian: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Արմեն Սիմոնյանը , Սարյան փող 22 , բն 25  0002 ԵՐԵՎԱՆ  ՀԱՅԱՍՏԱՆ ", {locale: 'hy-AM'});
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Արմեն Սիմոնյանը, Սարյան փող 22, բն 25");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "ԵՐԵՎԱՆ");
        test.equal(parsedAddress.postalCode, "0002");
        test.equal(parsedAddress.country, "ՀԱՅԱՍՏԱՆ");
        test.equal(parsedAddress.countryCode, "AM");
        test.done();
    },
    testParseAMAddressfromUSinAM: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Արմեն Սիմոնյանը , Սարյան փող 22 , բն 25  0002 ԵՐԵՎԱՆ  ՀԱՅԱՍՏԱՆ ", {locale: 'en-US'});
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Արմեն Սիմոնյանը, Սարյան փող 22, բն 25");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "ԵՐԵՎԱՆ");
        test.equal(parsedAddress.postalCode, "0002");
        test.equal(parsedAddress.country, "ՀԱՅԱՍՏԱՆ");
        test.equal(parsedAddress.countryCode, "AM");
        test.done();
    },
    testFormatAddressAMinArmenian: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Արմեն Սիմոնյանը, Սարյան փող 22, բն 25",
            locality: "ԵՐԵՎԱՆ",
            postalCode: "0002",
            country: "ՀԱՅԱՍՏԱՆ",
            countryCode: "AM"
        }, {locale: 'hy-AM'});

        var expected = "Արմեն Սիմոնյանը, Սարյան փող 22, բն 25\n0002 ԵՐԵՎԱՆ\nՀԱՅԱՍՏԱՆ";
        var formatter = new AddressFmt({locale: 'en-AM'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    testFormatAddressAMFromUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Արմեն Սիմոնյանը, Սարյան փող 22, բն 25",
            locality: "ԵՐԵՎԱՆ",
            postalCode: "0002",
            country: "ՀԱՅԱՍՏԱՆ",
            countryCode: "AM"
        }, {locale: 'en-US'});

        var expected = "Արմեն Սիմոնյանը, Սարյան փող 22, բն 25\n0002 ԵՐԵՎԱՆ\nՀԱՅԱՍՏԱՆ";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
};