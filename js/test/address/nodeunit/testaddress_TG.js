/*
 * testaddress_TZ.js - test the address parsing and formatting routines
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

module.exports.testaddress_TG = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAddressTGNormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("M. Nicolas Ayi Patatu B.P. 526\nLome\nTogo", {locale: 'fr-TG'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "M. Nicolas Ayi Patatu B.P. 526");
        test.equal(parsedAddress.locality, "Lome");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "Togo");
        test.equal(parsedAddress.countryCode, "TG");
        test.done();
    },
    
    
    testParseAddressTGNoCountry: function(test) {
        test.expect(7);
        var parsedAddress = new Address("M. Nicolas Ayi Patatu B.P. 526\nLome", {locale: 'fr-TG'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "M. Nicolas Ayi Patatu B.P. 526");
        test.equal(parsedAddress.locality, "Lome");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "TG");
        test.done();
    },
    
    testParseAddressTGManyLines: function(test) {
        test.expect(7);
        var parsedAddress = new Address("M. Nicolas Ayi Patatu\nB.P. 526\nLome\nTogo\n\n\n", {locale: 'fr-TG'});
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "M. Nicolas Ayi Patatu, B.P. 526");
        test.equal(parsedAddress.locality, "Lome");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "Togo");
        test.equal(parsedAddress.countryCode, "TG");
        test.done();
    },
    
    testParseAddressTGOneLine: function(test) {
        test.expect(7);
        var parsedAddress = new Address("M. Nicolas Ayi Patatu , B.P. 526 , Lome , Togo", {locale: 'fr-TG'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "M. Nicolas Ayi Patatu, B.P. 526");
        test.equal(parsedAddress.locality, "Lome");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "Togo");
        test.equal(parsedAddress.countryCode, "TG");
        test.done();
    },
    
    testParseAddressTGSuperfluousWhitespace: function(test) {
        test.expect(7);
        var parsedAddress = new Address("\t\t\t\tM. Nicolas Ayi Patatu\t\t\tB.P.\t\r\r526\t\nLome\n\tTogo\n\n\n", {locale: 'fr-TG'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "M. Nicolas Ayi Patatu B.P. 526");
        test.equal(parsedAddress.locality, "Lome");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "Togo");
        test.equal(parsedAddress.countryCode, "TG");
        test.done();
    },
    
    testParseAddressTGNoDelimiters: function(test) {
        test.expect(7);
        var parsedAddress = new Address("M. Nicolas Ayi Patatu B.P. 526 Lome Togo", {locale: 'fr-TG'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "M. Nicolas Ayi Patatu B.P. 526");
        test.equal(parsedAddress.locality, "Lome");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "Togo");
        test.equal(parsedAddress.countryCode, "TG");
        test.done();
    },
    
    testParseAddressTGFromUS: function(test) {
        test.expect(7);
        var parsedAddress = new Address("M. Nicolas Ayi Patatu B.P. 526\nLome\nTogo", {locale: 'en-US'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "M. Nicolas Ayi Patatu B.P. 526");
        test.equal(parsedAddress.locality, "Lome");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "Togo");
        test.equal(parsedAddress.countryCode, "TG");
        test.done();
    },
    
    testFormatAddressTG: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "M. Nicolas Ayi Patatu B.P. 526",
            locality: "Lome",
            country: "Togo",
            countryCode: "TG"
        }, {locale: 'fr-TG'});
        
        var expected = "M. Nicolas Ayi Patatu B.P. 526\nLome\nTogo";
        var formatter = new AddressFmt({locale: 'fr-TG'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressTGFromUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "M. Nicolas Ayi Patatu B.P. 526",
            locality: "Lome",
            country: "Togo",
            countryCode: "TG"
        }, {locale: 'en-US'});
        
        var expected = "M. Nicolas Ayi Patatu B.P. 526\nLome\nTogo";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
    
};
