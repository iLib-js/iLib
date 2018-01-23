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

module.exports.testaddress_AU = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAUAddressNormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Level 5, 48 Pirrama Road,\nPyrmont, NSW 2009\nAustralia", {locale: 'en-AU'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Level 5, 48 Pirrama Road");
        test.equal(parsedAddress.locality, "Pyrmont");
        test.equal(parsedAddress.region, "NSW");
        test.equal(parsedAddress.postalCode, "2009");
        test.equal(parsedAddress.country, "Australia");
        test.equal(parsedAddress.countryCode, "AU");
        test.done();
    },
    
    testParseAUAddressNoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Canberra Nara Centre,\n1 Constitution Ave\nCanberra City, Australia", {locale: 'en-AU'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Canberra Nara Centre, 1 Constitution Ave");
        test.equal(parsedAddress.locality, "Canberra City");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.country, "Australia");
        test.equal(parsedAddress.countryCode, "AU");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    
    testParseAUAddressNoCountry: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Trevarrick Rd\nSevenhill SA 5453", {locale: 'en-AU'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Trevarrick Rd");
        test.equal(parsedAddress.locality, "Sevenhill");
        test.equal(parsedAddress.region, "SA");
        test.equal(parsedAddress.postalCode, "5453");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "AU");
        test.done();
    },
    
    testParseAUAddressManyLines: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Dept of Treasury\nLangton Crs\nParkes\nACT 2600\nAustralia\n\n\n", {locale: 'en-AU'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Dept of Treasury, Langton Crs");
        test.equal(parsedAddress.locality, "Parkes");
        test.equal(parsedAddress.region, "ACT");
        test.equal(parsedAddress.postalCode, "2600");
        test.equal(parsedAddress.country, "Australia");
        test.equal(parsedAddress.countryCode, "AU");
        test.done();
    },
    
    testParseAUAddressOneLine: function(test) {
        test.expect(7);
        var parsedAddress = new Address("630 Beaufort St, Mt Lawley, WA 6050, Australia", {locale: 'en-AU'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "630 Beaufort St");
        test.equal(parsedAddress.locality, "Mt Lawley");
        test.equal(parsedAddress.region, "WA");
        test.equal(parsedAddress.postalCode, "6050");
        test.equal(parsedAddress.country, "Australia");
        test.equal(parsedAddress.countryCode, "AU");
        test.done();
    },
    
    testParseAUAddressSuperfluousWhitespace: function(test) {
        test.expect(7);
        var parsedAddress = new Address("\t\t\tPiccadilly\t\t\r  Lot 6B Spring \r\r\tGully Rd\nPiccadilly \n\t\rSA \r\t\n5151\nAustralia    \n\n\n", {locale: 'en-AU'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Piccadilly Lot 6B Spring Gully Rd");
        test.equal(parsedAddress.locality, "Piccadilly");
        test.equal(parsedAddress.region, "SA");
        test.equal(parsedAddress.postalCode, "5151");
        test.equal(parsedAddress.country, "Australia");
        test.equal(parsedAddress.countryCode, "AU");
        test.done();
    },
    
    testParseAUAddressNoDelimiters: function(test) {
        test.expect(7);
        var parsedAddress = new Address("630 Beaufort St Mt Lawley WA 6050 Australia", {locale: 'en-AU'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "630 Beaufort St");
        test.equal(parsedAddress.locality, "Mt Lawley");
        test.equal(parsedAddress.region, "WA");
        test.equal(parsedAddress.postalCode, "6050");
        test.equal(parsedAddress.country, "Australia");
        test.equal(parsedAddress.countryCode, "AU");
        test.done();
    },
    
    testParseAUAddressFromUS: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Shp1/ Wanneroo Rd\nLandsdale WA 6065\nAustralia", {locale: 'en-US'});
        
        // the country name is in English because this address is for a contact in a US database
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Shp1/ Wanneroo Rd");
        test.equal(parsedAddress.locality, "Landsdale");
        test.equal(parsedAddress.region, "WA");
        test.equal(parsedAddress.postalCode, "6065");
        test.equal(parsedAddress.country, "Australia");
        test.equal(parsedAddress.countryCode, "AU");
        test.done();
    },
    
    testFormatAddressAU: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Shp1/ Wanneroo Rd",
            locality: "Landsdale",
            region: "WA",
            postalCode: "6065",
            country: "Australia",
            countryCode: "AU"
        }, {locale: 'en-AU'});
        
        var expected = "Shp1/ Wanneroo Rd\nLandsdale WA 6065\nAustralia";
        var formatter = new AddressFmt({locale: 'en-AU'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressAUFromUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Shp1/ Wanneroo Rd",
            locality: "Landsdale",
            region: "WA",
            postalCode: "6065",
            country: "Australia",
            countryCode: "AU"
        }, {locale: 'en-US'});
        
        var expected = "Shp1/ Wanneroo Rd\nLandsdale WA 6065\nAustralia";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
    
};