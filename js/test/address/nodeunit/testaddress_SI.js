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

module.exports.testaddress_SI = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAddressSINormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Marija Borisek Prvomajska ulica 20\n1270 LITIJA\nSLOVENIA", {locale: 'sl-SI'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Marija Borisek Prvomajska ulica 20");
        test.equal(parsedAddress.locality, "LITIJA");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "1270");
        test.equal(parsedAddress.country, "SLOVENIA");
        test.equal(parsedAddress.countryCode, "SI");
        test.done();
    },
    
    testParseAddressSINoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Prešernova 31\n1000 Ljubljana\nSlovenia", {locale: 'sl-SI'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Prešernova 31");
        test.equal(parsedAddress.locality, "Ljubljana");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "1000");
        test.equal(parsedAddress.country, "Slovenia");
        test.equal(parsedAddress.countryCode, "SI");
        test.done();
    },
    
    testParseAddressSINoCountry: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Marija Borisek , Prvomajska , ulica 20 , 1270 LITIJA", {locale: 'sl-SI'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Marija Borisek, Prvomajska, ulica 20");
        test.equal(parsedAddress.locality, "LITIJA");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "1270");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "SI");
        test.done();
    },
    
    testParseAddressSIManyLines: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Marija Borisek\nPrvomajska ulica 20\n1270 LITIJA\nSLOVENIA", {locale: 'sl-SI'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Marija Borisek, Prvomajska ulica 20");
        test.equal(parsedAddress.locality, "LITIJA");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "1270");
        test.equal(parsedAddress.country, "SLOVENIA");
        test.equal(parsedAddress.countryCode, "SI");
        test.done();
    },
    
    testParseAddressSIOneLine: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Marija Borisek , Prvomajska ulica 20 , 1270 , LITIJA , SLOVENIA", {locale: 'sl-SI'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Marija Borisek, Prvomajska ulica 20");
        test.equal(parsedAddress.locality, "LITIJA");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "1270");
        test.equal(parsedAddress.country, "SLOVENIA");
        test.equal(parsedAddress.countryCode, "SI");
        test.done();
    },
    
    
    
    testParseAddressSINoDelimiters: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Marija Borisek Prvomajska ulica 20 1270 LITIJA SLOVENIA", {locale: 'sl-SI'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Marija Borisek Prvomajska ulica 20");
        test.equal(parsedAddress.locality, "LITIJA");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "1270");
        test.equal(parsedAddress.country, "SLOVENIA");
        test.equal(parsedAddress.countryCode, "SI");
        test.done();
    },
    
    
    testParseAddressSIFromUS: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Marija Borisek Prvomajska ulica 20\nLITIJA 1270\nSLOVENIA", {locale: 'en-US'});
        
        // the country name is in English because this address is for a contact in a US database
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Marija Borisek Prvomajska ulica 20");
        test.equal(parsedAddress.locality, "LITIJA");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "1270");
        test.equal(parsedAddress.country, "SLOVENIA");
        test.equal(parsedAddress.countryCode, "SI");
        test.done();
    },
    
    testFormatAddressSI: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Marija Borisek Prvomajska ulica 20",
            locality: "LITIJA",
            region: null,
            postalCode: "1270",
            country: "SLOVENIA",
            countryCode: "SI"
        }, {locale: 'sl-SI'});
        
        var expected = "Marija Borisek Prvomajska ulica 20\n1270 LITIJA\nSLOVENIA";
        var formatter = new AddressFmt({locale: 'sl-SI'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressSIFromUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Marija Borisek Prvomajska ulica 20",
            locality: "LITIJA",
            region: null,
            postalCode: "1270",
            country: "SLOVENIA",
            countryCode: "SI"
        }, {locale: 'en-US'});
        
        var expected = "Marija Borisek Prvomajska ulica 20\n1270 LITIJA\nSLOVENIA";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
    
};
