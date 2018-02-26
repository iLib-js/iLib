/*
 * testaddress_SK.js - test the address parsing and formatting routines for Mexico
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

module.exports.testaddress_SK = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAddressSKNormal: function(test) {
        test.expect(7);
        
        var parsedAddress = new Address("Pawel Opatovský Gazdova 4\n010 01 ŽILINA 1\nSLOVAKIA", {locale: 'sk-SK'});
            test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Pawel Opatovský Gazdova 4");
        test.equal(parsedAddress.locality, "ŽILINA 1");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "010 01");
        test.equal(parsedAddress.country, "SLOVAKIA");
        test.equal(parsedAddress.countryCode, "SK");
        test.done();
    
    },
    
    testParseAddressSKOtherName: function(test) {
        test.expect(7);
        
    var parsedAddress = new Address("Slovenská Pošta, š.p. Partizánska Cesta 9\n975 99 BANSKÁ BYSTRICA 1\nSLOVAKIA", {locale: 'sk-SK'});
            test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Slovenská Pošta, š.p. Partizánska Cesta 9");
        test.equal(parsedAddress.locality, "BANSKÁ BYSTRICA 1");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "975 99");
        test.equal(parsedAddress.country, "SLOVAKIA");
        test.equal(parsedAddress.countryCode, "SK");
        test.done();
    
    },
    
    testParseAddressSKNoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Pawel Opatovský Gazdova 4\nŽILINA 1\nSLOVAKIA", {locale: 'sk-SK'});
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Pawel Opatovský Gazdova 4");
        test.equal(parsedAddress.locality, "ŽILINA 1");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "SLOVAKIA");
        test.equal(parsedAddress.countryCode, "SK");
        test.done();
    },
    
    testParseAddressSKNoCountry: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Pawel Opatovský Gazdova 4\n010 01 ŽILINA 1", {locale: 'sk-SK'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Pawel Opatovský Gazdova 4");
        test.equal(parsedAddress.locality, "ŽILINA 1");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "010 01");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "SK");
        test.done();
        
    },
    
    testParseAddressSKManyLines: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Pawel Opatovský\nGazdova 4\n010 01\nŽILINA 1\nSLOVAKIA", {locale: 'sk-SK'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Pawel Opatovský, Gazdova 4");
        test.equal(parsedAddress.locality, "ŽILINA 1");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "010 01");
        test.equal(parsedAddress.country, "SLOVAKIA");
        test.equal(parsedAddress.countryCode, "SK");
        test.done();
    },
    
    testParseAddressSKNoDelimiters: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Pawel Opatovský Gazdova 4 010 01 ŽILINA 1 SLOVAKIA", {locale: 'sk-SK'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Pawel Opatovský Gazdova 4");
        test.equal(parsedAddress.locality, "ŽILINA 1");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "010 01");
        test.equal(parsedAddress.country, "SLOVAKIA");
        test.equal(parsedAddress.countryCode, "SK");
        test.done();
    },
    
    
    testParseAddressSKFromUS: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Pawel Opatovský Gazdova 4\n010 01 ŽILINA 1\nSLOVAKIA", {locale: 'en-US'});
        
        // the country name is in English because this address is for a contact in a US database
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Pawel Opatovský Gazdova 4");
        test.equal(parsedAddress.locality, "ŽILINA 1");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "010 01");
        test.equal(parsedAddress.country, "SLOVAKIA");
        test.equal(parsedAddress.countryCode, "SK");
        test.done();
    },
    
    testFormatAddressSK: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Pawel Opatovský Gazdova 4",
            locality: "ŽILINA 1",
            region: null,
            postalCode: "010 01",
            country: "SLOVAKIA",
            countryCode: "SK"
        }, {locale: 'sk-SK'});
        
        var expected = "Pawel Opatovský Gazdova 4\n010 01 ŽILINA 1\nSLOVAKIA";
        var formatter = new AddressFmt({locale: 'sk-SK'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressSKFromUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Pawel Opatovský Gazdova 4",
            locality: "ŽILINA 1",
            region: null,
            postalCode: "010 01",
            country: "SLOVAKIA",
            countryCode: "SK"
        }, {locale: 'en-US'});
        
        var expected = "Pawel Opatovský Gazdova 4\n010 01 ŽILINA 1\nSLOVAKIA";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
    
};
