/*
 * testaddress_PR.js - test the address parsing and formatting routines for Puerto Rico
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

module.exports.testaddress_PR = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAddressPRNormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("MRS MARÍA SUÁREZ URB LAS GLADIOLAS 150\nCALLE A\nSAN JUAN, PR 00926-3232\nPuerto Rico", {locale: 'en-PR'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "MRS MARÍA SUÁREZ URB LAS GLADIOLAS 150, CALLE A");
        test.equal(parsedAddress.locality, "SAN JUAN");
        test.equal(parsedAddress.region, "PR");
        test.equal(parsedAddress.postalCode, "00926-3232");
        test.equal(parsedAddress.country, "Puerto Rico");
        test.equal(parsedAddress.countryCode, "PR");
        test.done();
    },
    
    testParseAddressPRNormalLanguageIndepedent: function(test) {
        test.expect(7);
        var parsedAddress = new Address("MRS MARÍA SUÁREZ URB LAS GLADIOLAS 150\nCALLE A\nSAN JUAN, PR 00926-3232\nPuerto Rico", {locale: 'es-PR'});
            
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "MRS MARÍA SUÁREZ URB LAS GLADIOLAS 150, CALLE A");
        test.equal(parsedAddress.locality, "SAN JUAN");
        test.equal(parsedAddress.region, "PR");
        test.equal(parsedAddress.postalCode, "00926-3232");
        test.equal(parsedAddress.country, "Puerto Rico");
        test.equal(parsedAddress.countryCode, "PR");
        test.done();
    },
    
    testParseAddressPRNoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("MRS MARÍA SUÁREZ URB LAS GLADIOLAS 150, CALLE A\nSAN JUAN, PR\nPuerto Rico", {locale: 'en-PR'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "MRS MARÍA SUÁREZ URB LAS GLADIOLAS 150, CALLE A");
        test.equal(parsedAddress.locality, "SAN JUAN");
        test.equal(parsedAddress.region, "PR");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "Puerto Rico");
        test.equal(parsedAddress.countryCode, "PR");
        test.done();
    },
    
    testParseAddressPRShortZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("MRS MARÍA SUÁREZ URB LAS GLADIOLAS 150, CALLE A\nSAN JUAN, PR 00926\nPuerto Rico", {locale: 'en-PR'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "MRS MARÍA SUÁREZ URB LAS GLADIOLAS 150, CALLE A");
        test.equal(parsedAddress.locality, "SAN JUAN");
        test.equal(parsedAddress.region, "PR");
        test.equal(parsedAddress.postalCode, "00926");
        test.equal(parsedAddress.country, "Puerto Rico");
        test.equal(parsedAddress.countryCode, "PR");
        test.done();
    },
    
    testParseAddressPRNoCountry: function(test) {
        test.expect(7);
        var parsedAddress = new Address("MRS MARÍA SUÁREZ URB LAS GLADIOLAS 150, CALLE A\nSAN JUAN, PR 00926-3232", {locale: 'en-PR'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "MRS MARÍA SUÁREZ URB LAS GLADIOLAS 150, CALLE A");
        test.equal(parsedAddress.locality, "SAN JUAN");
        test.equal(parsedAddress.region, "PR");
        test.equal(parsedAddress.postalCode, "00926-3232");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "PR");
        test.done();
    },
    
    testParseAddressPRManyLines: function(test) {
        test.expect(7);
        var parsedAddress = new Address("MRS MARÍA SUÁREZ\nURB LAS GLADIOLAS\n150\nCALLE A\nSAN JUAN, PR 00926-3232\nPuerto Rico", {locale: 'en-PR'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "MRS MARÍA SUÁREZ, URB LAS GLADIOLAS, 150, CALLE A");
        test.equal(parsedAddress.locality, "SAN JUAN");
        test.equal(parsedAddress.region, "PR");
        test.equal(parsedAddress.postalCode, "00926-3232");
        test.equal(parsedAddress.country, "Puerto Rico");
        test.equal(parsedAddress.countryCode, "PR");
        test.done();
    },
    
    testParseAddressPROneLine: function(test) {
        test.expect(7);
        var parsedAddress = new Address("MRS MARÍA SUÁREZ URB LAS GLADIOLAS 150 CALLE A, SAN JUAN, PR 00926-3232, Puerto Rico", {locale: 'en-PR'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "MRS MARÍA SUÁREZ URB LAS GLADIOLAS 150 CALLE A");
        test.equal(parsedAddress.locality, "SAN JUAN");
        test.equal(parsedAddress.region, "PR");
        test.equal(parsedAddress.postalCode, "00926-3232");
        test.equal(parsedAddress.country, "Puerto Rico");
        test.equal(parsedAddress.countryCode, "PR");
        test.done();
    },
    
    
    testParseAddressPRNoDelimiters: function(test) {
        test.expect(7);
        var parsedAddress = new Address("MRS MARÍA SUÁREZ URB LAS GLADIOLAS 150 CALLE A SAN JUAN PR 00926-3232 Puerto Rico", {locale: 'en-PR'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "MRS MARÍA SUÁREZ URB LAS GLADIOLAS 150 CALLE A");
        test.equal(parsedAddress.locality, "SAN JUAN");
        test.equal(parsedAddress.region, "PR");
        test.equal(parsedAddress.postalCode, "00926-3232");
        test.equal(parsedAddress.country, "Puerto Rico");
        test.equal(parsedAddress.countryCode, "PR");
        test.done();
    },
    
    
    testParseAddressPRFromUS: function(test) {
        test.expect(7);
        var parsedAddress = new Address("MRS MARÍA SUÁREZ URB LAS GLADIOLAS 150, CALLE A\nSAN JUAN, PR 00926-3232", {locale: 'en-US'});
        
        // the country name is in English because this address is for a contact in a US database
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "MRS MARÍA SUÁREZ URB LAS GLADIOLAS 150, CALLE A");
        test.equal(parsedAddress.locality, "SAN JUAN");
        test.equal(parsedAddress.region, "PR");
        test.equal(parsedAddress.postalCode, "00926-3232");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "US");
        test.done();
    },
    
    testParseAddressPRFromUSWithCountry: function(test) {
        test.expect(7);
        var parsedAddress = new Address("MRS MARÍA SUÁREZ URB LAS GLADIOLAS 150, CALLE A\nSAN JUAN, PR 00926-3232\nPuerto Rico", {locale: 'en-US'});
        
        // the country name is in English because this address is for a contact in a US database
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "MRS MARÍA SUÁREZ URB LAS GLADIOLAS 150, CALLE A");
        test.equal(parsedAddress.locality, "SAN JUAN");
        test.equal(parsedAddress.region, "PR");
        test.equal(parsedAddress.postalCode, "00926-3232");
        test.equal(parsedAddress.country, "Puerto Rico");
        test.equal(parsedAddress.countryCode, "PR");
        test.done();
    },
    
    testFormatAddressPR: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "MRS MARÍA SUÁREZ URB LAS GLADIOLAS 150, CALLE A",
            locality: "SAN JUAN",
            region: "PR",
            postalCode: "00926-3232",
            country: "Puerto Rico",
            countryCode: "PR"
        }, {locale: 'en-PR'});
        
        var expected = "MRS MARÍA SUÁREZ URB LAS GLADIOLAS 150, CALLE A\nSAN JUAN, PR 00926-3232\nPuerto Rico";
        var formatter = new AddressFmt({locale: 'en-PR'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressPRFromUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "MRS MARÍA SUÁREZ URB LAS GLADIOLAS 150, CALLE A",
            locality: "SAN JUAN",
            region: "PR",
            postalCode: "00926-3232",
            country: "Puerto Rico",
            countryCode: "PR"
        }, {locale: 'en-US'});
        
        var expected = "MRS MARÍA SUÁREZ URB LAS GLADIOLAS 150, CALLE A\nSAN JUAN, PR 00926-3232\nPuerto Rico";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
    
};