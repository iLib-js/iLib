/*
 * testaddress_VN.js - test the address parsing and formatting routines
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

module.exports.testaddress_VN = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAddressVNNormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("No.123/45, đường Nguyễn Thị Minh Khai, Phường 5, Quận 3, Ho Chi Minh City, 705612\nViệt Nam", {locale: 'vi-VN'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "No.123/45, đường Nguyễn Thị Minh Khai, Phường 5");
        test.equal(parsedAddress.locality, "Quận 3");
        test.equal(parsedAddress.region, "Ho Chi Minh City");
        test.equal(parsedAddress.postalCode, "705612");
        test.equal(parsedAddress.country, "Việt Nam");
        test.equal(parsedAddress.countryCode, "VN");
        test.done();
    },
    
    testParseAddressVNNoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("No.123/45, đường Nguyễn Thị Minh Khai, Phường 5, Quận 3 Ho Chi Minh City\nViệt Nam", {locale: 'vi-VN'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "No.123/45, đường Nguyễn Thị Minh Khai, Phường 5");
        test.equal(parsedAddress.locality, "Quận 3");
        test.equal(parsedAddress.region, "Ho Chi Minh City");
        test.equal(parsedAddress.country, "Việt Nam");
        test.equal(parsedAddress.countryCode, "VN");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    
    testParseAddressVNNoCountry: function(test) {
        test.expect(7);
        var parsedAddress = new Address("No.123/45, đường Nguyễn Thị Minh Khai, Phường 5, Quận 3, Ho Chi Minh City, 705612", {locale: 'vi-VN'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "No.123/45, đường Nguyễn Thị Minh Khai, Phường 5");
        test.equal(parsedAddress.locality, "Quận 3");
        test.equal(parsedAddress.region, "Ho Chi Minh City");
        test.equal(parsedAddress.postalCode, "705612");    
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "VN");
        test.done();
    },
    
    testParseAddressVNManyLines: function(test) {
        test.expect(7);
        var parsedAddress = new Address("No.123/45\nđường Nguyễn Thị Minh Khai\nPhường 5\nQuận 3\nHo Chi Minh City\n705612\nViệt Nam", {locale: 'vi-VN'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
          test.equal(parsedAddress.streetAddress, "No.123/45, đường Nguyễn Thị Minh Khai, Phường 5");
        test.equal(parsedAddress.locality, "Quận 3");
        test.equal(parsedAddress.region, "Ho Chi Minh City");
        test.equal(parsedAddress.postalCode, "705612");
        test.equal(parsedAddress.country, "Việt Nam");
        test.equal(parsedAddress.countryCode, "VN");
        test.done();
    },
    
    testParseAddressVNOneLine: function(test) {
        test.expect(7);
        var parsedAddress = new Address("No.123/45, đường Nguyễn Thị Minh Khai, Phường 5, Quận 3, Ho Chi Minh City, 705612, Việt Nam", {locale: 'vi-VN'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
          test.equal(parsedAddress.streetAddress, "No.123/45, đường Nguyễn Thị Minh Khai, Phường 5");
        test.equal(parsedAddress.locality, "Quận 3");
        test.equal(parsedAddress.region, "Ho Chi Minh City");
        test.equal(parsedAddress.postalCode, "705612");
        test.equal(parsedAddress.country, "Việt Nam");
        test.equal(parsedAddress.countryCode, "VN");
        test.done();
    },
    
    testParseAddressVNSuperfluousWhitespace: function(test) {
        test.expect(7);
        var parsedAddress = new Address("No.123/45\n\nđường Nguyễn\t\tThị Minh Khai\n\n\tPhường 5\n\t\t\rQuận 3\r\r\n\tHo Chi Minh City\n\n\t705612\n\n\t\rViệt Nam", {locale: 'vi-VN'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
          test.equal(parsedAddress.streetAddress, "No.123/45, đường Nguyễn Thị Minh Khai, Phường 5");
        test.equal(parsedAddress.locality, "Quận 3");
        test.equal(parsedAddress.region, "Ho Chi Minh City");
        test.equal(parsedAddress.postalCode, "705612");
        test.equal(parsedAddress.country, "Việt Nam");
        test.equal(parsedAddress.countryCode, "VN");
        test.done();
    },
    
    testParseAddressVNNoDelimiters: function(test) {
        test.expect(7);
        var parsedAddress = new Address("No.123/45, đường Nguyễn Thị Minh Khai, Phường 5, Quận 3, Ho Chi Minh City, 705612, Việt Nam", {locale: 'vi-VN'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "No.123/45, đường Nguyễn Thị Minh Khai, Phường 5");
        test.equal(parsedAddress.locality, "Quận 3");
        test.equal(parsedAddress.region, "Ho Chi Minh City");
        test.equal(parsedAddress.postalCode, "705612");
        test.equal(parsedAddress.country, "Việt Nam");
        test.equal(parsedAddress.countryCode, "VN");
        test.done();
    },
    
    testParseAddressVNFromUS: function(test) {
        test.expect(7);
        var parsedAddress = new Address("No.123/45, đường Nguyễn Thị Minh Khai, Phường 5, Quận 3, Ho Chi Minh City, 705612\nViệt Nam", {locale: 'vi-VN'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "No.123/45, đường Nguyễn Thị Minh Khai, Phường 5");
        test.equal(parsedAddress.locality, "Quận 3");
        test.equal(parsedAddress.region, "Ho Chi Minh City");
        test.equal(parsedAddress.postalCode, "705612");
        test.equal(parsedAddress.country, "Việt Nam");
        test.equal(parsedAddress.countryCode, "VN");
        test.done();
    },
    
    testFormatAddressVN: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "No.123/45, đường Nguyễn Thị Minh Khai, Phường 5",
            locality: "Quận 3",
            postalCode: "705612",
            region: "Ho Chi Minh City",
            country: "Việt Nam",
            countryCode: "VN"
        }, {locale: 'vi-VN'});
        
        var expected = "No.123/45, đường Nguyễn Thị Minh Khai, Phường 5, Quận 3, Ho Chi Minh City, 705612\nViệt Nam";
        var formatter = new AddressFmt({locale: 'vi-VN'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressVNFromUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "No.123/45, đường Nguyễn Thị Minh Khai, Phường 5",
            locality: "Quận 3",
            postalCode: "705612",
            region: "Ho Chi Minh City",
            country: "Việt Nam",
            countryCode: "VN"
        }, {locale: 'en-US'});
        
        var expected = "No.123/45, đường Nguyễn Thị Minh Khai, Phường 5, Quận 3, Ho Chi Minh City, 705612\nViệt Nam";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
    
};
