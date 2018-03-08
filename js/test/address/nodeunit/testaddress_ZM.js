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
if (typeof(ilib) === "undefined") {
    var ilib = require("../../../lib/ilib.js");
}

module.exports.testaddress_ZM = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAddressZMNormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Mr. Richard Chanda 10 Nyimba Road\n50100 NDOLA\nZAMBIA", {locale: 'en-ZM'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Mr. Richard Chanda 10 Nyimba Road");
        test.equal(parsedAddress.locality, "NDOLA");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "50100");
        test.equal(parsedAddress.country, "ZAMBIA");
        test.equal(parsedAddress.countryCode, "ZM");
        test.done();
    },
    
    testParseAddressZMNoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Mr. Richard Chanda 10 Nyimba Road\nNDOLA\nZAMBIA", {locale: 'en-ZM'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Mr. Richard Chanda 10 Nyimba Road");
        test.equal(parsedAddress.locality, "NDOLA");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.country, "ZAMBIA");
        test.equal(parsedAddress.countryCode, "ZM");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    
    testParseAddressZMNoCountry: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Mr. Richard Chanda 10 Nyimba Road\n50100 NDOLA", {locale: 'en-ZM'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Mr. Richard Chanda 10 Nyimba Road");
        test.equal(parsedAddress.locality, "NDOLA");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "50100");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "ZM");
        test.done();
    },
    
    testParseAddressZMManyLines: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Mr. Richard Chanda\n10\nNyimba\nRoad\n50100\nNDOLA\nZAMBIA\n\n\n", {locale: 'en-ZM'});
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Mr. Richard Chanda, 10, Nyimba, Road");
        test.equal(parsedAddress.locality, "NDOLA");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "50100");
        test.equal(parsedAddress.country, "ZAMBIA");
        test.equal(parsedAddress.countryCode, "ZM");
        test.done();
    },
    
    testParseAddressZMOneLine: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Mr. Richard Chanda , 10 , Nyimba , Road , 50100 , NDOLA , ZAMBIA", {locale: 'en-ZM'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Mr. Richard Chanda, 10, Nyimba, Road");
        test.equal(parsedAddress.locality, "NDOLA");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "50100");
        test.equal(parsedAddress.country, "ZAMBIA");
        test.equal(parsedAddress.countryCode, "ZM");
        test.done();
    },
    
    testParseAddressZMSuperfluousWhitespace: function(test) {
        test.expect(7);
        var parsedAddress = new Address("\t\t\tMr. Richard Chanda\n\t\t\t10 \t\t\t\r\r Nyimba \n \r \tRoad \n\t\n50100\t\nNDOLA\n\t ZAMBIA\n\n\n", {locale: 'en-ZM'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Mr. Richard Chanda, 10 Nyimba, Road");
        test.equal(parsedAddress.locality, "NDOLA");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "50100");
        test.equal(parsedAddress.country, "ZAMBIA");
        test.equal(parsedAddress.countryCode, "ZM");
        test.done();
    },
    
    testParseAddressZMNoDelimiters: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Mr. Richard Chanda 10 Nyimba Road 50100 NDOLA ZAMBIA", {locale: 'en-ZM'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Mr. Richard Chanda 10 Nyimba Road");
        test.equal(parsedAddress.locality, "NDOLA");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "50100");
        test.equal(parsedAddress.country, "ZAMBIA");
        test.equal(parsedAddress.countryCode, "ZM");
        test.done();
    },
    
    testParseAddressZMFromUS: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Mr. Richard Chanda 10 Nyimba Road\n56001 NDOLA\nZAMBIA", {locale: 'en-US'});
        
        // the country name is in German because this address is for a contact in a German database
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Mr. Richard Chanda 10 Nyimba Road");
        test.equal(parsedAddress.locality, "NDOLA");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "56001");
        test.equal(parsedAddress.country, "ZAMBIA");
        test.equal(parsedAddress.countryCode, "ZM");
        test.done();
    },
    
    testFormatAddressZM: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Mr. Richard Chanda 10 Nyimba Road",
            locality: "NDOLA",
            postalCode: "56001",
            country: "ZAMBIA",
            countryCode: "ZM"
        }, {locale: 'en-ZM'});
        
        var expected = "Mr. Richard Chanda 10 Nyimba Road\n56001 NDOLA\nZAMBIA";
        var formatter = new AddressFmt({locale: 'en-ZM'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressZMFromUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Mr. Richard Chanda 10 Nyimba Road",
            locality: "NDOLA",
            postalCode: "56001",
            country: "ZAMBIA",
            countryCode: "ZM"
        }, {locale: 'en-US'});
        
        var expected = "Mr. Richard Chanda 10 Nyimba Road\n56001 NDOLA\nZAMBIA";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
    
};
