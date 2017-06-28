/*
 * testaddress_VE.js - test the address parsing and formatting routines
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

module.exports.testaddress_HN = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAddressHNNormal: function(test) {
        var parsedAddress = new Address("Sr. Juan C. Martel\nCM1102 LAS LAJAS, Comayagua\nHONDURAS", {locale: 'es-HN'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Sr. Juan C. Martel");
        test.equal(parsedAddress.locality, "LAS LAJAS");
        test.equal(parsedAddress.region, "Comayagua");
        test.equal(parsedAddress.postalCode, "CM1102");
        test.equal(parsedAddress.country, "HONDURAS");
        test.equal(parsedAddress.countryCode, "HN");
        test.done();
    },
    
    testParseAddressHNNoZip: function(test) {
        var parsedAddress = new Address("Sr. Juan C. Martel\nLAS LAJAS, Comayagua\nHONDURAS", {locale: 'es-HN'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Sr. Juan C. Martel");
        test.equal(parsedAddress.locality, "LAS LAJAS");
        test.equal(parsedAddress.region, "Comayagua");
        test.equal(parsedAddress.country, "HONDURAS");
        test.equal(parsedAddress.countryCode, "HN");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    
    testParseAddressHNNoCountry: function(test) {
        var parsedAddress = new Address("Sr. Juan C. Martel\nCM1102 LAS LAJAS, Comayagua", {locale: 'es-HN'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Sr. Juan C. Martel");
        test.equal(parsedAddress.locality, "LAS LAJAS");
        test.equal(parsedAddress.region, "Comayagua");
        test.equal(parsedAddress.postalCode, "CM1102");    
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "HN");
        test.done();
    },
    
    testParseAddressHNManyLines: function(test) {
        var parsedAddress = new Address("Sr. Juan C. Martel\nCM1102 LAS LAJAS, Comayagua\nHONDURAS", {locale: 'es-HN'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
          test.equal(parsedAddress.streetAddress, "Sr. Juan C. Martel");
        test.equal(parsedAddress.locality, "LAS LAJAS");
        test.equal(parsedAddress.region, "Comayagua");
        test.equal(parsedAddress.postalCode, "CM1102");
        test.equal(parsedAddress.country, "HONDURAS");
        test.equal(parsedAddress.countryCode, "HN");
        test.done();
    },
    
    testParseAddressHNOneLine: function(test) {
        var parsedAddress = new Address("Sr. Juan C. Martel , CM1102 , LAS LAJAS , Comayagua , HONDURAS", {locale: 'es-HN'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
          test.equal(parsedAddress.streetAddress, "Sr. Juan C. Martel");
        test.equal(parsedAddress.locality, "LAS LAJAS");
        test.equal(parsedAddress.region, "Comayagua");
        test.equal(parsedAddress.postalCode, "CM1102");
        test.equal(parsedAddress.country, "HONDURAS");
        test.equal(parsedAddress.countryCode, "HN");
        test.done();
    },
    
    testParseAddressHNSuperfluousWhitespace: function(test) {
        var parsedAddress = new Address("Sr. Juan C. Martel\n\n\n\rCM1102\r\nLAS LAJAS\r\r\rComayagua\t\t\rHONDURAS", {locale: 'es-HN'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
            test.equal(parsedAddress.streetAddress, "Sr. Juan C. Martel");
        test.equal(parsedAddress.locality, "LAS LAJAS");
        test.equal(parsedAddress.region, "Comayagua");
        test.equal(parsedAddress.postalCode, "CM1102");
        test.equal(parsedAddress.country, "HONDURAS");
        test.equal(parsedAddress.countryCode, "HN");
        test.done();
    },
    
    testParseAddressHNNoDelimiters: function(test) {
        var parsedAddress = new Address("Sr. Juan C. Martel CM1102 LAS LAJAS Comayagua HONDURAS", {locale: 'es-HN'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Sr. Juan C. Martel");
        test.equal(parsedAddress.locality, "LAS LAJAS");
        test.equal(parsedAddress.region, "Comayagua");
        test.equal(parsedAddress.postalCode, "CM1102");
        test.equal(parsedAddress.country, "HONDURAS");
        test.equal(parsedAddress.countryCode, "HN");
        test.done();
    },
    
    testParseAddressHNFromUS: function(test) {
        var parsedAddress = new Address("Sr. Juan C. Martel\nCM1102 LAS LAJAS, Comayagua\nHONDURAS", {locale: 'es-HN'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Sr. Juan C. Martel");
        test.equal(parsedAddress.locality, "LAS LAJAS");
        test.equal(parsedAddress.region, "Comayagua");
        test.equal(parsedAddress.postalCode, "CM1102");
        test.equal(parsedAddress.country, "HONDURAS");
        test.equal(parsedAddress.countryCode, "HN");
        test.done();
    },
    
    testFormatAddressHN: function(test) {
        var parsedAddress = new Address({
            streetAddress: "Sr. Juan C. Martel",
            locality: "LAS LAJAS",
            postalCode: "CM1102",
            region: "Comayagua",
            country: "HONDURAS",
            countryCode: "HN"
        }, {locale: 'es-HN'});
        
        var expected = "Sr. Juan C. Martel\nCM1102 LAS LAJAS, Comayagua\nHONDURAS";
        var formatter = new AddressFmt({locale: 'es-HN'});
        test.expect(1);
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressHNFromUS: function(test) {
        var parsedAddress = new Address({
            streetAddress: "Sr. Juan C. Martel",
            locality: "LAS LAJAS",
            postalCode: "CM1102",
            region: "Comayagua",
            country: "HONDURAS",
            countryCode: "HN"
        }, {locale: 'en-US'});
        
        var expected = "Sr. Juan C. Martel\nCM1102 LAS LAJAS, Comayagua\nHONDURAS";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.expect(1);
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
    
};