/*
 * testaddress_CG.js - test the address parsing and formatting routines
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

module.exports.testaddress_RW = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAddressRWNormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("M. Pierre Simon B.P. 3425\nKIGALI\nRwanda", {locale: 'fr-RW'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "M. Pierre Simon B.P. 3425");
        test.equal(parsedAddress.locality, "KIGALI");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "Rwanda");
        test.equal(parsedAddress.countryCode, "RW");
        test.done();
    },
    
    testParseAddressRWNoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("M. Pierre Simon B.P. 3425\nKIGALI\nRwanda", {locale: 'fr-RW'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "M. Pierre Simon B.P. 3425");
        test.equal(parsedAddress.locality, "KIGALI");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.country, "Rwanda");
        test.equal(parsedAddress.countryCode, "RW");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    
    testParseAddressRWNoCountry: function(test) {
        test.expect(7);
        var parsedAddress = new Address("M. Pierre Simon B.P. 3425\nKIGALI", {locale: 'fr-RW'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "M. Pierre Simon B.P. 3425");
        test.equal(parsedAddress.locality, "KIGALI");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "RW");
        test.done();
    },
    
    testParseAddressRWManyLines: function(test) {
        test.expect(7);
        var parsedAddress = new Address("M. Pierre Simon\nB.P. 3425\nKIGALI\nRwanda\n\n\n", {locale: 'fr-RW'});
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "M. Pierre Simon, B.P. 3425");
        test.equal(parsedAddress.locality, "KIGALI");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "Rwanda");
        test.equal(parsedAddress.countryCode, "RW");
        test.done();
    },
    
    testParseAddressRWOneLine: function(test) {
        test.expect(7);
        var parsedAddress = new Address("M. Pierre Simon , B.P. 3425 , KIGALI , Rwanda", {locale: 'fr-RW'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "M. Pierre Simon, B.P. 3425");
        test.equal(parsedAddress.locality, "KIGALI");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "Rwanda");
        test.equal(parsedAddress.countryCode, "RW");
        test.done();
    },
    
    testParseAddressRWSuperfluousWhitespace: function(test) {
        test.expect(7);
        var parsedAddress = new Address("\t\t\t\tM. Pierre Simon\t\t\tB.P. 3425\n\t\nKIGALI\n\tRwanda\n\n\n", {locale: 'fr-RW'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "M. Pierre Simon B.P. 3425");
        test.equal(parsedAddress.locality, "KIGALI");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "Rwanda");
        test.equal(parsedAddress.countryCode, "RW");
        test.done();
    },
    
    testParseAddressRWNoDelimiters: function(test) {
        test.expect(7);
        var parsedAddress = new Address("M. Pierre Simon B.P. 3425 KIGALI Rwanda", {locale: 'fr-RW'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "M. Pierre Simon B.P. 3425");
        test.equal(parsedAddress.locality, "KIGALI");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "Rwanda");
        test.equal(parsedAddress.countryCode, "RW");
        test.done();
    },
    
    testParseAddressRWFromUS: function(test) {
        test.expect(7);
        var parsedAddress = new Address("M. Pierre Simon B.P. 3425\nKIGALI\nRwanda", {locale: 'en-US'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "M. Pierre Simon B.P. 3425");
        test.equal(parsedAddress.locality, "KIGALI");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "Rwanda");
        test.equal(parsedAddress.countryCode, "RW");
        test.done();
    },
    
    testFormatAddressRW: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "M. Pierre Simon B.P. 3425",
            locality: "KIGALI",
            country: "Rwanda",
            countryCode: "RW"
        }, {locale: 'fr-RW'});
        
        var expected = "M. Pierre Simon B.P. 3425\nKIGALI\nRwanda";
        var formatter = new AddressFmt({locale: 'fr-RW'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressRWFromUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "M. Pierre Simon B.P. 3425",
            locality: "KIGALI",
            country: "Rwanda",
            countryCode: "RW"
        }, {locale: 'en-US'});
        
        var expected = "M. Pierre Simon B.P. 3425\nKIGALI\nRwanda";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
    
};
