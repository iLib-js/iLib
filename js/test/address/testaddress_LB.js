
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
 * distributed under the License is distributed on an "AS IS"BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the Specific language governing permissions and
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

module.exports.testaddress_LB = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAddressLBFRNormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Banque du Liban, P.O. Box 11–5544, RIAD EL SOLH BEIRUT 1107 2810, Liban", {locale: 'fr-LB'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Banque du Liban, P.O. Box 11–5544");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "RIAD EL SOLH BEIRUT");
        test.equal(parsedAddress.postalCode, "1107 2810");
        test.equal(parsedAddress.country, "Liban");
        test.equal(parsedAddress.countryCode, "LB");
        test.done();
    },
    
    testParseAddressLBFRNoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Banque du Liban, P.O. Box 11–5544, RIAD EL SOLH BEIRUT, Liban", {locale: 'fr-LB'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Banque du Liban, P.O. Box 11–5544");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "RIAD EL SOLH BEIRUT");
        test.equal(parsedAddress.country, "Liban");
        test.equal(parsedAddress.countryCode, "LB");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    
    testParseAddressLBFRManyLines: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Banque du Liban\nP.O. Box 11–5544\nRIAD EL SOLH BEIRUT 1107 2810\n Liban", {locale: 'fr-LB'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Banque du Liban, P.O. Box 11–5544");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "RIAD EL SOLH BEIRUT");
        test.equal(parsedAddress.postalCode, "1107 2810");
        test.equal(parsedAddress.country, "Liban");
        test.equal(parsedAddress.countryCode, "LB");
        test.done();
    },
    
    testParseAddressLBFROneLine: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Banque du Liban, P.O. Box 11–5544,RIAD EL SOLH BEIRUT 1107 2810, Liban", {locale: 'fr-LB'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Banque du Liban, P.O. Box 11–5544");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "RIAD EL SOLH BEIRUT");
        test.equal(parsedAddress.postalCode, "1107 2810");
        test.equal(parsedAddress.country, "Liban");
        test.equal(parsedAddress.countryCode, "LB");
        test.done();
    },
    
    testParseAddressLBFRSuperfluousWhitespace: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Banque du Liban \n P.O. Box 11–5544\t\n\n  RIAD EL SOLH BEIRUT 1107 2810  \nLiban  \t\t\t", {locale: 'fr-LB'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Banque du Liban, P.O. Box 11–5544");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "RIAD EL SOLH BEIRUT");
        test.equal(parsedAddress.postalCode, "1107 2810");
        test.equal(parsedAddress.country, "Liban");
        test.equal(parsedAddress.countryCode, "LB");
        test.done();
    },
    
    testParseAddressLBFRNoDelimiters: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Banque du Liban 2  P.O. Box 11–5544 RIAD EL SOLH BEIRUT 1107 2810  Liban", {locale: 'fr-LB'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Banque du Liban 2 P.O. Box 11–5544");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "RIAD EL SOLH BEIRUT");
        test.equal(parsedAddress.postalCode, "1107 2810");
        test.equal(parsedAddress.country, "Liban");
        test.equal(parsedAddress.countryCode, "LB");
        test.done();
    },
    
    testParseAddressLBFRSpecialChars: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Banque du Liban,P.O. Box 11–5544,RIAD EL SOLH BEIRUT 1107 2810, Liban", {locale: 'fr-LB'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Banque du Liban, P.O. Box 11–5544");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "RIAD EL SOLH BEIRUT");
        test.equal(parsedAddress.postalCode, "1107 2810");
        test.equal(parsedAddress.country, "Liban");
        test.equal(parsedAddress.countryCode, "LB");
        test.done();
    },
    
    testParseAddressLBFRFromUS: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Banque du Liban,P.O. Box 11–5544,RIAD EL SOLH BEIRUT 1107 2810, Lebanon", {locale: 'en-US'});
        
        // the country name is in English because this address is for a contact in a US database
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Banque du Liban, P.O. Box 11–5544");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "RIAD EL SOLH BEIRUT");
        test.equal(parsedAddress.postalCode, "1107 2810");
        test.equal(parsedAddress.country, "Lebanon");
        test.equal(parsedAddress.countryCode, "LB");
        test.done();
    },
    
    testFormatAddressLBFR: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Banque du Liban\nP.O. Box 11–5544",
            locality: "RIAD EL SOLH BEIRUT",
            country: "Liban",
            countryCode: "LB"
        }, {locale: 'fr-LB'});
        
        var expected = "Banque du Liban\nP.O. Box 11–5544\nRIAD EL SOLH BEIRUT\nLiban";
        var formatter = new AddressFmt({locale: 'fr-LB'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressLBFRFromUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Banque du Liban\nP.O. Box 11–5544",
            locality: "RIAD EL SOLH BEIRUT",
            country: "Lebanon",
            countryCode: "LB"
        }, {locale: 'en-US'});
        
        var expected = "Banque du Liban\nP.O. Box 11–5544\nRIAD EL SOLH BEIRUT\nLebanon";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    
    testParseAddressLBARNormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("مركز الفرز بيروت, مطار بيروت الدولي, بيروت ١٠٠٠, لبنان", {locale: 'ar-LB'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "مركز الفرز بيروت, مطار بيروت الدولي");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "بيروت");
        test.equal(parsedAddress.postalCode, "١٠٠٠");
        test.equal(parsedAddress.country, "لبنان");
        test.equal(parsedAddress.countryCode, "LB");
        test.done();
    },
    
    testParseAddressLBARNoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("مركز الفرز بيروت, مطار بيروت الدولي, بيروت , لبنان", {locale: 'ar-LB'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "مركز الفرز بيروت, مطار بيروت الدولي");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "بيروت");
        test.equal(parsedAddress.country, "لبنان");
        test.equal(parsedAddress.countryCode, "LB");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    
    testParseAddressLBARManyLines: function(test) {
        test.expect(7);
        var parsedAddress = new Address("مركز الفرز بيروت, مطار بيروت الدولي\nبيروت ١٠٠٠\n لبنان", {locale: 'ar-LB'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "مركز الفرز بيروت, مطار بيروت الدولي");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "بيروت");
        test.equal(parsedAddress.postalCode, "١٠٠٠");
        test.equal(parsedAddress.country, "لبنان");
        test.equal(parsedAddress.countryCode, "LB");
        test.done();
    },
    
    testParseAddressLBAROneLine: function(test) {
        test.expect(7);
        var parsedAddress = new Address("مركز الفرز بيروت, مطار بيروت الدولي,بيروت ١٠٠٠, لبنان", {locale: 'ar-LB'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "مركز الفرز بيروت, مطار بيروت الدولي");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "بيروت");
        test.equal(parsedAddress.postalCode, "١٠٠٠");
        test.equal(parsedAddress.country, "لبنان");
        test.equal(parsedAddress.countryCode, "LB");
        test.done();
    },
    
    testParseAddressLBARSuperfluousWhitespace: function(test) {
        test.expect(7);
        var parsedAddress = new Address("مركز الفرز بيروت, مطار بيروت الدولي   \n\t\n   بيروت ١٠٠٠  \n  \t\t\tلبنان", {locale: 'ar-LB'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "مركز الفرز بيروت, مطار بيروت الدولي");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "بيروت");
        test.equal(parsedAddress.postalCode, "١٠٠٠");
        test.equal(parsedAddress.country, "لبنان");
        test.equal(parsedAddress.countryCode, "LB");
        test.done();
    },
    
    /*
    testParseAddressLBARNoDelimiters: function(test) {
        test.expect(7);
        var parsedAddress = new Address("مركز الفرز بيروت, مطار بيروت الدولي  ٢ شارع الاستقلال  بيروت ١٠٠٠  لبنان", {locale: 'ar-LB'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "مركز الفرز بيروت, مطار بيروت الدولي ٢ شارع الاستقلا");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "بيروت");
        test.equal(parsedAddress.postalCode, "١٠٠٠");
        test.equal(parsedAddress.country, "لبنان");
        test.equal(parsedAddress.countryCode, "LB");
        test.done();
    },
    */
    
    testParseAddressLBARSpecialChars: function(test) {
        test.expect(7);
        var parsedAddress = new Address("مركز الفرز بيروت, مطار بيروت الدولي,بيروت ١٠٠٠, لبنان", {locale: 'ar-LB'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "مركز الفرز بيروت, مطار بيروت الدولي");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "بيروت");
        test.equal(parsedAddress.postalCode, "١٠٠٠");
        test.equal(parsedAddress.country, "لبنان");
        test.equal(parsedAddress.countryCode, "LB");
        test.done();
    },
    
    testParseAddressLBARFromUS: function(test) {
        test.expect(7);
        var parsedAddress = new Address("مركز الفرز بيروت , مطار بيروت الدولي ,بيروت ١٠٠٠, Lebanon", {locale: 'en-US'});
        
        // the country name is in English because this address is for a contact in a US database
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "مركز الفرز بيروت, مطار بيروت الدولي");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "بيروت");
        test.equal(parsedAddress.postalCode, "١٠٠٠");
        test.equal(parsedAddress.country, "Lebanon");
        test.equal(parsedAddress.countryCode, "LB");
        test.done();
    },
    
    testFormatARAddress: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "مركز الفرز بيروت, مطار بيروت الدولي",
            locality: "لبنان",
            country: "لبنان",
            countryCode: "LB"
        }, {locale: 'ar-LB'});
        
        var expected = "مركز الفرز بيروت, مطار بيروت الدولي\nلبنان\nلبنان";
        var formatter = new AddressFmt({locale: 'ar-LB'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressLBARFromUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "مركز الفرز بيروت, مطار بيروت الدولي",
            locality: "لبنان",
            country: "Lebanon",
            countryCode: "LB"
        }, {locale: 'en-US'});
        
        var expected = "مركز الفرز بيروت, مطار بيروت الدولي\nلبنان\nLebanon";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
    
};
