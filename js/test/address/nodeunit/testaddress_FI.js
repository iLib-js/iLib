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

module.exports.testaddress_FI = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAddressFIFIfinnishNormal: function(test) {
        var parsedAddress = new Address("Eduskunta\nMatti Mallikainen\nMannerheimintie 30 as 5\nFI-00102 Eduskunta\nFinland", {locale: 'fi-FI'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Eduskunta, Matti Mallikainen, Mannerheimintie 30 as 5");
        test.equal(parsedAddress.locality, "Eduskunta");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "FI-00102");
        test.equal(parsedAddress.country, "Finland");
        test.equal(parsedAddress.countryCode, "FI");
        test.done();
    },
    
    testParseAddressFIFIfinnishNoCountry: function(test) {
        var parsedAddress = new Address("Eduskunta, Matti Mallikainen\nMannerheimintie 30 as 5\nFI-00102 Eduskunta", {locale: 'fi-FI'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Eduskunta, Matti Mallikainen, Mannerheimintie 30 as 5");
        test.equal(parsedAddress.locality, "Eduskunta");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "FI-00102");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "FI");
        test.done();
    },
    
    
    testParseAddressFIFIswedishNormal: function(test) {
        var parsedAddress = new Address("Kalevankatu 12, 1st floor, FI-60100 Seinäjoki,Finland", {locale: 'sv-FI'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Kalevankatu 12, 1st floor");
        test.equal(parsedAddress.locality, "Seinäjoki");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "FI-60100");
        test.equal(parsedAddress.country, "Finland");
        test.equal(parsedAddress.countryCode, "FI");
        test.done();
    },
    
    testParseAddressFIFIswedishNoCountry: function(test) {
        var parsedAddress = new Address("Kalevankatu 12, 1st floor, FI-60100 Seinäjoki", {locale: 'sv-FI'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Kalevankatu 12, 1st floor");
        test.equal(parsedAddress.locality, "Seinäjoki");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "FI-60100");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "FI");
        test.done();
    },
    
    
    
    testParseAddressFIFIOneLine: function(test) {
        var parsedAddress = new Address("Saga Matkat OY, Saga Tours Ltd, Albertinkatu 36 B, 00180 HELSINKI, Finland", {locale: 'fi-FI'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Saga Matkat OY, Saga Tours Ltd, Albertinkatu 36 B");
        test.equal(parsedAddress.locality, "HELSINKI");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "00180");
        test.equal(parsedAddress.country, "Finland");
        test.equal(parsedAddress.countryCode, "FI");
        test.done();
    },
    
    testParseAddressFIFISuperfluousWhitespace: function(test) {
        var parsedAddress = new Address("\t\t\tMs. Aulikki Laasko\n\t\nVesakkotic 1399\n \r\n\r\rFI-00630    HELSINKI\r\r\n    Finland\t\n\n\n", {locale: 'fi-FI'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Ms. Aulikki Laasko, Vesakkotic 1399");
        test.equal(parsedAddress.locality, "HELSINKI");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "FI-00630");
        test.equal(parsedAddress.country, "Finland");
        test.equal(parsedAddress.countryCode, "FI");
        test.done();
    },
    
    testParseAddressFIFINoDelimiters: function(test) {
        var parsedAddress = new Address("Ms. Aulikki Laasko Vesakkotic 1399 HELSINKI Finland", {locale: 'fi-FI'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Ms. Aulikki Laasko Vesakkotic 1399");
        test.equal(parsedAddress.locality, "HELSINKI");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "Finland");
        test.equal(parsedAddress.countryCode, "FI");
        test.done();
    },
    
    testParseAddressFIFISpecialChars: function(test) {
        var parsedAddress = new Address("Työpajankatu 13,FI-00580 Helsinki, Finland", {locale: 'fi-FI'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Työpajankatu 13");
        test.equal(parsedAddress.locality, "Helsinki");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "FI-00580");
        test.equal(parsedAddress.country, "Finland");
        test.equal(parsedAddress.countryCode, "FI");
        test.done();
    },
    
    testParseAddressFIFIFromUS: function(test) {
        var parsedAddress = new Address("Saga Matkat OY\nSaga Tours Ltd\nAlbertinkatu 36 B\nHELSINKI, Finland", {locale: 'en-US'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Saga Matkat OY, Saga Tours Ltd, Albertinkatu 36 B");
        test.equal(parsedAddress.locality, "HELSINKI");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "Finland");
        test.equal(parsedAddress.countryCode, "FI");
        test.done();
    },
    
    testFormatAddressFIFIfinnish: function(test) {
        var parsedAddress = new Address({
            streetAddress: "Saga Matkat OY, Saga Tours Ltd, Albertinkatu 36 B",
            locality: "HELSINKI",
            country: "Finland",
            countryCode: "FI",
        }, {locale: 'fi-FI'});
        
        var expected = "Saga Matkat OY, Saga Tours Ltd, Albertinkatu 36 B\nHELSINKI\nFinland";
        var formatter = new AddressFmt({locale: 'fi-FI'});
        test.expect(1);
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressFIFIswedish: function(test) {
        var parsedAddress = new Address({
            streetAddress: "Työpajankatu 13",
            locality: "Helsinki",
            country: "Finland",
            countryCode: "FI",
        }, {locale: 'fi-FI'});
        
        var expected = "Työpajankatu 13\nHelsinki\nFinland";
        var formatter = new AddressFmt({locale: 'fi-FI'});
        test.expect(1);
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressFIFIFromUS: function(test) {
        var parsedAddress = new Address({
            streetAddress: "Saga Matkat OY, Saga Tours Ltd, Albertinkatu 36 B",
            locality: "HELSINKI",
            country: "Finland",
            countryCode: "FI",
        }, {locale: 'en-US'});
        
        var expected = "Saga Matkat OY, Saga Tours Ltd, Albertinkatu 36 B\nHELSINKI\nFinland";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.expect(1);
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
    
};