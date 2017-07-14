/*
 * testaddress_SD.js - test the address parsing and formatting routines
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

module.exports.testaddress_SD = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testParseAddressSDNormal: function(test) {
        test.expect(7);
        var parsedAddress = new Address("ﺎﻠﺴﻳﺩ ﻢﺤﻣﺩ ﺄﺤﻣﺩ ﻊﻠﻴﻌﻣﺍﺭﺓ ﺪﻳ ﻻ ﺍﻺﺧﺍﺀﺵﺍﺮﻋ ﺂﻟ ﻮﺴﻄﻤﻜﺘﺑ ﺏﺮﻳﺩ ٢١١\n١١١١١\nﺎﻠﺧﺮﻃﻮﻣ\nالسودان", {locale: 'ar-SD'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "ﺎﻠﺴﻳﺩ ﻢﺤﻣﺩ ﺄﺤﻣﺩ ﻊﻠﻴﻌﻣﺍﺭﺓ ﺪﻳ ﻻ ﺍﻺﺧﺍﺀﺵﺍﺮﻋ ﺂﻟ ﻮﺴﻄﻤﻜﺘﺑ ﺏﺮﻳﺩ ٢١١");
        test.equal(parsedAddress.locality, "ﺎﻠﺧﺮﻃﻮﻣ");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "١١١١١");
        test.equal(parsedAddress.country, "السودان");
        test.equal(parsedAddress.countryCode, "SD");
        test.done();
    },
    
    testParseAddressSDNoZip: function(test) {
        test.expect(7);
        var parsedAddress = new Address("ﺎﻠﺴﻳﺩ ﻢﺤﻣﺩ ﺄﺤﻣﺩ ﻊﻠﻴﻌﻣﺍﺭﺓ ﺪﻳ ﻻ ﺍﻺﺧﺍﺀﺵﺍﺮﻋ ﺂﻟ ﻮﺴﻄﻤﻜﺘﺑ ﺏﺮﻳﺩ ٢١١\nﺎﻠﺧﺮﻃﻮﻣ\nالسودان", {locale: 'ar-SD'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "ﺎﻠﺴﻳﺩ ﻢﺤﻣﺩ ﺄﺤﻣﺩ ﻊﻠﻴﻌﻣﺍﺭﺓ ﺪﻳ ﻻ ﺍﻺﺧﺍﺀﺵﺍﺮﻋ ﺂﻟ ﻮﺴﻄﻤﻜﺘﺑ ﺏﺮﻳﺩ ٢١١");
        test.equal(parsedAddress.locality, "ﺎﻠﺧﺮﻃﻮﻣ");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.country, "السودان");
        test.equal(parsedAddress.countryCode, "SD");
        test.ok(typeof(parsedAddress.postalCode) === "undefined");
        test.done();
    },
    
    testParseAddressSDNoCountry: function(test) {
        test.expect(7);
        var parsedAddress = new Address("ﺎﻠﺴﻳﺩ ﻢﺤﻣﺩ ﺄﺤﻣﺩ ﻊﻠﻴﻌﻣﺍﺭﺓ ﺪﻳ ﻻ ﺍﻺﺧﺍﺀﺵﺍﺮﻋ ﺂﻟ ﻮﺴﻄﻤﻜﺘﺑ ﺏﺮﻳﺩ ٢١١\n١١١١١\nﺎﻠﺧﺮﻃﻮﻣ", {locale: 'ar-SD'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "ﺎﻠﺴﻳﺩ ﻢﺤﻣﺩ ﺄﺤﻣﺩ ﻊﻠﻴﻌﻣﺍﺭﺓ ﺪﻳ ﻻ ﺍﻺﺧﺍﺀﺵﺍﺮﻋ ﺂﻟ ﻮﺴﻄﻤﻜﺘﺑ ﺏﺮﻳﺩ ٢١١");
        test.equal(parsedAddress.locality, "ﺎﻠﺧﺮﻃﻮﻣ");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "١١١١١");
        test.ok(typeof(parsedAddress.country) === "undefined");
        test.equal(parsedAddress.countryCode, "SD");
        test.done();
    },
    
    testParseAddressSDManyLines: function(test) {
        test.expect(6);
        var parsedAddress = new Address("ﻻ ﺍﻺﺧﺍﺀﺵﺍﺮﻋ ﺂﻟ ﻮﺴﻄﻤﻜﺘﺑ ﺏﺮﻳﺩ ٢١١\nﺎﻠﺴﻳﺩ ﻢﺤﻣﺩ ﺄﺤﻣﺩ ﻊﻠﻴﻌﻣﺍﺭﺓ ﺪﻳ\n١١١١١\nﺎﻠﺧﺮﻃﻮﻣ\n\nالسودان\n\n\n", {locale: 'ar-OM'});
        test.equal(parsedAddress.streetAddress, "ﻻ ﺍﻺﺧﺍﺀﺵﺍﺮﻋ ﺂﻟ ﻮﺴﻄﻤﻜﺘﺑ ﺏﺮﻳﺩ ٢١١, ﺎﻠﺴﻳﺩ ﻢﺤﻣﺩ ﺄﺤﻣﺩ ﻊﻠﻴﻌﻣﺍﺭﺓ ﺪﻳ");
        test.equal(parsedAddress.locality, "ﺎﻠﺧﺮﻃﻮﻣ");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "١١١١١");
        test.equal(parsedAddress.country, "السودان");
        test.equal(parsedAddress.countryCode, "SD");
        test.done();
    },
    
    testParseAddressSDOneLine: function(test) {
        test.expect(7);
        var parsedAddress = new Address("ﻻ ﺍﻺﺧﺍﺀﺵﺍﺮﻋ ﺂﻟ ﻮﺴﻄﻤﻜﺘﺑ ﺏﺮﻳﺩ ٢١١ ,  ﺎﻠﺴﻳﺩ ﻢﺤﻣﺩ ﺄﺤﻣﺩ ﻊﻠﻴﻌﻣﺍﺭﺓ ﺪﻳ , ١١١١١ , ﺎﻠﺧﺮﻃﻮﻣ , السودان", {locale: 'ar-SD'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "ﻻ ﺍﻺﺧﺍﺀﺵﺍﺮﻋ ﺂﻟ ﻮﺴﻄﻤﻜﺘﺑ ﺏﺮﻳﺩ ٢١١, ﺎﻠﺴﻳﺩ ﻢﺤﻣﺩ ﺄﺤﻣﺩ ﻊﻠﻴﻌﻣﺍﺭﺓ ﺪﻳ");
        test.equal(parsedAddress.locality, "ﺎﻠﺧﺮﻃﻮﻣ");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "١١١١١");
        test.equal(parsedAddress.country, "السودان");
        test.equal(parsedAddress.countryCode, "SD");
        test.done();
    },
    
    testParseAddressSDSuperfluousWhitespace: function(test) {
        test.expect(7);
        var parsedAddress = new Address("\t\t\tﻻ ﺍﻺﺧﺍﺀﺵﺍﺮﻋ ﺂﻟ ﻮﺴﻄﻤﻜﺘﺑ ﺏﺮﻳﺩ ٢١١\n\n\tﺎﻠﺴﻳﺩ ﻢﺤﻣﺩ ﺄﺤﻣﺩ ﻊﻠﻴﻌﻣﺍﺭﺓ ﺪﻳ\n\n\t١١١١١\n\n\tﺎﻠﺧﺮﻃﻮﻣ\n\n\tالسودان\n\n\n", {locale: 'ar-SD'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "ﻻ ﺍﻺﺧﺍﺀﺵﺍﺮﻋ ﺂﻟ ﻮﺴﻄﻤﻜﺘﺑ ﺏﺮﻳﺩ ٢١١, ﺎﻠﺴﻳﺩ ﻢﺤﻣﺩ ﺄﺤﻣﺩ ﻊﻠﻴﻌﻣﺍﺭﺓ ﺪﻳ");
        test.equal(parsedAddress.locality, "ﺎﻠﺧﺮﻃﻮﻣ");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "١١١١١");
        test.equal(parsedAddress.country, "السودان");
        test.equal(parsedAddress.countryCode, "SD");
        test.done();
    },
    
    testParseAddressSDNoDelimiters: function(test) {
        test.expect(7);
        var parsedAddress = new Address("ﺎﻠﺴﻳﺩ ﻢﺤﻣﺩ ﺄﺤﻣﺩ ﻊﻠﻴﻌﻣﺍﺭﺓ ﺪﻳ ﻻ ﺍﻺﺧﺍﺀﺵﺍﺮﻋ ﺂﻟ ﻮﺴﻄﻤﻜﺘﺑ ﺏﺮﻳﺩ ٢١١ ١١١١١  ﺎﻠﺧﺮﻃﻮﻣ السودان", {locale: 'ar-SD'});
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "ﺎﻠﺴﻳﺩ ﻢﺤﻣﺩ ﺄﺤﻣﺩ ﻊﻠﻴﻌﻣﺍﺭﺓ ﺪﻳ ﻻ ﺍﻺﺧﺍﺀﺵﺍﺮﻋ ﺂﻟ ﻮﺴﻄﻤﻜﺘﺑ ﺏﺮﻳﺩ ٢١١");
        test.equal(parsedAddress.locality, "ﺎﻠﺧﺮﻃﻮﻣ");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "١١١١١");
        test.equal(parsedAddress.country, "السودان");
        test.equal(parsedAddress.countryCode, "SD");
        test.done();
    },
    
    testParseAddressSDFromUS: function(test) {
        test.expect(7);
        var parsedAddress = new Address("ﺎﻠﺴﻳﺩ ﻢﺤﻣﺩ ﺄﺤﻣﺩ ﻊﻠﻴﻌﻣﺍﺭﺓ ﺪﻳ ﻻ ﺍﻺﺧﺍﺀﺵﺍﺮﻋ ﺂﻟ ﻮﺴﻄﻤﻜﺘﺑ ﺏﺮﻳﺩ ٢١١\n١١١١١\nﺎﻠﺧﺮﻃﻮﻣ\nSudan", {locale: 'en-US'});
        
        // the country name is in German because this address is for a contact in a German database
        
        test.ok(typeof(parsedAddress) !== "undefined");
        test.equal(parsedAddress.streetAddress, "ﺎﻠﺴﻳﺩ ﻢﺤﻣﺩ ﺄﺤﻣﺩ ﻊﻠﻴﻌﻣﺍﺭﺓ ﺪﻳ ﻻ ﺍﻺﺧﺍﺀﺵﺍﺮﻋ ﺂﻟ ﻮﺴﻄﻤﻜﺘﺑ ﺏﺮﻳﺩ ٢١١");
        test.equal(parsedAddress.locality, "ﺎﻠﺧﺮﻃﻮﻣ");
        test.ok(typeof(parsedAddress.region) === "undefined");
        test.equal(parsedAddress.postalCode, "١١١١١");
        test.equal(parsedAddress.country, "Sudan");
        test.equal(parsedAddress.countryCode, "SD");
        test.done();
    },
    
    testFormatAddressSD: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "ﺎﻠﺴﻳﺩ ﻢﺤﻣﺩ ﺄﺤﻣﺩ ﻊﻠﻴﻌﻣﺍﺭﺓ ﺪﻳ ﻻ ﺍﻺﺧﺍﺀﺵﺍﺮﻋ ﺂﻟ ﻮﺴﻄﻤﻜﺘﺑ ﺏﺮﻳﺩ ٢١١",
            locality: "ﺎﻠﺧﺮﻃﻮﻣ",
            postalCode: "١١١١١",
            country: "السودان",
            countryCode: "SD"
        }, {locale: 'ar-SD'});
        
        var expected = "ﺎﻠﺴﻳﺩ ﻢﺤﻣﺩ ﺄﺤﻣﺩ ﻊﻠﻴﻌﻣﺍﺭﺓ ﺪﻳ ﻻ ﺍﻺﺧﺍﺀﺵﺍﺮﻋ ﺂﻟ ﻮﺴﻄﻤﻜﺘﺑ ﺏﺮﻳﺩ ٢١١\n١١١١١\nﺎﻠﺧﺮﻃﻮﻣ\nالسودان";
        var formatter = new AddressFmt({locale: 'ar-SD'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    },
    
    testFormatAddressSDFromUS: function(test) {
        test.expect(1);
        var parsedAddress = new Address({
            streetAddress: "ﺎﻠﺴﻳﺩ ﻢﺤﻣﺩ ﺄﺤﻣﺩ ﻊﻠﻴﻌﻣﺍﺭﺓ ﺪﻳ ﻻ ﺍﻺﺧﺍﺀﺵﺍﺮﻋ ﺂﻟ ﻮﺴﻄﻤﻜﺘﺑ ﺏﺮﻳﺩ ٢١١",
            locality: "ﺎﻠﺧﺮﻃﻮﻣ",
            postalCode: "١١١١١",
            country: "Sudan",
            countryCode: "SD"
        }, {locale: 'en-US'});
        
        var expected = "ﺎﻠﺴﻳﺩ ﻢﺤﻣﺩ ﺄﺤﻣﺩ ﻊﻠﻴﻌﻣﺍﺭﺓ ﺪﻳ ﻻ ﺍﻺﺧﺍﺀﺵﺍﺮﻋ ﺂﻟ ﻮﺴﻄﻤﻜﺘﺑ ﺏﺮﻳﺩ ٢١١\n١١١١١\nﺎﻠﺧﺮﻃﻮﻣ\nSudan";
        var formatter = new AddressFmt({locale: 'en-US'});
        test.equal(formatter.format(parsedAddress), expected);
        test.done();
    }
    
};