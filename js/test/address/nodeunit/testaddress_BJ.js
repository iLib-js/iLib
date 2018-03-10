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
 * See the License for the Specific language governing permissions and
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

module.exports.testaddress_BJ = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAddressBJNormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("03 BP 1000, COTONOU, BENIN", {locale: 'fr-BJ'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "BP 1000");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "COTONOU");
        test.equal(parsedAddress.postalCode, "03");
        test.equal(parsedAddress.country, "BENIN");
        test.equal(parsedAddress.countryCode, "BJ");
        test.done();
    },
    
    testParseAddressBJNoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("BP 1000, COTONOU, BENIN", {locale: 'fr-BJ'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "BP 1000");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "COTONOU");
        test.equal(parsedAddress.country, "BENIN");
        test.equal(parsedAddress.countryCode, "BJ");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    
    testParseAddressBJManyLines: function(test) {
        test.expect(7);
        var parsedAddress = new Address("03 BP 1000\nCOTONOU\nBENIN", {locale: 'fr-BJ'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "BP 1000");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "COTONOU");
        test.equal(parsedAddress.postalCode, "03");
        test.equal(parsedAddress.country, "BENIN");
        test.equal(parsedAddress.countryCode, "BJ");
        test.done();
    },
    
    testParseAddressBJOneLine: function(test) {
        test.expect(7);
        var parsedAddress = new Address("03 BP 1000, COTONOU, BENIN", {locale: 'fr-BJ'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "BP 1000");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "COTONOU");
        test.equal(parsedAddress.postalCode, "03");
        test.equal(parsedAddress.country, "BENIN");
        test.equal(parsedAddress.countryCode, "BJ");
        test.done();
    },
    
    testParseAddressBJSuperfluousWhitespace: function(test) {
        test.expect(7);
        var parsedAddress = new Address("03 BP 1000  \n\t\n COTONOU\t\n\n BENIN  \n  \t\t\t", {locale: 'fr-BJ'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "BP 1000");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "COTONOU");
        test.equal(parsedAddress.postalCode, "03");
        test.equal(parsedAddress.country, "BENIN");
        test.equal(parsedAddress.countryCode, "BJ");
        test.done();
    },
    
    testParseAddressBJNoDelimiters: function(test) {
        test.expect(7);
        var parsedAddress = new Address("03 BP 1000 COTONOU BENIN", {locale: 'fr-BJ'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "BP 1000");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "COTONOU");
        test.equal(parsedAddress.postalCode, "03");
        test.equal(parsedAddress.country, "BENIN");
        test.equal(parsedAddress.countryCode, "BJ");
        test.done();
    },
    
    testParseAddressBJSpecialChars: function(test) {
        test.expect(7);
        var parsedAddress = new Address("03 BP 1000, COTONOU, BENIN", {locale: 'fr-BJ'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "BP 1000");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "COTONOU");
        test.equal(parsedAddress.postalCode, "03");
        test.equal(parsedAddress.country, "BENIN");
        test.equal(parsedAddress.countryCode, "BJ");
        test.done();
    },
    
    testParseAddressBJFromUS: function(test) {
        test.expect(7);
        var parsedAddress = new Address("03 BP 1000, COTONOU, BENIN", {locale: 'en-US'});
        
        // the country name is in English because this address is for a contact in a US database
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "BP 1000");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "COTONOU");
        test.equal(parsedAddress.postalCode, "03");
        test.equal(parsedAddress.country, "BENIN");
        test.equal(parsedAddress.countryCode, "BJ");
        test.done();
    },
    
    testFormatAddressBJ: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "BP 1000",
            locality: "COTONOU",
            postalCode: "03",
            country: "BENIN",
            countryCode: "BJ"
        }, {locale: 'fr-BJ'});
        
        var expected = "03 BP 1000\nCOTONOU\nBENIN";
        var formatter = new AddressFmt({locale: 'fr-BJ'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressBJFromUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "BP 1000",
            postalCode: "03",
            country: "BENIN",
            locality: "COTONOU",
            countryCode: "BJ"
        }, {locale: 'en-US'});
        
        var expected = "03 BP 1000\nCOTONOU\nBENIN";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
    
};
