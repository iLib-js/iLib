/*
 * testaddress_CG.js - test the address parsing and formatting routines
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

module.exports.testaddress_CG = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAddressCGNormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("M. Joseph Mbemba 12, rue Kakamoueka\nBRAZZAVILLE\nCongo-Brazzaville", {locale: 'fr-CG'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "M. Joseph Mbemba 12, rue Kakamoueka");
        test.equal(parsedAddress.locality, "BRAZZAVILLE");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "Congo-Brazzaville");
        test.equal(parsedAddress.countryCode, "CG");
        test.done();
    },
    
    testParseAddressCGNoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("M. Joseph Mbemba 12, rue Kakamoueka\nBRAZZAVILLE\nCongo-Brazzaville", {locale: 'fr-CG'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "M. Joseph Mbemba 12, rue Kakamoueka");
        test.equal(parsedAddress.locality, "BRAZZAVILLE");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.country, "Congo-Brazzaville");
        test.equal(parsedAddress.countryCode, "CG");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    
    testParseAddressCGNoCountry: function(test) {
        test.expect(7);
        var parsedAddress = new Address("M. Joseph Mbemba 12, rue Kakamoueka\nBRAZZAVILLE", {locale: 'fr-CG'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "M. Joseph Mbemba 12, rue Kakamoueka");
        test.equal(parsedAddress.locality, "BRAZZAVILLE");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "CG");
        test.done();
    },
    
    testParseAddressCGManyLines: function(test) {
        test.expect(7);
        var parsedAddress = new Address("M. Joseph Mbemba 12\nrue Kakamoueka\nBRAZZAVILLE\nCongo-Brazzaville\n\n\n", {locale: 'fr-CG'});
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "M. Joseph Mbemba 12, rue Kakamoueka");
        test.equal(parsedAddress.locality, "BRAZZAVILLE");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "Congo-Brazzaville");
        test.equal(parsedAddress.countryCode, "CG");
        test.done();
    },
    
    testParseAddressCGOneLine: function(test) {
        test.expect(7);
        var parsedAddress = new Address("M. Joseph Mbemba 12 , rue Kakamoueka , BRAZZAVILLE , Congo-Brazzaville", {locale: 'fr-CG'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "M. Joseph Mbemba 12, rue Kakamoueka");
        test.equal(parsedAddress.locality, "BRAZZAVILLE");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "Congo-Brazzaville");
        test.equal(parsedAddress.countryCode, "CG");
        test.done();
    },
    
    testParseAddressCGSuperfluousWhitespace: function(test) {
        test.expect(7);
        var parsedAddress = new Address("\t\t\t\tM. Joseph Mbemba 12\t\t\true Kakamoueka\n\t\nBRAZZAVILLE\n\tCongo-Brazzaville\n\n\n", {locale: 'fr-CG'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "M. Joseph Mbemba 12 rue Kakamoueka");
        test.equal(parsedAddress.locality, "BRAZZAVILLE");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "Congo-Brazzaville");
        test.equal(parsedAddress.countryCode, "CG");
        test.done();
    },
    
    testParseAddressCGNoDelimiters: function(test) {
        test.expect(7);
        var parsedAddress = new Address("M. Joseph Mbemba 12 rue Kakamoueka BRAZZAVILLE Congo-Brazzaville", {locale: 'fr-CG'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "M. Joseph Mbemba 12 rue Kakamoueka");
        test.equal(parsedAddress.locality, "BRAZZAVILLE");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "Congo-Brazzaville");
        test.equal(parsedAddress.countryCode, "CG");
        test.done();
    },
    
    testParseAddressCGFromUS: function(test) {
        test.expect(7);
        var parsedAddress = new Address("M. Joseph Mbemba 12, rue Kakamoueka\nBRAZZAVILLE\nCongo - Brazzaville", {locale: 'en-US'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "M. Joseph Mbemba 12, rue Kakamoueka");
        test.equal(parsedAddress.locality, "BRAZZAVILLE");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "Congo - Brazzaville");
        test.equal(parsedAddress.countryCode, "CG");
        test.done();
    },
    
    testFormatAddressCG: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "M. Joseph Mbemba 12, rue Kakamoueka",
            locality: "BRAZZAVILLE",
            country: "Congo-Brazzaville",
            countryCode: "CG"
        }, {locale: 'fr-CG'});
        
        var expected = "M. Joseph Mbemba 12, rue Kakamoueka\nBRAZZAVILLE\nCongo-Brazzaville";
        var formatter = new AddressFmt({locale: 'fr-CG'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressCGFromUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "M. Joseph Mbemba 12, rue Kakamoueka",
            locality: "BRAZZAVILLE",
            country: "Congo - Brazzaville",
            countryCode: "CG"
        }, {locale: 'en-US'});
        
        var expected = "M. Joseph Mbemba 12, rue Kakamoueka\nBRAZZAVILLE\nCongo - Brazzaville";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
    
};