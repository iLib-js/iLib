/*
 * testaddress_ML.js - test the address parsing and formatting routines
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

module.exports.testaddress_ML = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAddressMLNormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("M. Kalilou Sissoko Rue 406 - Porte 39 Magnabougou\nBAMAKO\nMALI", {locale: 'fr-ML'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "M. Kalilou Sissoko Rue 406 - Porte 39 Magnabougou");
        test.equal(parsedAddress.locality, "BAMAKO");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "MALI");
        test.equal(parsedAddress.countryCode, "ML");
        test.done();
    },
    
    testParseAddressMLNoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("M. Kalilou Sissoko Rue 406 - Porte 39 Magnabougou\nBAMAKO\nMALI", {locale: 'fr-ML'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "M. Kalilou Sissoko Rue 406 - Porte 39 Magnabougou");
        test.equal(parsedAddress.locality, "BAMAKO");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.country, "MALI");
        test.equal(parsedAddress.countryCode, "ML");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    
    testParseAddressMLNoCountry: function(test) {
        test.expect(7);
        var parsedAddress = new Address("M. Kalilou Sissoko Rue 406 - Porte 39 Magnabougou\nBAMAKO", {locale: 'fr-ML'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "M. Kalilou Sissoko Rue 406 - Porte 39 Magnabougou");
        test.equal(parsedAddress.locality, "BAMAKO");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "ML");
        test.done();
    },
    
    testParseAddressMLManyLines: function(test) {
        test.expect(7);
        var parsedAddress = new Address("M. Kalilou Sissoko Rue\n406 - Porte 39\nMagnabougou\n\n\nBAMAKO\n\n\nMALI\n\n\n", {locale: 'fr-ML'});
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "M. Kalilou Sissoko Rue, 406 - Porte 39, Magnabougou");
        test.equal(parsedAddress.locality, "BAMAKO");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "MALI");
        test.equal(parsedAddress.countryCode, "ML");
        test.done();
    },
    
    testParseAddressMLOneLine: function(test) {
        test.expect(7);
        var parsedAddress = new Address("M. Kalilou Sissoko Rue , 406 - Porte 39 , Magnabougou , BAMAKO , MALI", {locale: 'fr-ML'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "M. Kalilou Sissoko Rue, 406 - Porte 39, Magnabougou");
        test.equal(parsedAddress.locality, "BAMAKO");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "MALI");
        test.equal(parsedAddress.countryCode, "ML");
        test.done();
    },
    
    testParseAddressMLSuperfluousWhitespace: function(test) {
        test.expect(7);
        var parsedAddress = new Address("\t\t\tM. Kalilou Sissoko Rue\t\t\r406 - Porte 39\t\t\rMagnabougou\n\n\n\nBAMAKO\n\t MALI\n\n\n", {locale: 'fr-ML'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "M. Kalilou Sissoko Rue 406 - Porte 39 Magnabougou");
        test.equal(parsedAddress.locality, "BAMAKO");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "MALI");
        test.equal(parsedAddress.countryCode, "ML");
        test.done();
    },
    
    testParseAddressMLNoDelimiters: function(test) {
        test.expect(7);
        var parsedAddress = new Address("M. Kalilou Sissoko Rue 406 - Porte 39 Magnabougou BAMAKO MALI", {locale: 'fr-ML'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "M. Kalilou Sissoko Rue 406 - Porte 39 Magnabougou");
        test.equal(parsedAddress.locality, "BAMAKO");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "MALI");
        test.equal(parsedAddress.countryCode, "ML");
        test.done();
    },
    
    testParseAddressMLFromUS: function(test) {
        test.expect(7);
        var parsedAddress = new Address("M. Kalilou Sissoko Rue 406 - Porte 39 Magnabougou\nBAMAKO\nMALI", {locale: 'en-US'});
        
        // the country name is in German because this address is for a contact in a German database
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "M. Kalilou Sissoko Rue 406 - Porte 39 Magnabougou");
        test.equal(parsedAddress.locality, "BAMAKO");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "MALI");
        test.equal(parsedAddress.countryCode, "ML");
        test.done();
    },
    
    testFormatAddressML: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "M. Kalilou Sissoko Rue 406 - Porte 39 Magnabougou",
            locality: "BAMAKO",
            country: "MALI",
            countryCode: "ML"
        }, {locale: 'fr-ML'});
        
        var expected = "M. Kalilou Sissoko Rue 406 - Porte 39 Magnabougou\nBAMAKO\nMALI";
        var formatter = new AddressFmt({locale: 'fr-ML'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressMLFromUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "M. Kalilou Sissoko Rue 406 - Porte 39 Magnabougou",
            locality: "BAMAKO",
            country: "MALI",
            countryCode: "ML"
        }, {locale: 'en-US'});
        
        var expected = "M. Kalilou Sissoko Rue 406 - Porte 39 Magnabougou\nBAMAKO\nMALI";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
    
};
