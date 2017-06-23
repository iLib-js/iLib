/*
 * testaddress_KE.js - test the address parsing and formatting routines
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

module.exports.testaddress_KE = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAddressKENormal: function(test) {
        var parsedAddress = new Address("Paul Makeba P.O. Box 3120\nNAKURU\n20100\nKENYA", {locale: 'en-KE'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Paul Makeba P.O. Box 3120");
        test.equal(parsedAddress.locality, "NAKURU");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "20100");
        test.equal(parsedAddress.country, "KENYA");
        test.equal(parsedAddress.countryCode, "KE");
        test.done();
    },
    
    testParseAddressKENoZip: function(test) {
        var parsedAddress = new Address("Paul Makeba P.O. Box 3120\nNAKURU\nKENYA", {locale: 'en-KE'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Paul Makeba P.O. Box 3120");
        test.equal(parsedAddress.locality, "NAKURU");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.country, "KENYA");
        test.equal(parsedAddress.countryCode, "KE");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    
    testParseAddressKENoCountry: function(test) {
        var parsedAddress = new Address("Paul Makeba P.O. Box 3120\nNAKURU\n20100", {locale: 'en-KE'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Paul Makeba P.O. Box 3120");
        test.equal(parsedAddress.locality, "NAKURU");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "20100");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "KE");
        test.done();
    },
    
    testParseAddressKEManyLines: function(test) {
        var parsedAddress = new Address("Paul Makeba\nP.O. Box 3120\n\n\n\n\nNAKURU\n\n20100\n\nKENYA\n\n\n", {locale: 'en-KE'});
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Paul Makeba, P.O. Box 3120");
        test.equal(parsedAddress.locality, "NAKURU");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "20100");
        test.equal(parsedAddress.country, "KENYA");
        test.equal(parsedAddress.countryCode, "KE");
        test.done();
    },
    
    testParseAddressKEOneLine: function(test) {
        var parsedAddress = new Address("Paul Makeba , P.O. Box 3120 , NAKURU , 20100 , KENYA", {locale: 'en-KE'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Paul Makeba, P.O. Box 3120");
        test.equal(parsedAddress.locality, "NAKURU");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "20100");
        test.equal(parsedAddress.country, "KENYA");
        test.equal(parsedAddress.countryCode, "KE");
        test.done();
    },
    
    testParseAddressKESuperfluousWhitespace: function(test) {
        var parsedAddress = new Address("\t\t\tPaul Makeba\t\t\rP.O. Box 3120\t\t\r\n\n\n\nNAKURU\n\t20100\n\nKENYA\n\n\n", {locale: 'en-KE'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Paul Makeba P.O. Box 3120");
        test.equal(parsedAddress.locality, "NAKURU");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "20100");
        test.equal(parsedAddress.country, "KENYA");
        test.equal(parsedAddress.countryCode, "KE");
        test.done();
    },
    
    testParseAddressKENoDelimiters: function(test) {
        var parsedAddress = new Address("Paul Makeba P.O. Box 3120 NAKURU\n20100 KENYA", {locale: 'en-KE'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Paul Makeba P.O. Box 3120");
        test.equal(parsedAddress.locality, "NAKURU");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "20100");
        test.equal(parsedAddress.country, "KENYA");
        test.equal(parsedAddress.countryCode, "KE");
        test.done();
    },
    
    testParseAddressKEFromUS: function(test) {
        var parsedAddress = new Address("Paul Makeba P.O. Box 3120\nNAKURU\n20100\nKENYA", {locale: 'en-US'});
        
        // the country name is in German because this address is for a contact in a German database
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Paul Makeba P.O. Box 3120");
        test.equal(parsedAddress.locality, "NAKURU");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "20100");
        test.equal(parsedAddress.country, "KENYA");
        test.equal(parsedAddress.countryCode, "KE");
        test.done();
    },
    
    testFormatAddressKE: function(test) {
        var parsedAddress = new Address({
            streetAddress: "Paul Makeba P.O. Box 3120",
            locality: "NAKURU",
            postalCode: "20100",
            country: "KENYA",
            countryCode: "KE"
        }, {locale: 'en-KE'});
        
        var expected = "Paul Makeba P.O. Box 3120\nNAKURU\n20100\nKENYA";
        var formatter = new AddressFmt({locale: 'en-KE'});
        test.expect(1);
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressKEFromUS: function(test) {
        var parsedAddress = new Address({
            streetAddress: "Paul Makeba P.O. Box 3120",
            locality: "NAKURU",
            postalCode: "20100",
            country: "KENYA",
            countryCode: "KE"
        }, {locale: 'en-US'});
        
        var expected = "Paul Makeba P.O. Box 3120\nNAKURU\n20100\nKENYA";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.expect(1);
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
    
};