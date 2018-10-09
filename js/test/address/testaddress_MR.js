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

module.exports.testaddress_MR = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAddressMRNormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("السيد حامد ولد أحمد, الغزالي ١٢,نواكشوط, موريتانيا", {locale: 'ar-MR'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "السيد حامد ولد أحمد, الغزالي ١٢");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "نواكشوط");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "موريتانيا");
        test.equal(parsedAddress.countryCode, "MR");
        test.done();
    },
    
    testParseAddressMRNoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("السيد حامد ولد أحمد, الغزالي ١٢,نواكشوط, موريتانيا", {locale: 'ar-MR'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "السيد حامد ولد أحمد, الغزالي ١٢");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "نواكشوط");
        test.equal(parsedAddress.country, "موريتانيا");
        test.equal(parsedAddress.countryCode, "MR");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    
    testParseAddressMRManyLines: function(test) {
        test.expect(7);
        var parsedAddress = new Address("السيد حامد ولد أحمد, الغزالي ١٢\nطرابلس\n موريتانيا", {locale: 'ar-MR'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "السيد حامد ولد أحمد, الغزالي ١٢");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "طرابلس");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "موريتانيا");
        test.equal(parsedAddress.countryCode, "MR");
        test.done();
    },
    
    testParseAddressMROneLine: function(test) {
        test.expect(7);
        var parsedAddress = new Address("السيد حامد ولد أحمد, الغزالي ١٢,طرابلس, موريتانيا", {locale: 'ar-MR'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "السيد حامد ولد أحمد, الغزالي ١٢");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "طرابلس");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "موريتانيا");
        test.equal(parsedAddress.countryCode, "MR");
        test.done();
    },
    
    testParseAddressMRSuperfluousWhitespace: function(test) {
        test.expect(7);
        var parsedAddress = new Address("السيد حامد ولد أحمد, الغزالي ١٢   \n\t\nطرابلس\t\n\n  موريتانيا  \n  \t\t\t", {locale: 'ar-MR'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "السيد حامد ولد أحمد, الغزالي ١٢");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "طرابلس");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "موريتانيا");
        test.equal(parsedAddress.countryCode, "MR");
        test.done();
    },
    
    testParseAddressMRNoDelimiters: function(test) {
        test.expect(7);
        var parsedAddress = new Address("السيد حامد ولد أحمد الغزالي ١٢ نواكشوط موريتانيا", {locale: 'ar-MR'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "السيد حامد ولد أحمد الغزالي ١٢");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "نواكشوط");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "موريتانيا");
        test.equal(parsedAddress.countryCode, "MR");
        test.done();
    },
    
    testParseAddressMRSpecialChars: function(test) {
        test.expect(7);
        var parsedAddress = new Address("السيد حامد ولد أحمد, الغزالي ١٢,طرابلس, موريتانيا", {locale: 'ar-MR'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "السيد حامد ولد أحمد, الغزالي ١٢");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "طرابلس");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "موريتانيا");
        test.equal(parsedAddress.countryCode, "MR");
        test.done();
    },
    
    testParseAddressMRFromUS: function(test) {
        test.expect(7);
        var parsedAddress = new Address("السيد حامد ولد أحمد, الغزالي ١٢,طرابلس, Mauritania ", {locale: 'en-US'});
        
        // the country name is in English because this address is for a contact in a US database
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "السيد حامد ولد أحمد, الغزالي ١٢");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "طرابلس");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.equal(parsedAddress.country, "Mauritania");
        test.equal(parsedAddress.countryCode, "MR");
        test.done();
    },
    
    testFormatAddressMR: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "السيد حامد ولد أحمد, الغزالي ١٢",
            locality: "طرابلس",
            country: "موريتانيا",
            countryCode: "MR"
        }, {locale: 'ar-MR'});
        
        var expected = "السيد حامد ولد أحمد, الغزالي ١٢\nطرابلس\nموريتانيا";
        var formatter = new AddressFmt({locale: 'ar-MR'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressMRARFromUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "السيد حامد ولد أحمد, الغزالي ١٢",
            locality: "طرابلس",
            country: "Mauritania",
            countryCode: "MR"
        }, {locale: 'en-US'});
        
        var expected = "السيد حامد ولد أحمد, الغزالي ١٢\nطرابلس\nMauritania";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
    
};
