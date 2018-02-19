/*
 * testaddress_CZ.js - test the Czech address parsing and formatting routines
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
    var ilib = require("../../../lib/ilib.js");
}

module.exports.testaddress_CZ = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAddressCZNormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Prujezdna 320/62, 100 00 PRAHA 10, česká republika", {locale: 'cs-CZ'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Prujezdna 320/62");
        test.equal(parsedAddress.locality, "PRAHA 10");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "100 00");
        test.equal(parsedAddress.country, "česká republika");
        test.equal(parsedAddress.countryCode, "CZ");
        test.done();
    },
    
    testParseAddressCZNoZip: function(test) {
        test.expect(8);
        var parsedAddress = new Address("Prujezdna 320/62, PRAHA, česká republika", {locale: 'cs-CZ'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Prujezdna 320/62");
        test.equal(parsedAddress.locality, "PRAHA");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "česká republika");
        test.equal(parsedAddress.countryCode, "CZ");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    
    testParseAddressCZManyLines: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Jaromir Jagr\nPrujezdna 320/62\n100 00 Praha 10\nčeská republika", {locale: 'cs-CZ'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Jaromir Jagr, Prujezdna 320/62");
        test.equal(parsedAddress.locality, "Praha 10");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "100 00");
        test.equal(parsedAddress.country, "česká republika");
        test.equal(parsedAddress.countryCode, "CZ");
        test.done();
    },
    
    testParseAddressCZOneLine: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Prujezdna 320/62 100 00 PRAHA 10 česká republika", {locale: 'cs-CZ'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Prujezdna 320/62");
        test.equal(parsedAddress.locality, "PRAHA 10");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "100 00");
        test.equal(parsedAddress.country, "česká republika");
        test.equal(parsedAddress.countryCode, "CZ");
        test.done();
    },
    
    testParseAddressCZSuperfluousWhitespace: function(test) {
        test.expect(7);
        var parsedAddress = new Address("\n\t\t\rPrujezdna 320/62\t   \t\n   \r100 00 Praha 10    \t\n \n\n    česká republika              \t\t", {locale: 'cs-CZ'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Prujezdna 320/62");
        test.equal(parsedAddress.locality, "Praha 10");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "100 00");
        test.equal(parsedAddress.country, "česká republika");
        test.equal(parsedAddress.countryCode, "CZ");
        test.done();
    },
    
    testParseAddressCZSpecialChars: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Tyršova 1000, 592 31 Nové Město na Moravě 1000, Česká republika", {locale: 'cs-CZ'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Tyršova 1000");
        test.equal(parsedAddress.locality, "Nové Město na Moravě 1000");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "592 31");
        test.equal(parsedAddress.country, "Česká republika");
        test.equal(parsedAddress.countryCode, "CZ");
        test.done();
    },
    
    testParseAddressCZFromUS: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Tyršova 1000, 592 31 Nové Město na Moravě 1000, Czech Republic", {locale: 'en-US'});
        
        // the country name is in English because this address is for a contact in a US database
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Tyršova 1000");
        test.equal(parsedAddress.locality, "Nové Město na Moravě 1000");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "592 31");
        test.equal(parsedAddress.country, "Czech Republic");
        test.equal(parsedAddress.countryCode, "CZ");
        test.done();
    },
    
    testFormatAddressCZ: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Kostel svatého Šimona a Judy, Dušní",
             locality: "Praha 1",
            postalCode: "110 00",
            country: "Česká republika",
            countryCode: "CZ"
        }, {locale: 'cs-CZ'});
        
        var expected = "Kostel svatého Šimona a Judy, Dušní\n110 00 Praha 1\nČeská republika";
        var formatter = new AddressFmt({locale: 'cs-CZ'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressCZFromUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Kostel svatého Šimona a Judy, Dušní",
             locality: "Praha 1",
            postalCode: "110 00",
            country: "Czech Republic",
            countryCode: "CZ"
        }, {locale: 'en-US'});
        
        var expected = "Kostel svatého Šimona a Judy, Dušní\n110 00 Praha 1\nCzech Republic";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
    
};
