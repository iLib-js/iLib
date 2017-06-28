/*
 * testaddress_LV.js - test the address parsing and formatting routines
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

module.exports.testaddress_LV = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAddressLVNormal: function(test) {
        var parsedAddress = new Address("Igors Biedriņš Aglonas iela 43, Apt 1\nDAUGAVPILS, LV-5417\nLATVIA", {locale: 'lv-LV'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Igors Biedriņš Aglonas iela 43, Apt 1");
        test.equal(parsedAddress.locality, "DAUGAVPILS");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "LV-5417");
        test.equal(parsedAddress.country, "LATVIA");
        test.equal(parsedAddress.countryCode, "LV");
        test.done();
    },
    
    testParseAddressLVNoZip: function(test) {
        var parsedAddress = new Address("Igors Biedriņš Aglonas iela 43, Apt 1\nDAUGAVPILS\nLATVIA", {locale: 'lv-LV'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Igors Biedriņš Aglonas iela 43, Apt 1");
        test.equal(parsedAddress.locality, "DAUGAVPILS");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.country, "LATVIA");
        test.equal(parsedAddress.countryCode, "LV");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    
    testParseAddressLVNoCountry: function(test) {
        var parsedAddress = new Address("Igors Biedriņš Aglonas iela 43, Apt 1\nDAUGAVPILS, LV-5417", {locale: 'lv-LV'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Igors Biedriņš Aglonas iela 43, Apt 1");
        test.equal(parsedAddress.locality, "DAUGAVPILS");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "LV-5417");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "LV");
        test.done();
    },
    
    testParseAddressLVManyLines: function(test) {
        var parsedAddress = new Address("Igors Biedriņš Aglonas\niela 43\nApt 1\n\nDAUGAVPILS\n\nLV-5417\nLATVIA\n\n\n", {locale: 'lv-LV'});
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Igors Biedriņš Aglonas, iela 43, Apt 1");
        test.equal(parsedAddress.locality, "DAUGAVPILS");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "LV-5417");
        test.equal(parsedAddress.country, "LATVIA");
        test.equal(parsedAddress.countryCode, "LV");
        test.done();
    },
    
    testParseAddressLVOneLine: function(test) {
        var parsedAddress = new Address("Igors Biedriņš Aglonas , iela 43 , Apt 1 , DAUGAVPILS , LV-5417 , LATVIA", {locale: 'lv-LV'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Igors Biedriņš Aglonas, iela 43, Apt 1");
        test.equal(parsedAddress.locality, "DAUGAVPILS");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "LV-5417");
        test.equal(parsedAddress.country, "LATVIA");
        test.equal(parsedAddress.countryCode, "LV");
        test.done();
    },
    
    testParseAddressLVSuperfluousWhitespace: function(test) {
        var parsedAddress = new Address("\t\t\tIgors Biedriņš Aglonas\t\t\riela 43\t\t\rApt 1\n\tDAUGAVPILS\n\tLV-5417\n\tLATVIA\n\n\n", {locale: 'lv-LV'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Igors Biedriņš Aglonas iela 43 Apt 1");
        test.equal(parsedAddress.locality, "DAUGAVPILS");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "LV-5417");
        test.equal(parsedAddress.country, "LATVIA");
        test.equal(parsedAddress.countryCode, "LV");
        test.done();
    },
    
    testParseAddressLVNoDelimiters: function(test) {
        var parsedAddress = new Address("Igors Biedriņš Aglonas iela 43, Apt 1 DAUGAVPILS, LV-5417 LATVIA", {locale: 'lv-LV'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Igors Biedriņš Aglonas iela 43, Apt 1");
        test.equal(parsedAddress.locality, "DAUGAVPILS");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "LV-5417");
        test.equal(parsedAddress.country, "LATVIA");
        test.equal(parsedAddress.countryCode, "LV");
        test.done();
    },
    
    testParseAddressLVFromUS: function(test) {
        var parsedAddress = new Address("Igors Biedriņš Aglonas iela 43, Apt 1\nDAUGAVPILS, LV-5417\nLATVIA", {locale: 'en-US'});
        
        // the country name is in German because this address is for a contact in a German database
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Igors Biedriņš Aglonas iela 43, Apt 1");
        test.equal(parsedAddress.locality, "DAUGAVPILS");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "LV-5417");
        test.equal(parsedAddress.country, "LATVIA");
        test.equal(parsedAddress.countryCode, "LV");
        test.done();
    },
    
    testFormatAddressLV: function(test) {
        var parsedAddress = new Address({
            streetAddress: "Igors Biedriņš Aglonas iela 43, Apt 1",
            locality: "DAUGAVPILS",
            postalCode: "LV-5417",
            country: "LATVIA",
            countryCode: "LV"
        }, {locale: 'lv-LV'});
        
        var expected = "Igors Biedriņš Aglonas iela 43, Apt 1\nDAUGAVPILS, LV-5417\nLATVIA";
        var formatter = new AddressFmt({locale: 'lv-LV'});
        test.expect(1);
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressLVFromUS: function(test) {
        var parsedAddress = new Address({
            streetAddress: "Igors Biedriņš Aglonas iela 43, Apt 1",
            locality: "DAUGAVPILS",
            postalCode: "LV-5417",
            country: "LATVIA",
            countryCode: "LV"
        }, {locale: 'en-US'});
        
        var expected = "Igors Biedriņš Aglonas iela 43, Apt 1\nDAUGAVPILS, LV-5417\nLATVIA";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.expect(1);
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
    
};