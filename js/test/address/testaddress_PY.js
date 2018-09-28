/*
 * testaddress_PY.js - test the address parsing and formatting routines
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

module.exports.testaddress_PY = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAddressPYNormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("JOSÉ GONZÁLES WASMOSY INDEPENDENCIA NACIONAL811, PISO 9\n1321 ASUNCIÓN\nPARAGUAY", {locale: 'es-PY'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "JOSÉ GONZÁLES WASMOSY INDEPENDENCIA NACIONAL811, PISO 9");
        test.equal(parsedAddress.locality, "ASUNCIÓN");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "1321");
        test.equal(parsedAddress.country, "PARAGUAY");
        test.equal(parsedAddress.countryCode, "PY");
        test.done();
    },
    
    testParseAddressPYNoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("JOSÉ GONZÁLES WASMOSY INDEPENDENCIA NACIONAL811, PISO 9\nASUNCIÓN\nPARAGUAY", {locale: 'es-PY'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "JOSÉ GONZÁLES WASMOSY INDEPENDENCIA NACIONAL811, PISO 9");
        test.equal(parsedAddress.locality, "ASUNCIÓN");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.country, "PARAGUAY");
        test.equal(parsedAddress.countryCode, "PY");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    
    testParseAddressPYNoCountry: function(test) {
        test.expect(7);
        var parsedAddress = new Address("JOSÉ GONZÁLES WASMOSY INDEPENDENCIA NACIONAL811, PISO 9\n1321 ASUNCIÓN", {locale: 'es-PY'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "JOSÉ GONZÁLES WASMOSY INDEPENDENCIA NACIONAL811, PISO 9");
        test.equal(parsedAddress.locality, "ASUNCIÓN");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "1321");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "PY");
        test.done();
    },
    
    testParseAddressPYManyLines: function(test) {
        test.expect(7);
        var parsedAddress = new Address("JOSÉ GONZÁLES WASMOSY INDEPENDENCIA NACIONAL811\n PISO 9\n\n1321\nASUNCIÓN\nPARAGUAY\n\n\n", {locale: 'es-PY'});
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "JOSÉ GONZÁLES WASMOSY INDEPENDENCIA NACIONAL811, PISO 9");
        test.equal(parsedAddress.locality, "ASUNCIÓN");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "1321");
        test.equal(parsedAddress.country, "PARAGUAY");
        test.equal(parsedAddress.countryCode, "PY");
        test.done();
    },
    
    testParseAddressPYOneLine: function(test) {
        test.expect(7);
        var parsedAddress = new Address("JOSÉ GONZÁLES WASMOSY INDEPENDENCIA NACIONAL811 , PISO 9 , 1321 , ASUNCIÓN , PARAGUAY", {locale: 'es-PY'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "JOSÉ GONZÁLES WASMOSY INDEPENDENCIA NACIONAL811, PISO 9");
        test.equal(parsedAddress.locality, "ASUNCIÓN");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "1321");
        test.equal(parsedAddress.country, "PARAGUAY");
        test.equal(parsedAddress.countryCode, "PY");
        test.done();
    },
    
    testParseAddressPYSuperfluousWhitespace: function(test) {
        test.expect(7);
        var parsedAddress = new Address("\t\t\tJOSÉ GONZÁLES WASMOSY INDEPENDENCIA NACIONAL811\n\t\t\t PISO 9\n\t\n1321\t\nASUNCIÓN\n\t PARAGUAY\n\n\n", {locale: 'es-PY'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "JOSÉ GONZÁLES WASMOSY INDEPENDENCIA NACIONAL811, PISO 9");
        test.equal(parsedAddress.locality, "ASUNCIÓN");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "1321");
        test.equal(parsedAddress.country, "PARAGUAY");
        test.equal(parsedAddress.countryCode, "PY");
        test.done();
    },
    
    testParseAddressPYNoDelimiters: function(test) {
        test.expect(7);
        var parsedAddress = new Address("JOSÉ GONZÁLES WASMOSY INDEPENDENCIA NACIONAL811, PISO 9 1321 ASUNCIÓN PARAGUAY", {locale: 'es-PY'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "JOSÉ GONZÁLES WASMOSY INDEPENDENCIA NACIONAL811, PISO 9");
        test.equal(parsedAddress.locality, "ASUNCIÓN");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "1321");
        test.equal(parsedAddress.country, "PARAGUAY");
        test.equal(parsedAddress.countryCode, "PY");
        test.done();
    },
    
    testParseAddressPYFromUS: function(test) {
        test.expect(7);
        var parsedAddress = new Address("JOSÉ GONZÁLES WASMOSY INDEPENDENCIA NACIONAL811, PISO 9\n1321 ASUNCIÓN\nPARAGUAY", {locale: 'en-US'});
        
        // the country name is in German because this address is for a contact in a German database
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "JOSÉ GONZÁLES WASMOSY INDEPENDENCIA NACIONAL811, PISO 9");
        test.equal(parsedAddress.locality, "ASUNCIÓN");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "1321");
        test.equal(parsedAddress.country, "PARAGUAY");
        test.equal(parsedAddress.countryCode, "PY");
        test.done();
    },
    
    testFormatAddressPY: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "JOSÉ GONZÁLES WASMOSY INDEPENDENCIA NACIONAL811, PISO 9",
            locality: "ASUNCIÓN",
            postalCode: "1321",
            country: "PARAGUAY",
            countryCode: "PY"
        }, {locale: 'es-PY'});
        
        var expected = "JOSÉ GONZÁLES WASMOSY INDEPENDENCIA NACIONAL811, PISO 9\n1321 ASUNCIÓN\nPARAGUAY";
        var formatter = new AddressFmt({locale: 'es-PY'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressPYFromUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "JOSÉ GONZÁLES WASMOSY INDEPENDENCIA NACIONAL811, PISO 9",
            locality: "ASUNCIÓN",
            postalCode: "1321",
            country: "PARAGUAY",
            countryCode: "PY"
        }, {locale: 'en-US'});
        
        var expected = "JOSÉ GONZÁLES WASMOSY INDEPENDENCIA NACIONAL811, PISO 9\n1321 ASUNCIÓN\nPARAGUAY";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
    
};
