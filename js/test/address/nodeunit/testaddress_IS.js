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
    var Address = require("../../../lib/Address.js");
}
if (typeof(AddressFmt) === "undefined") {
    var AddressFmt = require("../../../lib/AddressFmt.js");
}
if (typeof(ilib) === "undefined") {
    var ilib = require("../../..");
}

module.exports.testaddress_IS = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAddressISNormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Gudmundur Jonasson Travel\nBorgartun 34\n105 REYKJAVÍK\nICELAND", {locale: 'en-IS'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Gudmundur Jonasson Travel, Borgartun 34");
        test.equal(parsedAddress.locality, "REYKJAVÍK");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "105");
        test.equal(parsedAddress.country, "ICELAND");
        test.equal(parsedAddress.countryCode, "IS");
        test.done();
    },
    
    testParseAddressISNoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Gudmundur Jonasson Travel\nBorgartun 34\nREYKJAVÍK", {locale: 'en-IS'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Gudmundur Jonasson Travel, Borgartun 34");
        test.equal(parsedAddress.locality, "REYKJAVÍK");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "IS");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    
    testParseAddressISNoCountry: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Wabbitwatchin Excursions\n121 REYKJAVÍK", {locale: 'en-IS'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Wabbitwatchin Excursions");
        test.equal(parsedAddress.locality, "REYKJAVÍK");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "121");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "IS");
        test.done();
    },
    
    testParseAddressISManyLines: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Elmér Fúdd\nWabbitwatchin Excursions\nPósthólf 1034\n121 REYKJAVÍK\nICELAND", {locale: 'en-IS'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Elmér Fúdd, Wabbitwatchin Excursions, Pósthólf 1034");
        test.equal(parsedAddress.locality, "REYKJAVÍK");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "121");
        test.equal(parsedAddress.country, "ICELAND");
        test.equal(parsedAddress.countryCode, "IS");
        test.done();
    },
    
    testParseAddressISOneLine: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Elmér Fúdd, Wabbitwatchin Excursions, Pósthólf 1034, 121 REYKJAVÍK, ICELAND", {locale: 'en-IS'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Elmér Fúdd, Wabbitwatchin Excursions, Pósthólf 1034");
        test.equal(parsedAddress.locality, "REYKJAVÍK");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "121");
        test.equal(parsedAddress.country, "ICELAND");
        test.equal(parsedAddress.countryCode, "IS");
        test.done();
    },
    
    testParseAddressISSuperfluousWhitespace: function(test) {
        test.expect(7);
        var parsedAddress = new Address("\t\t\tElmér Fúdd\n\t\t\tWabbitwatchin Excursions, \t\t\t\r\r Pósthólf 1034, \n\t\n121 REYKJAVÍK\t\n\t \nICELAND\n\n", {locale: 'en-IS'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Elmér Fúdd, Wabbitwatchin Excursions, Pósthólf 1034");
        test.equal(parsedAddress.locality, "REYKJAVÍK");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "121");
        test.equal(parsedAddress.country, "ICELAND");
        test.equal(parsedAddress.countryCode, "IS");
        test.done();
    },
    
    testParseAddressISNoDelimiters: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Elmér Fúdd Wabbitwatchin Excursions Pósthólf 1034 121 REYKJAVÍK ICELAND", {locale: 'en-IS'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Elmér Fúdd Wabbitwatchin Excursions Pósthólf 1034");
        test.equal(parsedAddress.locality, "REYKJAVÍK");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "121");
        test.equal(parsedAddress.country, "ICELAND");
        test.equal(parsedAddress.countryCode, "IS");
        test.done();
    },
    
    testParseAddressISFromDE: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Gudmundur Jonasson Travel\nBorgartun 34\n105 REYKJAVÍK\nisland", {locale: 'de-DE'});
        
        // the country name is in German because this address is for a contact in a German database
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Gudmundur Jonasson Travel, Borgartun 34");
        test.equal(parsedAddress.locality, "REYKJAVÍK");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "105");
        test.equal(parsedAddress.country, "island");
        test.equal(parsedAddress.countryCode, "IS");
        test.done();
    },
    
    testFormatAddressIS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Gudmundur Jonasson Travel, Borgartun 34",
            locality: "REYKJAVÍK",
            postalCode: "105",
            country: "ISLAND",
            countryCode: "IS"
        }, {locale: 'en-IS'});
        
        var expected = "Gudmundur Jonasson Travel, Borgartun 34\n105 REYKJAVÍK\nISLAND";
        var formatter = new AddressFmt({locale: 'en-IS'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressISFromDE: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Gudmundur Jonasson Travel, Borgartun 34",
            locality: "REYKJAVÍK",
            postalCode: "105",
            country: "island",
            countryCode: "IS"
        }, {locale: 'de-DE'});
        
        var expected = "Gudmundur Jonasson Travel, Borgartun 34\n105 REYKJAVÍK\nisland";
        var formatter = new AddressFmt({locale: 'de-DE'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
    
};