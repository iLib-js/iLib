/*
 * testaddress_PE.js - test the address parsing and formatting routines
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

module.exports.testaddress_PE = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAddressPENormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Catalina Huanca 110 San Isidro\nLima 27\nPERU", {locale: 'es-PE'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Catalina Huanca 110 San Isidro");
        test.equal(parsedAddress.locality, "Lima 27");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "PERU");
        test.equal(parsedAddress.countryCode, "PE");
        test.done();
    },
    
    testParseAddressPENoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Catalina Huanca 110 San Isidro\nLima 27\nPERU", {locale: 'es-PE'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Catalina Huanca 110 San Isidro");
        test.equal(parsedAddress.locality, "Lima 27");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.country, "PERU");
        test.equal(parsedAddress.countryCode, "PE");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    
    testParseAddressPENoCountry: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Catalina Huanca 110 San Isidro\nLima 27", {locale: 'es-PE'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Catalina Huanca 110 San Isidro");
        test.equal(parsedAddress.locality, "Lima 27");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "PE");
        test.done();
    },
    
    testParseAddressPEManyLines: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Catalina Huanca\n110 San Isidro\nLima 27\nPERU", {locale: 'es-PE'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
          test.equal(parsedAddress.streetAddress, "Catalina Huanca, 110 San Isidro");
        test.equal(parsedAddress.locality, "Lima 27");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "PERU");
        test.equal(parsedAddress.countryCode, "PE");
        test.done();
    },
    
    testParseAddressPEOneLine: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Catalina Huanca , 110 San Isidro , Lima 27 , PERU", {locale: 'es-PE'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
          test.equal(parsedAddress.streetAddress, "Catalina Huanca, 110 San Isidro");
        test.equal(parsedAddress.locality, "Lima 27");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "PERU");
        test.equal(parsedAddress.countryCode, "PE");
        test.done();
    },
    
    testParseAddressPESuperfluousWhitespace: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Catalina Huanca\n\n\t\r\t\t\r110 San Isidro\r\r\n\nLima 27\t\r\n\t\rPERU", {locale: 'es-PE'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
          test.equal(parsedAddress.streetAddress, "Catalina Huanca, 110 San Isidro");
        test.equal(parsedAddress.locality, "Lima 27");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "PERU");
        test.equal(parsedAddress.countryCode, "PE");
        test.done();
    },
    
    testParseAddressPENoDelimiters: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Catalina Huanca 110 San Isidro Lima 27 PERU", {locale: 'es-PE'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Catalina Huanca 110 San Isidro");
        test.equal(parsedAddress.locality, "Lima 27");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "PERU");
        test.equal(parsedAddress.countryCode, "PE");
        test.done();
    },
    
    testParseAddressPEFromUS: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Catalina Huanca 110 San Isidro\nLima 27\nPERU", {locale: 'es-PE'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Catalina Huanca 110 San Isidro");
        test.equal(parsedAddress.locality, "Lima 27");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "PERU");
        test.equal(parsedAddress.countryCode, "PE");
        test.done();
    },
    
    testFormatAddressPE: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Catalina Huanca 110 San Isidro",
            locality: "Lima 27",
            postalCode: "1010",
            country: "PERU",
            countryCode: "PE"
        }, {locale: 'es-PE'});
        
        var expected = "Catalina Huanca 110 San Isidro\nLima 27\nPERU";
        var formatter = new AddressFmt({locale: 'es-PE'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressPEFromUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Catalina Huanca 110 San Isidro",
            locality: "Lima 27",
            postalCode: "1010",
            country: "PERU",
            countryCode: "PE"
        }, {locale: 'en-US'});
        
        var expected = "Catalina Huanca 110 San Isidro\nLima 27\nPERU";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
    
};