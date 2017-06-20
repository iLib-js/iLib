/*
 * testaddress_RU.js - test the address parsing and formatting routines
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

module.exports.testaddress_RU = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAddressRUNormal: function(test) {
        test.expect(7);
       var parsedAddress = new Address("Петров Иван Сергеевич ул. Лесная D. 5 поз. Лесной\nАЛЕКСЕЕВСКИЙ R-N\nВоронежская область\nРоссия\n247112", {locale: 'ru-RU'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Петров Иван Сергеевич ул. Лесная D. 5 поз. Лесной");
        test.equal(parsedAddress.locality, "АЛЕКСЕЕВСКИЙ R-N");
        test.equal(parsedAddress.region, "Воронежская область");
        test.equal(parsedAddress.postalCode, "247112");
        test.equal(parsedAddress.country, "Россия");
        test.equal(parsedAddress.countryCode, "RU");
        test.done();
    },
    
    testParseAddressRUNoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Петров Иван Сергеевич ул. Лесная D. 5 поз. Лесной\nАЛЕКСЕЕВСКИЙ R-N\nВоронежская область\nРоссия", {locale: 'ru-RU'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Петров Иван Сергеевич ул. Лесная D. 5 поз. Лесной");
        test.equal(parsedAddress.locality, "АЛЕКСЕЕВСКИЙ R-N");
        test.equal(parsedAddress.region, "Воронежская область");
        test.equal(parsedAddress.country, "Россия");
        test.equal(parsedAddress.countryCode, "RU");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    
    testParseAddressRUNoCountry: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Петров Иван Сергеевич ул. Лесная D. 5 поз. Лесной\nАЛЕКСЕЕВСКИЙ R-N\nВоронежская область\n247112", {locale: 'ru-RU'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Петров Иван Сергеевич ул. Лесная D. 5 поз. Лесной");
        test.equal(parsedAddress.locality, "АЛЕКСЕЕВСКИЙ R-N");
        test.equal(parsedAddress.region, "Воронежская область");
        test.equal(parsedAddress.postalCode, "247112");    
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "RU");
        test.done();
    },
    
    testParseAddressRUManyLines: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Петров Иван Сергеевич ул\nЛесная D. 5 поз\nЛесной\nАЛЕКСЕЕВСКИЙ R-N\nВоронежская область\nРоссия\n247112", {locale: 'ru-RU'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
          test.equal(parsedAddress.streetAddress, "Петров Иван Сергеевич ул, Лесная D. 5 поз, Лесной");
        test.equal(parsedAddress.locality, "АЛЕКСЕЕВСКИЙ R-N");
        test.equal(parsedAddress.region, "Воронежская область");
        test.equal(parsedAddress.postalCode, "247112");
        test.equal(parsedAddress.country, "Россия");
        test.equal(parsedAddress.countryCode, "RU");
        test.done();
    },
    
    testParseAddressRUOneLine: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Петров Иван Сергеевич ул , Лесная D. 5 поз , Лесной , АЛЕКСЕЕВСКИЙ R-N , Воронежская область, Россия , 247112", {locale: 'ru-RU'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
          test.equal(parsedAddress.streetAddress, "Петров Иван Сергеевич ул, Лесная D. 5 поз, Лесной");
        test.equal(parsedAddress.locality, "АЛЕКСЕЕВСКИЙ R-N");
        test.equal(parsedAddress.region, "Воронежская область");
        test.equal(parsedAddress.postalCode, "247112");
        test.equal(parsedAddress.country, "Россия");
        test.equal(parsedAddress.countryCode, "RU");
        test.done();
    },
    
    testParseAddressRUSuperfluousWhitespace: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Петров Иван Сергеевич ул\t\t\rЛесная D. 5 поз\t\t\rЛесной\n\tАЛЕКСЕЕВСКИЙ R-N\n\t\tВоронежская область\n\t\rРоссия\n\t\r247112", {locale: 'ru-RU'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
          test.equal(parsedAddress.streetAddress, "Петров Иван Сергеевич ул Лесная D. 5 поз Лесной");
        test.equal(parsedAddress.locality, "АЛЕКСЕЕВСКИЙ R-N");
        test.equal(parsedAddress.region, "Воронежская область");
        test.equal(parsedAddress.postalCode, "247112");
        test.equal(parsedAddress.country, "Россия");
        test.equal(parsedAddress.countryCode, "RU");
        test.done();
    },
    
    /*
    testParseAddressRUNoDelimiters: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Петров Иван Сергеевич ул. Лесная D. 5 поз. Лесной АЛЕКСЕЕВСКИЙ R-N Воронежская область 247112 Россия", {locale: 'ru-RU'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Петров Иван Сергеевич ул. Лесная D. 5 поз. Лесной");
        test.equal(parsedAddress.locality, "АЛЕКСЕЕВСКИЙ R-N");
        test.equal(parsedAddress.region, "Воронежская область");
        test.equal(parsedAddress.postalCode, "247112");
        test.equal(parsedAddress.country, "Россия");
        test.equal(parsedAddress.countryCode, "RU");
        test.done();
    },
    */
    
    testParseAddressRUFromUS: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Петров Иван Сергеевич ул. Лесная D. 5 поз. Лесной\nАЛЕКСЕЕВСКИЙ R-N\nВоронежская область\nРоссия\n247112", {locale: 'ru-RU'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Петров Иван Сергеевич ул. Лесная D. 5 поз. Лесной");
        test.equal(parsedAddress.locality, "АЛЕКСЕЕВСКИЙ R-N");
        test.equal(parsedAddress.region, "Воронежская область");
        test.equal(parsedAddress.postalCode, "247112");
        test.equal(parsedAddress.country, "Россия");
        test.equal(parsedAddress.countryCode, "RU");
        test.done();
    },
    
    testFormatAddressRU: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Петров Иван Сергеевич ул. Лесная D. 5 поз. Лесной",
            locality: "АЛЕКСЕЕВСКИЙ R-N",
            postalCode: "247112",
            region: "Воронежская область",
            country: "Россия",
            countryCode: "RU"
        }, {locale: 'ru-RU'});
        
        var expected = "Петров Иван Сергеевич ул. Лесная D. 5 поз. Лесной\nАЛЕКСЕЕВСКИЙ R-N\nВоронежская область\nРоссия\n247112";
        var formatter = new AddressFmt({locale: 'ru-RU'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressRUFromUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Петров Иван Сергеевич ул. Лесная D. 5 поз. Лесной",
            locality: "АЛЕКСЕЕВСКИЙ R-N",
            postalCode: "247112",
            region: "Воронежская область",
            country: "Russia",
            countryCode: "RU"
        }, {locale: 'en-US'});
        
        var expected = "Петров Иван Сергеевич ул. Лесная D. 5 поз. Лесной\nАЛЕКСЕЕВСКИЙ R-N\nВоронежская область\nRussia\n247112";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressRU1: function(test) {
        test.expect(5);
        var parsedAddress = new Address("23, Ilyinka Street,Moscow, 103132, Russia");
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "23, Ilyinka Street");
        test.equal(parsedAddress.locality, "Moscow");
    
        test.equal(parsedAddress.postalCode, "103132");
        test.equal(parsedAddress.country, "Russia");
        test.done();
    
    },
    testFormatAddressRU2: function(test) {
        test.expect(4);
        
        var parsedAddress = new Address("Ред Сяуаре, 3, Плосчад Револутсии Метро Сяуаре, Мосцов Циты Центре,Мосцов,103132,Россия");
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Ред Сяуаре, 3, Плосчад Револутсии Метро Сяуаре, Мосцов Циты Центре");
        test.equal(parsedAddress.locality, "Мосцов");
    
        test.equal(parsedAddress.postalCode, "103132");
        test.done();
        
    },
    testFormatAddressRU2: function(test) {
        test.expect(6);
        
        var parsedAddress = new Address("ул. Победы, д. 20, кв. 29 пос., Октябрьский,Борский р-н,нижегородская область,Россия,606480",{locale: 'ru-RU'});
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "ул. Победы, д. 20, кв. 29 пос., Октябрьский");
        test.equal(parsedAddress.locality, "Борский р-н");
        test.equal(parsedAddress.region, "нижегородская область");
    
        test.equal(parsedAddress.country, "Россия");
        test.equal(parsedAddress.postalCode, "606480");
        test.done();
        
    },
    testFormatAddressRU3: function(test) {
        test.expect(6);
        
        var parsedAddress = new Address("ул. Победы, д. 20, кв. 29 пос., Октябрьский,Борский р-н,нижегородская область,Россия,606480",{locale: 'ru-RU'});
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "ул. Победы, д. 20, кв. 29 пос., Октябрьский");
        test.equal(parsedAddress.locality, "Борский р-н");
        test.equal(parsedAddress.region, "нижегородская область");
    
        test.equal(parsedAddress.country, "Россия");
        test.equal(parsedAddress.postalCode, "606480");
        test.done();
        
    },
    
    testFormatAddressRU4: function(test) {
        test.expect(6);
        
        var parsedAddress = new Address("ул. Победы, д. 20, кв. 29 пос., Октябрьский,Борский р-н,нижегородская область,Российская Федерация,606480",{locale: 'ru-RU'});
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "ул. Победы, д. 20, кв. 29 пос., Октябрьский");
        test.equal(parsedAddress.locality, "Борский р-н");
        test.equal(parsedAddress.region, "нижегородская область");
    
        test.equal(parsedAddress.country, "Российская Федерация");
        test.equal(parsedAddress.postalCode, "606480");
        test.done();
        
    }
    
    
};