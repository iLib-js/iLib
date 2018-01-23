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
    var ilib = require("../../../lib/ilib.js");
}

module.exports.testaddress_HR = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAddressHRNormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Hrvoje Horvat, Ulica Maršala Tita 174, HR-51410 Opatija, Croatia", {locale: 'hr-HR'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Hrvoje Horvat, Ulica Maršala Tita 174");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "Opatija");
        test.equal(parsedAddress.postalCode, "HR-51410");
        test.equal(parsedAddress.country, "Croatia");
        test.equal(parsedAddress.countryCode, "HR");
        test.done();
    },
    
    testParseAddressHRNoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Hrvoje Horvat, Ulica Maršala Tita 174, HR-51410 Opatija, Croatia", {locale: 'hr-HR'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Hrvoje Horvat, Ulica Maršala Tita 174");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "Opatija");
        test.equal(parsedAddress.country, "Croatia");
        test.equal(parsedAddress.countryCode, "HR");
        test.equal(parsedAddress.postalCode, "HR-51410");
        test.done();
    },
    
    testParseAddressHRManyLines: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Hrvoje Horvat\nUlica Maršala Tita 174\nHR-51410 Opatija\nCroatia", {locale: 'hr-HR'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Hrvoje Horvat, Ulica Maršala Tita 174");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "Opatija");
        test.equal(parsedAddress.postalCode, "HR-51410");
        test.equal(parsedAddress.country, "Croatia");
        test.equal(parsedAddress.countryCode, "HR");
        test.done();
    },
    
    testParseAddressHROneLine: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Hrvoje Horvat, Ulica Maršala Tita 174, HR-51410 Opatija, Croatia", {locale: 'hr-HR'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Hrvoje Horvat, Ulica Maršala Tita 174");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "Opatija");
        test.equal(parsedAddress.postalCode, "HR-51410");
        test.equal(parsedAddress.country, "Croatia");
        test.equal(parsedAddress.countryCode, "HR");
        test.done();
    },
    
    testParseAddressHRSuperfluousWhitespace: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Hrvoje Horvat, Ulica Maršala Tita 174  \n\t\n HR-51410 Opatija\t\n\n Croatia  \n  \t\t\t", {locale: 'hr-HR'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Hrvoje Horvat, Ulica Maršala Tita 174");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "Opatija");
        test.equal(parsedAddress.postalCode, "HR-51410");
        test.equal(parsedAddress.country, "Croatia");
        test.equal(parsedAddress.countryCode, "HR");
        test.done();
    },
    
    testParseAddressHRNoDelimiters: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Hrvoje Horvat Ulica Maršala Tita 174 HR-51410 Opatija Croatia", {locale: 'hr-HR'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Hrvoje Horvat Ulica Maršala Tita 174");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "Opatija");
        test.equal(parsedAddress.postalCode, "HR-51410");
        test.equal(parsedAddress.country, "Croatia");
        test.equal(parsedAddress.countryCode, "HR");
        test.done();
    },
    
    testParseAddressHRSpecialChars: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Annette Ruzicka, BISTRIČKA 9 A, 31225 BREZNICA NAŠIČKA, Croatia", {locale: 'hr-HR'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Annette Ruzicka, BISTRIČKA 9 A");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "BREZNICA NAŠIČKA");
        test.equal(parsedAddress.postalCode, "31225");
        test.equal(parsedAddress.country, "Croatia");
        test.equal(parsedAddress.countryCode, "HR");
        test.done();
    },
    
    testParseAddressHRFromUS: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Hrvoje Horvat, Ulica Maršala Tita 174, HR-51410 Opatija, Croatia", {locale: 'en-US'});
        
        // the country name is in English because this address is for a contact in a US database
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Hrvoje Horvat, Ulica Maršala Tita 174");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "Opatija");
        test.equal(parsedAddress.postalCode, "HR-51410");
        test.equal(parsedAddress.country, "Croatia");
        test.equal(parsedAddress.countryCode, "HR");
        test.done();
    },
    
    testFormatAddressHR: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Hrvoje Horvat, Ulica Maršala Tita 174",
            locality: "Opatija",
            postalCode: "HR-51410",
            country: "Croatia",
            countryCode: "HR"
        }, {locale: 'hr-HR'});
        
        var expected = "Hrvoje Horvat, Ulica Maršala Tita 174\nHR-51410 Opatija\nCroatia";
        var formatter = new AddressFmt({locale: 'hr-HR'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressHRFromUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Hrvoje Horvat, Ulica Maršala Tita 174",
            locality: "Opatija",
            postalCode: "HR-51410",
            country: "Croatia",
            countryCode: "HR"
        }, {locale: 'en-US'});
        
        var expected = "Hrvoje Horvat, Ulica Maršala Tita 174\nHR-51410 Opatija\nCroatia";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
    
};