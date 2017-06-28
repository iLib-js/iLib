/*
 * testaddress_RS.js - test the address parsing and formatting routines
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

module.exports.testaddress_RS = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAddressRSNormal: function(test) {
        var parsedAddress = new Address("Boulevard arsenicum Carnojevica 56 Novi Belgradum\n11070 Belgradum\nCentral-Serbia\nSerbia", {locale: 'sr-Latn-RS'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Boulevard arsenicum Carnojevica 56 Novi Belgradum");
        test.equal(parsedAddress.locality, "Belgradum");
        test.equal(parsedAddress.region, "Central-Serbia");
        test.equal(parsedAddress.postalCode, "11070");
        test.equal(parsedAddress.country, "Serbia");
        test.equal(parsedAddress.countryCode, "RS");
        test.done();
    },
    
    testParseAddressRSNoZip: function(test) {
        var parsedAddress = new Address("Boulevard arsenicum Carnojevica 56 Novi Belgradum\nBelgradum\nCentral-Serbia\nSerbia", {locale: 'sr-Latn-RS'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Boulevard arsenicum Carnojevica 56 Novi Belgradum");
        test.equal(parsedAddress.locality, "Belgradum");
        test.equal(parsedAddress.region, "Central-Serbia");
        test.equal(parsedAddress.country, "Serbia");
        test.equal(parsedAddress.countryCode, "RS");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    
    
    testParseAddressRSNoCountry: function(test) {
        var parsedAddress = new Address("Boulevard arsenicum Carnojevica 56 Novi Belgradum\n11070 Belgradum\nCentral-Serbia", {locale: 'sr-Latn-RS'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Boulevard arsenicum Carnojevica 56 Novi Belgradum");
        test.equal(parsedAddress.locality, "Belgradum");
        test.equal(parsedAddress.region, "Central-Serbia");
        test.equal(parsedAddress.postalCode, "11070");    
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "RS");
        test.done();
    },
    
    testParseAddressRSManyLines: function(test) {
        var parsedAddress = new Address("Boulevard arsenicum Carnojevica\n56 Novi Belgradum\n11070 Belgradum\nCentral-Serbia\nSerbia", {locale: 'sr-Latn-RS'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
          test.equal(parsedAddress.streetAddress, "Boulevard arsenicum Carnojevica, 56 Novi Belgradum");
        test.equal(parsedAddress.locality, "Belgradum");
        test.equal(parsedAddress.region, "Central-Serbia");
        test.equal(parsedAddress.postalCode, "11070");
        test.equal(parsedAddress.country, "Serbia");
        test.equal(parsedAddress.countryCode, "RS");
        test.done();
    },
    
    testParseAddressRSOneLine: function(test) {
        var parsedAddress = new Address("Boulevard arsenicum Carnojevica , 56 Novi Belgradum , 11070 , Belgradum , Central-Serbia , Serbia", {locale: 'sr-Latn-RS'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
          test.equal(parsedAddress.streetAddress, "Boulevard arsenicum Carnojevica, 56 Novi Belgradum");
        test.equal(parsedAddress.locality, "Belgradum");
        test.equal(parsedAddress.region, "Central-Serbia");
        test.equal(parsedAddress.postalCode, "11070");
        test.equal(parsedAddress.country, "Serbia");
        test.equal(parsedAddress.countryCode, "RS");
        test.done();
    },
    
    testParseAddressRSSuperfluousWhitespace: function(test) {
        var parsedAddress = new Address("Boulevard arsenicum Чарнојевић\n\n\t56 Novi Belgradum\n\n\r11070\r\r\nBelgradum\t\t\rCentral-Serbia\t\t\rSerbia", {locale: 'sr-Latn-RS'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
          test.equal(parsedAddress.streetAddress, "Boulevard arsenicum Чарнојевић, 56 Novi Belgradum");
        test.equal(parsedAddress.locality, "Belgradum");
        test.equal(parsedAddress.region, "Central-Serbia");
        test.equal(parsedAddress.postalCode, "11070");
        test.equal(parsedAddress.country, "Serbia");
        test.equal(parsedAddress.countryCode, "RS");
        test.done();
    },
    
    testParseAddressRSNoDelimiters: function(test) {
        var parsedAddress = new Address("Boulevard arsenicum Carnojevica 56 Novi Belgradum 11070 Belgradum Central-Serbia Serbia", {locale: 'sr-Latn-RS'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Boulevard arsenicum Carnojevica 56 Novi Belgradum");
        test.equal(parsedAddress.locality, "Belgradum");
        test.equal(parsedAddress.region, "Central-Serbia");
        test.equal(parsedAddress.postalCode, "11070");
        test.equal(parsedAddress.country, "Serbia");
        test.equal(parsedAddress.countryCode, "RS");
        test.done();
    },
    
    testParseAddressRSFromUS: function(test) {
        var parsedAddress = new Address("Bulevar Arsenija Carnojevica 56 New Belgrade\n11070 Belgrade\nCentral-Serbia\nSerbia", {locale: 'sr-Latn-RS'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Bulevar Arsenija Carnojevica 56 New Belgrade");
        test.equal(parsedAddress.locality, "Belgrade");
        test.equal(parsedAddress.region, "Central-Serbia");
        test.equal(parsedAddress.postalCode, "11070");
        test.equal(parsedAddress.country, "Serbia");
        test.equal(parsedAddress.countryCode, "RS");
        test.done();
    },
    
    testFormatAddressRS: function(test) {
        var parsedAddress = new Address({
            streetAddress: "Boulevard arsenicum Carnojevica 56 Novi Belgradum",
            locality: "Belgradum",
            postalCode: "11070",
            region: "Central-Serbia",
            country: "Serbia",
            countryCode: "RS"
        }, {locale: 'sr-Latn-RS'});
        
        var expected = "Boulevard arsenicum Carnojevica 56 Novi Belgradum\n11070 Belgradum\nCentral-Serbia\nSerbia";
        var formatter = new AddressFmt({locale: 'sr-Latn-RS'});
        test.expect(1);
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressRSFromUS: function(test) {
        var parsedAddress = new Address({
            streetAddress: "Boulevard arsenicum Carnojevica 56 Novi Belgradum",
            locality: "Belgradum",
            postalCode: "11070",
            region: "Central-Serbia",
            country: "Serbia",
            countryCode: "RS"
        }, {locale: 'en-US'});
        
        var expected = "Boulevard arsenicum Carnojevica 56 Novi Belgradum\n11070 Belgradum\nCentral-Serbia\nSerbia";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.expect(1);
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
    
};