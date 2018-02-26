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
    var ilib = require("../../../lib/ilib.js");
}

module.exports.testaddress_IT = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAddressITNormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Corso Europa 2\n20122 Milan\nItalia", {locale: 'it-IT'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Corso Europa 2");
        test.equal(parsedAddress.locality, "Milan");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "20122");
        test.equal(parsedAddress.country, "Italia");
        test.equal(parsedAddress.countryCode, "IT");
        test.done();
    },
    
    testParseAddressITNoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("C.so Trapani 16\nTorino\nItalia", {locale: 'it-IT'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "C.so Trapani 16");
        test.equal(parsedAddress.locality, "Torino");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.country, "Italia");
        test.equal(parsedAddress.countryCode, "IT");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    
    testParseAddressITNoCountry: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Corso Europa 2\n20122 Milan", {locale: 'it-IT'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Corso Europa 2");
        test.equal(parsedAddress.locality, "Milan");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "20122");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "IT");
        test.done();
    },
    
    testParseAddressITWithRegion: function(test) {
        test.expect(7);
        var parsedAddress = new Address("via Paná, 56\n35027 Noventa Padovana (PD)", {locale: 'it-IT'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "via Paná, 56");
        test.equal(parsedAddress.locality, "Noventa Padovana");
        test.equal(parsedAddress.region, "(PD)");
        test.equal(parsedAddress.postalCode, "35027");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "IT");
        test.done();
    },
    
    testParseAddressITWithRegion2: function(test) {
        test.expect(7);
        var parsedAddress = new Address("via Napoli 45\n96017 Noto (SR)\nItalia", {locale: 'it-IT'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "via Napoli 45");
        test.equal(parsedAddress.locality, "Noto");
        test.equal(parsedAddress.region, "(SR)");
        test.equal(parsedAddress.postalCode, "96017");
        test.equal(parsedAddress.country, "Italia");
        test.equal(parsedAddress.countryCode, "IT");
        test.done();
    },
    
    testParseAddressITManyLines: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Centro Direzionale\nFab. 1 G/7\n80143\nNapoli\nItalia\n", {locale: 'it-IT'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Centro Direzionale, Fab. 1 G/7");
        test.equal(parsedAddress.locality, "Napoli");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "80143");
        test.equal(parsedAddress.country, "Italia");
        test.equal(parsedAddress.countryCode, "IT");
        test.done();
    },
    
    testParseAddressITOneLine: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Via Achille Campanile 85, 00144 ROMA, Italia", {locale: 'it-IT'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Via Achille Campanile 85");
        test.equal(parsedAddress.locality, "ROMA");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "00144");
        test.equal(parsedAddress.country, "Italia");
        test.equal(parsedAddress.countryCode, "IT");
        test.done();
    },
    
    testParseAddressITSuperfluousWhitespace: function(test) {
        test.expect(7);
        var parsedAddress = new Address("\t\t\tVia Achille   \t\t\t Campanile 85,\n\n\t\r\t00144\t\t\t\n ROMA\t\t\n\r\r Italia\n\n\n", {locale: 'it-IT'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Via Achille Campanile 85");
        test.equal(parsedAddress.locality, "ROMA");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "00144");
        test.equal(parsedAddress.country, "Italia");
        test.equal(parsedAddress.countryCode, "IT");
        test.done();
    },
    
    testParseAddressITNoDelimiters: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Via Achille Campanile 85 00144 ROMA Italia", {locale: 'it-IT'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Via Achille Campanile 85");
        test.equal(parsedAddress.locality, "ROMA");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "00144");
        test.equal(parsedAddress.country, "Italia");
        test.equal(parsedAddress.countryCode, "IT");
        test.done();
    },
    
    testParseAddressITFromUS: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Via Achille Campanile 85\n00144 ROMA\nItaly", {locale: 'en-US'});
        
        // the country name is in English because this address is for a contact in a US database
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Via Achille Campanile 85");
        test.equal(parsedAddress.locality, "ROMA");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "00144");
        test.equal(parsedAddress.country, "Italy");
        test.equal(parsedAddress.countryCode, "IT");
        test.done();
    },
    
    testFormatAddressIT: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Corso Europa 2",
            locality: "Milan",
            postalCode: "20122",
            country: "Italia",
            countryCode: "IT"
        }, {locale: 'it-IT'});
        
        var expected = "Corso Europa 2\n20122 Milan\nItalia";
        var formatter = new AddressFmt({locale: 'it-IT'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressITFromUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Corso Europa 2",
            locality: "Milan",
            postalCode: "20122",
            country: "Italia",
            countryCode: "IT"
        }, {locale: 'en-US'});
        
        var expected = "Corso Europa 2\n20122 Milan\nItalia";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
    
};
