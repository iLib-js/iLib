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

module.exports.testaddress_DE = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAddressDENormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Herrenberger Straße 140, 71034 Böblingen, Deutschland", {locale: 'de-DE'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Herrenberger Straße 140");
        test.equal(parsedAddress.locality, "Böblingen");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "71034");
        test.equal(parsedAddress.country, "Deutschland");
        test.equal(parsedAddress.countryCode, "DE");
        test.done();
    },
    
    testParseAddressDENoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Berliner Straße 111, Ratingen, Deutschland", {locale: 'de-DE'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Berliner Straße 111");
        test.equal(parsedAddress.locality, "Ratingen");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.country, "Deutschland");
        test.equal(parsedAddress.countryCode, "DE");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    
    testParseAddressDENoCountry: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Herrenberger Straße 140, 71034 Böblingen", {locale: 'de-DE'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Herrenberger Straße 140");
        test.equal(parsedAddress.locality, "Böblingen");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "71034");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "DE");
        test.done();
    },
    
    testParseAddressDEManyLines: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Altrottstraße 31\nPartner Port SAP\n69190\nWalldorf/Baden\nDeutschland\n\n\n", {locale: 'de-DE'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Altrottstraße 31, Partner Port SAP");
        test.equal(parsedAddress.locality, "Walldorf/Baden");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "69190");
        test.equal(parsedAddress.country, "Deutschland");
        test.equal(parsedAddress.countryCode, "DE");
        test.done();
    },
    
    testParseAddressDEOneLine: function(test) {
        test.expect(7);
        var parsedAddress = new Address("ABC-Strasse 19, 20354 Hamburg, Deutschland", {locale: 'de-DE'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "ABC-Strasse 19");
        test.equal(parsedAddress.locality, "Hamburg");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "20354");
        test.equal(parsedAddress.country, "Deutschland");
        test.equal(parsedAddress.countryCode, "DE");
        test.done();
    },
    
    testParseAddressDESuperfluousWhitespace: function(test) {
        test.expect(7);
        var parsedAddress = new Address("\t\t\tAltrottstraße 31\n\n\nPartner Port SAP\n   \t\n69190\n   \r\t\n Walldorf/Baden\n   \t \t \t Deutschland\n\n\n", {locale: 'de-DE'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Altrottstraße 31, Partner Port SAP");
        test.equal(parsedAddress.locality, "Walldorf/Baden");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "69190");
        test.equal(parsedAddress.country, "Deutschland");
        test.equal(parsedAddress.countryCode, "DE");
        test.done();
    },
    
    testParseAddressDENoDelimiters: function(test) {
        test.expect(7);
        var parsedAddress = new Address("ABC-Strasse 19 20354 Hamburg Deutschland", {locale: 'de-DE'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "ABC-Strasse 19");
        test.equal(parsedAddress.locality, "Hamburg");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "20354");
        test.equal(parsedAddress.country, "Deutschland");
        test.equal(parsedAddress.countryCode, "DE");
        test.done();
    },
    
    testParseAddressDESpecialChars: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Geschäftsstelle Lützowplatz 15\n(Eingang Einemstraße 24)\n10785 Würtzheim", {locale: 'de-DE'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Geschäftsstelle Lützowplatz 15, (Eingang Einemstraße 24)");
        test.equal(parsedAddress.locality, "Würtzheim");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "10785");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "DE");
        test.done();
    },
    
    testParseAddressDEFromUS: function(test) {
        test.expect(7);
        var parsedAddress = new Address("Dienerstrasse 12\n80331 Munich\nGermany", {locale: 'en-US'});
        
        // the country name is in English because this address is for a contact in a US database
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Dienerstrasse 12");
        test.equal(parsedAddress.locality, "Munich");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "80331");
        test.equal(parsedAddress.country, "Germany");
        test.equal(parsedAddress.countryCode, "DE");
        test.done();
    },
    
    testFormatAddressDEDE: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Dienerstrasse 12",
            locality: "München",
            postalCode: "80331",
            country: "Deutschland",
            countryCode: "DE"
        }, {locale: 'de-DE'});
        
        var expected = "Dienerstrasse 12\n80331 München\nDeutschland";
        var formatter = new AddressFmt({locale: 'de-DE'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressDEFromUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "Dienerstrasse 12",
            locality: "Munich",
            postalCode: "80331",
            country: "Germany",
            countryCode: "DE"
        }, {locale: 'en-US'});
        
        var expected = "Dienerstrasse 12\n80331 Munich\nGermany";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
    
};