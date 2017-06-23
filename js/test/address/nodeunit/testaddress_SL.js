/*
 * testaddress_SL.js - test the address parsing and formatting routines
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

module.exports.testaddress_SL = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAddressSLNormal: function(test) {
        var parsedAddress = new Address("Mr. John Kamara 7A Ross Road Cline\nFreetown\nSierra Leone", {locale: 'en-SL'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Mr. John Kamara 7A Ross Road Cline");
        test.equal(parsedAddress.locality, "Freetown");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "Sierra Leone");
        test.equal(parsedAddress.countryCode, "SL");
        test.done();
    },
    
    testParseAddressSLNoZip: function(test) {
        var parsedAddress = new Address("Mr. John Kamara 7A Ross Road Cline\nFreetown\nSierra Leone", {locale: 'en-SL'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Mr. John Kamara 7A Ross Road Cline");
        test.equal(parsedAddress.locality, "Freetown");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.country, "Sierra Leone");
        test.equal(parsedAddress.countryCode, "SL");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    
    testParseAddressSLNoCountry: function(test) {
        var parsedAddress = new Address("Mr. John Kamara 7A Ross Road Cline\nFreetown", {locale: 'en-SL'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Mr. John Kamara 7A Ross Road Cline");
        test.equal(parsedAddress.locality, "Freetown");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "SL");
        test.done();
    },
    
    testParseAddressSLManyLines: function(test) {
        var parsedAddress = new Address("Mr. John Kamara\n7A Ross Road Cline\nFreetown\nSierra Leone\n\n\n", {locale: 'en-SL'});
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Mr. John Kamara, 7A Ross Road Cline");
        test.equal(parsedAddress.locality, "Freetown");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "Sierra Leone");
        test.equal(parsedAddress.countryCode, "SL");
        test.done();
    },
    
    testParseAddressSLOneLine: function(test) {
        var parsedAddress = new Address("Mr. John Kamara , 7A Ross Road Cline , Freetown , Sierra Leone", {locale: 'en-SL'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Mr. John Kamara, 7A Ross Road Cline");
        test.equal(parsedAddress.locality, "Freetown");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "Sierra Leone");
        test.equal(parsedAddress.countryCode, "SL");
        test.done();
    },
    
    testParseAddressSLSuperfluousWhitespace: function(test) {
        var parsedAddress = new Address("\t\t\t\tMr. John Kamara\t\t\t7A Ross Road Cline\t\nFreetown\n\t Sierra Leone\n\n\n", {locale: 'en-SL'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Mr. John Kamara 7A Ross Road Cline");
        test.equal(parsedAddress.locality, "Freetown");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "Sierra Leone");
        test.equal(parsedAddress.countryCode, "SL");
        test.done();
    },
    
    testParseAddressSLNoDelimiters: function(test) {
        var parsedAddress = new Address("Mr. John Kamara 7A Ross Road Cline, Freetown Sierra Leone", {locale: 'en-SL'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Mr. John Kamara 7A Ross Road Cline");
        test.equal(parsedAddress.locality, "Freetown");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "Sierra Leone");
        test.equal(parsedAddress.countryCode, "SL");
        test.done();
    },
    
    testParseAddressSLFromUS: function(test) {
        var parsedAddress = new Address("Mr. John Kamara 7A Ross Road Cline\nFreetown\nSierra Leone", {locale: 'en-US'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Mr. John Kamara 7A Ross Road Cline");
        test.equal(parsedAddress.locality, "Freetown");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "Sierra Leone");
        test.equal(parsedAddress.countryCode, "SL");
        test.done();
    },
    
    testFormatAddressSL: function(test) {
        var parsedAddress = new Address({
            streetAddress: "Mr. John Kamara 7A Ross Road Cline",
            locality: "Freetown",
            country: "Sierra Leone",
            countryCode: "SL"
        }, {locale: 'en-SL'});
        
        var expected = "Mr. John Kamara 7A Ross Road Cline\nFreetown\nSierra Leone";
        var formatter = new AddressFmt({locale: 'en-SL'});
        test.expect(1);
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressSLFromUS: function(test) {
        var parsedAddress = new Address({
            streetAddress: "Mr. John Kamara 7A Ross Road Cline",
            locality: "Freetown",
            country: "Sierra Leone",
            countryCode: "SL"
        }, {locale: 'en-US'});
        
        var expected = "Mr. John Kamara 7A Ross Road Cline\nFreetown\nSierra Leone";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.expect(1);
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressSL1: function(test) {
        var parsedAddress = new Address({
            streetAddress: "Mr. Simon Hunter 87 Florence's, Peninsula Road",
            locality: "Freetown",
            country: "Sierra Leone",
            countryCode: "SL"
        }, {locale: 'en-US'});
        
        var expected = "Mr. Simon Hunter 87 Florence's, Peninsula Road\nFreetown\nSierra Leone";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.expect(1);
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressSL2: function(test) {
        var parsedAddress = new Address({
            streetAddress: "Mr. Simon Hunter 87 Florence's, Peninsula Road",
            locality: "Freetown",
            country: "Sierra Leone",
            countryCode: "SL"
        }, {locale: 'en-SL'});
        
        var expected = "Mr. Simon Hunter 87 Florence's, Peninsula Road\nFreetown\nSierra Leone";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.expect(1);
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testParseAddressSL3: function(test) {
        var parsedAddress = new Address("Mr. Simon Hunter 87 Florence's, Peninsula Road\nFreetown\nSierra Leone", {locale: 'en-SL'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Mr. Simon Hunter 87 Florence's, Peninsula Road");
        test.equal(parsedAddress.locality, "Freetown");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "Sierra Leone");
        test.equal(parsedAddress.countryCode, "SL");
        test.done();
    }
    
    
};