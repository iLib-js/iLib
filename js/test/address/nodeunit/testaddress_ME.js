/*
 * testaddress_ME.js - test the address parsing and formatting routines
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

module.exports.testaddress_ME = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAddressMENormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("G. Petar Petrović Ul. Slobode br. 1\n81000 Podgorica\nCrna Gora", {locale: 'hr-ME'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "G. Petar Petrović Ul. Slobode br. 1");
        test.equal(parsedAddress.locality, "Podgorica");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "81000");
        test.equal(parsedAddress.country, "Crna Gora");
        test.equal(parsedAddress.countryCode, "ME");
        test.done();
    },
    
    testParseAddressMESRNormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Петар Петровић Ул. Слобода бр. 1\n81000 Подгорица\nЦрна Гора", {locale: 'sr-ME'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Петар Петровић Ул. Слобода бр. 1");
        test.equal(parsedAddress.locality, "Подгорица");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "81000");
        test.equal(parsedAddress.country, "Црна Гора");
        test.equal(parsedAddress.countryCode, "ME");
        test.done();
    },
    
    
    testParseAddressMESQNormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Z. Petar Petroviq Ul. Ka liri. 1\n81000 Podgorica\nMontenegro", {locale: 'sq-ME'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Z. Petar Petroviq Ul. Ka liri. 1");
        test.equal(parsedAddress.locality, "Podgorica");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "81000");
        test.equal(parsedAddress.country, "Montenegro");
        test.equal(parsedAddress.countryCode, "ME");
        test.done();
    },
    
    testParseAddressMEBSNormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Petar Petrović Ul. Sloboda ne. 1\n81000 Podgorica\nCrna Gora", {locale: 'sq-ME'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Petar Petrović Ul. Sloboda ne. 1");
        test.equal(parsedAddress.locality, "Podgorica");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "81000");
        test.equal(parsedAddress.country, "Crna Gora");
        test.equal(parsedAddress.countryCode, "ME");
        test.done();
    },
    
    
    
    testParseAddressMENoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("G. Petar Petrović Ul. Slobode br. 1\nPodgorica\nCrna Gora", {locale: 'hr-ME'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "G. Petar Petrović Ul. Slobode br. 1");
        test.equal(parsedAddress.locality, "Podgorica");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.country, "Crna Gora");
        test.equal(parsedAddress.countryCode, "ME");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    
    testParseAddressMENoCountry: function(test) {
        test.expect(7);
        var parsedAddress = new Address("G. Petar Petrović Ul. Slobode br. 1\n81000 Podgorica", {locale: 'hr-ME'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "G. Petar Petrović Ul. Slobode br. 1");
        test.equal(parsedAddress.locality, "Podgorica");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "81000");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "ME");
        test.done();
    },
    
    testParseAddressMEManyLines: function(test) {
        test.expect(7);
        var parsedAddress = new Address("G. Petar Petrović Ul.\nSlobode br. 1\n\n81000 Podgorica\n\nCrna Gora\n\n\n", {locale: 'hr-ME'});
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "G. Petar Petrović Ul., Slobode br. 1");
        test.equal(parsedAddress.locality, "Podgorica");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "81000");
        test.equal(parsedAddress.country, "Crna Gora");
        test.equal(parsedAddress.countryCode, "ME");
        test.done();
    },
    
    testParseAddressMEOneLine: function(test) {
        test.expect(7);
        var parsedAddress = new Address("G. Petar Petrović Ul. , Slobode br. 1 , Podgorica , 81000 , Crna Gora", {locale: 'hr-ME'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "G. Petar Petrović Ul., Slobode br. 1");
        test.equal(parsedAddress.locality, "Podgorica");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "81000");
        test.equal(parsedAddress.country, "Crna Gora");
        test.equal(parsedAddress.countryCode, "ME");
        test.done();
    },
    
    testParseAddressMESuperfluousWhitespace: function(test) {
        test.expect(7);
        var parsedAddress = new Address("\t\t\tG. Petar Petrović Ul.\t\t\rSlobode br. 1\t\n\n\nPodgorica\n\t\n81000\n\n\tCrna Gora\n\n\n", {locale: 'hr-ME'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "G. Petar Petrović Ul. Slobode br. 1");
        test.equal(parsedAddress.locality, "Podgorica");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "81000");
        test.equal(parsedAddress.country, "Crna Gora");
        test.equal(parsedAddress.countryCode, "ME");
        test.done();
    },
    
    testParseAddressMENoDelimiters: function(test) {
        test.expect(7);
        var parsedAddress = new Address("G. Petar Petrović Ul. Slobode br. 1 81000 Podgorica Crna Gora", {locale: 'hr-ME'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "G. Petar Petrović Ul. Slobode br. 1");
        test.equal(parsedAddress.locality, "Podgorica");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "81000");
        test.equal(parsedAddress.country, "Crna Gora");
        test.equal(parsedAddress.countryCode, "ME");
        test.done();
    },
    
    testParseAddressMEFromUS: function(test) {
        test.expect(7);
        var parsedAddress = new Address("G. Petar Petrović Ul. Slobode br. 1\n81000 Podgorica\nMontenegro", {locale: 'en-US'});
        
        // the country name is in German because this address is for a contact in a German database
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "G. Petar Petrović Ul. Slobode br. 1");
        test.equal(parsedAddress.locality, "Podgorica");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "81000");
        test.equal(parsedAddress.country, "Montenegro");
        test.equal(parsedAddress.countryCode, "ME");
        test.done();
    },
    
    testFormatAddressME: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "G. Petar Petrović Ul. Slobode br. 1",
            locality: "Podgorica",
            postalCode: "81000",
            country: "Crna Gora",
            countryCode: "ME"
        }, {locale: 'hr-ME'});
        
        var expected = "G. Petar Petrović Ul. Slobode br. 1\n81000 Podgorica\nCrna Gora";
        var formatter = new AddressFmt({locale: 'hr-ME'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressMEFromUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "G. Petar Petrović Ul. Slobode br. 1",
            locality: "Podgorica",
            postalCode: "81000",
            country: "Montenegro",
            countryCode: "ME"
        }, {locale: 'en-US'});
        
        var expected = "G. Petar Petrović Ul. Slobode br. 1\n81000 Podgorica\nMontenegro";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
    
};
