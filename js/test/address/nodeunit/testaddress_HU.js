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

module.exports.testaddress_HU = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAddressHUNormal: function(test) {
        var parsedAddress = new Address("Budapest, Fiktív utca 82., IV. em./28. - or - Pf. 184, 2806, HUNGARY", {locale: 'hu-HU'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Fiktív utca 82., IV. em./28. - or - Pf. 184");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "Budapest");
        test.equal(parsedAddress.postalCode, "2806");
        test.equal(parsedAddress.country, "HUNGARY");
        test.equal(parsedAddress.countryCode, "HU");
        test.done();
    },
    
    testParseAddressHUNoZip: function(test) {
        var parsedAddress = new Address("Budapest, Fiktív utca 82., IV. em./28. - or - Pf. 184, HUNGARY", {locale: 'hu-HU'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Fiktív utca 82., IV. em./28. - or - Pf. 184");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "Budapest");
        test.equal(parsedAddress.country, "HUNGARY");
        test.equal(parsedAddress.countryCode, "HU");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    
    testParseAddressHUManyLines: function(test) {
        var parsedAddress = new Address("Budapest\nHonvéd utca 13-15\n1055\nHUNGARY", {locale: 'hu-HU'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Honvéd utca 13-15");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "Budapest");
        test.equal(parsedAddress.postalCode, "1055");
        test.equal(parsedAddress.country, "HUNGARY");
        test.equal(parsedAddress.countryCode, "HU");
        test.done();
    },
    
    testParseAddressHUOneLine: function(test) {
        var parsedAddress = new Address("Budapest, Honvéd utca 13-15, 1055, HUNGARY", {locale: 'hu-HU'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Honvéd utca 13-15");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "Budapest");
        test.equal(parsedAddress.postalCode, "1055");
        test.equal(parsedAddress.country, "HUNGARY");
        test.equal(parsedAddress.countryCode, "HU");
        test.done();
    },
    
    testParseAddressHUSuperfluousWhitespace: function(test) {
        var parsedAddress = new Address("Budapest   \n\t\n Honvéd utca 13-15\t\n\n 1055\n\nHUNGARY  \n  \t\t\t", {locale: 'hu-HU'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Honvéd utca 13-15");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "Budapest");
        test.equal(parsedAddress.postalCode, "1055");
        test.equal(parsedAddress.country, "HUNGARY");
        test.equal(parsedAddress.countryCode, "HU");
        test.done();
    },
    
    testParseAddressHUNoDelimiters: function(test) {
        var parsedAddress = new Address("Budapest Honvéd utca 13-15 1055 HUNGARY", {locale: 'hu-HU'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Honvéd utca 13-15");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "Budapest");
        test.equal(parsedAddress.postalCode, "1055");
        test.equal(parsedAddress.country, "HUNGARY");
        test.equal(parsedAddress.countryCode, "HU");
        test.done();
    },
    
    testParseAddressHUSpecialChars: function(test) {
        var parsedAddress = new Address("Győr, Arató utca 7 fsz. 2, 9028, HUNGARY", {locale: 'hu-HU'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Arató utca 7 fsz. 2");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "Győr");
        test.equal(parsedAddress.postalCode, "9028");
        test.equal(parsedAddress.country, "HUNGARY");
        test.equal(parsedAddress.countryCode, "HU");
        test.done();
    },
    testParseAddressHUFromUS: function(test) {
        var parsedAddress = new Address("Győr, Arató utca 7 fsz. 2, 9028, Hungary", {locale: 'en-US'});
        
        // the country name is in English because this address is for a contact in a US database
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "Arató utca 7 fsz. 2");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "Győr");
        test.equal(parsedAddress.postalCode, "9028");
        test.equal(parsedAddress.country, "Hungary");
        test.equal(parsedAddress.countryCode, "HU");
        test.done();
    },
    
    testFormatAddressHU: function(test) {
        var parsedAddress = new Address({
            streetAddress: "Fiktív utca 82., IV. em./28. - or - Pf. 184.",
            locality: "Budapest",
            postalCode: "2806",
            country: "HUNGARY",
            countryCode: "HU"
        }, {locale: 'hu-HU'});
        
        var expected = "Budapest\nFiktív utca 82., IV. em./28. - or - Pf. 184.\n2806\nHUNGARY";
        var formatter = new AddressFmt({locale: 'hu-HU'});
        test.expect(1);
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressHUFromUS: function(test) {
        var parsedAddress = new Address({
            streetAddress: "Fiktív utca 82., IV. em./28. - or - Pf. 184.",
            locality: "Budapest",
            postalCode: "2806",
            country: "Hungary",
            countryCode: "HU"
        }, {locale: 'en-US'});
        
        var expected = "Budapest\nFiktív utca 82., IV. em./28. - or - Pf. 184.\n2806\nHungary";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.expect(1);
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
    
};