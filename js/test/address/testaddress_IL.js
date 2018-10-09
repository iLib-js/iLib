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
    var Address = require("../../lib/Address.js");
}
if (typeof(AddressFmt) === "undefined") {
    var AddressFmt = require("../../lib/AddressFmt.js");
}
if (typeof(ilib) === "undefined") {
    var ilib = require("../../lib/ilib.js");
}

module.exports.testaddress_IL = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAddressILNormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Yisrael Yisraeli\nHaDoar 1\nJerusalem 12345\nIsrael", {locale: 'he-IL'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Yisrael Yisraeli, HaDoar 1");
        test.equal(parsedAddress.locality, "Jerusalem");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "12345");
        test.equal(parsedAddress.country, "Israel");
        test.equal(parsedAddress.countryCode, "IL");
        test.done();
    },
    
    testParseAddressILNoCountry: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Yisrael Yisraeli, HaDoar 1\nJerusalem 12345", {locale: 'he-IL'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Yisrael Yisraeli, HaDoar 1");
        test.equal(parsedAddress.locality, "Jerusalem");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "12345");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "IL");
        test.done();
    },
    
    
    
    testParseAddressILOneLine: function(test) {
        test.expect(7);
        var parsedAddress = new Address("R.O.Y. International , PO Box 13056, TEL-AVIV ISL-61130, Israel", {locale: 'he-IL'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "R.O.Y. International, PO Box 13056");
        test.equal(parsedAddress.locality, "TEL-AVIV");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "ISL-61130");
        test.equal(parsedAddress.country, "Israel");
        test.equal(parsedAddress.countryCode, "IL");
        test.done();
    },
    
    testParseAddressILSuperfluousWhitespace: function(test) {
        test.expect(7);
        var parsedAddress = new Address("\t\t\tR.O.Y. International\n\t\nPO Box 13056\n \r\n\r\rTEL-AVIV    ISL-61130\r\r\n    Israel\t\n\n\n", {locale: 'he-IL'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "R.O.Y. International, PO Box 13056");
        test.equal(parsedAddress.locality, "TEL-AVIV");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "ISL-61130");
        test.equal(parsedAddress.country, "Israel");
        test.equal(parsedAddress.countryCode, "IL");
        test.done();
    },
    
    testParseAddressILNoDelimiters: function(test) {
        test.expect(7);
        var parsedAddress = new Address("R.O.Y. International PO Box 13056 TEL-AVIV ISL-61130 Israel", {locale: 'he-IL'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "R.O.Y. International PO Box 13056");
        test.equal(parsedAddress.locality, "TEL-AVIV");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "ISL-61130");
        test.equal(parsedAddress.country, "Israel");
        test.equal(parsedAddress.countryCode, "IL");
        test.done();
    },
    
    /*
    testParseAddressILSpecialChars: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Työpajankatu 13,IL-00580 Helsinki, Israel", {locale: 'he-IL'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Työpajankatu 13");
        test.equal(parsedAddress.locality, "Helsinki");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "IL-00580");
        test.equal(parsedAddress.country, "Israel");
        test.equal(parsedAddress.countryCode, "IL");
        test.done();
    },
    */
    
    testParseAddressILFromUS: function(test) {
        test.expect(7);
        var parsedAddress = new Address("R.O.Y. International\nPO Box 13056\nTEL-AVIV, Israel", {locale: 'en-US'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "R.O.Y. International, PO Box 13056");
        test.equal(parsedAddress.locality, "TEL-AVIV");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "Israel");
        test.equal(parsedAddress.countryCode, "IL");
        test.done();
    },
    
    testFormatAddressIL: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "R.O.Y. International, PO Box 13056",
            locality: "TEL-AVIV",
            country: "Israel",
            countryCode: "IL",
        }, {locale: 'he-IL'});
        
        var expected = "R.O.Y. International, PO Box 13056\nTEL-AVIV\nIsrael";
        var formatter = new AddressFmt({locale: 'he-IL'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    
    
    testFormatAddressILFromUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "R.O.Y. International, PO Box 13056, Albertinkatu 36 B",
            locality: "TEL-AVIV",
            country: "Israel",
            countryCode: "IL",
        }, {locale: 'en-US'});
        
        var expected = "R.O.Y. International, PO Box 13056, Albertinkatu 36 B\nTEL-AVIV\nIsrael";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
    
};
