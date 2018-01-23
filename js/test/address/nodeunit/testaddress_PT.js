/*
 * testaddress_PT.js - test the address parsing and formatting routines
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

module.exports.testaddress_PT = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAddressPTNormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Augusto Rodrigues Avenida António Arroio 5\n2775-153 Parede\nPortugal", {locale: 'pt-PT'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Augusto Rodrigues Avenida António Arroio 5");
        test.equal(parsedAddress.locality, "Parede");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "2775-153");
        test.equal(parsedAddress.country, "Portugal");
        test.equal(parsedAddress.countryCode, "PT");
        test.done();
    },
    
    testParseAddressPTNoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Augusto Rodrigues Avenida António Arroio 5\nParede\nPortugal", {locale: 'pt-PT'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Augusto Rodrigues Avenida António Arroio 5");
        test.equal(parsedAddress.locality, "Parede");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.country, "Portugal");
        test.equal(parsedAddress.countryCode, "PT");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    
    testParseAddressPTNoCountry: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Augusto Rodrigues Avenida António Arroio 5\n2775-153 Parede", {locale: 'pt-PT'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Augusto Rodrigues Avenida António Arroio 5");
        test.equal(parsedAddress.locality, "Parede");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "2775-153");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "PT");
        test.done();
    },
    
    testParseAddressPTManyLines: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Augusto Rodrigues\nAvenida António Arroio 5\n\n2775-153\nParede\nPortugal\n\n\n", {locale: 'pt-PT'});
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Augusto Rodrigues, Avenida António Arroio 5");
        test.equal(parsedAddress.locality, "Parede");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "2775-153");
        test.equal(parsedAddress.country, "Portugal");
        test.equal(parsedAddress.countryCode, "PT");
        test.done();
    },
    
    testParseAddressPTOneLine: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Augusto Rodrigues , Avenida António Arroio 5 , 2775-153 , Parede , Portugal", {locale: 'pt-PT'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Augusto Rodrigues, Avenida António Arroio 5");
        test.equal(parsedAddress.locality, "Parede");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "2775-153");
        test.equal(parsedAddress.country, "Portugal");
        test.equal(parsedAddress.countryCode, "PT");
        test.done();
    },
    
    testParseAddressPTSuperfluousWhitespace: function(test) {
        test.expect(7);
        var parsedAddress = new Address("\t\t\tAugusto Rodrigues\n\t\t\tAvenida António Arroio 5\n\t\n2775-153\t\nParede\n\t Portugal\n\n\n", {locale: 'pt-PT'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Augusto Rodrigues, Avenida António Arroio 5");
        test.equal(parsedAddress.locality, "Parede");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "2775-153");
        test.equal(parsedAddress.country, "Portugal");
        test.equal(parsedAddress.countryCode, "PT");
        test.done();
    },
    
    testParseAddressPTNoDelimiters: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Augusto Rodrigues Avenida António Arroio 5 2775-153 Parede Portugal", {locale: 'pt-PT'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Augusto Rodrigues Avenida António Arroio 5");
        test.equal(parsedAddress.locality, "Parede");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "2775-153");
        test.equal(parsedAddress.country, "Portugal");
        test.equal(parsedAddress.countryCode, "PT");
        test.done();
    },
    
    testParseAddressPTFromUS: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Augusto Rodrigues Avenida António Arroio 5\n2775-153 Parede\nPortugal", {locale: 'en-US'});
        
        // the country name is in German because this address is for a contact in a German database
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Augusto Rodrigues Avenida António Arroio 5");
        test.equal(parsedAddress.locality, "Parede");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "2775-153");
        test.equal(parsedAddress.country, "Portugal");
        test.equal(parsedAddress.countryCode, "PT");
        test.done();
    },
    
    testFormatAddressPT: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Augusto Rodrigues Avenida António Arroio 5",
            locality: "Parede",
            postalCode: "2775-153",
            country: "Portugal",
            countryCode: "PT"
        }, {locale: 'pt-PT'});
        
        var expected = "Augusto Rodrigues Avenida António Arroio 5\n2775-153 Parede\nPortugal";
        var formatter = new AddressFmt({locale: 'pt-PT'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressPTFromUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Augusto Rodrigues Avenida António Arroio 5",
            locality: "Parede",
            postalCode: "2775-153",
            country: "Portugal",
            countryCode: "PT"
        }, {locale: 'en-US'});
        
        var expected = "Augusto Rodrigues Avenida António Arroio 5\n2775-153 Parede\nPortugal";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
    
};