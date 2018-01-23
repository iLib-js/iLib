/*
 * testaddress_ZM.js - test the address parsing and formatting routines
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
if (typeof(Address) === "undefined") {
    var Address = require("../../../lib/Address.js");
}
if (typeof(AddressFmt) === "undefined") {
    var AddressFmt = require("../../../lib/AddressFmt.js");
}
if (typeof(Address) === "undefined") {
    var Address = require("../../../lib/Address.js");
}
if (typeof(AddressFmt) === "undefined") {
    var AddressFmt = require("../../../lib/AddressFmt.js");
}
if (typeof(ilib) === "undefined") {
    var ilib = require("../../../lib/ilib.js");
}

module.exports.testaddress_LK = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAddressLKNormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Marvan Sangakkara 25/1, Cyril Jansz Mawatha\nPANADURA 12500\nSri Lanka", {locale: 'en-LK'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Marvan Sangakkara 25/1, Cyril Jansz Mawatha");
        test.equal(parsedAddress.locality, "PANADURA");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "12500");
        test.equal(parsedAddress.country, "Sri Lanka");
        test.equal(parsedAddress.countryCode, "LK");
        test.done();
    },
    
    testParseAddressLKNoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Marvan Sangakkara 25/1, Cyril Jansz Mawatha\nPANADURA\nSri Lanka", {locale: 'en-LK'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Marvan Sangakkara 25/1, Cyril Jansz Mawatha");
        test.equal(parsedAddress.locality, "PANADURA");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.country, "Sri Lanka");
        test.equal(parsedAddress.countryCode, "LK");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    
    testParseAddressLKNoCountry: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Marvan Sangakkara 25/1, Cyril Jansz Mawatha\nPANADURA 12500", {locale: 'en-LK'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Marvan Sangakkara 25/1, Cyril Jansz Mawatha");
        test.equal(parsedAddress.locality, "PANADURA");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "12500");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "LK");
        test.done();
    },
    
    testParseAddressLKManyLines: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Marvan Sangakkara\n25/1\nCyril Jansz\nMawatha\nPANADURA\n12500\nSri Lanka\n\n\n", {locale: 'en-LK'});
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Marvan Sangakkara, 25/1, Cyril Jansz, Mawatha");
        test.equal(parsedAddress.locality, "PANADURA");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "12500");
        test.equal(parsedAddress.country, "Sri Lanka");
        test.equal(parsedAddress.countryCode, "LK");
        test.done();
    },
    
    testParseAddressLKOneLine: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Marvan Sangakkara , 25/1 , Cyril Jansz , Mawatha ,  PANADURA , 12500 , Sri Lanka", {locale: 'en-LK'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Marvan Sangakkara, 25/1, Cyril Jansz, Mawatha");
        test.equal(parsedAddress.locality, "PANADURA");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "12500");
        test.equal(parsedAddress.country, "Sri Lanka");
        test.equal(parsedAddress.countryCode, "LK");
        test.done();
    },
    
    testParseAddressLKSuperfluousWhitespace: function(test) {
        test.expect(7);
        var parsedAddress = new Address("\t\t\tMarvan Sangakkara\n\t\t\t25/1,\t\t\t\r\r Cyril Jansz \n \r \tMawatha \n\t\nPANADURA\n\t 12500\t\nSri Lanka\n\n\n", {locale: 'en-LK'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Marvan Sangakkara, 25/1, Cyril Jansz, Mawatha");
        test.equal(parsedAddress.locality, "PANADURA");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "12500");
        test.equal(parsedAddress.country, "Sri Lanka");
        test.equal(parsedAddress.countryCode, "LK");
        test.done();
    },
    
    testParseAddressLKNoDelimiters: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Marvan Sangakkara 25/1 Cyril Jansz Mawatha\nPANADURA 12500 Sri Lanka", {locale: 'en-LK'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Marvan Sangakkara 25/1 Cyril Jansz Mawatha");
        test.equal(parsedAddress.locality, "PANADURA");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "12500");
        test.equal(parsedAddress.country, "Sri Lanka");
        test.equal(parsedAddress.countryCode, "LK");
        test.done();
    },
    
    testParseAddressLKFromUS: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Marvan Sangakkara 25/1, Cyril Jansz Mawatha\nPANADURA 56001\nSri Lanka", {locale: 'en-US'});
        
        
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Marvan Sangakkara 25/1, Cyril Jansz Mawatha");
        test.equal(parsedAddress.locality, "PANADURA");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "56001");
        test.equal(parsedAddress.country, "Sri Lanka");
        test.equal(parsedAddress.countryCode, "LK");
        test.done();
    },
    
    testFormatAddressLK: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Marvan Sangakkara 25/1, Cyril Jansz Mawatha",
            locality: "PANADURA",
            postalCode: "56001",
            country: "Sri Lanka",
            countryCode: "LK"
        }, {locale: 'en-LK'});
        
        var expected = "Marvan Sangakkara 25/1, Cyril Jansz Mawatha\nPANADURA 56001\nSri Lanka";
        var formatter = new AddressFmt({locale: 'en-LK'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressLKFromUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Marvan Sangakkara 25/1, Cyril Jansz Mawatha",
            locality: "PANADURA",
            postalCode: "56001",
            country: "Sri Lanka",
            countryCode: "LK"
        }, {locale: 'en-US'});
        
        var expected = "Marvan Sangakkara 25/1, Cyril Jansz Mawatha\nPANADURA 56001\nSri Lanka";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
    
};