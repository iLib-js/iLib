/*
 * testaddress_RO.js - test the address parsing and formatting routines
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

module.exports.testaddress_RO = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAddressRONormal: function(test) {
        var parsedAddress = new Address("Călina Enescu Stradă Măguricea 1, ap. 1\n014231 BUCUREŞTI\nRomania", {locale: 'ro-RO'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Călina Enescu Stradă Măguricea 1, ap. 1");
        test.equal(parsedAddress.locality, "BUCUREŞTI");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "014231");
        test.equal(parsedAddress.country, "Romania");
        test.equal(parsedAddress.countryCode, "RO");
        test.done();
    },
    
    testParseAddressRONoZip: function(test) {
        var parsedAddress = new Address("Călina Enescu Stradă Măguricea 1, ap. 1\nBUCUREŞTI\nRomania", {locale: 'ro-RO'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Călina Enescu Stradă Măguricea 1, ap. 1");
        test.equal(parsedAddress.locality, "BUCUREŞTI");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.country, "Romania");
        test.equal(parsedAddress.countryCode, "RO");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    
    testParseAddressRONoCountry: function(test) {
        var parsedAddress = new Address("Călina Enescu Stradă Măguricea 1, ap. 1\n014231 BUCUREŞTI", {locale: 'ro-RO'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Călina Enescu Stradă Măguricea 1, ap. 1");
        test.equal(parsedAddress.locality, "BUCUREŞTI");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "014231");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "RO");
        test.done();
    },
    
    testParseAddressROManyLines: function(test) {
        var parsedAddress = new Address("Călina Enescu Stradă\nMăguricea 1\nap. 1\n\n014231\nBUCUREŞTI\n\nRomania\n\n\n", {locale: 'ro-RO'});
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Călina Enescu Stradă, Măguricea 1, ap. 1");
        test.equal(parsedAddress.locality, "BUCUREŞTI");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "014231");
        test.equal(parsedAddress.country, "Romania");
        test.equal(parsedAddress.countryCode, "RO");
        test.done();
    },
    
    testParseAddressROOneLine: function(test) {
        var parsedAddress = new Address("Călina Enescu Stradă , Măguricea 1 , ap. 1 , 014231 , BUCUREŞTI , Romania", {locale: 'ro-RO'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Călina Enescu Stradă, Măguricea 1, ap. 1");
        test.equal(parsedAddress.locality, "BUCUREŞTI");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "014231");
        test.equal(parsedAddress.country, "Romania");
        test.equal(parsedAddress.countryCode, "RO");
        test.done();
    },
    
    testParseAddressROSuperfluousWhitespace: function(test) {
        var parsedAddress = new Address("\t\t\tCălina Enescu Stradă\t\t\rMăguricea 1\t\t\rap. 1\n\n014231\t\n\nBUCUREŞTI\n\t\nRomania\n\n\n", {locale: 'ro-RO'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Călina Enescu Stradă Măguricea 1 ap. 1");
        test.equal(parsedAddress.locality, "BUCUREŞTI");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "014231");
        test.equal(parsedAddress.country, "Romania");
        test.equal(parsedAddress.countryCode, "RO");
        test.done();
    },
    
    testParseAddressRONoDelimiters: function(test) {
        var parsedAddress = new Address("Călina Enescu Stradă Măguricea 1, ap. 1 014231 BUCUREŞTI Romania", {locale: 'ro-RO'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Călina Enescu Stradă Măguricea 1, ap. 1");
        test.equal(parsedAddress.locality, "BUCUREŞTI");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "014231");
        test.equal(parsedAddress.country, "Romania");
        test.equal(parsedAddress.countryCode, "RO");
        test.done();
    },
    
    testParseAddressROFromUS: function(test) {
        var parsedAddress = new Address("Călina Enescu Stradă Măguricea 1, ap. 1\n014231 BUCUREŞTI\nRomania", {locale: 'en-US'});
        
        // the country name is in German because this address is for a contact in a German database
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Călina Enescu Stradă Măguricea 1, ap. 1");
        test.equal(parsedAddress.locality, "BUCUREŞTI");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "014231");
        test.equal(parsedAddress.country, "Romania");
        test.equal(parsedAddress.countryCode, "RO");
        test.done();
    },
    
    testFormatAddressRO: function(test) {
        var parsedAddress = new Address({
            streetAddress: "Călina Enescu Stradă Măguricea 1, ap. 1",
            locality: "BUCUREŞTI",
            postalCode: "014231",
            country: "Romania",
            countryCode: "RO"
        }, {locale: 'ro-RO'});
        
        var expected = "Călina Enescu Stradă Măguricea 1, ap. 1\n014231 BUCUREŞTI\nRomania";
        var formatter = new AddressFmt({locale: 'ro-RO'});
        test.expect(1);
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressROFromUS: function(test) {
        var parsedAddress = new Address({
            streetAddress: "Călina Enescu Stradă Măguricea 1, ap. 1",
            locality: "BUCUREŞTI",
            postalCode: "014231",
            country: "Romania",
            countryCode: "RO"
        }, {locale: 'en-US'});
        
        var expected = "Călina Enescu Stradă Măguricea 1, ap. 1\n014231 BUCUREŞTI\nRomania";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.expect(1);
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
    
};