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

module.exports.testaddress_AZ = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAZAddressNormal: function(test) {
        var parsedAddress = new Address("ILHAZ SHAHRIAR, 45 Hatai Str., 2012 GÄNCÄ, AZERBAIJAN", {locale: 'en-AZ'});
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "ILHAZ SHAHRIAR, 45 Hatai Str.");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "GÄNCÄ");
        test.equal(parsedAddress.postalCode, "2012");
        test.equal(parsedAddress.country, "AZERBAIJAN");
        test.equal(parsedAddress.countryCode, "AZ");
        test.done();
    },
    
    testParseAZAddressNoZip: function(test) {
        var parsedAddress = new Address("ILHAZ SHAHRIAR, 45 Hatai Str.,GÄNCÄ, AZERBAIJAN", {locale: 'en-AZ'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "ILHAZ SHAHRIAR, 45 Hatai Str.");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "GÄNCÄ");
        test.equal(parsedAddress.country, "AZERBAIJAN");
        test.equal(parsedAddress.countryCode, "AZ");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    
    testParseAZAddressManyLines: function(test) {
        var parsedAddress = new Address("ILHAZ SHAHRIAR\n45 Hatai Str.\n2012 GÄNCÄ\nAZERBAIJAN", {locale: 'en-AZ'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "ILHAZ SHAHRIAR, 45 Hatai Str.");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "GÄNCÄ");
        test.equal(parsedAddress.postalCode, "2012");
        test.equal(parsedAddress.country, "AZERBAIJAN");
        test.equal(parsedAddress.countryCode, "AZ");
        test.done();
    },
    
    testParseAZAddressOneLine: function(test) {
        var parsedAddress = new Address("ILHAZ SHAHRIAR, 45 Hatai Str., 2012 GÄNCÄ, AZERBAIJAN", {locale: 'en-AZ'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "ILHAZ SHAHRIAR, 45 Hatai Str.");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "GÄNCÄ");
        test.equal(parsedAddress.postalCode, "2012");
        test.equal(parsedAddress.country, "AZERBAIJAN");
        test.equal(parsedAddress.countryCode, "AZ");
        test.done();
    },
    
    testParseAZAddressSuperfluousWhitespace: function(test) {
        var parsedAddress = new Address("ILHAZ SHAHRIAR, 45 Hatai Str.  \n\t\n 2012 GÄNCÄ\t\n\n AZERBAIJAN  \n  \t\t\t", {locale: 'en-AZ'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "ILHAZ SHAHRIAR, 45 Hatai Str.");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "GÄNCÄ");
        test.equal(parsedAddress.postalCode, "2012");
        test.equal(parsedAddress.country, "AZERBAIJAN");
        test.equal(parsedAddress.countryCode, "AZ");
        test.done();
    },
    
    testParseAZAddressNoDelimiters: function(test) {
        var parsedAddress = new Address("ILHAZ SHAHRIAR 45 Hatai Str. 2012 GÄNCÄ AZERBAIJAN", {locale: 'en-AZ'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "ILHAZ SHAHRIAR 45 Hatai Str.");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "GÄNCÄ");
        test.equal(parsedAddress.postalCode, "2012");
        test.equal(parsedAddress.country, "AZERBAIJAN");
        test.equal(parsedAddress.countryCode, "AZ");
        test.done();
    },
    
    testParseAZAddressSpecialChars: function(test) {
        var parsedAddress = new Address("ILHAZ SHAHRIAR, 45 Hatai Str., 2012 GÄNCÄ, AZERBAIJAN", {locale: 'en-AZ'});
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "ILHAZ SHAHRIAR, 45 Hatai Str.");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "GÄNCÄ");
        test.equal(parsedAddress.postalCode, "2012");
        test.equal(parsedAddress.country, "AZERBAIJAN");
        test.equal(parsedAddress.countryCode, "AZ");
        test.done();
    },
    
    testParseAZAddressFromUS: function(test) {
        var parsedAddress = new Address("ILHAZ SHAHRIAR, 45 Hatai Str., 2012 GÄNCÄ, AZERBAIJAN", {locale: 'en-US'});
        
        // the country nAZe is in English because this address is for a contact in a US database
        
        test.expect(7);
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "ILHAZ SHAHRIAR, 45 Hatai Str.");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.locality, "GÄNCÄ");
        test.equal(parsedAddress.postalCode, "2012");
        test.equal(parsedAddress.country, "AZERBAIJAN");
        test.equal(parsedAddress.countryCode, "AZ");
        test.done();
    },
    
    testFormatAddressAZ: function(test) {
        var parsedAddress = new Address({
            streetAddress: "ILHAZ SHAHRIAR, 45 Hatai Str.",
            locality: "GÄNCÄ",
            postalCode: "2012",
            country: "AZERBAIJAN",
            countryCode: "AZ"
        }, {locale: 'en-AZ'});
        
        var expected = "ILHAZ SHAHRIAR, 45 Hatai Str.\n2012 GÄNCÄ\nAZERBAIJAN";
        var formatter = new AddressFmt({locale: 'en-AZ'});
        test.expect(1);
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressAZFromUS: function(test) {
        var parsedAddress = new Address({
            streetAddress: "ILHAZ SHAHRIAR, 45 Hatai Str.",
            postalCode: "2012",
            country: "AZERBAIJAN",
            locality: "GÄNCÄ",
            countryCode: "AZ"
        }, {locale: 'en-US'});
        
        var expected = "ILHAZ SHAHRIAR, 45 Hatai Str.\n2012 GÄNCÄ\nAZERBAIJAN";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.expect(1);
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
    
};