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
    var Address = require("../../lib/Address.js");
}
if (typeof(AddressFmt) === "undefined") {
    var AddressFmt = require("../../lib/AddressFmt.js");
}
if (typeof(ilib) === "undefined") {
    var ilib = require("../../lib/ilib.js");
}

module.exports.testaddress_HK = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAddressHKHKLatinNormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Tower 1, Times Square\n1 Matheson Street\nRoom 1706\nCauseway Bay, Hong Kong", {locale: 'en-HK'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Tower 1, Times Square, 1 Matheson Street, Room 1706");
        test.equal(parsedAddress.locality, "Causeway Bay");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "Hong Kong");
        test.equal(parsedAddress.countryCode, "HK");
        test.done();
    },
    
    testParseAddressHKHKLatinNoCountry: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Tower 1, Times Square\n1 Matheson Street\nRoom 1706\nCauseway Bay", {locale: 'en-HK'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Tower 1, Times Square, 1 Matheson Street, Room 1706");
        test.equal(parsedAddress.locality, "Causeway Bay");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "HK");
        test.done();
    },
    
    testParseAddressHKHKLatinDouble: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Room 1301-1302, 13/F, Block A, Sea View Estate,\n2 Watson Road, Hong Kong\nHong Kong", {locale: 'en-HK'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Room 1301-1302, 13/F, Block A, Sea View Estate, 2 Watson Road");
        test.equal(parsedAddress.locality, "Hong Kong");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "Hong Kong");
        test.equal(parsedAddress.countryCode, "HK");
        test.done();
    },
    
    testParseAddressHKHKAsianNormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("中國香港特別行政區太古城英皇道1111號太古城中心1期19字樓", {locale: 'zh-Hant-HK'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "英皇道1111號太古城中心1期19字樓");
        test.equal(parsedAddress.locality, "太古城");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "中國香港特別行政區");
        test.equal(parsedAddress.countryCode, "HK");
        test.done();
    },
    
    testParseAddressHKHKAsianNoCountry: function(test) {
        test.expect(7);
        var parsedAddress = new Address("太古城英皇道1111號太古城中心1期19字樓", {locale: 'zh-HK'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "英皇道1111號太古城中心1期19字樓");
        test.equal(parsedAddress.locality, "太古城");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "HK");
        test.done();
    },
    
    /*
    // for DFISH-20855
    testParseAddressHKHKMixed: function(test) {
        test.expect(7);
        // in Hong Kong, it is more likely to be mixed like this
        var parsedAddress = new Address("Hong Kong太古城英皇道1111號太古城中心1期19字樓", {locale: 'zh-HK'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "英皇道1111號太古城中心1期19字樓");
        test.equal(parsedAddress.locality, "太古城");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "Hong Kong");
        test.equal(parsedAddress.countryCode, "HK");
        test.done();
    },
    */
    
    testParseAddressHKHKOneLine: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Room 1403-5, 14/F, Chinachem Exchange Square, 1 Hoi Wan Street, Quarry Bay, Hong Kong", {locale: 'en-HK'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Room 1403-5, 14/F, Chinachem Exchange Square, 1 Hoi Wan Street");
        test.equal(parsedAddress.locality, "Quarry Bay");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "Hong Kong");
        test.equal(parsedAddress.countryCode, "HK");
        test.done();
    },
    
    testParseAddressHKHKSuperfluousWhitespace: function(test) {
        test.expect(7);
        var parsedAddress = new Address("\t\t\t10/F PCCW Tower\n\t\nTaikoo Place\n \r\n\r\r979 King's Road\n    Quarry Bay\r\r\n    Hong Kong\t\n\n\n", {locale: 'en-HK'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "10/F PCCW Tower, Taikoo Place, 979 King's Road");
        test.equal(parsedAddress.locality, "Quarry Bay");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "Hong Kong");
        test.equal(parsedAddress.countryCode, "HK");
        test.done();
    },
    
    testParseAddressHKHKNoDelimiters: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Tower 1 Times Square 1 Matheson Street Room 1706 Causeway Bay Hong Kong", {locale: 'en-HK'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Tower 1 Times Square 1 Matheson Street Room 1706");
        test.equal(parsedAddress.locality, "Causeway Bay");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "Hong Kong");
        test.equal(parsedAddress.countryCode, "HK");
        test.done();
    },
    
    testParseAddressHKHKSpecialChars: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Suite 19, 1st Floor, Tǎi Gù Chung Zhong Shìn, Hăo 1111, In Huang Street, Dàpǔ Xīn Shìzhèn, Hong Kong", {locale: 'en-HK'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Suite 19, 1st Floor, Tǎi Gù Chung Zhong Shìn, Hăo 1111, In Huang Street");
        test.equal(parsedAddress.locality, "Dàpǔ Xīn Shìzhèn");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "Hong Kong");
        test.equal(parsedAddress.countryCode, "HK");
        test.done();
    },
    
    testParseAddressHKHKFromUS: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Tower 1, Times Square\n1 Matheson Street\nRoom 1706\nCauseway Bay, Hong Kong", {locale: 'en-US'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Tower 1, Times Square, 1 Matheson Street, Room 1706");
        test.equal(parsedAddress.locality, "Causeway Bay");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "Hong Kong");
        test.equal(parsedAddress.countryCode, "HK");
        test.done();
    },
    
    testFormatAddressHKHKLatin: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Tower 1, Times Square, 1 Matheson Street, Room 1706",
            locality: "Causeway Bay",
            country: "Hong Kong",
            countryCode: "HK",
            format: "latin"
        }, {locale: 'en-HK'});
        
        var expected = "Tower 1, Times Square, 1 Matheson Street, Room 1706\nCauseway Bay\nHong Kong";
        var formatter = new AddressFmt({locale: 'en-HK'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressHKHKAsian: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "英皇道1111號太古城中心1期19字樓",
            locality: "太古城",
            country: "香港",
            countryCode: "HK",
            format: "asian"
        }, {locale: 'en-HK'});
        
        var expected = "香港太古城英皇道1111號太古城中心1期19字樓";
        var formatter = new AddressFmt({locale: 'en-HK'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressHKHKFromUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Tower 1, Times Square, 1 Matheson Street, Room 1706",
            locality: "Causeway Bay",
            country: "Hong Kong",
            countryCode: "HK",
            format: "latin"
        }, {locale: 'en-US'});
        
        var expected = "Tower 1, Times Square, 1 Matheson Street, Room 1706\nCauseway Bay\nHong Kong";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
    
};
