/*
 * testaddress_GN.js - test the address parsing and formatting routines
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

module.exports.testaddress_GN = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAddressGNNormal: function(test) {
        var parsedAddress = new Address("Office de la poste guinéenne Direction générale 001 BP 2984 CONAKRY\nguinée", {locale: 'fr-GN'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Office de la poste guinéenne Direction générale 001 BP 2984");
        test.equal(parsedAddress.region, "CONAKRY");
        test.ok(typeof(parsedAddress.locality) === "undefined");
            test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "guinée");
        test.equal(parsedAddress.countryCode, "GN");
        test.done();
    },
    
    testParseAddressGNNoZip: function(test) {
        var parsedAddress = new Address("Office de la poste guinéenne Direction générale 001 BP 2984\nCONAKRY\nguinée", {locale: 'fr-GN'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Office de la poste guinéenne Direction générale 001 BP 2984");
        test.ok(typeof(parsedAddress.locality) === "undefined");
        test.equal(parsedAddress.region, "CONAKRY");
        test.equal(parsedAddress.country, "guinée");
        test.equal(parsedAddress.countryCode, "GN");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    
    testParseAddressGNNoCountry: function(test) {
        var parsedAddress = new Address("Office de la poste guinéenne Direction générale 001 BP 2984\nCONAKRY", {locale: 'fr-GN'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Office de la poste guinéenne Direction générale 001 BP 2984");
        test.ok(typeof(parsedAddress.locality) === "undefined");
            test.equal(parsedAddress.region, "CONAKRY");  
            test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "GN");
        test.done();
    },
    
    testParseAddressGNManyLines: function(test) {
        var parsedAddress = new Address("Office de la poste guinéenne\nDirection générale\n001 BP 2984\nCONAKRY\nguinée", {locale: 'fr-GN'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
            test.equal(parsedAddress.streetAddress, "Office de la poste guinéenne, Direction générale, 001 BP 2984");
        test.ok(typeof(parsedAddress.locality) === "undefined");
            test.equal(parsedAddress.region, "CONAKRY");  
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "guinée");
        test.equal(parsedAddress.countryCode, "GN");
        test.done();
    },
    
    testParseAddressGNOneLine: function(test) {
        var parsedAddress = new Address("Office de la poste guinéenne , Direction générale , 001 BP 2984 , CONAKRY , guinée", {locale: 'fr-GN'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
            test.equal(parsedAddress.streetAddress, "Office de la poste guinéenne, Direction générale, 001 BP 2984");
        test.ok(typeof(parsedAddress.locality) === "undefined");
            test.equal(parsedAddress.region, "CONAKRY");  
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "guinée");
        test.equal(parsedAddress.countryCode, "GN");
        test.done();
    },
    
    testParseAddressGNSuperfluousWhitespace: function(test) {
        var parsedAddress = new Address("Office de la poste guinéenne\n\n\t\r\t\t\rDirection générale\r\r\t001 BP 2984\r\r\n\nCONAKRY\t\r\n\t\rguinée", {locale: 'fr-GN'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
            test.equal(parsedAddress.streetAddress, "Office de la poste guinéenne, Direction générale 001 BP 2984");
        test.ok(typeof(parsedAddress.locality) === "undefined");
            test.equal(parsedAddress.region, "CONAKRY");  
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "guinée");
        test.equal(parsedAddress.countryCode, "GN");
        test.done();
    },
    
    testParseAddressGNNoDelimiters: function(test) {
        var parsedAddress = new Address("Office de la poste guinéenne Direction générale 001 BP 2984 CONAKRY guinée", {locale: 'fr-GN'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Office de la poste guinéenne Direction générale 001 BP 2984");
        test.ok(typeof(parsedAddress.locality) === "undefined");
            test.equal(parsedAddress.region, "CONAKRY");  
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "guinée");
        test.equal(parsedAddress.countryCode, "GN");
        test.done();
    },
    
    testParseAddressGNFromUS: function(test) {
        var parsedAddress = new Address("Office de la poste guinéenne Direction générale 001 BP 2984\nCONAKRY\nguinée", {locale: 'fr-GN'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Office de la poste guinéenne Direction générale 001 BP 2984");
        test.ok(typeof(parsedAddress.locality) === "undefined");
            test.equal(parsedAddress.region, "CONAKRY");  
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "guinée");
        test.equal(parsedAddress.countryCode, "GN");
        test.done();
    },
    
    testFormatAddressGN: function(test) {
        var parsedAddress = new Address({
            streetAddress: "Office de la poste guinéenne Direction générale 001 BP 2984",
            region: "CONAKRY",
            postalCode: "1010",
            country: "guinée",
            countryCode: "GN"
        }, {locale: 'fr-GN'});
        
        var expected = "Office de la poste guinéenne Direction générale 001 BP 2984 CONAKRY\nguinée";
        var formatter = new AddressFmt({locale: 'fr-GN'});
        test.expect(1);
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressGNFromUS: function(test) {
        var parsedAddress = new Address({
            streetAddress: "Office de la poste guinéenne Direction générale 001 BP 2984",
            region: "CONAKRY",
            postalCode: "1010",
            country: "guinée",
            countryCode: "GN"
        }, {locale: 'en-US'});
        
        var expected = "Office de la poste guinéenne Direction générale 001 BP 2984 CONAKRY\nguinée";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.expect(1);
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
    
};