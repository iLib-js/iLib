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
    var Address = require("../../../lib/Address.js");
}
if (typeof(AddressFmt) === "undefined") {
    var AddressFmt = require("../../../lib/AddressFmt.js");
}


if (typeof(ilib) === "undefined") {
    var ilib = require("../../..");
}

module.exports.testaddress_DK = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAddressDKNormal: function(test) {
        var parsedAddress = new Address("Hr. Niels Henriksen, Kastanievej 15, DK-8660 SKANDERBORG, DENMARK", {locale: 'da-DK'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Hr. Niels Henriksen, Kastanievej 15");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "SKANDERBORG");
        test.equal(parsedAddress.postalCode, "DK-8660");
        test.equal(parsedAddress.country, "DENMARK");
        test.equal(parsedAddress.countryCode, "DK");
        test.done();
    },
    
    testParseAddressDKNoZip: function(test) {
        var parsedAddress = new Address("Hr. Niels Henriksen, Kastanievej 15, SKANDERBORG, DENMARK", {locale: 'da-DK'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Hr. Niels Henriksen, Kastanievej 15");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "SKANDERBORG");
        test.equal(parsedAddress.country, "DENMARK");
        test.equal(parsedAddress.countryCode, "DK");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    
    testParseAddressDKShortZip: function(test) {
        var parsedAddress = new Address("Hr. Niels Henriksen, Kastanievej 15, 8660 SKANDERBORG, DENMARK", {locale: 'da-DK'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Hr. Niels Henriksen, Kastanievej 15");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "SKANDERBORG");
        test.equal(parsedAddress.postalCode, "8660");
        test.equal(parsedAddress.country, "DENMARK");
        test.equal(parsedAddress.countryCode, "DK");
        test.done();
    },
    
    testParseAddressDKManyLines: function(test) {
        var parsedAddress = new Address("Hr. Niels Henriksen\nKastanievej 15\nDK-8660 SKANDERBORG\nDENMARK", {locale: 'da-DK'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Hr. Niels Henriksen, Kastanievej 15");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "SKANDERBORG");
        test.equal(parsedAddress.postalCode, "DK-8660");
        test.equal(parsedAddress.country, "DENMARK");
        test.equal(parsedAddress.countryCode, "DK");
        test.done();
    },
    
    testParseAddressDKOneLine: function(test) {
        var parsedAddress = new Address("Hr. Niels Henriksen, Kastanievej 15, DK-8660 SKANDERBORG DENMARK", {locale: 'da-DK'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Hr. Niels Henriksen, Kastanievej 15");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "SKANDERBORG");
        test.equal(parsedAddress.postalCode, "DK-8660");
        test.equal(parsedAddress.country, "DENMARK");
        test.equal(parsedAddress.countryCode, "DK");
        test.done();
    },
    
    testParseAddressDKSuperfluousWhitespace: function(test) {
        var parsedAddress = new Address("Hr. Niels Henriksen,          Kastanievej 15   \n\t\n DK-8660      \t SKANDERBORG\t\n\n DENMARK  \n  \t\t\t", {locale: 'da-DK'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Hr. Niels Henriksen, Kastanievej 15");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "SKANDERBORG");
        test.equal(parsedAddress.postalCode, "DK-8660");
        test.equal(parsedAddress.country, "DENMARK");
        test.equal(parsedAddress.countryCode, "DK");
        test.done();
    },
    
    testParseAddressDKNoDelimiters: function(test) {
        var parsedAddress = new Address("Hr. Niels Henriksen Kastanievej 15 DK-8660 SKANDERBORG DENMARK", {locale: 'da-DK'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Hr. Niels Henriksen Kastanievej 15");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "SKANDERBORG");
        test.equal(parsedAddress.postalCode, "DK-8660");
        test.equal(parsedAddress.country, "DENMARK");
        test.equal(parsedAddress.countryCode, "DK");
        test.done();
    },
    
    testParseAddressDKSpecialChars: function(test) {
        var parsedAddress = new Address("Botanisk Centralbibliotek, Sølvgade 83, opg. S, DK-1307 København, DENMARK", {locale: 'da-DK'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "København");
        test.equal(parsedAddress.postalCode, "DK-1307");
        test.equal(parsedAddress.country, "DENMARK");
        test.equal(parsedAddress.streetAddress, "Botanisk Centralbibliotek, Sølvgade 83, opg. S");
        test.equal(parsedAddress.countryCode, "DK");
        test.done();
    },
    
    testParseAddressDKPostOffice: function(test) {
        var parsedAddress = new Address("Botanisk Centralbibliotek, Sølvgade 83, opg. S, DK-1307 København K, DENMARK", {locale: 'da-DK'});
        
        test.expect(8);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "København");
        test.equal(parsedAddress.postalCode, "DK-1307");
        test.equal(parsedAddress.postOffice, "K");
        test.equal(parsedAddress.country, "DENMARK");
        test.equal(parsedAddress.streetAddress, "Botanisk Centralbibliotek, Sølvgade 83, opg. S");
        test.equal(parsedAddress.countryCode, "DK");
        test.done();
    },
    
    testParseAddressDKPostOfficeDot: function(test) {
        var parsedAddress = new Address("Botanisk Centralbibliotek, Sølvgade 83, opg. S, DK-1307 København K., DENMARK", {locale: 'da-DK'});
        
        test.expect(8);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "København");
        test.equal(parsedAddress.postalCode, "DK-1307");
        test.equal(parsedAddress.postOffice, "K.");
        test.equal(parsedAddress.country, "DENMARK");
        test.equal(parsedAddress.streetAddress, "Botanisk Centralbibliotek, Sølvgade 83, opg. S");
        test.equal(parsedAddress.countryCode, "DK");
        test.done();
    },
    
    testParseAddressDKFromUS: function(test) {
        var parsedAddress = new Address("Hr. Niels Henriksen, Kastanievej 15, DK-8660 SKANDERBORG, DENMARK", {locale: 'en-US'});
        
        // the country name is in English because this address is for a contact in a US database
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Hr. Niels Henriksen, Kastanievej 15");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "SKANDERBORG");
        test.equal(parsedAddress.postalCode, "DK-8660");
        test.equal(parsedAddress.country, "DENMARK");
        test.equal(parsedAddress.countryCode, "DK");
        test.done();
    },
    
    testFormatAddressDK: function(test) {
        var parsedAddress = new Address({
            streetAddress: "Hr. Niels Henriksen,Kastanievej 15",
            locality: "SKANDERBORG",
            postalCode: "DK-8660",
            country: "DENMARK",
            countryCode: "DK"
        }, {locale: 'da-DK'});
        
        var expected = "Hr. Niels Henriksen,Kastanievej 15\nDK-8660 SKANDERBORG\nDENMARK";
        var formatter = new AddressFmt({locale: 'da-DK'});
        test.expect(1);
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressDKPostOffice: function(test) {
        var parsedAddress = new Address({
            streetAddress: "Hr. Niels Henriksen, Kastanievej 15",
            locality: "SKANDERBORG",
            postalCode: "DK-8660",
            postOffice: "K.",
            country: "DENMARK",
            countryCode: "DK"
        }, {locale: 'da-DK'});
        
        var expected = "Hr. Niels Henriksen, Kastanievej 15\nDK-8660 SKANDERBORG K.\nDENMARK";
        var formatter = new AddressFmt({locale: 'da-DK'});
        test.expect(1);
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressDKFromUS: function(test) {
        var parsedAddress = new Address({
            streetAddress: "Hr. Niels Henriksen,Kastanievej 15",
            postalCode: "DK-8660",
            locality: "SKANDERBORG",
            country: "DENMARK",
            countryCode: "DK"
        }, {locale: 'en-US'});
        
        var expected = "Hr. Niels Henriksen,Kastanievej 15\nDK-8660 SKANDERBORG\nDENMARK";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.expect(1);
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
    
};