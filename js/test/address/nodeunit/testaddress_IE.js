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

module.exports.testaddress_IE = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAddressIENormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Gordon House\nBarrow Street\nDublin 4\nIreland", {locale: 'en-IE'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Gordon House, Barrow Street");
        test.equal(parsedAddress.locality, "Dublin");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "4");
        test.equal(parsedAddress.country, "Ireland");
        test.equal(parsedAddress.countryCode, "IE");
        test.done();
    },
    
    testParseAddressIENoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Metro Park\nCloughfern Avenue\nNewtownabbey\nCo. Antrim\nIreland", {locale: 'en-IE'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Metro Park, Cloughfern Avenue");
        test.equal(parsedAddress.locality, "Newtownabbey");
        test.equal(parsedAddress.region, "Co. Antrim");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "Ireland");
        test.equal(parsedAddress.countryCode, "IE");
        test.done();
    },
    
    testParseAddressIENoCountry: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Liffey Park Technology Campus\nBarnhall Road\nLeixlip\nCo Kildare", {locale: 'en-IE'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Liffey Park Technology Campus, Barnhall Road");
        test.equal(parsedAddress.locality, "Leixlip");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.region, "Co Kildare");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "IE");
        test.done();
    },
    
    testParseAddressIEDublinPostalCode: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Gordon House\nBarrow Street\nDublin D6W\nIreland", {locale: 'en-IE'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Gordon House, Barrow Street");
        test.equal(parsedAddress.locality, "Dublin");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "D6W");
        test.equal(parsedAddress.country, "Ireland");
        test.equal(parsedAddress.countryCode, "IE");
        test.done();
    },
    
    testParseAddressIEManyLines: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Belfield Office Park\nBeaver Row\nClonskeagh\nDublin 4\nIreland\n\n", {locale: 'en-IE'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Belfield Office Park, Beaver Row, Clonskeagh");
        test.equal(parsedAddress.locality, "Dublin");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "4");
        test.equal(parsedAddress.country, "Ireland");
        test.equal(parsedAddress.countryCode, "IE");
        test.done();
    },
    
    testParseAddressIEOneLine: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Swords Business Campus, Balheary Road, Swords, County: Dublin, Ireland", {locale: 'en-IE'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Swords Business Campus, Balheary Road");
        test.equal(parsedAddress.locality, "Swords");
        test.equal(parsedAddress.region, "County: Dublin");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "Ireland");
        test.equal(parsedAddress.countryCode, "IE");
        test.done();
    },
    
    testParseAddressIESuperfluousWhitespace: function(test) {
        test.expect(7);
        var parsedAddress = new Address("\t\t\tSwords Business Campus\n\t\r Balheary Road\n\t\n\tSwords\   \t \t \t   County:    Dublin   \n\n\t Ireland  \n\n\n", {locale: 'en-IE'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Swords Business Campus, Balheary Road");
        test.equal(parsedAddress.locality, "Swords");
        test.equal(parsedAddress.region, "County: Dublin");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "Ireland");
        test.equal(parsedAddress.countryCode, "IE");
        test.done();
    },
    
    testParseAddressIENoDelimiters: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Swords Business Campus Balheary Road Swords County: Dublin Ireland", {locale: 'en-IE'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Swords Business Campus Balheary Road");
        test.equal(parsedAddress.locality, "Swords");
        test.equal(parsedAddress.region, "County: Dublin");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "Ireland");
        test.equal(parsedAddress.countryCode, "IE");
        test.done();
    },
    
    testParseAddressIESpecialChars: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Teach Ceilteach, Sráid Doire, Cill Iníon Léinín, Tamhlacht, Contae Átha Cliath, Éire", {locale: 'en-IE'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Teach Ceilteach, Sráid Doire, Cill Iníon Léinín");
        test.equal(parsedAddress.locality, "Tamhlacht");
        test.equal(parsedAddress.region, "Contae Átha Cliath");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "Éire");
        test.equal(parsedAddress.countryCode, "IE");
        test.done();
    },
    
    testParseAddressIEFromDE: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Metro Park\nCloughfern Avenue\nNewtownabbey\nCo. Antrim\nIrland", {locale: 'de-DE'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Metro Park, Cloughfern Avenue");
        test.equal(parsedAddress.locality, "Newtownabbey");
        test.equal(parsedAddress.region, "Co. Antrim");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "Irland");
        test.equal(parsedAddress.countryCode, "IE");
        test.done();
    },
    
    testFormatAddressIE: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Gordon House, Barrow Street",
            locality: "Dublin",
            postalCode: "4",
            country: "Ireland",
            countryCode: "IE"
        }, {locale: 'en-IE'});
        
        var expected = "Gordon House, Barrow Street\nDublin 4\nIreland";
        var formatter = new AddressFmt({locale: 'en-IE'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressIEWithCounty: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Gordon House, Barrow Street",
            locality: "Galway",
            region: "County Galway",
            country: "Ireland",
            countryCode: "IE"
        }, {locale: 'en-IE'});
        
        var expected = "Gordon House, Barrow Street\nGalway\nCounty Galway\nIreland";
        var formatter = new AddressFmt({locale: 'en-IE'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressIEFromFR: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Gordon House, Barrow Street",
            locality: "Dublin",
            postalCode: "4",
            country: "Irlande",
            countryCode: "IE"
        }, {locale: 'fr-FR'});
        
        var expected = "Gordon House, Barrow Street\nDublin 4\nIrlande";
        var formatter = new AddressFmt({locale: 'fr-FR'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
    
};