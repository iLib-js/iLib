/*
 * testaddress_UA.js - test the address parsing and formatting routines
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

module.exports.testaddress_UA = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAddressUANormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Володимир Свідерський ВУЛ ДУБІНІНА Володя 5\nКИЇВ\n03127\nУКРАЇНА", {locale: 'uk-UA'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Володимир Свідерський ВУЛ ДУБІНІНА Володя 5");
        test.equal(parsedAddress.locality, "КИЇВ");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "03127");
        test.equal(parsedAddress.country, "УКРАЇНА");
        test.equal(parsedAddress.countryCode, "UA");
        test.done();
    },
    
    testParseAddressUANoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Володимир Свідерський ВУЛ ДУБІНІНА Володя 5\nКИЇВ\nУКРАЇНА", {locale: 'uk-UA'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Володимир Свідерський ВУЛ ДУБІНІНА Володя 5");
        test.equal(parsedAddress.locality, "КИЇВ");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.country, "УКРАЇНА");
        test.equal(parsedAddress.countryCode, "UA");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    
    testParseAddressUANoCountry: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Володимир Свідерський ВУЛ ДУБІНІНА Володя 5\nКИЇВ\n03127", {locale: 'uk-UA'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Володимир Свідерський ВУЛ ДУБІНІНА Володя 5");
        test.equal(parsedAddress.locality, "КИЇВ");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "03127");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "UA");
        test.done();
    },
    
    testParseAddressUAManyLines: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Володимир Свідерський\nВУЛ ДУБІНІНА Володя 5\n\nКИЇВ\n\n03127\nУКРАЇНА\n\n\n", {locale: 'uk-UA'});
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Володимир Свідерський, ВУЛ ДУБІНІНА Володя 5");
        test.equal(parsedAddress.locality, "КИЇВ");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "03127");
        test.equal(parsedAddress.country, "УКРАЇНА");
        test.equal(parsedAddress.countryCode, "UA");
        test.done();
    },
    
    testParseAddressUAOneLine: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Володимир Свідерський , ВУЛ ДУБІНІНА Володя 5 , КИЇВ , 03127 , УКРАЇНА", {locale: 'uk-UA'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Володимир Свідерський, ВУЛ ДУБІНІНА Володя 5");
        test.equal(parsedAddress.locality, "КИЇВ");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "03127");
        test.equal(parsedAddress.country, "УКРАЇНА");
        test.equal(parsedAddress.countryCode, "UA");
        test.done();
    },
    
    testParseAddressUASuperfluousWhitespace: function(test) {
        test.expect(7);
        var parsedAddress = new Address("\t\t\tВолодимир Свідерський\n\t\t\rВУЛ ДУБІНІНА\t\t\rВолодя\t\t5\n\n\nКИЇВ\n\n03127\n\t УКРАЇНА\n\n\n", {locale: 'uk-UA'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Володимир Свідерський, ВУЛ ДУБІНІНА Володя 5");
        test.equal(parsedAddress.locality, "КИЇВ");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "03127");
        test.equal(parsedAddress.country, "УКРАЇНА");
        test.equal(parsedAddress.countryCode, "UA");
        test.done();
    },
    
    testParseAddressUANoDelimiters: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Володимир Свідерський ВУЛ ДУБІНІНА Володя 5 КИЇВ 03127 УКРАЇНА", {locale: 'uk-UA'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Володимир Свідерський ВУЛ ДУБІНІНА Володя 5");
        test.equal(parsedAddress.locality, "КИЇВ");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "03127");
        test.equal(parsedAddress.country, "УКРАЇНА");
        test.equal(parsedAddress.countryCode, "UA");
        test.done();
    },
    
    testParseAddressUAFromUS: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Володимир Свідерський ВУЛ ДУБІНІНА Володя 5\nКИЇВ\n03127\nУКРАЇНА", {locale: 'en-US'});
        
        // the country name is in German because this address is for a contact in a German database
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Володимир Свідерський ВУЛ ДУБІНІНА Володя 5");
        test.equal(parsedAddress.locality, "КИЇВ");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "03127");
        test.equal(parsedAddress.country, "УКРАЇНА");
        test.equal(parsedAddress.countryCode, "UA");
        test.done();
    },
    
    testFormatAddressUA: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Володимир Свідерський ВУЛ ДУБІНІНА Володя 5",
            locality: "КИЇВ",
            postalCode: "03127",
            country: "УКРАЇНА",
            countryCode: "UA"
        }, {locale: 'uk-UA'});
        
        var expected = "Володимир Свідерський ВУЛ ДУБІНІНА Володя 5\nКИЇВ\n03127\nУКРАЇНА";
        var formatter = new AddressFmt({locale: 'uk-UA'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressUAFromUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Володимир Свідерський ВУЛ ДУБІНІНА Володя 5",
            locality: "КИЇВ",
            postalCode: "03127",
            country: "УКРАЇНА",
            countryCode: "UA"
        }, {locale: 'en-US'});
        
        var expected = "Володимир Свідерський ВУЛ ДУБІНІНА Володя 5\nКИЇВ\n03127\nУКРАЇНА";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
    
};