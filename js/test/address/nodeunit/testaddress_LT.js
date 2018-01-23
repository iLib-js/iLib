/*
 * testaddress_PY.js - test the address parsing and formatting routines
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

module.exports.testaddress_LT = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAddressLTNormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Adelei Mickienei Plento g. 17-2 Ariogala\n60249 Raseiniu r.sav\nLITHUANIA", {locale: 'lt-LT'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Adelei Mickienei Plento g. 17-2 Ariogala");
        test.equal(parsedAddress.locality, "Raseiniu r.sav");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "60249");
        test.equal(parsedAddress.country, "LITHUANIA");
        test.equal(parsedAddress.countryCode, "LT");
        test.done();
    },
    
    testParseAddressLTNoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Adelei Mickienei Plento g. 17-2 Ariogala\nRaseiniu r.sav\nLITHUANIA", {locale: 'lt-LT'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Adelei Mickienei Plento g. 17-2 Ariogala");
        test.equal(parsedAddress.locality, "Raseiniu r.sav");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.country, "LITHUANIA");
        test.equal(parsedAddress.countryCode, "LT");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    
    testParseAddressLTNoCountry: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Adelei Mickienei Plento g. 17-2 Ariogala\n60249 Raseiniu r.sav", {locale: 'lt-LT'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Adelei Mickienei Plento g. 17-2 Ariogala");
        test.equal(parsedAddress.locality, "Raseiniu r.sav");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "60249");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "LT");
        test.done();
    },
    
    testParseAddressLTManyLines: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Adelei Mickienei\nPlento g.\n17-2 Ariogala\n\n60249\n\nRaseiniu r.sav\n\n\nLITHUANIA\n\n\n", {locale: 'lt-LT'});
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Adelei Mickienei, Plento g., 17-2 Ariogala");
        test.equal(parsedAddress.locality, "Raseiniu r.sav");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "60249");
        test.equal(parsedAddress.country, "LITHUANIA");
        test.equal(parsedAddress.countryCode, "LT");
        test.done();
    },
    
    testParseAddressLTOneLine: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Adelei Mickienei , Plento g. , 17-2 Ariogala , 60249 , Raseiniu r.sav , LITHUANIA", {locale: 'lt-LT'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Adelei Mickienei, Plento g., 17-2 Ariogala");
        test.equal(parsedAddress.locality, "Raseiniu r.sav");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "60249");
        test.equal(parsedAddress.country, "LITHUANIA");
        test.equal(parsedAddress.countryCode, "LT");
        test.done();
    },
    
    testParseAddressLTSuperfluousWhitespace: function(test) {
        test.expect(7);
        var parsedAddress = new Address("\t\t\tAdelei Mickienei\t\t\rPlento g.\t\t\r17-2 Ariogala\n\n60249\n\nRaseiniu r.sav\n\t LITHUANIA\n\n\n", {locale: 'lt-LT'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Adelei Mickienei Plento g. 17-2 Ariogala");
        test.equal(parsedAddress.locality, "Raseiniu r.sav");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "60249");
        test.equal(parsedAddress.country, "LITHUANIA");
        test.equal(parsedAddress.countryCode, "LT");
        test.done();
    },
    
    testParseAddressLTNoDelimiters: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Adelei Mickienei Plento g. 17-2 Ariogala 60249 Raseiniu r.sav LITHUANIA", {locale: 'lt-LT'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Adelei Mickienei Plento g. 17-2 Ariogala");
        test.equal(parsedAddress.locality, "Raseiniu r.sav");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "60249");
        test.equal(parsedAddress.country, "LITHUANIA");
        test.equal(parsedAddress.countryCode, "LT");
        test.done();
    },
    
    testParseAddressLTFromUS: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Adelei Mickienei Plento g. 17-2 Ariogala\n60249 Raseiniu r.sav\nLITHUANIA", {locale: 'en-US'});
        
        // the country name is in German because this address is for a contact in a German database
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Adelei Mickienei Plento g. 17-2 Ariogala");
        test.equal(parsedAddress.locality, "Raseiniu r.sav");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "60249");
        test.equal(parsedAddress.country, "LITHUANIA");
        test.equal(parsedAddress.countryCode, "LT");
        test.done();
    },
    
    testFormatAddressLT: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Adelei Mickienei Plento g. 17-2 Ariogala",
            locality: "Raseiniu r.sav",
            postalCode: "60249",
            country: "LITHUANIA",
            countryCode: "LT"
        }, {locale: 'lt-LT'});
        
        var expected = "Adelei Mickienei Plento g. 17-2 Ariogala\n60249 Raseiniu r.sav\nLITHUANIA";
        var formatter = new AddressFmt({locale: 'lt-LT'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressLTFromUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Adelei Mickienei Plento g. 17-2 Ariogala",
            locality: "Raseiniu r.sav",
            postalCode: "60249",
            country: "LITHUANIA",
            countryCode: "LT"
        }, {locale: 'en-US'});
        
        var expected = "Adelei Mickienei Plento g. 17-2 Ariogala\n60249 Raseiniu r.sav\nLITHUANIA";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
    
};