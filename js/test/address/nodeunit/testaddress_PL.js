/*
 * testaddress_PL.js - test the address parsing and formatting routines
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

module.exports.testaddress_PL = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAddressPLNormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Adrian Kieślowski ul. Łączności 1\n82-300 ELBLAG\nPoland", {locale: 'pl-PL'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Adrian Kieślowski ul. Łączności 1");
        test.equal(parsedAddress.locality, "ELBLAG");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "82-300");
        test.equal(parsedAddress.country, "Poland");
        test.equal(parsedAddress.countryCode, "PL");
        test.done();
    },
    
    testParseAddressPLNoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Adrian Kieślowski ul. Łączności 1\nELBLAG\nPoland", {locale: 'pl-PL'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Adrian Kieślowski ul. Łączności 1");
        test.equal(parsedAddress.locality, "ELBLAG");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.country, "Poland");
        test.equal(parsedAddress.countryCode, "PL");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    
    testParseAddressPLNoCountry: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Adrian Kieślowski ul. Łączności 1\n82-300 ELBLAG", {locale: 'pl-PL'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Adrian Kieślowski ul. Łączności 1");
        test.equal(parsedAddress.locality, "ELBLAG");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "82-300");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "PL");
        test.done();
    },
    
    testParseAddressPLManyLines: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Adrian Kieślowski\nul. Łączności 1\n\n82-300\nELBLAG\nPoland\n\n\n", {locale: 'pl-PL'});
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Adrian Kieślowski, ul. Łączności 1");
        test.equal(parsedAddress.locality, "ELBLAG");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "82-300");
        test.equal(parsedAddress.country, "Poland");
        test.equal(parsedAddress.countryCode, "PL");
        test.done();
    },
    
    testParseAddressPLOneLine: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Adrian Kieślowski , ul. Łączności 1 , 82-300 , ELBLAG , Poland", {locale: 'pl-PL'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Adrian Kieślowski, ul. Łączności 1");
        test.equal(parsedAddress.locality, "ELBLAG");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "82-300");
        test.equal(parsedAddress.country, "Poland");
        test.equal(parsedAddress.countryCode, "PL");
        test.done();
    },
    
    testParseAddressPLSuperfluousWhitespace: function(test) {
        test.expect(7);
        var parsedAddress = new Address("\t\t\tAdrian Kieślowski\n\t\t\tul. Łączności 1\n\t\n82-300\t\nELBLAG\n\t Poland\n\n\n", {locale: 'pl-PL'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Adrian Kieślowski, ul. Łączności 1");
        test.equal(parsedAddress.locality, "ELBLAG");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "82-300");
        test.equal(parsedAddress.country, "Poland");
        test.equal(parsedAddress.countryCode, "PL");
        test.done();
    },
    
    testParseAddressPLNoDelimiters: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Adrian Kieślowski ul. Łączności 1 82-300 ELBLAG Poland", {locale: 'pl-PL'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Adrian Kieślowski ul. Łączności 1");
        test.equal(parsedAddress.locality, "ELBLAG");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "82-300");
        test.equal(parsedAddress.country, "Poland");
        test.equal(parsedAddress.countryCode, "PL");
        test.done();
    },
    
    testParseAddressPLFromUS: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Adrian Kieślowski ul. Łączności 1\n82-300 ELBLAG\nPoland", {locale: 'en-US'});
        
        // the country name is in German because this address is for a contact in a German database
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Adrian Kieślowski ul. Łączności 1");
        test.equal(parsedAddress.locality, "ELBLAG");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "82-300");
        test.equal(parsedAddress.country, "Poland");
        test.equal(parsedAddress.countryCode, "PL");
        test.done();
    },
    
    testFormatAddressPL: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Adrian Kieślowski ul. Łączności 1",
            locality: "ELBLAG",
            postalCode: "82-300",
            country: "Poland",
            countryCode: "PL"
        }, {locale: 'pl-PL'});
        
        var expected = "Adrian Kieślowski ul. Łączności 1\n82-300 ELBLAG\nPoland";
        var formatter = new AddressFmt({locale: 'pl-PL'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressPLFromUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Adrian Kieślowski ul. Łączności 1",
            locality: "ELBLAG",
            postalCode: "82-300",
            country: "Poland",
            countryCode: "PL"
        }, {locale: 'en-US'});
        
        var expected = "Adrian Kieślowski ul. Łączności 1\n82-300 ELBLAG\nPoland";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
    
};