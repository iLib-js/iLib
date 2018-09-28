/*
 * testaddress_GE.js - test the address parsing and formatting routines
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

module.exports.testaddress_GE = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAddressGENormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Г-н Лали Хай Улица Казбеги 19\nТБИЛИСИ 0100\nГРУЗИЯ", {locale: 'ru-GE'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Г-н Лали Хай Улица Казбеги 19");
        test.equal(parsedAddress.locality, "ТБИЛИСИ");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "0100");
        test.equal(parsedAddress.country, "ГРУЗИЯ");
        test.equal(parsedAddress.countryCode, "GE");
        test.done();
    },
    
    testParseAddressGENoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Г-н Лали Хай Улица Казбеги 19\nТБИЛИСИ\nГРУЗИЯ", {locale: 'ru-GE'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Г-н Лали Хай Улица Казбеги 19");
        test.equal(parsedAddress.locality, "ТБИЛИСИ");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.country, "ГРУЗИЯ");
        test.equal(parsedAddress.countryCode, "GE");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    
    testParseAddressGENoCountry: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Г-н Лали Хай Улица Казбеги 19\nТБИЛИСИ, 0100", {locale: 'ru-GE'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Г-н Лали Хай Улица Казбеги 19");
        test.equal(parsedAddress.locality, "ТБИЛИСИ");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "0100");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "GE");
        test.done();
    },
    
    testParseAddressGEManyLines: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Г-н Лали Хай \nУлица Казбеги 19\n\nТБИЛИСИ\n\n0100\nГРУЗИЯ\n\n\n", {locale: 'ru-GE'});
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Г-н Лали Хай, Улица Казбеги 19");
        test.equal(parsedAddress.locality, "ТБИЛИСИ");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "0100");
        test.equal(parsedAddress.country, "ГРУЗИЯ");
        test.equal(parsedAddress.countryCode, "GE");
        test.done();
    },
    
    testParseAddressGEOneLine: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Г-н Лали Хай , Улица Казбеги 19 , ТБИЛИСИ , 0100 , ГРУЗИЯ", {locale: 'ru-GE'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Г-н Лали Хай, Улица Казбеги 19");
        test.equal(parsedAddress.locality, "ТБИЛИСИ");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "0100");
        test.equal(parsedAddress.country, "ГРУЗИЯ");
        test.equal(parsedAddress.countryCode, "GE");
        test.done();
    },
    
    testParseAddressGESuperfluousWhitespace: function(test) {
        test.expect(7);
        var parsedAddress = new Address("\t\t\tГ-н Лали Хай \n\t\tУлица Казбеги 19\n\n\nТБИЛИСИ\n\n0100\n\t ГРУЗИЯ\n\n\n", {locale: 'ru-GE'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Г-н Лали Хай, Улица Казбеги 19");
        test.equal(parsedAddress.locality, "ТБИЛИСИ");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "0100");
        test.equal(parsedAddress.country, "ГРУЗИЯ");
        test.equal(parsedAddress.countryCode, "GE");
        test.done();
    },
    
    testParseAddressGENoDelimiters: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Г-н Лали Хай Улица Казбеги 19 ТБИЛИСИ 0100 ГРУЗИЯ", {locale: 'ru-GE'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Г-н Лали Хай Улица Казбеги 19");
        test.equal(parsedAddress.locality, "ТБИЛИСИ");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "0100");
        test.equal(parsedAddress.country, "ГРУЗИЯ");
        test.equal(parsedAddress.countryCode, "GE");
        test.done();
    },
    
    testParseAddressGEFromUS: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Г-н Лали Хай Улица Казбеги 19\nТБИЛИСИ 0100\nGeorgia", {locale: 'en-US'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Г-н Лали Хай Улица Казбеги 19");
        test.equal(parsedAddress.locality, "ТБИЛИСИ");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "0100");
        test.equal(parsedAddress.country, "Georgia");
        test.equal(parsedAddress.countryCode, "GE");
        test.done();
    },
    
    testFormatAddressGE: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Г-н Лали Хай Улица Казбеги 19",
            locality: "ТБИЛИСИ",
            postalCode: "0100",
            country: "ГРУЗИЯ",
            countryCode: "GE"
        }, {locale: 'ru-GE'});
        
        var expected = "Г-н Лали Хай Улица Казбеги 19\nТБИЛИСИ 0100\nГРУЗИЯ";
        var formatter = new AddressFmt({locale: 'ru-GE'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressGEFromUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Г-н Лали Хай Улица Казбеги 19",
            locality: "ТБИЛИСИ",
            postalCode: "0100",
            country: "Georgia",
            countryCode: "GE"
        }, {locale: 'en-US'});
        
        var expected = "Г-н Лали Хай Улица Казбеги 19\nТБИЛИСИ 0100\nGeorgia";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
    
};
