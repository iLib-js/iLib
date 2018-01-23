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

module.exports.testaddress_AL = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseALAddressNormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Rr 'Aleksander Moisiu', P. 15, Sh. 1, 1001-TIRANE, ALBANIA", {locale: 'sq-AL'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Rr 'Aleksander Moisiu', P. 15, Sh. 1");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "TIRANE");
        test.equal(parsedAddress.postalCode, "1001");
        test.equal(parsedAddress.country, "ALBANIA");
        test.equal(parsedAddress.countryCode, "AL");
        test.done();
    },
    
    testParseALAddressNoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Rr 'Aleksander Moisiu', P. 15, Sh. 1, TIRANE, ALBANIA", {locale: 'sq-AL'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Rr 'Aleksander Moisiu', P. 15, Sh. 1");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "TIRANE");
        test.equal(parsedAddress.country, "ALBANIA");
        test.equal(parsedAddress.countryCode, "AL");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    
    testParseALAddressManyLines: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Rr 'Aleksander Moisiu'\nP. 15, Sh. 1\n1001-TIRANE\nALBANIA", {locale: 'sq-AL'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Rr 'Aleksander Moisiu', P. 15, Sh. 1");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "TIRANE");
        test.equal(parsedAddress.postalCode, "1001");
        test.equal(parsedAddress.country, "ALBANIA");
        test.equal(parsedAddress.countryCode, "AL");
        test.done();
    },
    
    testParseALAddressOneLine: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Rr 'Aleksander Moisiu', P. 15, Sh. 1, 1001-TIRANE, ALBANIA", {locale: 'sq-AL'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Rr 'Aleksander Moisiu', P. 15, Sh. 1");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "TIRANE");
        test.equal(parsedAddress.postalCode, "1001");
        test.equal(parsedAddress.country, "ALBANIA");
        test.equal(parsedAddress.countryCode, "AL");
        test.done();
    },
    
    testParseALAddressSuperfluousWhitespace: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Rr 'Aleksander Moisiu', P. 15, Sh. 1  \n\t\n 1001-TIRANE\t\n\n ALBANIA  \n  \t\t\t", {locale: 'sq-AL'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Rr 'Aleksander Moisiu', P. 15, Sh. 1");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "TIRANE");
        test.equal(parsedAddress.postalCode, "1001");
        test.equal(parsedAddress.country, "ALBANIA");
        test.equal(parsedAddress.countryCode, "AL");
        test.done();
    },
    
    testParseALAddressNoDelimiters: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Rr 'Aleksander Moisiu' P. 15 Sh. 1 1001-TIRANE ALBANIA", {locale: 'sq-AL'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Rr 'Aleksander Moisiu' P. 15 Sh. 1");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "TIRANE");
        test.equal(parsedAddress.postalCode, "1001");
        test.equal(parsedAddress.country, "ALBANIA");
        test.equal(parsedAddress.countryCode, "AL");
        test.done();
    },
    
    testParseALAddressSpecialChars: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Rr 'Aleksander Moisiu', P. 15, Sh. 1, 1001-TIRANE, ALBANIA", {locale: 'sq-AL'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Rr 'Aleksander Moisiu', P. 15, Sh. 1");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "TIRANE");
        test.equal(parsedAddress.postalCode, "1001");
        test.equal(parsedAddress.country, "ALBANIA");
        test.equal(parsedAddress.countryCode, "AL");
        test.done();
    },
    
    testParseALAddressFromUS: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Rr 'Aleksander Moisiu', P. 15, Sh. 1, 1001-TIRANE, ALBANIA", {locale: 'en-US'});
        
        // the country name is in English because this address is for a contact in a US database
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Rr 'Aleksander Moisiu', P. 15, Sh. 1");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "TIRANE");
        test.equal(parsedAddress.postalCode, "1001");
        test.equal(parsedAddress.country, "ALBANIA");
        test.equal(parsedAddress.countryCode, "AL");
        test.done();
    },
    
    testFormatAddressAL: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Rr 'Aleksander Moisiu', P. 15, Sh. 1",
            locality: "TIRANE",
            postalCode: "1001",
            country: "ALBANIA",
            countryCode: "AL"
        }, {locale: 'sq-AL'});
        
        var expected = "Rr 'Aleksander Moisiu', P. 15, Sh. 1\n1001-TIRANE\nALBANIA";
        var formatter = new AddressFmt({locale: 'sq-AL'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressALFromUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Rr 'Aleksander Moisiu', P. 15, Sh. 1",
            postalCode: "1001",
            locality: "TIRANE",
            country: "ALBANIA",
            countryCode: "AL"
        }, {locale: 'en-US'});
        
        var expected = "Rr 'Aleksander Moisiu', P. 15, Sh. 1\n1001-TIRANE\nALBANIA";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
    
};