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
 * distributed under the License is distributed on an "AS NO" BASNO,
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

module.exports.testaddress_NO = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAddressNONormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Norwegian Post and Telecommunications Authority\nPostboks 447 Sentrum\n0104 Trondheim\nNORWAY", {locale: 'nb-NO'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Norwegian Post and Telecommunications Authority, Postboks 447 Sentrum");
        test.equal(parsedAddress.locality, "Trondheim");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "0104");
        test.equal(parsedAddress.country, "NORWAY");
        test.equal(parsedAddress.countryCode, "NO");
        test.done();
    },
    
    testParseAddressNONoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Norwegian Post and Telecommunications Authority\nBorgartun 34\nTrondheim", {locale: 'nb-NO'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Norwegian Post and Telecommunications Authority, Borgartun 34");
        test.equal(parsedAddress.locality, "Trondheim");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "NO");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    
    testParseAddressNONoCountry: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Storgata 6\nNO-7321 Trondheim", {locale: 'nb-NO'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Storgata 6");
        test.equal(parsedAddress.locality, "Trondheim");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "NO-7321");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "NO");
        test.done();
    },
    
    testParseAddressNOManyLines: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Stine Hansendd\nLeilighet 425\nStorgata 6\nNO-7321 Trondheim\nNORWAY", {locale: 'nb-NO'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Stine Hansendd, Leilighet 425, Storgata 6");
        test.equal(parsedAddress.locality, "Trondheim");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "NO-7321");
        test.equal(parsedAddress.country, "NORWAY");
        test.equal(parsedAddress.countryCode, "NO");
        test.done();
    },
    
    testParseAddressNOOneLine: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Stine Hansendd, Leilighet 425, Storgata 634, NO-7321 Trondheim,NORWAY", {locale: 'nb-NO'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Stine Hansendd, Leilighet 425, Storgata 634");
        test.equal(parsedAddress.locality, "Trondheim");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "NO-7321");
        test.equal(parsedAddress.country, "NORWAY");
        test.equal(parsedAddress.countryCode, "NO");
        test.done();
    },
    
    testParseAddressNOSuperfluousWhitespace: function(test) {
        test.expect(7);
        var parsedAddress = new Address("\t\t\tStine Hansendd\n\t\t\tLeilighet 425, \t\t\t\r\r Storgata 634, \n\t\nNO-7321 Trondheim\t\n\t \n\nNORWAY\n", {locale: 'nb-NO'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Stine Hansendd, Leilighet 425, Storgata 634");
        test.equal(parsedAddress.locality, "Trondheim");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "NO-7321");
        test.equal(parsedAddress.country, "NORWAY");
        test.equal(parsedAddress.countryCode, "NO");
        test.done();
    },
    
    testParseAddressNONoDelimiters: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Stine Hansendd Leilighet 425 Storgata 634 NO-7321 Trondheim NORWAY", {locale: 'nb-NO'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Stine Hansendd Leilighet 425 Storgata 634");
        test.equal(parsedAddress.locality, "Trondheim");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "NO-7321");
        test.equal(parsedAddress.country, "NORWAY");
        test.equal(parsedAddress.countryCode, "NO");
        test.done();
    },
    
    testParseAddressNOFromUS: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Norwegian Post and Telecommunications Authority\nBorgartun 34\n0104 Trondheim\nNorway", {locale: 'en-US'});
        
        // the country name is in English because this address is for a contact in a English database
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Norwegian Post and Telecommunications Authority, Borgartun 34");
        test.equal(parsedAddress.locality, "Trondheim");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "0104");
        test.equal(parsedAddress.country, "Norway");
        test.equal(parsedAddress.countryCode, "NO");
        test.done();
    },
    
    testFormatAddressNO: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Norwegian Post and Telecommunications Authority, Borgartun 34",
            locality: "Trondheim",
            postalCode: "0104",
            country: "NORWAY",
            countryCode: "NO"
        }, {locale: 'nb-NO'});
        
        var expected = "Norwegian Post and Telecommunications Authority, Borgartun 34\n0104 Trondheim\nNORWAY";
        var formatter = new AddressFmt({locale: 'nb-NO'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressNOFromUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Norwegian Post and Telecommunications Authority, Borgartun 34",
            locality: "Trondheim",
            postalCode: "0104",
            country: "Norway",
            countryCode: "NO"
        }, {locale: 'en-US'});
        
        var expected = "Norwegian Post and Telecommunications Authority, Borgartun 34\n0104 Trondheim\nNorway";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
    
};