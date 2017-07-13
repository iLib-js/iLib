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

module.exports.testaddress_CL = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAddressCLNormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Av. Bellavista N° 185, Dep. 609, 8420000, Recoleta, Chile", {locale: 'es-CL'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Av. Bellavista N° 185, Dep. 609");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "Recoleta");
        test.equal(parsedAddress.postalCode, "8420000");
        test.equal(parsedAddress.country, "Chile");
        test.equal(parsedAddress.countryCode, "CL");
        test.done();
    },
    
    testParseAddressCLNoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Av. Bellavista N° 185, Dep. 609, 8420000, Recoleta, Chile", {locale: 'es-CL'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Av. Bellavista N° 185, Dep. 609");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "Recoleta");
        test.equal(parsedAddress.country, "Chile");
        test.equal(parsedAddress.countryCode, "CL");
        test.equal(parsedAddress.postalCode, "8420000");
        test.done();
    },
    
    testParseAddressCLManyLines: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Av. Bellavista N° 185\nDep. 609\n8420000\nRecoleta\nChile", {locale: 'es-CL'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Av. Bellavista N° 185, Dep. 609");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "Recoleta");
        test.equal(parsedAddress.postalCode, "8420000");
        test.equal(parsedAddress.country, "Chile");
        test.equal(parsedAddress.countryCode, "CL");
        test.done();
    },
    
    testParseAddressCLOneLine: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Av. Bellavista N° 185, Dep. 609, 8420000, Recoleta, Chile", {locale: 'es-CL'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Av. Bellavista N° 185, Dep. 609");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "Recoleta");
        test.equal(parsedAddress.postalCode, "8420000");
        test.equal(parsedAddress.country, "Chile");
        test.equal(parsedAddress.countryCode, "CL");
        test.done();
    },
    
    testParseAddressCLSuperfluousWhitespace: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Av. Bellavista N° 185, Dep. 609 \n\t\n 8420000\nRecoleta\t\n\n Chile  \n  \t\t\t", {locale: 'es-CL'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Av. Bellavista N° 185, Dep. 609");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "Recoleta");
        test.equal(parsedAddress.postalCode, "8420000");
        test.equal(parsedAddress.country, "Chile");
        test.equal(parsedAddress.countryCode, "CL");
        test.done();
    },
    
    testParseAddressCLNoDelimiters: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Av. Bellavista N° 185 Dep. 609 8420000 Recoleta Chile", {locale: 'es-CL'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Av. Bellavista N° 185 Dep. 609");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "Recoleta");
        test.equal(parsedAddress.postalCode, "8420000");
        test.equal(parsedAddress.country, "Chile");
        test.equal(parsedAddress.countryCode, "CL");
        test.done();
    },
    
    testParseAddressCLSpecialChars: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Av. Bellavista N° 185, Dep. 609, 8420000, Recoleta, Chile", {locale: 'es-CL'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Av. Bellavista N° 185, Dep. 609");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "Recoleta");
        test.equal(parsedAddress.postalCode, "8420000");
        test.equal(parsedAddress.country, "Chile");
        test.equal(parsedAddress.countryCode, "CL");
        test.done();
    },
    
    testParseAddressCLFromUS: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Av. Bellavista N° 185, Dep. 609, 8420000, Recoleta, Chile", {locale: 'en-US'});
        
        // the country name is in English because this address is for a contact in a US database
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Av. Bellavista N° 185, Dep. 609");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "Recoleta");
        test.equal(parsedAddress.postalCode, "8420000");
        test.equal(parsedAddress.country, "Chile");
        test.equal(parsedAddress.countryCode, "CL");
        test.done();
    },
    
    testFormatAddressCL: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Av. Bellavista N° 185, Dep. 609",
            locality: "Recoleta",
            postalCode: "8420000",
            country: "Chile",
            countryCode: "CL"
        }, {locale: 'es-CL'});
        
        var expected = "Av. Bellavista N° 185, Dep. 609\n8420000\nRecoleta\nChile";
        var formatter = new AddressFmt({locale: 'es-CL'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressCLFromUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Av. Bellavista N° 185, Dep. 609",
            locality: "Recoleta",
            postalCode: "8420000",
            country: "Chile",
            countryCode: "CL"
        }, {locale: 'en-US'});
        
        var expected = "Av. Bellavista N° 185, Dep. 609\n8420000\nRecoleta\nChile";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressCL1: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Señorita Patricia Vivas, Moneda 1155, 8340457, SANTIAGO, CHILE", {locale: 'es-CL'});
        
        // the country name is in English because this address is for a contact in a US database
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Señorita Patricia Vivas, Moneda 1155");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "SANTIAGO");
        test.equal(parsedAddress.postalCode, "8340457");
        test.equal(parsedAddress.country, "CHILE");
        test.equal(parsedAddress.countryCode, "CL");
        test.done();
    },
    testFormatAddressCL2: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Señorita Patricia Vivas Moneda 1155",
            locality: "SANTIAGO",
            postalCode: "8340457",
            country: "CHILE",
            countryCode: "CL"
        }, {locale: 'es-CL'});
        
        var expected = "Señorita Patricia Vivas Moneda 1155\n8340457\nSANTIAGO\nCHILE";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
    
    
};