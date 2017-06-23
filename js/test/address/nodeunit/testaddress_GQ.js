/*
 * testaddress_GQ.js - test the address parsing and formatting routines
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

module.exports.testaddress_GQ = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAddressGQNormal: function(test) {
        var parsedAddress = new Address("Mr. Ignacio Nguema Apartado 36\nMALABO\nGuinea Ecuatorial", {locale: 'es-GQ'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Mr. Ignacio Nguema Apartado 36");
        test.equal(parsedAddress.locality, "MALABO");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "Guinea Ecuatorial");
        test.equal(parsedAddress.countryCode, "GQ");
        test.done();
    },
    
    testParseAddressGQNormal: function(test) {
        var parsedAddress = new Address("Mr. Ignacio Nguema Apartado 36\nMALABO\nGuinea Ecuatorial", {locale: 'es-GQ'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Mr. Ignacio Nguema Apartado 36");
        test.equal(parsedAddress.locality, "MALABO");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "Guinea Ecuatorial");
        test.equal(parsedAddress.countryCode, "GQ");
        test.done();
    },
    
    testParseAddressGQNoZip: function(test) {
        var parsedAddress = new Address("Mr. Ignacio Nguema Apartado 36\nMALABO\nGuinea Ecuatorial", {locale: 'es-GQ'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Mr. Ignacio Nguema Apartado 36");
        test.equal(parsedAddress.locality, "MALABO");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.country, "Guinea Ecuatorial");
        test.equal(parsedAddress.countryCode, "GQ");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    
    testParseAddressGQNoCountry: function(test) {
        var parsedAddress = new Address("Mr. Ignacio Nguema Apartado 36\nMALABO", {locale: 'es-GQ'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Mr. Ignacio Nguema Apartado 36");
        test.equal(parsedAddress.locality, "MALABO");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "GQ");
        test.done();
    },
    
    testParseAddressGQManyLines: function(test) {
        var parsedAddress = new Address("Mr. Ignacio Nguema\nApartado 36\nMALABO\nGuinea Ecuatorial", {locale: 'es-GQ'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
          test.equal(parsedAddress.streetAddress, "Mr. Ignacio Nguema, Apartado 36");
        test.equal(parsedAddress.locality, "MALABO");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "Guinea Ecuatorial");
        test.equal(parsedAddress.countryCode, "GQ");
        test.done();
    },
    
    testParseAddressGQOneLine: function(test) {
        var parsedAddress = new Address("Mr. Ignacio Nguema , Apartado 36 , MALABO , Guinea Ecuatorial", {locale: 'es-GQ'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
          test.equal(parsedAddress.streetAddress, "Mr. Ignacio Nguema, Apartado 36");
        test.equal(parsedAddress.locality, "MALABO");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "Guinea Ecuatorial");
        test.equal(parsedAddress.countryCode, "GQ");
        test.done();
    },
    
    testParseAddressGQSuperfluousWhitespace: function(test) {
        var parsedAddress = new Address("Mr. Ignacio Nguema\n\n\t\r\t\t\rApartado 36\r\r\n\nMALABO\t\r\n\t\rGuinea Ecuatorial", {locale: 'es-GQ'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
          test.equal(parsedAddress.streetAddress, "Mr. Ignacio Nguema, Apartado 36");
        test.equal(parsedAddress.locality, "MALABO");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "Guinea Ecuatorial");
        test.equal(parsedAddress.countryCode, "GQ");
        test.done();
    },
    
    testParseAddressGQNoDelimiters: function(test) {
        var parsedAddress = new Address("Mr. Ignacio Nguema Apartado 36 MALABO Guinea Ecuatorial", {locale: 'es-GQ'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Mr. Ignacio Nguema Apartado 36");
        test.equal(parsedAddress.locality, "MALABO");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "Guinea Ecuatorial");
        test.equal(parsedAddress.countryCode, "GQ");
        test.done();
    },
    
    testParseAddressGQFromUS: function(test) {
        var parsedAddress = new Address("Mr. Ignacio Nguema Apartado 36\nMALABO\nGuinea Ecuatorial", {locale: 'es-GQ'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Mr. Ignacio Nguema Apartado 36");
        test.equal(parsedAddress.locality, "MALABO");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "Guinea Ecuatorial");
        test.equal(parsedAddress.countryCode, "GQ");
        test.done();
    },
    
    testFormatAddressGQ: function(test) {
        var parsedAddress = new Address({
            streetAddress: "Mr. Ignacio Nguema Apartado 36",
            locality: "MALABO",
            postalCode: "1010",
            country: "Guinea Ecuatorial",
            countryCode: "GQ"
        }, {locale: 'es-GQ'});
        
        var expected = "Mr. Ignacio Nguema Apartado 36\nMALABO\nGuinea Ecuatorial";
        var formatter = new AddressFmt({locale: 'es-GQ'});
        test.expect(1);
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressGQFromUS: function(test) {
        var parsedAddress = new Address({
            streetAddress: "Mr. Ignacio Nguema Apartado 36",
            locality: "MALABO",
            postalCode: "1010",
            country: "Guinea Ecuatorial",
            countryCode: "GQ"
        }, {locale: 'en-US'});
        
        var expected = "Mr. Ignacio Nguema Apartado 36\nMALABO\nGuinea Ecuatorial";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.expect(1);
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    
    testFRParseAddressNormal: function(test) {
        var parsedAddress = new Address("Mr. Ignacio Nguema Apartado 36\nMALABO\nguinée équatoriale", {locale: 'fr-GQ'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Mr. Ignacio Nguema Apartado 36");
        test.equal(parsedAddress.locality, "MALABO");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "guinée équatoriale");
        test.equal(parsedAddress.countryCode, "GQ");
        test.done();
    },
    
    testFRParseAddressNormal: function(test) {
        var parsedAddress = new Address("Mr. Ignacio Nguema Apartado 36\nMALABO\nguinée équatoriale", {locale: 'fr-GQ'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Mr. Ignacio Nguema Apartado 36");
        test.equal(parsedAddress.locality, "MALABO");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "guinée équatoriale");
        test.equal(parsedAddress.countryCode, "GQ");
        test.done();
    },
    
    testFRParseAddressNoZip: function(test) {
        var parsedAddress = new Address("Mr. Ignacio Nguema Apartado 36\nMALABO\nguinée équatoriale", {locale: 'fr-GQ'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Mr. Ignacio Nguema Apartado 36");
        test.equal(parsedAddress.locality, "MALABO");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.country, "guinée équatoriale");
        test.equal(parsedAddress.countryCode, "GQ");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    
    testFRParseAddressNoCountry: function(test) {
        var parsedAddress = new Address("Mr. Ignacio Nguema Apartado 36\nMALABO", {locale: 'fr-GQ'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Mr. Ignacio Nguema Apartado 36");
        test.equal(parsedAddress.locality, "MALABO");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "GQ");
        test.done();
    },
    
    testFRParseAddressManyLines: function(test) {
        var parsedAddress = new Address("Mr. Ignacio Nguema\nApartado 36\nMALABO\nguinée équatoriale", {locale: 'fr-GQ'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
          test.equal(parsedAddress.streetAddress, "Mr. Ignacio Nguema, Apartado 36");
        test.equal(parsedAddress.locality, "MALABO");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "guinée équatoriale");
        test.equal(parsedAddress.countryCode, "GQ");
        test.done();
    },
    
    testFRParseAddressOneLine: function(test) {
        var parsedAddress = new Address("Mr. Ignacio Nguema , Apartado 36 , MALABO , guinée équatoriale", {locale: 'fr-GQ'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
          test.equal(parsedAddress.streetAddress, "Mr. Ignacio Nguema, Apartado 36");
        test.equal(parsedAddress.locality, "MALABO");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "guinée équatoriale");
        test.equal(parsedAddress.countryCode, "GQ");
        test.done();
    },
    
    testFRParseAddressSuperfluousWhitespace: function(test) {
        var parsedAddress = new Address("Mr. Ignacio Nguema\n\n\t\r\t\t\rApartado 36\r\r\n\nMALABO\t\r\n\t\rguinée équatoriale", {locale: 'fr-GQ'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
          test.equal(parsedAddress.streetAddress, "Mr. Ignacio Nguema, Apartado 36");
        test.equal(parsedAddress.locality, "MALABO");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "guinée équatoriale");
        test.equal(parsedAddress.countryCode, "GQ");
        test.done();
    },
    
    testFRParseAddressNoDelimiters: function(test) {
        var parsedAddress = new Address("Mr. Ignacio Nguema Apartado 36 MALABO guinée équatoriale", {locale: 'fr-GQ'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Mr. Ignacio Nguema Apartado 36");
        test.equal(parsedAddress.locality, "MALABO");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "guinée équatoriale");
        test.equal(parsedAddress.countryCode, "GQ");
        test.done();
    },
    
    testFRParseAddressFromUS: function(test) {
        var parsedAddress = new Address("Mr. Ignacio Nguema Apartado 36\nMALABO\nguinée équatoriale", {locale: 'fr-GQ'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Mr. Ignacio Nguema Apartado 36");
        test.equal(parsedAddress.locality, "MALABO");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "guinée équatoriale");
        test.equal(parsedAddress.countryCode, "GQ");
        test.done();
    },
    
    testFormatFRAddress: function(test) {
        var parsedAddress = new Address({
            streetAddress: "Mr. Ignacio Nguema Apartado 36",
            locality: "MALABO",
            postalCode: "1010",
            country: "guinée équatoriale",
            countryCode: "GQ"
        }, {locale: 'fr-GQ'});
        
        var expected = "Mr. Ignacio Nguema Apartado 36\nMALABO\nguinée équatoriale";
        var formatter = new AddressFmt({locale: 'fr-GQ'});
        test.expect(1);
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatFRAddressFromUS: function(test) {
        var parsedAddress = new Address({
            streetAddress: "Mr. Ignacio Nguema Apartado 36",
            locality: "MALABO",
            postalCode: "1010",
            country: "guinée équatoriale",
            countryCode: "GQ"
        }, {locale: 'en-US'});
        
        var expected = "Mr. Ignacio Nguema Apartado 36\nMALABO\nguinée équatoriale";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.expect(1);
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    
    
    testPTParseAddressNormal: function(test) {
        var parsedAddress = new Address("Mr. Ignacio Nguema Apartado 36\nMALABO\nGuiné Equatorial", {locale: 'pt-GQ'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Mr. Ignacio Nguema Apartado 36");
        test.equal(parsedAddress.locality, "MALABO");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "Guiné Equatorial");
        test.equal(parsedAddress.countryCode, "GQ");
        test.done();
    },
    
    testPTParseAddressNormal: function(test) {
        var parsedAddress = new Address("Mr. Ignacio Nguema Apartado 36\nMALABO\nGuiné Equatorial", {locale: 'pt-GQ'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Mr. Ignacio Nguema Apartado 36");
        test.equal(parsedAddress.locality, "MALABO");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "Guiné Equatorial");
        test.equal(parsedAddress.countryCode, "GQ");
        test.done();
    },
    
    testPTParseAddressNoZip: function(test) {
        var parsedAddress = new Address("Mr. Ignacio Nguema Apartado 36\nMALABO\nGuiné Equatorial", {locale: 'pt-GQ'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Mr. Ignacio Nguema Apartado 36");
        test.equal(parsedAddress.locality, "MALABO");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.country, "Guiné Equatorial");
        test.equal(parsedAddress.countryCode, "GQ");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    
    testPTParseAddressNoCountry: function(test) {
        var parsedAddress = new Address("Mr. Ignacio Nguema Apartado 36\nMALABO", {locale: 'pt-GQ'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Mr. Ignacio Nguema Apartado 36");
        test.equal(parsedAddress.locality, "MALABO");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "GQ");
        test.done();
    },
    
    testPTParseAddressManyLines: function(test) {
        var parsedAddress = new Address("Mr. Ignacio Nguema\nApartado 36\nMALABO\nGuiné Equatorial", {locale: 'pt-GQ'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
          test.equal(parsedAddress.streetAddress, "Mr. Ignacio Nguema, Apartado 36");
        test.equal(parsedAddress.locality, "MALABO");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "Guiné Equatorial");
        test.equal(parsedAddress.countryCode, "GQ");
        test.done();
    },
    
    testPTParseAddressOneLine: function(test) {
        var parsedAddress = new Address("Mr. Ignacio Nguema , Apartado 36 , MALABO , Guiné Equatorial", {locale: 'pt-GQ'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
          test.equal(parsedAddress.streetAddress, "Mr. Ignacio Nguema, Apartado 36");
        test.equal(parsedAddress.locality, "MALABO");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "Guiné Equatorial");
        test.equal(parsedAddress.countryCode, "GQ");
        test.done();
    },
    
    testPTParseAddressSuperfluousWhitespace: function(test) {
        var parsedAddress = new Address("Mr. Ignacio Nguema\n\n\t\r\t\t\rApartado 36\r\r\n\nMALABO\t\r\n\t\rGuiné Equatorial", {locale: 'pt-GQ'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
          test.equal(parsedAddress.streetAddress, "Mr. Ignacio Nguema, Apartado 36");
        test.equal(parsedAddress.locality, "MALABO");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "Guiné Equatorial");
        test.equal(parsedAddress.countryCode, "GQ");
        test.done();
    },
    
    testPTParseAddressNoDelimiters: function(test) {
        var parsedAddress = new Address("Mr. Ignacio Nguema Apartado 36 MALABO Guiné Equatorial", {locale: 'pt-GQ'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Mr. Ignacio Nguema Apartado 36");
        test.equal(parsedAddress.locality, "MALABO");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "Guiné Equatorial");
        test.equal(parsedAddress.countryCode, "GQ");
        test.done();
    },
    
    testPTParseAddressFromUS: function(test) {
        var parsedAddress = new Address("Mr. Ignacio Nguema Apartado 36\nMALABO\nGuiné Equatorial", {locale: 'pt-GQ'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Mr. Ignacio Nguema Apartado 36");
        test.equal(parsedAddress.locality, "MALABO");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "Guiné Equatorial");
        test.equal(parsedAddress.countryCode, "GQ");
        test.done();
    },
    
    testFormatPTAddress: function(test) {
        var parsedAddress = new Address({
            streetAddress: "Mr. Ignacio Nguema Apartado 36",
            locality: "MALABO",
            postalCode: "1010",
            country: "Guiné Equatorial",
            countryCode: "GQ"
        }, {locale: 'pt-GQ'});
        
        var expected = "Mr. Ignacio Nguema Apartado 36\nMALABO\nGuiné Equatorial";
        var formatter = new AddressFmt({locale: 'pt-GQ'});
        test.expect(1);
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatPTAddressFromUS: function(test) {
        var parsedAddress = new Address({
            streetAddress: "Mr. Ignacio Nguema Apartado 36",
            locality: "MALABO",
            postalCode: "1010",
            country: "Guiné Equatorial",
            countryCode: "GQ"
        }, {locale: 'en-US'});
        
        var expected = "Mr. Ignacio Nguema Apartado 36\nMALABO\nGuiné Equatorial";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.expect(1);
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
    
};