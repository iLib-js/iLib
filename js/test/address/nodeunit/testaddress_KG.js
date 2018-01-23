/*
 * testaddress_KG.js - test the address parsing and formatting routines
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

module.exports.testaddress_KG = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAddressKGNormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("720001 БИШКЕК\nПроспект Чуй, 193, кв. 28 Колупаева Анара\nКиргизия", {locale: 'ru-KG'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Проспект Чуй, 193, кв. 28 Колупаева Анара");
        test.equal(parsedAddress.locality, "БИШКЕК");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "720001");
        test.equal(parsedAddress.country, "Киргизия");
        test.equal(parsedAddress.countryCode, "KG");
        test.done();
    },
    
    testParseAddressKGNoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("БИШКЕК\nПроспект Чуй, 193, кв. 28 Колупаева Анара\nКиргизия", {locale: 'ru-KG'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Проспект Чуй, 193, кв. 28 Колупаева Анара");
        test.equal(parsedAddress.locality, "БИШКЕК");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.country, "Киргизия");
        test.equal(parsedAddress.countryCode, "KG");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    
    testParseAddressKGNoCountry: function(test) {
        test.expect(7);
        var parsedAddress = new Address("720001 БИШКЕК\nПроспект Чуй, 193, кв. 28 Колупаева Анара", {locale: 'ru-KG'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Проспект Чуй, 193, кв. 28 Колупаева Анара");
        test.equal(parsedAddress.locality, "БИШКЕК");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "720001");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "KG");
        test.done();
    },
    
    testParseAddressKGManyLines: function(test) {
        test.expect(7);
        var parsedAddress = new Address("720001\nБИШКЕК\nПроспект Чуй\n193\nкв. 28 Колупаева\nАнара\nКиргизия\n\n\n", {locale: 'ru-KG'});
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Проспект Чуй, 193, кв. 28 Колупаева, Анара");
        test.equal(parsedAddress.locality, "БИШКЕК");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "720001");
        test.equal(parsedAddress.country, "Киргизия");
        test.equal(parsedAddress.countryCode, "KG");
        test.done();
    },
    
    testParseAddressKGOneLine: function(test) {
        test.expect(7);
        var parsedAddress = new Address("720001 , БИШКЕК , Проспект Чуй , 193 , кв. 28 Колупаева , Анара , Киргизия", {locale: 'ru-KG'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Проспект Чуй, 193, кв. 28 Колупаева, Анара");
        test.equal(parsedAddress.locality, "БИШКЕК");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "720001");
        test.equal(parsedAddress.country, "Киргизия");
        test.equal(parsedAddress.countryCode, "KG");
        test.done();
    },
    
    testParseAddressKGSuperfluousWhitespace: function(test) {
        test.expect(7);
        var parsedAddress = new Address("\t\t\t720001\t\t\nБИШКЕК\t\t\nПроспект Чуй\t\t193\t\tкв. 28 Колупаева\t\tАнара\t\nКиргизия\n\n\n", {locale: 'ru-KG'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Проспект Чуй 193 кв. 28 Колупаева Анара");
        test.equal(parsedAddress.locality, "БИШКЕК");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "720001");
        test.equal(parsedAddress.country, "Киргизия");
        test.equal(parsedAddress.countryCode, "KG");
        test.done();
    },
    
    testParseAddressKGNoDelimiters: function(test) {
        test.expect(7);
        var parsedAddress = new Address("720001 БИШКЕК Проспект Чуй 193 кв. 28 Колупаева Анара Киргизия", {locale: 'ru-KG'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Проспект Чуй 193 кв. 28 Колупаева Анара");
        test.equal(parsedAddress.locality, "БИШКЕК");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "720001");
        test.equal(parsedAddress.country, "Киргизия");
        test.equal(parsedAddress.countryCode, "KG");
        test.done();
    },
    
    testParseAddressKGFromUS: function(test) {
        test.expect(7);
        var parsedAddress = new Address("720001 БИШКЕК\nПроспект Чуй, 193, кв. 28 Колупаева Анара\nKyrgyzstan", {locale: 'en-US'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Проспект Чуй, 193, кв. 28 Колупаева Анара");
        test.equal(parsedAddress.locality, "БИШКЕК");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "720001");
        test.equal(parsedAddress.country, "Kyrgyzstan");
        test.equal(parsedAddress.countryCode, "KG");
        test.done();
    },
    
    testFormatAddressKG: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Проспект Чуй, 193, кв. 28 Колупаева Анара",
            locality: "БИШКЕК",
            postalCode: "720001",
            country: "Киргизия",
            countryCode: "KG"
        }, {locale: 'ru-KG'});
        
        var expected = "720001 БИШКЕК\nПроспект Чуй, 193, кв. 28 Колупаева Анара\nКиргизия";
        var formatter = new AddressFmt({locale: 'ru-KG'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressKGFromUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Проспект Чуй, 193, кв. 28 Колупаева Анара",
            locality: "БИШКЕК",
            postalCode: "720001",
            country: "Kyrgyzstan",
            countryCode: "KG"
        }, {locale: 'en-US'});
        
        var expected = "720001 БИШКЕК\nПроспект Чуй, 193, кв. 28 Колупаева Анара\nKyrgyzstan";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
    
};