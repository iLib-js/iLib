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

module.exports.testaddress_CD = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAddressCDNormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("M. Mashala Kashama Kashele, B.P. 7948, KINSHASA 1, république démocratique du congo", {locale: 'fr-CD'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "M. Mashala Kashama Kashele, B.P. 7948");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "KINSHASA 1");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "république démocratique du congo");
        test.equal(parsedAddress.countryCode, "CD");
        test.done();
    },
    
    testParseAddressCDNoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("M. Mashala Kashama Kashele, B.P. 7948, KINSHASA 1, république démocratique du congo", {locale: 'fr-CD'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "M. Mashala Kashama Kashele, B.P. 7948");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "KINSHASA 1");
        test.equal(parsedAddress.country, "république démocratique du congo");
        test.equal(parsedAddress.countryCode, "CD");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    
    testParseAddressCDManyLines: function(test) {
        test.expect(7);
        var parsedAddress = new Address("M. Mashala Kashama Kashele, B.P. 7948\nKINSHASA 1\nrépublique démocratique du congo", {locale: 'fr-CD'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "M. Mashala Kashama Kashele, B.P. 7948");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "KINSHASA 1");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "république démocratique du congo");
        test.equal(parsedAddress.countryCode, "CD");
        test.done();
    },
    
    testParseAddressCDOneLine: function(test) {
        test.expect(7);
        var parsedAddress = new Address("M. Mashala Kashama Kashele, B.P. 7948, KINSHASA 1, république démocratique du congo", {locale: 'fr-CD'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "M. Mashala Kashama Kashele, B.P. 7948");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "KINSHASA 1");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "république démocratique du congo");
        test.equal(parsedAddress.countryCode, "CD");
        test.done();
    },
    
    testParseAddressCDSuperfluousWhitespace: function(test) {
        test.expect(7);
        var parsedAddress = new Address("M. Mashala Kashama Kashele, B.P. 7948  \n\t\n KINSHASA 1\t\n\n république démocratique du congo  \n  \t\t\t", {locale: 'fr-CD'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "M. Mashala Kashama Kashele, B.P. 7948");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "KINSHASA 1");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "république démocratique du congo");
        test.equal(parsedAddress.countryCode, "CD");
        test.done();
    },
    
    testParseAddressCDNoDelimiters: function(test) {
        test.expect(7);
        var parsedAddress = new Address("M. Mashala Kashama Kashele B.P. 7948 KINSHASA 1 république démocratique du congo", {locale: 'fr-CD'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "M. Mashala Kashama Kashele B.P. 7948");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "KINSHASA 1");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "république démocratique du congo");
        test.equal(parsedAddress.countryCode, "CD");
        test.done();
    },
    
    testParseAddressCDSpecialChars: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Office congolais des postes, et télécommunications,B.P. 7948, KINSHASA 1, république démocratique du congo", {locale: 'fr-CD'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Office congolais des postes, et télécommunications, B.P. 7948");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "KINSHASA 1");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "république démocratique du congo");
        test.equal(parsedAddress.countryCode, "CD");
        test.done();
    },
    
    testParseAddressCDFromUS: function(test) {
        test.expect(7);
        var parsedAddress = new Address("M. Mashala Kashama Kashele, B.P. 7948, KINSHASA 1, république démocratique du congo", {locale: 'en-US'});
        
        // the country name is in English because this address is for a contact in a US database
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "M. Mashala Kashama Kashele, B.P. 7948");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "KINSHASA 1");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "république démocratique du congo");
        test.equal(parsedAddress.countryCode, "CD");
        test.done();
    },
    
    testFormatAddressCD: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "M. Mashala Kashama Kashele\nB.P. 7948",
            locality: "KINSHASA 1",
            country: "république démocratique du congo",
            countryCode: "AM"
        }, {locale: 'fr-CD'});
        
        var expected = "M. Mashala Kashama Kashele\nB.P. 7948\nKINSHASA 1\nrépublique démocratique du congo";
        var formatter = new AddressFmt({locale: 'fr-CD'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressCDFromUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "M. Mashala Kashama Kashele\nB.P. 7948",
            country: "république démocratique du congo",
            locality: "KINSHASA 1",
            countryCode: "AM"
        }, {locale: 'en-US'});
        
        var expected = "M. Mashala Kashama Kashele\nB.P. 7948\nKINSHASA 1\nrépublique démocratique du congo";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
    
};