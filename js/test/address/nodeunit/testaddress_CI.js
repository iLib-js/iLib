/*
 * testaddress_CI.js - test the address parsing and formatting routines
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

module.exports.testaddress_CI = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAddressCINormal: function(test) {
        var parsedAddress = new Address("Madame KOUAME AKISSI COMMERCANTE 06 B.P. 37 ABIDJAN 06\ncôte d’ivoire", {locale: 'fr-CI'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Madame KOUAME AKISSI COMMERCANTE 06 B.P. 37");
        test.equal(parsedAddress.locality, "ABIDJAN 06");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "côte d’ivoire");
        test.equal(parsedAddress.countryCode, "CI");
        test.done();
    },
    
    testParseAddressCINoZip: function(test) {
        var parsedAddress = new Address("Madame KOUAME AKISSI COMMERCANTE 06 B.P. 37 ABIDJAN 06\ncôte d’ivoire", {locale: 'fr-CI'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Madame KOUAME AKISSI COMMERCANTE 06 B.P. 37");
        test.equal(parsedAddress.locality, "ABIDJAN 06");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.country, "côte d’ivoire");
        test.equal(parsedAddress.countryCode, "CI");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    
    testParseAddressCINoCountry: function(test) {
        var parsedAddress = new Address("Madame KOUAME AKISSI COMMERCANTE 06 B.P. 37\nABIDJAN 06", {locale: 'fr-CI'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Madame KOUAME AKISSI COMMERCANTE 06 B.P. 37");
        test.equal(parsedAddress.locality, "ABIDJAN 06");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "CI");
        test.done();
    },
    
    testParseAddressCIManyLines: function(test) {
        var parsedAddress = new Address("Madame KOUAME AKISSI\nCOMMERCANTE 06 B.P. 37\nABIDJAN 06\ncôte d’ivoire", {locale: 'fr-CI'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
          test.equal(parsedAddress.streetAddress, "Madame KOUAME AKISSI, COMMERCANTE 06 B.P. 37");
        test.equal(parsedAddress.locality, "ABIDJAN 06");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "côte d’ivoire");
        test.equal(parsedAddress.countryCode, "CI");
        test.done();
    },
    
    testParseAddressCIOneLine: function(test) {
        var parsedAddress = new Address("Madame KOUAME AKISSI , COMMERCANTE 06 B.P. 37 , ABIDJAN 06 , côte d’ivoire", {locale: 'fr-CI'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
          test.equal(parsedAddress.streetAddress, "Madame KOUAME AKISSI, COMMERCANTE 06 B.P. 37");
        test.equal(parsedAddress.locality, "ABIDJAN 06");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "côte d’ivoire");
        test.equal(parsedAddress.countryCode, "CI");
        test.done();
    },
    
    testParseAddressCISuperfluousWhitespace: function(test) {
        var parsedAddress = new Address("Madame KOUAME AKISSI\n\n\t\r\t\t\rCOMMERCANTE 06 B.P. 37\r\r\n\nABIDJAN 06\t\r\n\t\rcôte d’ivoire", {locale: 'fr-CI'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
          test.equal(parsedAddress.streetAddress, "Madame KOUAME AKISSI, COMMERCANTE 06 B.P. 37");
        test.equal(parsedAddress.locality, "ABIDJAN 06");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "côte d’ivoire");
        test.equal(parsedAddress.countryCode, "CI");
        test.done();
    },
    
    testParseAddressCINoDelimiters: function(test) {
        var parsedAddress = new Address("Madame KOUAME AKISSI COMMERCANTE 06 B.P. 37 ABIDJAN 06 côte d’ivoire", {locale: 'fr-CI'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Madame KOUAME AKISSI COMMERCANTE 06 B.P. 37");
        test.equal(parsedAddress.locality, "ABIDJAN 06");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "côte d’ivoire");
        test.equal(parsedAddress.countryCode, "CI");
        test.done();
    },
    
    testParseAddressCIFromUS: function(test) {
        var parsedAddress = new Address("Madame KOUAME AKISSI COMMERCANTE 06 B.P. 37\nABIDJAN 06\ncôte d’ivoire", {locale: 'fr-CI'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Madame KOUAME AKISSI COMMERCANTE 06 B.P. 37");
        test.equal(parsedAddress.locality, "ABIDJAN 06");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "côte d’ivoire");
        test.equal(parsedAddress.countryCode, "CI");
        test.done();
    },
    
    testFormatAddressCI: function(test) {
        var parsedAddress = new Address({
            streetAddress: "Madame KOUAME AKISSI COMMERCANTE 06 B.P. 37",
            locality: "ABIDJAN 06",
            postalCode: "1010",
            country: "côte d’ivoire",
            countryCode: "CI"
        }, {locale: 'fr-CI'});
        
        var expected = "Madame KOUAME AKISSI COMMERCANTE 06 B.P. 37 ABIDJAN 06\ncôte d’ivoire";
        var formatter = new AddressFmt({locale: 'fr-CI'});
        test.expect(1);
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressCIFromUS: function(test) {
        var parsedAddress = new Address({
            streetAddress: "Madame KOUAME AKISSI COMMERCANTE 06 B.P. 37",
            locality: "ABIDJAN 06",
            postalCode: "1010",
            country: "côte d’ivoire",
            countryCode: "CI"
        }, {locale: 'en-US'});
        
        var expected = "Madame KOUAME AKISSI COMMERCANTE 06 B.P. 37 ABIDJAN 06\ncôte d’ivoire";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.expect(1);
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
    
};