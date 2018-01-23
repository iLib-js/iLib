/*
 * testaddress_UY.js - test the address parsing and formatting routines
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

module.exports.testaddress_UY = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAddressUYNormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Florencio Agustini Eduardo Acevedo Diaz 1753\n11801 Montevideo\nUruguay", {locale: 'es-UY'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Florencio Agustini Eduardo Acevedo Diaz 1753");
        test.equal(parsedAddress.locality, "Montevideo");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "11801");
        test.equal(parsedAddress.country, "Uruguay");
        test.equal(parsedAddress.countryCode, "UY");
        test.done();
    },
    
    testParseAddressUYNoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Florencio Agustini Eduardo Acevedo Diaz 1753\nMontevideo\nUruguay", {locale: 'es-UY'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Florencio Agustini Eduardo Acevedo Diaz 1753");
        test.equal(parsedAddress.locality, "Montevideo");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.country, "Uruguay");
        test.equal(parsedAddress.countryCode, "UY");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    
    testParseAddressUYNoCountry: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Florencio Agustini Eduardo Acevedo Diaz 1753\n11801 Montevideo", {locale: 'es-UY'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Florencio Agustini Eduardo Acevedo Diaz 1753");
        test.equal(parsedAddress.locality, "Montevideo");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "11801");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "UY");
        test.done();
    },
    
    testParseAddressUYManyLines: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Mr. Richard Chanda\n10\nNyimba\nRoad\n11801\nMontevideo\nUruguay\n\n\n", {locale: 'es-UY'});
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Mr. Richard Chanda, 10, Nyimba, Road");
        test.equal(parsedAddress.locality, "Montevideo");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "11801");
        test.equal(parsedAddress.country, "Uruguay");
        test.equal(parsedAddress.countryCode, "UY");
        test.done();
    },
    
    testParseAddressUYOneLine: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Mr. Richard Chanda , 10 , Nyimba , Road , 11801 , Montevideo , Uruguay", {locale: 'es-UY'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Mr. Richard Chanda, 10, Nyimba, Road");
        test.equal(parsedAddress.locality, "Montevideo");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "11801");
        test.equal(parsedAddress.country, "Uruguay");
        test.equal(parsedAddress.countryCode, "UY");
        test.done();
    },
    
    testParseAddressUYSuperfluousWhitespace: function(test) {
        test.expect(7);
        var parsedAddress = new Address("\t\t\tMr. Richard Chanda\n\t\t\t10 \t\t\t\r\r Nyimba \n \r \tRoad \n\t\n11801\t\nMontevideo\n\t Uruguay\n\n\n", {locale: 'es-UY'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Mr. Richard Chanda, 10 Nyimba, Road");
        test.equal(parsedAddress.locality, "Montevideo");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "11801");
        test.equal(parsedAddress.country, "Uruguay");
        test.equal(parsedAddress.countryCode, "UY");
        test.done();
    },
    
    testParseAddressUYNoDelimiters: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Florencio Agustini Eduardo Acevedo Diaz 1753 11801 Montevideo Uruguay", {locale: 'es-UY'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Florencio Agustini Eduardo Acevedo Diaz 1753");
        test.equal(parsedAddress.locality, "Montevideo");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "11801");
        test.equal(parsedAddress.country, "Uruguay");
        test.equal(parsedAddress.countryCode, "UY");
        test.done();
    },
    
    testParseAddressUYFromUS: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Florencio Agustini Eduardo Acevedo Diaz 1753\n56001 Montevideo\nUruguay", {locale: 'en-US'});
        
        // the country name is in German because this address is for a contact in a German database
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Florencio Agustini Eduardo Acevedo Diaz 1753");
        test.equal(parsedAddress.locality, "Montevideo");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "56001");
        test.equal(parsedAddress.country, "Uruguay");
        test.equal(parsedAddress.countryCode, "UY");
        test.done();
    },
    
    testFormatAddressUY: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Florencio Agustini Eduardo Acevedo Diaz 1753",
            locality: "Montevideo",
            postalCode: "56001",
            country: "Uruguay",
            countryCode: "UY"
        }, {locale: 'es-UY'});
        
        var expected = "Florencio Agustini Eduardo Acevedo Diaz 1753\n56001 Montevideo\nUruguay";
        var formatter = new AddressFmt({locale: 'es-UY'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressUYFromUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Florencio Agustini Eduardo Acevedo Diaz 1753",
            locality: "Montevideo",
            postalCode: "56001",
            country: "Uruguay",
            countryCode: "UY"
        }, {locale: 'en-US'});
        
        var expected = "Florencio Agustini Eduardo Acevedo Diaz 1753\n56001 Montevideo\nUruguay";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
    
};