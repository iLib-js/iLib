/*
 * testaddress_PY.js - test the address parsing and formatting routines
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

module.exports.testaddress_MW = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAddressMWNormal: function(test) {
        var parsedAddress = new Address("Mr. W.M. Lundu P.O. Box 30500\nLILONGWE 3\nMALAWI", {locale: 'en-MW'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Mr. W.M. Lundu P.O. Box 30500");
        test.equal(parsedAddress.locality, "LILONGWE 3");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "MALAWI");
        test.equal(parsedAddress.countryCode, "MW");
        test.done();
    },
    
    testParseAddressMWNoZip: function(test) {
        var parsedAddress = new Address("Mr. W.M. Lundu P.O. Box 30500\nLILONGWE 3\nMALAWI", {locale: 'en-MW'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Mr. W.M. Lundu P.O. Box 30500");
        test.equal(parsedAddress.locality, "LILONGWE 3");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.country, "MALAWI");
        test.equal(parsedAddress.countryCode, "MW");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    
    testParseAddressMWNoCountry: function(test) {
        var parsedAddress = new Address("Mr. W.M. Lundu P.O. Box 30500\nLILONGWE 3", {locale: 'en-MW'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Mr. W.M. Lundu P.O. Box 30500");
        test.equal(parsedAddress.locality, "LILONGWE 3");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "MW");
        test.done();
    },
    
    testParseAddressMWManyLines: function(test) {
        var parsedAddress = new Address("Mr. W.M. Lundu\nP.O. Box 30500\n\n\n\n\nLILONGWE 3\n\n\nMALAWI\n\n\n", {locale: 'en-MW'});
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Mr. W.M. Lundu, P.O. Box 30500");
        test.equal(parsedAddress.locality, "LILONGWE 3");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "MALAWI");
        test.equal(parsedAddress.countryCode, "MW");
        test.done();
    },
    
    testParseAddressMWOneLine: function(test) {
        var parsedAddress = new Address("Mr. W.M. Lundu , P.O. Box 30500 , LILONGWE 3 , MALAWI", {locale: 'en-MW'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Mr. W.M. Lundu, P.O. Box 30500");
        test.equal(parsedAddress.locality, "LILONGWE 3");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "MALAWI");
        test.equal(parsedAddress.countryCode, "MW");
        test.done();
    },
    
    testParseAddressMWSuperfluousWhitespace: function(test) {
        var parsedAddress = new Address("\t\t\tMr. W.M. Lundu\t\t\rP.O. Box 30500\t\t\r\n\n\n\nLILONGWE 3\n\t MALAWI\n\n\n", {locale: 'en-MW'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Mr. W.M. Lundu P.O. Box 30500");
        test.equal(parsedAddress.locality, "LILONGWE 3");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "MALAWI");
        test.equal(parsedAddress.countryCode, "MW");
        test.done();
    },
    
    testParseAddressMWNoDelimiters: function(test) {
        var parsedAddress = new Address("Mr. W.M. Lundu P.O. Box 30500  LILONGWE 3 MALAWI", {locale: 'en-MW'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Mr. W.M. Lundu P.O. Box 30500");
        test.equal(parsedAddress.locality, "LILONGWE 3");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "MALAWI");
        test.equal(parsedAddress.countryCode, "MW");
        test.done();
    },
    
    testParseAddressMWFromUS: function(test) {
        var parsedAddress = new Address("Mr. W.M. Lundu P.O. Box 30500\n LILONGWE 3\nMALAWI", {locale: 'en-US'});
        
        // the country name is in German because this address is for a contact in a German database
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Mr. W.M. Lundu P.O. Box 30500");
        test.equal(parsedAddress.locality, "LILONGWE 3");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "MALAWI");
        test.equal(parsedAddress.countryCode, "MW");
        test.done();
    },
    
    testFormatAddressMW: function(test) {
        var parsedAddress = new Address({
            streetAddress: "Mr. W.M. Lundu P.O. Box 30500",
            locality: "LILONGWE 3",
            country: "MALAWI",
            countryCode: "MW"
        }, {locale: 'en-MW'});
        
        var expected = "Mr. W.M. Lundu P.O. Box 30500\nLILONGWE 3\nMALAWI";
        var formatter = new AddressFmt({locale: 'en-MW'});
        test.expect(1);
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressMWFromUS: function(test) {
        var parsedAddress = new Address({
            streetAddress: "Mr. W.M. Lundu P.O. Box 30500",
            locality: "LILONGWE 3",
            country: "MALAWI",
            countryCode: "MW"
        }, {locale: 'en-US'});
        
        var expected = "Mr. W.M. Lundu P.O. Box 30500\nLILONGWE 3\nMALAWI";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.expect(1);
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
    
};