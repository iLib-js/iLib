/*
 * testaddress_SY.js - test the address parsing and formatting routines
 * 
 * Copyright © 2٠١3, JEDLSoft
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

module.exports.testaddress_SY = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAddressSYNormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("ﺎﻠﺴﻳﺩ ﻢﺤﻣﺩ ﻊﻠﻳ ٠١ ٠٢/٠٠٩١ ﺵﺍﺮﻋ ﻱﻮﺴﻓ ﻻ ٢٥٠٦ ﺎﻟﺰﻳ ﺎﻠﻣﺩﺮﺴﻳ\n٠١٠٠ ﺪﻤﺸﻗ\nسوريا", {locale: 'ar-SY'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "ﺎﻠﺴﻳﺩ ﻢﺤﻣﺩ ﻊﻠﻳ ٠١ ٠٢/٠٠٩١ ﺵﺍﺮﻋ ﻱﻮﺴﻓ ﻻ ٢٥٠٦ ﺎﻟﺰﻳ ﺎﻠﻣﺩﺮﺴﻳ");
        test.equal(parsedAddress.locality, "ﺪﻤﺸﻗ");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "٠١٠٠");
        test.equal(parsedAddress.country, "سوريا");
        test.equal(parsedAddress.countryCode, "SY");
        test.done();
    },
    
    testParseAddressSYNoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("ﺎﻠﺴﻳﺩ ﻢﺤﻣﺩ ﻊﻠﻳ ٠١ ٠٢/٠٠٩١ ﺵﺍﺮﻋ ﻱﻮﺴﻓ ﻻ ٢٥٠٦ ﺎﻟﺰﻳ ﺎﻠﻣﺩﺮﺴﻳ\nﺪﻤﺸﻗ\nسوريا", {locale: 'ar-SY'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "ﺎﻠﺴﻳﺩ ﻢﺤﻣﺩ ﻊﻠﻳ ٠١ ٠٢/٠٠٩١ ﺵﺍﺮﻋ ﻱﻮﺴﻓ ﻻ ٢٥٠٦ ﺎﻟﺰﻳ ﺎﻠﻣﺩﺮﺴﻳ");
        test.equal(parsedAddress.locality, "ﺪﻤﺸﻗ");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.country, "سوريا");
        test.equal(parsedAddress.countryCode, "SY");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    
    testParseAddressSYNoCountry: function(test) {
        test.expect(7);
        var parsedAddress = new Address("ﺎﻠﺴﻳﺩ ﻢﺤﻣﺩ ﻊﻠﻳ ٠١ ٠٢/٠٠٩١ ﺵﺍﺮﻋ ﻱﻮﺴﻓ ﻻ ٢٥٠٦ ﺎﻟﺰﻳ ﺎﻠﻣﺩﺮﺴﻳ\n٠١٠٠ ﺪﻤﺸﻗ", {locale: 'ar-SY'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "ﺎﻠﺴﻳﺩ ﻢﺤﻣﺩ ﻊﻠﻳ ٠١ ٠٢/٠٠٩١ ﺵﺍﺮﻋ ﻱﻮﺴﻓ ﻻ ٢٥٠٦ ﺎﻟﺰﻳ ﺎﻠﻣﺩﺮﺴﻳ");
        test.equal(parsedAddress.locality, "ﺪﻤﺸﻗ");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "٠١٠٠");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "SY");
        test.done();
    },
    
    testParseAddressSYManyLines: function(test) {
        test.expect(7);
        var parsedAddress = new Address("ﺵﺍﺮﻋ ﻱﻮﺴﻓ ﻻ ٢٥٠٦  ﺎﻟﺰﻳ ﺎﻠﻣﺩﺮﺴﻳ\nﺎﻠﺴﻳﺩ ﻢﺤﻣﺩ ﻊﻠﻳ ٠١ ٠٢/٠٠٩١\n٠١٠٠\nﺪﻤﺸﻗ\n\nسوريا\n\n\n", {locale: 'ar-SY'});
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "ﺵﺍﺮﻋ ﻱﻮﺴﻓ ﻻ ٢٥٠٦ ﺎﻟﺰﻳ ﺎﻠﻣﺩﺮﺴﻳ, ﺎﻠﺴﻳﺩ ﻢﺤﻣﺩ ﻊﻠﻳ ٠١ ٠٢/٠٠٩١");
        test.equal(parsedAddress.locality, "ﺪﻤﺸﻗ");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "٠١٠٠");
        test.equal(parsedAddress.country, "سوريا");
        test.equal(parsedAddress.countryCode, "SY");
        test.done();
    },
    
    
    testParseAddressSYSuperfluousWhitespace: function(test) {
        test.expect(7);
        var parsedAddress = new Address("\t\t\tﺵﺍﺮﻋ ﻱﻮﺴﻓ ﻻ ٢٥٠٦  ﺎﻟﺰﻳ ﺎﻠﻣﺩﺮﺴﻳ\n\n\tﺎﻠﺴﻳﺩ ﻢﺤﻣﺩ ﻊﻠﻳ ٠١ ٠٢/٠٠٩١\n\n\t٠١٠٠\n\n\tﺪﻤﺸﻗ\n\n\tسوريا\n\n\n", {locale: 'ar-SY'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "ﺵﺍﺮﻋ ﻱﻮﺴﻓ ﻻ ٢٥٠٦ ﺎﻟﺰﻳ ﺎﻠﻣﺩﺮﺴﻳ, ﺎﻠﺴﻳﺩ ﻢﺤﻣﺩ ﻊﻠﻳ ٠١ ٠٢/٠٠٩١");
        test.equal(parsedAddress.locality, "ﺪﻤﺸﻗ");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "٠١٠٠");
        test.equal(parsedAddress.country, "سوريا");
        test.equal(parsedAddress.countryCode, "SY");
        test.done();
    },
    
    
    testParseAddressSYFromUS: function(test) {
        test.expect(7);
        var parsedAddress = new Address("ﺎﻠﺴﻳﺩ ﻢﺤﻣﺩ ﻊﻠﻳ ٠١ ٠٢/٠٠٩١ ﺵﺍﺮﻋ ﻱﻮﺴﻓ ﻻ ٢٥٠٦ ﺎﻟﺰﻳ ﺎﻠﻣﺩﺮﺴﻳ\n٠١٠٠\nﺪﻤﺸﻗ\nSyria", {locale: 'en-US'});
        
        // the country name is in German because this address is for a contact in a German database
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "ﺎﻠﺴﻳﺩ ﻢﺤﻣﺩ ﻊﻠﻳ ٠١ ٠٢/٠٠٩١ ﺵﺍﺮﻋ ﻱﻮﺴﻓ ﻻ ٢٥٠٦ ﺎﻟﺰﻳ ﺎﻠﻣﺩﺮﺴﻳ");
        test.equal(parsedAddress.locality, "ﺪﻤﺸﻗ");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "٠١٠٠");
        test.equal(parsedAddress.country, "Syria");
        test.equal(parsedAddress.countryCode, "SY");
        test.done();
    },
    
    testFormatAddressSY: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "ﺎﻠﺴﻳﺩ ﻢﺤﻣﺩ ﻊﻠﻳ ٠١ ٠٢/٠٠٩١ ﺵﺍﺮﻋ ﻱﻮﺴﻓ ﻻ ٢٥٠٦ ﺎﻟﺰﻳ ﺎﻠﻣﺩﺮﺴﻳ",
            locality: "ﺪﻤﺸﻗ",
            postalCode: "٠١٠٠",
            country: "سوريا",
            countryCode: "SY"
        }, {locale: 'ar-SY'});
        
        var expected = "ﺎﻠﺴﻳﺩ ﻢﺤﻣﺩ ﻊﻠﻳ ٠١ ٠٢/٠٠٩١ ﺵﺍﺮﻋ ﻱﻮﺴﻓ ﻻ ٢٥٠٦ ﺎﻟﺰﻳ ﺎﻠﻣﺩﺮﺴﻳ\n٠١٠٠ ﺪﻤﺸﻗ\nسوريا";
        var formatter = new AddressFmt({locale: 'ar-SY'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressSYFromUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "ﺎﻠﺴﻳﺩ ﻢﺤﻣﺩ ﻊﻠﻳ ٠١ ٠٢/٠٠٩١ ﺵﺍﺮﻋ ﻱﻮﺴﻓ ﻻ ٢٥٠٦ ﺎﻟﺰﻳ ﺎﻠﻣﺩﺮﺴﻳ",
            locality: "ﺪﻤﺸﻗ",
            postalCode: "٠١٠٠",
            country: "Syria",
            countryCode: "SY"
        }, {locale: 'en-US'});
        
        var expected = "ﺎﻠﺴﻳﺩ ﻢﺤﻣﺩ ﻊﻠﻳ ٠١ ٠٢/٠٠٩١ ﺵﺍﺮﻋ ﻱﻮﺴﻓ ﻻ ٢٥٠٦ ﺎﻟﺰﻳ ﺎﻠﻣﺩﺮﺴﻳ\n٠١٠٠ ﺪﻤﺸﻗ\nSyria";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
    
};