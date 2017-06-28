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

module.exports.testaddress_ID = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAddressIDNormal: function(test) {
        var parsedAddress = new Address("Gedung Balaikota DKI Jakarta, Jalan Medan Merdeka Selatan No. xx, Jakarta Selatan 10110,Jakarta,INDONESIA", {locale: 'id-ID'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Gedung Balaikota DKI Jakarta, Jalan Medan Merdeka Selatan No. xx");
        test.equal(parsedAddress.region, "Jakarta");
        test.equal(parsedAddress.locality, "Jakarta Selatan");
        test.equal(parsedAddress.postalCode, "10110");
        test.equal(parsedAddress.country, "INDONESIA");
        test.equal(parsedAddress.countryCode, "ID");
        test.done();
    },
    
    testParseAddressIDNoZip: function(test) {
        var parsedAddress = new Address("Gedung Balaikota DKI Jakarta,Jalan Medan Merdeka Selatan No. xx, Jakarta Selatan, INDONESIA", {locale: 'id-ID'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Gedung Balaikota DKI Jakarta, Jalan Medan Merdeka Selatan No. xx");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "Jakarta Selatan");
        test.equal(parsedAddress.country, "INDONESIA");
        test.equal(parsedAddress.countryCode, "ID");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    
    testParseAddressIDManyLines: function(test) {
        var parsedAddress = new Address("Gedung Balaikota DKI Jakarta\nJalan Medan Merdeka Selatan No. xx\nJakarta Selatan 10110\nINDONESIA", {locale: 'id-ID'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Gedung Balaikota DKI Jakarta, Jalan Medan Merdeka Selatan No. xx");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "Jakarta Selatan");
        test.equal(parsedAddress.postalCode, "10110");
        test.equal(parsedAddress.country, "INDONESIA");
        test.equal(parsedAddress.countryCode, "ID");
        test.done();
    },
    
    testParseAddressIDOneLine: function(test) {
        var parsedAddress = new Address("Gedung Balaikota DKI Jakarta,Jalan Medan Merdeka Selatan No. xx,Jakarta Selatan 10110 INDONESIA", {locale: 'id-ID'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Gedung Balaikota DKI Jakarta, Jalan Medan Merdeka Selatan No. xx");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "Jakarta Selatan");
        test.equal(parsedAddress.postalCode, "10110");
        test.equal(parsedAddress.country, "INDONESIA");
        test.equal(parsedAddress.countryCode, "ID");
        test.done();
    },
    
    testParseAddressIDSuperfluousWhitespace: function(test) {
        var parsedAddress = new Address("Gedung Balaikota DKI Jakarta,Jalan Medan Merdeka Selatan No. xx   \n\t\n Jakarta Selatan 10110\t\n\n INDONESIA  \n  \t\t\t", {locale: 'id-ID'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Gedung Balaikota DKI Jakarta, Jalan Medan Merdeka Selatan No. xx");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "Jakarta Selatan");
        test.equal(parsedAddress.postalCode, "10110");
        test.equal(parsedAddress.country, "INDONESIA");
        test.equal(parsedAddress.countryCode, "ID");
        test.done();
    },
    
    testParseAddressIDNoDelimiters: function(test) {
        var parsedAddress = new Address("Gedung Balaikota DKI Jakarta Jalan Medan Merdeka Selatan No. xx Jakarta Selatan 10110 INDONESIA", {locale: 'id-ID'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Gedung Balaikota DKI Jakarta Jalan Medan Merdeka Selatan No. xx");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "Jakarta Selatan");
        test.equal(parsedAddress.postalCode, "10110");
        test.equal(parsedAddress.country, "INDONESIA");
        test.equal(parsedAddress.countryCode, "ID");
        test.done();
    },
    
    /*
    testParseAddressIDSpecialChars: function(test) {
        var parsedAddress = new Address("Botanisk Centralbibliotek,Sølvgade 83, opg. S,ID-1307 København K.,INDONESIA", {locale: 'id-ID'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Botanisk Centralbibliotek,Sølvgade 83, opg. S");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "København");
        test.equal(parsedAddress.postalCode, "ID-1307");
        test.equal(parsedAddress.country, "INDONESIA");
        test.equal(parsedAddress.countryCode, "ID");
        test.done();
    },
    */
    
    testParseAddressIDFromUS: function(test) {
        var parsedAddress = new Address("Gedung Balaikota DKI Jakarta,Jalan Medan Merdeka Selatan No. xx,Jakarta Selatan 10110,INDONESIA", {locale: 'en-US'});
        
        // the country name is in English because this address is for a contact in a US database
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Gedung Balaikota DKI Jakarta, Jalan Medan Merdeka Selatan No. xx");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "Jakarta Selatan");
        test.equal(parsedAddress.postalCode, "10110");
        test.equal(parsedAddress.country, "INDONESIA");
        test.equal(parsedAddress.countryCode, "ID");
        test.done();
    },
    
    testFormatAddressID: function(test) {
        var parsedAddress = new Address({
            streetAddress: "Gedung Balaikota DKI Jakarta,Jalan Medan Merdeka Selatan No. xx",
            locality: "Jakarta Selatan",
            postalCode: "10110",
            country: "INDONESIA",
            countryCode: "ID"
        }, {locale: 'id-ID'});
        
        var expected = "Gedung Balaikota DKI Jakarta,Jalan Medan Merdeka Selatan No. xx\nJakarta Selatan 10110\nINDONESIA";
        var formatter = new AddressFmt({locale: 'id-ID'});
        test.expect(1);
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressIDFromUS: function(test) {
        var parsedAddress = new Address({
            streetAddress: "Gedung Balaikota DKI Jakarta,Jalan Medan Merdeka Selatan No. xx",
            postalCode: "10110",
            country: "Indonesia",
            countryCode: "ID"
        }, {locale: 'en-US'});
        
        var expected = "Gedung Balaikota DKI Jakarta,Jalan Medan Merdeka Selatan No. xx\n10110\nIndonesia";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.expect(1);
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
    
};