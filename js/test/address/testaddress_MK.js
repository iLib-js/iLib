/*
 * testaddress_MK.js - test the address parsing and formatting routines
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

module.exports.testaddress_MK = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAddressMKNormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Сања Јанчевски ГРАДСКИ ПАЗАР 5\n6000 ОХРИД\nМАКЕДОНИЈА", {locale: 'mk-MK'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Сања Јанчевски ГРАДСКИ ПАЗАР 5");
        test.equal(parsedAddress.locality, "ОХРИД");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "6000");
        test.equal(parsedAddress.country, "МАКЕДОНИЈА");
        test.equal(parsedAddress.countryCode, "MK");
        test.done();
    },
    
    testParseAddressMKNoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Сања Јанчевски ГРАДСКИ ПАЗАР 5\nОХРИД\nМАКЕДОНИЈА", {locale: 'mk-MK'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Сања Јанчевски ГРАДСКИ ПАЗАР 5");
        test.equal(parsedAddress.locality, "ОХРИД");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.country, "МАКЕДОНИЈА");
        test.equal(parsedAddress.countryCode, "MK");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    
    testParseAddressMKNoCountry: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Сања Јанчевски ГРАДСКИ ПАЗАР 5\n6000 ОХРИД", {locale: 'mk-MK'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Сања Јанчевски ГРАДСКИ ПАЗАР 5");
        test.equal(parsedAddress.locality, "ОХРИД");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "6000");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "MK");
        test.done();
    },
    
    testParseAddressMKManyLines: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Сања Јанчевски\nГРАДСКИ\nПАЗАР 5\n\n6000\n\nОХРИД\n\n\nМАКЕДОНИЈА\n\n\n", {locale: 'mk-MK'});
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Сања Јанчевски, ГРАДСКИ, ПАЗАР 5");
        test.equal(parsedAddress.locality, "ОХРИД");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "6000");
        test.equal(parsedAddress.country, "МАКЕДОНИЈА");
        test.equal(parsedAddress.countryCode, "MK");
        test.done();
    },
    
    testParseAddressMKOneLine: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Сања Јанчевски , ГРАДСКИ , ПАЗАР 5 , 6000 , ОХРИД , МАКЕДОНИЈА", {locale: 'mk-MK'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Сања Јанчевски, ГРАДСКИ, ПАЗАР 5");
        test.equal(parsedAddress.locality, "ОХРИД");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "6000");
        test.equal(parsedAddress.country, "МАКЕДОНИЈА");
        test.equal(parsedAddress.countryCode, "MK");
        test.done();
    },
    
    testParseAddressMKSuperfluousWhitespace: function(test) {
        test.expect(7);
        var parsedAddress = new Address("\t\t\tСања Јанчевски\t\t\rГРАДСКИ\t\t\rПАЗАР 5\n\n6000\n\nОХРИД\n\t МАКЕДОНИЈА\n\n\n", {locale: 'mk-MK'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Сања Јанчевски ГРАДСКИ ПАЗАР 5");
        test.equal(parsedAddress.locality, "ОХРИД");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "6000");
        test.equal(parsedAddress.country, "МАКЕДОНИЈА");
        test.equal(parsedAddress.countryCode, "MK");
        test.done();
    },
    
    testParseAddressMKNoDelimiters: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Сања Јанчевски ГРАДСКИ ПАЗАР 5 6000 ОХРИД МАКЕДОНИЈА", {locale: 'mk-MK'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Сања Јанчевски ГРАДСКИ ПАЗАР 5");
        test.equal(parsedAddress.locality, "ОХРИД");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "6000");
        test.equal(parsedAddress.country, "МАКЕДОНИЈА");
        test.equal(parsedAddress.countryCode, "MK");
        test.done();
    },
    
    testParseAddressMKFromUS: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Сања Јанчевски ГРАДСКИ ПАЗАР 5\n6000 ОХРИД\nМАКЕДОНИЈА", {locale: 'en-US'});
        
        // the country name is in German because this address is for a contact in a German database
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Сања Јанчевски ГРАДСКИ ПАЗАР 5");
        test.equal(parsedAddress.locality, "ОХРИД");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "6000");
        test.equal(parsedAddress.country, "МАКЕДОНИЈА");
        test.equal(parsedAddress.countryCode, "MK");
        test.done();
    },
    
    testFormatAddressMK: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Сања Јанчевски ГРАДСКИ ПАЗАР 5",
            locality: "ОХРИД",
            postalCode: "6000",
            country: "МАКЕДОНИЈА",
            countryCode: "MK"
        }, {locale: 'mk-MK'});
        
        var expected = "Сања Јанчевски ГРАДСКИ ПАЗАР 5\n6000 ОХРИД\nМАКЕДОНИЈА";
        var formatter = new AddressFmt({locale: 'mk-MK'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressMKFromUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Сања Јанчевски ГРАДСКИ ПАЗАР 5",
            locality: "ОХРИД",
            postalCode: "6000",
            country: "МАКЕДОНИЈА",
            countryCode: "MK"
        }, {locale: 'en-US'});
        
        var expected = "Сања Јанчевски ГРАДСКИ ПАЗАР 5\n6000 ОХРИД\nМАКЕДОНИЈА";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
    
};
