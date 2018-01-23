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
    var ilib = require("../../../lib/ilib.js");
}

module.exports.testaddress_PK = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAddressPKNormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Mr. Nasratullah Khan House No 17-B Street No 30 Sector F-7/1\nISLAMABAD 44000\nPAKISTAN", {locale: 'en-PK'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Mr. Nasratullah Khan House No 17-B Street No 30 Sector F-7/1");
        test.equal(parsedAddress.locality, "ISLAMABAD");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "44000");
        test.equal(parsedAddress.country, "PAKISTAN");
        test.equal(parsedAddress.countryCode, "PK");
        test.done();
    },
    
    testParseAddressPKNoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Mr. Nasratullah Khan House No 17-B Street No 30 Sector F-7/1\nISLAMABAD\nPAKISTAN", {locale: 'en-PK'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Mr. Nasratullah Khan House No 17-B Street No 30 Sector F-7/1");
        test.equal(parsedAddress.locality, "ISLAMABAD");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.country, "PAKISTAN");
        test.equal(parsedAddress.countryCode, "PK");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    
    testParseAddressPKNoCountry: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Mr. Nasratullah Khan House No 17-B Street No 30 Sector F-7/1\nISLAMABAD 44000", {locale: 'en-PK'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Mr. Nasratullah Khan House No 17-B Street No 30 Sector F-7/1");
        test.equal(parsedAddress.locality, "ISLAMABAD");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "44000");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "PK");
        test.done();
    },
    
    testParseAddressPKManyLines: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Mr. Nasratullah Khan\nHouse No 17-B\nStreet No 30\n\nSector F-7/1\n\nISLAMABAD\n\n44000\nPAKISTAN\n\n\n", {locale: 'en-PK'});
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Mr. Nasratullah Khan, House No 17-B, Street No 30, Sector F-7/1");
        test.equal(parsedAddress.locality, "ISLAMABAD");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "44000");
        test.equal(parsedAddress.country, "PAKISTAN");
        test.equal(parsedAddress.countryCode, "PK");
        test.done();
    },
    
    testParseAddressPKOneLine: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Mr. Nasratullah Khan , House No 17-B , Street No 30 , Sector F-7/1 , ISLAMABAD , 44000 , PAKISTAN", {locale: 'en-PK'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Mr. Nasratullah Khan, House No 17-B, Street No 30, Sector F-7/1");
        test.equal(parsedAddress.locality, "ISLAMABAD");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "44000");
        test.equal(parsedAddress.country, "PAKISTAN");
        test.equal(parsedAddress.countryCode, "PK");
        test.done();
    },
    
    testParseAddressPKSuperfluousWhitespace: function(test) {
        test.expect(7);
        var parsedAddress = new Address("\t\t\tMr. Nasratullah Khan\t\t\rHouse No 17-B\t\t\rStreet No 30\n\nSector F-7/1\n\n\nISLAMABAD\n\t\n44000\n\n\tPAKISTAN\n\n\n", {locale: 'en-PK'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Mr. Nasratullah Khan House No 17-B Street No 30, Sector F-7/1");
        test.equal(parsedAddress.locality, "ISLAMABAD");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "44000");
        test.equal(parsedAddress.country, "PAKISTAN");
        test.equal(parsedAddress.countryCode, "PK");
        test.done();
    },
    
    testParseAddressPKNoDelimiters: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Mr. Nasratullah Khan House No 17-B Street No 30 Sector F-7/1 ISLAMABAD 44000 PAKISTAN", {locale: 'en-PK'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Mr. Nasratullah Khan House No 17-B Street No 30 Sector F-7/1");
        test.equal(parsedAddress.locality, "ISLAMABAD");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "44000");
        test.equal(parsedAddress.country, "PAKISTAN");
        test.equal(parsedAddress.countryCode, "PK");
        test.done();
    },
    
    testParseAddressPKFromUS: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Mr. Nasratullah Khan House No 17-B Street No 30 Sector F-7/1\nISLAMABAD 44000\nPAKISTAN", {locale: 'en-US'});
        
        // the country name is in German because this address is for a contact in a German database
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Mr. Nasratullah Khan House No 17-B Street No 30 Sector F-7/1");
        test.equal(parsedAddress.locality, "ISLAMABAD");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "44000");
        test.equal(parsedAddress.country, "PAKISTAN");
        test.equal(parsedAddress.countryCode, "PK");
        test.done();
    },
    
    testFormatAddressPK: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Mr. Nasratullah Khan House No 17-B Street No 30 Sector F-7/1",
            locality: "ISLAMABAD",
            postalCode: "44000",
            country: "PAKISTAN",
            countryCode: "PK"
        }, {locale: 'en-PK'});
        
        var expected = "Mr. Nasratullah Khan House No 17-B Street No 30 Sector F-7/1\nISLAMABAD 44000\nPAKISTAN";
        var formatter = new AddressFmt({locale: 'en-PK'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressPKFromUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Mr. Nasratullah Khan House No 17-B Street No 30 Sector F-7/1",
            locality: "ISLAMABAD",
            postalCode: "44000",
            country: "PAKISTAN",
            countryCode: "PK"
        }, {locale: 'en-US'});
        
        var expected = "Mr. Nasratullah Khan House No 17-B Street No 30 Sector F-7/1\nISLAMABAD 44000\nPAKISTAN";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
    
};