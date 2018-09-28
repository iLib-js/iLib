/*
 * testaddress_TR.js - test the address parsing and formatting routines
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
    var Address = require("../../lib/Address.js");
}
if (typeof(AddressFmt) === "undefined") {
    var AddressFmt = require("../../lib/AddressFmt.js");
}
if (typeof(ilib) === "undefined") {
    var ilib = require("../../lib/ilib.js");
}

module.exports.testaddress_TR = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAddressTRNormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Orhaniye Street No 14\nSirkeci Istanbul 34120\nTurkey", {locale: 'tr-TR'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Orhaniye Street No 14");
        test.equal(parsedAddress.locality, "Sirkeci");
        test.equal(parsedAddress.region, "Istanbul");
        test.equal(parsedAddress.postalCode, "34120");
        test.equal(parsedAddress.country, "Turkey");
        test.equal(parsedAddress.countryCode, "TR");
        test.done();
    },
    
    testParseAddressTRNoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Teyfikhane Sok No 1\nSultanahmet Istanbul\nTurkey", {locale: 'tr-TR'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Teyfikhane Sok No 1");
        test.equal(parsedAddress.locality, "Sultanahmet");
        test.equal(parsedAddress.region, "Istanbul");
        test.equal(parsedAddress.country, "Turkey");
        test.equal(parsedAddress.countryCode, "TR");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    
    
    testParseAddressTRNoCountry: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Orhaniye Street No 14\nSirkeci Istanbul 34120", {locale: 'tr-TR'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Orhaniye Street No 14");
        test.equal(parsedAddress.locality, "Sirkeci");
        test.equal(parsedAddress.region, "Istanbul");
        test.equal(parsedAddress.postalCode, "34120");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "TR");
        test.done();
    },
    
    testParseAddressTRNoDelimiters: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Orhaniye Street No 14 Sirkeci Istanbul 34120 Turkey", {locale: 'tr-TR'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Orhaniye Street No 14");
        test.equal(parsedAddress.locality, "Sirkeci");
        test.equal(parsedAddress.region, "Istanbul");
        test.equal(parsedAddress.postalCode, "34120");
        test.equal(parsedAddress.country, "Turkey");
        test.equal(parsedAddress.countryCode, "TR");
        test.done();
    },
    
    
    testParseAddressTROneLine: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Orhaniye Street , No 14 , Sirkeci , Istanbul , 34120 , Turkey", {locale: 'tr-TR'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Orhaniye Street, No 14");
        test.equal(parsedAddress.locality, "Sirkeci");
        test.equal(parsedAddress.region, "Istanbul");
        test.equal(parsedAddress.postalCode, "34120");
        test.equal(parsedAddress.country, "Turkey");
        test.equal(parsedAddress.countryCode, "TR");
        test.done();
    },
    
    
    testParseAddressTROther: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Alemdag Cad. Yanyol Sok. No 6-8\nÜSKÜDAR  ISTANBUL 34692\nTURKEY", {locale: 'tr-TR'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Alemdag Cad. Yanyol Sok. No 6-8");
        test.equal(parsedAddress.locality, "ÜSKÜDAR");
        test.equal(parsedAddress.region, "ISTANBUL");
        test.equal(parsedAddress.postalCode, "34692");
        test.equal(parsedAddress.country, "TURKEY");
        test.equal(parsedAddress.countryCode, "TR");
        test.done();
    },
    
    
    testParseAddressTRManyLines: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Orhaniye Street\nNo 14\nSirkeci Istanbul 34120\nTurkey", {locale: 'sl-SI'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Orhaniye Street, No 14");
        test.equal(parsedAddress.locality, "Sirkeci");
        test.equal(parsedAddress.region, "Istanbul");
        test.equal(parsedAddress.postalCode, "34120");
        test.equal(parsedAddress.country, "Turkey");
        test.equal(parsedAddress.countryCode, "TR");
        test.done();
    },
    
    
    
    testFormatAddressTR: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Alemdag Cad. Yanyol Sok. No 6-8",
            locality: "ÜSKÜDAR",
            postalCode: "34692",
            region: "ISTANBUL",
            country: "TURKEY",
            countryCode: "TR"
        }, {locale: 'tr-TR'});
        
        var expected = "Alemdag Cad. Yanyol Sok. No 6-8\nÜSKÜDAR ISTANBUL 34692\nTURKEY";
        var formatter = new AddressFmt({locale: 'tr-TR'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressTRFromUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Orhaniye Street No 14",
            locality: "Sirkeci",
            region: "Istanbul",
            postalCode: "34120",
            country: "Turkey",
            countryCode: "TR"
        }, {locale: 'en-US'});
        
        var expected = "Orhaniye Street No 14\nSirkeci Istanbul 34120\nTurkey";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
    
    
};
